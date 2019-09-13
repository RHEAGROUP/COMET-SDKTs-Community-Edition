/**
 * @file		ThingSerializers.generated.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2016  RHEA System S.A.
 * @summary		This is an auto-generated class. Any manual changes on this file will be overwritten!
 */

import { Utils } from "../../utils/utils";
import { Cdp4Type } from "../../types/ordered-item";
import {Dto} from "../../dto/autogen/dto.generated";
import {CdpPostOperation} from "../../dal/cdp-post-operation";


export module Cdp4JsonSerializer {

    /**
     * The interface for the Thing serializer
     */
    export interface ThingSerializerInterface {

        /**
         * Gets the JSON converter method for a property
         * @param property The property
         * @returns The JSON serializer method
         */
        getToJsonObjectConverter(property: string): (value: any) => any;

        /**
         * Convert a Thing to a JSON object
         */
        toJsonObject(thing: Dto.Thing): any;

        /**
         * Deserializes a JSON object to a Thing
         */
        parse(jsonObject: any): Dto.Thing;
    }

    /**
     * The base abstract class for the Thing serializer
     */
    abstract class BaseThingSerializer {

        /**
         * The map containing the JSON object converter for every property
         */
        protected propertyToJsonObjectMap: { [id: string]: (value: any) => any };

        /**
         * Gets the JSON converter method for a property
         * @param property The property
         * @returns The JSON serializer method
         * @throws if the JSON converter could not be found
         */
        public getToJsonObjectConverter(property: string): (value: any) => any {
            var toJsonConverter = this.propertyToJsonObjectMap[property];
            if (typeof(toJsonConverter) == "undefined" || toJsonConverter == null) {
                throw new Error("The toJSON converter was not found for property" + property);
            }

            return toJsonConverter;
        }
    }

