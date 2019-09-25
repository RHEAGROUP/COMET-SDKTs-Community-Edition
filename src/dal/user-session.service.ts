/**
 * @file    userSession.service.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2016  RHEA System S.A.
 */

import {Observable, of} from 'rxjs';

import {DtoCache} from './autogen-cache/dto-cache.generated';
import {Dto} from '../dto/autogen/dto.generated';
import {ThingUpdateService} from './thing-update.service';
import {PermissionService} from './permission.service';
import {CdpServicesDal} from './cdp-services-dal';
import {Utils} from '../utils/utils';
import {OperationContainer} from './operation-container';
import {Metadata} from '../dto/autogen/metadata/thing.metadata.generated';
import {QueryAttributes} from './query-attributes';
import {Session} from './session';
import {concatAll, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Dal} from './dal';

/**
 * The userSession service communicates with the data-source and orchestrates updating the DTO cache.
 */
export class UserSessionService implements Session {

  /**
   * Gets the list of Iterations that are currently open with the active DomainOfExpertise and Participant.
   */
  public openIterations: { [index: string]: [Dto.DomainOfExpertise, Dto.Participant]; };

  /**
   * Gets the list of Engineering Models that are currently opened.
   */
  public openedModels: { [modelSetupId: string]: string; };

  /**
   * Gets the list of ReferenceDataLibrary IDs that are currently open in the running application.
   */
  public openReferenceDataLibraries: string[];

  /**
   * Gets the PermissionService that handles access permissions for this Session.
   */
  public permissionService: PermissionService;

  /**
   * The Data Access Layer interface for CDP4 ECSS-E-TM-10-25
   * Annex C, REST API.
   */
  private readonly dal: Dal;

  /**
   * The service to pass around updated Things.
   */
  private readonly thingUpdateService: ThingUpdateService;

  /**
   * The DTO cache.
   */
  private cache: DtoCache;

  /**
   * The active username.
   */
  private activeUsername: string;

  /**
   * Backing field for isOpen.
   */
  private _isOpen: boolean;

  /**
   * The constructor of the userSession service.
   * @param dal The DAL.
   * @param thingUpdateService The injected ThingUpdateService.
   */
  constructor(dal: Dal,
              thingUpdateService: ThingUpdateService) {
    this.dal = dal;
    this.thingUpdateService = thingUpdateService;
    this.cache = new DtoCache(this.thingUpdateService);
    this.openIterations = {};
    this.openedModels = {};
    this.openReferenceDataLibraries = [];
    this.permissionService = new PermissionService(this);
  }

  /**
   * Query the thing of a specific kind from the cache.
   * @param classKind the classkind of the things to retrieve.
   * @param iterationId the iteration id. Null for non Iteration related Things.
   */
  public retrieve<T extends Dto.Thing>(classKind: Dto.ClassKind, iterationId: string): T[] {
    return this.cache.retrieve<T>(classKind, iterationId);
  }

  /**
   * Get the thing of a specific classkind and the provided id in the cache.
   * @param classKind the classKind.
   * @param id the id of the thing.
   * @param iterationId the iteration id of the thing is contained in. Null for non Iteration related Things.
   */
  public get<T extends Dto.Thing>(classKind: string, id: string, iterationId: string): T {
    if (Utils.isUndefinedOrNull(classKind) || Utils.isUndefinedOrNull(id)) {
      return null;
    }
    return this.cache.get<T>(classKind, id, iterationId);
  }

  /**
   * Gets the active Person in this Session.
   */
  public get activePerson(): Dto.Person {

    // get the active person from the cache
    const person = this.cache.retrieve<Dto.Person>(Dto.ClassKind.Person, null).filter(p => p.shortName === this.activeUsername)[0];
    if (Utils.isUndefinedOrNull(person)) {
      throw new Error('There shall be an active person');
    }

    return person;
  }

  /**
   * Gets the active Participants in this Session.
   */
  public get activePersonParticipants(): Dto.Participant[] {

    const participants = new Array<Dto.Participant>();
    for (const i in this.openIterations) {
      if (participants.indexOf(this.openIterations[i]['1']) === -1) {
        participants.push(this.openIterations[i]['1']);
      }
    }

    return participants;
  }

  /**
   * Gets a value indicating whether the site directory is loaded.
   */
  public get isOpen(): boolean {
    return this._isOpen;
  }

