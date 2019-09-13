/**
 * @file    operation-container.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import { Operation } from "./operation";

/**
 * A container for the Operations that need to be executed on a data source using an implementation of DAL
 */
export class OperationContainer {
    /**
    * Gets the list of Operations.
    */
    public operations: Operation[];

    /**
    * Get the context in which the OperationContainer shall be executed.
    */
    public context: string;

    /**
    * Gets the unique TopContainer RevisionNumber in this OperationContainer
    */
    public topContainerRevisionNumber: number;

    /**
     * Initializes a new instance of the WebServiceClient class.
     * @param contextRoute The route of the SiteDirectory or Iteration for which the current OperationContainer is valid.
     * @param topContainerRevNumber The unique TopContainer.RevisionNumber in this OperationContainer
     */
    constructor(private contextRoute: string, topContainerRevNumber: number) {
        this.context = contextRoute;
        this.topContainerRevisionNumber = topContainerRevNumber;
        this.operations = [];
    }

    /**
    * Adds the Operation to the current OperationContainer
    * @param operation The Operation to add to the current OperationContainer
    */
    public addOperation(operation: Operation) {
        this.operations.push(operation);
    }

    /**
    * Removes the Operation from the current OperationContainer
    * @param operation The Operation to remove from the current OperationContainer
    */
    public removeOperation(operation: Operation) {
        const index = this.operations.indexOf(operation, 0);
        if (index > -1) {
            this.operations.splice(index, 1);
        }
    }
}
