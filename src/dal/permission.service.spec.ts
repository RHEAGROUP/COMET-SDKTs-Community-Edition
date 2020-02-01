/**
 * @file    permission.service.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2020  RHEA System S.A.
 */

import {Dto} from '../dto/autogen/dto.generated';
import {PermissionService} from './permission.service';
import {Session} from './session';
import {GuidHelper} from '../utils/guid.helper';
import {UserSessionService} from './user-session.service';
import Person = Dto.Person;
import CommonFileStore = Dto.CommonFileStore;
import RequirementsSpecification = Dto.RequirementsSpecification;
import Requirement = Dto.Requirement;
import ParameterValueSet = Dto.ParameterValueSet;
import Parameter = Dto.Parameter;
import BinaryRelationship = Dto.BinaryRelationship;
import ElementDefinition = Dto.ElementDefinition;
import BooleanParameterType = Dto.BooleanParameterType;
import SiteReferenceDataLibrary = Dto.SiteReferenceDataLibrary;
import Definition = Dto.Definition;
import Iteration = Dto.Iteration;
import ParticipantRole = Dto.ParticipantRole;
import Participant = Dto.Participant;
import PersonRole = Dto.PersonRole;
import DomainOfExpertise = Dto.DomainOfExpertise;
import EngineeringModel = Dto.EngineeringModel;
import IterationSetup = Dto.IterationSetup;
import EngineeringModelSetup = Dto.EngineeringModelSetup;
import SiteDirectory = Dto.SiteDirectory;
import ClassKind = Dto.ClassKind;
import PersonAccessRightKind = Dto.PersonAccessRightKind;
import PersonPermission = Dto.PersonPermission;
import ParticipantPermission = Dto.ParticipantPermission;
import ParticipantAccessRightKind = Dto.ParticipantAccessRightKind;

