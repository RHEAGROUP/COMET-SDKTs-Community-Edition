/**
 * @file		ordered-item.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2019  RHEA System S.A.
 */

/**
 * The ordered item. The <see cref="K" /> contains the ordered key and <see cref="V" /> the value.
 */
export module Cdp4Type {
    export class OrderedItem {

        public k: number;
        public v: string;
        public m: number;

        /**
         * Initializes a new instance of the <see cref="OrderedItem"/> class.
         */
        constructor() {
            this.m = null;
        }

        /**
         * Explicitly protect the <see cref="M"/> property by not allowing it to be set directly.
         * @param originalIndex The original index position of this <see cref="OrderedItem"/>
         * @param newIndex The new index position of this <see cref="OrderedItem"/>
         */
        public moveItem(originalIndex: number, newIndex: number) {
            if (originalIndex === newIndex) {
                return;
            }

            this.k = originalIndex;

            this.m = newIndex;
        }
    }
}
