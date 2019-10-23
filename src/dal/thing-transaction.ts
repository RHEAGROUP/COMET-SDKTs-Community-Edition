/**
 * @file    thing-transction.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import { Operation } from "./operation";
import {Dto} from "../dto/autogen/dto.generated";
import {Utils} from "../utils/utils";
import {GuidHelper} from "../utils/guid.helper";
import {OperationContainer} from "./operation-container";
import {OperationKind} from "./operation-kind";

/**
 * The Transaction class contains all requests for the creations, updates, deletions of things
 */
export class ThingTransaction {

    private topContainer: Dto.TopContainer;

    public addedThing: Dto.Thing[] = [];
    public deletedThing: Dto.Thing[] = [];
    public updatedOriginalThing: { [key: string]: Dto.Thing; } = {};
    public updatedCloneThing: { [key: string]: Dto.Thing; } = {};

    /**
    * Initializes a new instance of the ThingTransaction class
    */
    constructor(private transactionContext: string) {
    }

    /**
    * Registers the provided Thing to be created in the current transaction
    * @param clone The clone of the Thing to add or update
    */
    public create(clone: Dto.Thing) {
        if (Utils.isUndefinedOrNull(clone)) {
            throw new Error("The clone may not be null");
        }

        if (clone instanceof Dto.TopContainer || clone instanceof Dto.Iteration) {
            throw new Error("The creation of a TopContainer or an Iteration is not allowed.");
        }

        if (this.addedThing.some(v => v === clone)) {
            return;
        }

        if (clone.iid === GuidHelper.emptyGuid) {
            clone.iid = GuidHelper.generateGuid();
        }

        this.checkTopContainer(clone);
        this.addedThing.push(clone);
    }

    /**
     * Registers a thing to the list of things to update
     * @param clone the clone of the thing to update
     */
    public update(clone: Dto.Thing, original: Dto.Thing) {
        if (Utils.isUndefinedOrNull(clone)) {
            throw new Error("The clone may not be null.");
        }

        if (Utils.isUndefinedOrNull(original)) {
            throw new Error("The original thing may not be null.");
        }

        if (clone.isOriginal) {
            throw new Error("original are not accepted.");
        }

        if (!original.isOriginal) {
            throw new Error("The original is not a original thing.");
        }

        this.checkTopContainer(clone);

        this.updatedCloneThing[clone.iid] = clone;
        this.updatedOriginalThing[original.iid] = original;
    }

    /**
     * Registers a thing to the list of things to delete
     * @param clone the clone of the thing to delete
     */
    public delete(clone: Dto.Thing) {
        if (Utils.isUndefinedOrNull(clone)) {
            throw new Error("The clone may not be null.");
        }

        if (clone.isOriginal) {
            throw new Error("original are not accepted.");
        }

        this.checkTopContainer(clone);
        this.deletedThing.push(clone);
    }

    /**
     * Finalizes the transaction
     * @returns The OperationContainer for this transaction
     */
    public finalizeTransaction() : OperationContainer {
        const operationContainer = new OperationContainer(this.transactionContext, this.topContainer.revisionNumber);

        for (let thing of this.addedThing) {
            const operation = new Operation(null, thing, OperationKind.Create);
            operationContainer.addOperation(operation);
        }

        for (let thing of this.deletedThing) {
            const operation = new Operation(thing, thing, OperationKind.Delete);
            operationContainer.addOperation(operation);
        }

        for (let id in this.updatedOriginalThing) {
            if (!this.updatedCloneThing.hasOwnProperty(id) || !this.updatedOriginalThing.hasOwnProperty(id)) {
                continue;
            }

            const original = this.updatedOriginalThing[id];
            const clone = this.updatedCloneThing[id];
            const operation = new Operation(original, clone, OperationKind.Update);

            operationContainer.addOperation(operation);
        }

        return operationContainer;
    }

    /**
     * Check the validity of the operation to register
     * @param thing the thing to register
     * @description All operations within a transaction shall be contained in a single top-container.
     */
    private checkTopContainer(thing: Dto.Thing) {
        if (Utils.isUndefinedOrNull(this.topContainer)) {
            this.topContainer = <Dto.TopContainer>thing.topContainer;
            return;
        }

        if (thing.topContainer.iid !== this.topContainer.iid) {
            console.log("transaction top-container: " +
                Dto.ClassKind[this.topContainer.classKind] +
                this.topContainer.iid);
            console.log("operation topcontainer: " + Dto.ClassKind[thing.topContainer.classKind] + thing.topContainer.iid);

            throw new Error("All operations within a transaction shall be contained in a single top-container");
        }
    }
}
