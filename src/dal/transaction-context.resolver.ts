/**
 * @file    transaction-context.resolver.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import {Utils} from "../utils/utils";

export class TransactionContextResolver {
    private static readonly siteDirectoryPath = "SiteDirectory/";
    private static readonly engineeringModelPath = "EngineeringModel/";
    private static readonly iterationPath = "/iteration/";

    public static getSiteDirectoryContext(id: string) {
        if (Utils.isUndefinedNullOrWhiteSpace(id)) {
            throw new Error("The identifier for SiteDirectory cannot be null.");
        }

        return this.siteDirectoryPath + id;
    }

    public static getIterationContext(modelId: string, iterationId: string) {
        if (Utils.isUndefinedNullOrWhiteSpace(modelId)) {
            throw new Error("The identifier for EngineeringModel cannot be null.");
        }

        if (Utils.isUndefinedNullOrWhiteSpace(iterationId)) {
            throw new Error("The identifier for Iteration cannot be null.");
        }

        return this.engineeringModelPath + modelId + this.iterationPath + iterationId;
    }
}
