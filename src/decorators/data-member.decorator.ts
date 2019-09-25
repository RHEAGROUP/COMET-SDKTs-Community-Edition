/**
 * @file		data-member.decorator.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import "reflect-metadata";

/**
 * A decorator that indicates that a property is a dataMember.
 * @returns {} The function that is invoked on class declaration.
 */
export function DataMember(target: any, propertyKey: string) : any {
    return true;
}
