/**
 * @file    cdp-post-operation.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Operation} from './operation';
import {OperationKind} from './operation-kind';
import {ClasslessDtoFactory} from '../dto/classless-dto-factory';
import {Metadata} from '../dto/autogen/metadata/thing.metadata.generated';
import {Dto} from '../dto/autogen/dto.generated';
import {Utils} from '../utils/utils';
import {Cdp4Type} from '../types/ordered-item';


/**
 * The CDP POST operation
 */
export class CdpPostOperation {

  /**
   * Gets or sets the collection of DTOs to delete.
   */
  public _delete: { [property: string]: any }[] = [];

  /**
   * Gets or sets the collection of DTOs to create.
   */
  public _create: { [property: string]: any }[] = [];

  /**
   * Gets or sets the collection of DTOs to update.
   */
  public _update: { [property: string]: any }[] = [];

  /**
   * Gets or sets the collection of DTOs to copy.
   */
  public _copy: { [property: string]: any }[] = [];

  /**
   * Populate the current PostOperation with the content based on the provided Operation
   * @param operation The Operation that contains all the Things that need to be updated to the data-source
   */
  public constructFromOperation(operation: Operation) {
    if (operation.modifiedThing == null) {
      throw new Error('The operation can\'t be null');
    }

    switch (operation.operationKind) {
      case OperationKind.Create:
        this._create.push(ClasslessDtoFactory.buildFullFromThing(operation.modifiedThing));
        break;
      case OperationKind.Delete:
        this._delete.push(ClasslessDtoFactory.buildBasicClasslessDto(operation.modifiedThing));
        break;
      case OperationKind.Update:
        this.resolveUpdate(operation);
        break;
      default:
        throw new Error('This kind of operation is not supported');
    }
  }

  /**
   * Resolves the Update container of the Operation
   * @param operation The Operation that contains all the Things that need to be updated to the data-source
   */
  private resolveUpdate(operation: Operation) {

    const original = operation.originalThing;
    const modifiedThing = operation.modifiedThing;
    const metadata = Metadata.getMetadata(Dto.ClassKind[original.classKind]);
    const tmpAlteredThing = ClasslessDtoFactory.buildFullFromThing(modifiedThing);

    const listsToDelete: { [property: string]: any } = {};
    const listsToAdd: { [property: string]: any } = {};

    for (const key in original) {
      const propertyMetadata: Metadata.PropertyMetadata = metadata.propertyMetaData[key];
      if (Utils.isUndefinedOrNull(propertyMetadata)) {
        continue;
      }

      // only persisted properties are processed here
      if (propertyMetadata.isDerived || !propertyMetadata.isPersisted) {
        delete tmpAlteredThing[key];
        continue;
      }

      const originalIenumerable = original[key];

      // process arrays
      if (!Utils.isUndefinedOrNull(originalIenumerable) && propertyMetadata.upperCardinality !== '1') {
        const modifiedIenumerable = modifiedThing[key];
        const possibleAdditions = new Array<any>(); // additions in list
        const originalProperty = originalIenumerable as Array<any>;
        const modifiedProperty = modifiedIenumerable as Array<any>;

        if (propertyMetadata.isValueArray) {
          if (JSON.stringify(originalProperty) === JSON.stringify(modifiedProperty)) {
            // the value-array has not changed, remove from the list of modified properties
            delete tmpAlteredThing[key];
            continue;
          }
        } else {
          if (propertyMetadata.isOrdered) {

            const originalPropertyOrdered = original[key] as Cdp4Type.OrderedItem[];
            const modifiedPropertyOrdered = modifiedThing[key] as Cdp4Type.OrderedItem[];

            // move property using intersection
            const sameItems = originalPropertyOrdered.filter(n => (modifiedPropertyOrdered.indexOf(n) !== -1));

            for (const sameItem in sameItems) {
              const orItem = originalPropertyOrdered.find(o => o.v === sameItems[sameItem].v);
              const modItem = modifiedPropertyOrdered.find(m => m.v === sameItems[sameItem].v);

              if (orItem.k !== modItem.k) {
                modItem.moveItem(orItem.k, modItem.k);
                possibleAdditions.push(modItem);
              }
            }
          } else {
            const thingKind = Dto.ClassKind[propertyMetadata.typeName];
            if (typeof(thingKind) === 'undefined'
              && propertyMetadata.typeName !== 'Uuid'
              && typeof(Dto.ClassKind[propertyMetadata.typeName]) === 'undefined'
              && typeof(Dto.VcardTelephoneNumberKind[propertyMetadata.typeName]) === 'undefined'
              && propertyMetadata.typeName !== 'ClassKind') {
              // either way remove key in case the generic type is not one of the expected ones
              console.log(propertyMetadata.typeName);

              delete tmpAlteredThing[key];
              continue;
            }
          }

          const newItems = modifiedProperty.filter(x => originalProperty.indexOf(x) < 0);
          Array.prototype.push.apply(possibleAdditions, newItems);

          if (possibleAdditions.length > 0) {
            listsToAdd[key] = possibleAdditions;
          }

          const possibleDeletions = originalProperty.filter(x => modifiedProperty.indexOf(x) < 0);
          if (possibleDeletions.length > 0) {
            // this part will be added to the delete
            listsToDelete[key] = possibleDeletions;
          }

          // either way remove key
          delete tmpAlteredThing[key];
        }
      }
      // value-type (nullable or not) properties
      else {
        // whatever outputs here has to be an update
        if (key === 'iid' || key === 'classKind') {
          continue;
        }

        if (Utils.isUndefinedOrNull(original[key])) {
          if (Utils.isUndefinedOrNull(modifiedThing[key])) {
            delete tmpAlteredThing[key];
          }
        }
        else {
          if (original[key] === modifiedThing[key]) {
            delete tmpAlteredThing[key];
          }
        }
      }
    }

    // add a delete container
    if (Object.keys(listsToDelete).length > 0) {
      const deleteDto = ClasslessDtoFactory.buildBasicClasslessDto(operation.modifiedThing);
      for (const key in listsToDelete) {
        deleteDto[key] = listsToDelete[key];
      }

      this._delete.push(deleteDto);
    }

    if (Object.keys(listsToAdd).length > 0) {
      for (const key in listsToAdd) {
        tmpAlteredThing[key] = listsToAdd[key];
      }
    }

    console.log('resolve done: ');
    console.log(tmpAlteredThing);

    // if more than just Iid and Classkind have changed then add it to update
    if (Object.keys(tmpAlteredThing).length > 2) {
      this._update.push(tmpAlteredThing);
    }
  }
}
