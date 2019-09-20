/**
 * @file		query-attributes.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

/**
* The extent query attribute enumeration.
*/
export enum ExtentQueryAttribute {
    /**
    * Forces the return of the querried object only
    */
    Shallow,

    /**
    * Forces the return of the object and all objects it contains
    */
    Deep
}

/**
* Query attributes class that allows compilation and formatting of api qurl query attributes.
*/
export class QueryAttributes {

    /**
    * Gets or sets the {@link ExtentQueryAttribute} of the query.
    */
    public extent: ExtentQueryAttribute = null;

    /**
    * Gets or sets whether to query the reference data.
    */
    public includeReferenceData: boolean = null;

    /**
    * Gets or sets whether to include all the containers.
    */
    public includeAllContainers: boolean = null;

    /**
    * Gets or sets whether to include file data.
    */
    public includeFileData: boolean = null;

    /**
    * Gets or sets the revision number.
    */
    public revisionNumber: number = null;

    /**
    * Converts all values of this <see cref="QueryAttributes"/> class to a uri attributes string
    * @returns The string in the form ?param1=value1&param2=value2 seperated by an ampersand.
    */
    public toString(): string {

        const attributeString: string = this.joinAttributes();

        if (attributeString == null || attributeString === "") {
            return "";
        }

        return `?${attributeString}`;
    }

    /**
    * Concatinates all attributes in the form param1=value1&param2=value2.
    * @returns The string in the form param1=value1&param2=value2.
    */
    private joinAttributes(): string {

        const attributeList: string[] = [];

        if (this.extent != null) {
            attributeList.push(`extent=${ExtentQueryAttribute[this.extent].toLowerCase()}`);
        }

        if (this.includeReferenceData != null) {
            attributeList.push(`includeReferenceData=${this.includeReferenceData.toString().toLowerCase()}`);
        }

        if (this.includeAllContainers != null) {
            attributeList.push(`includeAllContainers=${this.includeAllContainers.toString().toLowerCase()}`);
        }

        if (this.includeFileData != null) {
            attributeList.push(`includeFileData=${this.includeFileData.toString().toLowerCase()}`);
        }

        if (this.revisionNumber != null) {
            attributeList.push(`revisionNumber=${this.revisionNumber.toString()}`);
        }

        if (attributeList.length === 0) {
            return "";
        }

        return attributeList.join("&");
    }
}
