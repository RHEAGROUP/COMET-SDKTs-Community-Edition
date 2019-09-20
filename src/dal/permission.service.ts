/**
 * @file    permission.service.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2016  RHEA System S.A.
 */

import {Dto} from '../dto/autogen/dto.generated';
import {Utils} from '../utils/utils';
import {Metadata} from '../dto/autogen/metadata/thing.metadata.generated';
import {Session} from './session';

/**
 * The permission service checks person and participant permissions.
 */
export class PermissionService {

  private userSession: Session;

  constructor(userSession: Session) {
    this.userSession = userSession;
  }

  /**
   * Returns whether a Write operation can be performed by the active user on the current Thing.
   * based on the supplied Type. The Type ultimately determines the access.
   * @param thing The Thing to write, or the container if the permissions are based on the container.
   * @param classKind The ClassKind of the Thing to write, or the container if the permissions are based on the container.
   * @return True if Write operation can be performed.
   */
  public canWrite(thing: Dto.Thing, classKind?: Dto.ClassKind): boolean {
    if (thing == null) {
      return false;
    }

    let topContainerClassKind = thing.topContainer.classKind;

    switch (topContainerClassKind) {
      case Dto.ClassKind.SiteDirectory:
        return this.canWriteSiteDirectoryContainedThing(thing, classKind);
      case Dto.ClassKind.EngineeringModel:
        return this.canWriteEngineeringModelContainedThing(thing, classKind);
    }

    return false;
  }

