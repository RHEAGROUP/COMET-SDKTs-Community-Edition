/**
 * @file    cdp-services-dal.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Observable} from 'rxjs';

import {ExtentQueryAttribute, QueryAttributes} from './query-attributes';
import {WebServiceClient} from './web-service-client';
import {Dto} from '../dto/autogen/dto.generated';
import {Utils} from '../utils/utils';
import {OperationContainer} from './operation-container';
import {Cdp4JsonSerializer} from '../json-serializer/autogen/thing-serializers.generated';
import {ModelContainedHelper} from './autogen-helper/model-contained.helper.generated';
import {Operation} from './operation';
import {OperationKind} from './operation-kind';
import {CdpPostOperation} from './cdp-post-operation';
import {TransactionContextResolver} from './transaction-context.resolver';
import {Dal} from './dal';
import {map} from 'rxjs/operators';
import {AjaxResponse} from 'rxjs/ajax';

/**
 * The purpose of the CdpServicesDal is to provide the Data Access Layer for CDP4 ECSS-E-TM-10-25
 * Annex C, REST API.
 */
export class CdpServicesDal implements Dal {

  /**
   * An instance of the WebServiceClient to communicate with the service.
   */
  private client: WebServiceClient;

  /**
   * Initializes a new instance of the CdpServicesDal class.
   * @param cdpVersion An acceptable CDP version by this application.
   */
  constructor(cdpVersion: string) {
    this.client = new WebServiceClient(cdpVersion);
  }

  /**
   * Request the current username.
   */
  public requestUsername(): Observable<string> {
    const resourcePath = 'username';
    return this.client.get(resourcePath, 'string')
      .pipe(
        map(x => x.response)
      );
  }

  /**
   * Reads the data related to the provided Thing from the data-source.
   * @param thing An instance of Thing that needs to be read from the data-source.
   * @param attributes An instance of QueryAttributes to be passed along with the request.
   */
  public read(thing: Dto.Thing, attributes: QueryAttributes = null): Observable<Dto.Thing[]> {

    if (Utils.isUndefinedOrNull(thing)) {
      throw new Error('The provided Thing cannot be undefined or null.');
    }

    const thingRoute = this.cleanUriFinalSlash(thing.routeFromContainer);

    if (Utils.isUndefinedOrNull(attributes)) {
      const includeReferenceData = thing instanceof (Dto.ReferenceDataLibrary);
      attributes = this.getIUriQueryAttribute(includeReferenceData);
    }

    const resourcePath = `${thingRoute}${attributes.toString()}`;

    return this.client
      .get(resourcePath)
      .pipe(
        map(response => this.processReadResponse(response))
      );
  }

  /**
   * Opens a connection to a data source Uri when provided with connection credentials.
   */
  public open(): Observable<Dto.Thing[]> {
    const queryAttributes = new QueryAttributes();
    queryAttributes.extent = ExtentQueryAttribute.Deep;
    queryAttributes.includeReferenceData = false;

    const resourcePath = `SiteDirectory${queryAttributes.toString()}`;

    return this.client
      .get(resourcePath)
      .pipe(
        map(response => this.processOpenResponse(response))
      );
  }


  /**
   * Writes all the Operations from an OperationContainer on the data-source.
   * @param operationContainer The provided OperationContainer to write.
   * @param files The array of files to be uploaded. If is null, then no files are to be uploaded.
   */
  public write(operationContainer: OperationContainer, files?: File []): Observable<Dto.Thing[]> {

    if (operationContainer == null) {
      throw new Error('The operationContainer can\'t be null');
    }

    if (operationContainer.operations.some(this.isNotSupportedOperation)) {
      throw new Error('The CDP4 DAL does not support Copy or Move operations');
    }

    // construct POST request
    const requestBody = this.constructPostRequestBody(operationContainer);

    if (requestBody == null) {
      throw new Error('Attempt to serialize the operation container failed.');
    }

    const attribute = new QueryAttributes();
    attribute.revisionNumber = operationContainer.topContainerRevisionNumber;

    const resourcePath = operationContainer.context + attribute;

    // perform the post request
    return this.client
      .post(resourcePath, requestBody, files)
      .pipe(
        map(this.processReadResponse)
      );
  }

