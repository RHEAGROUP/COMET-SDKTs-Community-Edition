/**
 * @file		thing-update.event.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import {Dto} from "../dto/autogen/dto.generated";

/**
 * Enumeration datatype that enumerates the possible event kind
 */
export enum UpdateKind {
    /**
     * Asserts that a thing was created
     */
    CREATE,

    /**
     * Asserts that a thing was updated
     */
    UPDATE,

    /**
     * Asserts that a thing was deleted
     */
    DELETE,

    /**
     * Asserts that nothing was done on the thing
     */
    NONE
}

/**
 * The thing update event that notifies that a thing has been updated
 */
export class ThingUpdateEvent {
    public constructor(private _thing: Dto.Thing, private _eventKind: UpdateKind) {}

    /**
     * Gets the thing of this event
     * @returns The thing
     */
    public get thing(): Dto.Thing {
        return this._thing;
    }

    /**
     * Gets the event kind
     * @returns The event-kind
     */
    public get eventKind(): UpdateKind {
        return this._eventKind;
    }
}