  /**
   * Returns whether a Write operation can be performed by the active user on the current SiteDirectory contained
   * Thing based on the supplied ClassKind.
   * @param thing The Thing to write, or the container if the permissions are based on the container.
   * @param classKind The ClassKind of the Thing to write, or the container if the permissions are based on the container.
   * @return True if Write operation can be performed.
   */
  private canWriteSiteDirectoryContainedThing(thing: Dto.Thing, classKind?: Dto.ClassKind): boolean {
    const person = this.userSession.activePerson;

    const personRole = this.userSession
      .get<Dto.PersonRole>(Dto.ClassKind[Dto.ClassKind.PersonRole], person.role, null);
    if (Utils.isUndefinedOrNull(personRole)) {
      return false;
    }

    let thingClassKind = thing.classKind;

    if (!Utils.isUndefinedOrNull(classKind) && thingClassKind !== classKind) {
      thingClassKind = classKind;
    }

    // Find all permissions for the given Thing's ClassKind
    const permissions = this.userSession.retrieve<Dto.PersonPermission>(Dto.ClassKind.PersonPermission, null)
      .filter(pp => pp.objectClass === thingClassKind);

    // Check whether a person has a permission for the given Thing's ClassKind
    let personAccessRightKind = null;
    if (permissions.length > 0) {
      for (let permission of permissions) {
        if (personRole.personPermission.indexOf(permission.iid) !== -1) {
          personAccessRightKind = permission.accessRight;
          break;
        }
      }
    }

    // Find a default permission for the given Thing's ClassKind
    if (personAccessRightKind == null) {
      personAccessRightKind = Dto.ClassKind[Dto.ClassKind[thingClassKind]].getDefaultPersonPermission;
    }

    switch (personAccessRightKind) {
      case Dto.PersonAccessRightKind.SAME_AS_CONTAINER:
        return this.canWrite(thing.container);
      case Dto.PersonAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canWrite(thing,
          Dto.ClassKind[Metadata.getMetadata(Dto.ClassKind[thing.classKind]).baseTypeName]);
      case Dto.PersonAccessRightKind.MODIFY:
        return true;
      case Dto.PersonAccessRightKind.MODIFY_IF_PARTICIPANT:
        if (thing.classKind === Dto.ClassKind.EngineeringModelSetup ||
          thing.container.classKind === Dto.ClassKind.EngineeringModelSetup) {
          let engineeringModelSetupIid = thing.classKind === Dto.ClassKind.EngineeringModelSetup
            ? thing.iid
            : thing.container.iid;

          return this.userSession.getActivePersonParticipant(engineeringModelSetupIid) != null;
        }

        if (thing.classKind === Dto.ClassKind.SiteReferenceDataLibrary) {
          // Find all EngineeringModelSetups
          let engineeringModelSetups = this.userSession
            .retrieve<Dto.EngineeringModelSetup>(Dto.ClassKind.EngineeringModelSetup, null);
          // If any EngineeringModelSetup is found then check it
          if (engineeringModelSetups.length > 0) {
            // Iterate all found EngineeringModelSetups. On each iteration check if a person is a participant
            // and then check whether EngineeringModelSetup contains the thing
            for (let ems of engineeringModelSetups) {
              if (this.userSession.getActivePersonParticipant(ems.iid) != null) {
                if (this.userSession.getEngineeringModelSetupRdlChain(ems).filter(rdl => rdl.iid === thing.iid).length > 0) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      case Dto.PersonAccessRightKind.MODIFY_OWN_PERSON:
        return thing === person;
      default:
        return false;
    }
  }

  /**
   * Returns whether a Write operation can be performed by the active user on the current EngineeringModel contained
   * Thing based on the supplied ClassKind.
   * @param thing The Thing to write, or the container if the permissions are based on the container.
   * @param classKind The ClassKind of the Thing to write, or the container if the permissions are based on the container.
   * @return True if Write operation can be performed.
   */
  private canWriteEngineeringModelContainedThing(thing: Dto.Thing, classKind?: Dto.ClassKind): boolean {
    const engineeringModel = <Dto.EngineeringModel>thing.topContainer;
    const iteration = this.userSession
      .retrieve<Dto.Iteration>(Dto.ClassKind.Iteration, thing.iterationContainerId)[0];
    if (iteration != null) {
      let iterationSetup = this.userSession
        .retrieve<Dto.IterationSetup>(Dto.ClassKind.IterationSetup, iteration.iid)[0];
      if (iterationSetup != null && iterationSetup.frozenOn != null) {
        return false;
      }
    } else {
      return false;
    }

    const participant = this.userSession.getActivePersonParticipant(engineeringModel.engineeringModelSetup);

    if (participant == null) {
      return false;
    }

    const participantRole = this.userSession
      .get<Dto.ParticipantRole>(Dto.ClassKind[Dto.ClassKind.ParticipantRole], participant.role, null);
    if (participantRole == null) {
      return false;
    }

    let thingClassKind = thing.classKind;

    if (!Utils.isUndefinedOrNull(classKind) && thingClassKind !== classKind) {
      thingClassKind = classKind;
    }

    // Find all permissions for the given Thing's ClassKind
    const permissions = this.userSession
      .retrieve<Dto.ParticipantPermission>(Dto.ClassKind.ParticipantPermission, null)
      .filter(pp => pp.objectClass === thingClassKind);

    // Check whether a person has a permission for the given Thing's ClassKind
    let participantAccessRightKind = null;
    if (permissions.length > 0) {
      for (let permission of permissions) {
        if (participantRole.participantPermission.indexOf(permission.iid) !== -1) {
          participantAccessRightKind = permission.accessRight;
          break;
        }
      }
    }

    // Find a default permission for the given Thing's ClassKind
    if (participantAccessRightKind == null) {
      participantAccessRightKind = Dto.ClassKind[Dto.ClassKind[thingClassKind]].getDefaultParticipantPermission;
    }

    switch (participantAccessRightKind) {
      case Dto.ParticipantAccessRightKind.SAME_AS_CONTAINER:
        return this.canWrite(thing.container);
      case Dto.ParticipantAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canWrite(thing,
          Dto.ClassKind[Metadata.getMetadata(Dto.ClassKind[thing.classKind]).baseTypeName]);
      case Dto.ParticipantAccessRightKind.MODIFY:
        return true;
      case Dto.ParticipantAccessRightKind.MODIFY_IF_OWNER:
        const ownedThing: any = thing;
        if (ownedThing.owner) {
          return this.canWriteIfParticipantOwned(<Dto.Thing>ownedThing, ownedThing.owner);
        }
        break;

      default:
        return false;
    }
  }

  /**
   * Compute the write-permission for an OwnedThing contained in an EngineeringModel.
   * @param thing The Thing to write that is contained in an EngineeringModel.
   * @param ownerIid The iid of the owner of the supplied thing.
   * @return True if Write operation can be performed.
   */
  private canWriteIfParticipantOwned(thing: Dto.Thing, ownerIid: string): boolean {
    const engineeringModel = <Dto.EngineeringModel>thing.topContainer;
    const participant = this.userSession.getActivePersonParticipant(engineeringModel.engineeringModelSetup);

    return participant.selectedDomain === ownerIid;
  }
}
