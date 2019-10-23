/**
 * @file    session.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Dto} from '../dto/autogen/dto.generated';
import {PermissionService} from './permission.service';
import {Observable} from 'rxjs/internal/Observable';
import {OperationContainer} from './operation-container';
import {DtoCache} from './autogen-cache/dto-cache.generated';

/**
 * The Session interface describing communication with the data-source and orchestration updating the DTO cache.
 */
export interface Session {
  /**
   * Gets the list of Iterations that are currently open with the active DomainOfExpertise and Participant.
   */
  openIterations: { [index: string]: [Dto.DomainOfExpertise, Dto.Participant]; };

  /**
   * Gets the list of Engineering Models that are currently opened.
   */
  openedModels: { [modelSetupId: string]: string; };

  /**
   * Gets the list of ReferenceDataLibrary IDs that are currently open in the running application.
   */
  openReferenceDataLibraries: string[];

  /**
   * Gets the IPermissionService that handles access permissions for this Session.
   */
  permissionService: PermissionService;

  /**
   * The DTO cache.
   */
  readonly cache: DtoCache;

  /**
   * Query the thing of a specific kind from the cache.
   * @param classKind the classKind of the things to retrieve.
   * @param iterationId the iteration id. Null for non Iteration related Things.
   */
  retrieve<T extends Dto.Thing>(classKind: Dto.ClassKind, iterationId: string): T[];

  /**
   * Get the thing of a specific classKind and the provided id in the cache.
   * @param classKind the classKind.
   * @param id the id of the thing.
   * @param iterationId the iteration id of the thing is contained in. Null for non Iteration related Things.
   */
  get<T extends Dto.Thing>(classKind: string, id: string, iterationId: string): T;

  /**
   * Gets the active Person in this Session.
   */
  activePerson: Dto.Person;

  /**
   * Gets the active Participants in this Session.
   */
  activePersonParticipants: Dto.Participant[];

  /**
   * Gets a value indicating whether the site directory is loaded.
   */
  isOpen: boolean;

  /**
   * Gets the active Participant based on the currently logged in person and provided EngineeringModelSetup iid.
   */
  getActivePersonParticipant(engineeringModelSetupIid: string): Dto.Participant;

  /**
   * Cancel any Read or Open operation.
   */
  cancel();

  /**
   * Close the underlying Dal.
   */
  close(): Observable<Boolean>;

  /**
   * Close an IterationSetup and its ModelReferenceDataLibrary.
   */
  closeIterationSetup(iteration: Dto.Iteration): Observable<Boolean>;

  /**
   * Close a ModelReferenceDataLibrary
   * @param referenceDataLibrary The model RDL.
   */
  closeRdl(referenceDataLibrary: Dto.ReferenceDataLibrary): Observable<Boolean>;

  /**
   * Convenience function to get the required reference data library chain for the passed in engineeringModel.
   * @param engineeringModel The engineering model.
   */
  getEngineeringModelRdlChain(engineeringModel: Dto.EngineeringModel): Dto.ReferenceDataLibrary[];

  /**
   * Convenience function to get the required reference data library chain for the passed in engineeringModelSetup.
   * @param engineeringModelSetup The engineering model setup.
   */
  getEngineeringModelSetupRdlChain(engineeringModelSetup: Dto.EngineeringModelSetup): Dto.ReferenceDataLibrary[];

  /**
   * Gets the available domains of expertise based on the currently logged in person and provided EngineeringModelSetup iid.
   * @param engineeringModelSetupIid The iid of the EngineeringModelSetup.
   */
  getActivePersonDomainsInEngineeringModelSetup(engineeringModelSetupIid: string): Dto.DomainOfExpertise[];

  /**
   * Open the underlying Dal.
   */
  open(): Observable<boolean>;

  /**
   * Write all the Operations from an OperationContainer asynchronously.
   * @param operationContainer The provided OperationContainer to write.
   * @param files The files content that need to be uploaded. If is null, then no files are to be uploaded.
   */
  write(operationContainer: OperationContainer, files?: File []): Observable<boolean>;

  /**
   * Read an Iteration in the associated IDal along the active DomainOfExpertise for it.
   * @param iterationSetup The IterationSetup to read.
   * @param domainOfExpertise The active DomainOfExpertise for the Iteration.
   */
  readIteration(iterationSetup: Dto.IterationSetup, domainOfExpertise: Dto.DomainOfExpertise): Observable<boolean>;

  /**
   * Read ReferenceDataLibrary in the associated Dal.
   * @param rdl The ReferenceDataLibrary to read.
   */
  readRdl(rdl: Dto.ReferenceDataLibrary): Observable<boolean>;

  /**
   * Read a Thing in the associated Dal.
   * @param thing The Thing to read.
   */
  readThing(thing: Dto.Thing): Observable<boolean>;

  /**
   * Refreshes all the TopContainers in the cache.
   */
  refresh();

  /**
   * Reloads all the TopContainers the in cache.
   */
  reload();

  /**
   * Retrieves the SiteDirectory in the context of the current session.
   */
  retrieveSiteDirectory(): Dto.SiteDirectory;

  getRdlData<T extends Dto.DefinedThing>(classKind: Dto.ClassKind, engineeringModelId: string): T[];

  /**
   * Get the chain of RDL from the identifier of a RDL.
   * @param rdlId The identifier of the RDL.
   */
  getChainOfRdl(rdlId: string): Dto.ReferenceDataLibrary[];
}
