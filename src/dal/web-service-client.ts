/**
 * @file    web-service-client.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {ajax, AjaxResponse} from 'rxjs/ajax';

/**
 * The WebServiceClient provides a wrapper around RxJs AJAX client.
 */
export class WebServiceClient {
  /**
   * An acceptable CDP version by this application.
   */
  private readonly cdpVersion: string;

  /**
   * Initializes a new instance of the WebServiceClient class.
   */
  constructor(cdpVersion: string) {
    this.cdpVersion = cdpVersion;
  }

  /**
   * Performs a GET request on a specified route.
   * @param route The route for the request.
   */
  public get(route: string): Observable<AjaxResponse> {
    return ajax({
      url: route,
      method: 'GET',
      headers: {
        'Accept-CDP': this.cdpVersion
      },
      responseType: 'json'
    });
  }

  /**
   * Performs a POST request on a specified route.
   * @param route The route to request.
   * @param body The request body.
   * @param files The array of files content to be uploaded. If is null, then no files are to be uploaded.
   * @param responseType The response type that is expected to be returned from API endpoint.
   */
  public post(route: string, body: any, files?: File [], responseType?: string): Observable<AjaxResponse> {
    let respType = 'json';
    console.log('POST to: ' + route + ' body: ' + body);

    // Multipart request
    if (files) {
      const multipartBody = WebServiceClient.constructFormData(body, files);
      return ajax({
        url: route,
        method: 'POST',
        responseType: 'json',
        body: multipartBody
      });
    }

    // Simple request
    if (!Utils.isUndefinedOrNull(responseType)) {
      respType = responseType;
    }

    return ajax({
      url: route,
      method: 'POST',
      responseType: respType,
      body: body
    });
  }

  /**
   * Constructs a multipart request body for a POST request.
   * @param body The request body.
   * @param files The array of files to be uploaded. If is null, then no files are to be uploaded.
   * @return The FormData.
   */
  private static constructFormData(body: any, files: File []): FormData {
    // For additional information how to create a FormData object from scratch
    // see https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
    const formData = new FormData();
    const jsonFile = new Blob([body], {type: 'application/json'});
    formData.append('files[]', jsonFile, 'jsonFile');

    for (let i = 0; i < files.length; i++) {
      const file = new Blob([files[i]], {type: 'application/octet-stream'});
      formData.append('files[]', file, 'fileToPost' + i);
    }

    return formData;
  }
}