describe('Permission service tests', () => {

  let session: Session;
  let sitedir: SiteDirectory;
  let modelsetup: EngineeringModelSetup;
  let iterationSetup: IterationSetup;
  let person: Person;
  let person2: Person;
  let domain1: DomainOfExpertise;
  let domain2: DomainOfExpertise;
  let personRole: PersonRole;
  let participant: Participant;
  let participantRole: ParticipantRole;
  let model: EngineeringModel;
  let iteration: Iteration;
  let definition: Definition;
  let srdl: SiteReferenceDataLibrary;
  let booleanpt: BooleanParameterType;
  let elementDef: ElementDefinition;
  let relationship: BinaryRelationship;
  let parameter: Parameter;
  let valueset: ParameterValueSet;
  let requirement: Requirement;
  let requirementsSpecification: RequirementsSpecification;

  let permissionService: PermissionService;
  let commonFileStore: CommonFileStore;

  beforeEach(() => {
    session = new UserSessionService(null, null);
    sitedir = new SiteDirectory(GuidHelper.generateGuid(), 0, true);
    modelsetup = new EngineeringModelSetup(GuidHelper.generateGuid(), 0, true);
    iterationSetup = new IterationSetup(GuidHelper.generateGuid(), 0, true);
    person = new Person(GuidHelper.generateGuid(), 0, true);
    domain1 = new DomainOfExpertise(GuidHelper.generateGuid(), 0, true);
    domain2 = new DomainOfExpertise(GuidHelper.generateGuid(), 0, true);
    personRole = new PersonRole(GuidHelper.generateGuid(), 0, true);
    participant = new Participant(GuidHelper.generateGuid(), 0, true);
    participantRole = new ParticipantRole(GuidHelper.generateGuid(), 0, true);
    model = new EngineeringModel(GuidHelper.generateGuid(), 0, true);
    model.engineeringModelSetup = modelsetup.iid;
    iteration = new Iteration(GuidHelper.generateGuid(), 0, true);
    iteration.iterationSetup = iterationSetup.iid;
    definition = new Definition(GuidHelper.generateGuid(), 0, true);
    srdl = new SiteReferenceDataLibrary(GuidHelper.generateGuid(), 0, true);
    booleanpt = new BooleanParameterType(GuidHelper.generateGuid(), 0, true);
    person2 = new Person(GuidHelper.generateGuid(), 0, true);
    elementDef = new ElementDefinition(GuidHelper.generateGuid(), 0, true);
    relationship = new BinaryRelationship(GuidHelper.generateGuid(), 0, true);
    parameter = new Parameter(GuidHelper.generateGuid(), 0, true);
    valueset = new ParameterValueSet(GuidHelper.generateGuid(), 0, true);
    requirementsSpecification = new RequirementsSpecification(GuidHelper.generateGuid(), 0,
      true);
    requirement = new Requirement(GuidHelper.generateGuid(), 0, true);
    commonFileStore = new CommonFileStore(GuidHelper.generateGuid(), 0, true);

    sitedir.model.push(modelsetup.iid);
    sitedir.person.push(person.iid);
    sitedir.person.push(person2.iid);
    sitedir.personRole.push(personRole.iid);
    sitedir.domain.push(domain1.iid);
    sitedir.domain.push(domain2.iid);
    modelsetup.iterationSetup.push(iterationSetup.iid);
    modelsetup.participant.push(participant.iid);
    sitedir.participantRole.push(participantRole.iid);
    model.iteration.push(iteration.iid);
    person.role = personRole.iid;
    participant.person = person.iid;
    participant.role = participantRole.iid;
    participant.domain.push(domain1.iid);
    modelsetup.definition.push(definition.iid);
    sitedir.siteReferenceDataLibrary.push(srdl.iid);
    srdl.parameterType.push(booleanpt.iid);
    iteration.element.push(elementDef.iid);
    iteration.relationship.push(relationship.iid);
    elementDef.parameter.push(parameter.iid);
    parameter.valueSet.push(valueset.iid);

    modelsetup.engineeringModelIid = model.iid;
    iterationSetup.iterationIid = iteration.iid;
    elementDef.owner = domain1.iid;
    relationship.owner = domain1.iid;
    parameter.owner = domain1.iid;
    requirementsSpecification.requirement.push(requirement.iid);
    iteration.requirementsSpecification.push(requirementsSpecification.iid);
    model.commonFileStore.push(commonFileStore.iid);

    modelsetup.container = sitedir;
    iterationSetup.container = modelsetup;
    person.container = sitedir;
    person2.container = sitedir;
    participant.container = modelsetup;
    iteration.container = model;
    definition.container = modelsetup;
    srdl.container = sitedir;
    booleanpt.container = srdl;
    elementDef.container = iteration;
    requirement.container = requirementsSpecification;
    requirementsSpecification.container = iteration;
    relationship.container = iteration;
    parameter.container = elementDef;
    valueset.container = parameter;
    commonFileStore.container = model;

    model.iterationContainerId = null;
    commonFileStore.iterationContainerId = null;
    iteration.iterationContainerId = iteration.iid;
    elementDef.iterationContainerId = iteration.iid;
    requirement.iterationContainerId = iteration.iid;
    requirementsSpecification.iterationContainerId = iteration.iid;
    relationship.iterationContainerId = iteration.iid;
    parameter.iterationContainerId = iteration.iid;
    valueset.iterationContainerId = iteration.iid;

    spyOnProperty(session, 'activePerson').and.returnValue(person);
    spyOn(session, 'get')
    .withArgs(Dto.ClassKind[Dto.ClassKind.Iteration], iteration.iid, iteration.iid).and.returnValue(iteration)
    .withArgs(Dto.ClassKind[Dto.ClassKind.PersonRole], person.role, null).and.returnValue(personRole)
    .withArgs(Dto.ClassKind[Dto.ClassKind.ParticipantRole], participant.role, null).and.returnValue(participantRole);
    permissionService = new PermissionService(session);
  });

  it('Verifies that a person cannot write or read with default permission',
    () => {
      spyOn(session, 'getActivePersonParticipant').and.returnValue(null);

      expect(permissionService.canWrite(sitedir)).toBeFalsy();
      expect(permissionService.canWrite(modelsetup)).toBeFalsy();
      expect(permissionService.canWrite(iterationSetup)).toBeFalsy();
      expect(permissionService.canWrite(person)).toBeFalsy();
      expect(permissionService.canWrite(participant)).toBeFalsy();
      expect(permissionService.canWrite(sitedir, ClassKind.Person)).toBeFalsy();

      expect(permissionService.canWrite(model)).toBeFalsy();
      expect(permissionService.canWrite(iteration)).toBeFalsy();

      expect(permissionService.canRead(sitedir)).toBeFalsy();
      expect(permissionService.canRead(modelsetup)).toBeFalsy();
      expect(permissionService.canRead(iterationSetup)).toBeFalsy();
      expect(permissionService.canRead(person)).toBeFalsy();
      expect(permissionService.canRead(participant)).toBeFalsy();

      expect(permissionService.canRead(model)).toBeFalsy();
      expect(permissionService.canRead(iteration)).toBeFalsy();
    });

  it('Verifies that a person permissions Read and Modify work',
    () => {
      const permission = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.SiteDirectory;
      permission.accessRight = PersonAccessRightKind.READ;
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.PersonPermission, null).and.returnValue([permission]);

      personRole.personPermission.push(permission.iid);
      expect(permissionService.canWrite(sitedir)).toBeFalsy();
      expect(permissionService.canWrite(modelsetup)).toBeFalsy();
      expect(permissionService.canWrite(iterationSetup)).toBeFalsy();
      expect(permissionService.canWrite(person)).toBeFalsy();
      expect(permissionService.canWrite(definition)).toBeFalsy();

      expect(permissionService.canRead(sitedir)).toBeTruthy();
      expect(permissionService.canRead(person)).toBeFalsy();
      expect(permissionService.canRead(definition)).toBeFalsy();

      permission.accessRight = PersonAccessRightKind.MODIFY;
      expect(permissionService.canWrite(sitedir)).toBeTruthy();
      expect(permissionService.canWrite(modelsetup)).toBeFalsy();
      expect(permissionService.canRead(sitedir)).toBeTruthy();
      expect(permissionService.canRead(person)).toBeFalsy();
      expect(permissionService.canWrite(sitedir, ClassKind.EngineeringModel)).toBeFalsy();
      expect(permissionService.canWrite(definition)).toBeFalsy();
      expect(permissionService.canRead(definition)).toBeFalsy();
    });

  it('Verifies that a person same as container permission works',
    () => {
      const permission = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.EngineeringModelSetup;
      permission.accessRight = PersonAccessRightKind.READ;
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.PersonPermission, null).and.returnValue([permission]);

      personRole.personPermission.push(permission.iid);
      expect(permissionService.canRead(modelsetup)).toBeTruthy();
      expect(permissionService.canRead(definition)).toBeTruthy();
      expect(permissionService.canWrite(definition)).toBeFalsy();

      permission.accessRight = PersonAccessRightKind.MODIFY;
      expect(permissionService.canWrite(definition)).toBeTruthy();
      expect(permissionService.canRead(definition)).toBeTruthy();
    });

  it('Verifies that a person same as super class permission works',
    () => {
      expect(permissionService.canRead(booleanpt)).toBeFalsy();
      expect(permissionService.canWrite(booleanpt)).toBeFalsy();

      const permission = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.SiteReferenceDataLibrary;
      permission.accessRight = PersonAccessRightKind.READ;
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.PersonPermission, null).and.returnValue([permission]);

      personRole.personPermission.push(permission.iid);
      expect(permissionService.canRead(booleanpt)).toBeTruthy();
      expect(permissionService.canWrite(booleanpt)).toBeFalsy();
      expect(permissionService.canWrite(srdl, ClassKind.BooleanParameterType)).toBeFalsy();

      permission.accessRight = PersonAccessRightKind.MODIFY;
      expect(permissionService.canRead(booleanpt)).toBeTruthy();
      expect(permissionService.canWrite(booleanpt)).toBeTruthy();
      expect(permissionService.canWrite(srdl, ClassKind.BooleanParameterType)).toBeFalsy();
    });

  it('Verifies that a person modify if own person permission works',
    () => {
      expect(permissionService.canRead(person)).toBeFalsy();
      expect(permissionService.canWrite(person)).toBeFalsy();
      expect(permissionService.canRead(person2)).toBeFalsy();
      expect(permissionService.canWrite(person2)).toBeFalsy();

      const permission = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.Person;
      permission.accessRight = PersonAccessRightKind.MODIFY_OWN_PERSON;
      const permissions = [permission];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.PersonPermission, null).and.returnValue(permissions);

      personRole.personPermission.push(permission.iid);
      expect(permissionService.canRead(person)).toBeTruthy();
      expect(permissionService.canWrite(person)).toBeTruthy();

      expect(permissionService.canRead(person2)).toBeFalsy();
      expect(permissionService.canWrite(person2)).toBeFalsy();

      const permission1 = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission1.objectClass = ClassKind.SiteDirectory;
      permission1.accessRight = PersonAccessRightKind.MODIFY_OWN_PERSON;
      permissions.push(permission1);

      personRole.personPermission.push(permission1.iid);
      expect(permissionService.canRead(sitedir)).toBeFalsy();
      expect(permissionService.canWrite(sitedir)).toBeFalsy();

      expect(permissionService.canRead(person)).toBeTruthy();
      expect(permissionService.canWrite(person)).toBeTruthy();
    });

  it('Verifies that a person read and write if participant permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      const permission = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.SiteDirectory;
      permission.accessRight = PersonAccessRightKind.READ_IF_PARTICIPANT;
      const permission1 = new PersonPermission(GuidHelper.generateGuid(), 0, true);
      permission1.objectClass = ClassKind.EngineeringModelSetup;
      permission1.accessRight = PersonAccessRightKind.READ_IF_PARTICIPANT;
      const permissions = [permission, permission1];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.PersonPermission, null).and.returnValue(permissions);

      personRole.personPermission.push(permission.iid);
      personRole.personPermission.push(permission1.iid);

      expect(permissionService.canRead(sitedir)).toBeFalsy();
      expect(permissionService.canWrite(sitedir)).toBeFalsy();

      expect(permissionService.canRead(modelsetup)).toBeTruthy();
      expect(permissionService.canWrite(modelsetup)).toBeFalsy();

      permission.accessRight = PersonAccessRightKind.MODIFY_IF_PARTICIPANT;
      permission1.accessRight = PersonAccessRightKind.MODIFY_IF_PARTICIPANT;
      expect(permissionService.canRead(sitedir)).toBeFalsy();
      expect(permissionService.canWrite(sitedir)).toBeFalsy();

      expect(permissionService.canRead(modelsetup)).toBeTruthy();
      expect(permissionService.canWrite(modelsetup)).toBeTruthy();
    });

  it('Verifies that a participant read and write permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      expect(permissionService.canWrite(model)).toBeFalsy();
      expect(permissionService.canRead(model)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.EngineeringModel;
      permission.accessRight = ParticipantAccessRightKind.MODIFY;
      const permissions = [permission];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, null).and.returnValue([])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      participantRole.participantPermission.push(permission.iid);

      expect(permissionService.canRead(model)).toBeTruthy();
      expect(permissionService.canWrite(model)).toBeTruthy();
    });

  it('Verifies that a participant modify if owner for iteration without domain of expertise and participant permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);
      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      expect(permissionService.canWrite(model)).toBeFalsy();
      expect(permissionService.canRead(model)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.EngineeringModel;
      permission.accessRight = ParticipantAccessRightKind.MODIFY_IF_OWNER;
      const permission1 = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission1.objectClass = ClassKind.ElementDefinition;
      permission1.accessRight = ParticipantAccessRightKind.MODIFY_IF_OWNER;
      const permissions = [permission, permission1];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, null).and.returnValue([])
      .withArgs(Dto.ClassKind.Iteration, undefined).and.returnValue([])
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      participantRole.participantPermission.push(permission.iid);
      participantRole.participantPermission.push(permission1.iid);

      expect(permissionService.canRead(model)).toBeTruthy();
      expect(permissionService.canWrite(model)).toBeFalsy();

      expect(permissionService.canWrite(elementDef)).toBeTruthy();
      expect(permissionService.canRead(elementDef)).toBeTruthy();

      openIterations[iteration.iid] = [null, null];

      expect(permissionService.canWrite(elementDef)).toBeFalsy();
      expect(permissionService.canRead(elementDef)).toBeTruthy();
    });

  it('Verifies that a participant modify if owner for requirement permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      expect(permissionService.canWrite(model)).toBeFalsy();
      expect(permissionService.canRead(model)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.Requirement;
      permission.accessRight = ParticipantAccessRightKind.MODIFY_IF_OWNER;
      const permission1 = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission1.objectClass = ClassKind.RequirementsSpecification;
      permission1.accessRight = ParticipantAccessRightKind.MODIFY;
      const permissions = [permission, permission1];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      participantRole.participantPermission.push(permission.iid);
      participantRole.participantPermission.push(permission1.iid);

      // Requirement has no owner
      expect(function() {
        permissionService.canWrite(requirement);
      }).toThrow(new Error(`Owner of Requirement with id ${requirement.iid} is empty.`));
      expect(function() {
        permissionService.canRead(requirement);
      }).toThrow(new Error(`Owner of Requirement with id ${requirement.iid} is empty.`));

      // RequirementsSpecification has no owner
      expect(function() {
        permissionService.canWrite(requirementsSpecification);
      }).toThrow(new Error(`Owner of RequirementsSpecification with id ${requirementsSpecification.iid} is empty.`));
      expect(function() {
        permissionService.canRead(requirementsSpecification);
      }).toThrow(new Error(`Owner of RequirementsSpecification with id ${requirementsSpecification.iid} is empty.`));

      // Requirement has same owner as user's domain of expertise
      requirement.owner = domain1.iid;
      expect(permissionService.canWrite(requirement)).toBeTruthy();
      expect(permissionService.canRead(requirement)).toBeTruthy();

      // Requirement has other owner than user's domain of expertise
      requirement.owner = domain2.iid;
      expect(permissionService.canWrite(requirement)).toBeFalsy();
      expect(permissionService.canRead(requirement)).toBeTruthy();

      // RequirementsSpecification has same owner as user's domain of expertise
      requirementsSpecification.owner = domain1.iid;
      permission1.accessRight = ParticipantAccessRightKind.MODIFY_IF_OWNER;
      expect(permissionService.canWrite(requirementsSpecification)).toBeTruthy();
      expect(permissionService.canRead(requirementsSpecification)).toBeTruthy();

      // RequirementsSpecification has other owner than user's domain of expertise
      requirementsSpecification.owner = domain2.iid;
      expect(permissionService.canWrite(requirementsSpecification)).toBeFalsy();
      expect(permissionService.canRead(requirementsSpecification)).toBeTruthy();
    });

  it('Verifies that a participant modify if owner permission for things that are directly under engineering model works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      expect(permissionService.canWrite(model)).toBeFalsy();
      expect(permissionService.canRead(model)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.CommonFileStore;
      permission.accessRight = ParticipantAccessRightKind.MODIFY_IF_OWNER;
      const permissions = [permission];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, null).and.returnValue([])
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      participantRole.participantPermission.push(permission.iid);

      // Thing has no owner
      expect(function() {
        permissionService.canWrite(commonFileStore);
      }).toThrow(new Error(`Owner of CommonFileStore with id ${commonFileStore.iid} is empty.`));
      expect(function() {
        permissionService.canRead(commonFileStore);
      }).toThrow(new Error(`Owner of CommonFileStore with id ${commonFileStore.iid} is empty.`));

      // Thing has same owner as User's participant
      commonFileStore.owner = domain1.iid;
      expect(permissionService.canWrite(commonFileStore)).toBeTruthy();
      expect(permissionService.canRead(commonFileStore)).toBeTruthy();

      // Thing has other owner as User's participant
      commonFileStore.owner = domain2.iid;
      expect(permissionService.canWrite(commonFileStore)).toBeTruthy();
      expect(permissionService.canRead(commonFileStore)).toBeTruthy();
    });

  it('Verifies that a participant same as super class permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      expect(permissionService.canWrite(relationship)).toBeFalsy();
      expect(permissionService.canRead(relationship)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.Relationship;
      permission.accessRight = ParticipantAccessRightKind.MODIFY;
      const permissions = [permission];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      participantRole.participantPermission.push(permission.iid);

      expect(permissionService.canWrite(relationship)).toBeTruthy();
      expect(permissionService.canRead(relationship)).toBeTruthy();
    });

  it('Verifies that a participant same as container permission works',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      expect(permissionService.canWrite(valueset)).toBeFalsy();
      expect(permissionService.canRead(valueset)).toBeFalsy();

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.Parameter;
      permission.accessRight = ParticipantAccessRightKind.MODIFY;
      const permissions = [permission];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      participantRole.participantPermission.push(permission.iid);

      expect(permissionService.canWrite(valueset)).toBeTruthy();
      expect(permissionService.canRead(valueset)).toBeTruthy();
    });

  it('Verifies that write returns false with frozen iteration setup',
    () => {
      spyOn(session, 'getActivePersonParticipant')
      .withArgs(modelsetup.iid).and.returnValue(participant);

      const permission = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission.objectClass = ClassKind.ElementDefinition;
      permission.accessRight = ParticipantAccessRightKind.MODIFY;
      const permission1 = new ParticipantPermission(GuidHelper.generateGuid(), 0, true);
      permission1.objectClass = ClassKind.Iteration;
      permission1.accessRight = ParticipantAccessRightKind.MODIFY;
      const permissions = [permission, permission1];
      spyOn(session, 'retrieve')
      .withArgs(Dto.ClassKind.Iteration, iteration.iid).and.returnValue([iteration])
      .withArgs(Dto.ClassKind.IterationSetup, iteration.iid).and.returnValue([iterationSetup])
      .withArgs(Dto.ClassKind.ParticipantPermission, null).and.returnValue(permissions);

      let openIterations = {};
      openIterations[iteration.iid] = [domain1, participant];
      session.openIterations = openIterations;

      participantRole.participantPermission.push(permission.iid);
      participantRole.participantPermission.push(permission1.iid);

      expect(iterationSetup.frozenOn).toBeUndefined();
      expect(permissionService.canWrite(elementDef)).toBeTruthy();
      expect(permissionService.canWrite(iteration)).toBeTruthy();
      expect(permissionService.canWrite(iteration, ClassKind.ElementDefinition)).toBeTruthy();

      iterationSetup.frozenOn = '2020-02-01T16:29:00';
      expect(iterationSetup.frozenOn).toBeDefined();
      expect(permissionService.canWrite(elementDef)).toBeFalsy();
      expect(permissionService.canWrite(iteration)).toBeFalsy();
      expect(permissionService.canWrite(iteration, ClassKind.ElementDefinition)).toBeFalsy();
    });
});
