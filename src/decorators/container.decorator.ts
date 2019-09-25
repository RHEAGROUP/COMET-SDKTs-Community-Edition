/**
 * @file		container.decorator.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

import "reflect-metadata";

/**
 * A decorator that stores the Container name and container property name into metadata about the class.
 * @param containerType The string name of the type that is the container.
 * @param containerProperty The property in the container that holds the contained object(s).
 * @returns {} The function that is invoked on class declaration.
 */
export function Container(containerType: string, containerProperty: string) {
    return function (target: Function) {
        Reflect.defineMetadata("Container", [containerType, containerProperty], target);
    }
}
