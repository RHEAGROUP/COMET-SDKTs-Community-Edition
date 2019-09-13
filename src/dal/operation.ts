/**
 * @file    operation.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2016  RHEA System S.A.
 */

import { OperationKind } from "./operation-kind";
import {Dto} from "../dto/autogen/dto.generated";

/**
 * The change that is to be supplied to the data source via a Data-Access-Layer implementation
 */
export class Operation {
    /**
     * Initializes a new instance of the Operation class.
     */
    constructor(private original: Dto.Thing, private modified: Dto.Thing, private kind: OperationKind) {
    }

    /**
     * Gets the original Thing
     */
    public get originalThing() {
        return this.original;
    }

    /**
     * Gets the updated thing
     */
    public get modifiedThing() {
        return this.modified;
    }

    /**
     * Gets the operation kind
     */
    public get operationKind() {
        return this.kind;
    }
}
