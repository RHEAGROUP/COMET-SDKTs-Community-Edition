/**
 * @file    dal.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Observable} from 'rxjs/internal/Observable';
import {Dto} from '../dto/autogen/dto.generated';
import {QueryAttributes} from './query-attributes';
import {OperationContainer} from './operation-container';
import {AjaxResponse} from 'rxjs/ajax';

/**
 * The Data Access Layer interface for CDP4 ECSS-E-TM-10-25
 * Annex C, REST API.
 */
export interface Dal {

  /**
   * Request the current username.
   */
  requestUsername(): Observable<string>;

  /**
   * Reads the data related to the provided Thing from the data-source
   * @param thing An instance of Thing that needs to be read from the data-source.
   * @param attributes An instance of QueryAttributes to be passed along with the request.
   */
  read(thing: Dto.Thing, attributes: QueryAttributes): Observable<Dto.Thing[]>;

  /**
   * Opens a connection to a data source Uri when provided with connection credentials.
   */
  open(): Observable<Dto.Thing[]>;

  /**
   * Writes all the Operations from an OperationContainer on the data-source
   * @param operationContainer The provided OperationContainer to write
   * @param files The array of files to be uploaded. If is null, then no files are to be uploaded
   */
  write(operationContainer: OperationContainer, files?: File []): Observable<Dto.Thing[]>;

  /**
   * Exports all engineering models according to the passed in model setup ids.
   * @param siteDirectoryId The SiteDirectory id for the current session.
   * @param modelSetupIds The provided list of EngineeringModelSetup's id.
   * @return Observable with AjaxResponse inside that contains ArrayBuffer in its response property.
   */
  exportModel(siteDirectoryId: string, modelSetupIds: string []): Observable<AjaxResponse>;
}
