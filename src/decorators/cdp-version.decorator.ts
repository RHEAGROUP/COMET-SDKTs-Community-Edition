/**
 * @file		cdp-version.decorator.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import "reflect-metadata";

/**
 * A decorator that stores the CDP version into metadata about the class.
 * @param versionNumber The number of the version of the UML model that contains this type.
 * @returns {} The function that is invoked on class declaration.
 */
export function CDPVersion(versionNumber: string) {
    return function (target: Function) {
        Reflect.defineMetadata("CDPVersion", versionNumber, target);
    }
}
