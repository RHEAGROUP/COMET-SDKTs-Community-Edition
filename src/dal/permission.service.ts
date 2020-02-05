/**
 * @file    permission.service.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2015 - 2020  RHEA System S.A.
 */

import {Dto} from '../dto/autogen/dto.generated';
import {Utils} from '../utils/utils';
import {Metadata} from '../dto/autogen/metadata/thing.metadata.generated';
import {Session} from './session';
import PersonAccessRightKind = Dto.PersonAccessRightKind;
import SiteReferenceDataLibrary = Dto.SiteReferenceDataLibrary;
import ParticipantAccessRightKind = Dto.ParticipantAccessRightKind;
import Participant = Dto.Participant;
import getDefaultPersonPermission = Metadata.getDefaultPersonPermission;
import getDefaultParticipantPermission = Metadata.getDefaultParticipantPermission;
import getBaseType = Metadata.getBaseType;

/**
 * The permission service checks person and participant permissions.
 */
export class PermissionService {

  private userSession: Session;

  constructor(userSession: Session) {
    this.userSession = userSession;
  }

  /**
   * Returns whether a Read operation can be performed by the active user on the current
   * {@link Dto.Thing} based on the supplied {@link ClassKind}. The {@link ClassKind} ultimately determines the
   * access.
   *
   * @param thing The {@link Thing} to read, or the container if the permissions are based on the
   * container.
   * @param classKind The {@link ClassKind} that ultimately determines the permissions.
   * @return True if Read operation can be performed.
   */
  public canRead(thing: Dto.Thing, classKind?: Dto.ClassKind): boolean {
    if (thing == null) {
      return false;
    }

    if (classKind === undefined) {
      classKind = thing.classKind;
    }

    let topContainerClassKind = thing.topContainer.classKind;

    this.checkOwnedThing(thing);

    switch (topContainerClassKind) {
      case Dto.ClassKind.SiteDirectory:
        return this.canReadSiteDirectoryContainedThing(thing, classKind);
      case Dto.ClassKind.EngineeringModel:
        return this.canReadEngineeringModelContainedThing(thing, classKind);
    }

    return false;
  }

  /**
   * Returns whether a Read operation can be performed by the active user on the current
   * {@link SiteDirectory} contained. {@link Thing} based on the supplied {@link ClassKind}. The {@link ClassKind}
   * ultimately determines the access.
   *
   * @param thing The {@link Thing} to read, or the container if the permissions are based on the
   * container.
   * @param classKind The {@link ClassKind} that ultimately determines the permissions.
   * @return True if Read operation can be performed.
   */
  private canReadSiteDirectoryContainedThing(thing: Dto.Thing, classKind: Dto.ClassKind): boolean {
    if (!this.isPersonActiveAndHasRole()) {
      return false;
    }

    switch (this.getPersonPermission(thing, classKind)) {
      case PersonAccessRightKind.SAME_AS_CONTAINER:
        return this.canRead(thing.container, thing.container.classKind);
      case PersonAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canRead(thing, Dto.ClassKind[getBaseType(Dto.ClassKind[classKind])]);
      case PersonAccessRightKind.READ:
      case PersonAccessRightKind.MODIFY:
        return true;
      case PersonAccessRightKind.MODIFY_IF_PARTICIPANT:
      case PersonAccessRightKind.READ_IF_PARTICIPANT:
        if (thing.classKind === Dto.ClassKind.EngineeringModelSetup ||
          (thing.container !== null && thing.container.classKind === Dto.ClassKind.EngineeringModelSetup)) {
          return this.hasParticipantPermissionForEngineeringModelSetup(thing);
        }

        if (thing instanceof SiteReferenceDataLibrary) {
          // Find all EngineeringModelSetups
          let engineeringModelSetups = this.userSession
          .retrieve<Dto.EngineeringModelSetup>(Dto.ClassKind.EngineeringModelSetup, null);
          // If any EngineeringModelSetup is found then check it
          if (engineeringModelSetups.length > 0) {
            // Iterate all found EngineeringModelSetups. On each iteration check whether EngineeringModelSetup contains the thing
            for (let ems of engineeringModelSetups) {
              if (this.userSession.getEngineeringModelSetupRdlChain(ems).filter(rdl => rdl.iid === thing.iid).length > 0) {
                return true;
              }
            }
          }
        }

        return false;
      case PersonAccessRightKind.MODIFY_OWN_PERSON:
        return thing == this.userSession.activePerson;
      default:
        return false;
    }
  }