  /**
   * Sets a value indicating whether the site directory is loaded.
   */
  public set isOpen(value: boolean) {
    this._isOpen = value;
  }

  /**
   * Gets the active Participant based on the currently logged in person and provided EngineeringModelSetup iid.
   */
  public getActivePersonParticipant(engineeringModelSetupIid: string): Dto.Participant {
    const engineeringModelSetup = this.cache.retrieve<Dto.EngineeringModelSetup>(Dto.ClassKind.EngineeringModelSetup, null)
      .filter(em => em.iid === engineeringModelSetupIid)[0];

    if (Utils.isUndefinedOrNull(engineeringModelSetup)) {
      throw new Error('The required engineeringModelSetup cannot be retrieved.');
    }

    return this.getParticipantInEngineeringModel(engineeringModelSetup);
  }

  /**
   * Cancel any Read or Open operation.
   */
  public cancel() {
  }

  /**
   * Close the underlying Dal.
   */
  public close(): Observable<boolean> {
    this.openReferenceDataLibraries.length = 0;

    return of(true);
  }

  /**
   * Close an IterationSetup and its ModelReferenceDataLibrary
   */
  public closeIterationSetup(iteration: Dto.Iteration): Observable<boolean> {

    this.cache.closeIteration(iteration);

    // Remove the closed iteration from the this.openIterations array
    delete this.openIterations[iteration.iid];

    return of(true);
  }

  /**
   * Close a ModelReferenceDataLibrary
   * @param referenceDataLibrary The model RDL.
   */
  public closeRdl(referenceDataLibrary: Dto.ReferenceDataLibrary): Observable<boolean> {

    // remove the closed ModelRdl from the openReferenceDataLibraries array
    // remove the dependencies as well
    // const index = this.openReferenceDataLibraries.indexOf(referenceDataLibrary.iid);
    // if (index > -1) {
    //    this.openReferenceDataLibraries.splice(index, 1);
    // }

    return null;
  }

  /**
   * Convenience function to get the required reference data library chain for the passed in engineeringModel.
   * @param engineeringModel The engineering model.
   */
  public getEngineeringModelRdlChain(engineeringModel: Dto.EngineeringModel): Dto.ReferenceDataLibrary[] {

    // Get the engineeringModelSetup for the given engineeringModel from the cache
    const modelSetup = this.get<Dto.EngineeringModelSetup>(Dto.ClassKind[Dto.ClassKind.EngineeringModelSetup],
      engineeringModel.engineeringModelSetup,
      null);

    return this.getEngineeringModelSetupRdlChain(modelSetup);
  }

  /**
   * Convenience function to get the required reference data library chain for the passed in engineeringModelSetup.
   * @param engineeringModelSetup The engineering model setup.
   */
  public getEngineeringModelSetupRdlChain(engineeringModelSetup: Dto.EngineeringModelSetup): Dto.ReferenceDataLibrary[] {

    const rdlChain: Dto.ReferenceDataLibrary[] = [];
    const modelReferenceDataLibrary = this.get<Dto.ModelReferenceDataLibrary>(Dto.ClassKind[Dto.ClassKind.ModelReferenceDataLibrary],
      engineeringModelSetup.requiredRdl[0],
      null);
    // Get from the cache and Add the chain of RDLs of engineeringModelSetup.requiredRdl to the rdlChain array
    if (!Utils.isUndefinedOrNull(modelReferenceDataLibrary)) {
      rdlChain.push(modelReferenceDataLibrary);
      let requiredRdlIid = modelReferenceDataLibrary.requiredRdl;

      while (!Utils.isUndefinedOrNull(requiredRdlIid)) {
        const requiredRdl = this.get<Dto.SiteReferenceDataLibrary>(Dto.ClassKind[Dto.ClassKind.SiteReferenceDataLibrary],
          requiredRdlIid,
          null);
        // Add a found Rdl to the array
        if (!Utils.isUndefinedOrNull(requiredRdl)) {
          rdlChain.push(requiredRdl);
          requiredRdlIid = requiredRdl.requiredRdl;
        } else {
          requiredRdlIid = null;
        }
      }
    }

    return rdlChain;
  }