    /**
     * The serializer for ActionItem
     */
    class ActionItemSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "actionee": (value: any) => { return value; },
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "closeOutDate": (value: any) => { return value; },
                "closeOutStatement": (value: any) => { return value; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "dueDate": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ActionItem to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let actionItem = <Dto.ActionItem>thing;
            if (typeof(actionItem) == "undefined" || actionItem == null) {
                throw new Error("The object is not a ActionItem");
            }

            let jsonObject = {
                "actionee": this.getToJsonObjectConverter("actionee")(actionItem.actionee),
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(actionItem.approvedBy),
                "author": this.getToJsonObjectConverter("author")(actionItem.author),
                "category": this.getToJsonObjectConverter("category")(actionItem.category),
                "classification": this.getToJsonObjectConverter("classification")(actionItem.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(actionItem.classKind),
                "closeOutDate": this.getToJsonObjectConverter("closeOutDate")(actionItem.closeOutDate),
                "closeOutStatement": this.getToJsonObjectConverter("closeOutStatement")(actionItem.closeOutStatement),
                "content": this.getToJsonObjectConverter("content")(actionItem.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(actionItem.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(actionItem.discussion),
                "dueDate": this.getToJsonObjectConverter("dueDate")(actionItem.dueDate),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(actionItem.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(actionItem.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(actionItem.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(actionItem.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actionItem.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(actionItem.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(actionItem.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(actionItem.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actionItem.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(actionItem.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(actionItem.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(actionItem.status),
                "title": this.getToJsonObjectConverter("title")(actionItem.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ActionItem
         */
        public parse(jsonObject: any) : Dto.Thing {
            const actionItem = new Dto.ActionItem(jsonObject["iid"], jsonObject["revisionNumber"], true);
            actionItem.actionee = jsonObject["actionee"];
            actionItem.approvedBy = jsonObject["approvedBy"];
            actionItem.author = jsonObject["author"];
            actionItem.category = jsonObject["category"];
            actionItem.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            actionItem.closeOutDate = jsonObject["closeOutDate"];
            actionItem.closeOutStatement = jsonObject["closeOutStatement"];
            actionItem.content = jsonObject["content"];
            actionItem.createdOn = jsonObject["createdOn"];
            actionItem.discussion = jsonObject["discussion"];
            actionItem.dueDate = jsonObject["dueDate"];
            actionItem.excludedDomain = jsonObject["excludedDomain"];
            actionItem.excludedPerson = jsonObject["excludedPerson"];
            actionItem.languageCode = jsonObject["languageCode"];
            actionItem.modifiedOn = jsonObject["modifiedOn"];
            actionItem.owner = jsonObject["owner"];
            actionItem.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            actionItem.relatedThing = jsonObject["relatedThing"];
            actionItem.shortName = jsonObject["shortName"];
            actionItem.sourceAnnotation = jsonObject["sourceAnnotation"];
            actionItem.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            actionItem.title = jsonObject["title"];

            return actionItem;
        }
    }

    /**
     * The serializer for ActualFiniteState
     */
    class ActualFiniteStateSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "kind": (value: any) => { return Dto.ActualFiniteStateKind[value]; },
                "modifiedOn": (value: any) => { return value; },
                "possibleState": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ActualFiniteState to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let actualFiniteState = <Dto.ActualFiniteState>thing;
            if (typeof(actualFiniteState) == "undefined" || actualFiniteState == null) {
                throw new Error("The object is not a ActualFiniteState");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(actualFiniteState.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(actualFiniteState.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(actualFiniteState.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(actualFiniteState.iid),
                "kind": this.getToJsonObjectConverter("kind")(actualFiniteState.kind),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actualFiniteState.modifiedOn),
                "possibleState": this.getToJsonObjectConverter("possibleState")(actualFiniteState.possibleState),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actualFiniteState.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ActualFiniteState
         */
        public parse(jsonObject: any) : Dto.Thing {
            const actualFiniteState = new Dto.ActualFiniteState(jsonObject["iid"], jsonObject["revisionNumber"], true);
            actualFiniteState.excludedDomain = jsonObject["excludedDomain"];
            actualFiniteState.excludedPerson = jsonObject["excludedPerson"];
            actualFiniteState.kind = Dto.ActualFiniteStateKind[<string>jsonObject["kind"]];
            actualFiniteState.modifiedOn = jsonObject["modifiedOn"];
            actualFiniteState.possibleState = jsonObject["possibleState"];

            return actualFiniteState;
        }
    }

    /**
     * The serializer for ActualFiniteStateList
     */
    class ActualFiniteStateListSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "actualState": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "excludeOption": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "possibleFiniteStateList": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ActualFiniteStateList to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let actualFiniteStateList = <Dto.ActualFiniteStateList>thing;
            if (typeof(actualFiniteStateList) == "undefined" || actualFiniteStateList == null) {
                throw new Error("The object is not a ActualFiniteStateList");
            }

            let jsonObject = {
                "actualState": this.getToJsonObjectConverter("actualState")(actualFiniteStateList.actualState),
                "classKind": this.getToJsonObjectConverter("classKind")(actualFiniteStateList.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(actualFiniteStateList.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(actualFiniteStateList.excludedPerson),
                "excludeOption": this.getToJsonObjectConverter("excludeOption")(actualFiniteStateList.excludeOption),
                "iid": this.getToJsonObjectConverter("iid")(actualFiniteStateList.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actualFiniteStateList.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(actualFiniteStateList.owner),
                "possibleFiniteStateList": this.getToJsonObjectConverter("possibleFiniteStateList")(actualFiniteStateList.possibleFiniteStateList),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actualFiniteStateList.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ActualFiniteStateList
         */
        public parse(jsonObject: any) : Dto.Thing {
            const actualFiniteStateList = new Dto.ActualFiniteStateList(jsonObject["iid"], jsonObject["revisionNumber"], true);
            actualFiniteStateList.actualState = jsonObject["actualState"];
            actualFiniteStateList.excludedDomain = jsonObject["excludedDomain"];
            actualFiniteStateList.excludedPerson = jsonObject["excludedPerson"];
            actualFiniteStateList.excludeOption = jsonObject["excludeOption"];
            actualFiniteStateList.modifiedOn = jsonObject["modifiedOn"];
            actualFiniteStateList.owner = jsonObject["owner"];
            actualFiniteStateList.possibleFiniteStateList = parseOrderedItemArray(jsonObject["possibleFiniteStateList"]);

            return actualFiniteStateList;
        }
    }

    /**
     * The serializer for Alias
     */
    class AliasSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isSynonym": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Alias to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let alias = <Dto.Alias>thing;
            if (typeof(alias) == "undefined" || alias == null) {
                throw new Error("The object is not a Alias");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(alias.classKind),
                "content": this.getToJsonObjectConverter("content")(alias.content),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(alias.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(alias.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(alias.iid),
                "isSynonym": this.getToJsonObjectConverter("isSynonym")(alias.isSynonym),
                "languageCode": this.getToJsonObjectConverter("languageCode")(alias.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(alias.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(alias.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Alias
         */
        public parse(jsonObject: any) : Dto.Thing {
            const alias = new Dto.Alias(jsonObject["iid"], jsonObject["revisionNumber"], true);
            alias.content = jsonObject["content"];
            alias.excludedDomain = jsonObject["excludedDomain"];
            alias.excludedPerson = jsonObject["excludedPerson"];
            alias.isSynonym = jsonObject["isSynonym"];
            alias.languageCode = jsonObject["languageCode"];
            alias.modifiedOn = jsonObject["modifiedOn"];

            return alias;
        }
    }

    /**
     * The serializer for AndExpression
     */
    class AndExpressionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "term": (value: any) => { return value; }
            };
        }

        /**
         * Converts a AndExpression to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let andExpression = <Dto.AndExpression>thing;
            if (typeof(andExpression) == "undefined" || andExpression == null) {
                throw new Error("The object is not a AndExpression");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(andExpression.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(andExpression.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(andExpression.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(andExpression.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(andExpression.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(andExpression.revisionNumber),
                "term": this.getToJsonObjectConverter("term")(andExpression.term)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a AndExpression
         */
        public parse(jsonObject: any) : Dto.Thing {
            const andExpression = new Dto.AndExpression(jsonObject["iid"], jsonObject["revisionNumber"], true);
            andExpression.excludedDomain = jsonObject["excludedDomain"];
            andExpression.excludedPerson = jsonObject["excludedPerson"];
            andExpression.modifiedOn = jsonObject["modifiedOn"];
            andExpression.term = jsonObject["term"];

            return andExpression;
        }
    }

    /**
     * The serializer for Approval
     */
    class ApprovalSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationApprovalKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Approval to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let approval = <Dto.Approval>thing;
            if (typeof(approval) == "undefined" || approval == null) {
                throw new Error("The object is not a Approval");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(approval.author),
                "classification": this.getToJsonObjectConverter("classification")(approval.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(approval.classKind),
                "content": this.getToJsonObjectConverter("content")(approval.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(approval.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(approval.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(approval.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(approval.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(approval.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(approval.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(approval.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(approval.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Approval
         */
        public parse(jsonObject: any) : Dto.Thing {
            const approval = new Dto.Approval(jsonObject["iid"], jsonObject["revisionNumber"], true);
            approval.author = jsonObject["author"];
            approval.classification = Dto.AnnotationApprovalKind[<string>jsonObject["classification"]];
            approval.content = jsonObject["content"];
            approval.createdOn = jsonObject["createdOn"];
            approval.excludedDomain = jsonObject["excludedDomain"];
            approval.excludedPerson = jsonObject["excludedPerson"];
            approval.languageCode = jsonObject["languageCode"];
            approval.modifiedOn = jsonObject["modifiedOn"];
            approval.owner = jsonObject["owner"];

            return approval;
        }
    }

    /**
     * The serializer for ArrayParameterType
     */
    class ArrayParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "component": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "definition": (value: any) => { return value; },
                "dimension": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isFinalized": (value: any) => { return value; },
                "isTensor": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ArrayParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let arrayParameterType = <Dto.ArrayParameterType>thing;
            if (typeof(arrayParameterType) == "undefined" || arrayParameterType == null) {
                throw new Error("The object is not a ArrayParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(arrayParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(arrayParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(arrayParameterType.classKind),
                "component": this.getToJsonObjectConverter("component")(arrayParameterType.component),
                "definition": this.getToJsonObjectConverter("definition")(arrayParameterType.definition),
                "dimension": this.getToJsonObjectConverter("dimension")(arrayParameterType.dimension),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(arrayParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(arrayParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(arrayParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(arrayParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(arrayParameterType.isDeprecated),
                "isFinalized": this.getToJsonObjectConverter("isFinalized")(arrayParameterType.isFinalized),
                "isTensor": this.getToJsonObjectConverter("isTensor")(arrayParameterType.isTensor),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(arrayParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(arrayParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(arrayParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(arrayParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(arrayParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ArrayParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const arrayParameterType = new Dto.ArrayParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            arrayParameterType.alias = jsonObject["alias"];
            arrayParameterType.category = jsonObject["category"];
            arrayParameterType.component = parseOrderedItemArray(jsonObject["component"]);
            arrayParameterType.definition = jsonObject["definition"];
            arrayParameterType.dimension = parseOrderedItemArray(jsonObject["dimension"]);
            arrayParameterType.excludedDomain = jsonObject["excludedDomain"];
            arrayParameterType.excludedPerson = jsonObject["excludedPerson"];
            arrayParameterType.hyperLink = jsonObject["hyperLink"];
            arrayParameterType.isDeprecated = jsonObject["isDeprecated"];
            arrayParameterType.isFinalized = jsonObject["isFinalized"];
            arrayParameterType.isTensor = jsonObject["isTensor"];
            arrayParameterType.modifiedOn = jsonObject["modifiedOn"];
            arrayParameterType.name = jsonObject["name"];
            arrayParameterType.shortName = jsonObject["shortName"];
            arrayParameterType.symbol = jsonObject["symbol"];

            return arrayParameterType;
        }
    }

    /**
     * The serializer for BinaryNote
     */
    class BinaryNoteSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "caption": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fileType": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a BinaryNote to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let binaryNote = <Dto.BinaryNote>thing;
            if (typeof(binaryNote) == "undefined" || binaryNote == null) {
                throw new Error("The object is not a BinaryNote");
            }

            let jsonObject = {
                "caption": this.getToJsonObjectConverter("caption")(binaryNote.caption),
                "category": this.getToJsonObjectConverter("category")(binaryNote.category),
                "classKind": this.getToJsonObjectConverter("classKind")(binaryNote.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(binaryNote.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(binaryNote.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(binaryNote.excludedPerson),
                "fileType": this.getToJsonObjectConverter("fileType")(binaryNote.fileType),
                "iid": this.getToJsonObjectConverter("iid")(binaryNote.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryNote.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(binaryNote.name),
                "owner": this.getToJsonObjectConverter("owner")(binaryNote.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryNote.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(binaryNote.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a BinaryNote
         */
        public parse(jsonObject: any) : Dto.Thing {
            const binaryNote = new Dto.BinaryNote(jsonObject["iid"], jsonObject["revisionNumber"], true);
            binaryNote.caption = jsonObject["caption"];
            binaryNote.category = jsonObject["category"];
            binaryNote.createdOn = jsonObject["createdOn"];
            binaryNote.excludedDomain = jsonObject["excludedDomain"];
            binaryNote.excludedPerson = jsonObject["excludedPerson"];
            binaryNote.fileType = jsonObject["fileType"];
            binaryNote.modifiedOn = jsonObject["modifiedOn"];
            binaryNote.name = jsonObject["name"];
            binaryNote.owner = jsonObject["owner"];
            binaryNote.shortName = jsonObject["shortName"];

            return binaryNote;
        }
    }

    /**
     * The serializer for BinaryRelationship
     */
    class BinaryRelationshipSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterValue": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "source": (value: any) => { return value; },
                "target": (value: any) => { return value; }
            };
        }

        /**
         * Converts a BinaryRelationship to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let binaryRelationship = <Dto.BinaryRelationship>thing;
            if (typeof(binaryRelationship) == "undefined" || binaryRelationship == null) {
                throw new Error("The object is not a BinaryRelationship");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(binaryRelationship.category),
                "classKind": this.getToJsonObjectConverter("classKind")(binaryRelationship.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(binaryRelationship.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(binaryRelationship.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(binaryRelationship.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryRelationship.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(binaryRelationship.owner),
                "parameterValue": this.getToJsonObjectConverter("parameterValue")(binaryRelationship.parameterValue),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryRelationship.revisionNumber),
                "source": this.getToJsonObjectConverter("source")(binaryRelationship.source),
                "target": this.getToJsonObjectConverter("target")(binaryRelationship.target)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a BinaryRelationship
         */
        public parse(jsonObject: any) : Dto.Thing {
            const binaryRelationship = new Dto.BinaryRelationship(jsonObject["iid"], jsonObject["revisionNumber"], true);
            binaryRelationship.category = jsonObject["category"];
            binaryRelationship.excludedDomain = jsonObject["excludedDomain"];
            binaryRelationship.excludedPerson = jsonObject["excludedPerson"];
            binaryRelationship.modifiedOn = jsonObject["modifiedOn"];
            binaryRelationship.owner = jsonObject["owner"];
            binaryRelationship.parameterValue = jsonObject["parameterValue"];
            binaryRelationship.source = jsonObject["source"];
            binaryRelationship.target = jsonObject["target"];

            return binaryRelationship;
        }
    }

    /**
     * The serializer for BinaryRelationshipRule
     */
    class BinaryRelationshipRuleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "forwardRelationshipName": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "inverseRelationshipName": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "relationshipCategory": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceCategory": (value: any) => { return value; },
                "targetCategory": (value: any) => { return value; }
            };
        }

        /**
         * Converts a BinaryRelationshipRule to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let binaryRelationshipRule = <Dto.BinaryRelationshipRule>thing;
            if (typeof(binaryRelationshipRule) == "undefined" || binaryRelationshipRule == null) {
                throw new Error("The object is not a BinaryRelationshipRule");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(binaryRelationshipRule.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(binaryRelationshipRule.classKind),
                "definition": this.getToJsonObjectConverter("definition")(binaryRelationshipRule.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(binaryRelationshipRule.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(binaryRelationshipRule.excludedPerson),
                "forwardRelationshipName": this.getToJsonObjectConverter("forwardRelationshipName")(binaryRelationshipRule.forwardRelationshipName),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(binaryRelationshipRule.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(binaryRelationshipRule.iid),
                "inverseRelationshipName": this.getToJsonObjectConverter("inverseRelationshipName")(binaryRelationshipRule.inverseRelationshipName),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(binaryRelationshipRule.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryRelationshipRule.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(binaryRelationshipRule.name),
                "relationshipCategory": this.getToJsonObjectConverter("relationshipCategory")(binaryRelationshipRule.relationshipCategory),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryRelationshipRule.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(binaryRelationshipRule.shortName),
                "sourceCategory": this.getToJsonObjectConverter("sourceCategory")(binaryRelationshipRule.sourceCategory),
                "targetCategory": this.getToJsonObjectConverter("targetCategory")(binaryRelationshipRule.targetCategory)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a BinaryRelationshipRule
         */
        public parse(jsonObject: any) : Dto.Thing {
            const binaryRelationshipRule = new Dto.BinaryRelationshipRule(jsonObject["iid"], jsonObject["revisionNumber"], true);
            binaryRelationshipRule.alias = jsonObject["alias"];
            binaryRelationshipRule.definition = jsonObject["definition"];
            binaryRelationshipRule.excludedDomain = jsonObject["excludedDomain"];
            binaryRelationshipRule.excludedPerson = jsonObject["excludedPerson"];
            binaryRelationshipRule.forwardRelationshipName = jsonObject["forwardRelationshipName"];
            binaryRelationshipRule.hyperLink = jsonObject["hyperLink"];
            binaryRelationshipRule.inverseRelationshipName = jsonObject["inverseRelationshipName"];
            binaryRelationshipRule.isDeprecated = jsonObject["isDeprecated"];
            binaryRelationshipRule.modifiedOn = jsonObject["modifiedOn"];
            binaryRelationshipRule.name = jsonObject["name"];
            binaryRelationshipRule.relationshipCategory = jsonObject["relationshipCategory"];
            binaryRelationshipRule.shortName = jsonObject["shortName"];
            binaryRelationshipRule.sourceCategory = jsonObject["sourceCategory"];
            binaryRelationshipRule.targetCategory = jsonObject["targetCategory"];

            return binaryRelationshipRule;
        }
    }

    /**
     * The serializer for Book
     */
    class BookSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "section": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Book to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let book = <Dto.Book>thing;
            if (typeof(book) == "undefined" || book == null) {
                throw new Error("The object is not a Book");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(book.category),
                "classKind": this.getToJsonObjectConverter("classKind")(book.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(book.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(book.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(book.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(book.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(book.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(book.name),
                "owner": this.getToJsonObjectConverter("owner")(book.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(book.revisionNumber),
                "section": this.getToJsonObjectConverter("section")(book.section),
                "shortName": this.getToJsonObjectConverter("shortName")(book.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Book
         */
        public parse(jsonObject: any) : Dto.Thing {
            const book = new Dto.Book(jsonObject["iid"], jsonObject["revisionNumber"], true);
            book.category = jsonObject["category"];
            book.createdOn = jsonObject["createdOn"];
            book.excludedDomain = jsonObject["excludedDomain"];
            book.excludedPerson = jsonObject["excludedPerson"];
            book.modifiedOn = jsonObject["modifiedOn"];
            book.name = jsonObject["name"];
            book.owner = jsonObject["owner"];
            book.section = parseOrderedItemArray(jsonObject["section"]);
            book.shortName = jsonObject["shortName"];

            return book;
        }
    }

    /**
     * The serializer for BooleanParameterType
     */
    class BooleanParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a BooleanParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let booleanParameterType = <Dto.BooleanParameterType>thing;
            if (typeof(booleanParameterType) == "undefined" || booleanParameterType == null) {
                throw new Error("The object is not a BooleanParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(booleanParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(booleanParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(booleanParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(booleanParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(booleanParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(booleanParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(booleanParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(booleanParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(booleanParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(booleanParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(booleanParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(booleanParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(booleanParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(booleanParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a BooleanParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const booleanParameterType = new Dto.BooleanParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            booleanParameterType.alias = jsonObject["alias"];
            booleanParameterType.category = jsonObject["category"];
            booleanParameterType.definition = jsonObject["definition"];
            booleanParameterType.excludedDomain = jsonObject["excludedDomain"];
            booleanParameterType.excludedPerson = jsonObject["excludedPerson"];
            booleanParameterType.hyperLink = jsonObject["hyperLink"];
            booleanParameterType.isDeprecated = jsonObject["isDeprecated"];
            booleanParameterType.modifiedOn = jsonObject["modifiedOn"];
            booleanParameterType.name = jsonObject["name"];
            booleanParameterType.shortName = jsonObject["shortName"];
            booleanParameterType.symbol = jsonObject["symbol"];

            return booleanParameterType;
        }
    }

    /**
     * The serializer for Bounds
     */
    class BoundsSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "height": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "width": (value: any) => { return value; },
                "x": (value: any) => { return value; },
                "y": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Bounds to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let bounds = <Dto.Bounds>thing;
            if (typeof(bounds) == "undefined" || bounds == null) {
                throw new Error("The object is not a Bounds");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(bounds.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(bounds.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(bounds.excludedPerson),
                "height": this.getToJsonObjectConverter("height")(bounds.height),
                "iid": this.getToJsonObjectConverter("iid")(bounds.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(bounds.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(bounds.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(bounds.revisionNumber),
                "width": this.getToJsonObjectConverter("width")(bounds.width),
                "x": this.getToJsonObjectConverter("x")(bounds.x),
                "y": this.getToJsonObjectConverter("y")(bounds.y)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Bounds
         */
        public parse(jsonObject: any) : Dto.Thing {
            const bounds = new Dto.Bounds(jsonObject["iid"], jsonObject["revisionNumber"], true);
            bounds.excludedDomain = jsonObject["excludedDomain"];
            bounds.excludedPerson = jsonObject["excludedPerson"];
            bounds.height = jsonObject["height"];
            bounds.modifiedOn = jsonObject["modifiedOn"];
            bounds.name = jsonObject["name"];
            bounds.width = jsonObject["width"];
            bounds.x = jsonObject["x"];
            bounds.y = jsonObject["y"];

            return bounds;
        }
    }

    /**
     * The serializer for BuiltInRuleVerification
     */
    class BuiltInRuleVerificationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "executedOn": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isActive": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "status": (value: any) => { return Dto.RuleVerificationStatusKind[value]; }
            };
        }

        /**
         * Converts a BuiltInRuleVerification to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let builtInRuleVerification = <Dto.BuiltInRuleVerification>thing;
            if (typeof(builtInRuleVerification) == "undefined" || builtInRuleVerification == null) {
                throw new Error("The object is not a BuiltInRuleVerification");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(builtInRuleVerification.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(builtInRuleVerification.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(builtInRuleVerification.excludedPerson),
                "executedOn": this.getToJsonObjectConverter("executedOn")(builtInRuleVerification.executedOn),
                "iid": this.getToJsonObjectConverter("iid")(builtInRuleVerification.iid),
                "isActive": this.getToJsonObjectConverter("isActive")(builtInRuleVerification.isActive),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(builtInRuleVerification.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(builtInRuleVerification.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(builtInRuleVerification.revisionNumber),
                "status": this.getToJsonObjectConverter("status")(builtInRuleVerification.status)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a BuiltInRuleVerification
         */
        public parse(jsonObject: any) : Dto.Thing {
            const builtInRuleVerification = new Dto.BuiltInRuleVerification(jsonObject["iid"], jsonObject["revisionNumber"], true);
            builtInRuleVerification.excludedDomain = jsonObject["excludedDomain"];
            builtInRuleVerification.excludedPerson = jsonObject["excludedPerson"];
            builtInRuleVerification.executedOn = jsonObject["executedOn"];
            builtInRuleVerification.isActive = jsonObject["isActive"];
            builtInRuleVerification.modifiedOn = jsonObject["modifiedOn"];
            builtInRuleVerification.name = jsonObject["name"];
            builtInRuleVerification.status = Dto.RuleVerificationStatusKind[<string>jsonObject["status"]];

            return builtInRuleVerification;
        }
    }

    /**
     * The serializer for Category
     */
    class CategorySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isAbstract": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "permissibleClass": (value: any) => { return value.map((x, i) => Dto.ClassKind[x]); },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "superCategory": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Category to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let category = <Dto.Category>thing;
            if (typeof(category) == "undefined" || category == null) {
                throw new Error("The object is not a Category");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(category.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(category.classKind),
                "definition": this.getToJsonObjectConverter("definition")(category.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(category.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(category.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(category.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(category.iid),
                "isAbstract": this.getToJsonObjectConverter("isAbstract")(category.isAbstract),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(category.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(category.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(category.name),
                "permissibleClass": this.getToJsonObjectConverter("permissibleClass")(category.permissibleClass),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(category.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(category.shortName),
                "superCategory": this.getToJsonObjectConverter("superCategory")(category.superCategory)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Category
         */
        public parse(jsonObject: any) : Dto.Thing {
            const category = new Dto.Category(jsonObject["iid"], jsonObject["revisionNumber"], true);
            category.alias = jsonObject["alias"];
            category.definition = jsonObject["definition"];
            category.excludedDomain = jsonObject["excludedDomain"];
            category.excludedPerson = jsonObject["excludedPerson"];
            category.hyperLink = jsonObject["hyperLink"];
            category.isAbstract = jsonObject["isAbstract"];
            category.isDeprecated = jsonObject["isDeprecated"];
            category.modifiedOn = jsonObject["modifiedOn"];
            category.name = jsonObject["name"];
            category.permissibleClass = jsonObject["permissibleClass"].map((x: string) => Dto.ClassKind[x]);
            category.shortName = jsonObject["shortName"];
            category.superCategory = jsonObject["superCategory"];

            return category;
        }
    }

    /**
     * The serializer for ChangeProposal
     */
    class ChangeProposalSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "changeRequest": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ChangeProposal to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let changeProposal = <Dto.ChangeProposal>thing;
            if (typeof(changeProposal) == "undefined" || changeProposal == null) {
                throw new Error("The object is not a ChangeProposal");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(changeProposal.approvedBy),
                "author": this.getToJsonObjectConverter("author")(changeProposal.author),
                "category": this.getToJsonObjectConverter("category")(changeProposal.category),
                "changeRequest": this.getToJsonObjectConverter("changeRequest")(changeProposal.changeRequest),
                "classification": this.getToJsonObjectConverter("classification")(changeProposal.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(changeProposal.classKind),
                "content": this.getToJsonObjectConverter("content")(changeProposal.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(changeProposal.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(changeProposal.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(changeProposal.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(changeProposal.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(changeProposal.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(changeProposal.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(changeProposal.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(changeProposal.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(changeProposal.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(changeProposal.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(changeProposal.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(changeProposal.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(changeProposal.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(changeProposal.status),
                "title": this.getToJsonObjectConverter("title")(changeProposal.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ChangeProposal
         */
        public parse(jsonObject: any) : Dto.Thing {
            const changeProposal = new Dto.ChangeProposal(jsonObject["iid"], jsonObject["revisionNumber"], true);
            changeProposal.approvedBy = jsonObject["approvedBy"];
            changeProposal.author = jsonObject["author"];
            changeProposal.category = jsonObject["category"];
            changeProposal.changeRequest = jsonObject["changeRequest"];
            changeProposal.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            changeProposal.content = jsonObject["content"];
            changeProposal.createdOn = jsonObject["createdOn"];
            changeProposal.discussion = jsonObject["discussion"];
            changeProposal.excludedDomain = jsonObject["excludedDomain"];
            changeProposal.excludedPerson = jsonObject["excludedPerson"];
            changeProposal.languageCode = jsonObject["languageCode"];
            changeProposal.modifiedOn = jsonObject["modifiedOn"];
            changeProposal.owner = jsonObject["owner"];
            changeProposal.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            changeProposal.relatedThing = jsonObject["relatedThing"];
            changeProposal.shortName = jsonObject["shortName"];
            changeProposal.sourceAnnotation = jsonObject["sourceAnnotation"];
            changeProposal.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            changeProposal.title = jsonObject["title"];

            return changeProposal;
        }
    }

    /**
     * The serializer for ChangeRequest
     */
    class ChangeRequestSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ChangeRequest to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let changeRequest = <Dto.ChangeRequest>thing;
            if (typeof(changeRequest) == "undefined" || changeRequest == null) {
                throw new Error("The object is not a ChangeRequest");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(changeRequest.approvedBy),
                "author": this.getToJsonObjectConverter("author")(changeRequest.author),
                "category": this.getToJsonObjectConverter("category")(changeRequest.category),
                "classification": this.getToJsonObjectConverter("classification")(changeRequest.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(changeRequest.classKind),
                "content": this.getToJsonObjectConverter("content")(changeRequest.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(changeRequest.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(changeRequest.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(changeRequest.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(changeRequest.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(changeRequest.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(changeRequest.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(changeRequest.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(changeRequest.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(changeRequest.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(changeRequest.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(changeRequest.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(changeRequest.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(changeRequest.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(changeRequest.status),
                "title": this.getToJsonObjectConverter("title")(changeRequest.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ChangeRequest
         */
        public parse(jsonObject: any) : Dto.Thing {
            const changeRequest = new Dto.ChangeRequest(jsonObject["iid"], jsonObject["revisionNumber"], true);
            changeRequest.approvedBy = jsonObject["approvedBy"];
            changeRequest.author = jsonObject["author"];
            changeRequest.category = jsonObject["category"];
            changeRequest.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            changeRequest.content = jsonObject["content"];
            changeRequest.createdOn = jsonObject["createdOn"];
            changeRequest.discussion = jsonObject["discussion"];
            changeRequest.excludedDomain = jsonObject["excludedDomain"];
            changeRequest.excludedPerson = jsonObject["excludedPerson"];
            changeRequest.languageCode = jsonObject["languageCode"];
            changeRequest.modifiedOn = jsonObject["modifiedOn"];
            changeRequest.owner = jsonObject["owner"];
            changeRequest.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            changeRequest.relatedThing = jsonObject["relatedThing"];
            changeRequest.shortName = jsonObject["shortName"];
            changeRequest.sourceAnnotation = jsonObject["sourceAnnotation"];
            changeRequest.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            changeRequest.title = jsonObject["title"];

            return changeRequest;
        }
    }

    /**
     * The serializer for Citation
     */
    class CitationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isAdaptation": (value: any) => { return value; },
                "location": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "remark": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "source": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Citation to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let citation = <Dto.Citation>thing;
            if (typeof(citation) == "undefined" || citation == null) {
                throw new Error("The object is not a Citation");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(citation.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(citation.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(citation.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(citation.iid),
                "isAdaptation": this.getToJsonObjectConverter("isAdaptation")(citation.isAdaptation),
                "location": this.getToJsonObjectConverter("location")(citation.location),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(citation.modifiedOn),
                "remark": this.getToJsonObjectConverter("remark")(citation.remark),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(citation.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(citation.shortName),
                "source": this.getToJsonObjectConverter("source")(citation.source)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Citation
         */
        public parse(jsonObject: any) : Dto.Thing {
            const citation = new Dto.Citation(jsonObject["iid"], jsonObject["revisionNumber"], true);
            citation.excludedDomain = jsonObject["excludedDomain"];
            citation.excludedPerson = jsonObject["excludedPerson"];
            citation.isAdaptation = jsonObject["isAdaptation"];
            citation.location = jsonObject["location"];
            citation.modifiedOn = jsonObject["modifiedOn"];
            citation.remark = jsonObject["remark"];
            citation.shortName = jsonObject["shortName"];
            citation.source = jsonObject["source"];

            return citation;
        }
    }

    /**
     * The serializer for Color
     */
    class ColorSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "blue": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "green": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "red": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Color to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let color = <Dto.Color>thing;
            if (typeof(color) == "undefined" || color == null) {
                throw new Error("The object is not a Color");
            }

            let jsonObject = {
                "blue": this.getToJsonObjectConverter("blue")(color.blue),
                "classKind": this.getToJsonObjectConverter("classKind")(color.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(color.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(color.excludedPerson),
                "green": this.getToJsonObjectConverter("green")(color.green),
                "iid": this.getToJsonObjectConverter("iid")(color.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(color.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(color.name),
                "red": this.getToJsonObjectConverter("red")(color.red),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(color.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Color
         */
        public parse(jsonObject: any) : Dto.Thing {
            const color = new Dto.Color(jsonObject["iid"], jsonObject["revisionNumber"], true);
            color.blue = jsonObject["blue"];
            color.excludedDomain = jsonObject["excludedDomain"];
            color.excludedPerson = jsonObject["excludedPerson"];
            color.green = jsonObject["green"];
            color.modifiedOn = jsonObject["modifiedOn"];
            color.name = jsonObject["name"];
            color.red = jsonObject["red"];

            return color;
        }
    }

    /**
     * The serializer for CommonFileStore
     */
    class CommonFileStoreSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "file": (value: any) => { return value; },
                "folder": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a CommonFileStore to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let commonFileStore = <Dto.CommonFileStore>thing;
            if (typeof(commonFileStore) == "undefined" || commonFileStore == null) {
                throw new Error("The object is not a CommonFileStore");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(commonFileStore.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(commonFileStore.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(commonFileStore.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(commonFileStore.excludedPerson),
                "file": this.getToJsonObjectConverter("file")(commonFileStore.file),
                "folder": this.getToJsonObjectConverter("folder")(commonFileStore.folder),
                "iid": this.getToJsonObjectConverter("iid")(commonFileStore.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(commonFileStore.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(commonFileStore.name),
                "owner": this.getToJsonObjectConverter("owner")(commonFileStore.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(commonFileStore.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a CommonFileStore
         */
        public parse(jsonObject: any) : Dto.Thing {
            const commonFileStore = new Dto.CommonFileStore(jsonObject["iid"], jsonObject["revisionNumber"], true);
            commonFileStore.createdOn = jsonObject["createdOn"];
            commonFileStore.excludedDomain = jsonObject["excludedDomain"];
            commonFileStore.excludedPerson = jsonObject["excludedPerson"];
            commonFileStore.file = jsonObject["file"];
            commonFileStore.folder = jsonObject["folder"];
            commonFileStore.modifiedOn = jsonObject["modifiedOn"];
            commonFileStore.name = jsonObject["name"];
            commonFileStore.owner = jsonObject["owner"];

            return commonFileStore;
        }
    }

    /**
     * The serializer for CompoundParameterType
     */
    class CompoundParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "component": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isFinalized": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a CompoundParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let compoundParameterType = <Dto.CompoundParameterType>thing;
            if (typeof(compoundParameterType) == "undefined" || compoundParameterType == null) {
                throw new Error("The object is not a CompoundParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(compoundParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(compoundParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(compoundParameterType.classKind),
                "component": this.getToJsonObjectConverter("component")(compoundParameterType.component),
                "definition": this.getToJsonObjectConverter("definition")(compoundParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(compoundParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(compoundParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(compoundParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(compoundParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(compoundParameterType.isDeprecated),
                "isFinalized": this.getToJsonObjectConverter("isFinalized")(compoundParameterType.isFinalized),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(compoundParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(compoundParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(compoundParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(compoundParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(compoundParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a CompoundParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const compoundParameterType = new Dto.CompoundParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            compoundParameterType.alias = jsonObject["alias"];
            compoundParameterType.category = jsonObject["category"];
            compoundParameterType.component = parseOrderedItemArray(jsonObject["component"]);
            compoundParameterType.definition = jsonObject["definition"];
            compoundParameterType.excludedDomain = jsonObject["excludedDomain"];
            compoundParameterType.excludedPerson = jsonObject["excludedPerson"];
            compoundParameterType.hyperLink = jsonObject["hyperLink"];
            compoundParameterType.isDeprecated = jsonObject["isDeprecated"];
            compoundParameterType.isFinalized = jsonObject["isFinalized"];
            compoundParameterType.modifiedOn = jsonObject["modifiedOn"];
            compoundParameterType.name = jsonObject["name"];
            compoundParameterType.shortName = jsonObject["shortName"];
            compoundParameterType.symbol = jsonObject["symbol"];

            return compoundParameterType;
        }
    }

    /**
     * The serializer for Constant
     */
    class ConstantSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "value": (value: any) => { return toJsonValueArray(<string[]>value); }
            };
        }

        /**
         * Converts a Constant to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let constant = <Dto.Constant>thing;
            if (typeof(constant) == "undefined" || constant == null) {
                throw new Error("The object is not a Constant");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(constant.alias),
                "category": this.getToJsonObjectConverter("category")(constant.category),
                "classKind": this.getToJsonObjectConverter("classKind")(constant.classKind),
                "definition": this.getToJsonObjectConverter("definition")(constant.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(constant.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(constant.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(constant.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(constant.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(constant.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(constant.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(constant.name),
                "parameterType": this.getToJsonObjectConverter("parameterType")(constant.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(constant.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(constant.scale),
                "shortName": this.getToJsonObjectConverter("shortName")(constant.shortName),
                "value": this.getToJsonObjectConverter("value")(constant.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Constant
         */
        public parse(jsonObject: any) : Dto.Thing {
            const constant = new Dto.Constant(jsonObject["iid"], jsonObject["revisionNumber"], true);
            constant.alias = jsonObject["alias"];
            constant.category = jsonObject["category"];
            constant.definition = jsonObject["definition"];
            constant.excludedDomain = jsonObject["excludedDomain"];
            constant.excludedPerson = jsonObject["excludedPerson"];
            constant.hyperLink = jsonObject["hyperLink"];
            constant.isDeprecated = jsonObject["isDeprecated"];
            constant.modifiedOn = jsonObject["modifiedOn"];
            constant.name = jsonObject["name"];
            constant.parameterType = jsonObject["parameterType"];
            constant.scale = jsonObject["scale"];
            constant.shortName = jsonObject["shortName"];
            constant.value = parseValueArray(jsonObject["value"]);

            return constant;
        }
    }

    /**
     * The serializer for ContractChangeNotice
     */
    class ContractChangeNoticeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "changeProposal": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ContractChangeNotice to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let contractChangeNotice = <Dto.ContractChangeNotice>thing;
            if (typeof(contractChangeNotice) == "undefined" || contractChangeNotice == null) {
                throw new Error("The object is not a ContractChangeNotice");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(contractChangeNotice.approvedBy),
                "author": this.getToJsonObjectConverter("author")(contractChangeNotice.author),
                "category": this.getToJsonObjectConverter("category")(contractChangeNotice.category),
                "changeProposal": this.getToJsonObjectConverter("changeProposal")(contractChangeNotice.changeProposal),
                "classification": this.getToJsonObjectConverter("classification")(contractChangeNotice.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(contractChangeNotice.classKind),
                "content": this.getToJsonObjectConverter("content")(contractChangeNotice.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(contractChangeNotice.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(contractChangeNotice.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(contractChangeNotice.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(contractChangeNotice.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(contractChangeNotice.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(contractChangeNotice.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(contractChangeNotice.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(contractChangeNotice.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(contractChangeNotice.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(contractChangeNotice.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(contractChangeNotice.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(contractChangeNotice.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(contractChangeNotice.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(contractChangeNotice.status),
                "title": this.getToJsonObjectConverter("title")(contractChangeNotice.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ContractChangeNotice
         */
        public parse(jsonObject: any) : Dto.Thing {
            const contractChangeNotice = new Dto.ContractChangeNotice(jsonObject["iid"], jsonObject["revisionNumber"], true);
            contractChangeNotice.approvedBy = jsonObject["approvedBy"];
            contractChangeNotice.author = jsonObject["author"];
            contractChangeNotice.category = jsonObject["category"];
            contractChangeNotice.changeProposal = jsonObject["changeProposal"];
            contractChangeNotice.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            contractChangeNotice.content = jsonObject["content"];
            contractChangeNotice.createdOn = jsonObject["createdOn"];
            contractChangeNotice.discussion = jsonObject["discussion"];
            contractChangeNotice.excludedDomain = jsonObject["excludedDomain"];
            contractChangeNotice.excludedPerson = jsonObject["excludedPerson"];
            contractChangeNotice.languageCode = jsonObject["languageCode"];
            contractChangeNotice.modifiedOn = jsonObject["modifiedOn"];
            contractChangeNotice.owner = jsonObject["owner"];
            contractChangeNotice.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            contractChangeNotice.relatedThing = jsonObject["relatedThing"];
            contractChangeNotice.shortName = jsonObject["shortName"];
            contractChangeNotice.sourceAnnotation = jsonObject["sourceAnnotation"];
            contractChangeNotice.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            contractChangeNotice.title = jsonObject["title"];

            return contractChangeNotice;
        }
    }

    /**
     * The serializer for CyclicRatioScale
     */
    class CyclicRatioScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isMaximumInclusive": (value: any) => { return value; },
                "isMinimumInclusive": (value: any) => { return value; },
                "mappingToReferenceScale": (value: any) => { return value; },
                "maximumPermissibleValue": (value: any) => { return value; },
                "minimumPermissibleValue": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "modulus": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "negativeValueConnotation": (value: any) => { return value; },
                "numberSet": (value: any) => { return Dto.NumberSetKind[value]; },
                "positiveValueConnotation": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return value; }
            };
        }

        /**
         * Converts a CyclicRatioScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let cyclicRatioScale = <Dto.CyclicRatioScale>thing;
            if (typeof(cyclicRatioScale) == "undefined" || cyclicRatioScale == null) {
                throw new Error("The object is not a CyclicRatioScale");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(cyclicRatioScale.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(cyclicRatioScale.classKind),
                "definition": this.getToJsonObjectConverter("definition")(cyclicRatioScale.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(cyclicRatioScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(cyclicRatioScale.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(cyclicRatioScale.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(cyclicRatioScale.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(cyclicRatioScale.isDeprecated),
                "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(cyclicRatioScale.isMaximumInclusive),
                "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(cyclicRatioScale.isMinimumInclusive),
                "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")(cyclicRatioScale.mappingToReferenceScale),
                "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(cyclicRatioScale.maximumPermissibleValue),
                "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(cyclicRatioScale.minimumPermissibleValue),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(cyclicRatioScale.modifiedOn),
                "modulus": this.getToJsonObjectConverter("modulus")(cyclicRatioScale.modulus),
                "name": this.getToJsonObjectConverter("name")(cyclicRatioScale.name),
                "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(cyclicRatioScale.negativeValueConnotation),
                "numberSet": this.getToJsonObjectConverter("numberSet")(cyclicRatioScale.numberSet),
                "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(cyclicRatioScale.positiveValueConnotation),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(cyclicRatioScale.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(cyclicRatioScale.shortName),
                "unit": this.getToJsonObjectConverter("unit")(cyclicRatioScale.unit),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(cyclicRatioScale.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a CyclicRatioScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const cyclicRatioScale = new Dto.CyclicRatioScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            cyclicRatioScale.alias = jsonObject["alias"];
            cyclicRatioScale.definition = jsonObject["definition"];
            cyclicRatioScale.excludedDomain = jsonObject["excludedDomain"];
            cyclicRatioScale.excludedPerson = jsonObject["excludedPerson"];
            cyclicRatioScale.hyperLink = jsonObject["hyperLink"];
            cyclicRatioScale.isDeprecated = jsonObject["isDeprecated"];
            cyclicRatioScale.isMaximumInclusive = jsonObject["isMaximumInclusive"];
            cyclicRatioScale.isMinimumInclusive = jsonObject["isMinimumInclusive"];
            cyclicRatioScale.mappingToReferenceScale = jsonObject["mappingToReferenceScale"];
            cyclicRatioScale.maximumPermissibleValue = jsonObject["maximumPermissibleValue"];
            cyclicRatioScale.minimumPermissibleValue = jsonObject["minimumPermissibleValue"];
            cyclicRatioScale.modifiedOn = jsonObject["modifiedOn"];
            cyclicRatioScale.modulus = jsonObject["modulus"];
            cyclicRatioScale.name = jsonObject["name"];
            cyclicRatioScale.negativeValueConnotation = jsonObject["negativeValueConnotation"];
            cyclicRatioScale.numberSet = Dto.NumberSetKind[<string>jsonObject["numberSet"]];
            cyclicRatioScale.positiveValueConnotation = jsonObject["positiveValueConnotation"];
            cyclicRatioScale.shortName = jsonObject["shortName"];
            cyclicRatioScale.unit = jsonObject["unit"];
            cyclicRatioScale.valueDefinition = jsonObject["valueDefinition"];

            return cyclicRatioScale;
        }
    }

    /**
     * The serializer for DateParameterType
     */
    class DateParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DateParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let dateParameterType = <Dto.DateParameterType>thing;
            if (typeof(dateParameterType) == "undefined" || dateParameterType == null) {
                throw new Error("The object is not a DateParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(dateParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(dateParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(dateParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(dateParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(dateParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(dateParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(dateParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(dateParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(dateParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(dateParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(dateParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(dateParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(dateParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(dateParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DateParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const dateParameterType = new Dto.DateParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            dateParameterType.alias = jsonObject["alias"];
            dateParameterType.category = jsonObject["category"];
            dateParameterType.definition = jsonObject["definition"];
            dateParameterType.excludedDomain = jsonObject["excludedDomain"];
            dateParameterType.excludedPerson = jsonObject["excludedPerson"];
            dateParameterType.hyperLink = jsonObject["hyperLink"];
            dateParameterType.isDeprecated = jsonObject["isDeprecated"];
            dateParameterType.modifiedOn = jsonObject["modifiedOn"];
            dateParameterType.name = jsonObject["name"];
            dateParameterType.shortName = jsonObject["shortName"];
            dateParameterType.symbol = jsonObject["symbol"];

            return dateParameterType;
        }
    }

    /**
     * The serializer for DateTimeParameterType
     */
    class DateTimeParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DateTimeParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let dateTimeParameterType = <Dto.DateTimeParameterType>thing;
            if (typeof(dateTimeParameterType) == "undefined" || dateTimeParameterType == null) {
                throw new Error("The object is not a DateTimeParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(dateTimeParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(dateTimeParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(dateTimeParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(dateTimeParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(dateTimeParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(dateTimeParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(dateTimeParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(dateTimeParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(dateTimeParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(dateTimeParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(dateTimeParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(dateTimeParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(dateTimeParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(dateTimeParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DateTimeParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const dateTimeParameterType = new Dto.DateTimeParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            dateTimeParameterType.alias = jsonObject["alias"];
            dateTimeParameterType.category = jsonObject["category"];
            dateTimeParameterType.definition = jsonObject["definition"];
            dateTimeParameterType.excludedDomain = jsonObject["excludedDomain"];
            dateTimeParameterType.excludedPerson = jsonObject["excludedPerson"];
            dateTimeParameterType.hyperLink = jsonObject["hyperLink"];
            dateTimeParameterType.isDeprecated = jsonObject["isDeprecated"];
            dateTimeParameterType.modifiedOn = jsonObject["modifiedOn"];
            dateTimeParameterType.name = jsonObject["name"];
            dateTimeParameterType.shortName = jsonObject["shortName"];
            dateTimeParameterType.symbol = jsonObject["symbol"];

            return dateTimeParameterType;
        }
    }

    /**
     * The serializer for DecompositionRule
     */
    class DecompositionRuleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "containedCategory": (value: any) => { return value; },
                "containingCategory": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "maxContained": (value: any) => { return value; },
                "minContained": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DecompositionRule to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let decompositionRule = <Dto.DecompositionRule>thing;
            if (typeof(decompositionRule) == "undefined" || decompositionRule == null) {
                throw new Error("The object is not a DecompositionRule");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(decompositionRule.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(decompositionRule.classKind),
                "containedCategory": this.getToJsonObjectConverter("containedCategory")(decompositionRule.containedCategory),
                "containingCategory": this.getToJsonObjectConverter("containingCategory")(decompositionRule.containingCategory),
                "definition": this.getToJsonObjectConverter("definition")(decompositionRule.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(decompositionRule.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(decompositionRule.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(decompositionRule.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(decompositionRule.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(decompositionRule.isDeprecated),
                "maxContained": this.getToJsonObjectConverter("maxContained")(decompositionRule.maxContained),
                "minContained": this.getToJsonObjectConverter("minContained")(decompositionRule.minContained),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(decompositionRule.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(decompositionRule.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(decompositionRule.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(decompositionRule.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DecompositionRule
         */
        public parse(jsonObject: any) : Dto.Thing {
            const decompositionRule = new Dto.DecompositionRule(jsonObject["iid"], jsonObject["revisionNumber"], true);
            decompositionRule.alias = jsonObject["alias"];
            decompositionRule.containedCategory = jsonObject["containedCategory"];
            decompositionRule.containingCategory = jsonObject["containingCategory"];
            decompositionRule.definition = jsonObject["definition"];
            decompositionRule.excludedDomain = jsonObject["excludedDomain"];
            decompositionRule.excludedPerson = jsonObject["excludedPerson"];
            decompositionRule.hyperLink = jsonObject["hyperLink"];
            decompositionRule.isDeprecated = jsonObject["isDeprecated"];
            decompositionRule.maxContained = jsonObject["maxContained"];
            decompositionRule.minContained = jsonObject["minContained"];
            decompositionRule.modifiedOn = jsonObject["modifiedOn"];
            decompositionRule.name = jsonObject["name"];
            decompositionRule.shortName = jsonObject["shortName"];

            return decompositionRule;
        }
    }

    /**
     * The serializer for Definition
     */
    class DefinitionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "citation": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "example": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "note": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Definition to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let definition = <Dto.Definition>thing;
            if (typeof(definition) == "undefined" || definition == null) {
                throw new Error("The object is not a Definition");
            }

            let jsonObject = {
                "citation": this.getToJsonObjectConverter("citation")(definition.citation),
                "classKind": this.getToJsonObjectConverter("classKind")(definition.classKind),
                "content": this.getToJsonObjectConverter("content")(definition.content),
                "example": this.getToJsonObjectConverter("example")(definition.example),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(definition.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(definition.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(definition.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(definition.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(definition.modifiedOn),
                "note": this.getToJsonObjectConverter("note")(definition.note),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(definition.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Definition
         */
        public parse(jsonObject: any) : Dto.Thing {
            const definition = new Dto.Definition(jsonObject["iid"], jsonObject["revisionNumber"], true);
            definition.citation = jsonObject["citation"];
            definition.content = jsonObject["content"];
            definition.example = parseOrderedItemArray(jsonObject["example"]);
            definition.excludedDomain = jsonObject["excludedDomain"];
            definition.excludedPerson = jsonObject["excludedPerson"];
            definition.languageCode = jsonObject["languageCode"];
            definition.modifiedOn = jsonObject["modifiedOn"];
            definition.note = parseOrderedItemArray(jsonObject["note"]);

            return definition;
        }
    }

    /**
     * The serializer for DerivedQuantityKind
     */
    class DerivedQuantityKindSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultScale": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "possibleScale": (value: any) => { return value; },
                "quantityDimensionSymbol": (value: any) => { return value; },
                "quantityKindFactor": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DerivedQuantityKind to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let derivedQuantityKind = <Dto.DerivedQuantityKind>thing;
            if (typeof(derivedQuantityKind) == "undefined" || derivedQuantityKind == null) {
                throw new Error("The object is not a DerivedQuantityKind");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(derivedQuantityKind.alias),
                "category": this.getToJsonObjectConverter("category")(derivedQuantityKind.category),
                "classKind": this.getToJsonObjectConverter("classKind")(derivedQuantityKind.classKind),
                "defaultScale": this.getToJsonObjectConverter("defaultScale")(derivedQuantityKind.defaultScale),
                "definition": this.getToJsonObjectConverter("definition")(derivedQuantityKind.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(derivedQuantityKind.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(derivedQuantityKind.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(derivedQuantityKind.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(derivedQuantityKind.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(derivedQuantityKind.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(derivedQuantityKind.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(derivedQuantityKind.name),
                "possibleScale": this.getToJsonObjectConverter("possibleScale")(derivedQuantityKind.possibleScale),
                "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(derivedQuantityKind.quantityDimensionSymbol),
                "quantityKindFactor": this.getToJsonObjectConverter("quantityKindFactor")(derivedQuantityKind.quantityKindFactor),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(derivedQuantityKind.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(derivedQuantityKind.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(derivedQuantityKind.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DerivedQuantityKind
         */
        public parse(jsonObject: any) : Dto.Thing {
            const derivedQuantityKind = new Dto.DerivedQuantityKind(jsonObject["iid"], jsonObject["revisionNumber"], true);
            derivedQuantityKind.alias = jsonObject["alias"];
            derivedQuantityKind.category = jsonObject["category"];
            derivedQuantityKind.defaultScale = jsonObject["defaultScale"];
            derivedQuantityKind.definition = jsonObject["definition"];
            derivedQuantityKind.excludedDomain = jsonObject["excludedDomain"];
            derivedQuantityKind.excludedPerson = jsonObject["excludedPerson"];
            derivedQuantityKind.hyperLink = jsonObject["hyperLink"];
            derivedQuantityKind.isDeprecated = jsonObject["isDeprecated"];
            derivedQuantityKind.modifiedOn = jsonObject["modifiedOn"];
            derivedQuantityKind.name = jsonObject["name"];
            derivedQuantityKind.possibleScale = jsonObject["possibleScale"];
            derivedQuantityKind.quantityDimensionSymbol = jsonObject["quantityDimensionSymbol"];
            derivedQuantityKind.quantityKindFactor = parseOrderedItemArray(jsonObject["quantityKindFactor"]);
            derivedQuantityKind.shortName = jsonObject["shortName"];
            derivedQuantityKind.symbol = jsonObject["symbol"];

            return derivedQuantityKind;
        }
    }

    /**
     * The serializer for DerivedUnit
     */
    class DerivedUnitSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unitFactor": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); }
            };
        }

        /**
         * Converts a DerivedUnit to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let derivedUnit = <Dto.DerivedUnit>thing;
            if (typeof(derivedUnit) == "undefined" || derivedUnit == null) {
                throw new Error("The object is not a DerivedUnit");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(derivedUnit.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(derivedUnit.classKind),
                "definition": this.getToJsonObjectConverter("definition")(derivedUnit.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(derivedUnit.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(derivedUnit.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(derivedUnit.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(derivedUnit.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(derivedUnit.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(derivedUnit.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(derivedUnit.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(derivedUnit.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(derivedUnit.shortName),
                "unitFactor": this.getToJsonObjectConverter("unitFactor")(derivedUnit.unitFactor)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DerivedUnit
         */
        public parse(jsonObject: any) : Dto.Thing {
            const derivedUnit = new Dto.DerivedUnit(jsonObject["iid"], jsonObject["revisionNumber"], true);
            derivedUnit.alias = jsonObject["alias"];
            derivedUnit.definition = jsonObject["definition"];
            derivedUnit.excludedDomain = jsonObject["excludedDomain"];
            derivedUnit.excludedPerson = jsonObject["excludedPerson"];
            derivedUnit.hyperLink = jsonObject["hyperLink"];
            derivedUnit.isDeprecated = jsonObject["isDeprecated"];
            derivedUnit.modifiedOn = jsonObject["modifiedOn"];
            derivedUnit.name = jsonObject["name"];
            derivedUnit.shortName = jsonObject["shortName"];
            derivedUnit.unitFactor = parseOrderedItemArray(jsonObject["unitFactor"]);

            return derivedUnit;
        }
    }

    /**
     * The serializer for DiagramCanvas
     */
    class DiagramCanvasSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "bounds": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "diagramElement": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DiagramCanvas to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let diagramCanvas = <Dto.DiagramCanvas>thing;
            if (typeof(diagramCanvas) == "undefined" || diagramCanvas == null) {
                throw new Error("The object is not a DiagramCanvas");
            }

            let jsonObject = {
                "bounds": this.getToJsonObjectConverter("bounds")(diagramCanvas.bounds),
                "classKind": this.getToJsonObjectConverter("classKind")(diagramCanvas.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(diagramCanvas.createdOn),
                "diagramElement": this.getToJsonObjectConverter("diagramElement")(diagramCanvas.diagramElement),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(diagramCanvas.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(diagramCanvas.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(diagramCanvas.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramCanvas.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(diagramCanvas.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramCanvas.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DiagramCanvas
         */
        public parse(jsonObject: any) : Dto.Thing {
            const diagramCanvas = new Dto.DiagramCanvas(jsonObject["iid"], jsonObject["revisionNumber"], true);
            diagramCanvas.bounds = jsonObject["bounds"];
            diagramCanvas.createdOn = jsonObject["createdOn"];
            diagramCanvas.diagramElement = jsonObject["diagramElement"];
            diagramCanvas.excludedDomain = jsonObject["excludedDomain"];
            diagramCanvas.excludedPerson = jsonObject["excludedPerson"];
            diagramCanvas.modifiedOn = jsonObject["modifiedOn"];
            diagramCanvas.name = jsonObject["name"];

            return diagramCanvas;
        }
    }

    /**
     * The serializer for DiagramEdge
     */
    class DiagramEdgeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "bounds": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "depictedThing": (value: any) => { return value; },
                "diagramElement": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "localStyle": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "point": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "sharedStyle": (value: any) => { return value; },
                "source": (value: any) => { return value; },
                "target": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DiagramEdge to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let diagramEdge = <Dto.DiagramEdge>thing;
            if (typeof(diagramEdge) == "undefined" || diagramEdge == null) {
                throw new Error("The object is not a DiagramEdge");
            }

            let jsonObject = {
                "bounds": this.getToJsonObjectConverter("bounds")(diagramEdge.bounds),
                "classKind": this.getToJsonObjectConverter("classKind")(diagramEdge.classKind),
                "depictedThing": this.getToJsonObjectConverter("depictedThing")(diagramEdge.depictedThing),
                "diagramElement": this.getToJsonObjectConverter("diagramElement")(diagramEdge.diagramElement),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(diagramEdge.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(diagramEdge.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(diagramEdge.iid),
                "localStyle": this.getToJsonObjectConverter("localStyle")(diagramEdge.localStyle),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramEdge.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(diagramEdge.name),
                "point": this.getToJsonObjectConverter("point")(diagramEdge.point),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramEdge.revisionNumber),
                "sharedStyle": this.getToJsonObjectConverter("sharedStyle")(diagramEdge.sharedStyle),
                "source": this.getToJsonObjectConverter("source")(diagramEdge.source),
                "target": this.getToJsonObjectConverter("target")(diagramEdge.target)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DiagramEdge
         */
        public parse(jsonObject: any) : Dto.Thing {
            const diagramEdge = new Dto.DiagramEdge(jsonObject["iid"], jsonObject["revisionNumber"], true);
            diagramEdge.bounds = jsonObject["bounds"];
            diagramEdge.depictedThing = jsonObject["depictedThing"];
            diagramEdge.diagramElement = jsonObject["diagramElement"];
            diagramEdge.excludedDomain = jsonObject["excludedDomain"];
            diagramEdge.excludedPerson = jsonObject["excludedPerson"];
            diagramEdge.localStyle = jsonObject["localStyle"];
            diagramEdge.modifiedOn = jsonObject["modifiedOn"];
            diagramEdge.name = jsonObject["name"];
            diagramEdge.point = parseOrderedItemArray(jsonObject["point"]);
            diagramEdge.sharedStyle = jsonObject["sharedStyle"];
            diagramEdge.source = jsonObject["source"];
            diagramEdge.target = jsonObject["target"];

            return diagramEdge;
        }
    }

    /**
     * The serializer for DiagramObject
     */
    class DiagramObjectSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "bounds": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "depictedThing": (value: any) => { return value; },
                "diagramElement": (value: any) => { return value; },
                "documentation": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "localStyle": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "resolution": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "sharedStyle": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DiagramObject to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let diagramObject = <Dto.DiagramObject>thing;
            if (typeof(diagramObject) == "undefined" || diagramObject == null) {
                throw new Error("The object is not a DiagramObject");
            }

            let jsonObject = {
                "bounds": this.getToJsonObjectConverter("bounds")(diagramObject.bounds),
                "classKind": this.getToJsonObjectConverter("classKind")(diagramObject.classKind),
                "depictedThing": this.getToJsonObjectConverter("depictedThing")(diagramObject.depictedThing),
                "diagramElement": this.getToJsonObjectConverter("diagramElement")(diagramObject.diagramElement),
                "documentation": this.getToJsonObjectConverter("documentation")(diagramObject.documentation),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(diagramObject.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(diagramObject.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(diagramObject.iid),
                "localStyle": this.getToJsonObjectConverter("localStyle")(diagramObject.localStyle),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramObject.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(diagramObject.name),
                "resolution": this.getToJsonObjectConverter("resolution")(diagramObject.resolution),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramObject.revisionNumber),
                "sharedStyle": this.getToJsonObjectConverter("sharedStyle")(diagramObject.sharedStyle)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DiagramObject
         */
        public parse(jsonObject: any) : Dto.Thing {
            const diagramObject = new Dto.DiagramObject(jsonObject["iid"], jsonObject["revisionNumber"], true);
            diagramObject.bounds = jsonObject["bounds"];
            diagramObject.depictedThing = jsonObject["depictedThing"];
            diagramObject.diagramElement = jsonObject["diagramElement"];
            diagramObject.documentation = jsonObject["documentation"];
            diagramObject.excludedDomain = jsonObject["excludedDomain"];
            diagramObject.excludedPerson = jsonObject["excludedPerson"];
            diagramObject.localStyle = jsonObject["localStyle"];
            diagramObject.modifiedOn = jsonObject["modifiedOn"];
            diagramObject.name = jsonObject["name"];
            diagramObject.resolution = jsonObject["resolution"];
            diagramObject.sharedStyle = jsonObject["sharedStyle"];

            return diagramObject;
        }
    }

    /**
     * The serializer for DomainFileStore
     */
    class DomainFileStoreSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "file": (value: any) => { return value; },
                "folder": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isHidden": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DomainFileStore to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let domainFileStore = <Dto.DomainFileStore>thing;
            if (typeof(domainFileStore) == "undefined" || domainFileStore == null) {
                throw new Error("The object is not a DomainFileStore");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(domainFileStore.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(domainFileStore.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(domainFileStore.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(domainFileStore.excludedPerson),
                "file": this.getToJsonObjectConverter("file")(domainFileStore.file),
                "folder": this.getToJsonObjectConverter("folder")(domainFileStore.folder),
                "iid": this.getToJsonObjectConverter("iid")(domainFileStore.iid),
                "isHidden": this.getToJsonObjectConverter("isHidden")(domainFileStore.isHidden),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainFileStore.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(domainFileStore.name),
                "owner": this.getToJsonObjectConverter("owner")(domainFileStore.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainFileStore.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DomainFileStore
         */
        public parse(jsonObject: any) : Dto.Thing {
            const domainFileStore = new Dto.DomainFileStore(jsonObject["iid"], jsonObject["revisionNumber"], true);
            domainFileStore.createdOn = jsonObject["createdOn"];
            domainFileStore.excludedDomain = jsonObject["excludedDomain"];
            domainFileStore.excludedPerson = jsonObject["excludedPerson"];
            domainFileStore.file = jsonObject["file"];
            domainFileStore.folder = jsonObject["folder"];
            domainFileStore.isHidden = jsonObject["isHidden"];
            domainFileStore.modifiedOn = jsonObject["modifiedOn"];
            domainFileStore.name = jsonObject["name"];
            domainFileStore.owner = jsonObject["owner"];

            return domainFileStore;
        }
    }

    /**
     * The serializer for DomainOfExpertise
     */
    class DomainOfExpertiseSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DomainOfExpertise to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let domainOfExpertise = <Dto.DomainOfExpertise>thing;
            if (typeof(domainOfExpertise) == "undefined" || domainOfExpertise == null) {
                throw new Error("The object is not a DomainOfExpertise");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(domainOfExpertise.alias),
                "category": this.getToJsonObjectConverter("category")(domainOfExpertise.category),
                "classKind": this.getToJsonObjectConverter("classKind")(domainOfExpertise.classKind),
                "definition": this.getToJsonObjectConverter("definition")(domainOfExpertise.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(domainOfExpertise.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(domainOfExpertise.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(domainOfExpertise.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(domainOfExpertise.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(domainOfExpertise.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainOfExpertise.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(domainOfExpertise.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainOfExpertise.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(domainOfExpertise.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DomainOfExpertise
         */
        public parse(jsonObject: any) : Dto.Thing {
            const domainOfExpertise = new Dto.DomainOfExpertise(jsonObject["iid"], jsonObject["revisionNumber"], true);
            domainOfExpertise.alias = jsonObject["alias"];
            domainOfExpertise.category = jsonObject["category"];
            domainOfExpertise.definition = jsonObject["definition"];
            domainOfExpertise.excludedDomain = jsonObject["excludedDomain"];
            domainOfExpertise.excludedPerson = jsonObject["excludedPerson"];
            domainOfExpertise.hyperLink = jsonObject["hyperLink"];
            domainOfExpertise.isDeprecated = jsonObject["isDeprecated"];
            domainOfExpertise.modifiedOn = jsonObject["modifiedOn"];
            domainOfExpertise.name = jsonObject["name"];
            domainOfExpertise.shortName = jsonObject["shortName"];

            return domainOfExpertise;
        }
    }

    /**
     * The serializer for DomainOfExpertiseGroup
     */
    class DomainOfExpertiseGroupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "domain": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a DomainOfExpertiseGroup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let domainOfExpertiseGroup = <Dto.DomainOfExpertiseGroup>thing;
            if (typeof(domainOfExpertiseGroup) == "undefined" || domainOfExpertiseGroup == null) {
                throw new Error("The object is not a DomainOfExpertiseGroup");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(domainOfExpertiseGroup.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(domainOfExpertiseGroup.classKind),
                "definition": this.getToJsonObjectConverter("definition")(domainOfExpertiseGroup.definition),
                "domain": this.getToJsonObjectConverter("domain")(domainOfExpertiseGroup.domain),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(domainOfExpertiseGroup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(domainOfExpertiseGroup.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(domainOfExpertiseGroup.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(domainOfExpertiseGroup.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(domainOfExpertiseGroup.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainOfExpertiseGroup.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(domainOfExpertiseGroup.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainOfExpertiseGroup.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(domainOfExpertiseGroup.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a DomainOfExpertiseGroup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const domainOfExpertiseGroup = new Dto.DomainOfExpertiseGroup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            domainOfExpertiseGroup.alias = jsonObject["alias"];
            domainOfExpertiseGroup.definition = jsonObject["definition"];
            domainOfExpertiseGroup.domain = jsonObject["domain"];
            domainOfExpertiseGroup.excludedDomain = jsonObject["excludedDomain"];
            domainOfExpertiseGroup.excludedPerson = jsonObject["excludedPerson"];
            domainOfExpertiseGroup.hyperLink = jsonObject["hyperLink"];
            domainOfExpertiseGroup.isDeprecated = jsonObject["isDeprecated"];
            domainOfExpertiseGroup.modifiedOn = jsonObject["modifiedOn"];
            domainOfExpertiseGroup.name = jsonObject["name"];
            domainOfExpertiseGroup.shortName = jsonObject["shortName"];

            return domainOfExpertiseGroup;
        }
    }

    /**
     * The serializer for ElementDefinition
     */
    class ElementDefinitionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "containedElement": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameter": (value: any) => { return value; },
                "parameterGroup": (value: any) => { return value; },
                "referencedElement": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ElementDefinition to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let elementDefinition = <Dto.ElementDefinition>thing;
            if (typeof(elementDefinition) == "undefined" || elementDefinition == null) {
                throw new Error("The object is not a ElementDefinition");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(elementDefinition.alias),
                "category": this.getToJsonObjectConverter("category")(elementDefinition.category),
                "classKind": this.getToJsonObjectConverter("classKind")(elementDefinition.classKind),
                "containedElement": this.getToJsonObjectConverter("containedElement")(elementDefinition.containedElement),
                "definition": this.getToJsonObjectConverter("definition")(elementDefinition.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(elementDefinition.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(elementDefinition.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(elementDefinition.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(elementDefinition.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(elementDefinition.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(elementDefinition.name),
                "owner": this.getToJsonObjectConverter("owner")(elementDefinition.owner),
                "parameter": this.getToJsonObjectConverter("parameter")(elementDefinition.parameter),
                "parameterGroup": this.getToJsonObjectConverter("parameterGroup")(elementDefinition.parameterGroup),
                "referencedElement": this.getToJsonObjectConverter("referencedElement")(elementDefinition.referencedElement),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(elementDefinition.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(elementDefinition.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ElementDefinition
         */
        public parse(jsonObject: any) : Dto.Thing {
            const elementDefinition = new Dto.ElementDefinition(jsonObject["iid"], jsonObject["revisionNumber"], true);
            elementDefinition.alias = jsonObject["alias"];
            elementDefinition.category = jsonObject["category"];
            elementDefinition.containedElement = jsonObject["containedElement"];
            elementDefinition.definition = jsonObject["definition"];
            elementDefinition.excludedDomain = jsonObject["excludedDomain"];
            elementDefinition.excludedPerson = jsonObject["excludedPerson"];
            elementDefinition.hyperLink = jsonObject["hyperLink"];
            elementDefinition.modifiedOn = jsonObject["modifiedOn"];
            elementDefinition.name = jsonObject["name"];
            elementDefinition.owner = jsonObject["owner"];
            elementDefinition.parameter = jsonObject["parameter"];
            elementDefinition.parameterGroup = jsonObject["parameterGroup"];
            elementDefinition.referencedElement = jsonObject["referencedElement"];
            elementDefinition.shortName = jsonObject["shortName"];

            return elementDefinition;
        }
    }

    /**
     * The serializer for ElementUsage
     */
    class ElementUsageSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "elementDefinition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "excludeOption": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "interfaceEnd": (value: any) => { return Dto.InterfaceEndKind[value]; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterOverride": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ElementUsage to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let elementUsage = <Dto.ElementUsage>thing;
            if (typeof(elementUsage) == "undefined" || elementUsage == null) {
                throw new Error("The object is not a ElementUsage");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(elementUsage.alias),
                "category": this.getToJsonObjectConverter("category")(elementUsage.category),
                "classKind": this.getToJsonObjectConverter("classKind")(elementUsage.classKind),
                "definition": this.getToJsonObjectConverter("definition")(elementUsage.definition),
                "elementDefinition": this.getToJsonObjectConverter("elementDefinition")(elementUsage.elementDefinition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(elementUsage.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(elementUsage.excludedPerson),
                "excludeOption": this.getToJsonObjectConverter("excludeOption")(elementUsage.excludeOption),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(elementUsage.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(elementUsage.iid),
                "interfaceEnd": this.getToJsonObjectConverter("interfaceEnd")(elementUsage.interfaceEnd),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(elementUsage.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(elementUsage.name),
                "owner": this.getToJsonObjectConverter("owner")(elementUsage.owner),
                "parameterOverride": this.getToJsonObjectConverter("parameterOverride")(elementUsage.parameterOverride),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(elementUsage.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(elementUsage.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ElementUsage
         */
        public parse(jsonObject: any) : Dto.Thing {
            const elementUsage = new Dto.ElementUsage(jsonObject["iid"], jsonObject["revisionNumber"], true);
            elementUsage.alias = jsonObject["alias"];
            elementUsage.category = jsonObject["category"];
            elementUsage.definition = jsonObject["definition"];
            elementUsage.elementDefinition = jsonObject["elementDefinition"];
            elementUsage.excludedDomain = jsonObject["excludedDomain"];
            elementUsage.excludedPerson = jsonObject["excludedPerson"];
            elementUsage.excludeOption = jsonObject["excludeOption"];
            elementUsage.hyperLink = jsonObject["hyperLink"];
            elementUsage.interfaceEnd = Dto.InterfaceEndKind[<string>jsonObject["interfaceEnd"]];
            elementUsage.modifiedOn = jsonObject["modifiedOn"];
            elementUsage.name = jsonObject["name"];
            elementUsage.owner = jsonObject["owner"];
            elementUsage.parameterOverride = jsonObject["parameterOverride"];
            elementUsage.shortName = jsonObject["shortName"];

            return elementUsage;
        }
    }

    /**
     * The serializer for EmailAddress
     */
    class EmailAddressSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "value": (value: any) => { return value; },
                "vcardType": (value: any) => { return Dto.VcardEmailAddressKind[value]; }
            };
        }

        /**
         * Converts a EmailAddress to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let emailAddress = <Dto.EmailAddress>thing;
            if (typeof(emailAddress) == "undefined" || emailAddress == null) {
                throw new Error("The object is not a EmailAddress");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(emailAddress.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(emailAddress.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(emailAddress.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(emailAddress.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(emailAddress.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(emailAddress.revisionNumber),
                "value": this.getToJsonObjectConverter("value")(emailAddress.value),
                "vcardType": this.getToJsonObjectConverter("vcardType")(emailAddress.vcardType)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EmailAddress
         */
        public parse(jsonObject: any) : Dto.Thing {
            const emailAddress = new Dto.EmailAddress(jsonObject["iid"], jsonObject["revisionNumber"], true);
            emailAddress.excludedDomain = jsonObject["excludedDomain"];
            emailAddress.excludedPerson = jsonObject["excludedPerson"];
            emailAddress.modifiedOn = jsonObject["modifiedOn"];
            emailAddress.value = jsonObject["value"];
            emailAddress.vcardType = Dto.VcardEmailAddressKind[<string>jsonObject["vcardType"]];

            return emailAddress;
        }
    }

    /**
     * The serializer for EngineeringModel
     */
    class EngineeringModelSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "book": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "commonFileStore": (value: any) => { return value; },
                "engineeringModelSetup": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "genericNote": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "iteration": (value: any) => { return value; },
                "lastModifiedOn": (value: any) => { return value; },
                "logEntry": (value: any) => { return value; },
                "modellingAnnotation": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a EngineeringModel to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let engineeringModel = <Dto.EngineeringModel>thing;
            if (typeof(engineeringModel) == "undefined" || engineeringModel == null) {
                throw new Error("The object is not a EngineeringModel");
            }

            let jsonObject = {
                "book": this.getToJsonObjectConverter("book")(engineeringModel.book),
                "classKind": this.getToJsonObjectConverter("classKind")(engineeringModel.classKind),
                "commonFileStore": this.getToJsonObjectConverter("commonFileStore")(engineeringModel.commonFileStore),
                "engineeringModelSetup": this.getToJsonObjectConverter("engineeringModelSetup")(engineeringModel.engineeringModelSetup),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(engineeringModel.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(engineeringModel.excludedPerson),
                "genericNote": this.getToJsonObjectConverter("genericNote")(engineeringModel.genericNote),
                "iid": this.getToJsonObjectConverter("iid")(engineeringModel.iid),
                "iteration": this.getToJsonObjectConverter("iteration")(engineeringModel.iteration),
                "lastModifiedOn": this.getToJsonObjectConverter("lastModifiedOn")(engineeringModel.lastModifiedOn),
                "logEntry": this.getToJsonObjectConverter("logEntry")(engineeringModel.logEntry),
                "modellingAnnotation": this.getToJsonObjectConverter("modellingAnnotation")(engineeringModel.modellingAnnotation),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModel.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModel.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EngineeringModel
         */
        public parse(jsonObject: any) : Dto.Thing {
            const engineeringModel = new Dto.EngineeringModel(jsonObject["iid"], jsonObject["revisionNumber"], true);
            engineeringModel.book = parseOrderedItemArray(jsonObject["book"]);
            engineeringModel.commonFileStore = jsonObject["commonFileStore"];
            engineeringModel.engineeringModelSetup = jsonObject["engineeringModelSetup"];
            engineeringModel.excludedDomain = jsonObject["excludedDomain"];
            engineeringModel.excludedPerson = jsonObject["excludedPerson"];
            engineeringModel.genericNote = jsonObject["genericNote"];
            engineeringModel.iteration = jsonObject["iteration"];
            engineeringModel.lastModifiedOn = jsonObject["lastModifiedOn"];
            engineeringModel.logEntry = jsonObject["logEntry"];
            engineeringModel.modellingAnnotation = jsonObject["modellingAnnotation"];
            engineeringModel.modifiedOn = jsonObject["modifiedOn"];

            return engineeringModel;
        }
    }

    /**
     * The serializer for EngineeringModelDataDiscussionItem
     */
    class EngineeringModelDataDiscussionItemSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "replyTo": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a EngineeringModelDataDiscussionItem to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let engineeringModelDataDiscussionItem = <Dto.EngineeringModelDataDiscussionItem>thing;
            if (typeof(engineeringModelDataDiscussionItem) == "undefined" || engineeringModelDataDiscussionItem == null) {
                throw new Error("The object is not a EngineeringModelDataDiscussionItem");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(engineeringModelDataDiscussionItem.author),
                "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelDataDiscussionItem.classKind),
                "content": this.getToJsonObjectConverter("content")(engineeringModelDataDiscussionItem.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(engineeringModelDataDiscussionItem.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(engineeringModelDataDiscussionItem.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(engineeringModelDataDiscussionItem.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(engineeringModelDataDiscussionItem.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(engineeringModelDataDiscussionItem.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelDataDiscussionItem.modifiedOn),
                "replyTo": this.getToJsonObjectConverter("replyTo")(engineeringModelDataDiscussionItem.replyTo),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelDataDiscussionItem.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EngineeringModelDataDiscussionItem
         */
        public parse(jsonObject: any) : Dto.Thing {
            const engineeringModelDataDiscussionItem = new Dto.EngineeringModelDataDiscussionItem(jsonObject["iid"], jsonObject["revisionNumber"], true);
            engineeringModelDataDiscussionItem.author = jsonObject["author"];
            engineeringModelDataDiscussionItem.content = jsonObject["content"];
            engineeringModelDataDiscussionItem.createdOn = jsonObject["createdOn"];
            engineeringModelDataDiscussionItem.excludedDomain = jsonObject["excludedDomain"];
            engineeringModelDataDiscussionItem.excludedPerson = jsonObject["excludedPerson"];
            engineeringModelDataDiscussionItem.languageCode = jsonObject["languageCode"];
            engineeringModelDataDiscussionItem.modifiedOn = jsonObject["modifiedOn"];
            engineeringModelDataDiscussionItem.replyTo = jsonObject["replyTo"];

            return engineeringModelDataDiscussionItem;
        }
    }

    /**
     * The serializer for EngineeringModelDataNote
     */
    class EngineeringModelDataNoteSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a EngineeringModelDataNote to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let engineeringModelDataNote = <Dto.EngineeringModelDataNote>thing;
            if (typeof(engineeringModelDataNote) == "undefined" || engineeringModelDataNote == null) {
                throw new Error("The object is not a EngineeringModelDataNote");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(engineeringModelDataNote.author),
                "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelDataNote.classKind),
                "content": this.getToJsonObjectConverter("content")(engineeringModelDataNote.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(engineeringModelDataNote.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(engineeringModelDataNote.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(engineeringModelDataNote.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(engineeringModelDataNote.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(engineeringModelDataNote.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(engineeringModelDataNote.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelDataNote.modifiedOn),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(engineeringModelDataNote.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(engineeringModelDataNote.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelDataNote.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EngineeringModelDataNote
         */
        public parse(jsonObject: any) : Dto.Thing {
            const engineeringModelDataNote = new Dto.EngineeringModelDataNote(jsonObject["iid"], jsonObject["revisionNumber"], true);
            engineeringModelDataNote.author = jsonObject["author"];
            engineeringModelDataNote.content = jsonObject["content"];
            engineeringModelDataNote.createdOn = jsonObject["createdOn"];
            engineeringModelDataNote.discussion = jsonObject["discussion"];
            engineeringModelDataNote.excludedDomain = jsonObject["excludedDomain"];
            engineeringModelDataNote.excludedPerson = jsonObject["excludedPerson"];
            engineeringModelDataNote.languageCode = jsonObject["languageCode"];
            engineeringModelDataNote.modifiedOn = jsonObject["modifiedOn"];
            engineeringModelDataNote.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            engineeringModelDataNote.relatedThing = jsonObject["relatedThing"];

            return engineeringModelDataNote;
        }
    }

    /**
     * The serializer for EngineeringModelSetup
     */
    class EngineeringModelSetupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "activeDomain": (value: any) => { return value; },
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "engineeringModelIid": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "iterationSetup": (value: any) => { return value; },
                "kind": (value: any) => { return Dto.EngineeringModelKind[value]; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "participant": (value: any) => { return value; },
                "requiredRdl": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceEngineeringModelSetupIid": (value: any) => { return value; },
                "studyPhase": (value: any) => { return Dto.StudyPhaseKind[value]; }
            };
        }

        /**
         * Converts a EngineeringModelSetup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let engineeringModelSetup = <Dto.EngineeringModelSetup>thing;
            if (typeof(engineeringModelSetup) == "undefined" || engineeringModelSetup == null) {
                throw new Error("The object is not a EngineeringModelSetup");
            }

            let jsonObject = {
                "activeDomain": this.getToJsonObjectConverter("activeDomain")(engineeringModelSetup.activeDomain),
                "alias": this.getToJsonObjectConverter("alias")(engineeringModelSetup.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelSetup.classKind),
                "definition": this.getToJsonObjectConverter("definition")(engineeringModelSetup.definition),
                "engineeringModelIid": this.getToJsonObjectConverter("engineeringModelIid")(engineeringModelSetup.engineeringModelIid),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(engineeringModelSetup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(engineeringModelSetup.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(engineeringModelSetup.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(engineeringModelSetup.iid),
                "iterationSetup": this.getToJsonObjectConverter("iterationSetup")(engineeringModelSetup.iterationSetup),
                "kind": this.getToJsonObjectConverter("kind")(engineeringModelSetup.kind),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelSetup.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(engineeringModelSetup.name),
                "participant": this.getToJsonObjectConverter("participant")(engineeringModelSetup.participant),
                "requiredRdl": this.getToJsonObjectConverter("requiredRdl")(engineeringModelSetup.requiredRdl),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelSetup.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(engineeringModelSetup.shortName),
                "sourceEngineeringModelSetupIid": this.getToJsonObjectConverter("sourceEngineeringModelSetupIid")(engineeringModelSetup.sourceEngineeringModelSetupIid),
                "studyPhase": this.getToJsonObjectConverter("studyPhase")(engineeringModelSetup.studyPhase)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EngineeringModelSetup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const engineeringModelSetup = new Dto.EngineeringModelSetup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            engineeringModelSetup.activeDomain = jsonObject["activeDomain"];
            engineeringModelSetup.alias = jsonObject["alias"];
            engineeringModelSetup.definition = jsonObject["definition"];
            engineeringModelSetup.engineeringModelIid = jsonObject["engineeringModelIid"];
            engineeringModelSetup.excludedDomain = jsonObject["excludedDomain"];
            engineeringModelSetup.excludedPerson = jsonObject["excludedPerson"];
            engineeringModelSetup.hyperLink = jsonObject["hyperLink"];
            engineeringModelSetup.iterationSetup = jsonObject["iterationSetup"];
            engineeringModelSetup.kind = Dto.EngineeringModelKind[<string>jsonObject["kind"]];
            engineeringModelSetup.modifiedOn = jsonObject["modifiedOn"];
            engineeringModelSetup.name = jsonObject["name"];
            engineeringModelSetup.participant = jsonObject["participant"];
            engineeringModelSetup.requiredRdl = jsonObject["requiredRdl"];
            engineeringModelSetup.shortName = jsonObject["shortName"];
            engineeringModelSetup.sourceEngineeringModelSetupIid = jsonObject["sourceEngineeringModelSetupIid"];
            engineeringModelSetup.studyPhase = Dto.StudyPhaseKind[<string>jsonObject["studyPhase"]];

            return engineeringModelSetup;
        }
    }

    /**
     * The serializer for EnumerationParameterType
     */
    class EnumerationParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "allowMultiSelect": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); }
            };
        }

        /**
         * Converts a EnumerationParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let enumerationParameterType = <Dto.EnumerationParameterType>thing;
            if (typeof(enumerationParameterType) == "undefined" || enumerationParameterType == null) {
                throw new Error("The object is not a EnumerationParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(enumerationParameterType.alias),
                "allowMultiSelect": this.getToJsonObjectConverter("allowMultiSelect")(enumerationParameterType.allowMultiSelect),
                "category": this.getToJsonObjectConverter("category")(enumerationParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(enumerationParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(enumerationParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(enumerationParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(enumerationParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(enumerationParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(enumerationParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(enumerationParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(enumerationParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(enumerationParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(enumerationParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(enumerationParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(enumerationParameterType.symbol),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(enumerationParameterType.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EnumerationParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const enumerationParameterType = new Dto.EnumerationParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            enumerationParameterType.alias = jsonObject["alias"];
            enumerationParameterType.allowMultiSelect = jsonObject["allowMultiSelect"];
            enumerationParameterType.category = jsonObject["category"];
            enumerationParameterType.definition = jsonObject["definition"];
            enumerationParameterType.excludedDomain = jsonObject["excludedDomain"];
            enumerationParameterType.excludedPerson = jsonObject["excludedPerson"];
            enumerationParameterType.hyperLink = jsonObject["hyperLink"];
            enumerationParameterType.isDeprecated = jsonObject["isDeprecated"];
            enumerationParameterType.modifiedOn = jsonObject["modifiedOn"];
            enumerationParameterType.name = jsonObject["name"];
            enumerationParameterType.shortName = jsonObject["shortName"];
            enumerationParameterType.symbol = jsonObject["symbol"];
            enumerationParameterType.valueDefinition = parseOrderedItemArray(jsonObject["valueDefinition"]);

            return enumerationParameterType;
        }
    }

    /**
     * The serializer for EnumerationValueDefinition
     */
    class EnumerationValueDefinitionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a EnumerationValueDefinition to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let enumerationValueDefinition = <Dto.EnumerationValueDefinition>thing;
            if (typeof(enumerationValueDefinition) == "undefined" || enumerationValueDefinition == null) {
                throw new Error("The object is not a EnumerationValueDefinition");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(enumerationValueDefinition.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(enumerationValueDefinition.classKind),
                "definition": this.getToJsonObjectConverter("definition")(enumerationValueDefinition.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(enumerationValueDefinition.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(enumerationValueDefinition.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(enumerationValueDefinition.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(enumerationValueDefinition.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(enumerationValueDefinition.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(enumerationValueDefinition.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(enumerationValueDefinition.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(enumerationValueDefinition.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a EnumerationValueDefinition
         */
        public parse(jsonObject: any) : Dto.Thing {
            const enumerationValueDefinition = new Dto.EnumerationValueDefinition(jsonObject["iid"], jsonObject["revisionNumber"], true);
            enumerationValueDefinition.alias = jsonObject["alias"];
            enumerationValueDefinition.definition = jsonObject["definition"];
            enumerationValueDefinition.excludedDomain = jsonObject["excludedDomain"];
            enumerationValueDefinition.excludedPerson = jsonObject["excludedPerson"];
            enumerationValueDefinition.hyperLink = jsonObject["hyperLink"];
            enumerationValueDefinition.modifiedOn = jsonObject["modifiedOn"];
            enumerationValueDefinition.name = jsonObject["name"];
            enumerationValueDefinition.shortName = jsonObject["shortName"];

            return enumerationValueDefinition;
        }
    }

    /**
     * The serializer for ExclusiveOrExpression
     */
    class ExclusiveOrExpressionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "term": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ExclusiveOrExpression to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let exclusiveOrExpression = <Dto.ExclusiveOrExpression>thing;
            if (typeof(exclusiveOrExpression) == "undefined" || exclusiveOrExpression == null) {
                throw new Error("The object is not a ExclusiveOrExpression");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(exclusiveOrExpression.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(exclusiveOrExpression.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(exclusiveOrExpression.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(exclusiveOrExpression.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(exclusiveOrExpression.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(exclusiveOrExpression.revisionNumber),
                "term": this.getToJsonObjectConverter("term")(exclusiveOrExpression.term)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ExclusiveOrExpression
         */
        public parse(jsonObject: any) : Dto.Thing {
            const exclusiveOrExpression = new Dto.ExclusiveOrExpression(jsonObject["iid"], jsonObject["revisionNumber"], true);
            exclusiveOrExpression.excludedDomain = jsonObject["excludedDomain"];
            exclusiveOrExpression.excludedPerson = jsonObject["excludedPerson"];
            exclusiveOrExpression.modifiedOn = jsonObject["modifiedOn"];
            exclusiveOrExpression.term = jsonObject["term"];

            return exclusiveOrExpression;
        }
    }

    /**
     * The serializer for ExternalIdentifierMap
     */
    class ExternalIdentifierMapSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "correspondence": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "externalFormat": (value: any) => { return value; },
                "externalModelName": (value: any) => { return value; },
                "externalToolName": (value: any) => { return value; },
                "externalToolVersion": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ExternalIdentifierMap to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let externalIdentifierMap = <Dto.ExternalIdentifierMap>thing;
            if (typeof(externalIdentifierMap) == "undefined" || externalIdentifierMap == null) {
                throw new Error("The object is not a ExternalIdentifierMap");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(externalIdentifierMap.classKind),
                "correspondence": this.getToJsonObjectConverter("correspondence")(externalIdentifierMap.correspondence),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(externalIdentifierMap.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(externalIdentifierMap.excludedPerson),
                "externalFormat": this.getToJsonObjectConverter("externalFormat")(externalIdentifierMap.externalFormat),
                "externalModelName": this.getToJsonObjectConverter("externalModelName")(externalIdentifierMap.externalModelName),
                "externalToolName": this.getToJsonObjectConverter("externalToolName")(externalIdentifierMap.externalToolName),
                "externalToolVersion": this.getToJsonObjectConverter("externalToolVersion")(externalIdentifierMap.externalToolVersion),
                "iid": this.getToJsonObjectConverter("iid")(externalIdentifierMap.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(externalIdentifierMap.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(externalIdentifierMap.name),
                "owner": this.getToJsonObjectConverter("owner")(externalIdentifierMap.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(externalIdentifierMap.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ExternalIdentifierMap
         */
        public parse(jsonObject: any) : Dto.Thing {
            const externalIdentifierMap = new Dto.ExternalIdentifierMap(jsonObject["iid"], jsonObject["revisionNumber"], true);
            externalIdentifierMap.correspondence = jsonObject["correspondence"];
            externalIdentifierMap.excludedDomain = jsonObject["excludedDomain"];
            externalIdentifierMap.excludedPerson = jsonObject["excludedPerson"];
            externalIdentifierMap.externalFormat = jsonObject["externalFormat"];
            externalIdentifierMap.externalModelName = jsonObject["externalModelName"];
            externalIdentifierMap.externalToolName = jsonObject["externalToolName"];
            externalIdentifierMap.externalToolVersion = jsonObject["externalToolVersion"];
            externalIdentifierMap.modifiedOn = jsonObject["modifiedOn"];
            externalIdentifierMap.name = jsonObject["name"];
            externalIdentifierMap.owner = jsonObject["owner"];

            return externalIdentifierMap;
        }
    }

    /**
     * The serializer for File
     */
    class FileSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fileRevision": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "lockedBy": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a File to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let file = <Dto.File>thing;
            if (typeof(file) == "undefined" || file == null) {
                throw new Error("The object is not a File");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(file.category),
                "classKind": this.getToJsonObjectConverter("classKind")(file.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(file.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(file.excludedPerson),
                "fileRevision": this.getToJsonObjectConverter("fileRevision")(file.fileRevision),
                "iid": this.getToJsonObjectConverter("iid")(file.iid),
                "lockedBy": this.getToJsonObjectConverter("lockedBy")(file.lockedBy),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(file.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(file.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(file.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a File
         */
        public parse(jsonObject: any) : Dto.Thing {
            const file = new Dto.File(jsonObject["iid"], jsonObject["revisionNumber"], true);
            file.category = jsonObject["category"];
            file.excludedDomain = jsonObject["excludedDomain"];
            file.excludedPerson = jsonObject["excludedPerson"];
            file.fileRevision = jsonObject["fileRevision"];
            file.lockedBy = jsonObject["lockedBy"];
            file.modifiedOn = jsonObject["modifiedOn"];
            file.owner = jsonObject["owner"];

            return file;
        }
    }

    /**
     * The serializer for FileRevision
     */
    class FileRevisionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "containingFolder": (value: any) => { return value; },
                "contentHash": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "creator": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fileType": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a FileRevision to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let fileRevision = <Dto.FileRevision>thing;
            if (typeof(fileRevision) == "undefined" || fileRevision == null) {
                throw new Error("The object is not a FileRevision");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(fileRevision.classKind),
                "containingFolder": this.getToJsonObjectConverter("containingFolder")(fileRevision.containingFolder),
                "contentHash": this.getToJsonObjectConverter("contentHash")(fileRevision.contentHash),
                "createdOn": this.getToJsonObjectConverter("createdOn")(fileRevision.createdOn),
                "creator": this.getToJsonObjectConverter("creator")(fileRevision.creator),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(fileRevision.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(fileRevision.excludedPerson),
                "fileType": this.getToJsonObjectConverter("fileType")(fileRevision.fileType),
                "iid": this.getToJsonObjectConverter("iid")(fileRevision.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(fileRevision.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(fileRevision.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(fileRevision.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a FileRevision
         */
        public parse(jsonObject: any) : Dto.Thing {
            const fileRevision = new Dto.FileRevision(jsonObject["iid"], jsonObject["revisionNumber"], true);
            fileRevision.containingFolder = jsonObject["containingFolder"];
            fileRevision.contentHash = jsonObject["contentHash"];
            fileRevision.createdOn = jsonObject["createdOn"];
            fileRevision.creator = jsonObject["creator"];
            fileRevision.excludedDomain = jsonObject["excludedDomain"];
            fileRevision.excludedPerson = jsonObject["excludedPerson"];
            fileRevision.fileType = parseOrderedItemArray(jsonObject["fileType"]);
            fileRevision.modifiedOn = jsonObject["modifiedOn"];
            fileRevision.name = jsonObject["name"];

            return fileRevision;
        }
    }

    /**
     * The serializer for FileType
     */
    class FileTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "extension": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a FileType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let fileType = <Dto.FileType>thing;
            if (typeof(fileType) == "undefined" || fileType == null) {
                throw new Error("The object is not a FileType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(fileType.alias),
                "category": this.getToJsonObjectConverter("category")(fileType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(fileType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(fileType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(fileType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(fileType.excludedPerson),
                "extension": this.getToJsonObjectConverter("extension")(fileType.extension),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(fileType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(fileType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(fileType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(fileType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(fileType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(fileType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(fileType.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a FileType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const fileType = new Dto.FileType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            fileType.alias = jsonObject["alias"];
            fileType.category = jsonObject["category"];
            fileType.definition = jsonObject["definition"];
            fileType.excludedDomain = jsonObject["excludedDomain"];
            fileType.excludedPerson = jsonObject["excludedPerson"];
            fileType.extension = jsonObject["extension"];
            fileType.hyperLink = jsonObject["hyperLink"];
            fileType.isDeprecated = jsonObject["isDeprecated"];
            fileType.modifiedOn = jsonObject["modifiedOn"];
            fileType.name = jsonObject["name"];
            fileType.shortName = jsonObject["shortName"];

            return fileType;
        }
    }

    /**
     * The serializer for Folder
     */
    class FolderSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "containingFolder": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "creator": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Folder to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let folder = <Dto.Folder>thing;
            if (typeof(folder) == "undefined" || folder == null) {
                throw new Error("The object is not a Folder");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(folder.classKind),
                "containingFolder": this.getToJsonObjectConverter("containingFolder")(folder.containingFolder),
                "createdOn": this.getToJsonObjectConverter("createdOn")(folder.createdOn),
                "creator": this.getToJsonObjectConverter("creator")(folder.creator),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(folder.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(folder.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(folder.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(folder.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(folder.name),
                "owner": this.getToJsonObjectConverter("owner")(folder.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(folder.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Folder
         */
        public parse(jsonObject: any) : Dto.Thing {
            const folder = new Dto.Folder(jsonObject["iid"], jsonObject["revisionNumber"], true);
            folder.containingFolder = jsonObject["containingFolder"];
            folder.createdOn = jsonObject["createdOn"];
            folder.creator = jsonObject["creator"];
            folder.excludedDomain = jsonObject["excludedDomain"];
            folder.excludedPerson = jsonObject["excludedPerson"];
            folder.modifiedOn = jsonObject["modifiedOn"];
            folder.name = jsonObject["name"];
            folder.owner = jsonObject["owner"];

            return folder;
        }
    }

    /**
     * The serializer for Glossary
     */
    class GlossarySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "term": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Glossary to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let glossary = <Dto.Glossary>thing;
            if (typeof(glossary) == "undefined" || glossary == null) {
                throw new Error("The object is not a Glossary");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(glossary.alias),
                "category": this.getToJsonObjectConverter("category")(glossary.category),
                "classKind": this.getToJsonObjectConverter("classKind")(glossary.classKind),
                "definition": this.getToJsonObjectConverter("definition")(glossary.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(glossary.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(glossary.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(glossary.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(glossary.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(glossary.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(glossary.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(glossary.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(glossary.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(glossary.shortName),
                "term": this.getToJsonObjectConverter("term")(glossary.term)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Glossary
         */
        public parse(jsonObject: any) : Dto.Thing {
            const glossary = new Dto.Glossary(jsonObject["iid"], jsonObject["revisionNumber"], true);
            glossary.alias = jsonObject["alias"];
            glossary.category = jsonObject["category"];
            glossary.definition = jsonObject["definition"];
            glossary.excludedDomain = jsonObject["excludedDomain"];
            glossary.excludedPerson = jsonObject["excludedPerson"];
            glossary.hyperLink = jsonObject["hyperLink"];
            glossary.isDeprecated = jsonObject["isDeprecated"];
            glossary.modifiedOn = jsonObject["modifiedOn"];
            glossary.name = jsonObject["name"];
            glossary.shortName = jsonObject["shortName"];
            glossary.term = jsonObject["term"];

            return glossary;
        }
    }

    /**
     * The serializer for Goal
     */
    class GoalSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Goal to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let goal = <Dto.Goal>thing;
            if (typeof(goal) == "undefined" || goal == null) {
                throw new Error("The object is not a Goal");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(goal.alias),
                "category": this.getToJsonObjectConverter("category")(goal.category),
                "classKind": this.getToJsonObjectConverter("classKind")(goal.classKind),
                "definition": this.getToJsonObjectConverter("definition")(goal.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(goal.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(goal.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(goal.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(goal.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(goal.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(goal.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(goal.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(goal.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Goal
         */
        public parse(jsonObject: any) : Dto.Thing {
            const goal = new Dto.Goal(jsonObject["iid"], jsonObject["revisionNumber"], true);
            goal.alias = jsonObject["alias"];
            goal.category = jsonObject["category"];
            goal.definition = jsonObject["definition"];
            goal.excludedDomain = jsonObject["excludedDomain"];
            goal.excludedPerson = jsonObject["excludedPerson"];
            goal.hyperLink = jsonObject["hyperLink"];
            goal.modifiedOn = jsonObject["modifiedOn"];
            goal.name = jsonObject["name"];
            goal.shortName = jsonObject["shortName"];

            return goal;
        }
    }

    /**
     * The serializer for HyperLink
     */
    class HyperLinkSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "uri": (value: any) => { return value; }
            };
        }

        /**
         * Converts a HyperLink to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let hyperLink = <Dto.HyperLink>thing;
            if (typeof(hyperLink) == "undefined" || hyperLink == null) {
                throw new Error("The object is not a HyperLink");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(hyperLink.classKind),
                "content": this.getToJsonObjectConverter("content")(hyperLink.content),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(hyperLink.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(hyperLink.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(hyperLink.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(hyperLink.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(hyperLink.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(hyperLink.revisionNumber),
                "uri": this.getToJsonObjectConverter("uri")(hyperLink.uri)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a HyperLink
         */
        public parse(jsonObject: any) : Dto.Thing {
            const hyperLink = new Dto.HyperLink(jsonObject["iid"], jsonObject["revisionNumber"], true);
            hyperLink.content = jsonObject["content"];
            hyperLink.excludedDomain = jsonObject["excludedDomain"];
            hyperLink.excludedPerson = jsonObject["excludedPerson"];
            hyperLink.languageCode = jsonObject["languageCode"];
            hyperLink.modifiedOn = jsonObject["modifiedOn"];
            hyperLink.uri = jsonObject["uri"];

            return hyperLink;
        }
    }

    /**
     * The serializer for IdCorrespondence
     */
    class IdCorrespondenceSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "externalId": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "internalThing": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a IdCorrespondence to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let idCorrespondence = <Dto.IdCorrespondence>thing;
            if (typeof(idCorrespondence) == "undefined" || idCorrespondence == null) {
                throw new Error("The object is not a IdCorrespondence");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(idCorrespondence.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(idCorrespondence.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(idCorrespondence.excludedPerson),
                "externalId": this.getToJsonObjectConverter("externalId")(idCorrespondence.externalId),
                "iid": this.getToJsonObjectConverter("iid")(idCorrespondence.iid),
                "internalThing": this.getToJsonObjectConverter("internalThing")(idCorrespondence.internalThing),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(idCorrespondence.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(idCorrespondence.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a IdCorrespondence
         */
        public parse(jsonObject: any) : Dto.Thing {
            const idCorrespondence = new Dto.IdCorrespondence(jsonObject["iid"], jsonObject["revisionNumber"], true);
            idCorrespondence.excludedDomain = jsonObject["excludedDomain"];
            idCorrespondence.excludedPerson = jsonObject["excludedPerson"];
            idCorrespondence.externalId = jsonObject["externalId"];
            idCorrespondence.internalThing = jsonObject["internalThing"];
            idCorrespondence.modifiedOn = jsonObject["modifiedOn"];

            return idCorrespondence;
        }
    }

    /**
     * The serializer for IntervalScale
     */
    class IntervalScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isMaximumInclusive": (value: any) => { return value; },
                "isMinimumInclusive": (value: any) => { return value; },
                "mappingToReferenceScale": (value: any) => { return value; },
                "maximumPermissibleValue": (value: any) => { return value; },
                "minimumPermissibleValue": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "negativeValueConnotation": (value: any) => { return value; },
                "numberSet": (value: any) => { return Dto.NumberSetKind[value]; },
                "positiveValueConnotation": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return value; }
            };
        }

        /**
         * Converts a IntervalScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let intervalScale = <Dto.IntervalScale>thing;
            if (typeof(intervalScale) == "undefined" || intervalScale == null) {
                throw new Error("The object is not a IntervalScale");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(intervalScale.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(intervalScale.classKind),
                "definition": this.getToJsonObjectConverter("definition")(intervalScale.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(intervalScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(intervalScale.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(intervalScale.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(intervalScale.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(intervalScale.isDeprecated),
                "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(intervalScale.isMaximumInclusive),
                "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(intervalScale.isMinimumInclusive),
                "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")(intervalScale.mappingToReferenceScale),
                "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(intervalScale.maximumPermissibleValue),
                "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(intervalScale.minimumPermissibleValue),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(intervalScale.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(intervalScale.name),
                "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(intervalScale.negativeValueConnotation),
                "numberSet": this.getToJsonObjectConverter("numberSet")(intervalScale.numberSet),
                "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(intervalScale.positiveValueConnotation),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(intervalScale.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(intervalScale.shortName),
                "unit": this.getToJsonObjectConverter("unit")(intervalScale.unit),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(intervalScale.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a IntervalScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const intervalScale = new Dto.IntervalScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            intervalScale.alias = jsonObject["alias"];
            intervalScale.definition = jsonObject["definition"];
            intervalScale.excludedDomain = jsonObject["excludedDomain"];
            intervalScale.excludedPerson = jsonObject["excludedPerson"];
            intervalScale.hyperLink = jsonObject["hyperLink"];
            intervalScale.isDeprecated = jsonObject["isDeprecated"];
            intervalScale.isMaximumInclusive = jsonObject["isMaximumInclusive"];
            intervalScale.isMinimumInclusive = jsonObject["isMinimumInclusive"];
            intervalScale.mappingToReferenceScale = jsonObject["mappingToReferenceScale"];
            intervalScale.maximumPermissibleValue = jsonObject["maximumPermissibleValue"];
            intervalScale.minimumPermissibleValue = jsonObject["minimumPermissibleValue"];
            intervalScale.modifiedOn = jsonObject["modifiedOn"];
            intervalScale.name = jsonObject["name"];
            intervalScale.negativeValueConnotation = jsonObject["negativeValueConnotation"];
            intervalScale.numberSet = Dto.NumberSetKind[<string>jsonObject["numberSet"]];
            intervalScale.positiveValueConnotation = jsonObject["positiveValueConnotation"];
            intervalScale.shortName = jsonObject["shortName"];
            intervalScale.unit = jsonObject["unit"];
            intervalScale.valueDefinition = jsonObject["valueDefinition"];

            return intervalScale;
        }
    }

    /**
     * The serializer for Iteration
     */
    class IterationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "actualFiniteStateList": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultOption": (value: any) => { return value; },
                "diagramCanvas": (value: any) => { return value; },
                "domainFileStore": (value: any) => { return value; },
                "element": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "externalIdentifierMap": (value: any) => { return value; },
                "goal": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "iterationSetup": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "option": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "possibleFiniteStateList": (value: any) => { return value; },
                "publication": (value: any) => { return value; },
                "relationship": (value: any) => { return value; },
                "requirementsSpecification": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "ruleVerificationList": (value: any) => { return value; },
                "sharedDiagramStyle": (value: any) => { return value; },
                "sourceIterationIid": (value: any) => { return value; },
                "stakeholder": (value: any) => { return value; },
                "stakeholderValue": (value: any) => { return value; },
                "stakeholderValueMap": (value: any) => { return value; },
                "topElement": (value: any) => { return value; },
                "valueGroup": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Iteration to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let iteration = <Dto.Iteration>thing;
            if (typeof(iteration) == "undefined" || iteration == null) {
                throw new Error("The object is not a Iteration");
            }

            let jsonObject = {
                "actualFiniteStateList": this.getToJsonObjectConverter("actualFiniteStateList")(iteration.actualFiniteStateList),
                "classKind": this.getToJsonObjectConverter("classKind")(iteration.classKind),
                "defaultOption": this.getToJsonObjectConverter("defaultOption")(iteration.defaultOption),
                "diagramCanvas": this.getToJsonObjectConverter("diagramCanvas")(iteration.diagramCanvas),
                "domainFileStore": this.getToJsonObjectConverter("domainFileStore")(iteration.domainFileStore),
                "element": this.getToJsonObjectConverter("element")(iteration.element),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(iteration.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(iteration.excludedPerson),
                "externalIdentifierMap": this.getToJsonObjectConverter("externalIdentifierMap")(iteration.externalIdentifierMap),
                "goal": this.getToJsonObjectConverter("goal")(iteration.goal),
                "iid": this.getToJsonObjectConverter("iid")(iteration.iid),
                "iterationSetup": this.getToJsonObjectConverter("iterationSetup")(iteration.iterationSetup),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(iteration.modifiedOn),
                "option": this.getToJsonObjectConverter("option")(iteration.option),
                "possibleFiniteStateList": this.getToJsonObjectConverter("possibleFiniteStateList")(iteration.possibleFiniteStateList),
                "publication": this.getToJsonObjectConverter("publication")(iteration.publication),
                "relationship": this.getToJsonObjectConverter("relationship")(iteration.relationship),
                "requirementsSpecification": this.getToJsonObjectConverter("requirementsSpecification")(iteration.requirementsSpecification),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(iteration.revisionNumber),
                "ruleVerificationList": this.getToJsonObjectConverter("ruleVerificationList")(iteration.ruleVerificationList),
                "sharedDiagramStyle": this.getToJsonObjectConverter("sharedDiagramStyle")(iteration.sharedDiagramStyle),
                "sourceIterationIid": this.getToJsonObjectConverter("sourceIterationIid")(iteration.sourceIterationIid),
                "stakeholder": this.getToJsonObjectConverter("stakeholder")(iteration.stakeholder),
                "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")(iteration.stakeholderValue),
                "stakeholderValueMap": this.getToJsonObjectConverter("stakeholderValueMap")(iteration.stakeholderValueMap),
                "topElement": this.getToJsonObjectConverter("topElement")(iteration.topElement),
                "valueGroup": this.getToJsonObjectConverter("valueGroup")(iteration.valueGroup)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Iteration
         */
        public parse(jsonObject: any) : Dto.Thing {
            const iteration = new Dto.Iteration(jsonObject["iid"], jsonObject["revisionNumber"], true);
            iteration.actualFiniteStateList = jsonObject["actualFiniteStateList"];
            iteration.defaultOption = jsonObject["defaultOption"];
            iteration.diagramCanvas = jsonObject["diagramCanvas"];
            iteration.domainFileStore = jsonObject["domainFileStore"];
            iteration.element = jsonObject["element"];
            iteration.excludedDomain = jsonObject["excludedDomain"];
            iteration.excludedPerson = jsonObject["excludedPerson"];
            iteration.externalIdentifierMap = jsonObject["externalIdentifierMap"];
            iteration.goal = jsonObject["goal"];
            iteration.iterationSetup = jsonObject["iterationSetup"];
            iteration.modifiedOn = jsonObject["modifiedOn"];
            iteration.option = parseOrderedItemArray(jsonObject["option"]);
            iteration.possibleFiniteStateList = jsonObject["possibleFiniteStateList"];
            iteration.publication = jsonObject["publication"];
            iteration.relationship = jsonObject["relationship"];
            iteration.requirementsSpecification = jsonObject["requirementsSpecification"];
            iteration.ruleVerificationList = jsonObject["ruleVerificationList"];
            iteration.sharedDiagramStyle = jsonObject["sharedDiagramStyle"];
            iteration.sourceIterationIid = jsonObject["sourceIterationIid"];
            iteration.stakeholder = jsonObject["stakeholder"];
            iteration.stakeholderValue = jsonObject["stakeholderValue"];
            iteration.stakeholderValueMap = jsonObject["stakeholderValueMap"];
            iteration.topElement = jsonObject["topElement"];
            iteration.valueGroup = jsonObject["valueGroup"];

            return iteration;
        }
    }

    /**
     * The serializer for IterationSetup
     */
    class IterationSetupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "description": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "frozenOn": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeleted": (value: any) => { return value; },
                "iterationIid": (value: any) => { return value; },
                "iterationNumber": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "sourceIterationSetup": (value: any) => { return value; }
            };
        }

        /**
         * Converts a IterationSetup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let iterationSetup = <Dto.IterationSetup>thing;
            if (typeof(iterationSetup) == "undefined" || iterationSetup == null) {
                throw new Error("The object is not a IterationSetup");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(iterationSetup.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(iterationSetup.createdOn),
                "description": this.getToJsonObjectConverter("description")(iterationSetup.description),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(iterationSetup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(iterationSetup.excludedPerson),
                "frozenOn": this.getToJsonObjectConverter("frozenOn")(iterationSetup.frozenOn),
                "iid": this.getToJsonObjectConverter("iid")(iterationSetup.iid),
                "isDeleted": this.getToJsonObjectConverter("isDeleted")(iterationSetup.isDeleted),
                "iterationIid": this.getToJsonObjectConverter("iterationIid")(iterationSetup.iterationIid),
                "iterationNumber": this.getToJsonObjectConverter("iterationNumber")(iterationSetup.iterationNumber),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(iterationSetup.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(iterationSetup.revisionNumber),
                "sourceIterationSetup": this.getToJsonObjectConverter("sourceIterationSetup")(iterationSetup.sourceIterationSetup)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a IterationSetup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const iterationSetup = new Dto.IterationSetup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            iterationSetup.createdOn = jsonObject["createdOn"];
            iterationSetup.description = jsonObject["description"];
            iterationSetup.excludedDomain = jsonObject["excludedDomain"];
            iterationSetup.excludedPerson = jsonObject["excludedPerson"];
            iterationSetup.frozenOn = jsonObject["frozenOn"];
            iterationSetup.isDeleted = jsonObject["isDeleted"];
            iterationSetup.iterationIid = jsonObject["iterationIid"];
            iterationSetup.iterationNumber = jsonObject["iterationNumber"];
            iterationSetup.modifiedOn = jsonObject["modifiedOn"];
            iterationSetup.sourceIterationSetup = jsonObject["sourceIterationSetup"];

            return iterationSetup;
        }
    }

    /**
     * The serializer for LinearConversionUnit
     */
    class LinearConversionUnitSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "conversionFactor": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "referenceUnit": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a LinearConversionUnit to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let linearConversionUnit = <Dto.LinearConversionUnit>thing;
            if (typeof(linearConversionUnit) == "undefined" || linearConversionUnit == null) {
                throw new Error("The object is not a LinearConversionUnit");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(linearConversionUnit.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(linearConversionUnit.classKind),
                "conversionFactor": this.getToJsonObjectConverter("conversionFactor")(linearConversionUnit.conversionFactor),
                "definition": this.getToJsonObjectConverter("definition")(linearConversionUnit.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(linearConversionUnit.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(linearConversionUnit.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(linearConversionUnit.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(linearConversionUnit.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(linearConversionUnit.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(linearConversionUnit.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(linearConversionUnit.name),
                "referenceUnit": this.getToJsonObjectConverter("referenceUnit")(linearConversionUnit.referenceUnit),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(linearConversionUnit.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(linearConversionUnit.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a LinearConversionUnit
         */
        public parse(jsonObject: any) : Dto.Thing {
            const linearConversionUnit = new Dto.LinearConversionUnit(jsonObject["iid"], jsonObject["revisionNumber"], true);
            linearConversionUnit.alias = jsonObject["alias"];
            linearConversionUnit.conversionFactor = jsonObject["conversionFactor"];
            linearConversionUnit.definition = jsonObject["definition"];
            linearConversionUnit.excludedDomain = jsonObject["excludedDomain"];
            linearConversionUnit.excludedPerson = jsonObject["excludedPerson"];
            linearConversionUnit.hyperLink = jsonObject["hyperLink"];
            linearConversionUnit.isDeprecated = jsonObject["isDeprecated"];
            linearConversionUnit.modifiedOn = jsonObject["modifiedOn"];
            linearConversionUnit.name = jsonObject["name"];
            linearConversionUnit.referenceUnit = jsonObject["referenceUnit"];
            linearConversionUnit.shortName = jsonObject["shortName"];

            return linearConversionUnit;
        }
    }

    /**
     * The serializer for LogarithmicScale
     */
    class LogarithmicScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "exponent": (value: any) => { return value; },
                "factor": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isMaximumInclusive": (value: any) => { return value; },
                "isMinimumInclusive": (value: any) => { return value; },
                "logarithmBase": (value: any) => { return Dto.LogarithmBaseKind[value]; },
                "mappingToReferenceScale": (value: any) => { return value; },
                "maximumPermissibleValue": (value: any) => { return value; },
                "minimumPermissibleValue": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "negativeValueConnotation": (value: any) => { return value; },
                "numberSet": (value: any) => { return Dto.NumberSetKind[value]; },
                "positiveValueConnotation": (value: any) => { return value; },
                "referenceQuantityKind": (value: any) => { return value; },
                "referenceQuantityValue": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return value; }
            };
        }

        /**
         * Converts a LogarithmicScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let logarithmicScale = <Dto.LogarithmicScale>thing;
            if (typeof(logarithmicScale) == "undefined" || logarithmicScale == null) {
                throw new Error("The object is not a LogarithmicScale");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(logarithmicScale.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(logarithmicScale.classKind),
                "definition": this.getToJsonObjectConverter("definition")(logarithmicScale.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(logarithmicScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(logarithmicScale.excludedPerson),
                "exponent": this.getToJsonObjectConverter("exponent")(logarithmicScale.exponent),
                "factor": this.getToJsonObjectConverter("factor")(logarithmicScale.factor),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(logarithmicScale.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(logarithmicScale.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(logarithmicScale.isDeprecated),
                "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(logarithmicScale.isMaximumInclusive),
                "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(logarithmicScale.isMinimumInclusive),
                "logarithmBase": this.getToJsonObjectConverter("logarithmBase")(logarithmicScale.logarithmBase),
                "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")(logarithmicScale.mappingToReferenceScale),
                "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(logarithmicScale.maximumPermissibleValue),
                "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(logarithmicScale.minimumPermissibleValue),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(logarithmicScale.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(logarithmicScale.name),
                "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(logarithmicScale.negativeValueConnotation),
                "numberSet": this.getToJsonObjectConverter("numberSet")(logarithmicScale.numberSet),
                "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(logarithmicScale.positiveValueConnotation),
                "referenceQuantityKind": this.getToJsonObjectConverter("referenceQuantityKind")(logarithmicScale.referenceQuantityKind),
                "referenceQuantityValue": this.getToJsonObjectConverter("referenceQuantityValue")(logarithmicScale.referenceQuantityValue),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(logarithmicScale.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(logarithmicScale.shortName),
                "unit": this.getToJsonObjectConverter("unit")(logarithmicScale.unit),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(logarithmicScale.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a LogarithmicScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const logarithmicScale = new Dto.LogarithmicScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            logarithmicScale.alias = jsonObject["alias"];
            logarithmicScale.definition = jsonObject["definition"];
            logarithmicScale.excludedDomain = jsonObject["excludedDomain"];
            logarithmicScale.excludedPerson = jsonObject["excludedPerson"];
            logarithmicScale.exponent = jsonObject["exponent"];
            logarithmicScale.factor = jsonObject["factor"];
            logarithmicScale.hyperLink = jsonObject["hyperLink"];
            logarithmicScale.isDeprecated = jsonObject["isDeprecated"];
            logarithmicScale.isMaximumInclusive = jsonObject["isMaximumInclusive"];
            logarithmicScale.isMinimumInclusive = jsonObject["isMinimumInclusive"];
            logarithmicScale.logarithmBase = Dto.LogarithmBaseKind[<string>jsonObject["logarithmBase"]];
            logarithmicScale.mappingToReferenceScale = jsonObject["mappingToReferenceScale"];
            logarithmicScale.maximumPermissibleValue = jsonObject["maximumPermissibleValue"];
            logarithmicScale.minimumPermissibleValue = jsonObject["minimumPermissibleValue"];
            logarithmicScale.modifiedOn = jsonObject["modifiedOn"];
            logarithmicScale.name = jsonObject["name"];
            logarithmicScale.negativeValueConnotation = jsonObject["negativeValueConnotation"];
            logarithmicScale.numberSet = Dto.NumberSetKind[<string>jsonObject["numberSet"]];
            logarithmicScale.positiveValueConnotation = jsonObject["positiveValueConnotation"];
            logarithmicScale.referenceQuantityKind = jsonObject["referenceQuantityKind"];
            logarithmicScale.referenceQuantityValue = jsonObject["referenceQuantityValue"];
            logarithmicScale.shortName = jsonObject["shortName"];
            logarithmicScale.unit = jsonObject["unit"];
            logarithmicScale.valueDefinition = jsonObject["valueDefinition"];

            return logarithmicScale;
        }
    }

    /**
     * The serializer for MappingToReferenceScale
     */
    class MappingToReferenceScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "dependentScaleValue": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "referenceScaleValue": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a MappingToReferenceScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let mappingToReferenceScale = <Dto.MappingToReferenceScale>thing;
            if (typeof(mappingToReferenceScale) == "undefined" || mappingToReferenceScale == null) {
                throw new Error("The object is not a MappingToReferenceScale");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(mappingToReferenceScale.classKind),
                "dependentScaleValue": this.getToJsonObjectConverter("dependentScaleValue")(mappingToReferenceScale.dependentScaleValue),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(mappingToReferenceScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(mappingToReferenceScale.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(mappingToReferenceScale.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(mappingToReferenceScale.modifiedOn),
                "referenceScaleValue": this.getToJsonObjectConverter("referenceScaleValue")(mappingToReferenceScale.referenceScaleValue),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(mappingToReferenceScale.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a MappingToReferenceScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const mappingToReferenceScale = new Dto.MappingToReferenceScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            mappingToReferenceScale.dependentScaleValue = jsonObject["dependentScaleValue"];
            mappingToReferenceScale.excludedDomain = jsonObject["excludedDomain"];
            mappingToReferenceScale.excludedPerson = jsonObject["excludedPerson"];
            mappingToReferenceScale.modifiedOn = jsonObject["modifiedOn"];
            mappingToReferenceScale.referenceScaleValue = jsonObject["referenceScaleValue"];

            return mappingToReferenceScale;
        }
    }

    /**
     * The serializer for ModellingThingReference
     */
    class ModellingThingReferenceSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "referencedRevisionNumber": (value: any) => { return value; },
                "referencedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ModellingThingReference to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let modellingThingReference = <Dto.ModellingThingReference>thing;
            if (typeof(modellingThingReference) == "undefined" || modellingThingReference == null) {
                throw new Error("The object is not a ModellingThingReference");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(modellingThingReference.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(modellingThingReference.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(modellingThingReference.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(modellingThingReference.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modellingThingReference.modifiedOn),
                "referencedRevisionNumber": this.getToJsonObjectConverter("referencedRevisionNumber")(modellingThingReference.referencedRevisionNumber),
                "referencedThing": this.getToJsonObjectConverter("referencedThing")(modellingThingReference.referencedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modellingThingReference.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ModellingThingReference
         */
        public parse(jsonObject: any) : Dto.Thing {
            const modellingThingReference = new Dto.ModellingThingReference(jsonObject["iid"], jsonObject["revisionNumber"], true);
            modellingThingReference.excludedDomain = jsonObject["excludedDomain"];
            modellingThingReference.excludedPerson = jsonObject["excludedPerson"];
            modellingThingReference.modifiedOn = jsonObject["modifiedOn"];
            modellingThingReference.referencedRevisionNumber = jsonObject["referencedRevisionNumber"];
            modellingThingReference.referencedThing = jsonObject["referencedThing"];

            return modellingThingReference;
        }
    }

    /**
     * The serializer for ModelLogEntry
     */
    class ModelLogEntrySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "affectedItemIid": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "level": (value: any) => { return Dto.LogLevelKind[value]; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ModelLogEntry to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let modelLogEntry = <Dto.ModelLogEntry>thing;
            if (typeof(modelLogEntry) == "undefined" || modelLogEntry == null) {
                throw new Error("The object is not a ModelLogEntry");
            }

            let jsonObject = {
                "affectedItemIid": this.getToJsonObjectConverter("affectedItemIid")(modelLogEntry.affectedItemIid),
                "author": this.getToJsonObjectConverter("author")(modelLogEntry.author),
                "category": this.getToJsonObjectConverter("category")(modelLogEntry.category),
                "classKind": this.getToJsonObjectConverter("classKind")(modelLogEntry.classKind),
                "content": this.getToJsonObjectConverter("content")(modelLogEntry.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(modelLogEntry.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(modelLogEntry.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(modelLogEntry.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(modelLogEntry.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(modelLogEntry.languageCode),
                "level": this.getToJsonObjectConverter("level")(modelLogEntry.level),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modelLogEntry.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modelLogEntry.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ModelLogEntry
         */
        public parse(jsonObject: any) : Dto.Thing {
            const modelLogEntry = new Dto.ModelLogEntry(jsonObject["iid"], jsonObject["revisionNumber"], true);
            modelLogEntry.affectedItemIid = jsonObject["affectedItemIid"];
            modelLogEntry.author = jsonObject["author"];
            modelLogEntry.category = jsonObject["category"];
            modelLogEntry.content = jsonObject["content"];
            modelLogEntry.createdOn = jsonObject["createdOn"];
            modelLogEntry.excludedDomain = jsonObject["excludedDomain"];
            modelLogEntry.excludedPerson = jsonObject["excludedPerson"];
            modelLogEntry.languageCode = jsonObject["languageCode"];
            modelLogEntry.level = Dto.LogLevelKind[<string>jsonObject["level"]];
            modelLogEntry.modifiedOn = jsonObject["modifiedOn"];

            return modelLogEntry;
        }
    }

    /**
     * The serializer for ModelReferenceDataLibrary
     */
    class ModelReferenceDataLibrarySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "baseQuantityKind": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "baseUnit": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "constant": (value: any) => { return value; },
                "definedCategory": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fileType": (value: any) => { return value; },
                "glossary": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "referenceSource": (value: any) => { return value; },
                "requiredRdl": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "rule": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "unitPrefix": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ModelReferenceDataLibrary to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let modelReferenceDataLibrary = <Dto.ModelReferenceDataLibrary>thing;
            if (typeof(modelReferenceDataLibrary) == "undefined" || modelReferenceDataLibrary == null) {
                throw new Error("The object is not a ModelReferenceDataLibrary");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(modelReferenceDataLibrary.alias),
                "baseQuantityKind": this.getToJsonObjectConverter("baseQuantityKind")(modelReferenceDataLibrary.baseQuantityKind),
                "baseUnit": this.getToJsonObjectConverter("baseUnit")(modelReferenceDataLibrary.baseUnit),
                "classKind": this.getToJsonObjectConverter("classKind")(modelReferenceDataLibrary.classKind),
                "constant": this.getToJsonObjectConverter("constant")(modelReferenceDataLibrary.constant),
                "definedCategory": this.getToJsonObjectConverter("definedCategory")(modelReferenceDataLibrary.definedCategory),
                "definition": this.getToJsonObjectConverter("definition")(modelReferenceDataLibrary.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(modelReferenceDataLibrary.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(modelReferenceDataLibrary.excludedPerson),
                "fileType": this.getToJsonObjectConverter("fileType")(modelReferenceDataLibrary.fileType),
                "glossary": this.getToJsonObjectConverter("glossary")(modelReferenceDataLibrary.glossary),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(modelReferenceDataLibrary.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(modelReferenceDataLibrary.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modelReferenceDataLibrary.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(modelReferenceDataLibrary.name),
                "parameterType": this.getToJsonObjectConverter("parameterType")(modelReferenceDataLibrary.parameterType),
                "referenceSource": this.getToJsonObjectConverter("referenceSource")(modelReferenceDataLibrary.referenceSource),
                "requiredRdl": this.getToJsonObjectConverter("requiredRdl")(modelReferenceDataLibrary.requiredRdl),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modelReferenceDataLibrary.revisionNumber),
                "rule": this.getToJsonObjectConverter("rule")(modelReferenceDataLibrary.rule),
                "scale": this.getToJsonObjectConverter("scale")(modelReferenceDataLibrary.scale),
                "shortName": this.getToJsonObjectConverter("shortName")(modelReferenceDataLibrary.shortName),
                "unit": this.getToJsonObjectConverter("unit")(modelReferenceDataLibrary.unit),
                "unitPrefix": this.getToJsonObjectConverter("unitPrefix")(modelReferenceDataLibrary.unitPrefix)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ModelReferenceDataLibrary
         */
        public parse(jsonObject: any) : Dto.Thing {
            const modelReferenceDataLibrary = new Dto.ModelReferenceDataLibrary(jsonObject["iid"], jsonObject["revisionNumber"], true);
            modelReferenceDataLibrary.alias = jsonObject["alias"];
            modelReferenceDataLibrary.baseQuantityKind = parseOrderedItemArray(jsonObject["baseQuantityKind"]);
            modelReferenceDataLibrary.baseUnit = jsonObject["baseUnit"];
            modelReferenceDataLibrary.constant = jsonObject["constant"];
            modelReferenceDataLibrary.definedCategory = jsonObject["definedCategory"];
            modelReferenceDataLibrary.definition = jsonObject["definition"];
            modelReferenceDataLibrary.excludedDomain = jsonObject["excludedDomain"];
            modelReferenceDataLibrary.excludedPerson = jsonObject["excludedPerson"];
            modelReferenceDataLibrary.fileType = jsonObject["fileType"];
            modelReferenceDataLibrary.glossary = jsonObject["glossary"];
            modelReferenceDataLibrary.hyperLink = jsonObject["hyperLink"];
            modelReferenceDataLibrary.modifiedOn = jsonObject["modifiedOn"];
            modelReferenceDataLibrary.name = jsonObject["name"];
            modelReferenceDataLibrary.parameterType = jsonObject["parameterType"];
            modelReferenceDataLibrary.referenceSource = jsonObject["referenceSource"];
            modelReferenceDataLibrary.requiredRdl = jsonObject["requiredRdl"];
            modelReferenceDataLibrary.rule = jsonObject["rule"];
            modelReferenceDataLibrary.scale = jsonObject["scale"];
            modelReferenceDataLibrary.shortName = jsonObject["shortName"];
            modelReferenceDataLibrary.unit = jsonObject["unit"];
            modelReferenceDataLibrary.unitPrefix = jsonObject["unitPrefix"];

            return modelReferenceDataLibrary;
        }
    }

    /**
     * The serializer for MultiRelationship
     */
    class MultiRelationshipSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterValue": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a MultiRelationship to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let multiRelationship = <Dto.MultiRelationship>thing;
            if (typeof(multiRelationship) == "undefined" || multiRelationship == null) {
                throw new Error("The object is not a MultiRelationship");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(multiRelationship.category),
                "classKind": this.getToJsonObjectConverter("classKind")(multiRelationship.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(multiRelationship.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(multiRelationship.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(multiRelationship.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(multiRelationship.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(multiRelationship.owner),
                "parameterValue": this.getToJsonObjectConverter("parameterValue")(multiRelationship.parameterValue),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(multiRelationship.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(multiRelationship.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a MultiRelationship
         */
        public parse(jsonObject: any) : Dto.Thing {
            const multiRelationship = new Dto.MultiRelationship(jsonObject["iid"], jsonObject["revisionNumber"], true);
            multiRelationship.category = jsonObject["category"];
            multiRelationship.excludedDomain = jsonObject["excludedDomain"];
            multiRelationship.excludedPerson = jsonObject["excludedPerson"];
            multiRelationship.modifiedOn = jsonObject["modifiedOn"];
            multiRelationship.owner = jsonObject["owner"];
            multiRelationship.parameterValue = jsonObject["parameterValue"];
            multiRelationship.relatedThing = jsonObject["relatedThing"];

            return multiRelationship;
        }
    }

    /**
     * The serializer for MultiRelationshipRule
     */
    class MultiRelationshipRuleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "maxRelated": (value: any) => { return value; },
                "minRelated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "relatedCategory": (value: any) => { return value; },
                "relationshipCategory": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a MultiRelationshipRule to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let multiRelationshipRule = <Dto.MultiRelationshipRule>thing;
            if (typeof(multiRelationshipRule) == "undefined" || multiRelationshipRule == null) {
                throw new Error("The object is not a MultiRelationshipRule");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(multiRelationshipRule.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(multiRelationshipRule.classKind),
                "definition": this.getToJsonObjectConverter("definition")(multiRelationshipRule.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(multiRelationshipRule.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(multiRelationshipRule.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(multiRelationshipRule.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(multiRelationshipRule.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(multiRelationshipRule.isDeprecated),
                "maxRelated": this.getToJsonObjectConverter("maxRelated")(multiRelationshipRule.maxRelated),
                "minRelated": this.getToJsonObjectConverter("minRelated")(multiRelationshipRule.minRelated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(multiRelationshipRule.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(multiRelationshipRule.name),
                "relatedCategory": this.getToJsonObjectConverter("relatedCategory")(multiRelationshipRule.relatedCategory),
                "relationshipCategory": this.getToJsonObjectConverter("relationshipCategory")(multiRelationshipRule.relationshipCategory),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(multiRelationshipRule.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(multiRelationshipRule.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a MultiRelationshipRule
         */
        public parse(jsonObject: any) : Dto.Thing {
            const multiRelationshipRule = new Dto.MultiRelationshipRule(jsonObject["iid"], jsonObject["revisionNumber"], true);
            multiRelationshipRule.alias = jsonObject["alias"];
            multiRelationshipRule.definition = jsonObject["definition"];
            multiRelationshipRule.excludedDomain = jsonObject["excludedDomain"];
            multiRelationshipRule.excludedPerson = jsonObject["excludedPerson"];
            multiRelationshipRule.hyperLink = jsonObject["hyperLink"];
            multiRelationshipRule.isDeprecated = jsonObject["isDeprecated"];
            multiRelationshipRule.maxRelated = jsonObject["maxRelated"];
            multiRelationshipRule.minRelated = jsonObject["minRelated"];
            multiRelationshipRule.modifiedOn = jsonObject["modifiedOn"];
            multiRelationshipRule.name = jsonObject["name"];
            multiRelationshipRule.relatedCategory = jsonObject["relatedCategory"];
            multiRelationshipRule.relationshipCategory = jsonObject["relationshipCategory"];
            multiRelationshipRule.shortName = jsonObject["shortName"];

            return multiRelationshipRule;
        }
    }

    /**
     * The serializer for NaturalLanguage
     */
    class NaturalLanguageSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "nativeName": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a NaturalLanguage to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let naturalLanguage = <Dto.NaturalLanguage>thing;
            if (typeof(naturalLanguage) == "undefined" || naturalLanguage == null) {
                throw new Error("The object is not a NaturalLanguage");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(naturalLanguage.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(naturalLanguage.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(naturalLanguage.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(naturalLanguage.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(naturalLanguage.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(naturalLanguage.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(naturalLanguage.name),
                "nativeName": this.getToJsonObjectConverter("nativeName")(naturalLanguage.nativeName),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(naturalLanguage.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a NaturalLanguage
         */
        public parse(jsonObject: any) : Dto.Thing {
            const naturalLanguage = new Dto.NaturalLanguage(jsonObject["iid"], jsonObject["revisionNumber"], true);
            naturalLanguage.excludedDomain = jsonObject["excludedDomain"];
            naturalLanguage.excludedPerson = jsonObject["excludedPerson"];
            naturalLanguage.languageCode = jsonObject["languageCode"];
            naturalLanguage.modifiedOn = jsonObject["modifiedOn"];
            naturalLanguage.name = jsonObject["name"];
            naturalLanguage.nativeName = jsonObject["nativeName"];

            return naturalLanguage;
        }
    }

    /**
     * The serializer for NestedElement
     */
    class NestedElementSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "elementUsage": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isVolatile": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "nestedParameter": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "rootElement": (value: any) => { return value; }
            };
        }

        /**
         * Converts a NestedElement to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let nestedElement = <Dto.NestedElement>thing;
            if (typeof(nestedElement) == "undefined" || nestedElement == null) {
                throw new Error("The object is not a NestedElement");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(nestedElement.classKind),
                "elementUsage": this.getToJsonObjectConverter("elementUsage")(nestedElement.elementUsage),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(nestedElement.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(nestedElement.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(nestedElement.iid),
                "isVolatile": this.getToJsonObjectConverter("isVolatile")(nestedElement.isVolatile),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(nestedElement.modifiedOn),
                "nestedParameter": this.getToJsonObjectConverter("nestedParameter")(nestedElement.nestedParameter),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(nestedElement.revisionNumber),
                "rootElement": this.getToJsonObjectConverter("rootElement")(nestedElement.rootElement)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a NestedElement
         */
        public parse(jsonObject: any) : Dto.Thing {
            const nestedElement = new Dto.NestedElement(jsonObject["iid"], jsonObject["revisionNumber"], true);
            nestedElement.elementUsage = parseOrderedItemArray(jsonObject["elementUsage"]);
            nestedElement.excludedDomain = jsonObject["excludedDomain"];
            nestedElement.excludedPerson = jsonObject["excludedPerson"];
            nestedElement.isVolatile = jsonObject["isVolatile"];
            nestedElement.modifiedOn = jsonObject["modifiedOn"];
            nestedElement.nestedParameter = jsonObject["nestedParameter"];
            nestedElement.rootElement = jsonObject["rootElement"];

            return nestedElement;
        }
    }

    /**
     * The serializer for NestedParameter
     */
    class NestedParameterSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "actualState": (value: any) => { return value; },
                "actualValue": (value: any) => { return value; },
                "associatedParameter": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "formula": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isVolatile": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a NestedParameter to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let nestedParameter = <Dto.NestedParameter>thing;
            if (typeof(nestedParameter) == "undefined" || nestedParameter == null) {
                throw new Error("The object is not a NestedParameter");
            }

            let jsonObject = {
                "actualState": this.getToJsonObjectConverter("actualState")(nestedParameter.actualState),
                "actualValue": this.getToJsonObjectConverter("actualValue")(nestedParameter.actualValue),
                "associatedParameter": this.getToJsonObjectConverter("associatedParameter")(nestedParameter.associatedParameter),
                "classKind": this.getToJsonObjectConverter("classKind")(nestedParameter.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(nestedParameter.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(nestedParameter.excludedPerson),
                "formula": this.getToJsonObjectConverter("formula")(nestedParameter.formula),
                "iid": this.getToJsonObjectConverter("iid")(nestedParameter.iid),
                "isVolatile": this.getToJsonObjectConverter("isVolatile")(nestedParameter.isVolatile),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(nestedParameter.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(nestedParameter.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(nestedParameter.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a NestedParameter
         */
        public parse(jsonObject: any) : Dto.Thing {
            const nestedParameter = new Dto.NestedParameter(jsonObject["iid"], jsonObject["revisionNumber"], true);
            nestedParameter.actualState = jsonObject["actualState"];
            nestedParameter.actualValue = jsonObject["actualValue"];
            nestedParameter.associatedParameter = jsonObject["associatedParameter"];
            nestedParameter.excludedDomain = jsonObject["excludedDomain"];
            nestedParameter.excludedPerson = jsonObject["excludedPerson"];
            nestedParameter.formula = jsonObject["formula"];
            nestedParameter.isVolatile = jsonObject["isVolatile"];
            nestedParameter.modifiedOn = jsonObject["modifiedOn"];
            nestedParameter.owner = jsonObject["owner"];

            return nestedParameter;
        }
    }

    /**
     * The serializer for NotExpression
     */
    class NotExpressionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "term": (value: any) => { return value; }
            };
        }

        /**
         * Converts a NotExpression to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let notExpression = <Dto.NotExpression>thing;
            if (typeof(notExpression) == "undefined" || notExpression == null) {
                throw new Error("The object is not a NotExpression");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(notExpression.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(notExpression.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(notExpression.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(notExpression.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(notExpression.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(notExpression.revisionNumber),
                "term": this.getToJsonObjectConverter("term")(notExpression.term)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a NotExpression
         */
        public parse(jsonObject: any) : Dto.Thing {
            const notExpression = new Dto.NotExpression(jsonObject["iid"], jsonObject["revisionNumber"], true);
            notExpression.excludedDomain = jsonObject["excludedDomain"];
            notExpression.excludedPerson = jsonObject["excludedPerson"];
            notExpression.modifiedOn = jsonObject["modifiedOn"];
            notExpression.term = jsonObject["term"];

            return notExpression;
        }
    }

    /**
     * The serializer for Option
     */
    class OptionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "nestedElement": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Option to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let option = <Dto.Option>thing;
            if (typeof(option) == "undefined" || option == null) {
                throw new Error("The object is not a Option");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(option.alias),
                "category": this.getToJsonObjectConverter("category")(option.category),
                "classKind": this.getToJsonObjectConverter("classKind")(option.classKind),
                "definition": this.getToJsonObjectConverter("definition")(option.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(option.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(option.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(option.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(option.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(option.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(option.name),
                "nestedElement": this.getToJsonObjectConverter("nestedElement")(option.nestedElement),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(option.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(option.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Option
         */
        public parse(jsonObject: any) : Dto.Thing {
            const option = new Dto.Option(jsonObject["iid"], jsonObject["revisionNumber"], true);
            option.alias = jsonObject["alias"];
            option.category = jsonObject["category"];
            option.definition = jsonObject["definition"];
            option.excludedDomain = jsonObject["excludedDomain"];
            option.excludedPerson = jsonObject["excludedPerson"];
            option.hyperLink = jsonObject["hyperLink"];
            option.modifiedOn = jsonObject["modifiedOn"];
            option.name = jsonObject["name"];
            option.nestedElement = jsonObject["nestedElement"];
            option.shortName = jsonObject["shortName"];

            return option;
        }
    }

    /**
     * The serializer for OrdinalScale
     */
    class OrdinalScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isMaximumInclusive": (value: any) => { return value; },
                "isMinimumInclusive": (value: any) => { return value; },
                "mappingToReferenceScale": (value: any) => { return value; },
                "maximumPermissibleValue": (value: any) => { return value; },
                "minimumPermissibleValue": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "negativeValueConnotation": (value: any) => { return value; },
                "numberSet": (value: any) => { return Dto.NumberSetKind[value]; },
                "positiveValueConnotation": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "useShortNameValues": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return value; }
            };
        }

        /**
         * Converts a OrdinalScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let ordinalScale = <Dto.OrdinalScale>thing;
            if (typeof(ordinalScale) == "undefined" || ordinalScale == null) {
                throw new Error("The object is not a OrdinalScale");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(ordinalScale.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(ordinalScale.classKind),
                "definition": this.getToJsonObjectConverter("definition")(ordinalScale.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(ordinalScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(ordinalScale.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(ordinalScale.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(ordinalScale.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(ordinalScale.isDeprecated),
                "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(ordinalScale.isMaximumInclusive),
                "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(ordinalScale.isMinimumInclusive),
                "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")(ordinalScale.mappingToReferenceScale),
                "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(ordinalScale.maximumPermissibleValue),
                "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(ordinalScale.minimumPermissibleValue),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ordinalScale.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(ordinalScale.name),
                "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(ordinalScale.negativeValueConnotation),
                "numberSet": this.getToJsonObjectConverter("numberSet")(ordinalScale.numberSet),
                "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(ordinalScale.positiveValueConnotation),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ordinalScale.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(ordinalScale.shortName),
                "unit": this.getToJsonObjectConverter("unit")(ordinalScale.unit),
                "useShortNameValues": this.getToJsonObjectConverter("useShortNameValues")(ordinalScale.useShortNameValues),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(ordinalScale.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a OrdinalScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const ordinalScale = new Dto.OrdinalScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            ordinalScale.alias = jsonObject["alias"];
            ordinalScale.definition = jsonObject["definition"];
            ordinalScale.excludedDomain = jsonObject["excludedDomain"];
            ordinalScale.excludedPerson = jsonObject["excludedPerson"];
            ordinalScale.hyperLink = jsonObject["hyperLink"];
            ordinalScale.isDeprecated = jsonObject["isDeprecated"];
            ordinalScale.isMaximumInclusive = jsonObject["isMaximumInclusive"];
            ordinalScale.isMinimumInclusive = jsonObject["isMinimumInclusive"];
            ordinalScale.mappingToReferenceScale = jsonObject["mappingToReferenceScale"];
            ordinalScale.maximumPermissibleValue = jsonObject["maximumPermissibleValue"];
            ordinalScale.minimumPermissibleValue = jsonObject["minimumPermissibleValue"];
            ordinalScale.modifiedOn = jsonObject["modifiedOn"];
            ordinalScale.name = jsonObject["name"];
            ordinalScale.negativeValueConnotation = jsonObject["negativeValueConnotation"];
            ordinalScale.numberSet = Dto.NumberSetKind[<string>jsonObject["numberSet"]];
            ordinalScale.positiveValueConnotation = jsonObject["positiveValueConnotation"];
            ordinalScale.shortName = jsonObject["shortName"];
            ordinalScale.unit = jsonObject["unit"];
            ordinalScale.useShortNameValues = jsonObject["useShortNameValues"];
            ordinalScale.valueDefinition = jsonObject["valueDefinition"];

            return ordinalScale;
        }
    }

    /**
     * The serializer for OrExpression
     */
    class OrExpressionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "term": (value: any) => { return value; }
            };
        }

        /**
         * Converts a OrExpression to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let orExpression = <Dto.OrExpression>thing;
            if (typeof(orExpression) == "undefined" || orExpression == null) {
                throw new Error("The object is not a OrExpression");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(orExpression.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(orExpression.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(orExpression.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(orExpression.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(orExpression.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(orExpression.revisionNumber),
                "term": this.getToJsonObjectConverter("term")(orExpression.term)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a OrExpression
         */
        public parse(jsonObject: any) : Dto.Thing {
            const orExpression = new Dto.OrExpression(jsonObject["iid"], jsonObject["revisionNumber"], true);
            orExpression.excludedDomain = jsonObject["excludedDomain"];
            orExpression.excludedPerson = jsonObject["excludedPerson"];
            orExpression.modifiedOn = jsonObject["modifiedOn"];
            orExpression.term = jsonObject["term"];

            return orExpression;
        }
    }

    /**
     * The serializer for Organization
     */
    class OrganizationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Organization to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let organization = <Dto.Organization>thing;
            if (typeof(organization) == "undefined" || organization == null) {
                throw new Error("The object is not a Organization");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(organization.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(organization.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(organization.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(organization.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(organization.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(organization.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(organization.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(organization.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(organization.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Organization
         */
        public parse(jsonObject: any) : Dto.Thing {
            const organization = new Dto.Organization(jsonObject["iid"], jsonObject["revisionNumber"], true);
            organization.excludedDomain = jsonObject["excludedDomain"];
            organization.excludedPerson = jsonObject["excludedPerson"];
            organization.isDeprecated = jsonObject["isDeprecated"];
            organization.modifiedOn = jsonObject["modifiedOn"];
            organization.name = jsonObject["name"];
            organization.shortName = jsonObject["shortName"];

            return organization;
        }
    }

    /**
     * The serializer for OwnedStyle
     */
    class OwnedStyleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fillColor": (value: any) => { return value; },
                "fillOpacity": (value: any) => { return value; },
                "fontBold": (value: any) => { return value; },
                "fontColor": (value: any) => { return value; },
                "fontItalic": (value: any) => { return value; },
                "fontName": (value: any) => { return value; },
                "fontSize": (value: any) => { return value; },
                "fontStrokeThrough": (value: any) => { return value; },
                "fontUnderline": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "strokeColor": (value: any) => { return value; },
                "strokeOpacity": (value: any) => { return value; },
                "strokeWidth": (value: any) => { return value; },
                "usedColor": (value: any) => { return value; }
            };
        }

        /**
         * Converts a OwnedStyle to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let ownedStyle = <Dto.OwnedStyle>thing;
            if (typeof(ownedStyle) == "undefined" || ownedStyle == null) {
                throw new Error("The object is not a OwnedStyle");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(ownedStyle.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(ownedStyle.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(ownedStyle.excludedPerson),
                "fillColor": this.getToJsonObjectConverter("fillColor")(ownedStyle.fillColor),
                "fillOpacity": this.getToJsonObjectConverter("fillOpacity")(ownedStyle.fillOpacity),
                "fontBold": this.getToJsonObjectConverter("fontBold")(ownedStyle.fontBold),
                "fontColor": this.getToJsonObjectConverter("fontColor")(ownedStyle.fontColor),
                "fontItalic": this.getToJsonObjectConverter("fontItalic")(ownedStyle.fontItalic),
                "fontName": this.getToJsonObjectConverter("fontName")(ownedStyle.fontName),
                "fontSize": this.getToJsonObjectConverter("fontSize")(ownedStyle.fontSize),
                "fontStrokeThrough": this.getToJsonObjectConverter("fontStrokeThrough")(ownedStyle.fontStrokeThrough),
                "fontUnderline": this.getToJsonObjectConverter("fontUnderline")(ownedStyle.fontUnderline),
                "iid": this.getToJsonObjectConverter("iid")(ownedStyle.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ownedStyle.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(ownedStyle.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ownedStyle.revisionNumber),
                "strokeColor": this.getToJsonObjectConverter("strokeColor")(ownedStyle.strokeColor),
                "strokeOpacity": this.getToJsonObjectConverter("strokeOpacity")(ownedStyle.strokeOpacity),
                "strokeWidth": this.getToJsonObjectConverter("strokeWidth")(ownedStyle.strokeWidth),
                "usedColor": this.getToJsonObjectConverter("usedColor")(ownedStyle.usedColor)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a OwnedStyle
         */
        public parse(jsonObject: any) : Dto.Thing {
            const ownedStyle = new Dto.OwnedStyle(jsonObject["iid"], jsonObject["revisionNumber"], true);
            ownedStyle.excludedDomain = jsonObject["excludedDomain"];
            ownedStyle.excludedPerson = jsonObject["excludedPerson"];
            ownedStyle.fillColor = jsonObject["fillColor"];
            ownedStyle.fillOpacity = jsonObject["fillOpacity"];
            ownedStyle.fontBold = jsonObject["fontBold"];
            ownedStyle.fontColor = jsonObject["fontColor"];
            ownedStyle.fontItalic = jsonObject["fontItalic"];
            ownedStyle.fontName = jsonObject["fontName"];
            ownedStyle.fontSize = jsonObject["fontSize"];
            ownedStyle.fontStrokeThrough = jsonObject["fontStrokeThrough"];
            ownedStyle.fontUnderline = jsonObject["fontUnderline"];
            ownedStyle.modifiedOn = jsonObject["modifiedOn"];
            ownedStyle.name = jsonObject["name"];
            ownedStyle.strokeColor = jsonObject["strokeColor"];
            ownedStyle.strokeOpacity = jsonObject["strokeOpacity"];
            ownedStyle.strokeWidth = jsonObject["strokeWidth"];
            ownedStyle.usedColor = jsonObject["usedColor"];

            return ownedStyle;
        }
    }

    /**
     * The serializer for Page
     */
    class PageSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "note": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Page to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let page = <Dto.Page>thing;
            if (typeof(page) == "undefined" || page == null) {
                throw new Error("The object is not a Page");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(page.category),
                "classKind": this.getToJsonObjectConverter("classKind")(page.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(page.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(page.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(page.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(page.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(page.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(page.name),
                "note": this.getToJsonObjectConverter("note")(page.note),
                "owner": this.getToJsonObjectConverter("owner")(page.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(page.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(page.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Page
         */
        public parse(jsonObject: any) : Dto.Thing {
            const page = new Dto.Page(jsonObject["iid"], jsonObject["revisionNumber"], true);
            page.category = jsonObject["category"];
            page.createdOn = jsonObject["createdOn"];
            page.excludedDomain = jsonObject["excludedDomain"];
            page.excludedPerson = jsonObject["excludedPerson"];
            page.modifiedOn = jsonObject["modifiedOn"];
            page.name = jsonObject["name"];
            page.note = parseOrderedItemArray(jsonObject["note"]);
            page.owner = jsonObject["owner"];
            page.shortName = jsonObject["shortName"];

            return page;
        }
    }

    /**
     * The serializer for Parameter
     */
    class ParameterSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "allowDifferentOwnerOfOverride": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "expectsOverride": (value: any) => { return value; },
                "group": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isOptionDependent": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterSubscription": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "requestedBy": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "stateDependence": (value: any) => { return value; },
                "valueSet": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Parameter to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameter = <Dto.Parameter>thing;
            if (typeof(parameter) == "undefined" || parameter == null) {
                throw new Error("The object is not a Parameter");
            }

            let jsonObject = {
                "allowDifferentOwnerOfOverride": this.getToJsonObjectConverter("allowDifferentOwnerOfOverride")(parameter.allowDifferentOwnerOfOverride),
                "classKind": this.getToJsonObjectConverter("classKind")(parameter.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameter.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameter.excludedPerson),
                "expectsOverride": this.getToJsonObjectConverter("expectsOverride")(parameter.expectsOverride),
                "group": this.getToJsonObjectConverter("group")(parameter.group),
                "iid": this.getToJsonObjectConverter("iid")(parameter.iid),
                "isOptionDependent": this.getToJsonObjectConverter("isOptionDependent")(parameter.isOptionDependent),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameter.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(parameter.owner),
                "parameterSubscription": this.getToJsonObjectConverter("parameterSubscription")(parameter.parameterSubscription),
                "parameterType": this.getToJsonObjectConverter("parameterType")(parameter.parameterType),
                "requestedBy": this.getToJsonObjectConverter("requestedBy")(parameter.requestedBy),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameter.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(parameter.scale),
                "stateDependence": this.getToJsonObjectConverter("stateDependence")(parameter.stateDependence),
                "valueSet": this.getToJsonObjectConverter("valueSet")(parameter.valueSet)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Parameter
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameter = new Dto.Parameter(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameter.allowDifferentOwnerOfOverride = jsonObject["allowDifferentOwnerOfOverride"];
            parameter.excludedDomain = jsonObject["excludedDomain"];
            parameter.excludedPerson = jsonObject["excludedPerson"];
            parameter.expectsOverride = jsonObject["expectsOverride"];
            parameter.group = jsonObject["group"];
            parameter.isOptionDependent = jsonObject["isOptionDependent"];
            parameter.modifiedOn = jsonObject["modifiedOn"];
            parameter.owner = jsonObject["owner"];
            parameter.parameterSubscription = jsonObject["parameterSubscription"];
            parameter.parameterType = jsonObject["parameterType"];
            parameter.requestedBy = jsonObject["requestedBy"];
            parameter.scale = jsonObject["scale"];
            parameter.stateDependence = jsonObject["stateDependence"];
            parameter.valueSet = jsonObject["valueSet"];

            return parameter;
        }
    }

    /**
     * The serializer for ParameterGroup
     */
    class ParameterGroupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "containingGroup": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParameterGroup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterGroup = <Dto.ParameterGroup>thing;
            if (typeof(parameterGroup) == "undefined" || parameterGroup == null) {
                throw new Error("The object is not a ParameterGroup");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterGroup.classKind),
                "containingGroup": this.getToJsonObjectConverter("containingGroup")(parameterGroup.containingGroup),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterGroup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterGroup.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(parameterGroup.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterGroup.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(parameterGroup.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterGroup.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterGroup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterGroup = new Dto.ParameterGroup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterGroup.containingGroup = jsonObject["containingGroup"];
            parameterGroup.excludedDomain = jsonObject["excludedDomain"];
            parameterGroup.excludedPerson = jsonObject["excludedPerson"];
            parameterGroup.modifiedOn = jsonObject["modifiedOn"];
            parameterGroup.name = jsonObject["name"];

            return parameterGroup;
        }
    }

    /**
     * The serializer for ParameterizedCategoryRule
     */
    class ParameterizedCategoryRuleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParameterizedCategoryRule to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterizedCategoryRule = <Dto.ParameterizedCategoryRule>thing;
            if (typeof(parameterizedCategoryRule) == "undefined" || parameterizedCategoryRule == null) {
                throw new Error("The object is not a ParameterizedCategoryRule");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(parameterizedCategoryRule.alias),
                "category": this.getToJsonObjectConverter("category")(parameterizedCategoryRule.category),
                "classKind": this.getToJsonObjectConverter("classKind")(parameterizedCategoryRule.classKind),
                "definition": this.getToJsonObjectConverter("definition")(parameterizedCategoryRule.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterizedCategoryRule.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterizedCategoryRule.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(parameterizedCategoryRule.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(parameterizedCategoryRule.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(parameterizedCategoryRule.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterizedCategoryRule.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(parameterizedCategoryRule.name),
                "parameterType": this.getToJsonObjectConverter("parameterType")(parameterizedCategoryRule.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterizedCategoryRule.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(parameterizedCategoryRule.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterizedCategoryRule
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterizedCategoryRule = new Dto.ParameterizedCategoryRule(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterizedCategoryRule.alias = jsonObject["alias"];
            parameterizedCategoryRule.category = jsonObject["category"];
            parameterizedCategoryRule.definition = jsonObject["definition"];
            parameterizedCategoryRule.excludedDomain = jsonObject["excludedDomain"];
            parameterizedCategoryRule.excludedPerson = jsonObject["excludedPerson"];
            parameterizedCategoryRule.hyperLink = jsonObject["hyperLink"];
            parameterizedCategoryRule.isDeprecated = jsonObject["isDeprecated"];
            parameterizedCategoryRule.modifiedOn = jsonObject["modifiedOn"];
            parameterizedCategoryRule.name = jsonObject["name"];
            parameterizedCategoryRule.parameterType = jsonObject["parameterType"];
            parameterizedCategoryRule.shortName = jsonObject["shortName"];

            return parameterizedCategoryRule;
        }
    }

    /**
     * The serializer for ParameterOverride
     */
    class ParameterOverrideSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameter": (value: any) => { return value; },
                "parameterSubscription": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "valueSet": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParameterOverride to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterOverride = <Dto.ParameterOverride>thing;
            if (typeof(parameterOverride) == "undefined" || parameterOverride == null) {
                throw new Error("The object is not a ParameterOverride");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterOverride.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterOverride.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterOverride.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(parameterOverride.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterOverride.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(parameterOverride.owner),
                "parameter": this.getToJsonObjectConverter("parameter")(parameterOverride.parameter),
                "parameterSubscription": this.getToJsonObjectConverter("parameterSubscription")(parameterOverride.parameterSubscription),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterOverride.revisionNumber),
                "valueSet": this.getToJsonObjectConverter("valueSet")(parameterOverride.valueSet)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterOverride
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterOverride = new Dto.ParameterOverride(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterOverride.excludedDomain = jsonObject["excludedDomain"];
            parameterOverride.excludedPerson = jsonObject["excludedPerson"];
            parameterOverride.modifiedOn = jsonObject["modifiedOn"];
            parameterOverride.owner = jsonObject["owner"];
            parameterOverride.parameter = jsonObject["parameter"];
            parameterOverride.parameterSubscription = jsonObject["parameterSubscription"];
            parameterOverride.valueSet = jsonObject["valueSet"];

            return parameterOverride;
        }
    }

    /**
     * The serializer for ParameterOverrideValueSet
     */
    class ParameterOverrideValueSetSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "computed": (value: any) => { return toJsonValueArray(<string[]>value); },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "formula": (value: any) => { return toJsonValueArray(<string[]>value); },
                "iid": (value: any) => { return value; },
                "manual": (value: any) => { return toJsonValueArray(<string[]>value); },
                "modifiedOn": (value: any) => { return value; },
                "parameterValueSet": (value: any) => { return value; },
                "published": (value: any) => { return toJsonValueArray(<string[]>value); },
                "reference": (value: any) => { return toJsonValueArray(<string[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; }
            };
        }

        /**
         * Converts a ParameterOverrideValueSet to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterOverrideValueSet = <Dto.ParameterOverrideValueSet>thing;
            if (typeof(parameterOverrideValueSet) == "undefined" || parameterOverrideValueSet == null) {
                throw new Error("The object is not a ParameterOverrideValueSet");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterOverrideValueSet.classKind),
                "computed": this.getToJsonObjectConverter("computed")(parameterOverrideValueSet.computed),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterOverrideValueSet.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterOverrideValueSet.excludedPerson),
                "formula": this.getToJsonObjectConverter("formula")(parameterOverrideValueSet.formula),
                "iid": this.getToJsonObjectConverter("iid")(parameterOverrideValueSet.iid),
                "manual": this.getToJsonObjectConverter("manual")(parameterOverrideValueSet.manual),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterOverrideValueSet.modifiedOn),
                "parameterValueSet": this.getToJsonObjectConverter("parameterValueSet")(parameterOverrideValueSet.parameterValueSet),
                "published": this.getToJsonObjectConverter("published")(parameterOverrideValueSet.published),
                "reference": this.getToJsonObjectConverter("reference")(parameterOverrideValueSet.reference),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterOverrideValueSet.revisionNumber),
                "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterOverrideValueSet.valueSwitch)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterOverrideValueSet
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterOverrideValueSet = new Dto.ParameterOverrideValueSet(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterOverrideValueSet.computed = parseValueArray(jsonObject["computed"]);
            parameterOverrideValueSet.excludedDomain = jsonObject["excludedDomain"];
            parameterOverrideValueSet.excludedPerson = jsonObject["excludedPerson"];
            parameterOverrideValueSet.formula = parseValueArray(jsonObject["formula"]);
            parameterOverrideValueSet.manual = parseValueArray(jsonObject["manual"]);
            parameterOverrideValueSet.modifiedOn = jsonObject["modifiedOn"];
            parameterOverrideValueSet.parameterValueSet = jsonObject["parameterValueSet"];
            parameterOverrideValueSet.published = parseValueArray(jsonObject["published"]);
            parameterOverrideValueSet.reference = parseValueArray(jsonObject["reference"]);
            parameterOverrideValueSet.valueSwitch = Dto.ParameterSwitchKind[<string>jsonObject["valueSwitch"]];

            return parameterOverrideValueSet;
        }
    }

    /**
     * The serializer for ParameterSubscription
     */
    class ParameterSubscriptionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "valueSet": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParameterSubscription to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterSubscription = <Dto.ParameterSubscription>thing;
            if (typeof(parameterSubscription) == "undefined" || parameterSubscription == null) {
                throw new Error("The object is not a ParameterSubscription");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterSubscription.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterSubscription.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterSubscription.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(parameterSubscription.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterSubscription.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(parameterSubscription.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterSubscription.revisionNumber),
                "valueSet": this.getToJsonObjectConverter("valueSet")(parameterSubscription.valueSet)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterSubscription
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterSubscription = new Dto.ParameterSubscription(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterSubscription.excludedDomain = jsonObject["excludedDomain"];
            parameterSubscription.excludedPerson = jsonObject["excludedPerson"];
            parameterSubscription.modifiedOn = jsonObject["modifiedOn"];
            parameterSubscription.owner = jsonObject["owner"];
            parameterSubscription.valueSet = jsonObject["valueSet"];

            return parameterSubscription;
        }
    }

    /**
     * The serializer for ParameterSubscriptionValueSet
     */
    class ParameterSubscriptionValueSetSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "manual": (value: any) => { return toJsonValueArray(<string[]>value); },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "subscribedValueSet": (value: any) => { return value; },
                "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; }
            };
        }

        /**
         * Converts a ParameterSubscriptionValueSet to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterSubscriptionValueSet = <Dto.ParameterSubscriptionValueSet>thing;
            if (typeof(parameterSubscriptionValueSet) == "undefined" || parameterSubscriptionValueSet == null) {
                throw new Error("The object is not a ParameterSubscriptionValueSet");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterSubscriptionValueSet.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterSubscriptionValueSet.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterSubscriptionValueSet.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(parameterSubscriptionValueSet.iid),
                "manual": this.getToJsonObjectConverter("manual")(parameterSubscriptionValueSet.manual),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterSubscriptionValueSet.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterSubscriptionValueSet.revisionNumber),
                "subscribedValueSet": this.getToJsonObjectConverter("subscribedValueSet")(parameterSubscriptionValueSet.subscribedValueSet),
                "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterSubscriptionValueSet.valueSwitch)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterSubscriptionValueSet
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterSubscriptionValueSet = new Dto.ParameterSubscriptionValueSet(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterSubscriptionValueSet.excludedDomain = jsonObject["excludedDomain"];
            parameterSubscriptionValueSet.excludedPerson = jsonObject["excludedPerson"];
            parameterSubscriptionValueSet.manual = parseValueArray(jsonObject["manual"]);
            parameterSubscriptionValueSet.modifiedOn = jsonObject["modifiedOn"];
            parameterSubscriptionValueSet.subscribedValueSet = jsonObject["subscribedValueSet"];
            parameterSubscriptionValueSet.valueSwitch = Dto.ParameterSwitchKind[<string>jsonObject["valueSwitch"]];

            return parameterSubscriptionValueSet;
        }
    }

    /**
     * The serializer for ParameterTypeComponent
     */
    class ParameterTypeComponentSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParameterTypeComponent to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterTypeComponent = <Dto.ParameterTypeComponent>thing;
            if (typeof(parameterTypeComponent) == "undefined" || parameterTypeComponent == null) {
                throw new Error("The object is not a ParameterTypeComponent");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parameterTypeComponent.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterTypeComponent.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterTypeComponent.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(parameterTypeComponent.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterTypeComponent.modifiedOn),
                "parameterType": this.getToJsonObjectConverter("parameterType")(parameterTypeComponent.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterTypeComponent.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(parameterTypeComponent.scale),
                "shortName": this.getToJsonObjectConverter("shortName")(parameterTypeComponent.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterTypeComponent
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterTypeComponent = new Dto.ParameterTypeComponent(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterTypeComponent.excludedDomain = jsonObject["excludedDomain"];
            parameterTypeComponent.excludedPerson = jsonObject["excludedPerson"];
            parameterTypeComponent.modifiedOn = jsonObject["modifiedOn"];
            parameterTypeComponent.parameterType = jsonObject["parameterType"];
            parameterTypeComponent.scale = jsonObject["scale"];
            parameterTypeComponent.shortName = jsonObject["shortName"];

            return parameterTypeComponent;
        }
    }

    /**
     * The serializer for ParameterValueSet
     */
    class ParameterValueSetSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "actualOption": (value: any) => { return value; },
                "actualState": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "computed": (value: any) => { return toJsonValueArray(<string[]>value); },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "formula": (value: any) => { return toJsonValueArray(<string[]>value); },
                "iid": (value: any) => { return value; },
                "manual": (value: any) => { return toJsonValueArray(<string[]>value); },
                "modifiedOn": (value: any) => { return value; },
                "published": (value: any) => { return toJsonValueArray(<string[]>value); },
                "reference": (value: any) => { return toJsonValueArray(<string[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; }
            };
        }

        /**
         * Converts a ParameterValueSet to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parameterValueSet = <Dto.ParameterValueSet>thing;
            if (typeof(parameterValueSet) == "undefined" || parameterValueSet == null) {
                throw new Error("The object is not a ParameterValueSet");
            }

            let jsonObject = {
                "actualOption": this.getToJsonObjectConverter("actualOption")(parameterValueSet.actualOption),
                "actualState": this.getToJsonObjectConverter("actualState")(parameterValueSet.actualState),
                "classKind": this.getToJsonObjectConverter("classKind")(parameterValueSet.classKind),
                "computed": this.getToJsonObjectConverter("computed")(parameterValueSet.computed),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parameterValueSet.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parameterValueSet.excludedPerson),
                "formula": this.getToJsonObjectConverter("formula")(parameterValueSet.formula),
                "iid": this.getToJsonObjectConverter("iid")(parameterValueSet.iid),
                "manual": this.getToJsonObjectConverter("manual")(parameterValueSet.manual),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterValueSet.modifiedOn),
                "published": this.getToJsonObjectConverter("published")(parameterValueSet.published),
                "reference": this.getToJsonObjectConverter("reference")(parameterValueSet.reference),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterValueSet.revisionNumber),
                "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterValueSet.valueSwitch)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParameterValueSet
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parameterValueSet = new Dto.ParameterValueSet(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parameterValueSet.actualOption = jsonObject["actualOption"];
            parameterValueSet.actualState = jsonObject["actualState"];
            parameterValueSet.computed = parseValueArray(jsonObject["computed"]);
            parameterValueSet.excludedDomain = jsonObject["excludedDomain"];
            parameterValueSet.excludedPerson = jsonObject["excludedPerson"];
            parameterValueSet.formula = parseValueArray(jsonObject["formula"]);
            parameterValueSet.manual = parseValueArray(jsonObject["manual"]);
            parameterValueSet.modifiedOn = jsonObject["modifiedOn"];
            parameterValueSet.published = parseValueArray(jsonObject["published"]);
            parameterValueSet.reference = parseValueArray(jsonObject["reference"]);
            parameterValueSet.valueSwitch = Dto.ParameterSwitchKind[<string>jsonObject["valueSwitch"]];

            return parameterValueSet;
        }
    }

    /**
     * The serializer for ParametricConstraint
     */
    class ParametricConstraintSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "expression": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "topExpression": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParametricConstraint to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let parametricConstraint = <Dto.ParametricConstraint>thing;
            if (typeof(parametricConstraint) == "undefined" || parametricConstraint == null) {
                throw new Error("The object is not a ParametricConstraint");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(parametricConstraint.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(parametricConstraint.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(parametricConstraint.excludedPerson),
                "expression": this.getToJsonObjectConverter("expression")(parametricConstraint.expression),
                "iid": this.getToJsonObjectConverter("iid")(parametricConstraint.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parametricConstraint.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parametricConstraint.revisionNumber),
                "topExpression": this.getToJsonObjectConverter("topExpression")(parametricConstraint.topExpression)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParametricConstraint
         */
        public parse(jsonObject: any) : Dto.Thing {
            const parametricConstraint = new Dto.ParametricConstraint(jsonObject["iid"], jsonObject["revisionNumber"], true);
            parametricConstraint.excludedDomain = jsonObject["excludedDomain"];
            parametricConstraint.excludedPerson = jsonObject["excludedPerson"];
            parametricConstraint.expression = jsonObject["expression"];
            parametricConstraint.modifiedOn = jsonObject["modifiedOn"];
            parametricConstraint.topExpression = jsonObject["topExpression"];

            return parametricConstraint;
        }
    }

    /**
     * The serializer for Participant
     */
    class ParticipantSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "domain": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isActive": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "person": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "role": (value: any) => { return value; },
                "selectedDomain": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Participant to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let participant = <Dto.Participant>thing;
            if (typeof(participant) == "undefined" || participant == null) {
                throw new Error("The object is not a Participant");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(participant.classKind),
                "domain": this.getToJsonObjectConverter("domain")(participant.domain),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(participant.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(participant.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(participant.iid),
                "isActive": this.getToJsonObjectConverter("isActive")(participant.isActive),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participant.modifiedOn),
                "person": this.getToJsonObjectConverter("person")(participant.person),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participant.revisionNumber),
                "role": this.getToJsonObjectConverter("role")(participant.role),
                "selectedDomain": this.getToJsonObjectConverter("selectedDomain")(participant.selectedDomain)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Participant
         */
        public parse(jsonObject: any) : Dto.Thing {
            const participant = new Dto.Participant(jsonObject["iid"], jsonObject["revisionNumber"], true);
            participant.domain = jsonObject["domain"];
            participant.excludedDomain = jsonObject["excludedDomain"];
            participant.excludedPerson = jsonObject["excludedPerson"];
            participant.isActive = jsonObject["isActive"];
            participant.modifiedOn = jsonObject["modifiedOn"];
            participant.person = jsonObject["person"];
            participant.role = jsonObject["role"];
            participant.selectedDomain = jsonObject["selectedDomain"];

            return participant;
        }
    }

    /**
     * The serializer for ParticipantPermission
     */
    class ParticipantPermissionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "accessRight": (value: any) => { return Dto.ParticipantAccessRightKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "objectClass": (value: any) => { return Dto.ClassKind[value]; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParticipantPermission to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let participantPermission = <Dto.ParticipantPermission>thing;
            if (typeof(participantPermission) == "undefined" || participantPermission == null) {
                throw new Error("The object is not a ParticipantPermission");
            }

            let jsonObject = {
                "accessRight": this.getToJsonObjectConverter("accessRight")(participantPermission.accessRight),
                "classKind": this.getToJsonObjectConverter("classKind")(participantPermission.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(participantPermission.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(participantPermission.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(participantPermission.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(participantPermission.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participantPermission.modifiedOn),
                "objectClass": this.getToJsonObjectConverter("objectClass")(participantPermission.objectClass),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participantPermission.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParticipantPermission
         */
        public parse(jsonObject: any) : Dto.Thing {
            const participantPermission = new Dto.ParticipantPermission(jsonObject["iid"], jsonObject["revisionNumber"], true);
            participantPermission.accessRight = Dto.ParticipantAccessRightKind[<string>jsonObject["accessRight"]];
            participantPermission.excludedDomain = jsonObject["excludedDomain"];
            participantPermission.excludedPerson = jsonObject["excludedPerson"];
            participantPermission.isDeprecated = jsonObject["isDeprecated"];
            participantPermission.modifiedOn = jsonObject["modifiedOn"];
            participantPermission.objectClass = Dto.ClassKind[<string>jsonObject["objectClass"]];

            return participantPermission;
        }
    }

    /**
     * The serializer for ParticipantRole
     */
    class ParticipantRoleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "participantPermission": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ParticipantRole to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let participantRole = <Dto.ParticipantRole>thing;
            if (typeof(participantRole) == "undefined" || participantRole == null) {
                throw new Error("The object is not a ParticipantRole");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(participantRole.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(participantRole.classKind),
                "definition": this.getToJsonObjectConverter("definition")(participantRole.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(participantRole.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(participantRole.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(participantRole.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(participantRole.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(participantRole.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participantRole.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(participantRole.name),
                "participantPermission": this.getToJsonObjectConverter("participantPermission")(participantRole.participantPermission),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participantRole.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(participantRole.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ParticipantRole
         */
        public parse(jsonObject: any) : Dto.Thing {
            const participantRole = new Dto.ParticipantRole(jsonObject["iid"], jsonObject["revisionNumber"], true);
            participantRole.alias = jsonObject["alias"];
            participantRole.definition = jsonObject["definition"];
            participantRole.excludedDomain = jsonObject["excludedDomain"];
            participantRole.excludedPerson = jsonObject["excludedPerson"];
            participantRole.hyperLink = jsonObject["hyperLink"];
            participantRole.isDeprecated = jsonObject["isDeprecated"];
            participantRole.modifiedOn = jsonObject["modifiedOn"];
            participantRole.name = jsonObject["name"];
            participantRole.participantPermission = jsonObject["participantPermission"];
            participantRole.shortName = jsonObject["shortName"];

            return participantRole;
        }
    }

    /**
     * The serializer for Person
     */
    class PersonSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultDomain": (value: any) => { return value; },
                "defaultEmailAddress": (value: any) => { return value; },
                "defaultTelephoneNumber": (value: any) => { return value; },
                "emailAddress": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "givenName": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isActive": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "organization": (value: any) => { return value; },
                "organizationalUnit": (value: any) => { return value; },
                "password": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "role": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "surname": (value: any) => { return value; },
                "telephoneNumber": (value: any) => { return value; },
                "userPreference": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Person to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let person = <Dto.Person>thing;
            if (typeof(person) == "undefined" || person == null) {
                throw new Error("The object is not a Person");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(person.classKind),
                "defaultDomain": this.getToJsonObjectConverter("defaultDomain")(person.defaultDomain),
                "defaultEmailAddress": this.getToJsonObjectConverter("defaultEmailAddress")(person.defaultEmailAddress),
                "defaultTelephoneNumber": this.getToJsonObjectConverter("defaultTelephoneNumber")(person.defaultTelephoneNumber),
                "emailAddress": this.getToJsonObjectConverter("emailAddress")(person.emailAddress),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(person.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(person.excludedPerson),
                "givenName": this.getToJsonObjectConverter("givenName")(person.givenName),
                "iid": this.getToJsonObjectConverter("iid")(person.iid),
                "isActive": this.getToJsonObjectConverter("isActive")(person.isActive),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(person.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(person.modifiedOn),
                "organization": this.getToJsonObjectConverter("organization")(person.organization),
                "organizationalUnit": this.getToJsonObjectConverter("organizationalUnit")(person.organizationalUnit),
                "password": this.getToJsonObjectConverter("password")(person.password),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(person.revisionNumber),
                "role": this.getToJsonObjectConverter("role")(person.role),
                "shortName": this.getToJsonObjectConverter("shortName")(person.shortName),
                "surname": this.getToJsonObjectConverter("surname")(person.surname),
                "telephoneNumber": this.getToJsonObjectConverter("telephoneNumber")(person.telephoneNumber),
                "userPreference": this.getToJsonObjectConverter("userPreference")(person.userPreference)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Person
         */
        public parse(jsonObject: any) : Dto.Thing {
            const person = new Dto.Person(jsonObject["iid"], jsonObject["revisionNumber"], true);
            person.defaultDomain = jsonObject["defaultDomain"];
            person.defaultEmailAddress = jsonObject["defaultEmailAddress"];
            person.defaultTelephoneNumber = jsonObject["defaultTelephoneNumber"];
            person.emailAddress = jsonObject["emailAddress"];
            person.excludedDomain = jsonObject["excludedDomain"];
            person.excludedPerson = jsonObject["excludedPerson"];
            person.givenName = jsonObject["givenName"];
            person.isActive = jsonObject["isActive"];
            person.isDeprecated = jsonObject["isDeprecated"];
            person.modifiedOn = jsonObject["modifiedOn"];
            person.organization = jsonObject["organization"];
            person.organizationalUnit = jsonObject["organizationalUnit"];
            person.password = jsonObject["password"];
            person.role = jsonObject["role"];
            person.shortName = jsonObject["shortName"];
            person.surname = jsonObject["surname"];
            person.telephoneNumber = jsonObject["telephoneNumber"];
            person.userPreference = jsonObject["userPreference"];

            return person;
        }
    }

    /**
     * The serializer for PersonPermission
     */
    class PersonPermissionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "accessRight": (value: any) => { return Dto.PersonAccessRightKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "objectClass": (value: any) => { return Dto.ClassKind[value]; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a PersonPermission to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let personPermission = <Dto.PersonPermission>thing;
            if (typeof(personPermission) == "undefined" || personPermission == null) {
                throw new Error("The object is not a PersonPermission");
            }

            let jsonObject = {
                "accessRight": this.getToJsonObjectConverter("accessRight")(personPermission.accessRight),
                "classKind": this.getToJsonObjectConverter("classKind")(personPermission.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(personPermission.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(personPermission.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(personPermission.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(personPermission.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(personPermission.modifiedOn),
                "objectClass": this.getToJsonObjectConverter("objectClass")(personPermission.objectClass),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(personPermission.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a PersonPermission
         */
        public parse(jsonObject: any) : Dto.Thing {
            const personPermission = new Dto.PersonPermission(jsonObject["iid"], jsonObject["revisionNumber"], true);
            personPermission.accessRight = Dto.PersonAccessRightKind[<string>jsonObject["accessRight"]];
            personPermission.excludedDomain = jsonObject["excludedDomain"];
            personPermission.excludedPerson = jsonObject["excludedPerson"];
            personPermission.isDeprecated = jsonObject["isDeprecated"];
            personPermission.modifiedOn = jsonObject["modifiedOn"];
            personPermission.objectClass = Dto.ClassKind[<string>jsonObject["objectClass"]];

            return personPermission;
        }
    }

    /**
     * The serializer for PersonRole
     */
    class PersonRoleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "personPermission": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a PersonRole to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let personRole = <Dto.PersonRole>thing;
            if (typeof(personRole) == "undefined" || personRole == null) {
                throw new Error("The object is not a PersonRole");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(personRole.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(personRole.classKind),
                "definition": this.getToJsonObjectConverter("definition")(personRole.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(personRole.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(personRole.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(personRole.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(personRole.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(personRole.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(personRole.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(personRole.name),
                "personPermission": this.getToJsonObjectConverter("personPermission")(personRole.personPermission),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(personRole.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(personRole.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a PersonRole
         */
        public parse(jsonObject: any) : Dto.Thing {
            const personRole = new Dto.PersonRole(jsonObject["iid"], jsonObject["revisionNumber"], true);
            personRole.alias = jsonObject["alias"];
            personRole.definition = jsonObject["definition"];
            personRole.excludedDomain = jsonObject["excludedDomain"];
            personRole.excludedPerson = jsonObject["excludedPerson"];
            personRole.hyperLink = jsonObject["hyperLink"];
            personRole.isDeprecated = jsonObject["isDeprecated"];
            personRole.modifiedOn = jsonObject["modifiedOn"];
            personRole.name = jsonObject["name"];
            personRole.personPermission = jsonObject["personPermission"];
            personRole.shortName = jsonObject["shortName"];

            return personRole;
        }
    }

    /**
     * The serializer for Point
     */
    class PointSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "x": (value: any) => { return value; },
                "y": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Point to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let point = <Dto.Point>thing;
            if (typeof(point) == "undefined" || point == null) {
                throw new Error("The object is not a Point");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(point.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(point.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(point.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(point.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(point.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(point.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(point.revisionNumber),
                "x": this.getToJsonObjectConverter("x")(point.x),
                "y": this.getToJsonObjectConverter("y")(point.y)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Point
         */
        public parse(jsonObject: any) : Dto.Thing {
            const point = new Dto.Point(jsonObject["iid"], jsonObject["revisionNumber"], true);
            point.excludedDomain = jsonObject["excludedDomain"];
            point.excludedPerson = jsonObject["excludedPerson"];
            point.modifiedOn = jsonObject["modifiedOn"];
            point.name = jsonObject["name"];
            point.x = jsonObject["x"];
            point.y = jsonObject["y"];

            return point;
        }
    }

    /**
     * The serializer for PossibleFiniteState
     */
    class PossibleFiniteStateSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a PossibleFiniteState to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let possibleFiniteState = <Dto.PossibleFiniteState>thing;
            if (typeof(possibleFiniteState) == "undefined" || possibleFiniteState == null) {
                throw new Error("The object is not a PossibleFiniteState");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(possibleFiniteState.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(possibleFiniteState.classKind),
                "definition": this.getToJsonObjectConverter("definition")(possibleFiniteState.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(possibleFiniteState.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(possibleFiniteState.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(possibleFiniteState.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(possibleFiniteState.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(possibleFiniteState.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(possibleFiniteState.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(possibleFiniteState.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(possibleFiniteState.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a PossibleFiniteState
         */
        public parse(jsonObject: any) : Dto.Thing {
            const possibleFiniteState = new Dto.PossibleFiniteState(jsonObject["iid"], jsonObject["revisionNumber"], true);
            possibleFiniteState.alias = jsonObject["alias"];
            possibleFiniteState.definition = jsonObject["definition"];
            possibleFiniteState.excludedDomain = jsonObject["excludedDomain"];
            possibleFiniteState.excludedPerson = jsonObject["excludedPerson"];
            possibleFiniteState.hyperLink = jsonObject["hyperLink"];
            possibleFiniteState.modifiedOn = jsonObject["modifiedOn"];
            possibleFiniteState.name = jsonObject["name"];
            possibleFiniteState.shortName = jsonObject["shortName"];

            return possibleFiniteState;
        }
    }

    /**
     * The serializer for PossibleFiniteStateList
     */
    class PossibleFiniteStateListSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultState": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "possibleState": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a PossibleFiniteStateList to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let possibleFiniteStateList = <Dto.PossibleFiniteStateList>thing;
            if (typeof(possibleFiniteStateList) == "undefined" || possibleFiniteStateList == null) {
                throw new Error("The object is not a PossibleFiniteStateList");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(possibleFiniteStateList.alias),
                "category": this.getToJsonObjectConverter("category")(possibleFiniteStateList.category),
                "classKind": this.getToJsonObjectConverter("classKind")(possibleFiniteStateList.classKind),
                "defaultState": this.getToJsonObjectConverter("defaultState")(possibleFiniteStateList.defaultState),
                "definition": this.getToJsonObjectConverter("definition")(possibleFiniteStateList.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(possibleFiniteStateList.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(possibleFiniteStateList.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(possibleFiniteStateList.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(possibleFiniteStateList.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(possibleFiniteStateList.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(possibleFiniteStateList.name),
                "owner": this.getToJsonObjectConverter("owner")(possibleFiniteStateList.owner),
                "possibleState": this.getToJsonObjectConverter("possibleState")(possibleFiniteStateList.possibleState),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(possibleFiniteStateList.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(possibleFiniteStateList.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a PossibleFiniteStateList
         */
        public parse(jsonObject: any) : Dto.Thing {
            const possibleFiniteStateList = new Dto.PossibleFiniteStateList(jsonObject["iid"], jsonObject["revisionNumber"], true);
            possibleFiniteStateList.alias = jsonObject["alias"];
            possibleFiniteStateList.category = jsonObject["category"];
            possibleFiniteStateList.defaultState = jsonObject["defaultState"];
            possibleFiniteStateList.definition = jsonObject["definition"];
            possibleFiniteStateList.excludedDomain = jsonObject["excludedDomain"];
            possibleFiniteStateList.excludedPerson = jsonObject["excludedPerson"];
            possibleFiniteStateList.hyperLink = jsonObject["hyperLink"];
            possibleFiniteStateList.modifiedOn = jsonObject["modifiedOn"];
            possibleFiniteStateList.name = jsonObject["name"];
            possibleFiniteStateList.owner = jsonObject["owner"];
            possibleFiniteStateList.possibleState = parseOrderedItemArray(jsonObject["possibleState"]);
            possibleFiniteStateList.shortName = jsonObject["shortName"];

            return possibleFiniteStateList;
        }
    }

    /**
     * The serializer for PrefixedUnit
     */
    class PrefixedUnitSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "prefix": (value: any) => { return value; },
                "referenceUnit": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a PrefixedUnit to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let prefixedUnit = <Dto.PrefixedUnit>thing;
            if (typeof(prefixedUnit) == "undefined" || prefixedUnit == null) {
                throw new Error("The object is not a PrefixedUnit");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(prefixedUnit.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(prefixedUnit.classKind),
                "definition": this.getToJsonObjectConverter("definition")(prefixedUnit.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(prefixedUnit.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(prefixedUnit.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(prefixedUnit.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(prefixedUnit.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(prefixedUnit.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(prefixedUnit.modifiedOn),
                "prefix": this.getToJsonObjectConverter("prefix")(prefixedUnit.prefix),
                "referenceUnit": this.getToJsonObjectConverter("referenceUnit")(prefixedUnit.referenceUnit),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(prefixedUnit.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a PrefixedUnit
         */
        public parse(jsonObject: any) : Dto.Thing {
            const prefixedUnit = new Dto.PrefixedUnit(jsonObject["iid"], jsonObject["revisionNumber"], true);
            prefixedUnit.alias = jsonObject["alias"];
            prefixedUnit.definition = jsonObject["definition"];
            prefixedUnit.excludedDomain = jsonObject["excludedDomain"];
            prefixedUnit.excludedPerson = jsonObject["excludedPerson"];
            prefixedUnit.hyperLink = jsonObject["hyperLink"];
            prefixedUnit.isDeprecated = jsonObject["isDeprecated"];
            prefixedUnit.modifiedOn = jsonObject["modifiedOn"];
            prefixedUnit.prefix = jsonObject["prefix"];
            prefixedUnit.referenceUnit = jsonObject["referenceUnit"];

            return prefixedUnit;
        }
    }

    /**
     * The serializer for Publication
     */
    class PublicationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "domain": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "publishedParameter": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Publication to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let publication = <Dto.Publication>thing;
            if (typeof(publication) == "undefined" || publication == null) {
                throw new Error("The object is not a Publication");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(publication.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(publication.createdOn),
                "domain": this.getToJsonObjectConverter("domain")(publication.domain),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(publication.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(publication.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(publication.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(publication.modifiedOn),
                "publishedParameter": this.getToJsonObjectConverter("publishedParameter")(publication.publishedParameter),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(publication.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Publication
         */
        public parse(jsonObject: any) : Dto.Thing {
            const publication = new Dto.Publication(jsonObject["iid"], jsonObject["revisionNumber"], true);
            publication.createdOn = jsonObject["createdOn"];
            publication.domain = jsonObject["domain"];
            publication.excludedDomain = jsonObject["excludedDomain"];
            publication.excludedPerson = jsonObject["excludedPerson"];
            publication.modifiedOn = jsonObject["modifiedOn"];
            publication.publishedParameter = jsonObject["publishedParameter"];

            return publication;
        }
    }

    /**
     * The serializer for QuantityKindFactor
     */
    class QuantityKindFactorSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "exponent": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "quantityKind": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a QuantityKindFactor to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let quantityKindFactor = <Dto.QuantityKindFactor>thing;
            if (typeof(quantityKindFactor) == "undefined" || quantityKindFactor == null) {
                throw new Error("The object is not a QuantityKindFactor");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(quantityKindFactor.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(quantityKindFactor.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(quantityKindFactor.excludedPerson),
                "exponent": this.getToJsonObjectConverter("exponent")(quantityKindFactor.exponent),
                "iid": this.getToJsonObjectConverter("iid")(quantityKindFactor.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(quantityKindFactor.modifiedOn),
                "quantityKind": this.getToJsonObjectConverter("quantityKind")(quantityKindFactor.quantityKind),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(quantityKindFactor.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a QuantityKindFactor
         */
        public parse(jsonObject: any) : Dto.Thing {
            const quantityKindFactor = new Dto.QuantityKindFactor(jsonObject["iid"], jsonObject["revisionNumber"], true);
            quantityKindFactor.excludedDomain = jsonObject["excludedDomain"];
            quantityKindFactor.excludedPerson = jsonObject["excludedPerson"];
            quantityKindFactor.exponent = jsonObject["exponent"];
            quantityKindFactor.modifiedOn = jsonObject["modifiedOn"];
            quantityKindFactor.quantityKind = jsonObject["quantityKind"];

            return quantityKindFactor;
        }
    }

    /**
     * The serializer for RatioScale
     */
    class RatioScaleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "isMaximumInclusive": (value: any) => { return value; },
                "isMinimumInclusive": (value: any) => { return value; },
                "mappingToReferenceScale": (value: any) => { return value; },
                "maximumPermissibleValue": (value: any) => { return value; },
                "minimumPermissibleValue": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "negativeValueConnotation": (value: any) => { return value; },
                "numberSet": (value: any) => { return Dto.NumberSetKind[value]; },
                "positiveValueConnotation": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "valueDefinition": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RatioScale to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let ratioScale = <Dto.RatioScale>thing;
            if (typeof(ratioScale) == "undefined" || ratioScale == null) {
                throw new Error("The object is not a RatioScale");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(ratioScale.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(ratioScale.classKind),
                "definition": this.getToJsonObjectConverter("definition")(ratioScale.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(ratioScale.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(ratioScale.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(ratioScale.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(ratioScale.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(ratioScale.isDeprecated),
                "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(ratioScale.isMaximumInclusive),
                "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(ratioScale.isMinimumInclusive),
                "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")(ratioScale.mappingToReferenceScale),
                "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(ratioScale.maximumPermissibleValue),
                "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(ratioScale.minimumPermissibleValue),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ratioScale.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(ratioScale.name),
                "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(ratioScale.negativeValueConnotation),
                "numberSet": this.getToJsonObjectConverter("numberSet")(ratioScale.numberSet),
                "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(ratioScale.positiveValueConnotation),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ratioScale.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(ratioScale.shortName),
                "unit": this.getToJsonObjectConverter("unit")(ratioScale.unit),
                "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(ratioScale.valueDefinition)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RatioScale
         */
        public parse(jsonObject: any) : Dto.Thing {
            const ratioScale = new Dto.RatioScale(jsonObject["iid"], jsonObject["revisionNumber"], true);
            ratioScale.alias = jsonObject["alias"];
            ratioScale.definition = jsonObject["definition"];
            ratioScale.excludedDomain = jsonObject["excludedDomain"];
            ratioScale.excludedPerson = jsonObject["excludedPerson"];
            ratioScale.hyperLink = jsonObject["hyperLink"];
            ratioScale.isDeprecated = jsonObject["isDeprecated"];
            ratioScale.isMaximumInclusive = jsonObject["isMaximumInclusive"];
            ratioScale.isMinimumInclusive = jsonObject["isMinimumInclusive"];
            ratioScale.mappingToReferenceScale = jsonObject["mappingToReferenceScale"];
            ratioScale.maximumPermissibleValue = jsonObject["maximumPermissibleValue"];
            ratioScale.minimumPermissibleValue = jsonObject["minimumPermissibleValue"];
            ratioScale.modifiedOn = jsonObject["modifiedOn"];
            ratioScale.name = jsonObject["name"];
            ratioScale.negativeValueConnotation = jsonObject["negativeValueConnotation"];
            ratioScale.numberSet = Dto.NumberSetKind[<string>jsonObject["numberSet"]];
            ratioScale.positiveValueConnotation = jsonObject["positiveValueConnotation"];
            ratioScale.shortName = jsonObject["shortName"];
            ratioScale.unit = jsonObject["unit"];
            ratioScale.valueDefinition = jsonObject["valueDefinition"];

            return ratioScale;
        }
    }

    /**
     * The serializer for ReferencerRule
     */
    class ReferencerRuleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "maxReferenced": (value: any) => { return value; },
                "minReferenced": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "referencedCategory": (value: any) => { return value; },
                "referencingCategory": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ReferencerRule to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let referencerRule = <Dto.ReferencerRule>thing;
            if (typeof(referencerRule) == "undefined" || referencerRule == null) {
                throw new Error("The object is not a ReferencerRule");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(referencerRule.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(referencerRule.classKind),
                "definition": this.getToJsonObjectConverter("definition")(referencerRule.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(referencerRule.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(referencerRule.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(referencerRule.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(referencerRule.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(referencerRule.isDeprecated),
                "maxReferenced": this.getToJsonObjectConverter("maxReferenced")(referencerRule.maxReferenced),
                "minReferenced": this.getToJsonObjectConverter("minReferenced")(referencerRule.minReferenced),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(referencerRule.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(referencerRule.name),
                "referencedCategory": this.getToJsonObjectConverter("referencedCategory")(referencerRule.referencedCategory),
                "referencingCategory": this.getToJsonObjectConverter("referencingCategory")(referencerRule.referencingCategory),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(referencerRule.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(referencerRule.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ReferencerRule
         */
        public parse(jsonObject: any) : Dto.Thing {
            const referencerRule = new Dto.ReferencerRule(jsonObject["iid"], jsonObject["revisionNumber"], true);
            referencerRule.alias = jsonObject["alias"];
            referencerRule.definition = jsonObject["definition"];
            referencerRule.excludedDomain = jsonObject["excludedDomain"];
            referencerRule.excludedPerson = jsonObject["excludedPerson"];
            referencerRule.hyperLink = jsonObject["hyperLink"];
            referencerRule.isDeprecated = jsonObject["isDeprecated"];
            referencerRule.maxReferenced = jsonObject["maxReferenced"];
            referencerRule.minReferenced = jsonObject["minReferenced"];
            referencerRule.modifiedOn = jsonObject["modifiedOn"];
            referencerRule.name = jsonObject["name"];
            referencerRule.referencedCategory = jsonObject["referencedCategory"];
            referencerRule.referencingCategory = jsonObject["referencingCategory"];
            referencerRule.shortName = jsonObject["shortName"];

            return referencerRule;
        }
    }

    /**
     * The serializer for ReferenceSource
     */
    class ReferenceSourceSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "language": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "publicationYear": (value: any) => { return value; },
                "publishedIn": (value: any) => { return value; },
                "publisher": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "versionDate": (value: any) => { return value; },
                "versionIdentifier": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ReferenceSource to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let referenceSource = <Dto.ReferenceSource>thing;
            if (typeof(referenceSource) == "undefined" || referenceSource == null) {
                throw new Error("The object is not a ReferenceSource");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(referenceSource.alias),
                "author": this.getToJsonObjectConverter("author")(referenceSource.author),
                "category": this.getToJsonObjectConverter("category")(referenceSource.category),
                "classKind": this.getToJsonObjectConverter("classKind")(referenceSource.classKind),
                "definition": this.getToJsonObjectConverter("definition")(referenceSource.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(referenceSource.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(referenceSource.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(referenceSource.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(referenceSource.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(referenceSource.isDeprecated),
                "language": this.getToJsonObjectConverter("language")(referenceSource.language),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(referenceSource.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(referenceSource.name),
                "publicationYear": this.getToJsonObjectConverter("publicationYear")(referenceSource.publicationYear),
                "publishedIn": this.getToJsonObjectConverter("publishedIn")(referenceSource.publishedIn),
                "publisher": this.getToJsonObjectConverter("publisher")(referenceSource.publisher),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(referenceSource.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(referenceSource.shortName),
                "versionDate": this.getToJsonObjectConverter("versionDate")(referenceSource.versionDate),
                "versionIdentifier": this.getToJsonObjectConverter("versionIdentifier")(referenceSource.versionIdentifier)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ReferenceSource
         */
        public parse(jsonObject: any) : Dto.Thing {
            const referenceSource = new Dto.ReferenceSource(jsonObject["iid"], jsonObject["revisionNumber"], true);
            referenceSource.alias = jsonObject["alias"];
            referenceSource.author = jsonObject["author"];
            referenceSource.category = jsonObject["category"];
            referenceSource.definition = jsonObject["definition"];
            referenceSource.excludedDomain = jsonObject["excludedDomain"];
            referenceSource.excludedPerson = jsonObject["excludedPerson"];
            referenceSource.hyperLink = jsonObject["hyperLink"];
            referenceSource.isDeprecated = jsonObject["isDeprecated"];
            referenceSource.language = jsonObject["language"];
            referenceSource.modifiedOn = jsonObject["modifiedOn"];
            referenceSource.name = jsonObject["name"];
            referenceSource.publicationYear = jsonObject["publicationYear"];
            referenceSource.publishedIn = jsonObject["publishedIn"];
            referenceSource.publisher = jsonObject["publisher"];
            referenceSource.shortName = jsonObject["shortName"];
            referenceSource.versionDate = jsonObject["versionDate"];
            referenceSource.versionIdentifier = jsonObject["versionIdentifier"];

            return referenceSource;
        }
    }

    /**
     * The serializer for RelationalExpression
     */
    class RelationalExpressionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "relationalOperator": (value: any) => { return Dto.RelationalOperatorKind[value]; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "value": (value: any) => { return toJsonValueArray(<string[]>value); }
            };
        }

        /**
         * Converts a RelationalExpression to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let relationalExpression = <Dto.RelationalExpression>thing;
            if (typeof(relationalExpression) == "undefined" || relationalExpression == null) {
                throw new Error("The object is not a RelationalExpression");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(relationalExpression.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(relationalExpression.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(relationalExpression.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(relationalExpression.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(relationalExpression.modifiedOn),
                "parameterType": this.getToJsonObjectConverter("parameterType")(relationalExpression.parameterType),
                "relationalOperator": this.getToJsonObjectConverter("relationalOperator")(relationalExpression.relationalOperator),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(relationalExpression.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(relationalExpression.scale),
                "value": this.getToJsonObjectConverter("value")(relationalExpression.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RelationalExpression
         */
        public parse(jsonObject: any) : Dto.Thing {
            const relationalExpression = new Dto.RelationalExpression(jsonObject["iid"], jsonObject["revisionNumber"], true);
            relationalExpression.excludedDomain = jsonObject["excludedDomain"];
            relationalExpression.excludedPerson = jsonObject["excludedPerson"];
            relationalExpression.modifiedOn = jsonObject["modifiedOn"];
            relationalExpression.parameterType = jsonObject["parameterType"];
            relationalExpression.relationalOperator = Dto.RelationalOperatorKind[<string>jsonObject["relationalOperator"]];
            relationalExpression.scale = jsonObject["scale"];
            relationalExpression.value = parseValueArray(jsonObject["value"]);

            return relationalExpression;
        }
    }

    /**
     * The serializer for RelationshipParameterValue
     */
    class RelationshipParameterValueSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "value": (value: any) => { return toJsonValueArray(<string[]>value); }
            };
        }

        /**
         * Converts a RelationshipParameterValue to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let relationshipParameterValue = <Dto.RelationshipParameterValue>thing;
            if (typeof(relationshipParameterValue) == "undefined" || relationshipParameterValue == null) {
                throw new Error("The object is not a RelationshipParameterValue");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(relationshipParameterValue.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(relationshipParameterValue.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(relationshipParameterValue.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(relationshipParameterValue.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(relationshipParameterValue.modifiedOn),
                "parameterType": this.getToJsonObjectConverter("parameterType")(relationshipParameterValue.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(relationshipParameterValue.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(relationshipParameterValue.scale),
                "value": this.getToJsonObjectConverter("value")(relationshipParameterValue.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RelationshipParameterValue
         */
        public parse(jsonObject: any) : Dto.Thing {
            const relationshipParameterValue = new Dto.RelationshipParameterValue(jsonObject["iid"], jsonObject["revisionNumber"], true);
            relationshipParameterValue.excludedDomain = jsonObject["excludedDomain"];
            relationshipParameterValue.excludedPerson = jsonObject["excludedPerson"];
            relationshipParameterValue.modifiedOn = jsonObject["modifiedOn"];
            relationshipParameterValue.parameterType = jsonObject["parameterType"];
            relationshipParameterValue.scale = jsonObject["scale"];
            relationshipParameterValue.value = parseValueArray(jsonObject["value"]);

            return relationshipParameterValue;
        }
    }

    /**
     * The serializer for RequestForDeviation
     */
    class RequestForDeviationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RequestForDeviation to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requestForDeviation = <Dto.RequestForDeviation>thing;
            if (typeof(requestForDeviation) == "undefined" || requestForDeviation == null) {
                throw new Error("The object is not a RequestForDeviation");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(requestForDeviation.approvedBy),
                "author": this.getToJsonObjectConverter("author")(requestForDeviation.author),
                "category": this.getToJsonObjectConverter("category")(requestForDeviation.category),
                "classification": this.getToJsonObjectConverter("classification")(requestForDeviation.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(requestForDeviation.classKind),
                "content": this.getToJsonObjectConverter("content")(requestForDeviation.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(requestForDeviation.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(requestForDeviation.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requestForDeviation.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requestForDeviation.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(requestForDeviation.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(requestForDeviation.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requestForDeviation.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(requestForDeviation.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(requestForDeviation.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(requestForDeviation.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requestForDeviation.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(requestForDeviation.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(requestForDeviation.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(requestForDeviation.status),
                "title": this.getToJsonObjectConverter("title")(requestForDeviation.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RequestForDeviation
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requestForDeviation = new Dto.RequestForDeviation(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requestForDeviation.approvedBy = jsonObject["approvedBy"];
            requestForDeviation.author = jsonObject["author"];
            requestForDeviation.category = jsonObject["category"];
            requestForDeviation.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            requestForDeviation.content = jsonObject["content"];
            requestForDeviation.createdOn = jsonObject["createdOn"];
            requestForDeviation.discussion = jsonObject["discussion"];
            requestForDeviation.excludedDomain = jsonObject["excludedDomain"];
            requestForDeviation.excludedPerson = jsonObject["excludedPerson"];
            requestForDeviation.languageCode = jsonObject["languageCode"];
            requestForDeviation.modifiedOn = jsonObject["modifiedOn"];
            requestForDeviation.owner = jsonObject["owner"];
            requestForDeviation.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            requestForDeviation.relatedThing = jsonObject["relatedThing"];
            requestForDeviation.shortName = jsonObject["shortName"];
            requestForDeviation.sourceAnnotation = jsonObject["sourceAnnotation"];
            requestForDeviation.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            requestForDeviation.title = jsonObject["title"];

            return requestForDeviation;
        }
    }

    /**
     * The serializer for RequestForWaiver
     */
    class RequestForWaiverSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RequestForWaiver to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requestForWaiver = <Dto.RequestForWaiver>thing;
            if (typeof(requestForWaiver) == "undefined" || requestForWaiver == null) {
                throw new Error("The object is not a RequestForWaiver");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(requestForWaiver.approvedBy),
                "author": this.getToJsonObjectConverter("author")(requestForWaiver.author),
                "category": this.getToJsonObjectConverter("category")(requestForWaiver.category),
                "classification": this.getToJsonObjectConverter("classification")(requestForWaiver.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(requestForWaiver.classKind),
                "content": this.getToJsonObjectConverter("content")(requestForWaiver.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(requestForWaiver.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(requestForWaiver.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requestForWaiver.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requestForWaiver.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(requestForWaiver.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(requestForWaiver.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requestForWaiver.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(requestForWaiver.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(requestForWaiver.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(requestForWaiver.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requestForWaiver.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(requestForWaiver.shortName),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(requestForWaiver.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(requestForWaiver.status),
                "title": this.getToJsonObjectConverter("title")(requestForWaiver.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RequestForWaiver
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requestForWaiver = new Dto.RequestForWaiver(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requestForWaiver.approvedBy = jsonObject["approvedBy"];
            requestForWaiver.author = jsonObject["author"];
            requestForWaiver.category = jsonObject["category"];
            requestForWaiver.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            requestForWaiver.content = jsonObject["content"];
            requestForWaiver.createdOn = jsonObject["createdOn"];
            requestForWaiver.discussion = jsonObject["discussion"];
            requestForWaiver.excludedDomain = jsonObject["excludedDomain"];
            requestForWaiver.excludedPerson = jsonObject["excludedPerson"];
            requestForWaiver.languageCode = jsonObject["languageCode"];
            requestForWaiver.modifiedOn = jsonObject["modifiedOn"];
            requestForWaiver.owner = jsonObject["owner"];
            requestForWaiver.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            requestForWaiver.relatedThing = jsonObject["relatedThing"];
            requestForWaiver.shortName = jsonObject["shortName"];
            requestForWaiver.sourceAnnotation = jsonObject["sourceAnnotation"];
            requestForWaiver.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            requestForWaiver.title = jsonObject["title"];

            return requestForWaiver;
        }
    }

    /**
     * The serializer for Requirement
     */
    class RequirementSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "group": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterValue": (value: any) => { return value; },
                "parametricConstraint": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Requirement to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requirement = <Dto.Requirement>thing;
            if (typeof(requirement) == "undefined" || requirement == null) {
                throw new Error("The object is not a Requirement");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(requirement.alias),
                "category": this.getToJsonObjectConverter("category")(requirement.category),
                "classKind": this.getToJsonObjectConverter("classKind")(requirement.classKind),
                "definition": this.getToJsonObjectConverter("definition")(requirement.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requirement.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requirement.excludedPerson),
                "group": this.getToJsonObjectConverter("group")(requirement.group),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(requirement.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(requirement.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(requirement.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirement.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(requirement.name),
                "owner": this.getToJsonObjectConverter("owner")(requirement.owner),
                "parameterValue": this.getToJsonObjectConverter("parameterValue")(requirement.parameterValue),
                "parametricConstraint": this.getToJsonObjectConverter("parametricConstraint")(requirement.parametricConstraint),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirement.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(requirement.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Requirement
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requirement = new Dto.Requirement(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requirement.alias = jsonObject["alias"];
            requirement.category = jsonObject["category"];
            requirement.definition = jsonObject["definition"];
            requirement.excludedDomain = jsonObject["excludedDomain"];
            requirement.excludedPerson = jsonObject["excludedPerson"];
            requirement.group = jsonObject["group"];
            requirement.hyperLink = jsonObject["hyperLink"];
            requirement.isDeprecated = jsonObject["isDeprecated"];
            requirement.modifiedOn = jsonObject["modifiedOn"];
            requirement.name = jsonObject["name"];
            requirement.owner = jsonObject["owner"];
            requirement.parameterValue = jsonObject["parameterValue"];
            requirement.parametricConstraint = parseOrderedItemArray(jsonObject["parametricConstraint"]);
            requirement.shortName = jsonObject["shortName"];

            return requirement;
        }
    }

    /**
     * The serializer for RequirementsContainerParameterValue
     */
    class RequirementsContainerParameterValueSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "value": (value: any) => { return toJsonValueArray(<string[]>value); }
            };
        }

        /**
         * Converts a RequirementsContainerParameterValue to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requirementsContainerParameterValue = <Dto.RequirementsContainerParameterValue>thing;
            if (typeof(requirementsContainerParameterValue) == "undefined" || requirementsContainerParameterValue == null) {
                throw new Error("The object is not a RequirementsContainerParameterValue");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(requirementsContainerParameterValue.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requirementsContainerParameterValue.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requirementsContainerParameterValue.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(requirementsContainerParameterValue.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsContainerParameterValue.modifiedOn),
                "parameterType": this.getToJsonObjectConverter("parameterType")(requirementsContainerParameterValue.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsContainerParameterValue.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(requirementsContainerParameterValue.scale),
                "value": this.getToJsonObjectConverter("value")(requirementsContainerParameterValue.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RequirementsContainerParameterValue
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requirementsContainerParameterValue = new Dto.RequirementsContainerParameterValue(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requirementsContainerParameterValue.excludedDomain = jsonObject["excludedDomain"];
            requirementsContainerParameterValue.excludedPerson = jsonObject["excludedPerson"];
            requirementsContainerParameterValue.modifiedOn = jsonObject["modifiedOn"];
            requirementsContainerParameterValue.parameterType = jsonObject["parameterType"];
            requirementsContainerParameterValue.scale = jsonObject["scale"];
            requirementsContainerParameterValue.value = parseValueArray(jsonObject["value"]);

            return requirementsContainerParameterValue;
        }
    }

    /**
     * The serializer for RequirementsGroup
     */
    class RequirementsGroupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "group": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterValue": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RequirementsGroup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requirementsGroup = <Dto.RequirementsGroup>thing;
            if (typeof(requirementsGroup) == "undefined" || requirementsGroup == null) {
                throw new Error("The object is not a RequirementsGroup");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(requirementsGroup.alias),
                "category": this.getToJsonObjectConverter("category")(requirementsGroup.category),
                "classKind": this.getToJsonObjectConverter("classKind")(requirementsGroup.classKind),
                "definition": this.getToJsonObjectConverter("definition")(requirementsGroup.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requirementsGroup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requirementsGroup.excludedPerson),
                "group": this.getToJsonObjectConverter("group")(requirementsGroup.group),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(requirementsGroup.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(requirementsGroup.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsGroup.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(requirementsGroup.name),
                "owner": this.getToJsonObjectConverter("owner")(requirementsGroup.owner),
                "parameterValue": this.getToJsonObjectConverter("parameterValue")(requirementsGroup.parameterValue),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsGroup.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(requirementsGroup.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RequirementsGroup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requirementsGroup = new Dto.RequirementsGroup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requirementsGroup.alias = jsonObject["alias"];
            requirementsGroup.category = jsonObject["category"];
            requirementsGroup.definition = jsonObject["definition"];
            requirementsGroup.excludedDomain = jsonObject["excludedDomain"];
            requirementsGroup.excludedPerson = jsonObject["excludedPerson"];
            requirementsGroup.group = jsonObject["group"];
            requirementsGroup.hyperLink = jsonObject["hyperLink"];
            requirementsGroup.modifiedOn = jsonObject["modifiedOn"];
            requirementsGroup.name = jsonObject["name"];
            requirementsGroup.owner = jsonObject["owner"];
            requirementsGroup.parameterValue = jsonObject["parameterValue"];
            requirementsGroup.shortName = jsonObject["shortName"];

            return requirementsGroup;
        }
    }

    /**
     * The serializer for RequirementsSpecification
     */
    class RequirementsSpecificationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "group": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "parameterValue": (value: any) => { return value; },
                "requirement": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RequirementsSpecification to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let requirementsSpecification = <Dto.RequirementsSpecification>thing;
            if (typeof(requirementsSpecification) == "undefined" || requirementsSpecification == null) {
                throw new Error("The object is not a RequirementsSpecification");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(requirementsSpecification.alias),
                "category": this.getToJsonObjectConverter("category")(requirementsSpecification.category),
                "classKind": this.getToJsonObjectConverter("classKind")(requirementsSpecification.classKind),
                "definition": this.getToJsonObjectConverter("definition")(requirementsSpecification.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(requirementsSpecification.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(requirementsSpecification.excludedPerson),
                "group": this.getToJsonObjectConverter("group")(requirementsSpecification.group),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(requirementsSpecification.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(requirementsSpecification.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(requirementsSpecification.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsSpecification.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(requirementsSpecification.name),
                "owner": this.getToJsonObjectConverter("owner")(requirementsSpecification.owner),
                "parameterValue": this.getToJsonObjectConverter("parameterValue")(requirementsSpecification.parameterValue),
                "requirement": this.getToJsonObjectConverter("requirement")(requirementsSpecification.requirement),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsSpecification.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(requirementsSpecification.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RequirementsSpecification
         */
        public parse(jsonObject: any) : Dto.Thing {
            const requirementsSpecification = new Dto.RequirementsSpecification(jsonObject["iid"], jsonObject["revisionNumber"], true);
            requirementsSpecification.alias = jsonObject["alias"];
            requirementsSpecification.category = jsonObject["category"];
            requirementsSpecification.definition = jsonObject["definition"];
            requirementsSpecification.excludedDomain = jsonObject["excludedDomain"];
            requirementsSpecification.excludedPerson = jsonObject["excludedPerson"];
            requirementsSpecification.group = jsonObject["group"];
            requirementsSpecification.hyperLink = jsonObject["hyperLink"];
            requirementsSpecification.isDeprecated = jsonObject["isDeprecated"];
            requirementsSpecification.modifiedOn = jsonObject["modifiedOn"];
            requirementsSpecification.name = jsonObject["name"];
            requirementsSpecification.owner = jsonObject["owner"];
            requirementsSpecification.parameterValue = jsonObject["parameterValue"];
            requirementsSpecification.requirement = jsonObject["requirement"];
            requirementsSpecification.shortName = jsonObject["shortName"];

            return requirementsSpecification;
        }
    }

    /**
     * The serializer for ReviewItemDiscrepancy
     */
    class ReviewItemDiscrepancySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "approvedBy": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classification": (value: any) => { return Dto.AnnotationClassificationKind[value]; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "solution": (value: any) => { return value; },
                "sourceAnnotation": (value: any) => { return value; },
                "status": (value: any) => { return Dto.AnnotationStatusKind[value]; },
                "title": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ReviewItemDiscrepancy to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let reviewItemDiscrepancy = <Dto.ReviewItemDiscrepancy>thing;
            if (typeof(reviewItemDiscrepancy) == "undefined" || reviewItemDiscrepancy == null) {
                throw new Error("The object is not a ReviewItemDiscrepancy");
            }

            let jsonObject = {
                "approvedBy": this.getToJsonObjectConverter("approvedBy")(reviewItemDiscrepancy.approvedBy),
                "author": this.getToJsonObjectConverter("author")(reviewItemDiscrepancy.author),
                "category": this.getToJsonObjectConverter("category")(reviewItemDiscrepancy.category),
                "classification": this.getToJsonObjectConverter("classification")(reviewItemDiscrepancy.classification),
                "classKind": this.getToJsonObjectConverter("classKind")(reviewItemDiscrepancy.classKind),
                "content": this.getToJsonObjectConverter("content")(reviewItemDiscrepancy.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(reviewItemDiscrepancy.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(reviewItemDiscrepancy.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(reviewItemDiscrepancy.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(reviewItemDiscrepancy.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(reviewItemDiscrepancy.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(reviewItemDiscrepancy.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(reviewItemDiscrepancy.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(reviewItemDiscrepancy.owner),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(reviewItemDiscrepancy.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(reviewItemDiscrepancy.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(reviewItemDiscrepancy.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(reviewItemDiscrepancy.shortName),
                "solution": this.getToJsonObjectConverter("solution")(reviewItemDiscrepancy.solution),
                "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")(reviewItemDiscrepancy.sourceAnnotation),
                "status": this.getToJsonObjectConverter("status")(reviewItemDiscrepancy.status),
                "title": this.getToJsonObjectConverter("title")(reviewItemDiscrepancy.title)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ReviewItemDiscrepancy
         */
        public parse(jsonObject: any) : Dto.Thing {
            const reviewItemDiscrepancy = new Dto.ReviewItemDiscrepancy(jsonObject["iid"], jsonObject["revisionNumber"], true);
            reviewItemDiscrepancy.approvedBy = jsonObject["approvedBy"];
            reviewItemDiscrepancy.author = jsonObject["author"];
            reviewItemDiscrepancy.category = jsonObject["category"];
            reviewItemDiscrepancy.classification = Dto.AnnotationClassificationKind[<string>jsonObject["classification"]];
            reviewItemDiscrepancy.content = jsonObject["content"];
            reviewItemDiscrepancy.createdOn = jsonObject["createdOn"];
            reviewItemDiscrepancy.discussion = jsonObject["discussion"];
            reviewItemDiscrepancy.excludedDomain = jsonObject["excludedDomain"];
            reviewItemDiscrepancy.excludedPerson = jsonObject["excludedPerson"];
            reviewItemDiscrepancy.languageCode = jsonObject["languageCode"];
            reviewItemDiscrepancy.modifiedOn = jsonObject["modifiedOn"];
            reviewItemDiscrepancy.owner = jsonObject["owner"];
            reviewItemDiscrepancy.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            reviewItemDiscrepancy.relatedThing = jsonObject["relatedThing"];
            reviewItemDiscrepancy.shortName = jsonObject["shortName"];
            reviewItemDiscrepancy.solution = jsonObject["solution"];
            reviewItemDiscrepancy.sourceAnnotation = jsonObject["sourceAnnotation"];
            reviewItemDiscrepancy.status = Dto.AnnotationStatusKind[<string>jsonObject["status"]];
            reviewItemDiscrepancy.title = jsonObject["title"];

            return reviewItemDiscrepancy;
        }
    }

    /**
     * The serializer for RuleVerificationList
     */
    class RuleVerificationListSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "ruleVerification": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RuleVerificationList to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let ruleVerificationList = <Dto.RuleVerificationList>thing;
            if (typeof(ruleVerificationList) == "undefined" || ruleVerificationList == null) {
                throw new Error("The object is not a RuleVerificationList");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(ruleVerificationList.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(ruleVerificationList.classKind),
                "definition": this.getToJsonObjectConverter("definition")(ruleVerificationList.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(ruleVerificationList.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(ruleVerificationList.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(ruleVerificationList.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(ruleVerificationList.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ruleVerificationList.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(ruleVerificationList.name),
                "owner": this.getToJsonObjectConverter("owner")(ruleVerificationList.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ruleVerificationList.revisionNumber),
                "ruleVerification": this.getToJsonObjectConverter("ruleVerification")(ruleVerificationList.ruleVerification),
                "shortName": this.getToJsonObjectConverter("shortName")(ruleVerificationList.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RuleVerificationList
         */
        public parse(jsonObject: any) : Dto.Thing {
            const ruleVerificationList = new Dto.RuleVerificationList(jsonObject["iid"], jsonObject["revisionNumber"], true);
            ruleVerificationList.alias = jsonObject["alias"];
            ruleVerificationList.definition = jsonObject["definition"];
            ruleVerificationList.excludedDomain = jsonObject["excludedDomain"];
            ruleVerificationList.excludedPerson = jsonObject["excludedPerson"];
            ruleVerificationList.hyperLink = jsonObject["hyperLink"];
            ruleVerificationList.modifiedOn = jsonObject["modifiedOn"];
            ruleVerificationList.name = jsonObject["name"];
            ruleVerificationList.owner = jsonObject["owner"];
            ruleVerificationList.ruleVerification = parseOrderedItemArray(jsonObject["ruleVerification"]);
            ruleVerificationList.shortName = jsonObject["shortName"];

            return ruleVerificationList;
        }
    }

    /**
     * The serializer for RuleViolation
     */
    class RuleViolationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "description": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "violatingThing": (value: any) => { return value; }
            };
        }

        /**
         * Converts a RuleViolation to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let ruleViolation = <Dto.RuleViolation>thing;
            if (typeof(ruleViolation) == "undefined" || ruleViolation == null) {
                throw new Error("The object is not a RuleViolation");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(ruleViolation.classKind),
                "description": this.getToJsonObjectConverter("description")(ruleViolation.description),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(ruleViolation.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(ruleViolation.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(ruleViolation.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ruleViolation.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ruleViolation.revisionNumber),
                "violatingThing": this.getToJsonObjectConverter("violatingThing")(ruleViolation.violatingThing)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a RuleViolation
         */
        public parse(jsonObject: any) : Dto.Thing {
            const ruleViolation = new Dto.RuleViolation(jsonObject["iid"], jsonObject["revisionNumber"], true);
            ruleViolation.description = jsonObject["description"];
            ruleViolation.excludedDomain = jsonObject["excludedDomain"];
            ruleViolation.excludedPerson = jsonObject["excludedPerson"];
            ruleViolation.modifiedOn = jsonObject["modifiedOn"];
            ruleViolation.violatingThing = jsonObject["violatingThing"];

            return ruleViolation;
        }
    }

    /**
     * The serializer for ScaleReferenceQuantityValue
     */
    class ScaleReferenceQuantityValueSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "value": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ScaleReferenceQuantityValue to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let scaleReferenceQuantityValue = <Dto.ScaleReferenceQuantityValue>thing;
            if (typeof(scaleReferenceQuantityValue) == "undefined" || scaleReferenceQuantityValue == null) {
                throw new Error("The object is not a ScaleReferenceQuantityValue");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(scaleReferenceQuantityValue.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(scaleReferenceQuantityValue.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(scaleReferenceQuantityValue.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(scaleReferenceQuantityValue.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(scaleReferenceQuantityValue.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(scaleReferenceQuantityValue.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(scaleReferenceQuantityValue.scale),
                "value": this.getToJsonObjectConverter("value")(scaleReferenceQuantityValue.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ScaleReferenceQuantityValue
         */
        public parse(jsonObject: any) : Dto.Thing {
            const scaleReferenceQuantityValue = new Dto.ScaleReferenceQuantityValue(jsonObject["iid"], jsonObject["revisionNumber"], true);
            scaleReferenceQuantityValue.excludedDomain = jsonObject["excludedDomain"];
            scaleReferenceQuantityValue.excludedPerson = jsonObject["excludedPerson"];
            scaleReferenceQuantityValue.modifiedOn = jsonObject["modifiedOn"];
            scaleReferenceQuantityValue.scale = jsonObject["scale"];
            scaleReferenceQuantityValue.value = jsonObject["value"];

            return scaleReferenceQuantityValue;
        }
    }

    /**
     * The serializer for ScaleValueDefinition
     */
    class ScaleValueDefinitionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "value": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ScaleValueDefinition to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let scaleValueDefinition = <Dto.ScaleValueDefinition>thing;
            if (typeof(scaleValueDefinition) == "undefined" || scaleValueDefinition == null) {
                throw new Error("The object is not a ScaleValueDefinition");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(scaleValueDefinition.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(scaleValueDefinition.classKind),
                "definition": this.getToJsonObjectConverter("definition")(scaleValueDefinition.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(scaleValueDefinition.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(scaleValueDefinition.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(scaleValueDefinition.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(scaleValueDefinition.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(scaleValueDefinition.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(scaleValueDefinition.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(scaleValueDefinition.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(scaleValueDefinition.shortName),
                "value": this.getToJsonObjectConverter("value")(scaleValueDefinition.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ScaleValueDefinition
         */
        public parse(jsonObject: any) : Dto.Thing {
            const scaleValueDefinition = new Dto.ScaleValueDefinition(jsonObject["iid"], jsonObject["revisionNumber"], true);
            scaleValueDefinition.alias = jsonObject["alias"];
            scaleValueDefinition.definition = jsonObject["definition"];
            scaleValueDefinition.excludedDomain = jsonObject["excludedDomain"];
            scaleValueDefinition.excludedPerson = jsonObject["excludedPerson"];
            scaleValueDefinition.hyperLink = jsonObject["hyperLink"];
            scaleValueDefinition.modifiedOn = jsonObject["modifiedOn"];
            scaleValueDefinition.name = jsonObject["name"];
            scaleValueDefinition.shortName = jsonObject["shortName"];
            scaleValueDefinition.value = jsonObject["value"];

            return scaleValueDefinition;
        }
    }

    /**
     * The serializer for Section
     */
    class SectionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "page": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Section to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let section = <Dto.Section>thing;
            if (typeof(section) == "undefined" || section == null) {
                throw new Error("The object is not a Section");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(section.category),
                "classKind": this.getToJsonObjectConverter("classKind")(section.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(section.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(section.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(section.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(section.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(section.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(section.name),
                "owner": this.getToJsonObjectConverter("owner")(section.owner),
                "page": this.getToJsonObjectConverter("page")(section.page),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(section.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(section.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Section
         */
        public parse(jsonObject: any) : Dto.Thing {
            const section = new Dto.Section(jsonObject["iid"], jsonObject["revisionNumber"], true);
            section.category = jsonObject["category"];
            section.createdOn = jsonObject["createdOn"];
            section.excludedDomain = jsonObject["excludedDomain"];
            section.excludedPerson = jsonObject["excludedPerson"];
            section.modifiedOn = jsonObject["modifiedOn"];
            section.name = jsonObject["name"];
            section.owner = jsonObject["owner"];
            section.page = parseOrderedItemArray(jsonObject["page"]);
            section.shortName = jsonObject["shortName"];

            return section;
        }
    }

    /**
     * The serializer for SharedStyle
     */
    class SharedStyleSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fillColor": (value: any) => { return value; },
                "fillOpacity": (value: any) => { return value; },
                "fontBold": (value: any) => { return value; },
                "fontColor": (value: any) => { return value; },
                "fontItalic": (value: any) => { return value; },
                "fontName": (value: any) => { return value; },
                "fontSize": (value: any) => { return value; },
                "fontStrokeThrough": (value: any) => { return value; },
                "fontUnderline": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "strokeColor": (value: any) => { return value; },
                "strokeOpacity": (value: any) => { return value; },
                "strokeWidth": (value: any) => { return value; },
                "usedColor": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SharedStyle to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let sharedStyle = <Dto.SharedStyle>thing;
            if (typeof(sharedStyle) == "undefined" || sharedStyle == null) {
                throw new Error("The object is not a SharedStyle");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(sharedStyle.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(sharedStyle.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(sharedStyle.excludedPerson),
                "fillColor": this.getToJsonObjectConverter("fillColor")(sharedStyle.fillColor),
                "fillOpacity": this.getToJsonObjectConverter("fillOpacity")(sharedStyle.fillOpacity),
                "fontBold": this.getToJsonObjectConverter("fontBold")(sharedStyle.fontBold),
                "fontColor": this.getToJsonObjectConverter("fontColor")(sharedStyle.fontColor),
                "fontItalic": this.getToJsonObjectConverter("fontItalic")(sharedStyle.fontItalic),
                "fontName": this.getToJsonObjectConverter("fontName")(sharedStyle.fontName),
                "fontSize": this.getToJsonObjectConverter("fontSize")(sharedStyle.fontSize),
                "fontStrokeThrough": this.getToJsonObjectConverter("fontStrokeThrough")(sharedStyle.fontStrokeThrough),
                "fontUnderline": this.getToJsonObjectConverter("fontUnderline")(sharedStyle.fontUnderline),
                "iid": this.getToJsonObjectConverter("iid")(sharedStyle.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(sharedStyle.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(sharedStyle.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(sharedStyle.revisionNumber),
                "strokeColor": this.getToJsonObjectConverter("strokeColor")(sharedStyle.strokeColor),
                "strokeOpacity": this.getToJsonObjectConverter("strokeOpacity")(sharedStyle.strokeOpacity),
                "strokeWidth": this.getToJsonObjectConverter("strokeWidth")(sharedStyle.strokeWidth),
                "usedColor": this.getToJsonObjectConverter("usedColor")(sharedStyle.usedColor)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SharedStyle
         */
        public parse(jsonObject: any) : Dto.Thing {
            const sharedStyle = new Dto.SharedStyle(jsonObject["iid"], jsonObject["revisionNumber"], true);
            sharedStyle.excludedDomain = jsonObject["excludedDomain"];
            sharedStyle.excludedPerson = jsonObject["excludedPerson"];
            sharedStyle.fillColor = jsonObject["fillColor"];
            sharedStyle.fillOpacity = jsonObject["fillOpacity"];
            sharedStyle.fontBold = jsonObject["fontBold"];
            sharedStyle.fontColor = jsonObject["fontColor"];
            sharedStyle.fontItalic = jsonObject["fontItalic"];
            sharedStyle.fontName = jsonObject["fontName"];
            sharedStyle.fontSize = jsonObject["fontSize"];
            sharedStyle.fontStrokeThrough = jsonObject["fontStrokeThrough"];
            sharedStyle.fontUnderline = jsonObject["fontUnderline"];
            sharedStyle.modifiedOn = jsonObject["modifiedOn"];
            sharedStyle.name = jsonObject["name"];
            sharedStyle.strokeColor = jsonObject["strokeColor"];
            sharedStyle.strokeOpacity = jsonObject["strokeOpacity"];
            sharedStyle.strokeWidth = jsonObject["strokeWidth"];
            sharedStyle.usedColor = jsonObject["usedColor"];

            return sharedStyle;
        }
    }

    /**
     * The serializer for SimpleParameterValue
     */
    class SimpleParameterValueSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "value": (value: any) => { return toJsonValueArray(<string[]>value); }
            };
        }

        /**
         * Converts a SimpleParameterValue to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let simpleParameterValue = <Dto.SimpleParameterValue>thing;
            if (typeof(simpleParameterValue) == "undefined" || simpleParameterValue == null) {
                throw new Error("The object is not a SimpleParameterValue");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(simpleParameterValue.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(simpleParameterValue.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(simpleParameterValue.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(simpleParameterValue.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleParameterValue.modifiedOn),
                "parameterType": this.getToJsonObjectConverter("parameterType")(simpleParameterValue.parameterType),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleParameterValue.revisionNumber),
                "scale": this.getToJsonObjectConverter("scale")(simpleParameterValue.scale),
                "value": this.getToJsonObjectConverter("value")(simpleParameterValue.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SimpleParameterValue
         */
        public parse(jsonObject: any) : Dto.Thing {
            const simpleParameterValue = new Dto.SimpleParameterValue(jsonObject["iid"], jsonObject["revisionNumber"], true);
            simpleParameterValue.excludedDomain = jsonObject["excludedDomain"];
            simpleParameterValue.excludedPerson = jsonObject["excludedPerson"];
            simpleParameterValue.modifiedOn = jsonObject["modifiedOn"];
            simpleParameterValue.parameterType = jsonObject["parameterType"];
            simpleParameterValue.scale = jsonObject["scale"];
            simpleParameterValue.value = parseValueArray(jsonObject["value"]);

            return simpleParameterValue;
        }
    }

    /**
     * The serializer for SimpleQuantityKind
     */
    class SimpleQuantityKindSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultScale": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "possibleScale": (value: any) => { return value; },
                "quantityDimensionSymbol": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SimpleQuantityKind to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let simpleQuantityKind = <Dto.SimpleQuantityKind>thing;
            if (typeof(simpleQuantityKind) == "undefined" || simpleQuantityKind == null) {
                throw new Error("The object is not a SimpleQuantityKind");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(simpleQuantityKind.alias),
                "category": this.getToJsonObjectConverter("category")(simpleQuantityKind.category),
                "classKind": this.getToJsonObjectConverter("classKind")(simpleQuantityKind.classKind),
                "defaultScale": this.getToJsonObjectConverter("defaultScale")(simpleQuantityKind.defaultScale),
                "definition": this.getToJsonObjectConverter("definition")(simpleQuantityKind.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(simpleQuantityKind.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(simpleQuantityKind.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(simpleQuantityKind.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(simpleQuantityKind.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(simpleQuantityKind.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleQuantityKind.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(simpleQuantityKind.name),
                "possibleScale": this.getToJsonObjectConverter("possibleScale")(simpleQuantityKind.possibleScale),
                "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(simpleQuantityKind.quantityDimensionSymbol),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleQuantityKind.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(simpleQuantityKind.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(simpleQuantityKind.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SimpleQuantityKind
         */
        public parse(jsonObject: any) : Dto.Thing {
            const simpleQuantityKind = new Dto.SimpleQuantityKind(jsonObject["iid"], jsonObject["revisionNumber"], true);
            simpleQuantityKind.alias = jsonObject["alias"];
            simpleQuantityKind.category = jsonObject["category"];
            simpleQuantityKind.defaultScale = jsonObject["defaultScale"];
            simpleQuantityKind.definition = jsonObject["definition"];
            simpleQuantityKind.excludedDomain = jsonObject["excludedDomain"];
            simpleQuantityKind.excludedPerson = jsonObject["excludedPerson"];
            simpleQuantityKind.hyperLink = jsonObject["hyperLink"];
            simpleQuantityKind.isDeprecated = jsonObject["isDeprecated"];
            simpleQuantityKind.modifiedOn = jsonObject["modifiedOn"];
            simpleQuantityKind.name = jsonObject["name"];
            simpleQuantityKind.possibleScale = jsonObject["possibleScale"];
            simpleQuantityKind.quantityDimensionSymbol = jsonObject["quantityDimensionSymbol"];
            simpleQuantityKind.shortName = jsonObject["shortName"];
            simpleQuantityKind.symbol = jsonObject["symbol"];

            return simpleQuantityKind;
        }
    }

    /**
     * The serializer for SimpleUnit
     */
    class SimpleUnitSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SimpleUnit to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let simpleUnit = <Dto.SimpleUnit>thing;
            if (typeof(simpleUnit) == "undefined" || simpleUnit == null) {
                throw new Error("The object is not a SimpleUnit");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(simpleUnit.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(simpleUnit.classKind),
                "definition": this.getToJsonObjectConverter("definition")(simpleUnit.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(simpleUnit.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(simpleUnit.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(simpleUnit.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(simpleUnit.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(simpleUnit.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleUnit.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(simpleUnit.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleUnit.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(simpleUnit.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SimpleUnit
         */
        public parse(jsonObject: any) : Dto.Thing {
            const simpleUnit = new Dto.SimpleUnit(jsonObject["iid"], jsonObject["revisionNumber"], true);
            simpleUnit.alias = jsonObject["alias"];
            simpleUnit.definition = jsonObject["definition"];
            simpleUnit.excludedDomain = jsonObject["excludedDomain"];
            simpleUnit.excludedPerson = jsonObject["excludedPerson"];
            simpleUnit.hyperLink = jsonObject["hyperLink"];
            simpleUnit.isDeprecated = jsonObject["isDeprecated"];
            simpleUnit.modifiedOn = jsonObject["modifiedOn"];
            simpleUnit.name = jsonObject["name"];
            simpleUnit.shortName = jsonObject["shortName"];

            return simpleUnit;
        }
    }

    /**
     * The serializer for SiteDirectory
     */
    class SiteDirectorySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "annotation": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "createdOn": (value: any) => { return value; },
                "defaultParticipantRole": (value: any) => { return value; },
                "defaultPersonRole": (value: any) => { return value; },
                "domain": (value: any) => { return value; },
                "domainGroup": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "lastModifiedOn": (value: any) => { return value; },
                "logEntry": (value: any) => { return value; },
                "model": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "naturalLanguage": (value: any) => { return value; },
                "organization": (value: any) => { return value; },
                "participantRole": (value: any) => { return value; },
                "person": (value: any) => { return value; },
                "personRole": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "siteReferenceDataLibrary": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteDirectory to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteDirectory = <Dto.SiteDirectory>thing;
            if (typeof(siteDirectory) == "undefined" || siteDirectory == null) {
                throw new Error("The object is not a SiteDirectory");
            }

            let jsonObject = {
                "annotation": this.getToJsonObjectConverter("annotation")(siteDirectory.annotation),
                "classKind": this.getToJsonObjectConverter("classKind")(siteDirectory.classKind),
                "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectory.createdOn),
                "defaultParticipantRole": this.getToJsonObjectConverter("defaultParticipantRole")(siteDirectory.defaultParticipantRole),
                "defaultPersonRole": this.getToJsonObjectConverter("defaultPersonRole")(siteDirectory.defaultPersonRole),
                "domain": this.getToJsonObjectConverter("domain")(siteDirectory.domain),
                "domainGroup": this.getToJsonObjectConverter("domainGroup")(siteDirectory.domainGroup),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteDirectory.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteDirectory.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(siteDirectory.iid),
                "lastModifiedOn": this.getToJsonObjectConverter("lastModifiedOn")(siteDirectory.lastModifiedOn),
                "logEntry": this.getToJsonObjectConverter("logEntry")(siteDirectory.logEntry),
                "model": this.getToJsonObjectConverter("model")(siteDirectory.model),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectory.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(siteDirectory.name),
                "naturalLanguage": this.getToJsonObjectConverter("naturalLanguage")(siteDirectory.naturalLanguage),
                "organization": this.getToJsonObjectConverter("organization")(siteDirectory.organization),
                "participantRole": this.getToJsonObjectConverter("participantRole")(siteDirectory.participantRole),
                "person": this.getToJsonObjectConverter("person")(siteDirectory.person),
                "personRole": this.getToJsonObjectConverter("personRole")(siteDirectory.personRole),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectory.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(siteDirectory.shortName),
                "siteReferenceDataLibrary": this.getToJsonObjectConverter("siteReferenceDataLibrary")(siteDirectory.siteReferenceDataLibrary)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteDirectory
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteDirectory = new Dto.SiteDirectory(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteDirectory.annotation = jsonObject["annotation"];
            siteDirectory.createdOn = jsonObject["createdOn"];
            siteDirectory.defaultParticipantRole = jsonObject["defaultParticipantRole"];
            siteDirectory.defaultPersonRole = jsonObject["defaultPersonRole"];
            siteDirectory.domain = jsonObject["domain"];
            siteDirectory.domainGroup = jsonObject["domainGroup"];
            siteDirectory.excludedDomain = jsonObject["excludedDomain"];
            siteDirectory.excludedPerson = jsonObject["excludedPerson"];
            siteDirectory.lastModifiedOn = jsonObject["lastModifiedOn"];
            siteDirectory.logEntry = jsonObject["logEntry"];
            siteDirectory.model = jsonObject["model"];
            siteDirectory.modifiedOn = jsonObject["modifiedOn"];
            siteDirectory.name = jsonObject["name"];
            siteDirectory.naturalLanguage = jsonObject["naturalLanguage"];
            siteDirectory.organization = jsonObject["organization"];
            siteDirectory.participantRole = jsonObject["participantRole"];
            siteDirectory.person = jsonObject["person"];
            siteDirectory.personRole = jsonObject["personRole"];
            siteDirectory.shortName = jsonObject["shortName"];
            siteDirectory.siteReferenceDataLibrary = jsonObject["siteReferenceDataLibrary"];

            return siteDirectory;
        }
    }

    /**
     * The serializer for SiteDirectoryDataAnnotation
     */
    class SiteDirectoryDataAnnotationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "discussion": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "primaryAnnotatedThing": (value: any) => { return value; },
                "relatedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteDirectoryDataAnnotation to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteDirectoryDataAnnotation = <Dto.SiteDirectoryDataAnnotation>thing;
            if (typeof(siteDirectoryDataAnnotation) == "undefined" || siteDirectoryDataAnnotation == null) {
                throw new Error("The object is not a SiteDirectoryDataAnnotation");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(siteDirectoryDataAnnotation.author),
                "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryDataAnnotation.classKind),
                "content": this.getToJsonObjectConverter("content")(siteDirectoryDataAnnotation.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectoryDataAnnotation.createdOn),
                "discussion": this.getToJsonObjectConverter("discussion")(siteDirectoryDataAnnotation.discussion),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteDirectoryDataAnnotation.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteDirectoryDataAnnotation.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(siteDirectoryDataAnnotation.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(siteDirectoryDataAnnotation.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryDataAnnotation.modifiedOn),
                "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(siteDirectoryDataAnnotation.primaryAnnotatedThing),
                "relatedThing": this.getToJsonObjectConverter("relatedThing")(siteDirectoryDataAnnotation.relatedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryDataAnnotation.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteDirectoryDataAnnotation
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteDirectoryDataAnnotation = new Dto.SiteDirectoryDataAnnotation(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteDirectoryDataAnnotation.author = jsonObject["author"];
            siteDirectoryDataAnnotation.content = jsonObject["content"];
            siteDirectoryDataAnnotation.createdOn = jsonObject["createdOn"];
            siteDirectoryDataAnnotation.discussion = jsonObject["discussion"];
            siteDirectoryDataAnnotation.excludedDomain = jsonObject["excludedDomain"];
            siteDirectoryDataAnnotation.excludedPerson = jsonObject["excludedPerson"];
            siteDirectoryDataAnnotation.languageCode = jsonObject["languageCode"];
            siteDirectoryDataAnnotation.modifiedOn = jsonObject["modifiedOn"];
            siteDirectoryDataAnnotation.primaryAnnotatedThing = jsonObject["primaryAnnotatedThing"];
            siteDirectoryDataAnnotation.relatedThing = jsonObject["relatedThing"];

            return siteDirectoryDataAnnotation;
        }
    }

    /**
     * The serializer for SiteDirectoryDataDiscussionItem
     */
    class SiteDirectoryDataDiscussionItemSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "replyTo": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteDirectoryDataDiscussionItem to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteDirectoryDataDiscussionItem = <Dto.SiteDirectoryDataDiscussionItem>thing;
            if (typeof(siteDirectoryDataDiscussionItem) == "undefined" || siteDirectoryDataDiscussionItem == null) {
                throw new Error("The object is not a SiteDirectoryDataDiscussionItem");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(siteDirectoryDataDiscussionItem.author),
                "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryDataDiscussionItem.classKind),
                "content": this.getToJsonObjectConverter("content")(siteDirectoryDataDiscussionItem.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectoryDataDiscussionItem.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteDirectoryDataDiscussionItem.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteDirectoryDataDiscussionItem.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(siteDirectoryDataDiscussionItem.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(siteDirectoryDataDiscussionItem.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryDataDiscussionItem.modifiedOn),
                "replyTo": this.getToJsonObjectConverter("replyTo")(siteDirectoryDataDiscussionItem.replyTo),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryDataDiscussionItem.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteDirectoryDataDiscussionItem
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteDirectoryDataDiscussionItem = new Dto.SiteDirectoryDataDiscussionItem(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteDirectoryDataDiscussionItem.author = jsonObject["author"];
            siteDirectoryDataDiscussionItem.content = jsonObject["content"];
            siteDirectoryDataDiscussionItem.createdOn = jsonObject["createdOn"];
            siteDirectoryDataDiscussionItem.excludedDomain = jsonObject["excludedDomain"];
            siteDirectoryDataDiscussionItem.excludedPerson = jsonObject["excludedPerson"];
            siteDirectoryDataDiscussionItem.languageCode = jsonObject["languageCode"];
            siteDirectoryDataDiscussionItem.modifiedOn = jsonObject["modifiedOn"];
            siteDirectoryDataDiscussionItem.replyTo = jsonObject["replyTo"];

            return siteDirectoryDataDiscussionItem;
        }
    }

    /**
     * The serializer for SiteDirectoryThingReference
     */
    class SiteDirectoryThingReferenceSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "referencedRevisionNumber": (value: any) => { return value; },
                "referencedThing": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteDirectoryThingReference to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteDirectoryThingReference = <Dto.SiteDirectoryThingReference>thing;
            if (typeof(siteDirectoryThingReference) == "undefined" || siteDirectoryThingReference == null) {
                throw new Error("The object is not a SiteDirectoryThingReference");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryThingReference.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteDirectoryThingReference.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteDirectoryThingReference.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(siteDirectoryThingReference.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryThingReference.modifiedOn),
                "referencedRevisionNumber": this.getToJsonObjectConverter("referencedRevisionNumber")(siteDirectoryThingReference.referencedRevisionNumber),
                "referencedThing": this.getToJsonObjectConverter("referencedThing")(siteDirectoryThingReference.referencedThing),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryThingReference.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteDirectoryThingReference
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteDirectoryThingReference = new Dto.SiteDirectoryThingReference(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteDirectoryThingReference.excludedDomain = jsonObject["excludedDomain"];
            siteDirectoryThingReference.excludedPerson = jsonObject["excludedPerson"];
            siteDirectoryThingReference.modifiedOn = jsonObject["modifiedOn"];
            siteDirectoryThingReference.referencedRevisionNumber = jsonObject["referencedRevisionNumber"];
            siteDirectoryThingReference.referencedThing = jsonObject["referencedThing"];

            return siteDirectoryThingReference;
        }
    }

    /**
     * The serializer for SiteLogEntry
     */
    class SiteLogEntrySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "affectedItemIid": (value: any) => { return value; },
                "author": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "level": (value: any) => { return Dto.LogLevelKind[value]; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteLogEntry to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteLogEntry = <Dto.SiteLogEntry>thing;
            if (typeof(siteLogEntry) == "undefined" || siteLogEntry == null) {
                throw new Error("The object is not a SiteLogEntry");
            }

            let jsonObject = {
                "affectedItemIid": this.getToJsonObjectConverter("affectedItemIid")(siteLogEntry.affectedItemIid),
                "author": this.getToJsonObjectConverter("author")(siteLogEntry.author),
                "category": this.getToJsonObjectConverter("category")(siteLogEntry.category),
                "classKind": this.getToJsonObjectConverter("classKind")(siteLogEntry.classKind),
                "content": this.getToJsonObjectConverter("content")(siteLogEntry.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(siteLogEntry.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteLogEntry.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteLogEntry.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(siteLogEntry.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(siteLogEntry.languageCode),
                "level": this.getToJsonObjectConverter("level")(siteLogEntry.level),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteLogEntry.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteLogEntry.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteLogEntry
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteLogEntry = new Dto.SiteLogEntry(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteLogEntry.affectedItemIid = jsonObject["affectedItemIid"];
            siteLogEntry.author = jsonObject["author"];
            siteLogEntry.category = jsonObject["category"];
            siteLogEntry.content = jsonObject["content"];
            siteLogEntry.createdOn = jsonObject["createdOn"];
            siteLogEntry.excludedDomain = jsonObject["excludedDomain"];
            siteLogEntry.excludedPerson = jsonObject["excludedPerson"];
            siteLogEntry.languageCode = jsonObject["languageCode"];
            siteLogEntry.level = Dto.LogLevelKind[<string>jsonObject["level"]];
            siteLogEntry.modifiedOn = jsonObject["modifiedOn"];

            return siteLogEntry;
        }
    }

    /**
     * The serializer for SiteReferenceDataLibrary
     */
    class SiteReferenceDataLibrarySerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "baseQuantityKind": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
                "baseUnit": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "constant": (value: any) => { return value; },
                "definedCategory": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "fileType": (value: any) => { return value; },
                "glossary": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "parameterType": (value: any) => { return value; },
                "referenceSource": (value: any) => { return value; },
                "requiredRdl": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "rule": (value: any) => { return value; },
                "scale": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "unit": (value: any) => { return value; },
                "unitPrefix": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SiteReferenceDataLibrary to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let siteReferenceDataLibrary = <Dto.SiteReferenceDataLibrary>thing;
            if (typeof(siteReferenceDataLibrary) == "undefined" || siteReferenceDataLibrary == null) {
                throw new Error("The object is not a SiteReferenceDataLibrary");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(siteReferenceDataLibrary.alias),
                "baseQuantityKind": this.getToJsonObjectConverter("baseQuantityKind")(siteReferenceDataLibrary.baseQuantityKind),
                "baseUnit": this.getToJsonObjectConverter("baseUnit")(siteReferenceDataLibrary.baseUnit),
                "classKind": this.getToJsonObjectConverter("classKind")(siteReferenceDataLibrary.classKind),
                "constant": this.getToJsonObjectConverter("constant")(siteReferenceDataLibrary.constant),
                "definedCategory": this.getToJsonObjectConverter("definedCategory")(siteReferenceDataLibrary.definedCategory),
                "definition": this.getToJsonObjectConverter("definition")(siteReferenceDataLibrary.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(siteReferenceDataLibrary.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(siteReferenceDataLibrary.excludedPerson),
                "fileType": this.getToJsonObjectConverter("fileType")(siteReferenceDataLibrary.fileType),
                "glossary": this.getToJsonObjectConverter("glossary")(siteReferenceDataLibrary.glossary),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(siteReferenceDataLibrary.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(siteReferenceDataLibrary.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(siteReferenceDataLibrary.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteReferenceDataLibrary.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(siteReferenceDataLibrary.name),
                "parameterType": this.getToJsonObjectConverter("parameterType")(siteReferenceDataLibrary.parameterType),
                "referenceSource": this.getToJsonObjectConverter("referenceSource")(siteReferenceDataLibrary.referenceSource),
                "requiredRdl": this.getToJsonObjectConverter("requiredRdl")(siteReferenceDataLibrary.requiredRdl),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteReferenceDataLibrary.revisionNumber),
                "rule": this.getToJsonObjectConverter("rule")(siteReferenceDataLibrary.rule),
                "scale": this.getToJsonObjectConverter("scale")(siteReferenceDataLibrary.scale),
                "shortName": this.getToJsonObjectConverter("shortName")(siteReferenceDataLibrary.shortName),
                "unit": this.getToJsonObjectConverter("unit")(siteReferenceDataLibrary.unit),
                "unitPrefix": this.getToJsonObjectConverter("unitPrefix")(siteReferenceDataLibrary.unitPrefix)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SiteReferenceDataLibrary
         */
        public parse(jsonObject: any) : Dto.Thing {
            const siteReferenceDataLibrary = new Dto.SiteReferenceDataLibrary(jsonObject["iid"], jsonObject["revisionNumber"], true);
            siteReferenceDataLibrary.alias = jsonObject["alias"];
            siteReferenceDataLibrary.baseQuantityKind = parseOrderedItemArray(jsonObject["baseQuantityKind"]);
            siteReferenceDataLibrary.baseUnit = jsonObject["baseUnit"];
            siteReferenceDataLibrary.constant = jsonObject["constant"];
            siteReferenceDataLibrary.definedCategory = jsonObject["definedCategory"];
            siteReferenceDataLibrary.definition = jsonObject["definition"];
            siteReferenceDataLibrary.excludedDomain = jsonObject["excludedDomain"];
            siteReferenceDataLibrary.excludedPerson = jsonObject["excludedPerson"];
            siteReferenceDataLibrary.fileType = jsonObject["fileType"];
            siteReferenceDataLibrary.glossary = jsonObject["glossary"];
            siteReferenceDataLibrary.hyperLink = jsonObject["hyperLink"];
            siteReferenceDataLibrary.isDeprecated = jsonObject["isDeprecated"];
            siteReferenceDataLibrary.modifiedOn = jsonObject["modifiedOn"];
            siteReferenceDataLibrary.name = jsonObject["name"];
            siteReferenceDataLibrary.parameterType = jsonObject["parameterType"];
            siteReferenceDataLibrary.referenceSource = jsonObject["referenceSource"];
            siteReferenceDataLibrary.requiredRdl = jsonObject["requiredRdl"];
            siteReferenceDataLibrary.rule = jsonObject["rule"];
            siteReferenceDataLibrary.scale = jsonObject["scale"];
            siteReferenceDataLibrary.shortName = jsonObject["shortName"];
            siteReferenceDataLibrary.unit = jsonObject["unit"];
            siteReferenceDataLibrary.unitPrefix = jsonObject["unitPrefix"];

            return siteReferenceDataLibrary;
        }
    }

    /**
     * The serializer for Solution
     */
    class SolutionSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "author": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Solution to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let solution = <Dto.Solution>thing;
            if (typeof(solution) == "undefined" || solution == null) {
                throw new Error("The object is not a Solution");
            }

            let jsonObject = {
                "author": this.getToJsonObjectConverter("author")(solution.author),
                "classKind": this.getToJsonObjectConverter("classKind")(solution.classKind),
                "content": this.getToJsonObjectConverter("content")(solution.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(solution.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(solution.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(solution.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(solution.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(solution.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(solution.modifiedOn),
                "owner": this.getToJsonObjectConverter("owner")(solution.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(solution.revisionNumber)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Solution
         */
        public parse(jsonObject: any) : Dto.Thing {
            const solution = new Dto.Solution(jsonObject["iid"], jsonObject["revisionNumber"], true);
            solution.author = jsonObject["author"];
            solution.content = jsonObject["content"];
            solution.createdOn = jsonObject["createdOn"];
            solution.excludedDomain = jsonObject["excludedDomain"];
            solution.excludedPerson = jsonObject["excludedPerson"];
            solution.languageCode = jsonObject["languageCode"];
            solution.modifiedOn = jsonObject["modifiedOn"];
            solution.owner = jsonObject["owner"];

            return solution;
        }
    }

    /**
     * The serializer for SpecializedQuantityKind
     */
    class SpecializedQuantityKindSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "defaultScale": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "general": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "possibleScale": (value: any) => { return value; },
                "quantityDimensionSymbol": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a SpecializedQuantityKind to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let specializedQuantityKind = <Dto.SpecializedQuantityKind>thing;
            if (typeof(specializedQuantityKind) == "undefined" || specializedQuantityKind == null) {
                throw new Error("The object is not a SpecializedQuantityKind");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(specializedQuantityKind.alias),
                "category": this.getToJsonObjectConverter("category")(specializedQuantityKind.category),
                "classKind": this.getToJsonObjectConverter("classKind")(specializedQuantityKind.classKind),
                "defaultScale": this.getToJsonObjectConverter("defaultScale")(specializedQuantityKind.defaultScale),
                "definition": this.getToJsonObjectConverter("definition")(specializedQuantityKind.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(specializedQuantityKind.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(specializedQuantityKind.excludedPerson),
                "general": this.getToJsonObjectConverter("general")(specializedQuantityKind.general),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(specializedQuantityKind.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(specializedQuantityKind.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(specializedQuantityKind.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(specializedQuantityKind.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(specializedQuantityKind.name),
                "possibleScale": this.getToJsonObjectConverter("possibleScale")(specializedQuantityKind.possibleScale),
                "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(specializedQuantityKind.quantityDimensionSymbol),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(specializedQuantityKind.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(specializedQuantityKind.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(specializedQuantityKind.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a SpecializedQuantityKind
         */
        public parse(jsonObject: any) : Dto.Thing {
            const specializedQuantityKind = new Dto.SpecializedQuantityKind(jsonObject["iid"], jsonObject["revisionNumber"], true);
            specializedQuantityKind.alias = jsonObject["alias"];
            specializedQuantityKind.category = jsonObject["category"];
            specializedQuantityKind.defaultScale = jsonObject["defaultScale"];
            specializedQuantityKind.definition = jsonObject["definition"];
            specializedQuantityKind.excludedDomain = jsonObject["excludedDomain"];
            specializedQuantityKind.excludedPerson = jsonObject["excludedPerson"];
            specializedQuantityKind.general = jsonObject["general"];
            specializedQuantityKind.hyperLink = jsonObject["hyperLink"];
            specializedQuantityKind.isDeprecated = jsonObject["isDeprecated"];
            specializedQuantityKind.modifiedOn = jsonObject["modifiedOn"];
            specializedQuantityKind.name = jsonObject["name"];
            specializedQuantityKind.possibleScale = jsonObject["possibleScale"];
            specializedQuantityKind.quantityDimensionSymbol = jsonObject["quantityDimensionSymbol"];
            specializedQuantityKind.shortName = jsonObject["shortName"];
            specializedQuantityKind.symbol = jsonObject["symbol"];

            return specializedQuantityKind;
        }
    }

    /**
     * The serializer for Stakeholder
     */
    class StakeholderSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "stakeholderValue": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Stakeholder to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let stakeholder = <Dto.Stakeholder>thing;
            if (typeof(stakeholder) == "undefined" || stakeholder == null) {
                throw new Error("The object is not a Stakeholder");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(stakeholder.alias),
                "category": this.getToJsonObjectConverter("category")(stakeholder.category),
                "classKind": this.getToJsonObjectConverter("classKind")(stakeholder.classKind),
                "definition": this.getToJsonObjectConverter("definition")(stakeholder.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(stakeholder.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(stakeholder.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(stakeholder.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(stakeholder.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeholder.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(stakeholder.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeholder.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(stakeholder.shortName),
                "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")(stakeholder.stakeholderValue)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Stakeholder
         */
        public parse(jsonObject: any) : Dto.Thing {
            const stakeholder = new Dto.Stakeholder(jsonObject["iid"], jsonObject["revisionNumber"], true);
            stakeholder.alias = jsonObject["alias"];
            stakeholder.category = jsonObject["category"];
            stakeholder.definition = jsonObject["definition"];
            stakeholder.excludedDomain = jsonObject["excludedDomain"];
            stakeholder.excludedPerson = jsonObject["excludedPerson"];
            stakeholder.hyperLink = jsonObject["hyperLink"];
            stakeholder.modifiedOn = jsonObject["modifiedOn"];
            stakeholder.name = jsonObject["name"];
            stakeholder.shortName = jsonObject["shortName"];
            stakeholder.stakeholderValue = jsonObject["stakeholderValue"];

            return stakeholder;
        }
    }

    /**
     * The serializer for StakeholderValue
     */
    class StakeholderValueSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a StakeholderValue to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let stakeholderValue = <Dto.StakeholderValue>thing;
            if (typeof(stakeholderValue) == "undefined" || stakeholderValue == null) {
                throw new Error("The object is not a StakeholderValue");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(stakeholderValue.alias),
                "category": this.getToJsonObjectConverter("category")(stakeholderValue.category),
                "classKind": this.getToJsonObjectConverter("classKind")(stakeholderValue.classKind),
                "definition": this.getToJsonObjectConverter("definition")(stakeholderValue.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(stakeholderValue.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(stakeholderValue.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(stakeholderValue.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(stakeholderValue.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeholderValue.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(stakeholderValue.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeholderValue.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(stakeholderValue.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a StakeholderValue
         */
        public parse(jsonObject: any) : Dto.Thing {
            const stakeholderValue = new Dto.StakeholderValue(jsonObject["iid"], jsonObject["revisionNumber"], true);
            stakeholderValue.alias = jsonObject["alias"];
            stakeholderValue.category = jsonObject["category"];
            stakeholderValue.definition = jsonObject["definition"];
            stakeholderValue.excludedDomain = jsonObject["excludedDomain"];
            stakeholderValue.excludedPerson = jsonObject["excludedPerson"];
            stakeholderValue.hyperLink = jsonObject["hyperLink"];
            stakeholderValue.modifiedOn = jsonObject["modifiedOn"];
            stakeholderValue.name = jsonObject["name"];
            stakeholderValue.shortName = jsonObject["shortName"];

            return stakeholderValue;
        }
    }

    /**
     * The serializer for StakeHolderValueMap
     */
    class StakeHolderValueMapSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "goal": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "requirement": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "settings": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "stakeholderValue": (value: any) => { return value; },
                "valueGroup": (value: any) => { return value; }
            };
        }

        /**
         * Converts a StakeHolderValueMap to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let stakeHolderValueMap = <Dto.StakeHolderValueMap>thing;
            if (typeof(stakeHolderValueMap) == "undefined" || stakeHolderValueMap == null) {
                throw new Error("The object is not a StakeHolderValueMap");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(stakeHolderValueMap.alias),
                "category": this.getToJsonObjectConverter("category")(stakeHolderValueMap.category),
                "classKind": this.getToJsonObjectConverter("classKind")(stakeHolderValueMap.classKind),
                "definition": this.getToJsonObjectConverter("definition")(stakeHolderValueMap.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(stakeHolderValueMap.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(stakeHolderValueMap.excludedPerson),
                "goal": this.getToJsonObjectConverter("goal")(stakeHolderValueMap.goal),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(stakeHolderValueMap.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(stakeHolderValueMap.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeHolderValueMap.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(stakeHolderValueMap.name),
                "requirement": this.getToJsonObjectConverter("requirement")(stakeHolderValueMap.requirement),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeHolderValueMap.revisionNumber),
                "settings": this.getToJsonObjectConverter("settings")(stakeHolderValueMap.settings),
                "shortName": this.getToJsonObjectConverter("shortName")(stakeHolderValueMap.shortName),
                "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")(stakeHolderValueMap.stakeholderValue),
                "valueGroup": this.getToJsonObjectConverter("valueGroup")(stakeHolderValueMap.valueGroup)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a StakeHolderValueMap
         */
        public parse(jsonObject: any) : Dto.Thing {
            const stakeHolderValueMap = new Dto.StakeHolderValueMap(jsonObject["iid"], jsonObject["revisionNumber"], true);
            stakeHolderValueMap.alias = jsonObject["alias"];
            stakeHolderValueMap.category = jsonObject["category"];
            stakeHolderValueMap.definition = jsonObject["definition"];
            stakeHolderValueMap.excludedDomain = jsonObject["excludedDomain"];
            stakeHolderValueMap.excludedPerson = jsonObject["excludedPerson"];
            stakeHolderValueMap.goal = jsonObject["goal"];
            stakeHolderValueMap.hyperLink = jsonObject["hyperLink"];
            stakeHolderValueMap.modifiedOn = jsonObject["modifiedOn"];
            stakeHolderValueMap.name = jsonObject["name"];
            stakeHolderValueMap.requirement = jsonObject["requirement"];
            stakeHolderValueMap.settings = jsonObject["settings"];
            stakeHolderValueMap.shortName = jsonObject["shortName"];
            stakeHolderValueMap.stakeholderValue = jsonObject["stakeholderValue"];
            stakeHolderValueMap.valueGroup = jsonObject["valueGroup"];

            return stakeHolderValueMap;
        }
    }

    /**
     * The serializer for StakeHolderValueMapSettings
     */
    class StakeHolderValueMapSettingsSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "goalToValueGroupRelationship": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "stakeholderValueToRequirementRelationship": (value: any) => { return value; },
                "valueGroupToStakeholderValueRelationship": (value: any) => { return value; }
            };
        }

        /**
         * Converts a StakeHolderValueMapSettings to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let stakeHolderValueMapSettings = <Dto.StakeHolderValueMapSettings>thing;
            if (typeof(stakeHolderValueMapSettings) == "undefined" || stakeHolderValueMapSettings == null) {
                throw new Error("The object is not a StakeHolderValueMapSettings");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(stakeHolderValueMapSettings.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(stakeHolderValueMapSettings.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(stakeHolderValueMapSettings.excludedPerson),
                "goalToValueGroupRelationship": this.getToJsonObjectConverter("goalToValueGroupRelationship")(stakeHolderValueMapSettings.goalToValueGroupRelationship),
                "iid": this.getToJsonObjectConverter("iid")(stakeHolderValueMapSettings.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeHolderValueMapSettings.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeHolderValueMapSettings.revisionNumber),
                "stakeholderValueToRequirementRelationship": this.getToJsonObjectConverter("stakeholderValueToRequirementRelationship")(stakeHolderValueMapSettings.stakeholderValueToRequirementRelationship),
                "valueGroupToStakeholderValueRelationship": this.getToJsonObjectConverter("valueGroupToStakeholderValueRelationship")(stakeHolderValueMapSettings.valueGroupToStakeholderValueRelationship)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a StakeHolderValueMapSettings
         */
        public parse(jsonObject: any) : Dto.Thing {
            const stakeHolderValueMapSettings = new Dto.StakeHolderValueMapSettings(jsonObject["iid"], jsonObject["revisionNumber"], true);
            stakeHolderValueMapSettings.excludedDomain = jsonObject["excludedDomain"];
            stakeHolderValueMapSettings.excludedPerson = jsonObject["excludedPerson"];
            stakeHolderValueMapSettings.goalToValueGroupRelationship = jsonObject["goalToValueGroupRelationship"];
            stakeHolderValueMapSettings.modifiedOn = jsonObject["modifiedOn"];
            stakeHolderValueMapSettings.stakeholderValueToRequirementRelationship = jsonObject["stakeholderValueToRequirementRelationship"];
            stakeHolderValueMapSettings.valueGroupToStakeholderValueRelationship = jsonObject["valueGroupToStakeholderValueRelationship"];

            return stakeHolderValueMapSettings;
        }
    }

    /**
     * The serializer for TelephoneNumber
     */
    class TelephoneNumberSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "value": (value: any) => { return value; },
                "vcardType": (value: any) => { return value.map((x, i) => Dto.VcardTelephoneNumberKind[x]); }
            };
        }

        /**
         * Converts a TelephoneNumber to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let telephoneNumber = <Dto.TelephoneNumber>thing;
            if (typeof(telephoneNumber) == "undefined" || telephoneNumber == null) {
                throw new Error("The object is not a TelephoneNumber");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(telephoneNumber.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(telephoneNumber.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(telephoneNumber.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(telephoneNumber.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(telephoneNumber.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(telephoneNumber.revisionNumber),
                "value": this.getToJsonObjectConverter("value")(telephoneNumber.value),
                "vcardType": this.getToJsonObjectConverter("vcardType")(telephoneNumber.vcardType)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a TelephoneNumber
         */
        public parse(jsonObject: any) : Dto.Thing {
            const telephoneNumber = new Dto.TelephoneNumber(jsonObject["iid"], jsonObject["revisionNumber"], true);
            telephoneNumber.excludedDomain = jsonObject["excludedDomain"];
            telephoneNumber.excludedPerson = jsonObject["excludedPerson"];
            telephoneNumber.modifiedOn = jsonObject["modifiedOn"];
            telephoneNumber.value = jsonObject["value"];
            telephoneNumber.vcardType = jsonObject["vcardType"].map((x: string) => Dto.VcardTelephoneNumberKind[x]);

            return telephoneNumber;
        }
    }

    /**
     * The serializer for Term
     */
    class TermSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a Term to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let term = <Dto.Term>thing;
            if (typeof(term) == "undefined" || term == null) {
                throw new Error("The object is not a Term");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(term.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(term.classKind),
                "definition": this.getToJsonObjectConverter("definition")(term.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(term.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(term.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(term.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(term.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(term.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(term.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(term.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(term.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(term.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a Term
         */
        public parse(jsonObject: any) : Dto.Thing {
            const term = new Dto.Term(jsonObject["iid"], jsonObject["revisionNumber"], true);
            term.alias = jsonObject["alias"];
            term.definition = jsonObject["definition"];
            term.excludedDomain = jsonObject["excludedDomain"];
            term.excludedPerson = jsonObject["excludedPerson"];
            term.hyperLink = jsonObject["hyperLink"];
            term.isDeprecated = jsonObject["isDeprecated"];
            term.modifiedOn = jsonObject["modifiedOn"];
            term.name = jsonObject["name"];
            term.shortName = jsonObject["shortName"];

            return term;
        }
    }

    /**
     * The serializer for TextParameterType
     */
    class TextParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a TextParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let textParameterType = <Dto.TextParameterType>thing;
            if (typeof(textParameterType) == "undefined" || textParameterType == null) {
                throw new Error("The object is not a TextParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(textParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(textParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(textParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(textParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(textParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(textParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(textParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(textParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(textParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(textParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(textParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(textParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(textParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(textParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a TextParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const textParameterType = new Dto.TextParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            textParameterType.alias = jsonObject["alias"];
            textParameterType.category = jsonObject["category"];
            textParameterType.definition = jsonObject["definition"];
            textParameterType.excludedDomain = jsonObject["excludedDomain"];
            textParameterType.excludedPerson = jsonObject["excludedPerson"];
            textParameterType.hyperLink = jsonObject["hyperLink"];
            textParameterType.isDeprecated = jsonObject["isDeprecated"];
            textParameterType.modifiedOn = jsonObject["modifiedOn"];
            textParameterType.name = jsonObject["name"];
            textParameterType.shortName = jsonObject["shortName"];
            textParameterType.symbol = jsonObject["symbol"];

            return textParameterType;
        }
    }

    /**
     * The serializer for TextualNote
     */
    class TextualNoteSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "content": (value: any) => { return value; },
                "createdOn": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "languageCode": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "owner": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a TextualNote to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let textualNote = <Dto.TextualNote>thing;
            if (typeof(textualNote) == "undefined" || textualNote == null) {
                throw new Error("The object is not a TextualNote");
            }

            let jsonObject = {
                "category": this.getToJsonObjectConverter("category")(textualNote.category),
                "classKind": this.getToJsonObjectConverter("classKind")(textualNote.classKind),
                "content": this.getToJsonObjectConverter("content")(textualNote.content),
                "createdOn": this.getToJsonObjectConverter("createdOn")(textualNote.createdOn),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(textualNote.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(textualNote.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(textualNote.iid),
                "languageCode": this.getToJsonObjectConverter("languageCode")(textualNote.languageCode),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(textualNote.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(textualNote.name),
                "owner": this.getToJsonObjectConverter("owner")(textualNote.owner),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(textualNote.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(textualNote.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a TextualNote
         */
        public parse(jsonObject: any) : Dto.Thing {
            const textualNote = new Dto.TextualNote(jsonObject["iid"], jsonObject["revisionNumber"], true);
            textualNote.category = jsonObject["category"];
            textualNote.content = jsonObject["content"];
            textualNote.createdOn = jsonObject["createdOn"];
            textualNote.excludedDomain = jsonObject["excludedDomain"];
            textualNote.excludedPerson = jsonObject["excludedPerson"];
            textualNote.languageCode = jsonObject["languageCode"];
            textualNote.modifiedOn = jsonObject["modifiedOn"];
            textualNote.name = jsonObject["name"];
            textualNote.owner = jsonObject["owner"];
            textualNote.shortName = jsonObject["shortName"];

            return textualNote;
        }
    }

    /**
     * The serializer for TimeOfDayParameterType
     */
    class TimeOfDayParameterTypeSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "symbol": (value: any) => { return value; }
            };
        }

        /**
         * Converts a TimeOfDayParameterType to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let timeOfDayParameterType = <Dto.TimeOfDayParameterType>thing;
            if (typeof(timeOfDayParameterType) == "undefined" || timeOfDayParameterType == null) {
                throw new Error("The object is not a TimeOfDayParameterType");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(timeOfDayParameterType.alias),
                "category": this.getToJsonObjectConverter("category")(timeOfDayParameterType.category),
                "classKind": this.getToJsonObjectConverter("classKind")(timeOfDayParameterType.classKind),
                "definition": this.getToJsonObjectConverter("definition")(timeOfDayParameterType.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(timeOfDayParameterType.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(timeOfDayParameterType.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(timeOfDayParameterType.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(timeOfDayParameterType.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(timeOfDayParameterType.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(timeOfDayParameterType.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(timeOfDayParameterType.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(timeOfDayParameterType.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(timeOfDayParameterType.shortName),
                "symbol": this.getToJsonObjectConverter("symbol")(timeOfDayParameterType.symbol)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a TimeOfDayParameterType
         */
        public parse(jsonObject: any) : Dto.Thing {
            const timeOfDayParameterType = new Dto.TimeOfDayParameterType(jsonObject["iid"], jsonObject["revisionNumber"], true);
            timeOfDayParameterType.alias = jsonObject["alias"];
            timeOfDayParameterType.category = jsonObject["category"];
            timeOfDayParameterType.definition = jsonObject["definition"];
            timeOfDayParameterType.excludedDomain = jsonObject["excludedDomain"];
            timeOfDayParameterType.excludedPerson = jsonObject["excludedPerson"];
            timeOfDayParameterType.hyperLink = jsonObject["hyperLink"];
            timeOfDayParameterType.isDeprecated = jsonObject["isDeprecated"];
            timeOfDayParameterType.modifiedOn = jsonObject["modifiedOn"];
            timeOfDayParameterType.name = jsonObject["name"];
            timeOfDayParameterType.shortName = jsonObject["shortName"];
            timeOfDayParameterType.symbol = jsonObject["symbol"];

            return timeOfDayParameterType;
        }
    }

    /**
     * The serializer for UnitFactor
     */
    class UnitFactorSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "exponent": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "unit": (value: any) => { return value; }
            };
        }

        /**
         * Converts a UnitFactor to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let unitFactor = <Dto.UnitFactor>thing;
            if (typeof(unitFactor) == "undefined" || unitFactor == null) {
                throw new Error("The object is not a UnitFactor");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(unitFactor.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(unitFactor.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(unitFactor.excludedPerson),
                "exponent": this.getToJsonObjectConverter("exponent")(unitFactor.exponent),
                "iid": this.getToJsonObjectConverter("iid")(unitFactor.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(unitFactor.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(unitFactor.revisionNumber),
                "unit": this.getToJsonObjectConverter("unit")(unitFactor.unit)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a UnitFactor
         */
        public parse(jsonObject: any) : Dto.Thing {
            const unitFactor = new Dto.UnitFactor(jsonObject["iid"], jsonObject["revisionNumber"], true);
            unitFactor.excludedDomain = jsonObject["excludedDomain"];
            unitFactor.excludedPerson = jsonObject["excludedPerson"];
            unitFactor.exponent = jsonObject["exponent"];
            unitFactor.modifiedOn = jsonObject["modifiedOn"];
            unitFactor.unit = jsonObject["unit"];

            return unitFactor;
        }
    }

    /**
     * The serializer for UnitPrefix
     */
    class UnitPrefixSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "conversionFactor": (value: any) => { return value; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isDeprecated": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a UnitPrefix to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let unitPrefix = <Dto.UnitPrefix>thing;
            if (typeof(unitPrefix) == "undefined" || unitPrefix == null) {
                throw new Error("The object is not a UnitPrefix");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(unitPrefix.alias),
                "classKind": this.getToJsonObjectConverter("classKind")(unitPrefix.classKind),
                "conversionFactor": this.getToJsonObjectConverter("conversionFactor")(unitPrefix.conversionFactor),
                "definition": this.getToJsonObjectConverter("definition")(unitPrefix.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(unitPrefix.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(unitPrefix.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(unitPrefix.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(unitPrefix.iid),
                "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(unitPrefix.isDeprecated),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(unitPrefix.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(unitPrefix.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(unitPrefix.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(unitPrefix.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a UnitPrefix
         */
        public parse(jsonObject: any) : Dto.Thing {
            const unitPrefix = new Dto.UnitPrefix(jsonObject["iid"], jsonObject["revisionNumber"], true);
            unitPrefix.alias = jsonObject["alias"];
            unitPrefix.conversionFactor = jsonObject["conversionFactor"];
            unitPrefix.definition = jsonObject["definition"];
            unitPrefix.excludedDomain = jsonObject["excludedDomain"];
            unitPrefix.excludedPerson = jsonObject["excludedPerson"];
            unitPrefix.hyperLink = jsonObject["hyperLink"];
            unitPrefix.isDeprecated = jsonObject["isDeprecated"];
            unitPrefix.modifiedOn = jsonObject["modifiedOn"];
            unitPrefix.name = jsonObject["name"];
            unitPrefix.shortName = jsonObject["shortName"];

            return unitPrefix;
        }
    }

    /**
     * The serializer for UserPreference
     */
    class UserPreferenceSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; },
                "value": (value: any) => { return value; }
            };
        }

        /**
         * Converts a UserPreference to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let userPreference = <Dto.UserPreference>thing;
            if (typeof(userPreference) == "undefined" || userPreference == null) {
                throw new Error("The object is not a UserPreference");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(userPreference.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(userPreference.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(userPreference.excludedPerson),
                "iid": this.getToJsonObjectConverter("iid")(userPreference.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(userPreference.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(userPreference.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(userPreference.shortName),
                "value": this.getToJsonObjectConverter("value")(userPreference.value)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a UserPreference
         */
        public parse(jsonObject: any) : Dto.Thing {
            const userPreference = new Dto.UserPreference(jsonObject["iid"], jsonObject["revisionNumber"], true);
            userPreference.excludedDomain = jsonObject["excludedDomain"];
            userPreference.excludedPerson = jsonObject["excludedPerson"];
            userPreference.modifiedOn = jsonObject["modifiedOn"];
            userPreference.shortName = jsonObject["shortName"];
            userPreference.value = jsonObject["value"];

            return userPreference;
        }
    }

    /**
     * The serializer for UserRuleVerification
     */
    class UserRuleVerificationSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "executedOn": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "isActive": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "rule": (value: any) => { return value; },
                "status": (value: any) => { return Dto.RuleVerificationStatusKind[value]; }
            };
        }

        /**
         * Converts a UserRuleVerification to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let userRuleVerification = <Dto.UserRuleVerification>thing;
            if (typeof(userRuleVerification) == "undefined" || userRuleVerification == null) {
                throw new Error("The object is not a UserRuleVerification");
            }

            let jsonObject = {
                "classKind": this.getToJsonObjectConverter("classKind")(userRuleVerification.classKind),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(userRuleVerification.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(userRuleVerification.excludedPerson),
                "executedOn": this.getToJsonObjectConverter("executedOn")(userRuleVerification.executedOn),
                "iid": this.getToJsonObjectConverter("iid")(userRuleVerification.iid),
                "isActive": this.getToJsonObjectConverter("isActive")(userRuleVerification.isActive),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(userRuleVerification.modifiedOn),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(userRuleVerification.revisionNumber),
                "rule": this.getToJsonObjectConverter("rule")(userRuleVerification.rule),
                "status": this.getToJsonObjectConverter("status")(userRuleVerification.status)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a UserRuleVerification
         */
        public parse(jsonObject: any) : Dto.Thing {
            const userRuleVerification = new Dto.UserRuleVerification(jsonObject["iid"], jsonObject["revisionNumber"], true);
            userRuleVerification.excludedDomain = jsonObject["excludedDomain"];
            userRuleVerification.excludedPerson = jsonObject["excludedPerson"];
            userRuleVerification.executedOn = jsonObject["executedOn"];
            userRuleVerification.isActive = jsonObject["isActive"];
            userRuleVerification.modifiedOn = jsonObject["modifiedOn"];
            userRuleVerification.rule = jsonObject["rule"];
            userRuleVerification.status = Dto.RuleVerificationStatusKind[<string>jsonObject["status"]];

            return userRuleVerification;
        }
    }

    /**
     * The serializer for ValueGroup
     */
    class ValueGroupSerializer extends BaseThingSerializer implements ThingSerializerInterface {

        constructor() {
            super();
            this.propertyToJsonObjectMap = {
                "alias": (value: any) => { return value; },
                "category": (value: any) => { return value; },
                "classKind": (value: any) => { return Dto.ClassKind[value]; },
                "definition": (value: any) => { return value; },
                "excludedDomain": (value: any) => { return value; },
                "excludedPerson": (value: any) => { return value; },
                "hyperLink": (value: any) => { return value; },
                "iid": (value: any) => { return value; },
                "modifiedOn": (value: any) => { return value; },
                "name": (value: any) => { return value; },
                "revisionNumber": (value: any) => { return value; },
                "shortName": (value: any) => { return value; }
            };
        }

        /**
         * Converts a ValueGroup to a JSON object
         */
        public toJsonObject(thing: Dto.Thing) : any {
            let valueGroup = <Dto.ValueGroup>thing;
            if (typeof(valueGroup) == "undefined" || valueGroup == null) {
                throw new Error("The object is not a ValueGroup");
            }

            let jsonObject = {
                "alias": this.getToJsonObjectConverter("alias")(valueGroup.alias),
                "category": this.getToJsonObjectConverter("category")(valueGroup.category),
                "classKind": this.getToJsonObjectConverter("classKind")(valueGroup.classKind),
                "definition": this.getToJsonObjectConverter("definition")(valueGroup.definition),
                "excludedDomain": this.getToJsonObjectConverter("excludedDomain")(valueGroup.excludedDomain),
                "excludedPerson": this.getToJsonObjectConverter("excludedPerson")(valueGroup.excludedPerson),
                "hyperLink": this.getToJsonObjectConverter("hyperLink")(valueGroup.hyperLink),
                "iid": this.getToJsonObjectConverter("iid")(valueGroup.iid),
                "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(valueGroup.modifiedOn),
                "name": this.getToJsonObjectConverter("name")(valueGroup.name),
                "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(valueGroup.revisionNumber),
                "shortName": this.getToJsonObjectConverter("shortName")(valueGroup.shortName)
            };

            return jsonObject;
        }

        /**
         * Deserializes a JSON object to a ValueGroup
         */
        public parse(jsonObject: any) : Dto.Thing {
            const valueGroup = new Dto.ValueGroup(jsonObject["iid"], jsonObject["revisionNumber"], true);
            valueGroup.alias = jsonObject["alias"];
            valueGroup.category = jsonObject["category"];
            valueGroup.definition = jsonObject["definition"];
            valueGroup.excludedDomain = jsonObject["excludedDomain"];
            valueGroup.excludedPerson = jsonObject["excludedPerson"];
            valueGroup.hyperLink = jsonObject["hyperLink"];
            valueGroup.modifiedOn = jsonObject["modifiedOn"];
            valueGroup.name = jsonObject["name"];
            valueGroup.shortName = jsonObject["shortName"];

            return valueGroup;
        }
    }


    /**
     * Parse a JSON value-array representation to a string array
     * @param jsonObject the JSON value-array representation
     */
    function parseValueArray(jsonObject: string): string[] {
        var valueArray = new Array<string>();

        // extract the array in between []
        var parsedJson = jsonObject.match(/^\[(.*?)\]$/)[1];

        // split and trim
        var splitString = parsedJson.split(",");
        splitString.forEach(value => value.trim());

        // extract the value in between ""
        splitString.forEach(value => valueArray.push(value.match(/^\"(.*?)\"$/)[1]));
        return valueArray;
    }

    /**
     * Parse a JSON ordered-item array representation to an array of OrderedItem
     * @param jsonObject The JSON object
     */
    function parseOrderedItemArray(jsonObject: string[]): Cdp4Type.OrderedItem[] {
        var array = new Array<Cdp4Type.OrderedItem>();

        if (!Utils.isUndefinedOrNull(jsonObject)) {
            jsonObject.forEach(
                item => {
                    var orderedItem = new Cdp4Type.OrderedItem();
                    orderedItem.k = item["k"];
                    orderedItem.v = item["v"];
                    array.push(orderedItem);
                });
        }

        return array;
    }

    /**
     * Convert a value array to JSON string
     * @param valueArray The  vallue-array to convert
     * @returns The JSON string
     */
    function toJsonValueArray(valueArray: string[]): string {
        let tmpArray = new Array<string>();
        valueArray.forEach(v => tmpArray.push("\"" + v + "\""));
        return "[" + tmpArray.join(",") + "]";
    }

    /**
     * Convert an array of ordered items to the serialized JSON format
     * @param orderedItems the ordered items to convert
     * @returns The JSON object representation
     */
    function toJsonOrderedItem(orderedItems: Cdp4Type.OrderedItem[]): any {
        let jsonArray = new Array<any>();
        orderedItems.forEach(item => {
            var array : { [key: string] : any } = {
                "k": item.k,
                "v": item.v
            };

            if (typeof(item.m) != "undefined" && item.m != null) {
                array["m"] = item.m;
            }

            jsonArray.push(array);
        });

        return jsonArray;
    }

    /**
     * The map containing the serializer classes for every concrete Thing
     */
    export let thingSerializerMap = {
        "ActionItem": new ActionItemSerializer(),
        "ActualFiniteState": new ActualFiniteStateSerializer(),
        "ActualFiniteStateList": new ActualFiniteStateListSerializer(),
        "Alias": new AliasSerializer(),
        "AndExpression": new AndExpressionSerializer(),
        "Approval": new ApprovalSerializer(),
        "ArrayParameterType": new ArrayParameterTypeSerializer(),
        "BinaryNote": new BinaryNoteSerializer(),
        "BinaryRelationship": new BinaryRelationshipSerializer(),
        "BinaryRelationshipRule": new BinaryRelationshipRuleSerializer(),
        "Book": new BookSerializer(),
        "BooleanParameterType": new BooleanParameterTypeSerializer(),
        "Bounds": new BoundsSerializer(),
        "BuiltInRuleVerification": new BuiltInRuleVerificationSerializer(),
        "Category": new CategorySerializer(),
        "ChangeProposal": new ChangeProposalSerializer(),
        "ChangeRequest": new ChangeRequestSerializer(),
        "Citation": new CitationSerializer(),
        "Color": new ColorSerializer(),
        "CommonFileStore": new CommonFileStoreSerializer(),
        "CompoundParameterType": new CompoundParameterTypeSerializer(),
        "Constant": new ConstantSerializer(),
        "ContractChangeNotice": new ContractChangeNoticeSerializer(),
        "CyclicRatioScale": new CyclicRatioScaleSerializer(),
        "DateParameterType": new DateParameterTypeSerializer(),
        "DateTimeParameterType": new DateTimeParameterTypeSerializer(),
        "DecompositionRule": new DecompositionRuleSerializer(),
        "Definition": new DefinitionSerializer(),
        "DerivedQuantityKind": new DerivedQuantityKindSerializer(),
        "DerivedUnit": new DerivedUnitSerializer(),
        "DiagramCanvas": new DiagramCanvasSerializer(),
        "DiagramEdge": new DiagramEdgeSerializer(),
        "DiagramObject": new DiagramObjectSerializer(),
        "DomainFileStore": new DomainFileStoreSerializer(),
        "DomainOfExpertise": new DomainOfExpertiseSerializer(),
        "DomainOfExpertiseGroup": new DomainOfExpertiseGroupSerializer(),
        "ElementDefinition": new ElementDefinitionSerializer(),
        "ElementUsage": new ElementUsageSerializer(),
        "EmailAddress": new EmailAddressSerializer(),
        "EngineeringModel": new EngineeringModelSerializer(),
        "EngineeringModelDataDiscussionItem": new EngineeringModelDataDiscussionItemSerializer(),
        "EngineeringModelDataNote": new EngineeringModelDataNoteSerializer(),
        "EngineeringModelSetup": new EngineeringModelSetupSerializer(),
        "EnumerationParameterType": new EnumerationParameterTypeSerializer(),
        "EnumerationValueDefinition": new EnumerationValueDefinitionSerializer(),
        "ExclusiveOrExpression": new ExclusiveOrExpressionSerializer(),
        "ExternalIdentifierMap": new ExternalIdentifierMapSerializer(),
        "File": new FileSerializer(),
        "FileRevision": new FileRevisionSerializer(),
        "FileType": new FileTypeSerializer(),
        "Folder": new FolderSerializer(),
        "Glossary": new GlossarySerializer(),
        "Goal": new GoalSerializer(),
        "HyperLink": new HyperLinkSerializer(),
        "IdCorrespondence": new IdCorrespondenceSerializer(),
        "IntervalScale": new IntervalScaleSerializer(),
        "Iteration": new IterationSerializer(),
        "IterationSetup": new IterationSetupSerializer(),
        "LinearConversionUnit": new LinearConversionUnitSerializer(),
        "LogarithmicScale": new LogarithmicScaleSerializer(),
        "MappingToReferenceScale": new MappingToReferenceScaleSerializer(),
        "ModellingThingReference": new ModellingThingReferenceSerializer(),
        "ModelLogEntry": new ModelLogEntrySerializer(),
        "ModelReferenceDataLibrary": new ModelReferenceDataLibrarySerializer(),
        "MultiRelationship": new MultiRelationshipSerializer(),
        "MultiRelationshipRule": new MultiRelationshipRuleSerializer(),
        "NaturalLanguage": new NaturalLanguageSerializer(),
        "NestedElement": new NestedElementSerializer(),
        "NestedParameter": new NestedParameterSerializer(),
        "NotExpression": new NotExpressionSerializer(),
        "Option": new OptionSerializer(),
        "OrdinalScale": new OrdinalScaleSerializer(),
        "OrExpression": new OrExpressionSerializer(),
        "Organization": new OrganizationSerializer(),
        "OwnedStyle": new OwnedStyleSerializer(),
        "Page": new PageSerializer(),
        "Parameter": new ParameterSerializer(),
        "ParameterGroup": new ParameterGroupSerializer(),
        "ParameterizedCategoryRule": new ParameterizedCategoryRuleSerializer(),
        "ParameterOverride": new ParameterOverrideSerializer(),
        "ParameterOverrideValueSet": new ParameterOverrideValueSetSerializer(),
        "ParameterSubscription": new ParameterSubscriptionSerializer(),
        "ParameterSubscriptionValueSet": new ParameterSubscriptionValueSetSerializer(),
        "ParameterTypeComponent": new ParameterTypeComponentSerializer(),
        "ParameterValueSet": new ParameterValueSetSerializer(),
        "ParametricConstraint": new ParametricConstraintSerializer(),
        "Participant": new ParticipantSerializer(),
        "ParticipantPermission": new ParticipantPermissionSerializer(),
        "ParticipantRole": new ParticipantRoleSerializer(),
        "Person": new PersonSerializer(),
        "PersonPermission": new PersonPermissionSerializer(),
        "PersonRole": new PersonRoleSerializer(),
        "Point": new PointSerializer(),
        "PossibleFiniteState": new PossibleFiniteStateSerializer(),
        "PossibleFiniteStateList": new PossibleFiniteStateListSerializer(),
        "PrefixedUnit": new PrefixedUnitSerializer(),
        "Publication": new PublicationSerializer(),
        "QuantityKindFactor": new QuantityKindFactorSerializer(),
        "RatioScale": new RatioScaleSerializer(),
        "ReferencerRule": new ReferencerRuleSerializer(),
        "ReferenceSource": new ReferenceSourceSerializer(),
        "RelationalExpression": new RelationalExpressionSerializer(),
        "RelationshipParameterValue": new RelationshipParameterValueSerializer(),
        "RequestForDeviation": new RequestForDeviationSerializer(),
        "RequestForWaiver": new RequestForWaiverSerializer(),
        "Requirement": new RequirementSerializer(),
        "RequirementsContainerParameterValue": new RequirementsContainerParameterValueSerializer(),
        "RequirementsGroup": new RequirementsGroupSerializer(),
        "RequirementsSpecification": new RequirementsSpecificationSerializer(),
        "ReviewItemDiscrepancy": new ReviewItemDiscrepancySerializer(),
        "RuleVerificationList": new RuleVerificationListSerializer(),
        "RuleViolation": new RuleViolationSerializer(),
        "ScaleReferenceQuantityValue": new ScaleReferenceQuantityValueSerializer(),
        "ScaleValueDefinition": new ScaleValueDefinitionSerializer(),
        "Section": new SectionSerializer(),
        "SharedStyle": new SharedStyleSerializer(),
        "SimpleParameterValue": new SimpleParameterValueSerializer(),
        "SimpleQuantityKind": new SimpleQuantityKindSerializer(),
        "SimpleUnit": new SimpleUnitSerializer(),
        "SiteDirectory": new SiteDirectorySerializer(),
        "SiteDirectoryDataAnnotation": new SiteDirectoryDataAnnotationSerializer(),
        "SiteDirectoryDataDiscussionItem": new SiteDirectoryDataDiscussionItemSerializer(),
        "SiteDirectoryThingReference": new SiteDirectoryThingReferenceSerializer(),
        "SiteLogEntry": new SiteLogEntrySerializer(),
        "SiteReferenceDataLibrary": new SiteReferenceDataLibrarySerializer(),
        "Solution": new SolutionSerializer(),
        "SpecializedQuantityKind": new SpecializedQuantityKindSerializer(),
        "Stakeholder": new StakeholderSerializer(),
        "StakeholderValue": new StakeholderValueSerializer(),
        "StakeHolderValueMap": new StakeHolderValueMapSerializer(),
        "StakeHolderValueMapSettings": new StakeHolderValueMapSettingsSerializer(),
        "TelephoneNumber": new TelephoneNumberSerializer(),
        "Term": new TermSerializer(),
        "TextParameterType": new TextParameterTypeSerializer(),
        "TextualNote": new TextualNoteSerializer(),
        "TimeOfDayParameterType": new TimeOfDayParameterTypeSerializer(),
        "UnitFactor": new UnitFactorSerializer(),
        "UnitPrefix": new UnitPrefixSerializer(),
        "UserPreference": new UserPreferenceSerializer(),
        "UserRuleVerification": new UserRuleVerificationSerializer(),
        "ValueGroup": new ValueGroupSerializer()
    };

    /**
     * Get the serializer class for a Thing
     */
    export function getSerializer(classKind: string): ThingSerializerInterface {
        var serializer = thingSerializerMap[classKind];
        if (typeof (serializer) == "undefined" || serializer == null) {
            throw new Error("serializer is undefined.");
        }

        return serializer;
    }

    /**
     * Serialize an array of objects
     * @param array
     */
    export function serialize(array: any): string {
        const jsonArray = new Array<any>();
        array.forEach(
            item => {
                if (item instanceof Dto.Thing) {
                    jsonArray.push(serializeThing(item));
                } else {
                    throw new Error("The type " + typeof (item) + " not supported yet");
                }
            }
        );

        return JSON.stringify(jsonArray);
    }

    /**
     * Deserialize the content of a response
     * @param json The JSON response
     * @returns The deserialized array of Thing
     */
    export function deserialize(response: any): Dto.Thing[] {
        if (Utils.isUndefinedOrNull(response)) {
            throw new Error("The response cannot be null or undefined.");
        }

        const result = new Array<Dto.Thing>();
        for (let jsonObject of response) {
            const classKind = jsonObject["classKind"];
            if (Utils.isUndefinedOrNull(classKind)) {
                throw new Error("The type of object to deserialize is unknown");
            }

            const serializer = getSerializer(classKind);
            try {
                result.push(serializer.parse(jsonObject));
            } catch (error) {
                console.error("Could not deserialize object of type " + classKind + "\n" + error);
            }
        }

        return result;
    }

    /**
     * Serialize the CdpPostOperation to write
     * @param cdpPostOperation The CdpPostOperation to serialize
     * @returns The serializes value
     */
    export function serializePostOperation(cdpPostOperation: CdpPostOperation): string {
          return JSON.stringify(cdpPostOperation);
    }

    /**
     * Convert a Thing to a JSON object
     * @param thing The Thing to convert
     * @returns The JSON object representation
     */
    function serializeThing(thing: Dto.Thing): any {
        const serializer = getSerializer(Dto.ClassKind[thing.classKind]);
        return serializer.toJsonObject(thing);
    }
}
