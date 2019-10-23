/**
 * @file		uml-information.decorator.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import "reflect-metadata";

/**
 * <see cref="AggregationKind"/> is an Enumeration for specifying the kind of aggregation of a Property.
 */
export enum AggregationKind {

    /**
     * Indicates that the Property has no aggregation.
     */
    None,

    /**
     * Indicates that the Property has shared aggregation.
     */
    Shared,

    /**
     * Indicates that the Property is aggregated compositely, i.e., the composite object has responsibility for the existence and storage of the composed objects (parts).
     */
    Composite
}

/**
 * A decorator that stores the UmlInformation into metadata about the class.
 * @param containerType The string name of the type that is the container.
 * @param containerProperty The property in the container that holds the contained object(s).
 * @returns {} The function that is invoked on class declaration.
 */
export function UmlInformation(aggregationKind: AggregationKind, isDerived: boolean, isOrdered: boolean, isNullable: boolean = false, isPersistent: boolean = true) {
    return function (target: Object, propertyKey: string) {
        Reflect.defineMetadata("UmlInformation", [aggregationKind, isDerived, isOrdered, isNullable, isPersistent], target);
    }
}