  /**
   * Gets the available domains of expertise based on the currently logged in person and provided EngineeringModelSetup iid.
   * @param engineeringModelSetupIid The iid of the EngineeringModelSetup.
   */
  public getActivePersonDomainsInEngineeringModelSetup(engineeringModelSetupIid: string): Dto.DomainOfExpertise[] {
    const engineeringModelSetup = this.cache.retrieve<Dto.EngineeringModelSetup>(Dto.ClassKind.EngineeringModelSetup, null)
      .filter(em => em.iid === engineeringModelSetupIid)[0];

    if (Utils.isUndefinedOrNull(engineeringModelSetup)) {
      throw new Error('The required engineeringModelSetup cannot be retrieved.');
    }

    const participant = this.getParticipantInEngineeringModel(engineeringModelSetup);
    return this.getDomainsInParticipant(participant);
  }


  /**
   * Open the underlying Dal
   */
  public open(): Observable<boolean> {
    return this.dal.requestUsername()
      .pipe(
        map(x => {
          this.activeUsername = x;
          return this.dal.open();
        }),
        concatAll(),
        map(dtos => {
          this.cache.synchronize(dtos);
          this.isOpen = true;
          return true;
        })
      )
  }

  /**
   * Write all the Operations from an OperationContainer asynchronously.
   * @param operationContainer The provided OperationContainer to write.
   * @param files The files content that need to be uploaded. If is null, then no files are to be uploaded.
   */
  public write(operationContainer: OperationContainer, files?: File []): Observable<boolean> {
    return this.dal.write(operationContainer, files)
      .pipe(
        map(dtos => {
          this.cache.synchronize(dtos);
          return true;
        })
      );
  }

  /**
   * Read an Iteration in the associated IDal along the active DomainOfExpertise for it.
   * @param iterationSetup The IterationSetup to read.
   * @param domainOfExpertise The active DomainOfExpertise for the Iteration.
   */
  public readIteration(iterationSetup: Dto.IterationSetup, domainOfExpertise: Dto.DomainOfExpertise): Observable<boolean> {
    console.log('session.readIteration');
    const iterationDomainPair = this.openIterations[iterationSetup.iterationIid];
    const modelSetup = <Dto.EngineeringModelSetup>iterationSetup.container;

    // Prevent opening the same model twice
    if (!Utils.isUndefinedOrNull(this.openedModels[modelSetup.iid])) {
      return throwError('The model is already opened.');
    }

    // Prevent opening the same iteration twice
    if (!Utils.isUndefinedOrNull(iterationDomainPair)) {
      return throwError('The iteration is already opened.');
    }

    // Prevent opening the same iteration with another domain
    if (!Utils.isUndefinedOrNull(iterationDomainPair) && iterationDomainPair['0'] !== domainOfExpertise) {
      return throwError('The iteration is already opened with another domain.');
    }

    const mrdl = this.cache
      .get<Dto.ModelReferenceDataLibrary>(Dto.ClassKind[Dto.ClassKind.ModelReferenceDataLibrary], modelSetup.requiredRdl[0], null);

    const model = new Dto.EngineeringModel(modelSetup.engineeringModelIid, 0, false);
    const iteration = new Dto.Iteration(iterationSetup.iterationIid, 0, false);
    iteration.container = model;

    return this.dal.read(mrdl)
      .pipe(
        map(dtos => {
          this.onReadReferenceDataLibrary(dtos, mrdl);
          return this.dal.read(iteration);
        }),
        concatAll(),
        map(dtos => {
          this.onReadIteration(dtos, iteration.iid, domainOfExpertise, modelSetup);
          return true;
        })
      );
  }

  /**
   * Read ReferenceDataLibrary in the associated IDal
   * @param rdl The ReferenceDataLibrary to read
   */
  public readRdl(rdl: Dto.ReferenceDataLibrary): Observable<boolean> {
    return this.dal.read(rdl)
      .pipe(
        map(dtos => {
          this.onReadReferenceDataLibrary(dtos, rdl);
          return true;
        })
      );
  }

  /**
   * Read a Thing in the associated IDal
   * @param thing The Thing to read
   */
  public readThing(thing: Dto.Thing): Observable<boolean> {
    return this.dal.read(thing)
      .pipe(
        map(dtos => {
          this.cache.synchronize(dtos);
          return true;
        })
      );
  }