  /**
   * Exports all engineering models according to the passed in model setup ids.
   * @param siteDirectoryId The SiteDirectory id for the current session.
   * @param modelSetupIds The provided list of EngineeringModelSetup's id.
   * @return Observable with AjaxResponse inside that contains ArrayBuffer in its response property.
   */
  public exportModel(siteDirectoryId: string, modelSetupIds: string []): Observable<AjaxResponse> {
    const resourcePath = TransactionContextResolver.getSiteDirectoryContext(siteDirectoryId) + '?export=true';

    return this.client
      .post(resourcePath, modelSetupIds, null, 'arraybuffer');
  }

  /**
   * The function that handle the server's response.
   * @param response retrieved from the service.
   */
  private processOpenResponse(response: AjaxResponse): Dto.Thing[] {
    if (response.status !== 200) {
      throw new Error(`The server returned with a non OK status code: ${response.status}, ${response.responseText}`);
    }

    const jsonContent = response.response;
    if (jsonContent === '') {
      throw new Error('Response body was empty.');
    }

    return Cdp4JsonSerializer.deserialize(jsonContent);
  }

  /**
   * Process the response of a Read operation.
   * @param response retrieved from the service.
   */
  private processReadResponse(response: AjaxResponse): Dto.Thing[] {
    if (response.status !== 200) {
      throw new Error(`The server returned with a non OK status code: ${response.status}, ${response.responseText}`);
    }

    const jsonContent = response.response;
    if (jsonContent === '') {
      throw new Error('Response body was empty.');
    }

    console.log('deserializing...');
    const things = Cdp4JsonSerializer.deserialize(jsonContent);
    if (things.length !== 0 && response.request.url.indexOf('iteration') !== -1) {
      const iterationId = response.request.url.substring(response.request.url.lastIndexOf('/') + 1, response.request.url.indexOf('?'));
      console.log('iterationId...' + iterationId);
      if (!Utils.isUndefinedNullOrWhiteSpace(iterationId)) {
        for (const thing of things) {
          if (ModelContainedHelper.ModelContainedClassKind.indexOf(thing.classKind) < 0) {
            thing.iterationContainerId = iterationId;
          }
        }
      }
    }

    return things;
  }

  /**
   * Removes any trailing slashes at the end of the route
   * @param uri The uri to be trimmed.
   * @returns The input uri with all trailing slashes removed.
   */
  private cleanUriFinalSlash(uri: string): string {
    if (uri == null || uri === '') {
      return '';
    }

    return uri.replace(/\/+$/, '');
  }

  /**
   * Creates the appropriate query attributes.
   * @param includeReferenceData A value indicating whether to include reference data or not.
   * @returns The correct query attributes.
   */
  private getIUriQueryAttribute(includeReferenceData: boolean = false) {

    const attributes = new QueryAttributes();
    attributes.extent = ExtentQueryAttribute.Deep;
    attributes.includeAllContainers = true;

    if (includeReferenceData) {
      attributes.includeReferenceData = true;
    }

    return attributes;
  }

  /**
   * Returns a value indicating whether the given operation is supported or not.
   */
  private isNotSupportedOperation(operation: Operation, index: number, array: Operation[]): boolean {
    let result = false;
    switch (operation.operationKind) {
      case OperationKind.Move:
      case OperationKind.Copy:
      case OperationKind.CopyKeepValuesChangeOwner:
      case OperationKind.CopyDefaultValuesChangeOwner:
      case OperationKind.CopyKeepValues:
        result = true;
    }

    return result;
  };

  /**
   * Constructs the JSON string containing the full POST body of the given OperationContainer.
   * @param operationContainer The provided OperationContainer to write.
   */
  private constructPostRequestBody(operationContainer: OperationContainer): string {
    const postOperation = new CdpPostOperation();
    for (const i in operationContainer.operations) {
      postOperation.constructFromOperation(operationContainer.operations[i]);
    }

    return Cdp4JsonSerializer.serializePostOperation(postOperation);
  }
}