  /**
   * Returns whether a Read operation can be performed by the active user on the current
   * {@link EngineeringModel} contained {@link Thing} based on the supplied {@link ClassKind}.
   * The {@link ClassKind} ultimately determines the access.
   *
   * @param thing The {@link Thing} to read, or the container if the permissions are based on the
   * container.
   * @param classKind The {@link ClassKind} that ultimately determines the permissions.
   * @return True if Read operation can be performed.
   */
  private canReadEngineeringModelContainedThing(thing: Dto.Thing, classKind: Dto.ClassKind): boolean {
    const engineeringModel = <Dto.EngineeringModel> thing.topContainer;
    const participant = this.userSession.getActivePersonParticipant(engineeringModel.engineeringModelSetup);

    if (participant == null) {
      return false;
    }

    const participantRole = this.userSession
    .get<Dto.ParticipantRole>(Dto.ClassKind[Dto.ClassKind.ParticipantRole], participant.role, null);
    if (participantRole == null) {
      return false;
    }

    switch (this.getParticipantPermission(thing, classKind, participant)) {
      case ParticipantAccessRightKind.SAME_AS_CONTAINER:
        return this.canRead(thing.container, thing.container.classKind);
      case ParticipantAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canRead(thing, Dto.ClassKind[getBaseType(Dto.ClassKind[classKind])]);
      case ParticipantAccessRightKind.MODIFY:
      case ParticipantAccessRightKind.MODIFY_IF_OWNER:
        return true;
      default:
        return false;
    }
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

    if (classKind === undefined) {
      classKind = thing.classKind;
    }

    this.checkOwnedThing(thing);

    const topContainerClassKind = thing.topContainer.classKind;

    switch (topContainerClassKind) {
      case Dto.ClassKind.SiteDirectory:
        return this.canWriteSiteDirectoryContainedThing(thing, classKind);
      case Dto.ClassKind.EngineeringModel:
        return this.canWriteEngineeringModelContainedThing(thing, classKind);
      default:
        return false;
    }
  }