  /**
   * Refreshes all the TopContainers in the cache
   */
  public refresh() {
    const topContainers = this.getSiteDirectoryAndIterations();
    for (const i in topContainers) {
      this.update(topContainers[i], true);
    }
  }

  /**
   * Reloads all the TopContainers the in cache
   */
  public reload() {
    const topContainers = this.getSiteDirectoryAndIterations();
    for (const i in topContainers) {
      this.update(topContainers[i], false);
    }
  }

  /**
   * Retrieves the SiteDirectory in the context of the current session
   */
  public retrieveSiteDirectory(): Dto.SiteDirectory {
    const sitedirs = this.cache.retrieve<Dto.SiteDirectory>(Dto.ClassKind.SiteDirectory, null);

    if (Utils.isUndefinedOrNull(sitedirs) || sitedirs.length === 0) {
      return null;
    }

    return sitedirs[0];
  }

  public getRdlData<T extends Dto.DefinedThing>(classKind: Dto.ClassKind, engineeringModelId: string): T[] {
    const modelThing = this.get<Dto.EngineeringModel>(Dto.ClassKind[Dto.ClassKind.EngineeringModel], engineeringModelId, null);
    if (Utils.isUndefinedOrNull(modelThing)) {
      console.error('The EngineeringModel object could not be found: ' + engineeringModelId);
    }

    const modelSetup = this.get<Dto.EngineeringModelSetup>(Dto.ClassKind[Dto.ClassKind.EngineeringModelSetup],
      modelThing.engineeringModelSetup,
      null);
    if (Utils.isUndefinedOrNull(modelSetup)) {
      console.error('The EngineeringModelSetup object could not be found: ' + modelThing.engineeringModelSetup);
    }

    const rdls = this.getChainOfRdl(modelSetup.requiredRdl[0]);
    const containerInfo = Metadata.getContainerInfo(Dto.ClassKind[classKind]);

    const rdlData = this.retrieve<T>(classKind, null);
    const rdlDataIds: string[] = [];
    for (const rdl of rdls) {
      const metadata = Metadata.getMetadata(Dto.ClassKind[rdl.classKind]);
      const idArray = <string[]>metadata.getValue(rdl, containerInfo.propertyName);
      if (!Utils.isUndefinedOrNull(idArray)) {
        Array.prototype.push.apply(rdlDataIds, idArray);
      }
    }

    return rdlData.filter(r => rdlDataIds.indexOf(r.iid) >= 0);
  }

  /**
   * Get the chain of RDL from the identifier of a RDL
   * @param rdlId The identifier of the RDL
   */
  public getChainOfRdl(rdlId: string): Dto.ReferenceDataLibrary[] {
    const rdlChain: Dto.ReferenceDataLibrary[] = [];
    const rdls = this.retrieve<Dto.ReferenceDataLibrary>(Dto.ClassKind.ReferenceDataLibrary, null);

    const lowestRdl = rdls.filter(x => x.iid === rdlId)[0];
    if (Utils.isUndefinedOrNull(lowestRdl)) {
      console.error('The Rdl object could not be found:' + rdlId);
    } else {
      rdlChain.push(lowestRdl);
      let requiredRdl = lowestRdl.requiredRdl;
      while (!Utils.isUndefinedNullOrWhiteSpace(requiredRdl)) {
        const rdl = rdls.filter(x => x.iid === requiredRdl)[0];
        if (!Utils.isUndefinedOrNull(rdl)) {
          rdlChain.push(rdl);
          requiredRdl = rdl.requiredRdl;
        } else {
          console.error('The Rdl object could not be found:' + rdlId);
        }
      }
    }

    return rdlChain;
  }

  /**
   * Update a thing
   * @param thing the thing which update to retrieve
   * @param isRefresh A value indicating whether the last revision number should be used
   * @returns An observable containing the things returned in the server response
   */
  private update(thing: Dto.Thing, isRefresh: boolean = true) {
    let revisionNumber = isRefresh ? thing.revisionNumber : 0;

    // Check whether the thing is Iteration then get revisionNumber of its container
    if (!Utils.isUndefinedOrNull(thing.container)) {
      revisionNumber = isRefresh ? thing.container.revisionNumber : 0;
    }

    const queryAttribute = new QueryAttributes();
    queryAttribute.revisionNumber = revisionNumber;
    this.dal.read(thing, queryAttribute)
      .subscribe(
        dtos => this.cache.synchronize(dtos),
        err => console.log(err)
      );
  }

