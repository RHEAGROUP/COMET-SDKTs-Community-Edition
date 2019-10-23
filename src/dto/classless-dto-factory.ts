/**
 * @file		classless-dto-factory.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import { Utils } from "../utils/utils";
import {Cdp4JsonSerializer} from "../json-serializer/autogen/thing-serializers.generated";
import {Dto} from "./autogen/dto.generated";
import {Metadata} from "./autogen/metadata/thing.metadata.generated";

/**
 * The classless-dto factory used in the context of a Post operation
 */
export module ClasslessDtoFactory {

    /**
     * Build a classless-dto from a thing
     * @param thing the source thing
     * @returns The classless-dto
     */
    export function buildFullFromThing(thing: Dto.Thing) : { [property: string]: any } {
        if (Utils.isUndefinedOrNull(thing)) {
            throw new Error("The thing cannot be null or undefined");
        }

        const classlessDto: { [property: string]: any } = {};
        const metadata = Metadata.getMetadata(Dto.ClassKind[thing.classKind]);
        const thingSerializer = Cdp4JsonSerializer.getSerializer(Dto.ClassKind[thing.classKind]);

        for (let property in metadata.propertyMetaData) {
            const propertyMetadata = metadata.propertyMetaData[property];
            if (propertyMetadata.isDerived || !propertyMetadata.isPersisted) {
                continue;
            }

            const value = metadata.getValue(thing, property);
            const toJsonConverterFunction = thingSerializer.getToJsonObjectConverter(property);

            // Convert to a ready-to-serialize value
            classlessDto[property] = toJsonConverterFunction(value);
        }

        return classlessDto;
    }

    /**
     * Build a basic classless-dto with only identifier and classkind
     * @param thing the source thing
     * @returns The basic classless dto
     */
    export function buildBasicClasslessDto(thing: Dto.Thing): { [property: string]: any } {
        if (Utils.isUndefinedOrNull(thing)) {
            throw new Error("The thing cannot be null or undefined");
        }

        const classlessDto: { [property: string]: any } = {};
        classlessDto["iid"] = thing.iid;
        classlessDto["classKind"] = Dto.ClassKind[thing.classKind];
        return classlessDto;
    }
}
