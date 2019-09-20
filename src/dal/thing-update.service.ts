/**
 * @file    thing-update.service.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Subject} from 'rxjs';
import {ThingUpdateEvent} from './thing-update.event';

/**
 * The service to pass around updated Things.
 */
export class ThingUpdateService {
  /**
   *  Observable sources
   */
  private updateSource = new Subject<ThingUpdateEvent>();

  /**
   * The Observable thing
   */
  public thingUpdated$ = this.updateSource.asObservable();

  /**
   * Notifies that a thing has been updated
   * @param event the update-event
   */
  public notifyThingUpdate(event: ThingUpdateEvent) {
    this.updateSource.next(event);
  }
}