  /**
   * Handles the response from a Read Iteration operation
   * @param things the things contained in the response
   * @param iterationId The iteration id
   * @param domainOfExpertise The user's DomainOfExpertise
   * @param modelSetup The modelSetup of the model that contains the iteration
   */
  private onReadIteration(things: Dto.Thing[],
                          iterationId: string,
                          domainOfExpertise: Dto.DomainOfExpertise,
                          modelSetup: Dto.EngineeringModelSetup): void {
    if (things.length === 0) {
      return;
    }

    if (Utils.isUndefinedOrNull(this.openIterations[iterationId])) {
      const participants = this.cache.retrieve<Dto.Participant>(Dto.ClassKind.Participant, null);
      const participant = participants.filter(p => p.container === modelSetup && p.person === this.activePerson.iid)[0];

      // Set information of opened models and iterations
      this.openIterations[iterationId] = [domainOfExpertise, participant];
      this.openedModels[modelSetup.iid] = modelSetup.engineeringModelIid;
    }

    this.cache.synchronize(things);
  }

  /**
   * Handle the response of a Read RDL operation
   * @param things The things contained in the response
   * @param rdl the Rdl that was opened
   */
  private onReadReferenceDataLibrary(things: Dto.Thing[], rdl: Dto.ReferenceDataLibrary) {
    if (things.length === 0) {
      return things;
    }

    const rdls = this.cache.retrieve<Dto.ReferenceDataLibrary>(Dto.ClassKind.ReferenceDataLibrary, null);

    let rdlVariable = rdl;
    while (!Utils.isUndefinedOrNull(rdlVariable)) {
      if (this.openReferenceDataLibraries.indexOf(rdl.iid) === -1) {
        this.openReferenceDataLibraries.push(rdl.iid);
      }

      rdlVariable = rdls.filter(x => x.iid === rdlVariable.requiredRdl)[0];
    }

    this.cache.synchronize(things);
  }

  /**
   * Get the participant based on the currently logged in user and provided EngineeringModelSetup.
   * @param engineeringModelSetup The EngineeringModelSetup to get the participant info from.
   */
  private getParticipantInEngineeringModel(engineeringModelSetup: Dto.EngineeringModelSetup): Dto.Participant {

    const linkedParticipants = this.cache.retrieve<Dto.Participant>(Dto.ClassKind.Participant, null)
      .filter(p => p.person === this.activePerson.iid);

    const participantIids = engineeringModelSetup.participant;
    for (const iid of participantIids) {
      const participant = linkedParticipants.filter(p => p.iid === iid)[0];
      if (!Utils.isUndefinedOrNull(participant)) {
        return participant;
      }
    }

    return null;
  }

  /**
   * Gets the domains of expertise referenced by a Participant.
   * @param participant The paticipant who's domains to get.
   */
  private getDomainsInParticipant(participant: Dto.Participant): Dto.DomainOfExpertise[] {

    const domainIids = participant.domain;
    const domains = new Array<Dto.DomainOfExpertise>();

    for (const iid of domainIids) {
      const domain = this.cache.retrieve<Dto.DomainOfExpertise>(Dto.ClassKind.DomainOfExpertise, null)
        .filter(d => d.iid === iid)[0];
      domains.push(domain);
    }

    return domains;
  }

  /**
   *  Gets the SiteDirectory and all Iterations from the  cache for this UserSession
   */
  private getSiteDirectoryAndIterations(): Dto.Thing[] {
    const topContainers = new Array<Dto.Thing>();

    const siteDirectory = <Dto.Thing>this.retrieveSiteDirectory();
    topContainers.push(siteDirectory);

    const engineeringModels = this.retrieve<Dto.EngineeringModel>(Dto.ClassKind.EngineeringModel, null);

    // Get all iterations from the cache
    if (!Utils.isUndefinedOrNull(engineeringModels) && engineeringModels.length > 0) {
      for (const model of engineeringModels) {
        for (const iterationIid of model.iteration) {
          const iteration = this.get<Dto.Iteration>(Dto.ClassKind[Dto.ClassKind.Iteration], iterationIid, null);
          if (!Utils.isUndefinedOrNull(iteration)) {
            topContainers.push(<Dto.Thing>iteration);
          }
        }
      }
    }

    return topContainers;
  }
}