  /**
   * Returns whether a Write operation can be performed by the active user on the current SiteDirectory contained
   * Thing based on the supplied ClassKind.
   * @param thing The Thing to write, or the container if the permissions are based on the container.
   * @param classKind The ClassKind of the Thing to write, or the container if the permissions are based on the container.
   * @return True if Write operation can be performed.
   */
  private canWriteSiteDirectoryContainedThing(thing: Dto.Thing, classKind: Dto.ClassKind): boolean {
    if (!this.isPersonActiveAndHasRole()) {
      return false;
    }

    switch (this.getPersonPermission(thing, classKind)) {
      case Dto.PersonAccessRightKind.SAME_AS_CONTAINER:
        return this.canWrite(thing.container, thing.container.classKind);
      case Dto.PersonAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canWrite(thing,
          Dto.ClassKind[getBaseType(Dto.ClassKind[classKind])]);
      case Dto.PersonAccessRightKind.MODIFY:
        return true;
      case Dto.PersonAccessRightKind.MODIFY_IF_PARTICIPANT:
        if (thing.classKind === Dto.ClassKind.EngineeringModelSetup ||
          (thing.container !== null && thing.container.classKind === Dto.ClassKind.EngineeringModelSetup)) {
          return this.hasParticipantPermissionForEngineeringModelSetup(thing);
        }

        if (thing.classKind === Dto.ClassKind.SiteReferenceDataLibrary) {
          // Find all EngineeringModelSetups
          let engineeringModelSetups = this.userSession
          .retrieve<Dto.EngineeringModelSetup>(Dto.ClassKind.EngineeringModelSetup, null);
          // If any EngineeringModelSetup is found then check it
          if (engineeringModelSetups.length > 0) {
            // Iterate all found EngineeringModelSetups. On each iteration check whether EngineeringModelSetup contains the thing
            for (let ems of engineeringModelSetups) {
              if (this.userSession.getEngineeringModelSetupRdlChain(ems).filter(rdl => rdl.iid === thing.iid).length > 0) {
                return true;
              }
            }
          }
        }

        return false;
      case Dto.PersonAccessRightKind.MODIFY_OWN_PERSON:
        return thing === this.userSession.activePerson;
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
  private canWriteEngineeringModelContainedThing(thing: Dto.Thing, classKind: Dto.ClassKind): boolean {
    const engineeringModel = <Dto.EngineeringModel> thing.topContainer;
    const iteration = this.userSession
    .retrieve<Dto.Iteration>(Dto.ClassKind.Iteration, thing.iterationContainerId)[0];
    if (iteration != null) {
      let iterationSetup = this.userSession
      .retrieve<Dto.IterationSetup>(Dto.ClassKind.IterationSetup, iteration.iid)[0];
      if (iterationSetup != null && !Utils.isUndefinedNullOrWhiteSpace(iterationSetup.frozenOn)) {
        return false;
      }
    }

    const participant = this.userSession.getActivePersonParticipant(engineeringModel.engineeringModelSetup);

    if (participant == null || Utils.isUndefinedOrNull(participant.role)) {
      return false;
    }

    switch (this.getParticipantPermission(thing, classKind, participant)) {
      case Dto.ParticipantAccessRightKind.SAME_AS_CONTAINER:
        return this.canWrite(thing.container, thing.container.classKind);
      case Dto.ParticipantAccessRightKind.SAME_AS_SUPERCLASS:
        return this.canWrite(thing,
          Dto.ClassKind[getBaseType(Dto.ClassKind[classKind])]);
      case Dto.ParticipantAccessRightKind.MODIFY:
        return true;
      case Dto.ParticipantAccessRightKind.MODIFY_IF_OWNER:
        const ownedThing: any = thing;
        if (ownedThing.owner) {
          return this.canWriteIfParticipantOwned(<Dto.Thing> ownedThing, ownedThing.owner);
        }
        break;

      default:
        return false;
    }
  }

  /**
   * Checks if thing is an OwnedThing without an actual Owner.
   *
   * @param thing The {@link Thing} to check.
   */
  private checkOwnedThing(thing: Dto.Thing) {
    let ownerId;
    try {
      ownerId = Metadata.getMetadata(Dto.ClassKind[thing.classKind]).getValue(thing, 'owner');
    } catch (e) {
      // It should not owned thing, so just ignore error and return
      return;
    }

    if (Utils.isUndefinedNullOrWhiteSpace(ownerId)) {
      throw new Error(`Owner of ${Dto.ClassKind[thing.classKind]} with id ${thing.iid} is empty.`);
    }
  }

  /**
   * Returns whether an active {@link Person} is present in the current {@link Session} and it has a
   * {@link PersonRole}.
   *
   * @return True if an active {@link Person} is present and has a {@link PersonRole}.
   */
  private isPersonActiveAndHasRole(): boolean {
    if (this.userSession.activePerson == null) {
      return false;
    }

    return !Utils.isUndefinedOrNull(this.userSession.activePerson.role);
  }

  /**
   * Returns {@link PersonAccessRightKind} for the active {@link Person} concerning the supplied
   * {@link Thing}. {@link Thing} based on the supplied {@link ClassKind}. The {@link ClassKind} ultimately
   * determines the access.
   *
   * @param thing The {@link Thing} to read/write, or the container if the permissions are based on
   * the container.
   * @param classKind The {@link ClassKind} that ultimately determines the permissions.
   * @return {@link PersonAccessRightKind} concerning the given {@link Thing}.
   */
  private getPersonPermission(thing: Dto.Thing, classKind: Dto.ClassKind): PersonAccessRightKind {
    const person = this.userSession.activePerson;

    const personRole = this.userSession
    .get<Dto.PersonRole>(Dto.ClassKind[Dto.ClassKind.PersonRole], person.role, null);

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
      personAccessRightKind = getDefaultPersonPermission(Dto.ClassKind[thingClassKind]);
    }

    return personAccessRightKind;
  }

  /**
   * Returns {@link ParticipantAccessRightKind} for the active {@link Participant} concerning the
   * supplied {@link Thing}. {@link Thing} based on the supplied {@link ClassKind}. The {@link ClassKind}
   * ultimately determines the access.
   *
   * @param thing The {@link Thing} to read/write, or the container if the permissions are based on
   * the container.
   * @param classKind The {@link ClassKind} that ultimately determines the permissions.
   * @param participant The {@link Participant} to find permission for.
   * @return {@link ParticipantAccessRightKind} concerning the given {@link Thing}.
   */
  private getParticipantPermission(thing: Dto.Thing, classKind: Dto.ClassKind,
                                   participant: Participant): ParticipantAccessRightKind {
    const participantRole = this.userSession
    .get<Dto.ParticipantRole>(Dto.ClassKind[Dto.ClassKind.ParticipantRole], participant.role, null);

    let thingClassKind = thing.classKind;

    if (!Utils.isUndefinedOrNull(classKind) && thingClassKind !== classKind) {
      thingClassKind = classKind;
    }

    // Find all permissions for the given Thing's ClassKind
    const permissions = this.userSession
    .retrieve<Dto.ParticipantPermission>(Dto.ClassKind.ParticipantPermission, null)
    .filter(pp => pp.objectClass === thingClassKind);

    // Check whether a participant has a permission for the given Thing's ClassKind
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
      participantAccessRightKind = getDefaultParticipantPermission(Dto.ClassKind[thingClassKind]);
    }

    return participantAccessRightKind;
  }

