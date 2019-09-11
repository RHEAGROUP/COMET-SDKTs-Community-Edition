/**
 * @file		utils.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2016  RHEA System S.A.
 */

export module Utils {
    /**
     * Assert whether a value is undefined or null
     * @param value The value to assert
     * @returns true if the value is undefined or null, false otherwise
     */
    export function isUndefinedOrNull(value: any): boolean {
        return typeof(value) == "undefined" || value == null;
    }

    /**
     * Assert whether a value is undefined or null or white space
     * @param value The value to assert
     * @returns true if the value is undefined or null or white space, false otherwise
     */
    export function isUndefinedNullOrWhiteSpace(value: string): boolean {
        return isUndefinedOrNull(value) || value.trim().length < 1;
    }
}
