/**
 * @file    operation-kind.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

/**
* The extent query attribute enumeration.
*/
export enum OperationKind {
    /**
    * Specifies that the Operation on the Thing is a Create operation
    */
    Create,

    /**
    * Specifies that the Operation on the Thing is an Update operation
    */
    Update,

    /**
    * Specifies that the Operation on the Thing is a Delete operation
    */
    Delete,

    /**
    * Specifies that the Operation on the Thing is an Move operation
    */
    Move,

    /**
    * Specifies that the Operation on the Thing is a Copy operation
    */
    Copy,

    /**
    * Specifies that the Operation on the Thing is an Copy operation setting the owner to the active one
    */
    CopyKeepValuesChangeOwner,

    /**
    * Specifies that the Operation on the Thing is a Copy operation setting the owner to the active one and
    *  value-sets shall contain default "-" values.
    */
    CopyDefaultValuesChangeOwner,

    /**
    * Specifies that the Operation on the Thing is an Copy operation where value-sets keep the original values
    */
    CopyKeepValues
}