  /**
   * Returns whether an active {@link Person} has a permission to operate with the supplied {@link
    * Thing}.
   *
   * @param thing The {@link Thing} that should be of type {@code EngineeringModelSetup} or its
   * container of this type.
   * @return True if an active {@link Person} has a corresponding {@link Participant} in the
   * supplied {@link Thing}.
   */
  private hasParticipantPermissionForEngineeringModelSetup(thing: Dto.Thing): boolean {
    let engineeringModelSetupIid = thing.classKind === Dto.ClassKind.EngineeringModelSetup
      ? thing.iid
      : thing.container.iid;

    return this.userSession.getActivePersonParticipant(engineeringModelSetupIid) != null;
  }

  /**
   * Compute the write-permission for an OwnedThing contained in an EngineeringModel.
   * @param thing The Thing to write that is contained in an EngineeringModel.
   * @param ownerIid The iid of the owner of the supplied thing.
   * @return True if Write operation can be performed.
   */
  private canWriteIfParticipantOwned(thing: Dto.Thing, ownerIid: string): boolean {
    if (thing.container !== null && thing.container.classKind === Dto.ClassKind.EngineeringModel) {
      const openIterations = this.userSession.openIterations;
      for (let key in openIterations) {
        const iteration = this.userSession.get<Dto.Iteration>(Dto.ClassKind[Dto.ClassKind.Iteration], key, key);
        if (iteration.container === thing.container) {
          return true;
        }
      }
    }

    const participant = this.getThingParticipant(thing);

    return participant !== null && participant.domain.indexOf(ownerIid) !== -1;
  }

  /**
   * Get the user's 'participant information for the Iteration where the thing input parameter
   * belongs to.
   *
   * @param thing General Thing for which the user's participant information is retrieved.
   * @return {@link Participant} if found, otherwise null.
   */
  private getThingParticipant(thing: Dto.Thing): Participant {
    const participation = this.userSession.openIterations[thing.iterationContainerId];

    if (!Utils.isUndefinedOrNull(participation)
      && !Utils.isUndefinedOrNull(participation[0])
      && !Utils.isUndefinedOrNull(participation[1])) {
      return participation[1];
    }

    return null;
  }
}
