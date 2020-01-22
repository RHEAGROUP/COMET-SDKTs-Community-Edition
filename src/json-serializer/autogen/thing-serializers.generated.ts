/**
 * @file		ThingSerializers.generated.ts
 * @company		 RHEA System S.A.
 * @copyright	Copyright (c) 2020  RHEA System S.A.
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts ActionItem to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let actionItem = <Dto.ActionItem>thing;
      if (typeof(actionItem) == "undefined" || actionItem == null) {
        throw new Error("The object is not ActionItem");
      }

      let jsonObject = {
        "actionee": this.getToJsonObjectConverter("actionee")(actionItem.actionee),
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(actionItem.approvedBy) != "undefined" && actionItem.approvedBy != null) ? Object.assign([], actionItem.approvedBy).sort() : actionItem.approvedBy),
        "author": this.getToJsonObjectConverter("author")(actionItem.author),
        "category": this.getToJsonObjectConverter("category")((typeof(actionItem.category) != "undefined" && actionItem.category != null) ? Object.assign([], actionItem.category).sort() : actionItem.category),
        "classification": this.getToJsonObjectConverter("classification")(actionItem.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(actionItem.classKind),
        "closeOutDate": this.getToJsonObjectConverter("closeOutDate")(actionItem.closeOutDate),
        "closeOutStatement": this.getToJsonObjectConverter("closeOutStatement")(actionItem.closeOutStatement),
        "content": this.getToJsonObjectConverter("content")(actionItem.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(actionItem.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(actionItem.discussion) != "undefined" && actionItem.discussion != null) ? Object.assign([], actionItem.discussion).sort() : actionItem.discussion),
        "dueDate": this.getToJsonObjectConverter("dueDate")(actionItem.dueDate),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(actionItem.excludedDomain) != "undefined" && actionItem.excludedDomain != null) ? Object.assign([], actionItem.excludedDomain).sort() : actionItem.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(actionItem.excludedPerson) != "undefined" && actionItem.excludedPerson != null) ? Object.assign([], actionItem.excludedPerson).sort() : actionItem.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(actionItem.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(actionItem.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actionItem.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(actionItem.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(actionItem.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(actionItem.relatedThing) != "undefined" && actionItem.relatedThing != null) ? Object.assign([], actionItem.relatedThing).sort() : actionItem.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actionItem.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(actionItem.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(actionItem.sourceAnnotation) != "undefined" && actionItem.sourceAnnotation != null) ? Object.assign([], actionItem.sourceAnnotation).sort() : actionItem.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(actionItem.status),
        "title": this.getToJsonObjectConverter("title")(actionItem.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ActionItem
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ActualFiniteState to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let actualFiniteState = <Dto.ActualFiniteState>thing;
      if (typeof(actualFiniteState) == "undefined" || actualFiniteState == null) {
        throw new Error("The object is not ActualFiniteState");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(actualFiniteState.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(actualFiniteState.excludedDomain) != "undefined" && actualFiniteState.excludedDomain != null) ? Object.assign([], actualFiniteState.excludedDomain).sort() : actualFiniteState.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(actualFiniteState.excludedPerson) != "undefined" && actualFiniteState.excludedPerson != null) ? Object.assign([], actualFiniteState.excludedPerson).sort() : actualFiniteState.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(actualFiniteState.iid),
        "kind": this.getToJsonObjectConverter("kind")(actualFiniteState.kind),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actualFiniteState.modifiedOn),
        "possibleState": this.getToJsonObjectConverter("possibleState")((typeof(actualFiniteState.possibleState) != "undefined" && actualFiniteState.possibleState != null) ? Object.assign([], actualFiniteState.possibleState).sort() : actualFiniteState.possibleState),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actualFiniteState.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ActualFiniteState
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ActualFiniteStateList to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let actualFiniteStateList = <Dto.ActualFiniteStateList>thing;
      if (typeof(actualFiniteStateList) == "undefined" || actualFiniteStateList == null) {
        throw new Error("The object is not ActualFiniteStateList");
      }

      let jsonObject = {
        "actualState": this.getToJsonObjectConverter("actualState")((typeof(actualFiniteStateList.actualState) != "undefined" && actualFiniteStateList.actualState != null) ? Object.assign([], actualFiniteStateList.actualState).sort() : actualFiniteStateList.actualState),
        "classKind": this.getToJsonObjectConverter("classKind")(actualFiniteStateList.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(actualFiniteStateList.excludedDomain) != "undefined" && actualFiniteStateList.excludedDomain != null) ? Object.assign([], actualFiniteStateList.excludedDomain).sort() : actualFiniteStateList.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(actualFiniteStateList.excludedPerson) != "undefined" && actualFiniteStateList.excludedPerson != null) ? Object.assign([], actualFiniteStateList.excludedPerson).sort() : actualFiniteStateList.excludedPerson),
        "excludeOption": this.getToJsonObjectConverter("excludeOption")((typeof(actualFiniteStateList.excludeOption) != "undefined" && actualFiniteStateList.excludeOption != null) ? Object.assign([], actualFiniteStateList.excludeOption).sort() : actualFiniteStateList.excludeOption),
        "iid": this.getToJsonObjectConverter("iid")(actualFiniteStateList.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(actualFiniteStateList.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(actualFiniteStateList.owner),
        "possibleFiniteStateList": this.getToJsonObjectConverter("possibleFiniteStateList")(actualFiniteStateList.possibleFiniteStateList),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(actualFiniteStateList.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ActualFiniteStateList
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Alias to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let alias = <Dto.Alias>thing;
      if (typeof(alias) == "undefined" || alias == null) {
        throw new Error("The object is not Alias");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(alias.classKind),
        "content": this.getToJsonObjectConverter("content")(alias.content),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(alias.excludedDomain) != "undefined" && alias.excludedDomain != null) ? Object.assign([], alias.excludedDomain).sort() : alias.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(alias.excludedPerson) != "undefined" && alias.excludedPerson != null) ? Object.assign([], alias.excludedPerson).sort() : alias.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(alias.iid),
        "isSynonym": this.getToJsonObjectConverter("isSynonym")(alias.isSynonym),
        "languageCode": this.getToJsonObjectConverter("languageCode")(alias.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(alias.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(alias.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Alias
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
        "term": (value: any) => { return value; },
      };
    }

    /**
     * Converts AndExpression to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let andExpression = <Dto.AndExpression>thing;
      if (typeof(andExpression) == "undefined" || andExpression == null) {
        throw new Error("The object is not AndExpression");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(andExpression.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(andExpression.excludedDomain) != "undefined" && andExpression.excludedDomain != null) ? Object.assign([], andExpression.excludedDomain).sort() : andExpression.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(andExpression.excludedPerson) != "undefined" && andExpression.excludedPerson != null) ? Object.assign([], andExpression.excludedPerson).sort() : andExpression.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(andExpression.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(andExpression.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(andExpression.revisionNumber),
        "term": this.getToJsonObjectConverter("term")((typeof(andExpression.term) != "undefined" && andExpression.term != null) ? Object.assign([], andExpression.term).sort() : andExpression.term),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to AndExpression
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Approval to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let approval = <Dto.Approval>thing;
      if (typeof(approval) == "undefined" || approval == null) {
        throw new Error("The object is not Approval");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(approval.author),
        "classification": this.getToJsonObjectConverter("classification")(approval.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(approval.classKind),
        "content": this.getToJsonObjectConverter("content")(approval.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(approval.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(approval.excludedDomain) != "undefined" && approval.excludedDomain != null) ? Object.assign([], approval.excludedDomain).sort() : approval.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(approval.excludedPerson) != "undefined" && approval.excludedPerson != null) ? Object.assign([], approval.excludedPerson).sort() : approval.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(approval.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(approval.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(approval.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(approval.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(approval.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Approval
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts ArrayParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let arrayParameterType = <Dto.ArrayParameterType>thing;
      if (typeof(arrayParameterType) == "undefined" || arrayParameterType == null) {
        throw new Error("The object is not ArrayParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(arrayParameterType.alias) != "undefined" && arrayParameterType.alias != null) ? Object.assign([], arrayParameterType.alias).sort() : arrayParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(arrayParameterType.category) != "undefined" && arrayParameterType.category != null) ? Object.assign([], arrayParameterType.category).sort() : arrayParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(arrayParameterType.classKind),
        "component": this.getToJsonObjectConverter("component")(arrayParameterType.component),
        "definition": this.getToJsonObjectConverter("definition")((typeof(arrayParameterType.definition) != "undefined" && arrayParameterType.definition != null) ? Object.assign([], arrayParameterType.definition).sort() : arrayParameterType.definition),
        "dimension": this.getToJsonObjectConverter("dimension")(arrayParameterType.dimension),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(arrayParameterType.excludedDomain) != "undefined" && arrayParameterType.excludedDomain != null) ? Object.assign([], arrayParameterType.excludedDomain).sort() : arrayParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(arrayParameterType.excludedPerson) != "undefined" && arrayParameterType.excludedPerson != null) ? Object.assign([], arrayParameterType.excludedPerson).sort() : arrayParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(arrayParameterType.hyperLink) != "undefined" && arrayParameterType.hyperLink != null) ? Object.assign([], arrayParameterType.hyperLink).sort() : arrayParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(arrayParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(arrayParameterType.isDeprecated),
        "isFinalized": this.getToJsonObjectConverter("isFinalized")(arrayParameterType.isFinalized),
        "isTensor": this.getToJsonObjectConverter("isTensor")(arrayParameterType.isTensor),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(arrayParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(arrayParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(arrayParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(arrayParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(arrayParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ArrayParameterType
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts BinaryNote to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let binaryNote = <Dto.BinaryNote>thing;
      if (typeof(binaryNote) == "undefined" || binaryNote == null) {
        throw new Error("The object is not BinaryNote");
      }

      let jsonObject = {
        "caption": this.getToJsonObjectConverter("caption")(binaryNote.caption),
        "category": this.getToJsonObjectConverter("category")((typeof(binaryNote.category) != "undefined" && binaryNote.category != null) ? Object.assign([], binaryNote.category).sort() : binaryNote.category),
        "classKind": this.getToJsonObjectConverter("classKind")(binaryNote.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(binaryNote.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(binaryNote.excludedDomain) != "undefined" && binaryNote.excludedDomain != null) ? Object.assign([], binaryNote.excludedDomain).sort() : binaryNote.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(binaryNote.excludedPerson) != "undefined" && binaryNote.excludedPerson != null) ? Object.assign([], binaryNote.excludedPerson).sort() : binaryNote.excludedPerson),
        "fileType": this.getToJsonObjectConverter("fileType")(binaryNote.fileType),
        "iid": this.getToJsonObjectConverter("iid")(binaryNote.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryNote.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(binaryNote.name),
        "owner": this.getToJsonObjectConverter("owner")(binaryNote.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryNote.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(binaryNote.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to BinaryNote
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
        "target": (value: any) => { return value; },
      };
    }

    /**
     * Converts BinaryRelationship to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let binaryRelationship = <Dto.BinaryRelationship>thing;
      if (typeof(binaryRelationship) == "undefined" || binaryRelationship == null) {
        throw new Error("The object is not BinaryRelationship");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(binaryRelationship.category) != "undefined" && binaryRelationship.category != null) ? Object.assign([], binaryRelationship.category).sort() : binaryRelationship.category),
        "classKind": this.getToJsonObjectConverter("classKind")(binaryRelationship.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(binaryRelationship.excludedDomain) != "undefined" && binaryRelationship.excludedDomain != null) ? Object.assign([], binaryRelationship.excludedDomain).sort() : binaryRelationship.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(binaryRelationship.excludedPerson) != "undefined" && binaryRelationship.excludedPerson != null) ? Object.assign([], binaryRelationship.excludedPerson).sort() : binaryRelationship.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(binaryRelationship.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryRelationship.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(binaryRelationship.owner),
        "parameterValue": this.getToJsonObjectConverter("parameterValue")((typeof(binaryRelationship.parameterValue) != "undefined" && binaryRelationship.parameterValue != null) ? Object.assign([], binaryRelationship.parameterValue).sort() : binaryRelationship.parameterValue),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryRelationship.revisionNumber),
        "source": this.getToJsonObjectConverter("source")(binaryRelationship.source),
        "target": this.getToJsonObjectConverter("target")(binaryRelationship.target),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to BinaryRelationship
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
        "targetCategory": (value: any) => { return value; },
      };
    }

    /**
     * Converts BinaryRelationshipRule to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let binaryRelationshipRule = <Dto.BinaryRelationshipRule>thing;
      if (typeof(binaryRelationshipRule) == "undefined" || binaryRelationshipRule == null) {
        throw new Error("The object is not BinaryRelationshipRule");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(binaryRelationshipRule.alias) != "undefined" && binaryRelationshipRule.alias != null) ? Object.assign([], binaryRelationshipRule.alias).sort() : binaryRelationshipRule.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(binaryRelationshipRule.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(binaryRelationshipRule.definition) != "undefined" && binaryRelationshipRule.definition != null) ? Object.assign([], binaryRelationshipRule.definition).sort() : binaryRelationshipRule.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(binaryRelationshipRule.excludedDomain) != "undefined" && binaryRelationshipRule.excludedDomain != null) ? Object.assign([], binaryRelationshipRule.excludedDomain).sort() : binaryRelationshipRule.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(binaryRelationshipRule.excludedPerson) != "undefined" && binaryRelationshipRule.excludedPerson != null) ? Object.assign([], binaryRelationshipRule.excludedPerson).sort() : binaryRelationshipRule.excludedPerson),
        "forwardRelationshipName": this.getToJsonObjectConverter("forwardRelationshipName")(binaryRelationshipRule.forwardRelationshipName),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(binaryRelationshipRule.hyperLink) != "undefined" && binaryRelationshipRule.hyperLink != null) ? Object.assign([], binaryRelationshipRule.hyperLink).sort() : binaryRelationshipRule.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(binaryRelationshipRule.iid),
        "inverseRelationshipName": this.getToJsonObjectConverter("inverseRelationshipName")(binaryRelationshipRule.inverseRelationshipName),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(binaryRelationshipRule.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(binaryRelationshipRule.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(binaryRelationshipRule.name),
        "relationshipCategory": this.getToJsonObjectConverter("relationshipCategory")(binaryRelationshipRule.relationshipCategory),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(binaryRelationshipRule.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(binaryRelationshipRule.shortName),
        "sourceCategory": this.getToJsonObjectConverter("sourceCategory")(binaryRelationshipRule.sourceCategory),
        "targetCategory": this.getToJsonObjectConverter("targetCategory")(binaryRelationshipRule.targetCategory),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to BinaryRelationshipRule
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Book to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let book = <Dto.Book>thing;
      if (typeof(book) == "undefined" || book == null) {
        throw new Error("The object is not Book");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(book.category) != "undefined" && book.category != null) ? Object.assign([], book.category).sort() : book.category),
        "classKind": this.getToJsonObjectConverter("classKind")(book.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(book.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(book.excludedDomain) != "undefined" && book.excludedDomain != null) ? Object.assign([], book.excludedDomain).sort() : book.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(book.excludedPerson) != "undefined" && book.excludedPerson != null) ? Object.assign([], book.excludedPerson).sort() : book.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(book.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(book.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(book.name),
        "owner": this.getToJsonObjectConverter("owner")(book.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(book.revisionNumber),
        "section": this.getToJsonObjectConverter("section")(book.section),
        "shortName": this.getToJsonObjectConverter("shortName")(book.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Book
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts BooleanParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let booleanParameterType = <Dto.BooleanParameterType>thing;
      if (typeof(booleanParameterType) == "undefined" || booleanParameterType == null) {
        throw new Error("The object is not BooleanParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(booleanParameterType.alias) != "undefined" && booleanParameterType.alias != null) ? Object.assign([], booleanParameterType.alias).sort() : booleanParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(booleanParameterType.category) != "undefined" && booleanParameterType.category != null) ? Object.assign([], booleanParameterType.category).sort() : booleanParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(booleanParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(booleanParameterType.definition) != "undefined" && booleanParameterType.definition != null) ? Object.assign([], booleanParameterType.definition).sort() : booleanParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(booleanParameterType.excludedDomain) != "undefined" && booleanParameterType.excludedDomain != null) ? Object.assign([], booleanParameterType.excludedDomain).sort() : booleanParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(booleanParameterType.excludedPerson) != "undefined" && booleanParameterType.excludedPerson != null) ? Object.assign([], booleanParameterType.excludedPerson).sort() : booleanParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(booleanParameterType.hyperLink) != "undefined" && booleanParameterType.hyperLink != null) ? Object.assign([], booleanParameterType.hyperLink).sort() : booleanParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(booleanParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(booleanParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(booleanParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(booleanParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(booleanParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(booleanParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(booleanParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to BooleanParameterType
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
        "y": (value: any) => { return value; },
      };
    }

    /**
     * Converts Bounds to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let bounds = <Dto.Bounds>thing;
      if (typeof(bounds) == "undefined" || bounds == null) {
        throw new Error("The object is not Bounds");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(bounds.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(bounds.excludedDomain) != "undefined" && bounds.excludedDomain != null) ? Object.assign([], bounds.excludedDomain).sort() : bounds.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(bounds.excludedPerson) != "undefined" && bounds.excludedPerson != null) ? Object.assign([], bounds.excludedPerson).sort() : bounds.excludedPerson),
        "height": this.getToJsonObjectConverter("height")(bounds.height),
        "iid": this.getToJsonObjectConverter("iid")(bounds.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(bounds.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(bounds.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(bounds.revisionNumber),
        "width": this.getToJsonObjectConverter("width")(bounds.width),
        "x": this.getToJsonObjectConverter("x")(bounds.x),
        "y": this.getToJsonObjectConverter("y")(bounds.y),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Bounds
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
        "status": (value: any) => { return Dto.RuleVerificationStatusKind[value]; },
      };
    }

    /**
     * Converts BuiltInRuleVerification to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let builtInRuleVerification = <Dto.BuiltInRuleVerification>thing;
      if (typeof(builtInRuleVerification) == "undefined" || builtInRuleVerification == null) {
        throw new Error("The object is not BuiltInRuleVerification");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(builtInRuleVerification.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(builtInRuleVerification.excludedDomain) != "undefined" && builtInRuleVerification.excludedDomain != null) ? Object.assign([], builtInRuleVerification.excludedDomain).sort() : builtInRuleVerification.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(builtInRuleVerification.excludedPerson) != "undefined" && builtInRuleVerification.excludedPerson != null) ? Object.assign([], builtInRuleVerification.excludedPerson).sort() : builtInRuleVerification.excludedPerson),
        "executedOn": this.getToJsonObjectConverter("executedOn")(builtInRuleVerification.executedOn),
        "iid": this.getToJsonObjectConverter("iid")(builtInRuleVerification.iid),
        "isActive": this.getToJsonObjectConverter("isActive")(builtInRuleVerification.isActive),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(builtInRuleVerification.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(builtInRuleVerification.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(builtInRuleVerification.revisionNumber),
        "status": this.getToJsonObjectConverter("status")(builtInRuleVerification.status),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to BuiltInRuleVerification
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
        "superCategory": (value: any) => { return value; },
      };
    }

    /**
     * Converts Category to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let category = <Dto.Category>thing;
      if (typeof(category) == "undefined" || category == null) {
        throw new Error("The object is not Category");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(category.alias) != "undefined" && category.alias != null) ? Object.assign([], category.alias).sort() : category.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(category.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(category.definition) != "undefined" && category.definition != null) ? Object.assign([], category.definition).sort() : category.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(category.excludedDomain) != "undefined" && category.excludedDomain != null) ? Object.assign([], category.excludedDomain).sort() : category.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(category.excludedPerson) != "undefined" && category.excludedPerson != null) ? Object.assign([], category.excludedPerson).sort() : category.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(category.hyperLink) != "undefined" && category.hyperLink != null) ? Object.assign([], category.hyperLink).sort() : category.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(category.iid),
        "isAbstract": this.getToJsonObjectConverter("isAbstract")(category.isAbstract),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(category.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(category.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(category.name),
        "permissibleClass": this.getToJsonObjectConverter("permissibleClass")((typeof(category.permissibleClass) != "undefined" && category.permissibleClass != null) ? Object.assign([], category.permissibleClass).sort() : category.permissibleClass),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(category.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(category.shortName),
        "superCategory": this.getToJsonObjectConverter("superCategory")((typeof(category.superCategory) != "undefined" && category.superCategory != null) ? Object.assign([], category.superCategory).sort() : category.superCategory),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Category
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts ChangeProposal to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let changeProposal = <Dto.ChangeProposal>thing;
      if (typeof(changeProposal) == "undefined" || changeProposal == null) {
        throw new Error("The object is not ChangeProposal");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(changeProposal.approvedBy) != "undefined" && changeProposal.approvedBy != null) ? Object.assign([], changeProposal.approvedBy).sort() : changeProposal.approvedBy),
        "author": this.getToJsonObjectConverter("author")(changeProposal.author),
        "category": this.getToJsonObjectConverter("category")((typeof(changeProposal.category) != "undefined" && changeProposal.category != null) ? Object.assign([], changeProposal.category).sort() : changeProposal.category),
        "changeRequest": this.getToJsonObjectConverter("changeRequest")(changeProposal.changeRequest),
        "classification": this.getToJsonObjectConverter("classification")(changeProposal.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(changeProposal.classKind),
        "content": this.getToJsonObjectConverter("content")(changeProposal.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(changeProposal.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(changeProposal.discussion) != "undefined" && changeProposal.discussion != null) ? Object.assign([], changeProposal.discussion).sort() : changeProposal.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(changeProposal.excludedDomain) != "undefined" && changeProposal.excludedDomain != null) ? Object.assign([], changeProposal.excludedDomain).sort() : changeProposal.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(changeProposal.excludedPerson) != "undefined" && changeProposal.excludedPerson != null) ? Object.assign([], changeProposal.excludedPerson).sort() : changeProposal.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(changeProposal.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(changeProposal.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(changeProposal.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(changeProposal.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(changeProposal.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(changeProposal.relatedThing) != "undefined" && changeProposal.relatedThing != null) ? Object.assign([], changeProposal.relatedThing).sort() : changeProposal.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(changeProposal.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(changeProposal.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(changeProposal.sourceAnnotation) != "undefined" && changeProposal.sourceAnnotation != null) ? Object.assign([], changeProposal.sourceAnnotation).sort() : changeProposal.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(changeProposal.status),
        "title": this.getToJsonObjectConverter("title")(changeProposal.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ChangeProposal
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts ChangeRequest to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let changeRequest = <Dto.ChangeRequest>thing;
      if (typeof(changeRequest) == "undefined" || changeRequest == null) {
        throw new Error("The object is not ChangeRequest");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(changeRequest.approvedBy) != "undefined" && changeRequest.approvedBy != null) ? Object.assign([], changeRequest.approvedBy).sort() : changeRequest.approvedBy),
        "author": this.getToJsonObjectConverter("author")(changeRequest.author),
        "category": this.getToJsonObjectConverter("category")((typeof(changeRequest.category) != "undefined" && changeRequest.category != null) ? Object.assign([], changeRequest.category).sort() : changeRequest.category),
        "classification": this.getToJsonObjectConverter("classification")(changeRequest.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(changeRequest.classKind),
        "content": this.getToJsonObjectConverter("content")(changeRequest.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(changeRequest.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(changeRequest.discussion) != "undefined" && changeRequest.discussion != null) ? Object.assign([], changeRequest.discussion).sort() : changeRequest.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(changeRequest.excludedDomain) != "undefined" && changeRequest.excludedDomain != null) ? Object.assign([], changeRequest.excludedDomain).sort() : changeRequest.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(changeRequest.excludedPerson) != "undefined" && changeRequest.excludedPerson != null) ? Object.assign([], changeRequest.excludedPerson).sort() : changeRequest.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(changeRequest.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(changeRequest.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(changeRequest.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(changeRequest.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(changeRequest.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(changeRequest.relatedThing) != "undefined" && changeRequest.relatedThing != null) ? Object.assign([], changeRequest.relatedThing).sort() : changeRequest.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(changeRequest.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(changeRequest.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(changeRequest.sourceAnnotation) != "undefined" && changeRequest.sourceAnnotation != null) ? Object.assign([], changeRequest.sourceAnnotation).sort() : changeRequest.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(changeRequest.status),
        "title": this.getToJsonObjectConverter("title")(changeRequest.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ChangeRequest
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
        "source": (value: any) => { return value; },
      };
    }

    /**
     * Converts Citation to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let citation = <Dto.Citation>thing;
      if (typeof(citation) == "undefined" || citation == null) {
        throw new Error("The object is not Citation");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(citation.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(citation.excludedDomain) != "undefined" && citation.excludedDomain != null) ? Object.assign([], citation.excludedDomain).sort() : citation.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(citation.excludedPerson) != "undefined" && citation.excludedPerson != null) ? Object.assign([], citation.excludedPerson).sort() : citation.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(citation.iid),
        "isAdaptation": this.getToJsonObjectConverter("isAdaptation")(citation.isAdaptation),
        "location": this.getToJsonObjectConverter("location")(citation.location),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(citation.modifiedOn),
        "remark": this.getToJsonObjectConverter("remark")(citation.remark),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(citation.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(citation.shortName),
        "source": this.getToJsonObjectConverter("source")(citation.source),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Citation
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Color to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let color = <Dto.Color>thing;
      if (typeof(color) == "undefined" || color == null) {
        throw new Error("The object is not Color");
      }

      let jsonObject = {
        "blue": this.getToJsonObjectConverter("blue")(color.blue),
        "classKind": this.getToJsonObjectConverter("classKind")(color.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(color.excludedDomain) != "undefined" && color.excludedDomain != null) ? Object.assign([], color.excludedDomain).sort() : color.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(color.excludedPerson) != "undefined" && color.excludedPerson != null) ? Object.assign([], color.excludedPerson).sort() : color.excludedPerson),
        "green": this.getToJsonObjectConverter("green")(color.green),
        "iid": this.getToJsonObjectConverter("iid")(color.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(color.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(color.name),
        "red": this.getToJsonObjectConverter("red")(color.red),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(color.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Color
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts CommonFileStore to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let commonFileStore = <Dto.CommonFileStore>thing;
      if (typeof(commonFileStore) == "undefined" || commonFileStore == null) {
        throw new Error("The object is not CommonFileStore");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(commonFileStore.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(commonFileStore.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(commonFileStore.excludedDomain) != "undefined" && commonFileStore.excludedDomain != null) ? Object.assign([], commonFileStore.excludedDomain).sort() : commonFileStore.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(commonFileStore.excludedPerson) != "undefined" && commonFileStore.excludedPerson != null) ? Object.assign([], commonFileStore.excludedPerson).sort() : commonFileStore.excludedPerson),
        "file": this.getToJsonObjectConverter("file")((typeof(commonFileStore.file) != "undefined" && commonFileStore.file != null) ? Object.assign([], commonFileStore.file).sort() : commonFileStore.file),
        "folder": this.getToJsonObjectConverter("folder")((typeof(commonFileStore.folder) != "undefined" && commonFileStore.folder != null) ? Object.assign([], commonFileStore.folder).sort() : commonFileStore.folder),
        "iid": this.getToJsonObjectConverter("iid")(commonFileStore.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(commonFileStore.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(commonFileStore.name),
        "owner": this.getToJsonObjectConverter("owner")(commonFileStore.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(commonFileStore.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to CommonFileStore
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts CompoundParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let compoundParameterType = <Dto.CompoundParameterType>thing;
      if (typeof(compoundParameterType) == "undefined" || compoundParameterType == null) {
        throw new Error("The object is not CompoundParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(compoundParameterType.alias) != "undefined" && compoundParameterType.alias != null) ? Object.assign([], compoundParameterType.alias).sort() : compoundParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(compoundParameterType.category) != "undefined" && compoundParameterType.category != null) ? Object.assign([], compoundParameterType.category).sort() : compoundParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(compoundParameterType.classKind),
        "component": this.getToJsonObjectConverter("component")(compoundParameterType.component),
        "definition": this.getToJsonObjectConverter("definition")((typeof(compoundParameterType.definition) != "undefined" && compoundParameterType.definition != null) ? Object.assign([], compoundParameterType.definition).sort() : compoundParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(compoundParameterType.excludedDomain) != "undefined" && compoundParameterType.excludedDomain != null) ? Object.assign([], compoundParameterType.excludedDomain).sort() : compoundParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(compoundParameterType.excludedPerson) != "undefined" && compoundParameterType.excludedPerson != null) ? Object.assign([], compoundParameterType.excludedPerson).sort() : compoundParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(compoundParameterType.hyperLink) != "undefined" && compoundParameterType.hyperLink != null) ? Object.assign([], compoundParameterType.hyperLink).sort() : compoundParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(compoundParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(compoundParameterType.isDeprecated),
        "isFinalized": this.getToJsonObjectConverter("isFinalized")(compoundParameterType.isFinalized),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(compoundParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(compoundParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(compoundParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(compoundParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(compoundParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to CompoundParameterType
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
        "value": (value: any) => { return toJsonValueArray(<string[]>value); },
      };
    }

    /**
     * Converts Constant to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let constant = <Dto.Constant>thing;
      if (typeof(constant) == "undefined" || constant == null) {
        throw new Error("The object is not Constant");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(constant.alias) != "undefined" && constant.alias != null) ? Object.assign([], constant.alias).sort() : constant.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(constant.category) != "undefined" && constant.category != null) ? Object.assign([], constant.category).sort() : constant.category),
        "classKind": this.getToJsonObjectConverter("classKind")(constant.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(constant.definition) != "undefined" && constant.definition != null) ? Object.assign([], constant.definition).sort() : constant.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(constant.excludedDomain) != "undefined" && constant.excludedDomain != null) ? Object.assign([], constant.excludedDomain).sort() : constant.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(constant.excludedPerson) != "undefined" && constant.excludedPerson != null) ? Object.assign([], constant.excludedPerson).sort() : constant.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(constant.hyperLink) != "undefined" && constant.hyperLink != null) ? Object.assign([], constant.hyperLink).sort() : constant.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(constant.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(constant.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(constant.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(constant.name),
        "parameterType": this.getToJsonObjectConverter("parameterType")(constant.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(constant.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(constant.scale),
        "shortName": this.getToJsonObjectConverter("shortName")(constant.shortName),
        "value": this.getToJsonObjectConverter("value")(constant.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Constant
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts ContractChangeNotice to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let contractChangeNotice = <Dto.ContractChangeNotice>thing;
      if (typeof(contractChangeNotice) == "undefined" || contractChangeNotice == null) {
        throw new Error("The object is not ContractChangeNotice");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(contractChangeNotice.approvedBy) != "undefined" && contractChangeNotice.approvedBy != null) ? Object.assign([], contractChangeNotice.approvedBy).sort() : contractChangeNotice.approvedBy),
        "author": this.getToJsonObjectConverter("author")(contractChangeNotice.author),
        "category": this.getToJsonObjectConverter("category")((typeof(contractChangeNotice.category) != "undefined" && contractChangeNotice.category != null) ? Object.assign([], contractChangeNotice.category).sort() : contractChangeNotice.category),
        "changeProposal": this.getToJsonObjectConverter("changeProposal")(contractChangeNotice.changeProposal),
        "classification": this.getToJsonObjectConverter("classification")(contractChangeNotice.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(contractChangeNotice.classKind),
        "content": this.getToJsonObjectConverter("content")(contractChangeNotice.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(contractChangeNotice.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(contractChangeNotice.discussion) != "undefined" && contractChangeNotice.discussion != null) ? Object.assign([], contractChangeNotice.discussion).sort() : contractChangeNotice.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(contractChangeNotice.excludedDomain) != "undefined" && contractChangeNotice.excludedDomain != null) ? Object.assign([], contractChangeNotice.excludedDomain).sort() : contractChangeNotice.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(contractChangeNotice.excludedPerson) != "undefined" && contractChangeNotice.excludedPerson != null) ? Object.assign([], contractChangeNotice.excludedPerson).sort() : contractChangeNotice.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(contractChangeNotice.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(contractChangeNotice.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(contractChangeNotice.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(contractChangeNotice.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(contractChangeNotice.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(contractChangeNotice.relatedThing) != "undefined" && contractChangeNotice.relatedThing != null) ? Object.assign([], contractChangeNotice.relatedThing).sort() : contractChangeNotice.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(contractChangeNotice.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(contractChangeNotice.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(contractChangeNotice.sourceAnnotation) != "undefined" && contractChangeNotice.sourceAnnotation != null) ? Object.assign([], contractChangeNotice.sourceAnnotation).sort() : contractChangeNotice.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(contractChangeNotice.status),
        "title": this.getToJsonObjectConverter("title")(contractChangeNotice.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ContractChangeNotice
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
        "valueDefinition": (value: any) => { return value; },
      };
    }

    /**
     * Converts CyclicRatioScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let cyclicRatioScale = <Dto.CyclicRatioScale>thing;
      if (typeof(cyclicRatioScale) == "undefined" || cyclicRatioScale == null) {
        throw new Error("The object is not CyclicRatioScale");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(cyclicRatioScale.alias) != "undefined" && cyclicRatioScale.alias != null) ? Object.assign([], cyclicRatioScale.alias).sort() : cyclicRatioScale.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(cyclicRatioScale.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(cyclicRatioScale.definition) != "undefined" && cyclicRatioScale.definition != null) ? Object.assign([], cyclicRatioScale.definition).sort() : cyclicRatioScale.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(cyclicRatioScale.excludedDomain) != "undefined" && cyclicRatioScale.excludedDomain != null) ? Object.assign([], cyclicRatioScale.excludedDomain).sort() : cyclicRatioScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(cyclicRatioScale.excludedPerson) != "undefined" && cyclicRatioScale.excludedPerson != null) ? Object.assign([], cyclicRatioScale.excludedPerson).sort() : cyclicRatioScale.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(cyclicRatioScale.hyperLink) != "undefined" && cyclicRatioScale.hyperLink != null) ? Object.assign([], cyclicRatioScale.hyperLink).sort() : cyclicRatioScale.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(cyclicRatioScale.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(cyclicRatioScale.isDeprecated),
        "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(cyclicRatioScale.isMaximumInclusive),
        "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(cyclicRatioScale.isMinimumInclusive),
        "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")((typeof(cyclicRatioScale.mappingToReferenceScale) != "undefined" && cyclicRatioScale.mappingToReferenceScale != null) ? Object.assign([], cyclicRatioScale.mappingToReferenceScale).sort() : cyclicRatioScale.mappingToReferenceScale),
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
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")((typeof(cyclicRatioScale.valueDefinition) != "undefined" && cyclicRatioScale.valueDefinition != null) ? Object.assign([], cyclicRatioScale.valueDefinition).sort() : cyclicRatioScale.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to CyclicRatioScale
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts DateParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let dateParameterType = <Dto.DateParameterType>thing;
      if (typeof(dateParameterType) == "undefined" || dateParameterType == null) {
        throw new Error("The object is not DateParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(dateParameterType.alias) != "undefined" && dateParameterType.alias != null) ? Object.assign([], dateParameterType.alias).sort() : dateParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(dateParameterType.category) != "undefined" && dateParameterType.category != null) ? Object.assign([], dateParameterType.category).sort() : dateParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(dateParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(dateParameterType.definition) != "undefined" && dateParameterType.definition != null) ? Object.assign([], dateParameterType.definition).sort() : dateParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(dateParameterType.excludedDomain) != "undefined" && dateParameterType.excludedDomain != null) ? Object.assign([], dateParameterType.excludedDomain).sort() : dateParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(dateParameterType.excludedPerson) != "undefined" && dateParameterType.excludedPerson != null) ? Object.assign([], dateParameterType.excludedPerson).sort() : dateParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(dateParameterType.hyperLink) != "undefined" && dateParameterType.hyperLink != null) ? Object.assign([], dateParameterType.hyperLink).sort() : dateParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(dateParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(dateParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(dateParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(dateParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(dateParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(dateParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(dateParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DateParameterType
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts DateTimeParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let dateTimeParameterType = <Dto.DateTimeParameterType>thing;
      if (typeof(dateTimeParameterType) == "undefined" || dateTimeParameterType == null) {
        throw new Error("The object is not DateTimeParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(dateTimeParameterType.alias) != "undefined" && dateTimeParameterType.alias != null) ? Object.assign([], dateTimeParameterType.alias).sort() : dateTimeParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(dateTimeParameterType.category) != "undefined" && dateTimeParameterType.category != null) ? Object.assign([], dateTimeParameterType.category).sort() : dateTimeParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(dateTimeParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(dateTimeParameterType.definition) != "undefined" && dateTimeParameterType.definition != null) ? Object.assign([], dateTimeParameterType.definition).sort() : dateTimeParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(dateTimeParameterType.excludedDomain) != "undefined" && dateTimeParameterType.excludedDomain != null) ? Object.assign([], dateTimeParameterType.excludedDomain).sort() : dateTimeParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(dateTimeParameterType.excludedPerson) != "undefined" && dateTimeParameterType.excludedPerson != null) ? Object.assign([], dateTimeParameterType.excludedPerson).sort() : dateTimeParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(dateTimeParameterType.hyperLink) != "undefined" && dateTimeParameterType.hyperLink != null) ? Object.assign([], dateTimeParameterType.hyperLink).sort() : dateTimeParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(dateTimeParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(dateTimeParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(dateTimeParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(dateTimeParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(dateTimeParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(dateTimeParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(dateTimeParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DateTimeParameterType
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts DecompositionRule to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let decompositionRule = <Dto.DecompositionRule>thing;
      if (typeof(decompositionRule) == "undefined" || decompositionRule == null) {
        throw new Error("The object is not DecompositionRule");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(decompositionRule.alias) != "undefined" && decompositionRule.alias != null) ? Object.assign([], decompositionRule.alias).sort() : decompositionRule.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(decompositionRule.classKind),
        "containedCategory": this.getToJsonObjectConverter("containedCategory")((typeof(decompositionRule.containedCategory) != "undefined" && decompositionRule.containedCategory != null) ? Object.assign([], decompositionRule.containedCategory).sort() : decompositionRule.containedCategory),
        "containingCategory": this.getToJsonObjectConverter("containingCategory")(decompositionRule.containingCategory),
        "definition": this.getToJsonObjectConverter("definition")((typeof(decompositionRule.definition) != "undefined" && decompositionRule.definition != null) ? Object.assign([], decompositionRule.definition).sort() : decompositionRule.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(decompositionRule.excludedDomain) != "undefined" && decompositionRule.excludedDomain != null) ? Object.assign([], decompositionRule.excludedDomain).sort() : decompositionRule.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(decompositionRule.excludedPerson) != "undefined" && decompositionRule.excludedPerson != null) ? Object.assign([], decompositionRule.excludedPerson).sort() : decompositionRule.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(decompositionRule.hyperLink) != "undefined" && decompositionRule.hyperLink != null) ? Object.assign([], decompositionRule.hyperLink).sort() : decompositionRule.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(decompositionRule.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(decompositionRule.isDeprecated),
        "maxContained": this.getToJsonObjectConverter("maxContained")(decompositionRule.maxContained),
        "minContained": this.getToJsonObjectConverter("minContained")(decompositionRule.minContained),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(decompositionRule.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(decompositionRule.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(decompositionRule.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(decompositionRule.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DecompositionRule
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Definition to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let definition = <Dto.Definition>thing;
      if (typeof(definition) == "undefined" || definition == null) {
        throw new Error("The object is not Definition");
      }

      let jsonObject = {
        "citation": this.getToJsonObjectConverter("citation")((typeof(definition.citation) != "undefined" && definition.citation != null) ? Object.assign([], definition.citation).sort() : definition.citation),
        "classKind": this.getToJsonObjectConverter("classKind")(definition.classKind),
        "content": this.getToJsonObjectConverter("content")(definition.content),
        "example": this.getToJsonObjectConverter("example")(definition.example),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(definition.excludedDomain) != "undefined" && definition.excludedDomain != null) ? Object.assign([], definition.excludedDomain).sort() : definition.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(definition.excludedPerson) != "undefined" && definition.excludedPerson != null) ? Object.assign([], definition.excludedPerson).sort() : definition.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(definition.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(definition.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(definition.modifiedOn),
        "note": this.getToJsonObjectConverter("note")(definition.note),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(definition.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Definition
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts DerivedQuantityKind to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let derivedQuantityKind = <Dto.DerivedQuantityKind>thing;
      if (typeof(derivedQuantityKind) == "undefined" || derivedQuantityKind == null) {
        throw new Error("The object is not DerivedQuantityKind");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(derivedQuantityKind.alias) != "undefined" && derivedQuantityKind.alias != null) ? Object.assign([], derivedQuantityKind.alias).sort() : derivedQuantityKind.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(derivedQuantityKind.category) != "undefined" && derivedQuantityKind.category != null) ? Object.assign([], derivedQuantityKind.category).sort() : derivedQuantityKind.category),
        "classKind": this.getToJsonObjectConverter("classKind")(derivedQuantityKind.classKind),
        "defaultScale": this.getToJsonObjectConverter("defaultScale")(derivedQuantityKind.defaultScale),
        "definition": this.getToJsonObjectConverter("definition")((typeof(derivedQuantityKind.definition) != "undefined" && derivedQuantityKind.definition != null) ? Object.assign([], derivedQuantityKind.definition).sort() : derivedQuantityKind.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(derivedQuantityKind.excludedDomain) != "undefined" && derivedQuantityKind.excludedDomain != null) ? Object.assign([], derivedQuantityKind.excludedDomain).sort() : derivedQuantityKind.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(derivedQuantityKind.excludedPerson) != "undefined" && derivedQuantityKind.excludedPerson != null) ? Object.assign([], derivedQuantityKind.excludedPerson).sort() : derivedQuantityKind.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(derivedQuantityKind.hyperLink) != "undefined" && derivedQuantityKind.hyperLink != null) ? Object.assign([], derivedQuantityKind.hyperLink).sort() : derivedQuantityKind.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(derivedQuantityKind.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(derivedQuantityKind.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(derivedQuantityKind.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(derivedQuantityKind.name),
        "possibleScale": this.getToJsonObjectConverter("possibleScale")((typeof(derivedQuantityKind.possibleScale) != "undefined" && derivedQuantityKind.possibleScale != null) ? Object.assign([], derivedQuantityKind.possibleScale).sort() : derivedQuantityKind.possibleScale),
        "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(derivedQuantityKind.quantityDimensionSymbol),
        "quantityKindFactor": this.getToJsonObjectConverter("quantityKindFactor")(derivedQuantityKind.quantityKindFactor),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(derivedQuantityKind.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(derivedQuantityKind.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(derivedQuantityKind.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DerivedQuantityKind
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
        "unitFactor": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
      };
    }

    /**
     * Converts DerivedUnit to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let derivedUnit = <Dto.DerivedUnit>thing;
      if (typeof(derivedUnit) == "undefined" || derivedUnit == null) {
        throw new Error("The object is not DerivedUnit");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(derivedUnit.alias) != "undefined" && derivedUnit.alias != null) ? Object.assign([], derivedUnit.alias).sort() : derivedUnit.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(derivedUnit.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(derivedUnit.definition) != "undefined" && derivedUnit.definition != null) ? Object.assign([], derivedUnit.definition).sort() : derivedUnit.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(derivedUnit.excludedDomain) != "undefined" && derivedUnit.excludedDomain != null) ? Object.assign([], derivedUnit.excludedDomain).sort() : derivedUnit.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(derivedUnit.excludedPerson) != "undefined" && derivedUnit.excludedPerson != null) ? Object.assign([], derivedUnit.excludedPerson).sort() : derivedUnit.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(derivedUnit.hyperLink) != "undefined" && derivedUnit.hyperLink != null) ? Object.assign([], derivedUnit.hyperLink).sort() : derivedUnit.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(derivedUnit.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(derivedUnit.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(derivedUnit.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(derivedUnit.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(derivedUnit.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(derivedUnit.shortName),
        "unitFactor": this.getToJsonObjectConverter("unitFactor")(derivedUnit.unitFactor),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DerivedUnit
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts DiagramCanvas to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let diagramCanvas = <Dto.DiagramCanvas>thing;
      if (typeof(diagramCanvas) == "undefined" || diagramCanvas == null) {
        throw new Error("The object is not DiagramCanvas");
      }

      let jsonObject = {
        "bounds": this.getToJsonObjectConverter("bounds")((typeof(diagramCanvas.bounds) != "undefined" && diagramCanvas.bounds != null) ? Object.assign([], diagramCanvas.bounds).sort() : diagramCanvas.bounds),
        "classKind": this.getToJsonObjectConverter("classKind")(diagramCanvas.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(diagramCanvas.createdOn),
        "diagramElement": this.getToJsonObjectConverter("diagramElement")((typeof(diagramCanvas.diagramElement) != "undefined" && diagramCanvas.diagramElement != null) ? Object.assign([], diagramCanvas.diagramElement).sort() : diagramCanvas.diagramElement),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(diagramCanvas.excludedDomain) != "undefined" && diagramCanvas.excludedDomain != null) ? Object.assign([], diagramCanvas.excludedDomain).sort() : diagramCanvas.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(diagramCanvas.excludedPerson) != "undefined" && diagramCanvas.excludedPerson != null) ? Object.assign([], diagramCanvas.excludedPerson).sort() : diagramCanvas.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(diagramCanvas.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramCanvas.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(diagramCanvas.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramCanvas.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DiagramCanvas
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
        "target": (value: any) => { return value; },
      };
    }

    /**
     * Converts DiagramEdge to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let diagramEdge = <Dto.DiagramEdge>thing;
      if (typeof(diagramEdge) == "undefined" || diagramEdge == null) {
        throw new Error("The object is not DiagramEdge");
      }

      let jsonObject = {
        "bounds": this.getToJsonObjectConverter("bounds")((typeof(diagramEdge.bounds) != "undefined" && diagramEdge.bounds != null) ? Object.assign([], diagramEdge.bounds).sort() : diagramEdge.bounds),
        "classKind": this.getToJsonObjectConverter("classKind")(diagramEdge.classKind),
        "depictedThing": this.getToJsonObjectConverter("depictedThing")(diagramEdge.depictedThing),
        "diagramElement": this.getToJsonObjectConverter("diagramElement")((typeof(diagramEdge.diagramElement) != "undefined" && diagramEdge.diagramElement != null) ? Object.assign([], diagramEdge.diagramElement).sort() : diagramEdge.diagramElement),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(diagramEdge.excludedDomain) != "undefined" && diagramEdge.excludedDomain != null) ? Object.assign([], diagramEdge.excludedDomain).sort() : diagramEdge.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(diagramEdge.excludedPerson) != "undefined" && diagramEdge.excludedPerson != null) ? Object.assign([], diagramEdge.excludedPerson).sort() : diagramEdge.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(diagramEdge.iid),
        "localStyle": this.getToJsonObjectConverter("localStyle")((typeof(diagramEdge.localStyle) != "undefined" && diagramEdge.localStyle != null) ? Object.assign([], diagramEdge.localStyle).sort() : diagramEdge.localStyle),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramEdge.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(diagramEdge.name),
        "point": this.getToJsonObjectConverter("point")(diagramEdge.point),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramEdge.revisionNumber),
        "sharedStyle": this.getToJsonObjectConverter("sharedStyle")(diagramEdge.sharedStyle),
        "source": this.getToJsonObjectConverter("source")(diagramEdge.source),
        "target": this.getToJsonObjectConverter("target")(diagramEdge.target),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DiagramEdge
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
        "sharedStyle": (value: any) => { return value; },
      };
    }

    /**
     * Converts DiagramObject to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let diagramObject = <Dto.DiagramObject>thing;
      if (typeof(diagramObject) == "undefined" || diagramObject == null) {
        throw new Error("The object is not DiagramObject");
      }

      let jsonObject = {
        "bounds": this.getToJsonObjectConverter("bounds")((typeof(diagramObject.bounds) != "undefined" && diagramObject.bounds != null) ? Object.assign([], diagramObject.bounds).sort() : diagramObject.bounds),
        "classKind": this.getToJsonObjectConverter("classKind")(diagramObject.classKind),
        "depictedThing": this.getToJsonObjectConverter("depictedThing")(diagramObject.depictedThing),
        "diagramElement": this.getToJsonObjectConverter("diagramElement")((typeof(diagramObject.diagramElement) != "undefined" && diagramObject.diagramElement != null) ? Object.assign([], diagramObject.diagramElement).sort() : diagramObject.diagramElement),
        "documentation": this.getToJsonObjectConverter("documentation")(diagramObject.documentation),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(diagramObject.excludedDomain) != "undefined" && diagramObject.excludedDomain != null) ? Object.assign([], diagramObject.excludedDomain).sort() : diagramObject.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(diagramObject.excludedPerson) != "undefined" && diagramObject.excludedPerson != null) ? Object.assign([], diagramObject.excludedPerson).sort() : diagramObject.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(diagramObject.iid),
        "localStyle": this.getToJsonObjectConverter("localStyle")((typeof(diagramObject.localStyle) != "undefined" && diagramObject.localStyle != null) ? Object.assign([], diagramObject.localStyle).sort() : diagramObject.localStyle),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(diagramObject.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(diagramObject.name),
        "resolution": this.getToJsonObjectConverter("resolution")(diagramObject.resolution),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(diagramObject.revisionNumber),
        "sharedStyle": this.getToJsonObjectConverter("sharedStyle")(diagramObject.sharedStyle),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DiagramObject
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts DomainFileStore to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let domainFileStore = <Dto.DomainFileStore>thing;
      if (typeof(domainFileStore) == "undefined" || domainFileStore == null) {
        throw new Error("The object is not DomainFileStore");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(domainFileStore.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(domainFileStore.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(domainFileStore.excludedDomain) != "undefined" && domainFileStore.excludedDomain != null) ? Object.assign([], domainFileStore.excludedDomain).sort() : domainFileStore.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(domainFileStore.excludedPerson) != "undefined" && domainFileStore.excludedPerson != null) ? Object.assign([], domainFileStore.excludedPerson).sort() : domainFileStore.excludedPerson),
        "file": this.getToJsonObjectConverter("file")((typeof(domainFileStore.file) != "undefined" && domainFileStore.file != null) ? Object.assign([], domainFileStore.file).sort() : domainFileStore.file),
        "folder": this.getToJsonObjectConverter("folder")((typeof(domainFileStore.folder) != "undefined" && domainFileStore.folder != null) ? Object.assign([], domainFileStore.folder).sort() : domainFileStore.folder),
        "iid": this.getToJsonObjectConverter("iid")(domainFileStore.iid),
        "isHidden": this.getToJsonObjectConverter("isHidden")(domainFileStore.isHidden),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainFileStore.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(domainFileStore.name),
        "owner": this.getToJsonObjectConverter("owner")(domainFileStore.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainFileStore.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DomainFileStore
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts DomainOfExpertise to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let domainOfExpertise = <Dto.DomainOfExpertise>thing;
      if (typeof(domainOfExpertise) == "undefined" || domainOfExpertise == null) {
        throw new Error("The object is not DomainOfExpertise");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(domainOfExpertise.alias) != "undefined" && domainOfExpertise.alias != null) ? Object.assign([], domainOfExpertise.alias).sort() : domainOfExpertise.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(domainOfExpertise.category) != "undefined" && domainOfExpertise.category != null) ? Object.assign([], domainOfExpertise.category).sort() : domainOfExpertise.category),
        "classKind": this.getToJsonObjectConverter("classKind")(domainOfExpertise.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(domainOfExpertise.definition) != "undefined" && domainOfExpertise.definition != null) ? Object.assign([], domainOfExpertise.definition).sort() : domainOfExpertise.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(domainOfExpertise.excludedDomain) != "undefined" && domainOfExpertise.excludedDomain != null) ? Object.assign([], domainOfExpertise.excludedDomain).sort() : domainOfExpertise.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(domainOfExpertise.excludedPerson) != "undefined" && domainOfExpertise.excludedPerson != null) ? Object.assign([], domainOfExpertise.excludedPerson).sort() : domainOfExpertise.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(domainOfExpertise.hyperLink) != "undefined" && domainOfExpertise.hyperLink != null) ? Object.assign([], domainOfExpertise.hyperLink).sort() : domainOfExpertise.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(domainOfExpertise.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(domainOfExpertise.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainOfExpertise.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(domainOfExpertise.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainOfExpertise.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(domainOfExpertise.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DomainOfExpertise
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts DomainOfExpertiseGroup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let domainOfExpertiseGroup = <Dto.DomainOfExpertiseGroup>thing;
      if (typeof(domainOfExpertiseGroup) == "undefined" || domainOfExpertiseGroup == null) {
        throw new Error("The object is not DomainOfExpertiseGroup");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(domainOfExpertiseGroup.alias) != "undefined" && domainOfExpertiseGroup.alias != null) ? Object.assign([], domainOfExpertiseGroup.alias).sort() : domainOfExpertiseGroup.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(domainOfExpertiseGroup.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(domainOfExpertiseGroup.definition) != "undefined" && domainOfExpertiseGroup.definition != null) ? Object.assign([], domainOfExpertiseGroup.definition).sort() : domainOfExpertiseGroup.definition),
        "domain": this.getToJsonObjectConverter("domain")((typeof(domainOfExpertiseGroup.domain) != "undefined" && domainOfExpertiseGroup.domain != null) ? Object.assign([], domainOfExpertiseGroup.domain).sort() : domainOfExpertiseGroup.domain),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(domainOfExpertiseGroup.excludedDomain) != "undefined" && domainOfExpertiseGroup.excludedDomain != null) ? Object.assign([], domainOfExpertiseGroup.excludedDomain).sort() : domainOfExpertiseGroup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(domainOfExpertiseGroup.excludedPerson) != "undefined" && domainOfExpertiseGroup.excludedPerson != null) ? Object.assign([], domainOfExpertiseGroup.excludedPerson).sort() : domainOfExpertiseGroup.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(domainOfExpertiseGroup.hyperLink) != "undefined" && domainOfExpertiseGroup.hyperLink != null) ? Object.assign([], domainOfExpertiseGroup.hyperLink).sort() : domainOfExpertiseGroup.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(domainOfExpertiseGroup.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(domainOfExpertiseGroup.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(domainOfExpertiseGroup.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(domainOfExpertiseGroup.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(domainOfExpertiseGroup.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(domainOfExpertiseGroup.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to DomainOfExpertiseGroup
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ElementDefinition to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let elementDefinition = <Dto.ElementDefinition>thing;
      if (typeof(elementDefinition) == "undefined" || elementDefinition == null) {
        throw new Error("The object is not ElementDefinition");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(elementDefinition.alias) != "undefined" && elementDefinition.alias != null) ? Object.assign([], elementDefinition.alias).sort() : elementDefinition.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(elementDefinition.category) != "undefined" && elementDefinition.category != null) ? Object.assign([], elementDefinition.category).sort() : elementDefinition.category),
        "classKind": this.getToJsonObjectConverter("classKind")(elementDefinition.classKind),
        "containedElement": this.getToJsonObjectConverter("containedElement")((typeof(elementDefinition.containedElement) != "undefined" && elementDefinition.containedElement != null) ? Object.assign([], elementDefinition.containedElement).sort() : elementDefinition.containedElement),
        "definition": this.getToJsonObjectConverter("definition")((typeof(elementDefinition.definition) != "undefined" && elementDefinition.definition != null) ? Object.assign([], elementDefinition.definition).sort() : elementDefinition.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(elementDefinition.excludedDomain) != "undefined" && elementDefinition.excludedDomain != null) ? Object.assign([], elementDefinition.excludedDomain).sort() : elementDefinition.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(elementDefinition.excludedPerson) != "undefined" && elementDefinition.excludedPerson != null) ? Object.assign([], elementDefinition.excludedPerson).sort() : elementDefinition.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(elementDefinition.hyperLink) != "undefined" && elementDefinition.hyperLink != null) ? Object.assign([], elementDefinition.hyperLink).sort() : elementDefinition.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(elementDefinition.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(elementDefinition.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(elementDefinition.name),
        "owner": this.getToJsonObjectConverter("owner")(elementDefinition.owner),
        "parameter": this.getToJsonObjectConverter("parameter")((typeof(elementDefinition.parameter) != "undefined" && elementDefinition.parameter != null) ? Object.assign([], elementDefinition.parameter).sort() : elementDefinition.parameter),
        "parameterGroup": this.getToJsonObjectConverter("parameterGroup")((typeof(elementDefinition.parameterGroup) != "undefined" && elementDefinition.parameterGroup != null) ? Object.assign([], elementDefinition.parameterGroup).sort() : elementDefinition.parameterGroup),
        "referencedElement": this.getToJsonObjectConverter("referencedElement")((typeof(elementDefinition.referencedElement) != "undefined" && elementDefinition.referencedElement != null) ? Object.assign([], elementDefinition.referencedElement).sort() : elementDefinition.referencedElement),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(elementDefinition.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(elementDefinition.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ElementDefinition
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ElementUsage to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let elementUsage = <Dto.ElementUsage>thing;
      if (typeof(elementUsage) == "undefined" || elementUsage == null) {
        throw new Error("The object is not ElementUsage");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(elementUsage.alias) != "undefined" && elementUsage.alias != null) ? Object.assign([], elementUsage.alias).sort() : elementUsage.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(elementUsage.category) != "undefined" && elementUsage.category != null) ? Object.assign([], elementUsage.category).sort() : elementUsage.category),
        "classKind": this.getToJsonObjectConverter("classKind")(elementUsage.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(elementUsage.definition) != "undefined" && elementUsage.definition != null) ? Object.assign([], elementUsage.definition).sort() : elementUsage.definition),
        "elementDefinition": this.getToJsonObjectConverter("elementDefinition")(elementUsage.elementDefinition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(elementUsage.excludedDomain) != "undefined" && elementUsage.excludedDomain != null) ? Object.assign([], elementUsage.excludedDomain).sort() : elementUsage.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(elementUsage.excludedPerson) != "undefined" && elementUsage.excludedPerson != null) ? Object.assign([], elementUsage.excludedPerson).sort() : elementUsage.excludedPerson),
        "excludeOption": this.getToJsonObjectConverter("excludeOption")((typeof(elementUsage.excludeOption) != "undefined" && elementUsage.excludeOption != null) ? Object.assign([], elementUsage.excludeOption).sort() : elementUsage.excludeOption),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(elementUsage.hyperLink) != "undefined" && elementUsage.hyperLink != null) ? Object.assign([], elementUsage.hyperLink).sort() : elementUsage.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(elementUsage.iid),
        "interfaceEnd": this.getToJsonObjectConverter("interfaceEnd")(elementUsage.interfaceEnd),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(elementUsage.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(elementUsage.name),
        "owner": this.getToJsonObjectConverter("owner")(elementUsage.owner),
        "parameterOverride": this.getToJsonObjectConverter("parameterOverride")((typeof(elementUsage.parameterOverride) != "undefined" && elementUsage.parameterOverride != null) ? Object.assign([], elementUsage.parameterOverride).sort() : elementUsage.parameterOverride),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(elementUsage.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(elementUsage.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ElementUsage
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
        "vcardType": (value: any) => { return Dto.VcardEmailAddressKind[value]; },
      };
    }

    /**
     * Converts EmailAddress to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let emailAddress = <Dto.EmailAddress>thing;
      if (typeof(emailAddress) == "undefined" || emailAddress == null) {
        throw new Error("The object is not EmailAddress");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(emailAddress.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(emailAddress.excludedDomain) != "undefined" && emailAddress.excludedDomain != null) ? Object.assign([], emailAddress.excludedDomain).sort() : emailAddress.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(emailAddress.excludedPerson) != "undefined" && emailAddress.excludedPerson != null) ? Object.assign([], emailAddress.excludedPerson).sort() : emailAddress.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(emailAddress.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(emailAddress.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(emailAddress.revisionNumber),
        "value": this.getToJsonObjectConverter("value")(emailAddress.value),
        "vcardType": this.getToJsonObjectConverter("vcardType")(emailAddress.vcardType),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EmailAddress
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts EngineeringModel to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let engineeringModel = <Dto.EngineeringModel>thing;
      if (typeof(engineeringModel) == "undefined" || engineeringModel == null) {
        throw new Error("The object is not EngineeringModel");
      }

      let jsonObject = {
        "book": this.getToJsonObjectConverter("book")(engineeringModel.book),
        "classKind": this.getToJsonObjectConverter("classKind")(engineeringModel.classKind),
        "commonFileStore": this.getToJsonObjectConverter("commonFileStore")((typeof(engineeringModel.commonFileStore) != "undefined" && engineeringModel.commonFileStore != null) ? Object.assign([], engineeringModel.commonFileStore).sort() : engineeringModel.commonFileStore),
        "engineeringModelSetup": this.getToJsonObjectConverter("engineeringModelSetup")(engineeringModel.engineeringModelSetup),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(engineeringModel.excludedDomain) != "undefined" && engineeringModel.excludedDomain != null) ? Object.assign([], engineeringModel.excludedDomain).sort() : engineeringModel.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(engineeringModel.excludedPerson) != "undefined" && engineeringModel.excludedPerson != null) ? Object.assign([], engineeringModel.excludedPerson).sort() : engineeringModel.excludedPerson),
        "genericNote": this.getToJsonObjectConverter("genericNote")((typeof(engineeringModel.genericNote) != "undefined" && engineeringModel.genericNote != null) ? Object.assign([], engineeringModel.genericNote).sort() : engineeringModel.genericNote),
        "iid": this.getToJsonObjectConverter("iid")(engineeringModel.iid),
        "iteration": this.getToJsonObjectConverter("iteration")((typeof(engineeringModel.iteration) != "undefined" && engineeringModel.iteration != null) ? Object.assign([], engineeringModel.iteration).sort() : engineeringModel.iteration),
        "lastModifiedOn": this.getToJsonObjectConverter("lastModifiedOn")(engineeringModel.lastModifiedOn),
        "logEntry": this.getToJsonObjectConverter("logEntry")((typeof(engineeringModel.logEntry) != "undefined" && engineeringModel.logEntry != null) ? Object.assign([], engineeringModel.logEntry).sort() : engineeringModel.logEntry),
        "modellingAnnotation": this.getToJsonObjectConverter("modellingAnnotation")((typeof(engineeringModel.modellingAnnotation) != "undefined" && engineeringModel.modellingAnnotation != null) ? Object.assign([], engineeringModel.modellingAnnotation).sort() : engineeringModel.modellingAnnotation),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModel.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModel.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EngineeringModel
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts EngineeringModelDataDiscussionItem to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let engineeringModelDataDiscussionItem = <Dto.EngineeringModelDataDiscussionItem>thing;
      if (typeof(engineeringModelDataDiscussionItem) == "undefined" || engineeringModelDataDiscussionItem == null) {
        throw new Error("The object is not EngineeringModelDataDiscussionItem");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(engineeringModelDataDiscussionItem.author),
        "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelDataDiscussionItem.classKind),
        "content": this.getToJsonObjectConverter("content")(engineeringModelDataDiscussionItem.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(engineeringModelDataDiscussionItem.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(engineeringModelDataDiscussionItem.excludedDomain) != "undefined" && engineeringModelDataDiscussionItem.excludedDomain != null) ? Object.assign([], engineeringModelDataDiscussionItem.excludedDomain).sort() : engineeringModelDataDiscussionItem.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(engineeringModelDataDiscussionItem.excludedPerson) != "undefined" && engineeringModelDataDiscussionItem.excludedPerson != null) ? Object.assign([], engineeringModelDataDiscussionItem.excludedPerson).sort() : engineeringModelDataDiscussionItem.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(engineeringModelDataDiscussionItem.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(engineeringModelDataDiscussionItem.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelDataDiscussionItem.modifiedOn),
        "replyTo": this.getToJsonObjectConverter("replyTo")(engineeringModelDataDiscussionItem.replyTo),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelDataDiscussionItem.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EngineeringModelDataDiscussionItem
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts EngineeringModelDataNote to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let engineeringModelDataNote = <Dto.EngineeringModelDataNote>thing;
      if (typeof(engineeringModelDataNote) == "undefined" || engineeringModelDataNote == null) {
        throw new Error("The object is not EngineeringModelDataNote");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(engineeringModelDataNote.author),
        "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelDataNote.classKind),
        "content": this.getToJsonObjectConverter("content")(engineeringModelDataNote.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(engineeringModelDataNote.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(engineeringModelDataNote.discussion) != "undefined" && engineeringModelDataNote.discussion != null) ? Object.assign([], engineeringModelDataNote.discussion).sort() : engineeringModelDataNote.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(engineeringModelDataNote.excludedDomain) != "undefined" && engineeringModelDataNote.excludedDomain != null) ? Object.assign([], engineeringModelDataNote.excludedDomain).sort() : engineeringModelDataNote.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(engineeringModelDataNote.excludedPerson) != "undefined" && engineeringModelDataNote.excludedPerson != null) ? Object.assign([], engineeringModelDataNote.excludedPerson).sort() : engineeringModelDataNote.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(engineeringModelDataNote.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(engineeringModelDataNote.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelDataNote.modifiedOn),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(engineeringModelDataNote.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(engineeringModelDataNote.relatedThing) != "undefined" && engineeringModelDataNote.relatedThing != null) ? Object.assign([], engineeringModelDataNote.relatedThing).sort() : engineeringModelDataNote.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelDataNote.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EngineeringModelDataNote
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
        "studyPhase": (value: any) => { return Dto.StudyPhaseKind[value]; },
      };
    }

    /**
     * Converts EngineeringModelSetup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let engineeringModelSetup = <Dto.EngineeringModelSetup>thing;
      if (typeof(engineeringModelSetup) == "undefined" || engineeringModelSetup == null) {
        throw new Error("The object is not EngineeringModelSetup");
      }

      let jsonObject = {
        "activeDomain": this.getToJsonObjectConverter("activeDomain")((typeof(engineeringModelSetup.activeDomain) != "undefined" && engineeringModelSetup.activeDomain != null) ? Object.assign([], engineeringModelSetup.activeDomain).sort() : engineeringModelSetup.activeDomain),
        "alias": this.getToJsonObjectConverter("alias")((typeof(engineeringModelSetup.alias) != "undefined" && engineeringModelSetup.alias != null) ? Object.assign([], engineeringModelSetup.alias).sort() : engineeringModelSetup.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(engineeringModelSetup.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(engineeringModelSetup.definition) != "undefined" && engineeringModelSetup.definition != null) ? Object.assign([], engineeringModelSetup.definition).sort() : engineeringModelSetup.definition),
        "engineeringModelIid": this.getToJsonObjectConverter("engineeringModelIid")(engineeringModelSetup.engineeringModelIid),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(engineeringModelSetup.excludedDomain) != "undefined" && engineeringModelSetup.excludedDomain != null) ? Object.assign([], engineeringModelSetup.excludedDomain).sort() : engineeringModelSetup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(engineeringModelSetup.excludedPerson) != "undefined" && engineeringModelSetup.excludedPerson != null) ? Object.assign([], engineeringModelSetup.excludedPerson).sort() : engineeringModelSetup.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(engineeringModelSetup.hyperLink) != "undefined" && engineeringModelSetup.hyperLink != null) ? Object.assign([], engineeringModelSetup.hyperLink).sort() : engineeringModelSetup.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(engineeringModelSetup.iid),
        "iterationSetup": this.getToJsonObjectConverter("iterationSetup")((typeof(engineeringModelSetup.iterationSetup) != "undefined" && engineeringModelSetup.iterationSetup != null) ? Object.assign([], engineeringModelSetup.iterationSetup).sort() : engineeringModelSetup.iterationSetup),
        "kind": this.getToJsonObjectConverter("kind")(engineeringModelSetup.kind),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(engineeringModelSetup.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(engineeringModelSetup.name),
        "participant": this.getToJsonObjectConverter("participant")((typeof(engineeringModelSetup.participant) != "undefined" && engineeringModelSetup.participant != null) ? Object.assign([], engineeringModelSetup.participant).sort() : engineeringModelSetup.participant),
        "requiredRdl": this.getToJsonObjectConverter("requiredRdl")((typeof(engineeringModelSetup.requiredRdl) != "undefined" && engineeringModelSetup.requiredRdl != null) ? Object.assign([], engineeringModelSetup.requiredRdl).sort() : engineeringModelSetup.requiredRdl),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(engineeringModelSetup.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(engineeringModelSetup.shortName),
        "sourceEngineeringModelSetupIid": this.getToJsonObjectConverter("sourceEngineeringModelSetupIid")(engineeringModelSetup.sourceEngineeringModelSetupIid),
        "studyPhase": this.getToJsonObjectConverter("studyPhase")(engineeringModelSetup.studyPhase),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EngineeringModelSetup
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
        "valueDefinition": (value: any) => { return toJsonOrderedItem(<Cdp4Type.OrderedItem[]>value); },
      };
    }

    /**
     * Converts EnumerationParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let enumerationParameterType = <Dto.EnumerationParameterType>thing;
      if (typeof(enumerationParameterType) == "undefined" || enumerationParameterType == null) {
        throw new Error("The object is not EnumerationParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(enumerationParameterType.alias) != "undefined" && enumerationParameterType.alias != null) ? Object.assign([], enumerationParameterType.alias).sort() : enumerationParameterType.alias),
        "allowMultiSelect": this.getToJsonObjectConverter("allowMultiSelect")(enumerationParameterType.allowMultiSelect),
        "category": this.getToJsonObjectConverter("category")((typeof(enumerationParameterType.category) != "undefined" && enumerationParameterType.category != null) ? Object.assign([], enumerationParameterType.category).sort() : enumerationParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(enumerationParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(enumerationParameterType.definition) != "undefined" && enumerationParameterType.definition != null) ? Object.assign([], enumerationParameterType.definition).sort() : enumerationParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(enumerationParameterType.excludedDomain) != "undefined" && enumerationParameterType.excludedDomain != null) ? Object.assign([], enumerationParameterType.excludedDomain).sort() : enumerationParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(enumerationParameterType.excludedPerson) != "undefined" && enumerationParameterType.excludedPerson != null) ? Object.assign([], enumerationParameterType.excludedPerson).sort() : enumerationParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(enumerationParameterType.hyperLink) != "undefined" && enumerationParameterType.hyperLink != null) ? Object.assign([], enumerationParameterType.hyperLink).sort() : enumerationParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(enumerationParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(enumerationParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(enumerationParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(enumerationParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(enumerationParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(enumerationParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(enumerationParameterType.symbol),
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")(enumerationParameterType.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EnumerationParameterType
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts EnumerationValueDefinition to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let enumerationValueDefinition = <Dto.EnumerationValueDefinition>thing;
      if (typeof(enumerationValueDefinition) == "undefined" || enumerationValueDefinition == null) {
        throw new Error("The object is not EnumerationValueDefinition");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(enumerationValueDefinition.alias) != "undefined" && enumerationValueDefinition.alias != null) ? Object.assign([], enumerationValueDefinition.alias).sort() : enumerationValueDefinition.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(enumerationValueDefinition.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(enumerationValueDefinition.definition) != "undefined" && enumerationValueDefinition.definition != null) ? Object.assign([], enumerationValueDefinition.definition).sort() : enumerationValueDefinition.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(enumerationValueDefinition.excludedDomain) != "undefined" && enumerationValueDefinition.excludedDomain != null) ? Object.assign([], enumerationValueDefinition.excludedDomain).sort() : enumerationValueDefinition.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(enumerationValueDefinition.excludedPerson) != "undefined" && enumerationValueDefinition.excludedPerson != null) ? Object.assign([], enumerationValueDefinition.excludedPerson).sort() : enumerationValueDefinition.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(enumerationValueDefinition.hyperLink) != "undefined" && enumerationValueDefinition.hyperLink != null) ? Object.assign([], enumerationValueDefinition.hyperLink).sort() : enumerationValueDefinition.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(enumerationValueDefinition.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(enumerationValueDefinition.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(enumerationValueDefinition.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(enumerationValueDefinition.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(enumerationValueDefinition.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to EnumerationValueDefinition
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
        "term": (value: any) => { return value; },
      };
    }

    /**
     * Converts ExclusiveOrExpression to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let exclusiveOrExpression = <Dto.ExclusiveOrExpression>thing;
      if (typeof(exclusiveOrExpression) == "undefined" || exclusiveOrExpression == null) {
        throw new Error("The object is not ExclusiveOrExpression");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(exclusiveOrExpression.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(exclusiveOrExpression.excludedDomain) != "undefined" && exclusiveOrExpression.excludedDomain != null) ? Object.assign([], exclusiveOrExpression.excludedDomain).sort() : exclusiveOrExpression.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(exclusiveOrExpression.excludedPerson) != "undefined" && exclusiveOrExpression.excludedPerson != null) ? Object.assign([], exclusiveOrExpression.excludedPerson).sort() : exclusiveOrExpression.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(exclusiveOrExpression.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(exclusiveOrExpression.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(exclusiveOrExpression.revisionNumber),
        "term": this.getToJsonObjectConverter("term")((typeof(exclusiveOrExpression.term) != "undefined" && exclusiveOrExpression.term != null) ? Object.assign([], exclusiveOrExpression.term).sort() : exclusiveOrExpression.term),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ExclusiveOrExpression
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ExternalIdentifierMap to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let externalIdentifierMap = <Dto.ExternalIdentifierMap>thing;
      if (typeof(externalIdentifierMap) == "undefined" || externalIdentifierMap == null) {
        throw new Error("The object is not ExternalIdentifierMap");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(externalIdentifierMap.classKind),
        "correspondence": this.getToJsonObjectConverter("correspondence")((typeof(externalIdentifierMap.correspondence) != "undefined" && externalIdentifierMap.correspondence != null) ? Object.assign([], externalIdentifierMap.correspondence).sort() : externalIdentifierMap.correspondence),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(externalIdentifierMap.excludedDomain) != "undefined" && externalIdentifierMap.excludedDomain != null) ? Object.assign([], externalIdentifierMap.excludedDomain).sort() : externalIdentifierMap.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(externalIdentifierMap.excludedPerson) != "undefined" && externalIdentifierMap.excludedPerson != null) ? Object.assign([], externalIdentifierMap.excludedPerson).sort() : externalIdentifierMap.excludedPerson),
        "externalFormat": this.getToJsonObjectConverter("externalFormat")(externalIdentifierMap.externalFormat),
        "externalModelName": this.getToJsonObjectConverter("externalModelName")(externalIdentifierMap.externalModelName),
        "externalToolName": this.getToJsonObjectConverter("externalToolName")(externalIdentifierMap.externalToolName),
        "externalToolVersion": this.getToJsonObjectConverter("externalToolVersion")(externalIdentifierMap.externalToolVersion),
        "iid": this.getToJsonObjectConverter("iid")(externalIdentifierMap.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(externalIdentifierMap.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(externalIdentifierMap.name),
        "owner": this.getToJsonObjectConverter("owner")(externalIdentifierMap.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(externalIdentifierMap.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ExternalIdentifierMap
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts File to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let file = <Dto.File>thing;
      if (typeof(file) == "undefined" || file == null) {
        throw new Error("The object is not File");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(file.category) != "undefined" && file.category != null) ? Object.assign([], file.category).sort() : file.category),
        "classKind": this.getToJsonObjectConverter("classKind")(file.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(file.excludedDomain) != "undefined" && file.excludedDomain != null) ? Object.assign([], file.excludedDomain).sort() : file.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(file.excludedPerson) != "undefined" && file.excludedPerson != null) ? Object.assign([], file.excludedPerson).sort() : file.excludedPerson),
        "fileRevision": this.getToJsonObjectConverter("fileRevision")((typeof(file.fileRevision) != "undefined" && file.fileRevision != null) ? Object.assign([], file.fileRevision).sort() : file.fileRevision),
        "iid": this.getToJsonObjectConverter("iid")(file.iid),
        "lockedBy": this.getToJsonObjectConverter("lockedBy")(file.lockedBy),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(file.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(file.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(file.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to File
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts FileRevision to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let fileRevision = <Dto.FileRevision>thing;
      if (typeof(fileRevision) == "undefined" || fileRevision == null) {
        throw new Error("The object is not FileRevision");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(fileRevision.classKind),
        "containingFolder": this.getToJsonObjectConverter("containingFolder")(fileRevision.containingFolder),
        "contentHash": this.getToJsonObjectConverter("contentHash")(fileRevision.contentHash),
        "createdOn": this.getToJsonObjectConverter("createdOn")(fileRevision.createdOn),
        "creator": this.getToJsonObjectConverter("creator")(fileRevision.creator),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(fileRevision.excludedDomain) != "undefined" && fileRevision.excludedDomain != null) ? Object.assign([], fileRevision.excludedDomain).sort() : fileRevision.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(fileRevision.excludedPerson) != "undefined" && fileRevision.excludedPerson != null) ? Object.assign([], fileRevision.excludedPerson).sort() : fileRevision.excludedPerson),
        "fileType": this.getToJsonObjectConverter("fileType")(fileRevision.fileType),
        "iid": this.getToJsonObjectConverter("iid")(fileRevision.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(fileRevision.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(fileRevision.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(fileRevision.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to FileRevision
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts FileType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let fileType = <Dto.FileType>thing;
      if (typeof(fileType) == "undefined" || fileType == null) {
        throw new Error("The object is not FileType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(fileType.alias) != "undefined" && fileType.alias != null) ? Object.assign([], fileType.alias).sort() : fileType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(fileType.category) != "undefined" && fileType.category != null) ? Object.assign([], fileType.category).sort() : fileType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(fileType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(fileType.definition) != "undefined" && fileType.definition != null) ? Object.assign([], fileType.definition).sort() : fileType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(fileType.excludedDomain) != "undefined" && fileType.excludedDomain != null) ? Object.assign([], fileType.excludedDomain).sort() : fileType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(fileType.excludedPerson) != "undefined" && fileType.excludedPerson != null) ? Object.assign([], fileType.excludedPerson).sort() : fileType.excludedPerson),
        "extension": this.getToJsonObjectConverter("extension")(fileType.extension),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(fileType.hyperLink) != "undefined" && fileType.hyperLink != null) ? Object.assign([], fileType.hyperLink).sort() : fileType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(fileType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(fileType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(fileType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(fileType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(fileType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(fileType.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to FileType
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Folder to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let folder = <Dto.Folder>thing;
      if (typeof(folder) == "undefined" || folder == null) {
        throw new Error("The object is not Folder");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(folder.classKind),
        "containingFolder": this.getToJsonObjectConverter("containingFolder")(folder.containingFolder),
        "createdOn": this.getToJsonObjectConverter("createdOn")(folder.createdOn),
        "creator": this.getToJsonObjectConverter("creator")(folder.creator),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(folder.excludedDomain) != "undefined" && folder.excludedDomain != null) ? Object.assign([], folder.excludedDomain).sort() : folder.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(folder.excludedPerson) != "undefined" && folder.excludedPerson != null) ? Object.assign([], folder.excludedPerson).sort() : folder.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(folder.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(folder.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(folder.name),
        "owner": this.getToJsonObjectConverter("owner")(folder.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(folder.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Folder
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
        "term": (value: any) => { return value; },
      };
    }

    /**
     * Converts Glossary to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let glossary = <Dto.Glossary>thing;
      if (typeof(glossary) == "undefined" || glossary == null) {
        throw new Error("The object is not Glossary");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(glossary.alias) != "undefined" && glossary.alias != null) ? Object.assign([], glossary.alias).sort() : glossary.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(glossary.category) != "undefined" && glossary.category != null) ? Object.assign([], glossary.category).sort() : glossary.category),
        "classKind": this.getToJsonObjectConverter("classKind")(glossary.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(glossary.definition) != "undefined" && glossary.definition != null) ? Object.assign([], glossary.definition).sort() : glossary.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(glossary.excludedDomain) != "undefined" && glossary.excludedDomain != null) ? Object.assign([], glossary.excludedDomain).sort() : glossary.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(glossary.excludedPerson) != "undefined" && glossary.excludedPerson != null) ? Object.assign([], glossary.excludedPerson).sort() : glossary.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(glossary.hyperLink) != "undefined" && glossary.hyperLink != null) ? Object.assign([], glossary.hyperLink).sort() : glossary.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(glossary.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(glossary.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(glossary.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(glossary.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(glossary.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(glossary.shortName),
        "term": this.getToJsonObjectConverter("term")((typeof(glossary.term) != "undefined" && glossary.term != null) ? Object.assign([], glossary.term).sort() : glossary.term),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Glossary
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Goal to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let goal = <Dto.Goal>thing;
      if (typeof(goal) == "undefined" || goal == null) {
        throw new Error("The object is not Goal");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(goal.alias) != "undefined" && goal.alias != null) ? Object.assign([], goal.alias).sort() : goal.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(goal.category) != "undefined" && goal.category != null) ? Object.assign([], goal.category).sort() : goal.category),
        "classKind": this.getToJsonObjectConverter("classKind")(goal.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(goal.definition) != "undefined" && goal.definition != null) ? Object.assign([], goal.definition).sort() : goal.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(goal.excludedDomain) != "undefined" && goal.excludedDomain != null) ? Object.assign([], goal.excludedDomain).sort() : goal.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(goal.excludedPerson) != "undefined" && goal.excludedPerson != null) ? Object.assign([], goal.excludedPerson).sort() : goal.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(goal.hyperLink) != "undefined" && goal.hyperLink != null) ? Object.assign([], goal.hyperLink).sort() : goal.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(goal.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(goal.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(goal.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(goal.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(goal.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Goal
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
        "uri": (value: any) => { return value; },
      };
    }

    /**
     * Converts HyperLink to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let hyperLink = <Dto.HyperLink>thing;
      if (typeof(hyperLink) == "undefined" || hyperLink == null) {
        throw new Error("The object is not HyperLink");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(hyperLink.classKind),
        "content": this.getToJsonObjectConverter("content")(hyperLink.content),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(hyperLink.excludedDomain) != "undefined" && hyperLink.excludedDomain != null) ? Object.assign([], hyperLink.excludedDomain).sort() : hyperLink.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(hyperLink.excludedPerson) != "undefined" && hyperLink.excludedPerson != null) ? Object.assign([], hyperLink.excludedPerson).sort() : hyperLink.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(hyperLink.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(hyperLink.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(hyperLink.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(hyperLink.revisionNumber),
        "uri": this.getToJsonObjectConverter("uri")(hyperLink.uri),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to HyperLink
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts IdCorrespondence to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let idCorrespondence = <Dto.IdCorrespondence>thing;
      if (typeof(idCorrespondence) == "undefined" || idCorrespondence == null) {
        throw new Error("The object is not IdCorrespondence");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(idCorrespondence.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(idCorrespondence.excludedDomain) != "undefined" && idCorrespondence.excludedDomain != null) ? Object.assign([], idCorrespondence.excludedDomain).sort() : idCorrespondence.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(idCorrespondence.excludedPerson) != "undefined" && idCorrespondence.excludedPerson != null) ? Object.assign([], idCorrespondence.excludedPerson).sort() : idCorrespondence.excludedPerson),
        "externalId": this.getToJsonObjectConverter("externalId")(idCorrespondence.externalId),
        "iid": this.getToJsonObjectConverter("iid")(idCorrespondence.iid),
        "internalThing": this.getToJsonObjectConverter("internalThing")(idCorrespondence.internalThing),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(idCorrespondence.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(idCorrespondence.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to IdCorrespondence
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
        "valueDefinition": (value: any) => { return value; },
      };
    }

    /**
     * Converts IntervalScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let intervalScale = <Dto.IntervalScale>thing;
      if (typeof(intervalScale) == "undefined" || intervalScale == null) {
        throw new Error("The object is not IntervalScale");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(intervalScale.alias) != "undefined" && intervalScale.alias != null) ? Object.assign([], intervalScale.alias).sort() : intervalScale.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(intervalScale.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(intervalScale.definition) != "undefined" && intervalScale.definition != null) ? Object.assign([], intervalScale.definition).sort() : intervalScale.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(intervalScale.excludedDomain) != "undefined" && intervalScale.excludedDomain != null) ? Object.assign([], intervalScale.excludedDomain).sort() : intervalScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(intervalScale.excludedPerson) != "undefined" && intervalScale.excludedPerson != null) ? Object.assign([], intervalScale.excludedPerson).sort() : intervalScale.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(intervalScale.hyperLink) != "undefined" && intervalScale.hyperLink != null) ? Object.assign([], intervalScale.hyperLink).sort() : intervalScale.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(intervalScale.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(intervalScale.isDeprecated),
        "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(intervalScale.isMaximumInclusive),
        "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(intervalScale.isMinimumInclusive),
        "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")((typeof(intervalScale.mappingToReferenceScale) != "undefined" && intervalScale.mappingToReferenceScale != null) ? Object.assign([], intervalScale.mappingToReferenceScale).sort() : intervalScale.mappingToReferenceScale),
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
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")((typeof(intervalScale.valueDefinition) != "undefined" && intervalScale.valueDefinition != null) ? Object.assign([], intervalScale.valueDefinition).sort() : intervalScale.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to IntervalScale
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
        "valueGroup": (value: any) => { return value; },
      };
    }

    /**
     * Converts Iteration to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let iteration = <Dto.Iteration>thing;
      if (typeof(iteration) == "undefined" || iteration == null) {
        throw new Error("The object is not Iteration");
      }

      let jsonObject = {
        "actualFiniteStateList": this.getToJsonObjectConverter("actualFiniteStateList")((typeof(iteration.actualFiniteStateList) != "undefined" && iteration.actualFiniteStateList != null) ? Object.assign([], iteration.actualFiniteStateList).sort() : iteration.actualFiniteStateList),
        "classKind": this.getToJsonObjectConverter("classKind")(iteration.classKind),
        "defaultOption": this.getToJsonObjectConverter("defaultOption")(iteration.defaultOption),
        "diagramCanvas": this.getToJsonObjectConverter("diagramCanvas")((typeof(iteration.diagramCanvas) != "undefined" && iteration.diagramCanvas != null) ? Object.assign([], iteration.diagramCanvas).sort() : iteration.diagramCanvas),
        "domainFileStore": this.getToJsonObjectConverter("domainFileStore")((typeof(iteration.domainFileStore) != "undefined" && iteration.domainFileStore != null) ? Object.assign([], iteration.domainFileStore).sort() : iteration.domainFileStore),
        "element": this.getToJsonObjectConverter("element")((typeof(iteration.element) != "undefined" && iteration.element != null) ? Object.assign([], iteration.element).sort() : iteration.element),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(iteration.excludedDomain) != "undefined" && iteration.excludedDomain != null) ? Object.assign([], iteration.excludedDomain).sort() : iteration.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(iteration.excludedPerson) != "undefined" && iteration.excludedPerson != null) ? Object.assign([], iteration.excludedPerson).sort() : iteration.excludedPerson),
        "externalIdentifierMap": this.getToJsonObjectConverter("externalIdentifierMap")((typeof(iteration.externalIdentifierMap) != "undefined" && iteration.externalIdentifierMap != null) ? Object.assign([], iteration.externalIdentifierMap).sort() : iteration.externalIdentifierMap),
        "goal": this.getToJsonObjectConverter("goal")((typeof(iteration.goal) != "undefined" && iteration.goal != null) ? Object.assign([], iteration.goal).sort() : iteration.goal),
        "iid": this.getToJsonObjectConverter("iid")(iteration.iid),
        "iterationSetup": this.getToJsonObjectConverter("iterationSetup")(iteration.iterationSetup),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(iteration.modifiedOn),
        "option": this.getToJsonObjectConverter("option")(iteration.option),
        "possibleFiniteStateList": this.getToJsonObjectConverter("possibleFiniteStateList")((typeof(iteration.possibleFiniteStateList) != "undefined" && iteration.possibleFiniteStateList != null) ? Object.assign([], iteration.possibleFiniteStateList).sort() : iteration.possibleFiniteStateList),
        "publication": this.getToJsonObjectConverter("publication")((typeof(iteration.publication) != "undefined" && iteration.publication != null) ? Object.assign([], iteration.publication).sort() : iteration.publication),
        "relationship": this.getToJsonObjectConverter("relationship")((typeof(iteration.relationship) != "undefined" && iteration.relationship != null) ? Object.assign([], iteration.relationship).sort() : iteration.relationship),
        "requirementsSpecification": this.getToJsonObjectConverter("requirementsSpecification")((typeof(iteration.requirementsSpecification) != "undefined" && iteration.requirementsSpecification != null) ? Object.assign([], iteration.requirementsSpecification).sort() : iteration.requirementsSpecification),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(iteration.revisionNumber),
        "ruleVerificationList": this.getToJsonObjectConverter("ruleVerificationList")((typeof(iteration.ruleVerificationList) != "undefined" && iteration.ruleVerificationList != null) ? Object.assign([], iteration.ruleVerificationList).sort() : iteration.ruleVerificationList),
        "sharedDiagramStyle": this.getToJsonObjectConverter("sharedDiagramStyle")((typeof(iteration.sharedDiagramStyle) != "undefined" && iteration.sharedDiagramStyle != null) ? Object.assign([], iteration.sharedDiagramStyle).sort() : iteration.sharedDiagramStyle),
        "sourceIterationIid": this.getToJsonObjectConverter("sourceIterationIid")(iteration.sourceIterationIid),
        "stakeholder": this.getToJsonObjectConverter("stakeholder")((typeof(iteration.stakeholder) != "undefined" && iteration.stakeholder != null) ? Object.assign([], iteration.stakeholder).sort() : iteration.stakeholder),
        "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")((typeof(iteration.stakeholderValue) != "undefined" && iteration.stakeholderValue != null) ? Object.assign([], iteration.stakeholderValue).sort() : iteration.stakeholderValue),
        "stakeholderValueMap": this.getToJsonObjectConverter("stakeholderValueMap")((typeof(iteration.stakeholderValueMap) != "undefined" && iteration.stakeholderValueMap != null) ? Object.assign([], iteration.stakeholderValueMap).sort() : iteration.stakeholderValueMap),
        "topElement": this.getToJsonObjectConverter("topElement")(iteration.topElement),
        "valueGroup": this.getToJsonObjectConverter("valueGroup")((typeof(iteration.valueGroup) != "undefined" && iteration.valueGroup != null) ? Object.assign([], iteration.valueGroup).sort() : iteration.valueGroup),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Iteration
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
        "sourceIterationSetup": (value: any) => { return value; },
      };
    }

    /**
     * Converts IterationSetup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let iterationSetup = <Dto.IterationSetup>thing;
      if (typeof(iterationSetup) == "undefined" || iterationSetup == null) {
        throw new Error("The object is not IterationSetup");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(iterationSetup.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(iterationSetup.createdOn),
        "description": this.getToJsonObjectConverter("description")(iterationSetup.description),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(iterationSetup.excludedDomain) != "undefined" && iterationSetup.excludedDomain != null) ? Object.assign([], iterationSetup.excludedDomain).sort() : iterationSetup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(iterationSetup.excludedPerson) != "undefined" && iterationSetup.excludedPerson != null) ? Object.assign([], iterationSetup.excludedPerson).sort() : iterationSetup.excludedPerson),
        "frozenOn": this.getToJsonObjectConverter("frozenOn")(iterationSetup.frozenOn),
        "iid": this.getToJsonObjectConverter("iid")(iterationSetup.iid),
        "isDeleted": this.getToJsonObjectConverter("isDeleted")(iterationSetup.isDeleted),
        "iterationIid": this.getToJsonObjectConverter("iterationIid")(iterationSetup.iterationIid),
        "iterationNumber": this.getToJsonObjectConverter("iterationNumber")(iterationSetup.iterationNumber),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(iterationSetup.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(iterationSetup.revisionNumber),
        "sourceIterationSetup": this.getToJsonObjectConverter("sourceIterationSetup")(iterationSetup.sourceIterationSetup),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to IterationSetup
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts LinearConversionUnit to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let linearConversionUnit = <Dto.LinearConversionUnit>thing;
      if (typeof(linearConversionUnit) == "undefined" || linearConversionUnit == null) {
        throw new Error("The object is not LinearConversionUnit");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(linearConversionUnit.alias) != "undefined" && linearConversionUnit.alias != null) ? Object.assign([], linearConversionUnit.alias).sort() : linearConversionUnit.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(linearConversionUnit.classKind),
        "conversionFactor": this.getToJsonObjectConverter("conversionFactor")(linearConversionUnit.conversionFactor),
        "definition": this.getToJsonObjectConverter("definition")((typeof(linearConversionUnit.definition) != "undefined" && linearConversionUnit.definition != null) ? Object.assign([], linearConversionUnit.definition).sort() : linearConversionUnit.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(linearConversionUnit.excludedDomain) != "undefined" && linearConversionUnit.excludedDomain != null) ? Object.assign([], linearConversionUnit.excludedDomain).sort() : linearConversionUnit.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(linearConversionUnit.excludedPerson) != "undefined" && linearConversionUnit.excludedPerson != null) ? Object.assign([], linearConversionUnit.excludedPerson).sort() : linearConversionUnit.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(linearConversionUnit.hyperLink) != "undefined" && linearConversionUnit.hyperLink != null) ? Object.assign([], linearConversionUnit.hyperLink).sort() : linearConversionUnit.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(linearConversionUnit.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(linearConversionUnit.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(linearConversionUnit.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(linearConversionUnit.name),
        "referenceUnit": this.getToJsonObjectConverter("referenceUnit")(linearConversionUnit.referenceUnit),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(linearConversionUnit.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(linearConversionUnit.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to LinearConversionUnit
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
        "valueDefinition": (value: any) => { return value; },
      };
    }

    /**
     * Converts LogarithmicScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let logarithmicScale = <Dto.LogarithmicScale>thing;
      if (typeof(logarithmicScale) == "undefined" || logarithmicScale == null) {
        throw new Error("The object is not LogarithmicScale");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(logarithmicScale.alias) != "undefined" && logarithmicScale.alias != null) ? Object.assign([], logarithmicScale.alias).sort() : logarithmicScale.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(logarithmicScale.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(logarithmicScale.definition) != "undefined" && logarithmicScale.definition != null) ? Object.assign([], logarithmicScale.definition).sort() : logarithmicScale.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(logarithmicScale.excludedDomain) != "undefined" && logarithmicScale.excludedDomain != null) ? Object.assign([], logarithmicScale.excludedDomain).sort() : logarithmicScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(logarithmicScale.excludedPerson) != "undefined" && logarithmicScale.excludedPerson != null) ? Object.assign([], logarithmicScale.excludedPerson).sort() : logarithmicScale.excludedPerson),
        "exponent": this.getToJsonObjectConverter("exponent")(logarithmicScale.exponent),
        "factor": this.getToJsonObjectConverter("factor")(logarithmicScale.factor),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(logarithmicScale.hyperLink) != "undefined" && logarithmicScale.hyperLink != null) ? Object.assign([], logarithmicScale.hyperLink).sort() : logarithmicScale.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(logarithmicScale.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(logarithmicScale.isDeprecated),
        "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(logarithmicScale.isMaximumInclusive),
        "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(logarithmicScale.isMinimumInclusive),
        "logarithmBase": this.getToJsonObjectConverter("logarithmBase")(logarithmicScale.logarithmBase),
        "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")((typeof(logarithmicScale.mappingToReferenceScale) != "undefined" && logarithmicScale.mappingToReferenceScale != null) ? Object.assign([], logarithmicScale.mappingToReferenceScale).sort() : logarithmicScale.mappingToReferenceScale),
        "maximumPermissibleValue": this.getToJsonObjectConverter("maximumPermissibleValue")(logarithmicScale.maximumPermissibleValue),
        "minimumPermissibleValue": this.getToJsonObjectConverter("minimumPermissibleValue")(logarithmicScale.minimumPermissibleValue),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(logarithmicScale.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(logarithmicScale.name),
        "negativeValueConnotation": this.getToJsonObjectConverter("negativeValueConnotation")(logarithmicScale.negativeValueConnotation),
        "numberSet": this.getToJsonObjectConverter("numberSet")(logarithmicScale.numberSet),
        "positiveValueConnotation": this.getToJsonObjectConverter("positiveValueConnotation")(logarithmicScale.positiveValueConnotation),
        "referenceQuantityKind": this.getToJsonObjectConverter("referenceQuantityKind")(logarithmicScale.referenceQuantityKind),
        "referenceQuantityValue": this.getToJsonObjectConverter("referenceQuantityValue")((typeof(logarithmicScale.referenceQuantityValue) != "undefined" && logarithmicScale.referenceQuantityValue != null) ? Object.assign([], logarithmicScale.referenceQuantityValue).sort() : logarithmicScale.referenceQuantityValue),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(logarithmicScale.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(logarithmicScale.shortName),
        "unit": this.getToJsonObjectConverter("unit")(logarithmicScale.unit),
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")((typeof(logarithmicScale.valueDefinition) != "undefined" && logarithmicScale.valueDefinition != null) ? Object.assign([], logarithmicScale.valueDefinition).sort() : logarithmicScale.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to LogarithmicScale
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts MappingToReferenceScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let mappingToReferenceScale = <Dto.MappingToReferenceScale>thing;
      if (typeof(mappingToReferenceScale) == "undefined" || mappingToReferenceScale == null) {
        throw new Error("The object is not MappingToReferenceScale");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(mappingToReferenceScale.classKind),
        "dependentScaleValue": this.getToJsonObjectConverter("dependentScaleValue")(mappingToReferenceScale.dependentScaleValue),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(mappingToReferenceScale.excludedDomain) != "undefined" && mappingToReferenceScale.excludedDomain != null) ? Object.assign([], mappingToReferenceScale.excludedDomain).sort() : mappingToReferenceScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(mappingToReferenceScale.excludedPerson) != "undefined" && mappingToReferenceScale.excludedPerson != null) ? Object.assign([], mappingToReferenceScale.excludedPerson).sort() : mappingToReferenceScale.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(mappingToReferenceScale.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(mappingToReferenceScale.modifiedOn),
        "referenceScaleValue": this.getToJsonObjectConverter("referenceScaleValue")(mappingToReferenceScale.referenceScaleValue),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(mappingToReferenceScale.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to MappingToReferenceScale
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ModellingThingReference to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let modellingThingReference = <Dto.ModellingThingReference>thing;
      if (typeof(modellingThingReference) == "undefined" || modellingThingReference == null) {
        throw new Error("The object is not ModellingThingReference");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(modellingThingReference.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(modellingThingReference.excludedDomain) != "undefined" && modellingThingReference.excludedDomain != null) ? Object.assign([], modellingThingReference.excludedDomain).sort() : modellingThingReference.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(modellingThingReference.excludedPerson) != "undefined" && modellingThingReference.excludedPerson != null) ? Object.assign([], modellingThingReference.excludedPerson).sort() : modellingThingReference.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(modellingThingReference.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modellingThingReference.modifiedOn),
        "referencedRevisionNumber": this.getToJsonObjectConverter("referencedRevisionNumber")(modellingThingReference.referencedRevisionNumber),
        "referencedThing": this.getToJsonObjectConverter("referencedThing")(modellingThingReference.referencedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modellingThingReference.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ModellingThingReference
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ModelLogEntry to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let modelLogEntry = <Dto.ModelLogEntry>thing;
      if (typeof(modelLogEntry) == "undefined" || modelLogEntry == null) {
        throw new Error("The object is not ModelLogEntry");
      }

      let jsonObject = {
        "affectedItemIid": this.getToJsonObjectConverter("affectedItemIid")((typeof(modelLogEntry.affectedItemIid) != "undefined" && modelLogEntry.affectedItemIid != null) ? Object.assign([], modelLogEntry.affectedItemIid).sort() : modelLogEntry.affectedItemIid),
        "author": this.getToJsonObjectConverter("author")(modelLogEntry.author),
        "category": this.getToJsonObjectConverter("category")((typeof(modelLogEntry.category) != "undefined" && modelLogEntry.category != null) ? Object.assign([], modelLogEntry.category).sort() : modelLogEntry.category),
        "classKind": this.getToJsonObjectConverter("classKind")(modelLogEntry.classKind),
        "content": this.getToJsonObjectConverter("content")(modelLogEntry.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(modelLogEntry.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(modelLogEntry.excludedDomain) != "undefined" && modelLogEntry.excludedDomain != null) ? Object.assign([], modelLogEntry.excludedDomain).sort() : modelLogEntry.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(modelLogEntry.excludedPerson) != "undefined" && modelLogEntry.excludedPerson != null) ? Object.assign([], modelLogEntry.excludedPerson).sort() : modelLogEntry.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(modelLogEntry.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(modelLogEntry.languageCode),
        "level": this.getToJsonObjectConverter("level")(modelLogEntry.level),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modelLogEntry.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modelLogEntry.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ModelLogEntry
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
        "unitPrefix": (value: any) => { return value; },
      };
    }

    /**
     * Converts ModelReferenceDataLibrary to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let modelReferenceDataLibrary = <Dto.ModelReferenceDataLibrary>thing;
      if (typeof(modelReferenceDataLibrary) == "undefined" || modelReferenceDataLibrary == null) {
        throw new Error("The object is not ModelReferenceDataLibrary");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(modelReferenceDataLibrary.alias) != "undefined" && modelReferenceDataLibrary.alias != null) ? Object.assign([], modelReferenceDataLibrary.alias).sort() : modelReferenceDataLibrary.alias),
        "baseQuantityKind": this.getToJsonObjectConverter("baseQuantityKind")(modelReferenceDataLibrary.baseQuantityKind),
        "baseUnit": this.getToJsonObjectConverter("baseUnit")((typeof(modelReferenceDataLibrary.baseUnit) != "undefined" && modelReferenceDataLibrary.baseUnit != null) ? Object.assign([], modelReferenceDataLibrary.baseUnit).sort() : modelReferenceDataLibrary.baseUnit),
        "classKind": this.getToJsonObjectConverter("classKind")(modelReferenceDataLibrary.classKind),
        "constant": this.getToJsonObjectConverter("constant")((typeof(modelReferenceDataLibrary.constant) != "undefined" && modelReferenceDataLibrary.constant != null) ? Object.assign([], modelReferenceDataLibrary.constant).sort() : modelReferenceDataLibrary.constant),
        "definedCategory": this.getToJsonObjectConverter("definedCategory")((typeof(modelReferenceDataLibrary.definedCategory) != "undefined" && modelReferenceDataLibrary.definedCategory != null) ? Object.assign([], modelReferenceDataLibrary.definedCategory).sort() : modelReferenceDataLibrary.definedCategory),
        "definition": this.getToJsonObjectConverter("definition")((typeof(modelReferenceDataLibrary.definition) != "undefined" && modelReferenceDataLibrary.definition != null) ? Object.assign([], modelReferenceDataLibrary.definition).sort() : modelReferenceDataLibrary.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(modelReferenceDataLibrary.excludedDomain) != "undefined" && modelReferenceDataLibrary.excludedDomain != null) ? Object.assign([], modelReferenceDataLibrary.excludedDomain).sort() : modelReferenceDataLibrary.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(modelReferenceDataLibrary.excludedPerson) != "undefined" && modelReferenceDataLibrary.excludedPerson != null) ? Object.assign([], modelReferenceDataLibrary.excludedPerson).sort() : modelReferenceDataLibrary.excludedPerson),
        "fileType": this.getToJsonObjectConverter("fileType")((typeof(modelReferenceDataLibrary.fileType) != "undefined" && modelReferenceDataLibrary.fileType != null) ? Object.assign([], modelReferenceDataLibrary.fileType).sort() : modelReferenceDataLibrary.fileType),
        "glossary": this.getToJsonObjectConverter("glossary")((typeof(modelReferenceDataLibrary.glossary) != "undefined" && modelReferenceDataLibrary.glossary != null) ? Object.assign([], modelReferenceDataLibrary.glossary).sort() : modelReferenceDataLibrary.glossary),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(modelReferenceDataLibrary.hyperLink) != "undefined" && modelReferenceDataLibrary.hyperLink != null) ? Object.assign([], modelReferenceDataLibrary.hyperLink).sort() : modelReferenceDataLibrary.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(modelReferenceDataLibrary.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(modelReferenceDataLibrary.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(modelReferenceDataLibrary.name),
        "parameterType": this.getToJsonObjectConverter("parameterType")((typeof(modelReferenceDataLibrary.parameterType) != "undefined" && modelReferenceDataLibrary.parameterType != null) ? Object.assign([], modelReferenceDataLibrary.parameterType).sort() : modelReferenceDataLibrary.parameterType),
        "referenceSource": this.getToJsonObjectConverter("referenceSource")((typeof(modelReferenceDataLibrary.referenceSource) != "undefined" && modelReferenceDataLibrary.referenceSource != null) ? Object.assign([], modelReferenceDataLibrary.referenceSource).sort() : modelReferenceDataLibrary.referenceSource),
        "requiredRdl": this.getToJsonObjectConverter("requiredRdl")(modelReferenceDataLibrary.requiredRdl),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(modelReferenceDataLibrary.revisionNumber),
        "rule": this.getToJsonObjectConverter("rule")((typeof(modelReferenceDataLibrary.rule) != "undefined" && modelReferenceDataLibrary.rule != null) ? Object.assign([], modelReferenceDataLibrary.rule).sort() : modelReferenceDataLibrary.rule),
        "scale": this.getToJsonObjectConverter("scale")((typeof(modelReferenceDataLibrary.scale) != "undefined" && modelReferenceDataLibrary.scale != null) ? Object.assign([], modelReferenceDataLibrary.scale).sort() : modelReferenceDataLibrary.scale),
        "shortName": this.getToJsonObjectConverter("shortName")(modelReferenceDataLibrary.shortName),
        "unit": this.getToJsonObjectConverter("unit")((typeof(modelReferenceDataLibrary.unit) != "undefined" && modelReferenceDataLibrary.unit != null) ? Object.assign([], modelReferenceDataLibrary.unit).sort() : modelReferenceDataLibrary.unit),
        "unitPrefix": this.getToJsonObjectConverter("unitPrefix")((typeof(modelReferenceDataLibrary.unitPrefix) != "undefined" && modelReferenceDataLibrary.unitPrefix != null) ? Object.assign([], modelReferenceDataLibrary.unitPrefix).sort() : modelReferenceDataLibrary.unitPrefix),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ModelReferenceDataLibrary
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts MultiRelationship to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let multiRelationship = <Dto.MultiRelationship>thing;
      if (typeof(multiRelationship) == "undefined" || multiRelationship == null) {
        throw new Error("The object is not MultiRelationship");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(multiRelationship.category) != "undefined" && multiRelationship.category != null) ? Object.assign([], multiRelationship.category).sort() : multiRelationship.category),
        "classKind": this.getToJsonObjectConverter("classKind")(multiRelationship.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(multiRelationship.excludedDomain) != "undefined" && multiRelationship.excludedDomain != null) ? Object.assign([], multiRelationship.excludedDomain).sort() : multiRelationship.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(multiRelationship.excludedPerson) != "undefined" && multiRelationship.excludedPerson != null) ? Object.assign([], multiRelationship.excludedPerson).sort() : multiRelationship.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(multiRelationship.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(multiRelationship.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(multiRelationship.owner),
        "parameterValue": this.getToJsonObjectConverter("parameterValue")((typeof(multiRelationship.parameterValue) != "undefined" && multiRelationship.parameterValue != null) ? Object.assign([], multiRelationship.parameterValue).sort() : multiRelationship.parameterValue),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(multiRelationship.relatedThing) != "undefined" && multiRelationship.relatedThing != null) ? Object.assign([], multiRelationship.relatedThing).sort() : multiRelationship.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(multiRelationship.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to MultiRelationship
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts MultiRelationshipRule to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let multiRelationshipRule = <Dto.MultiRelationshipRule>thing;
      if (typeof(multiRelationshipRule) == "undefined" || multiRelationshipRule == null) {
        throw new Error("The object is not MultiRelationshipRule");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(multiRelationshipRule.alias) != "undefined" && multiRelationshipRule.alias != null) ? Object.assign([], multiRelationshipRule.alias).sort() : multiRelationshipRule.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(multiRelationshipRule.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(multiRelationshipRule.definition) != "undefined" && multiRelationshipRule.definition != null) ? Object.assign([], multiRelationshipRule.definition).sort() : multiRelationshipRule.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(multiRelationshipRule.excludedDomain) != "undefined" && multiRelationshipRule.excludedDomain != null) ? Object.assign([], multiRelationshipRule.excludedDomain).sort() : multiRelationshipRule.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(multiRelationshipRule.excludedPerson) != "undefined" && multiRelationshipRule.excludedPerson != null) ? Object.assign([], multiRelationshipRule.excludedPerson).sort() : multiRelationshipRule.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(multiRelationshipRule.hyperLink) != "undefined" && multiRelationshipRule.hyperLink != null) ? Object.assign([], multiRelationshipRule.hyperLink).sort() : multiRelationshipRule.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(multiRelationshipRule.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(multiRelationshipRule.isDeprecated),
        "maxRelated": this.getToJsonObjectConverter("maxRelated")(multiRelationshipRule.maxRelated),
        "minRelated": this.getToJsonObjectConverter("minRelated")(multiRelationshipRule.minRelated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(multiRelationshipRule.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(multiRelationshipRule.name),
        "relatedCategory": this.getToJsonObjectConverter("relatedCategory")((typeof(multiRelationshipRule.relatedCategory) != "undefined" && multiRelationshipRule.relatedCategory != null) ? Object.assign([], multiRelationshipRule.relatedCategory).sort() : multiRelationshipRule.relatedCategory),
        "relationshipCategory": this.getToJsonObjectConverter("relationshipCategory")(multiRelationshipRule.relationshipCategory),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(multiRelationshipRule.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(multiRelationshipRule.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to MultiRelationshipRule
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts NaturalLanguage to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let naturalLanguage = <Dto.NaturalLanguage>thing;
      if (typeof(naturalLanguage) == "undefined" || naturalLanguage == null) {
        throw new Error("The object is not NaturalLanguage");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(naturalLanguage.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(naturalLanguage.excludedDomain) != "undefined" && naturalLanguage.excludedDomain != null) ? Object.assign([], naturalLanguage.excludedDomain).sort() : naturalLanguage.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(naturalLanguage.excludedPerson) != "undefined" && naturalLanguage.excludedPerson != null) ? Object.assign([], naturalLanguage.excludedPerson).sort() : naturalLanguage.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(naturalLanguage.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(naturalLanguage.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(naturalLanguage.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(naturalLanguage.name),
        "nativeName": this.getToJsonObjectConverter("nativeName")(naturalLanguage.nativeName),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(naturalLanguage.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to NaturalLanguage
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
        "rootElement": (value: any) => { return value; },
      };
    }

    /**
     * Converts NestedElement to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let nestedElement = <Dto.NestedElement>thing;
      if (typeof(nestedElement) == "undefined" || nestedElement == null) {
        throw new Error("The object is not NestedElement");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(nestedElement.classKind),
        "elementUsage": this.getToJsonObjectConverter("elementUsage")(nestedElement.elementUsage),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(nestedElement.excludedDomain) != "undefined" && nestedElement.excludedDomain != null) ? Object.assign([], nestedElement.excludedDomain).sort() : nestedElement.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(nestedElement.excludedPerson) != "undefined" && nestedElement.excludedPerson != null) ? Object.assign([], nestedElement.excludedPerson).sort() : nestedElement.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(nestedElement.iid),
        "isVolatile": this.getToJsonObjectConverter("isVolatile")(nestedElement.isVolatile),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(nestedElement.modifiedOn),
        "nestedParameter": this.getToJsonObjectConverter("nestedParameter")((typeof(nestedElement.nestedParameter) != "undefined" && nestedElement.nestedParameter != null) ? Object.assign([], nestedElement.nestedParameter).sort() : nestedElement.nestedParameter),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(nestedElement.revisionNumber),
        "rootElement": this.getToJsonObjectConverter("rootElement")(nestedElement.rootElement),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to NestedElement
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts NestedParameter to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let nestedParameter = <Dto.NestedParameter>thing;
      if (typeof(nestedParameter) == "undefined" || nestedParameter == null) {
        throw new Error("The object is not NestedParameter");
      }

      let jsonObject = {
        "actualState": this.getToJsonObjectConverter("actualState")(nestedParameter.actualState),
        "actualValue": this.getToJsonObjectConverter("actualValue")(nestedParameter.actualValue),
        "associatedParameter": this.getToJsonObjectConverter("associatedParameter")(nestedParameter.associatedParameter),
        "classKind": this.getToJsonObjectConverter("classKind")(nestedParameter.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(nestedParameter.excludedDomain) != "undefined" && nestedParameter.excludedDomain != null) ? Object.assign([], nestedParameter.excludedDomain).sort() : nestedParameter.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(nestedParameter.excludedPerson) != "undefined" && nestedParameter.excludedPerson != null) ? Object.assign([], nestedParameter.excludedPerson).sort() : nestedParameter.excludedPerson),
        "formula": this.getToJsonObjectConverter("formula")(nestedParameter.formula),
        "iid": this.getToJsonObjectConverter("iid")(nestedParameter.iid),
        "isVolatile": this.getToJsonObjectConverter("isVolatile")(nestedParameter.isVolatile),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(nestedParameter.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(nestedParameter.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(nestedParameter.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to NestedParameter
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
        "term": (value: any) => { return value; },
      };
    }

    /**
     * Converts NotExpression to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let notExpression = <Dto.NotExpression>thing;
      if (typeof(notExpression) == "undefined" || notExpression == null) {
        throw new Error("The object is not NotExpression");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(notExpression.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(notExpression.excludedDomain) != "undefined" && notExpression.excludedDomain != null) ? Object.assign([], notExpression.excludedDomain).sort() : notExpression.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(notExpression.excludedPerson) != "undefined" && notExpression.excludedPerson != null) ? Object.assign([], notExpression.excludedPerson).sort() : notExpression.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(notExpression.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(notExpression.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(notExpression.revisionNumber),
        "term": this.getToJsonObjectConverter("term")(notExpression.term),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to NotExpression
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Option to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let option = <Dto.Option>thing;
      if (typeof(option) == "undefined" || option == null) {
        throw new Error("The object is not Option");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(option.alias) != "undefined" && option.alias != null) ? Object.assign([], option.alias).sort() : option.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(option.category) != "undefined" && option.category != null) ? Object.assign([], option.category).sort() : option.category),
        "classKind": this.getToJsonObjectConverter("classKind")(option.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(option.definition) != "undefined" && option.definition != null) ? Object.assign([], option.definition).sort() : option.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(option.excludedDomain) != "undefined" && option.excludedDomain != null) ? Object.assign([], option.excludedDomain).sort() : option.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(option.excludedPerson) != "undefined" && option.excludedPerson != null) ? Object.assign([], option.excludedPerson).sort() : option.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(option.hyperLink) != "undefined" && option.hyperLink != null) ? Object.assign([], option.hyperLink).sort() : option.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(option.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(option.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(option.name),
        "nestedElement": this.getToJsonObjectConverter("nestedElement")((typeof(option.nestedElement) != "undefined" && option.nestedElement != null) ? Object.assign([], option.nestedElement).sort() : option.nestedElement),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(option.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(option.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Option
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
        "valueDefinition": (value: any) => { return value; },
      };
    }

    /**
     * Converts OrdinalScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let ordinalScale = <Dto.OrdinalScale>thing;
      if (typeof(ordinalScale) == "undefined" || ordinalScale == null) {
        throw new Error("The object is not OrdinalScale");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(ordinalScale.alias) != "undefined" && ordinalScale.alias != null) ? Object.assign([], ordinalScale.alias).sort() : ordinalScale.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(ordinalScale.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(ordinalScale.definition) != "undefined" && ordinalScale.definition != null) ? Object.assign([], ordinalScale.definition).sort() : ordinalScale.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(ordinalScale.excludedDomain) != "undefined" && ordinalScale.excludedDomain != null) ? Object.assign([], ordinalScale.excludedDomain).sort() : ordinalScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(ordinalScale.excludedPerson) != "undefined" && ordinalScale.excludedPerson != null) ? Object.assign([], ordinalScale.excludedPerson).sort() : ordinalScale.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(ordinalScale.hyperLink) != "undefined" && ordinalScale.hyperLink != null) ? Object.assign([], ordinalScale.hyperLink).sort() : ordinalScale.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(ordinalScale.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(ordinalScale.isDeprecated),
        "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(ordinalScale.isMaximumInclusive),
        "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(ordinalScale.isMinimumInclusive),
        "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")((typeof(ordinalScale.mappingToReferenceScale) != "undefined" && ordinalScale.mappingToReferenceScale != null) ? Object.assign([], ordinalScale.mappingToReferenceScale).sort() : ordinalScale.mappingToReferenceScale),
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
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")((typeof(ordinalScale.valueDefinition) != "undefined" && ordinalScale.valueDefinition != null) ? Object.assign([], ordinalScale.valueDefinition).sort() : ordinalScale.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to OrdinalScale
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
        "term": (value: any) => { return value; },
      };
    }

    /**
     * Converts OrExpression to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let orExpression = <Dto.OrExpression>thing;
      if (typeof(orExpression) == "undefined" || orExpression == null) {
        throw new Error("The object is not OrExpression");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(orExpression.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(orExpression.excludedDomain) != "undefined" && orExpression.excludedDomain != null) ? Object.assign([], orExpression.excludedDomain).sort() : orExpression.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(orExpression.excludedPerson) != "undefined" && orExpression.excludedPerson != null) ? Object.assign([], orExpression.excludedPerson).sort() : orExpression.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(orExpression.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(orExpression.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(orExpression.revisionNumber),
        "term": this.getToJsonObjectConverter("term")((typeof(orExpression.term) != "undefined" && orExpression.term != null) ? Object.assign([], orExpression.term).sort() : orExpression.term),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to OrExpression
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Organization to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let organization = <Dto.Organization>thing;
      if (typeof(organization) == "undefined" || organization == null) {
        throw new Error("The object is not Organization");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(organization.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(organization.excludedDomain) != "undefined" && organization.excludedDomain != null) ? Object.assign([], organization.excludedDomain).sort() : organization.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(organization.excludedPerson) != "undefined" && organization.excludedPerson != null) ? Object.assign([], organization.excludedPerson).sort() : organization.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(organization.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(organization.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(organization.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(organization.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(organization.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(organization.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Organization
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
        "usedColor": (value: any) => { return value; },
      };
    }

    /**
     * Converts OwnedStyle to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let ownedStyle = <Dto.OwnedStyle>thing;
      if (typeof(ownedStyle) == "undefined" || ownedStyle == null) {
        throw new Error("The object is not OwnedStyle");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(ownedStyle.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(ownedStyle.excludedDomain) != "undefined" && ownedStyle.excludedDomain != null) ? Object.assign([], ownedStyle.excludedDomain).sort() : ownedStyle.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(ownedStyle.excludedPerson) != "undefined" && ownedStyle.excludedPerson != null) ? Object.assign([], ownedStyle.excludedPerson).sort() : ownedStyle.excludedPerson),
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
        "usedColor": this.getToJsonObjectConverter("usedColor")((typeof(ownedStyle.usedColor) != "undefined" && ownedStyle.usedColor != null) ? Object.assign([], ownedStyle.usedColor).sort() : ownedStyle.usedColor),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to OwnedStyle
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Page to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let page = <Dto.Page>thing;
      if (typeof(page) == "undefined" || page == null) {
        throw new Error("The object is not Page");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(page.category) != "undefined" && page.category != null) ? Object.assign([], page.category).sort() : page.category),
        "classKind": this.getToJsonObjectConverter("classKind")(page.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(page.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(page.excludedDomain) != "undefined" && page.excludedDomain != null) ? Object.assign([], page.excludedDomain).sort() : page.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(page.excludedPerson) != "undefined" && page.excludedPerson != null) ? Object.assign([], page.excludedPerson).sort() : page.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(page.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(page.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(page.name),
        "note": this.getToJsonObjectConverter("note")(page.note),
        "owner": this.getToJsonObjectConverter("owner")(page.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(page.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(page.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Page
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
        "valueSet": (value: any) => { return value; },
      };
    }

    /**
     * Converts Parameter to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameter = <Dto.Parameter>thing;
      if (typeof(parameter) == "undefined" || parameter == null) {
        throw new Error("The object is not Parameter");
      }

      let jsonObject = {
        "allowDifferentOwnerOfOverride": this.getToJsonObjectConverter("allowDifferentOwnerOfOverride")(parameter.allowDifferentOwnerOfOverride),
        "classKind": this.getToJsonObjectConverter("classKind")(parameter.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameter.excludedDomain) != "undefined" && parameter.excludedDomain != null) ? Object.assign([], parameter.excludedDomain).sort() : parameter.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameter.excludedPerson) != "undefined" && parameter.excludedPerson != null) ? Object.assign([], parameter.excludedPerson).sort() : parameter.excludedPerson),
        "expectsOverride": this.getToJsonObjectConverter("expectsOverride")(parameter.expectsOverride),
        "group": this.getToJsonObjectConverter("group")(parameter.group),
        "iid": this.getToJsonObjectConverter("iid")(parameter.iid),
        "isOptionDependent": this.getToJsonObjectConverter("isOptionDependent")(parameter.isOptionDependent),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameter.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(parameter.owner),
        "parameterSubscription": this.getToJsonObjectConverter("parameterSubscription")((typeof(parameter.parameterSubscription) != "undefined" && parameter.parameterSubscription != null) ? Object.assign([], parameter.parameterSubscription).sort() : parameter.parameterSubscription),
        "parameterType": this.getToJsonObjectConverter("parameterType")(parameter.parameterType),
        "requestedBy": this.getToJsonObjectConverter("requestedBy")(parameter.requestedBy),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameter.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(parameter.scale),
        "stateDependence": this.getToJsonObjectConverter("stateDependence")(parameter.stateDependence),
        "valueSet": this.getToJsonObjectConverter("valueSet")((typeof(parameter.valueSet) != "undefined" && parameter.valueSet != null) ? Object.assign([], parameter.valueSet).sort() : parameter.valueSet),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Parameter
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParameterGroup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterGroup = <Dto.ParameterGroup>thing;
      if (typeof(parameterGroup) == "undefined" || parameterGroup == null) {
        throw new Error("The object is not ParameterGroup");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterGroup.classKind),
        "containingGroup": this.getToJsonObjectConverter("containingGroup")(parameterGroup.containingGroup),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterGroup.excludedDomain) != "undefined" && parameterGroup.excludedDomain != null) ? Object.assign([], parameterGroup.excludedDomain).sort() : parameterGroup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterGroup.excludedPerson) != "undefined" && parameterGroup.excludedPerson != null) ? Object.assign([], parameterGroup.excludedPerson).sort() : parameterGroup.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(parameterGroup.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterGroup.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(parameterGroup.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterGroup.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterGroup
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParameterizedCategoryRule to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterizedCategoryRule = <Dto.ParameterizedCategoryRule>thing;
      if (typeof(parameterizedCategoryRule) == "undefined" || parameterizedCategoryRule == null) {
        throw new Error("The object is not ParameterizedCategoryRule");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(parameterizedCategoryRule.alias) != "undefined" && parameterizedCategoryRule.alias != null) ? Object.assign([], parameterizedCategoryRule.alias).sort() : parameterizedCategoryRule.alias),
        "category": this.getToJsonObjectConverter("category")(parameterizedCategoryRule.category),
        "classKind": this.getToJsonObjectConverter("classKind")(parameterizedCategoryRule.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(parameterizedCategoryRule.definition) != "undefined" && parameterizedCategoryRule.definition != null) ? Object.assign([], parameterizedCategoryRule.definition).sort() : parameterizedCategoryRule.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterizedCategoryRule.excludedDomain) != "undefined" && parameterizedCategoryRule.excludedDomain != null) ? Object.assign([], parameterizedCategoryRule.excludedDomain).sort() : parameterizedCategoryRule.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterizedCategoryRule.excludedPerson) != "undefined" && parameterizedCategoryRule.excludedPerson != null) ? Object.assign([], parameterizedCategoryRule.excludedPerson).sort() : parameterizedCategoryRule.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(parameterizedCategoryRule.hyperLink) != "undefined" && parameterizedCategoryRule.hyperLink != null) ? Object.assign([], parameterizedCategoryRule.hyperLink).sort() : parameterizedCategoryRule.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(parameterizedCategoryRule.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(parameterizedCategoryRule.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterizedCategoryRule.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(parameterizedCategoryRule.name),
        "parameterType": this.getToJsonObjectConverter("parameterType")((typeof(parameterizedCategoryRule.parameterType) != "undefined" && parameterizedCategoryRule.parameterType != null) ? Object.assign([], parameterizedCategoryRule.parameterType).sort() : parameterizedCategoryRule.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterizedCategoryRule.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(parameterizedCategoryRule.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterizedCategoryRule
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
        "valueSet": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParameterOverride to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterOverride = <Dto.ParameterOverride>thing;
      if (typeof(parameterOverride) == "undefined" || parameterOverride == null) {
        throw new Error("The object is not ParameterOverride");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterOverride.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterOverride.excludedDomain) != "undefined" && parameterOverride.excludedDomain != null) ? Object.assign([], parameterOverride.excludedDomain).sort() : parameterOverride.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterOverride.excludedPerson) != "undefined" && parameterOverride.excludedPerson != null) ? Object.assign([], parameterOverride.excludedPerson).sort() : parameterOverride.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(parameterOverride.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterOverride.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(parameterOverride.owner),
        "parameter": this.getToJsonObjectConverter("parameter")(parameterOverride.parameter),
        "parameterSubscription": this.getToJsonObjectConverter("parameterSubscription")((typeof(parameterOverride.parameterSubscription) != "undefined" && parameterOverride.parameterSubscription != null) ? Object.assign([], parameterOverride.parameterSubscription).sort() : parameterOverride.parameterSubscription),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterOverride.revisionNumber),
        "valueSet": this.getToJsonObjectConverter("valueSet")((typeof(parameterOverride.valueSet) != "undefined" && parameterOverride.valueSet != null) ? Object.assign([], parameterOverride.valueSet).sort() : parameterOverride.valueSet),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterOverride
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
        "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; },
      };
    }

    /**
     * Converts ParameterOverrideValueSet to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterOverrideValueSet = <Dto.ParameterOverrideValueSet>thing;
      if (typeof(parameterOverrideValueSet) == "undefined" || parameterOverrideValueSet == null) {
        throw new Error("The object is not ParameterOverrideValueSet");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterOverrideValueSet.classKind),
        "computed": this.getToJsonObjectConverter("computed")(parameterOverrideValueSet.computed),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterOverrideValueSet.excludedDomain) != "undefined" && parameterOverrideValueSet.excludedDomain != null) ? Object.assign([], parameterOverrideValueSet.excludedDomain).sort() : parameterOverrideValueSet.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterOverrideValueSet.excludedPerson) != "undefined" && parameterOverrideValueSet.excludedPerson != null) ? Object.assign([], parameterOverrideValueSet.excludedPerson).sort() : parameterOverrideValueSet.excludedPerson),
        "formula": this.getToJsonObjectConverter("formula")(parameterOverrideValueSet.formula),
        "iid": this.getToJsonObjectConverter("iid")(parameterOverrideValueSet.iid),
        "manual": this.getToJsonObjectConverter("manual")(parameterOverrideValueSet.manual),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterOverrideValueSet.modifiedOn),
        "parameterValueSet": this.getToJsonObjectConverter("parameterValueSet")(parameterOverrideValueSet.parameterValueSet),
        "published": this.getToJsonObjectConverter("published")(parameterOverrideValueSet.published),
        "reference": this.getToJsonObjectConverter("reference")(parameterOverrideValueSet.reference),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterOverrideValueSet.revisionNumber),
        "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterOverrideValueSet.valueSwitch),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterOverrideValueSet
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
        "valueSet": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParameterSubscription to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterSubscription = <Dto.ParameterSubscription>thing;
      if (typeof(parameterSubscription) == "undefined" || parameterSubscription == null) {
        throw new Error("The object is not ParameterSubscription");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterSubscription.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterSubscription.excludedDomain) != "undefined" && parameterSubscription.excludedDomain != null) ? Object.assign([], parameterSubscription.excludedDomain).sort() : parameterSubscription.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterSubscription.excludedPerson) != "undefined" && parameterSubscription.excludedPerson != null) ? Object.assign([], parameterSubscription.excludedPerson).sort() : parameterSubscription.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(parameterSubscription.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterSubscription.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(parameterSubscription.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterSubscription.revisionNumber),
        "valueSet": this.getToJsonObjectConverter("valueSet")((typeof(parameterSubscription.valueSet) != "undefined" && parameterSubscription.valueSet != null) ? Object.assign([], parameterSubscription.valueSet).sort() : parameterSubscription.valueSet),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterSubscription
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
        "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; },
      };
    }

    /**
     * Converts ParameterSubscriptionValueSet to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterSubscriptionValueSet = <Dto.ParameterSubscriptionValueSet>thing;
      if (typeof(parameterSubscriptionValueSet) == "undefined" || parameterSubscriptionValueSet == null) {
        throw new Error("The object is not ParameterSubscriptionValueSet");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterSubscriptionValueSet.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterSubscriptionValueSet.excludedDomain) != "undefined" && parameterSubscriptionValueSet.excludedDomain != null) ? Object.assign([], parameterSubscriptionValueSet.excludedDomain).sort() : parameterSubscriptionValueSet.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterSubscriptionValueSet.excludedPerson) != "undefined" && parameterSubscriptionValueSet.excludedPerson != null) ? Object.assign([], parameterSubscriptionValueSet.excludedPerson).sort() : parameterSubscriptionValueSet.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(parameterSubscriptionValueSet.iid),
        "manual": this.getToJsonObjectConverter("manual")(parameterSubscriptionValueSet.manual),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterSubscriptionValueSet.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterSubscriptionValueSet.revisionNumber),
        "subscribedValueSet": this.getToJsonObjectConverter("subscribedValueSet")(parameterSubscriptionValueSet.subscribedValueSet),
        "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterSubscriptionValueSet.valueSwitch),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterSubscriptionValueSet
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParameterTypeComponent to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterTypeComponent = <Dto.ParameterTypeComponent>thing;
      if (typeof(parameterTypeComponent) == "undefined" || parameterTypeComponent == null) {
        throw new Error("The object is not ParameterTypeComponent");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parameterTypeComponent.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterTypeComponent.excludedDomain) != "undefined" && parameterTypeComponent.excludedDomain != null) ? Object.assign([], parameterTypeComponent.excludedDomain).sort() : parameterTypeComponent.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterTypeComponent.excludedPerson) != "undefined" && parameterTypeComponent.excludedPerson != null) ? Object.assign([], parameterTypeComponent.excludedPerson).sort() : parameterTypeComponent.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(parameterTypeComponent.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterTypeComponent.modifiedOn),
        "parameterType": this.getToJsonObjectConverter("parameterType")(parameterTypeComponent.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterTypeComponent.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(parameterTypeComponent.scale),
        "shortName": this.getToJsonObjectConverter("shortName")(parameterTypeComponent.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterTypeComponent
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
        "valueSwitch": (value: any) => { return Dto.ParameterSwitchKind[value]; },
      };
    }

    /**
     * Converts ParameterValueSet to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parameterValueSet = <Dto.ParameterValueSet>thing;
      if (typeof(parameterValueSet) == "undefined" || parameterValueSet == null) {
        throw new Error("The object is not ParameterValueSet");
      }

      let jsonObject = {
        "actualOption": this.getToJsonObjectConverter("actualOption")(parameterValueSet.actualOption),
        "actualState": this.getToJsonObjectConverter("actualState")(parameterValueSet.actualState),
        "classKind": this.getToJsonObjectConverter("classKind")(parameterValueSet.classKind),
        "computed": this.getToJsonObjectConverter("computed")(parameterValueSet.computed),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parameterValueSet.excludedDomain) != "undefined" && parameterValueSet.excludedDomain != null) ? Object.assign([], parameterValueSet.excludedDomain).sort() : parameterValueSet.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parameterValueSet.excludedPerson) != "undefined" && parameterValueSet.excludedPerson != null) ? Object.assign([], parameterValueSet.excludedPerson).sort() : parameterValueSet.excludedPerson),
        "formula": this.getToJsonObjectConverter("formula")(parameterValueSet.formula),
        "iid": this.getToJsonObjectConverter("iid")(parameterValueSet.iid),
        "manual": this.getToJsonObjectConverter("manual")(parameterValueSet.manual),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parameterValueSet.modifiedOn),
        "published": this.getToJsonObjectConverter("published")(parameterValueSet.published),
        "reference": this.getToJsonObjectConverter("reference")(parameterValueSet.reference),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parameterValueSet.revisionNumber),
        "valueSwitch": this.getToJsonObjectConverter("valueSwitch")(parameterValueSet.valueSwitch),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParameterValueSet
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
        "topExpression": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParametricConstraint to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let parametricConstraint = <Dto.ParametricConstraint>thing;
      if (typeof(parametricConstraint) == "undefined" || parametricConstraint == null) {
        throw new Error("The object is not ParametricConstraint");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(parametricConstraint.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(parametricConstraint.excludedDomain) != "undefined" && parametricConstraint.excludedDomain != null) ? Object.assign([], parametricConstraint.excludedDomain).sort() : parametricConstraint.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(parametricConstraint.excludedPerson) != "undefined" && parametricConstraint.excludedPerson != null) ? Object.assign([], parametricConstraint.excludedPerson).sort() : parametricConstraint.excludedPerson),
        "expression": this.getToJsonObjectConverter("expression")((typeof(parametricConstraint.expression) != "undefined" && parametricConstraint.expression != null) ? Object.assign([], parametricConstraint.expression).sort() : parametricConstraint.expression),
        "iid": this.getToJsonObjectConverter("iid")(parametricConstraint.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(parametricConstraint.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(parametricConstraint.revisionNumber),
        "topExpression": this.getToJsonObjectConverter("topExpression")(parametricConstraint.topExpression),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParametricConstraint
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
        "selectedDomain": (value: any) => { return value; },
      };
    }

    /**
     * Converts Participant to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let participant = <Dto.Participant>thing;
      if (typeof(participant) == "undefined" || participant == null) {
        throw new Error("The object is not Participant");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(participant.classKind),
        "domain": this.getToJsonObjectConverter("domain")((typeof(participant.domain) != "undefined" && participant.domain != null) ? Object.assign([], participant.domain).sort() : participant.domain),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(participant.excludedDomain) != "undefined" && participant.excludedDomain != null) ? Object.assign([], participant.excludedDomain).sort() : participant.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(participant.excludedPerson) != "undefined" && participant.excludedPerson != null) ? Object.assign([], participant.excludedPerson).sort() : participant.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(participant.iid),
        "isActive": this.getToJsonObjectConverter("isActive")(participant.isActive),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participant.modifiedOn),
        "person": this.getToJsonObjectConverter("person")(participant.person),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participant.revisionNumber),
        "role": this.getToJsonObjectConverter("role")(participant.role),
        "selectedDomain": this.getToJsonObjectConverter("selectedDomain")(participant.selectedDomain),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Participant
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParticipantPermission to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let participantPermission = <Dto.ParticipantPermission>thing;
      if (typeof(participantPermission) == "undefined" || participantPermission == null) {
        throw new Error("The object is not ParticipantPermission");
      }

      let jsonObject = {
        "accessRight": this.getToJsonObjectConverter("accessRight")(participantPermission.accessRight),
        "classKind": this.getToJsonObjectConverter("classKind")(participantPermission.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(participantPermission.excludedDomain) != "undefined" && participantPermission.excludedDomain != null) ? Object.assign([], participantPermission.excludedDomain).sort() : participantPermission.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(participantPermission.excludedPerson) != "undefined" && participantPermission.excludedPerson != null) ? Object.assign([], participantPermission.excludedPerson).sort() : participantPermission.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(participantPermission.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(participantPermission.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participantPermission.modifiedOn),
        "objectClass": this.getToJsonObjectConverter("objectClass")(participantPermission.objectClass),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participantPermission.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParticipantPermission
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ParticipantRole to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let participantRole = <Dto.ParticipantRole>thing;
      if (typeof(participantRole) == "undefined" || participantRole == null) {
        throw new Error("The object is not ParticipantRole");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(participantRole.alias) != "undefined" && participantRole.alias != null) ? Object.assign([], participantRole.alias).sort() : participantRole.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(participantRole.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(participantRole.definition) != "undefined" && participantRole.definition != null) ? Object.assign([], participantRole.definition).sort() : participantRole.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(participantRole.excludedDomain) != "undefined" && participantRole.excludedDomain != null) ? Object.assign([], participantRole.excludedDomain).sort() : participantRole.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(participantRole.excludedPerson) != "undefined" && participantRole.excludedPerson != null) ? Object.assign([], participantRole.excludedPerson).sort() : participantRole.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(participantRole.hyperLink) != "undefined" && participantRole.hyperLink != null) ? Object.assign([], participantRole.hyperLink).sort() : participantRole.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(participantRole.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(participantRole.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(participantRole.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(participantRole.name),
        "participantPermission": this.getToJsonObjectConverter("participantPermission")((typeof(participantRole.participantPermission) != "undefined" && participantRole.participantPermission != null) ? Object.assign([], participantRole.participantPermission).sort() : participantRole.participantPermission),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(participantRole.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(participantRole.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ParticipantRole
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
        "userPreference": (value: any) => { return value; },
      };
    }

    /**
     * Converts Person to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let person = <Dto.Person>thing;
      if (typeof(person) == "undefined" || person == null) {
        throw new Error("The object is not Person");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(person.classKind),
        "defaultDomain": this.getToJsonObjectConverter("defaultDomain")(person.defaultDomain),
        "defaultEmailAddress": this.getToJsonObjectConverter("defaultEmailAddress")(person.defaultEmailAddress),
        "defaultTelephoneNumber": this.getToJsonObjectConverter("defaultTelephoneNumber")(person.defaultTelephoneNumber),
        "emailAddress": this.getToJsonObjectConverter("emailAddress")((typeof(person.emailAddress) != "undefined" && person.emailAddress != null) ? Object.assign([], person.emailAddress).sort() : person.emailAddress),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(person.excludedDomain) != "undefined" && person.excludedDomain != null) ? Object.assign([], person.excludedDomain).sort() : person.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(person.excludedPerson) != "undefined" && person.excludedPerson != null) ? Object.assign([], person.excludedPerson).sort() : person.excludedPerson),
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
        "telephoneNumber": this.getToJsonObjectConverter("telephoneNumber")((typeof(person.telephoneNumber) != "undefined" && person.telephoneNumber != null) ? Object.assign([], person.telephoneNumber).sort() : person.telephoneNumber),
        "userPreference": this.getToJsonObjectConverter("userPreference")((typeof(person.userPreference) != "undefined" && person.userPreference != null) ? Object.assign([], person.userPreference).sort() : person.userPreference),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Person
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts PersonPermission to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let personPermission = <Dto.PersonPermission>thing;
      if (typeof(personPermission) == "undefined" || personPermission == null) {
        throw new Error("The object is not PersonPermission");
      }

      let jsonObject = {
        "accessRight": this.getToJsonObjectConverter("accessRight")(personPermission.accessRight),
        "classKind": this.getToJsonObjectConverter("classKind")(personPermission.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(personPermission.excludedDomain) != "undefined" && personPermission.excludedDomain != null) ? Object.assign([], personPermission.excludedDomain).sort() : personPermission.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(personPermission.excludedPerson) != "undefined" && personPermission.excludedPerson != null) ? Object.assign([], personPermission.excludedPerson).sort() : personPermission.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(personPermission.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(personPermission.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(personPermission.modifiedOn),
        "objectClass": this.getToJsonObjectConverter("objectClass")(personPermission.objectClass),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(personPermission.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to PersonPermission
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts PersonRole to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let personRole = <Dto.PersonRole>thing;
      if (typeof(personRole) == "undefined" || personRole == null) {
        throw new Error("The object is not PersonRole");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(personRole.alias) != "undefined" && personRole.alias != null) ? Object.assign([], personRole.alias).sort() : personRole.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(personRole.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(personRole.definition) != "undefined" && personRole.definition != null) ? Object.assign([], personRole.definition).sort() : personRole.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(personRole.excludedDomain) != "undefined" && personRole.excludedDomain != null) ? Object.assign([], personRole.excludedDomain).sort() : personRole.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(personRole.excludedPerson) != "undefined" && personRole.excludedPerson != null) ? Object.assign([], personRole.excludedPerson).sort() : personRole.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(personRole.hyperLink) != "undefined" && personRole.hyperLink != null) ? Object.assign([], personRole.hyperLink).sort() : personRole.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(personRole.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(personRole.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(personRole.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(personRole.name),
        "personPermission": this.getToJsonObjectConverter("personPermission")((typeof(personRole.personPermission) != "undefined" && personRole.personPermission != null) ? Object.assign([], personRole.personPermission).sort() : personRole.personPermission),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(personRole.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(personRole.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to PersonRole
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
        "y": (value: any) => { return value; },
      };
    }

    /**
     * Converts Point to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let point = <Dto.Point>thing;
      if (typeof(point) == "undefined" || point == null) {
        throw new Error("The object is not Point");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(point.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(point.excludedDomain) != "undefined" && point.excludedDomain != null) ? Object.assign([], point.excludedDomain).sort() : point.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(point.excludedPerson) != "undefined" && point.excludedPerson != null) ? Object.assign([], point.excludedPerson).sort() : point.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(point.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(point.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(point.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(point.revisionNumber),
        "x": this.getToJsonObjectConverter("x")(point.x),
        "y": this.getToJsonObjectConverter("y")(point.y),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Point
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts PossibleFiniteState to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let possibleFiniteState = <Dto.PossibleFiniteState>thing;
      if (typeof(possibleFiniteState) == "undefined" || possibleFiniteState == null) {
        throw new Error("The object is not PossibleFiniteState");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(possibleFiniteState.alias) != "undefined" && possibleFiniteState.alias != null) ? Object.assign([], possibleFiniteState.alias).sort() : possibleFiniteState.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(possibleFiniteState.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(possibleFiniteState.definition) != "undefined" && possibleFiniteState.definition != null) ? Object.assign([], possibleFiniteState.definition).sort() : possibleFiniteState.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(possibleFiniteState.excludedDomain) != "undefined" && possibleFiniteState.excludedDomain != null) ? Object.assign([], possibleFiniteState.excludedDomain).sort() : possibleFiniteState.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(possibleFiniteState.excludedPerson) != "undefined" && possibleFiniteState.excludedPerson != null) ? Object.assign([], possibleFiniteState.excludedPerson).sort() : possibleFiniteState.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(possibleFiniteState.hyperLink) != "undefined" && possibleFiniteState.hyperLink != null) ? Object.assign([], possibleFiniteState.hyperLink).sort() : possibleFiniteState.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(possibleFiniteState.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(possibleFiniteState.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(possibleFiniteState.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(possibleFiniteState.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(possibleFiniteState.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to PossibleFiniteState
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts PossibleFiniteStateList to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let possibleFiniteStateList = <Dto.PossibleFiniteStateList>thing;
      if (typeof(possibleFiniteStateList) == "undefined" || possibleFiniteStateList == null) {
        throw new Error("The object is not PossibleFiniteStateList");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(possibleFiniteStateList.alias) != "undefined" && possibleFiniteStateList.alias != null) ? Object.assign([], possibleFiniteStateList.alias).sort() : possibleFiniteStateList.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(possibleFiniteStateList.category) != "undefined" && possibleFiniteStateList.category != null) ? Object.assign([], possibleFiniteStateList.category).sort() : possibleFiniteStateList.category),
        "classKind": this.getToJsonObjectConverter("classKind")(possibleFiniteStateList.classKind),
        "defaultState": this.getToJsonObjectConverter("defaultState")(possibleFiniteStateList.defaultState),
        "definition": this.getToJsonObjectConverter("definition")((typeof(possibleFiniteStateList.definition) != "undefined" && possibleFiniteStateList.definition != null) ? Object.assign([], possibleFiniteStateList.definition).sort() : possibleFiniteStateList.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(possibleFiniteStateList.excludedDomain) != "undefined" && possibleFiniteStateList.excludedDomain != null) ? Object.assign([], possibleFiniteStateList.excludedDomain).sort() : possibleFiniteStateList.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(possibleFiniteStateList.excludedPerson) != "undefined" && possibleFiniteStateList.excludedPerson != null) ? Object.assign([], possibleFiniteStateList.excludedPerson).sort() : possibleFiniteStateList.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(possibleFiniteStateList.hyperLink) != "undefined" && possibleFiniteStateList.hyperLink != null) ? Object.assign([], possibleFiniteStateList.hyperLink).sort() : possibleFiniteStateList.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(possibleFiniteStateList.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(possibleFiniteStateList.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(possibleFiniteStateList.name),
        "owner": this.getToJsonObjectConverter("owner")(possibleFiniteStateList.owner),
        "possibleState": this.getToJsonObjectConverter("possibleState")(possibleFiniteStateList.possibleState),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(possibleFiniteStateList.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(possibleFiniteStateList.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to PossibleFiniteStateList
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts PrefixedUnit to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let prefixedUnit = <Dto.PrefixedUnit>thing;
      if (typeof(prefixedUnit) == "undefined" || prefixedUnit == null) {
        throw new Error("The object is not PrefixedUnit");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(prefixedUnit.alias) != "undefined" && prefixedUnit.alias != null) ? Object.assign([], prefixedUnit.alias).sort() : prefixedUnit.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(prefixedUnit.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(prefixedUnit.definition) != "undefined" && prefixedUnit.definition != null) ? Object.assign([], prefixedUnit.definition).sort() : prefixedUnit.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(prefixedUnit.excludedDomain) != "undefined" && prefixedUnit.excludedDomain != null) ? Object.assign([], prefixedUnit.excludedDomain).sort() : prefixedUnit.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(prefixedUnit.excludedPerson) != "undefined" && prefixedUnit.excludedPerson != null) ? Object.assign([], prefixedUnit.excludedPerson).sort() : prefixedUnit.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(prefixedUnit.hyperLink) != "undefined" && prefixedUnit.hyperLink != null) ? Object.assign([], prefixedUnit.hyperLink).sort() : prefixedUnit.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(prefixedUnit.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(prefixedUnit.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(prefixedUnit.modifiedOn),
        "prefix": this.getToJsonObjectConverter("prefix")(prefixedUnit.prefix),
        "referenceUnit": this.getToJsonObjectConverter("referenceUnit")(prefixedUnit.referenceUnit),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(prefixedUnit.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to PrefixedUnit
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Publication to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let publication = <Dto.Publication>thing;
      if (typeof(publication) == "undefined" || publication == null) {
        throw new Error("The object is not Publication");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(publication.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(publication.createdOn),
        "domain": this.getToJsonObjectConverter("domain")((typeof(publication.domain) != "undefined" && publication.domain != null) ? Object.assign([], publication.domain).sort() : publication.domain),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(publication.excludedDomain) != "undefined" && publication.excludedDomain != null) ? Object.assign([], publication.excludedDomain).sort() : publication.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(publication.excludedPerson) != "undefined" && publication.excludedPerson != null) ? Object.assign([], publication.excludedPerson).sort() : publication.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(publication.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(publication.modifiedOn),
        "publishedParameter": this.getToJsonObjectConverter("publishedParameter")((typeof(publication.publishedParameter) != "undefined" && publication.publishedParameter != null) ? Object.assign([], publication.publishedParameter).sort() : publication.publishedParameter),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(publication.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Publication
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts QuantityKindFactor to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let quantityKindFactor = <Dto.QuantityKindFactor>thing;
      if (typeof(quantityKindFactor) == "undefined" || quantityKindFactor == null) {
        throw new Error("The object is not QuantityKindFactor");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(quantityKindFactor.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(quantityKindFactor.excludedDomain) != "undefined" && quantityKindFactor.excludedDomain != null) ? Object.assign([], quantityKindFactor.excludedDomain).sort() : quantityKindFactor.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(quantityKindFactor.excludedPerson) != "undefined" && quantityKindFactor.excludedPerson != null) ? Object.assign([], quantityKindFactor.excludedPerson).sort() : quantityKindFactor.excludedPerson),
        "exponent": this.getToJsonObjectConverter("exponent")(quantityKindFactor.exponent),
        "iid": this.getToJsonObjectConverter("iid")(quantityKindFactor.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(quantityKindFactor.modifiedOn),
        "quantityKind": this.getToJsonObjectConverter("quantityKind")(quantityKindFactor.quantityKind),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(quantityKindFactor.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to QuantityKindFactor
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
        "valueDefinition": (value: any) => { return value; },
      };
    }

    /**
     * Converts RatioScale to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let ratioScale = <Dto.RatioScale>thing;
      if (typeof(ratioScale) == "undefined" || ratioScale == null) {
        throw new Error("The object is not RatioScale");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(ratioScale.alias) != "undefined" && ratioScale.alias != null) ? Object.assign([], ratioScale.alias).sort() : ratioScale.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(ratioScale.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(ratioScale.definition) != "undefined" && ratioScale.definition != null) ? Object.assign([], ratioScale.definition).sort() : ratioScale.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(ratioScale.excludedDomain) != "undefined" && ratioScale.excludedDomain != null) ? Object.assign([], ratioScale.excludedDomain).sort() : ratioScale.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(ratioScale.excludedPerson) != "undefined" && ratioScale.excludedPerson != null) ? Object.assign([], ratioScale.excludedPerson).sort() : ratioScale.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(ratioScale.hyperLink) != "undefined" && ratioScale.hyperLink != null) ? Object.assign([], ratioScale.hyperLink).sort() : ratioScale.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(ratioScale.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(ratioScale.isDeprecated),
        "isMaximumInclusive": this.getToJsonObjectConverter("isMaximumInclusive")(ratioScale.isMaximumInclusive),
        "isMinimumInclusive": this.getToJsonObjectConverter("isMinimumInclusive")(ratioScale.isMinimumInclusive),
        "mappingToReferenceScale": this.getToJsonObjectConverter("mappingToReferenceScale")((typeof(ratioScale.mappingToReferenceScale) != "undefined" && ratioScale.mappingToReferenceScale != null) ? Object.assign([], ratioScale.mappingToReferenceScale).sort() : ratioScale.mappingToReferenceScale),
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
        "valueDefinition": this.getToJsonObjectConverter("valueDefinition")((typeof(ratioScale.valueDefinition) != "undefined" && ratioScale.valueDefinition != null) ? Object.assign([], ratioScale.valueDefinition).sort() : ratioScale.valueDefinition),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RatioScale
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ReferencerRule to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let referencerRule = <Dto.ReferencerRule>thing;
      if (typeof(referencerRule) == "undefined" || referencerRule == null) {
        throw new Error("The object is not ReferencerRule");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(referencerRule.alias) != "undefined" && referencerRule.alias != null) ? Object.assign([], referencerRule.alias).sort() : referencerRule.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(referencerRule.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(referencerRule.definition) != "undefined" && referencerRule.definition != null) ? Object.assign([], referencerRule.definition).sort() : referencerRule.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(referencerRule.excludedDomain) != "undefined" && referencerRule.excludedDomain != null) ? Object.assign([], referencerRule.excludedDomain).sort() : referencerRule.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(referencerRule.excludedPerson) != "undefined" && referencerRule.excludedPerson != null) ? Object.assign([], referencerRule.excludedPerson).sort() : referencerRule.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(referencerRule.hyperLink) != "undefined" && referencerRule.hyperLink != null) ? Object.assign([], referencerRule.hyperLink).sort() : referencerRule.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(referencerRule.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(referencerRule.isDeprecated),
        "maxReferenced": this.getToJsonObjectConverter("maxReferenced")(referencerRule.maxReferenced),
        "minReferenced": this.getToJsonObjectConverter("minReferenced")(referencerRule.minReferenced),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(referencerRule.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(referencerRule.name),
        "referencedCategory": this.getToJsonObjectConverter("referencedCategory")((typeof(referencerRule.referencedCategory) != "undefined" && referencerRule.referencedCategory != null) ? Object.assign([], referencerRule.referencedCategory).sort() : referencerRule.referencedCategory),
        "referencingCategory": this.getToJsonObjectConverter("referencingCategory")(referencerRule.referencingCategory),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(referencerRule.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(referencerRule.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ReferencerRule
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
        "versionIdentifier": (value: any) => { return value; },
      };
    }

    /**
     * Converts ReferenceSource to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let referenceSource = <Dto.ReferenceSource>thing;
      if (typeof(referenceSource) == "undefined" || referenceSource == null) {
        throw new Error("The object is not ReferenceSource");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(referenceSource.alias) != "undefined" && referenceSource.alias != null) ? Object.assign([], referenceSource.alias).sort() : referenceSource.alias),
        "author": this.getToJsonObjectConverter("author")(referenceSource.author),
        "category": this.getToJsonObjectConverter("category")((typeof(referenceSource.category) != "undefined" && referenceSource.category != null) ? Object.assign([], referenceSource.category).sort() : referenceSource.category),
        "classKind": this.getToJsonObjectConverter("classKind")(referenceSource.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(referenceSource.definition) != "undefined" && referenceSource.definition != null) ? Object.assign([], referenceSource.definition).sort() : referenceSource.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(referenceSource.excludedDomain) != "undefined" && referenceSource.excludedDomain != null) ? Object.assign([], referenceSource.excludedDomain).sort() : referenceSource.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(referenceSource.excludedPerson) != "undefined" && referenceSource.excludedPerson != null) ? Object.assign([], referenceSource.excludedPerson).sort() : referenceSource.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(referenceSource.hyperLink) != "undefined" && referenceSource.hyperLink != null) ? Object.assign([], referenceSource.hyperLink).sort() : referenceSource.hyperLink),
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
        "versionIdentifier": this.getToJsonObjectConverter("versionIdentifier")(referenceSource.versionIdentifier),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ReferenceSource
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
        "value": (value: any) => { return toJsonValueArray(<string[]>value); },
      };
    }

    /**
     * Converts RelationalExpression to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let relationalExpression = <Dto.RelationalExpression>thing;
      if (typeof(relationalExpression) == "undefined" || relationalExpression == null) {
        throw new Error("The object is not RelationalExpression");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(relationalExpression.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(relationalExpression.excludedDomain) != "undefined" && relationalExpression.excludedDomain != null) ? Object.assign([], relationalExpression.excludedDomain).sort() : relationalExpression.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(relationalExpression.excludedPerson) != "undefined" && relationalExpression.excludedPerson != null) ? Object.assign([], relationalExpression.excludedPerson).sort() : relationalExpression.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(relationalExpression.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(relationalExpression.modifiedOn),
        "parameterType": this.getToJsonObjectConverter("parameterType")(relationalExpression.parameterType),
        "relationalOperator": this.getToJsonObjectConverter("relationalOperator")(relationalExpression.relationalOperator),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(relationalExpression.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(relationalExpression.scale),
        "value": this.getToJsonObjectConverter("value")(relationalExpression.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RelationalExpression
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
        "value": (value: any) => { return toJsonValueArray(<string[]>value); },
      };
    }

    /**
     * Converts RelationshipParameterValue to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let relationshipParameterValue = <Dto.RelationshipParameterValue>thing;
      if (typeof(relationshipParameterValue) == "undefined" || relationshipParameterValue == null) {
        throw new Error("The object is not RelationshipParameterValue");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(relationshipParameterValue.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(relationshipParameterValue.excludedDomain) != "undefined" && relationshipParameterValue.excludedDomain != null) ? Object.assign([], relationshipParameterValue.excludedDomain).sort() : relationshipParameterValue.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(relationshipParameterValue.excludedPerson) != "undefined" && relationshipParameterValue.excludedPerson != null) ? Object.assign([], relationshipParameterValue.excludedPerson).sort() : relationshipParameterValue.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(relationshipParameterValue.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(relationshipParameterValue.modifiedOn),
        "parameterType": this.getToJsonObjectConverter("parameterType")(relationshipParameterValue.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(relationshipParameterValue.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(relationshipParameterValue.scale),
        "value": this.getToJsonObjectConverter("value")(relationshipParameterValue.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RelationshipParameterValue
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts RequestForDeviation to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requestForDeviation = <Dto.RequestForDeviation>thing;
      if (typeof(requestForDeviation) == "undefined" || requestForDeviation == null) {
        throw new Error("The object is not RequestForDeviation");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(requestForDeviation.approvedBy) != "undefined" && requestForDeviation.approvedBy != null) ? Object.assign([], requestForDeviation.approvedBy).sort() : requestForDeviation.approvedBy),
        "author": this.getToJsonObjectConverter("author")(requestForDeviation.author),
        "category": this.getToJsonObjectConverter("category")((typeof(requestForDeviation.category) != "undefined" && requestForDeviation.category != null) ? Object.assign([], requestForDeviation.category).sort() : requestForDeviation.category),
        "classification": this.getToJsonObjectConverter("classification")(requestForDeviation.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(requestForDeviation.classKind),
        "content": this.getToJsonObjectConverter("content")(requestForDeviation.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(requestForDeviation.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(requestForDeviation.discussion) != "undefined" && requestForDeviation.discussion != null) ? Object.assign([], requestForDeviation.discussion).sort() : requestForDeviation.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requestForDeviation.excludedDomain) != "undefined" && requestForDeviation.excludedDomain != null) ? Object.assign([], requestForDeviation.excludedDomain).sort() : requestForDeviation.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requestForDeviation.excludedPerson) != "undefined" && requestForDeviation.excludedPerson != null) ? Object.assign([], requestForDeviation.excludedPerson).sort() : requestForDeviation.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(requestForDeviation.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(requestForDeviation.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requestForDeviation.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(requestForDeviation.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(requestForDeviation.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(requestForDeviation.relatedThing) != "undefined" && requestForDeviation.relatedThing != null) ? Object.assign([], requestForDeviation.relatedThing).sort() : requestForDeviation.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requestForDeviation.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(requestForDeviation.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(requestForDeviation.sourceAnnotation) != "undefined" && requestForDeviation.sourceAnnotation != null) ? Object.assign([], requestForDeviation.sourceAnnotation).sort() : requestForDeviation.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(requestForDeviation.status),
        "title": this.getToJsonObjectConverter("title")(requestForDeviation.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RequestForDeviation
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts RequestForWaiver to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requestForWaiver = <Dto.RequestForWaiver>thing;
      if (typeof(requestForWaiver) == "undefined" || requestForWaiver == null) {
        throw new Error("The object is not RequestForWaiver");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(requestForWaiver.approvedBy) != "undefined" && requestForWaiver.approvedBy != null) ? Object.assign([], requestForWaiver.approvedBy).sort() : requestForWaiver.approvedBy),
        "author": this.getToJsonObjectConverter("author")(requestForWaiver.author),
        "category": this.getToJsonObjectConverter("category")((typeof(requestForWaiver.category) != "undefined" && requestForWaiver.category != null) ? Object.assign([], requestForWaiver.category).sort() : requestForWaiver.category),
        "classification": this.getToJsonObjectConverter("classification")(requestForWaiver.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(requestForWaiver.classKind),
        "content": this.getToJsonObjectConverter("content")(requestForWaiver.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(requestForWaiver.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(requestForWaiver.discussion) != "undefined" && requestForWaiver.discussion != null) ? Object.assign([], requestForWaiver.discussion).sort() : requestForWaiver.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requestForWaiver.excludedDomain) != "undefined" && requestForWaiver.excludedDomain != null) ? Object.assign([], requestForWaiver.excludedDomain).sort() : requestForWaiver.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requestForWaiver.excludedPerson) != "undefined" && requestForWaiver.excludedPerson != null) ? Object.assign([], requestForWaiver.excludedPerson).sort() : requestForWaiver.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(requestForWaiver.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(requestForWaiver.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requestForWaiver.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(requestForWaiver.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(requestForWaiver.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(requestForWaiver.relatedThing) != "undefined" && requestForWaiver.relatedThing != null) ? Object.assign([], requestForWaiver.relatedThing).sort() : requestForWaiver.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requestForWaiver.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(requestForWaiver.shortName),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(requestForWaiver.sourceAnnotation) != "undefined" && requestForWaiver.sourceAnnotation != null) ? Object.assign([], requestForWaiver.sourceAnnotation).sort() : requestForWaiver.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(requestForWaiver.status),
        "title": this.getToJsonObjectConverter("title")(requestForWaiver.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RequestForWaiver
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Requirement to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requirement = <Dto.Requirement>thing;
      if (typeof(requirement) == "undefined" || requirement == null) {
        throw new Error("The object is not Requirement");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(requirement.alias) != "undefined" && requirement.alias != null) ? Object.assign([], requirement.alias).sort() : requirement.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(requirement.category) != "undefined" && requirement.category != null) ? Object.assign([], requirement.category).sort() : requirement.category),
        "classKind": this.getToJsonObjectConverter("classKind")(requirement.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(requirement.definition) != "undefined" && requirement.definition != null) ? Object.assign([], requirement.definition).sort() : requirement.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requirement.excludedDomain) != "undefined" && requirement.excludedDomain != null) ? Object.assign([], requirement.excludedDomain).sort() : requirement.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requirement.excludedPerson) != "undefined" && requirement.excludedPerson != null) ? Object.assign([], requirement.excludedPerson).sort() : requirement.excludedPerson),
        "group": this.getToJsonObjectConverter("group")(requirement.group),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(requirement.hyperLink) != "undefined" && requirement.hyperLink != null) ? Object.assign([], requirement.hyperLink).sort() : requirement.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(requirement.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(requirement.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirement.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(requirement.name),
        "owner": this.getToJsonObjectConverter("owner")(requirement.owner),
        "parameterValue": this.getToJsonObjectConverter("parameterValue")((typeof(requirement.parameterValue) != "undefined" && requirement.parameterValue != null) ? Object.assign([], requirement.parameterValue).sort() : requirement.parameterValue),
        "parametricConstraint": this.getToJsonObjectConverter("parametricConstraint")(requirement.parametricConstraint),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirement.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(requirement.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Requirement
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
        "value": (value: any) => { return toJsonValueArray(<string[]>value); },
      };
    }

    /**
     * Converts RequirementsContainerParameterValue to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requirementsContainerParameterValue = <Dto.RequirementsContainerParameterValue>thing;
      if (typeof(requirementsContainerParameterValue) == "undefined" || requirementsContainerParameterValue == null) {
        throw new Error("The object is not RequirementsContainerParameterValue");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(requirementsContainerParameterValue.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requirementsContainerParameterValue.excludedDomain) != "undefined" && requirementsContainerParameterValue.excludedDomain != null) ? Object.assign([], requirementsContainerParameterValue.excludedDomain).sort() : requirementsContainerParameterValue.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requirementsContainerParameterValue.excludedPerson) != "undefined" && requirementsContainerParameterValue.excludedPerson != null) ? Object.assign([], requirementsContainerParameterValue.excludedPerson).sort() : requirementsContainerParameterValue.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(requirementsContainerParameterValue.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsContainerParameterValue.modifiedOn),
        "parameterType": this.getToJsonObjectConverter("parameterType")(requirementsContainerParameterValue.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsContainerParameterValue.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(requirementsContainerParameterValue.scale),
        "value": this.getToJsonObjectConverter("value")(requirementsContainerParameterValue.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RequirementsContainerParameterValue
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts RequirementsGroup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requirementsGroup = <Dto.RequirementsGroup>thing;
      if (typeof(requirementsGroup) == "undefined" || requirementsGroup == null) {
        throw new Error("The object is not RequirementsGroup");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(requirementsGroup.alias) != "undefined" && requirementsGroup.alias != null) ? Object.assign([], requirementsGroup.alias).sort() : requirementsGroup.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(requirementsGroup.category) != "undefined" && requirementsGroup.category != null) ? Object.assign([], requirementsGroup.category).sort() : requirementsGroup.category),
        "classKind": this.getToJsonObjectConverter("classKind")(requirementsGroup.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(requirementsGroup.definition) != "undefined" && requirementsGroup.definition != null) ? Object.assign([], requirementsGroup.definition).sort() : requirementsGroup.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requirementsGroup.excludedDomain) != "undefined" && requirementsGroup.excludedDomain != null) ? Object.assign([], requirementsGroup.excludedDomain).sort() : requirementsGroup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requirementsGroup.excludedPerson) != "undefined" && requirementsGroup.excludedPerson != null) ? Object.assign([], requirementsGroup.excludedPerson).sort() : requirementsGroup.excludedPerson),
        "group": this.getToJsonObjectConverter("group")((typeof(requirementsGroup.group) != "undefined" && requirementsGroup.group != null) ? Object.assign([], requirementsGroup.group).sort() : requirementsGroup.group),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(requirementsGroup.hyperLink) != "undefined" && requirementsGroup.hyperLink != null) ? Object.assign([], requirementsGroup.hyperLink).sort() : requirementsGroup.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(requirementsGroup.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsGroup.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(requirementsGroup.name),
        "owner": this.getToJsonObjectConverter("owner")(requirementsGroup.owner),
        "parameterValue": this.getToJsonObjectConverter("parameterValue")((typeof(requirementsGroup.parameterValue) != "undefined" && requirementsGroup.parameterValue != null) ? Object.assign([], requirementsGroup.parameterValue).sort() : requirementsGroup.parameterValue),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsGroup.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(requirementsGroup.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RequirementsGroup
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts RequirementsSpecification to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let requirementsSpecification = <Dto.RequirementsSpecification>thing;
      if (typeof(requirementsSpecification) == "undefined" || requirementsSpecification == null) {
        throw new Error("The object is not RequirementsSpecification");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(requirementsSpecification.alias) != "undefined" && requirementsSpecification.alias != null) ? Object.assign([], requirementsSpecification.alias).sort() : requirementsSpecification.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(requirementsSpecification.category) != "undefined" && requirementsSpecification.category != null) ? Object.assign([], requirementsSpecification.category).sort() : requirementsSpecification.category),
        "classKind": this.getToJsonObjectConverter("classKind")(requirementsSpecification.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(requirementsSpecification.definition) != "undefined" && requirementsSpecification.definition != null) ? Object.assign([], requirementsSpecification.definition).sort() : requirementsSpecification.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(requirementsSpecification.excludedDomain) != "undefined" && requirementsSpecification.excludedDomain != null) ? Object.assign([], requirementsSpecification.excludedDomain).sort() : requirementsSpecification.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(requirementsSpecification.excludedPerson) != "undefined" && requirementsSpecification.excludedPerson != null) ? Object.assign([], requirementsSpecification.excludedPerson).sort() : requirementsSpecification.excludedPerson),
        "group": this.getToJsonObjectConverter("group")((typeof(requirementsSpecification.group) != "undefined" && requirementsSpecification.group != null) ? Object.assign([], requirementsSpecification.group).sort() : requirementsSpecification.group),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(requirementsSpecification.hyperLink) != "undefined" && requirementsSpecification.hyperLink != null) ? Object.assign([], requirementsSpecification.hyperLink).sort() : requirementsSpecification.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(requirementsSpecification.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(requirementsSpecification.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(requirementsSpecification.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(requirementsSpecification.name),
        "owner": this.getToJsonObjectConverter("owner")(requirementsSpecification.owner),
        "parameterValue": this.getToJsonObjectConverter("parameterValue")((typeof(requirementsSpecification.parameterValue) != "undefined" && requirementsSpecification.parameterValue != null) ? Object.assign([], requirementsSpecification.parameterValue).sort() : requirementsSpecification.parameterValue),
        "requirement": this.getToJsonObjectConverter("requirement")((typeof(requirementsSpecification.requirement) != "undefined" && requirementsSpecification.requirement != null) ? Object.assign([], requirementsSpecification.requirement).sort() : requirementsSpecification.requirement),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(requirementsSpecification.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(requirementsSpecification.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RequirementsSpecification
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
        "title": (value: any) => { return value; },
      };
    }

    /**
     * Converts ReviewItemDiscrepancy to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let reviewItemDiscrepancy = <Dto.ReviewItemDiscrepancy>thing;
      if (typeof(reviewItemDiscrepancy) == "undefined" || reviewItemDiscrepancy == null) {
        throw new Error("The object is not ReviewItemDiscrepancy");
      }

      let jsonObject = {
        "approvedBy": this.getToJsonObjectConverter("approvedBy")((typeof(reviewItemDiscrepancy.approvedBy) != "undefined" && reviewItemDiscrepancy.approvedBy != null) ? Object.assign([], reviewItemDiscrepancy.approvedBy).sort() : reviewItemDiscrepancy.approvedBy),
        "author": this.getToJsonObjectConverter("author")(reviewItemDiscrepancy.author),
        "category": this.getToJsonObjectConverter("category")((typeof(reviewItemDiscrepancy.category) != "undefined" && reviewItemDiscrepancy.category != null) ? Object.assign([], reviewItemDiscrepancy.category).sort() : reviewItemDiscrepancy.category),
        "classification": this.getToJsonObjectConverter("classification")(reviewItemDiscrepancy.classification),
        "classKind": this.getToJsonObjectConverter("classKind")(reviewItemDiscrepancy.classKind),
        "content": this.getToJsonObjectConverter("content")(reviewItemDiscrepancy.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(reviewItemDiscrepancy.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(reviewItemDiscrepancy.discussion) != "undefined" && reviewItemDiscrepancy.discussion != null) ? Object.assign([], reviewItemDiscrepancy.discussion).sort() : reviewItemDiscrepancy.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(reviewItemDiscrepancy.excludedDomain) != "undefined" && reviewItemDiscrepancy.excludedDomain != null) ? Object.assign([], reviewItemDiscrepancy.excludedDomain).sort() : reviewItemDiscrepancy.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(reviewItemDiscrepancy.excludedPerson) != "undefined" && reviewItemDiscrepancy.excludedPerson != null) ? Object.assign([], reviewItemDiscrepancy.excludedPerson).sort() : reviewItemDiscrepancy.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(reviewItemDiscrepancy.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(reviewItemDiscrepancy.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(reviewItemDiscrepancy.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(reviewItemDiscrepancy.owner),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(reviewItemDiscrepancy.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(reviewItemDiscrepancy.relatedThing) != "undefined" && reviewItemDiscrepancy.relatedThing != null) ? Object.assign([], reviewItemDiscrepancy.relatedThing).sort() : reviewItemDiscrepancy.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(reviewItemDiscrepancy.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(reviewItemDiscrepancy.shortName),
        "solution": this.getToJsonObjectConverter("solution")((typeof(reviewItemDiscrepancy.solution) != "undefined" && reviewItemDiscrepancy.solution != null) ? Object.assign([], reviewItemDiscrepancy.solution).sort() : reviewItemDiscrepancy.solution),
        "sourceAnnotation": this.getToJsonObjectConverter("sourceAnnotation")((typeof(reviewItemDiscrepancy.sourceAnnotation) != "undefined" && reviewItemDiscrepancy.sourceAnnotation != null) ? Object.assign([], reviewItemDiscrepancy.sourceAnnotation).sort() : reviewItemDiscrepancy.sourceAnnotation),
        "status": this.getToJsonObjectConverter("status")(reviewItemDiscrepancy.status),
        "title": this.getToJsonObjectConverter("title")(reviewItemDiscrepancy.title),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ReviewItemDiscrepancy
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts RuleVerificationList to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let ruleVerificationList = <Dto.RuleVerificationList>thing;
      if (typeof(ruleVerificationList) == "undefined" || ruleVerificationList == null) {
        throw new Error("The object is not RuleVerificationList");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(ruleVerificationList.alias) != "undefined" && ruleVerificationList.alias != null) ? Object.assign([], ruleVerificationList.alias).sort() : ruleVerificationList.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(ruleVerificationList.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(ruleVerificationList.definition) != "undefined" && ruleVerificationList.definition != null) ? Object.assign([], ruleVerificationList.definition).sort() : ruleVerificationList.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(ruleVerificationList.excludedDomain) != "undefined" && ruleVerificationList.excludedDomain != null) ? Object.assign([], ruleVerificationList.excludedDomain).sort() : ruleVerificationList.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(ruleVerificationList.excludedPerson) != "undefined" && ruleVerificationList.excludedPerson != null) ? Object.assign([], ruleVerificationList.excludedPerson).sort() : ruleVerificationList.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(ruleVerificationList.hyperLink) != "undefined" && ruleVerificationList.hyperLink != null) ? Object.assign([], ruleVerificationList.hyperLink).sort() : ruleVerificationList.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(ruleVerificationList.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ruleVerificationList.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(ruleVerificationList.name),
        "owner": this.getToJsonObjectConverter("owner")(ruleVerificationList.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ruleVerificationList.revisionNumber),
        "ruleVerification": this.getToJsonObjectConverter("ruleVerification")(ruleVerificationList.ruleVerification),
        "shortName": this.getToJsonObjectConverter("shortName")(ruleVerificationList.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RuleVerificationList
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
        "violatingThing": (value: any) => { return value; },
      };
    }

    /**
     * Converts RuleViolation to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let ruleViolation = <Dto.RuleViolation>thing;
      if (typeof(ruleViolation) == "undefined" || ruleViolation == null) {
        throw new Error("The object is not RuleViolation");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(ruleViolation.classKind),
        "description": this.getToJsonObjectConverter("description")(ruleViolation.description),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(ruleViolation.excludedDomain) != "undefined" && ruleViolation.excludedDomain != null) ? Object.assign([], ruleViolation.excludedDomain).sort() : ruleViolation.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(ruleViolation.excludedPerson) != "undefined" && ruleViolation.excludedPerson != null) ? Object.assign([], ruleViolation.excludedPerson).sort() : ruleViolation.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(ruleViolation.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(ruleViolation.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(ruleViolation.revisionNumber),
        "violatingThing": this.getToJsonObjectConverter("violatingThing")((typeof(ruleViolation.violatingThing) != "undefined" && ruleViolation.violatingThing != null) ? Object.assign([], ruleViolation.violatingThing).sort() : ruleViolation.violatingThing),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to RuleViolation
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
        "value": (value: any) => { return value; },
      };
    }

    /**
     * Converts ScaleReferenceQuantityValue to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let scaleReferenceQuantityValue = <Dto.ScaleReferenceQuantityValue>thing;
      if (typeof(scaleReferenceQuantityValue) == "undefined" || scaleReferenceQuantityValue == null) {
        throw new Error("The object is not ScaleReferenceQuantityValue");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(scaleReferenceQuantityValue.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(scaleReferenceQuantityValue.excludedDomain) != "undefined" && scaleReferenceQuantityValue.excludedDomain != null) ? Object.assign([], scaleReferenceQuantityValue.excludedDomain).sort() : scaleReferenceQuantityValue.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(scaleReferenceQuantityValue.excludedPerson) != "undefined" && scaleReferenceQuantityValue.excludedPerson != null) ? Object.assign([], scaleReferenceQuantityValue.excludedPerson).sort() : scaleReferenceQuantityValue.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(scaleReferenceQuantityValue.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(scaleReferenceQuantityValue.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(scaleReferenceQuantityValue.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(scaleReferenceQuantityValue.scale),
        "value": this.getToJsonObjectConverter("value")(scaleReferenceQuantityValue.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ScaleReferenceQuantityValue
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
        "value": (value: any) => { return value; },
      };
    }

    /**
     * Converts ScaleValueDefinition to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let scaleValueDefinition = <Dto.ScaleValueDefinition>thing;
      if (typeof(scaleValueDefinition) == "undefined" || scaleValueDefinition == null) {
        throw new Error("The object is not ScaleValueDefinition");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(scaleValueDefinition.alias) != "undefined" && scaleValueDefinition.alias != null) ? Object.assign([], scaleValueDefinition.alias).sort() : scaleValueDefinition.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(scaleValueDefinition.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(scaleValueDefinition.definition) != "undefined" && scaleValueDefinition.definition != null) ? Object.assign([], scaleValueDefinition.definition).sort() : scaleValueDefinition.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(scaleValueDefinition.excludedDomain) != "undefined" && scaleValueDefinition.excludedDomain != null) ? Object.assign([], scaleValueDefinition.excludedDomain).sort() : scaleValueDefinition.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(scaleValueDefinition.excludedPerson) != "undefined" && scaleValueDefinition.excludedPerson != null) ? Object.assign([], scaleValueDefinition.excludedPerson).sort() : scaleValueDefinition.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(scaleValueDefinition.hyperLink) != "undefined" && scaleValueDefinition.hyperLink != null) ? Object.assign([], scaleValueDefinition.hyperLink).sort() : scaleValueDefinition.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(scaleValueDefinition.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(scaleValueDefinition.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(scaleValueDefinition.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(scaleValueDefinition.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(scaleValueDefinition.shortName),
        "value": this.getToJsonObjectConverter("value")(scaleValueDefinition.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ScaleValueDefinition
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Section to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let section = <Dto.Section>thing;
      if (typeof(section) == "undefined" || section == null) {
        throw new Error("The object is not Section");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(section.category) != "undefined" && section.category != null) ? Object.assign([], section.category).sort() : section.category),
        "classKind": this.getToJsonObjectConverter("classKind")(section.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(section.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(section.excludedDomain) != "undefined" && section.excludedDomain != null) ? Object.assign([], section.excludedDomain).sort() : section.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(section.excludedPerson) != "undefined" && section.excludedPerson != null) ? Object.assign([], section.excludedPerson).sort() : section.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(section.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(section.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(section.name),
        "owner": this.getToJsonObjectConverter("owner")(section.owner),
        "page": this.getToJsonObjectConverter("page")(section.page),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(section.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(section.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Section
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
        "usedColor": (value: any) => { return value; },
      };
    }

    /**
     * Converts SharedStyle to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let sharedStyle = <Dto.SharedStyle>thing;
      if (typeof(sharedStyle) == "undefined" || sharedStyle == null) {
        throw new Error("The object is not SharedStyle");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(sharedStyle.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(sharedStyle.excludedDomain) != "undefined" && sharedStyle.excludedDomain != null) ? Object.assign([], sharedStyle.excludedDomain).sort() : sharedStyle.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(sharedStyle.excludedPerson) != "undefined" && sharedStyle.excludedPerson != null) ? Object.assign([], sharedStyle.excludedPerson).sort() : sharedStyle.excludedPerson),
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
        "usedColor": this.getToJsonObjectConverter("usedColor")((typeof(sharedStyle.usedColor) != "undefined" && sharedStyle.usedColor != null) ? Object.assign([], sharedStyle.usedColor).sort() : sharedStyle.usedColor),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SharedStyle
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
        "value": (value: any) => { return toJsonValueArray(<string[]>value); },
      };
    }

    /**
     * Converts SimpleParameterValue to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let simpleParameterValue = <Dto.SimpleParameterValue>thing;
      if (typeof(simpleParameterValue) == "undefined" || simpleParameterValue == null) {
        throw new Error("The object is not SimpleParameterValue");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(simpleParameterValue.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(simpleParameterValue.excludedDomain) != "undefined" && simpleParameterValue.excludedDomain != null) ? Object.assign([], simpleParameterValue.excludedDomain).sort() : simpleParameterValue.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(simpleParameterValue.excludedPerson) != "undefined" && simpleParameterValue.excludedPerson != null) ? Object.assign([], simpleParameterValue.excludedPerson).sort() : simpleParameterValue.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(simpleParameterValue.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleParameterValue.modifiedOn),
        "parameterType": this.getToJsonObjectConverter("parameterType")(simpleParameterValue.parameterType),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleParameterValue.revisionNumber),
        "scale": this.getToJsonObjectConverter("scale")(simpleParameterValue.scale),
        "value": this.getToJsonObjectConverter("value")(simpleParameterValue.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SimpleParameterValue
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts SimpleQuantityKind to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let simpleQuantityKind = <Dto.SimpleQuantityKind>thing;
      if (typeof(simpleQuantityKind) == "undefined" || simpleQuantityKind == null) {
        throw new Error("The object is not SimpleQuantityKind");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(simpleQuantityKind.alias) != "undefined" && simpleQuantityKind.alias != null) ? Object.assign([], simpleQuantityKind.alias).sort() : simpleQuantityKind.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(simpleQuantityKind.category) != "undefined" && simpleQuantityKind.category != null) ? Object.assign([], simpleQuantityKind.category).sort() : simpleQuantityKind.category),
        "classKind": this.getToJsonObjectConverter("classKind")(simpleQuantityKind.classKind),
        "defaultScale": this.getToJsonObjectConverter("defaultScale")(simpleQuantityKind.defaultScale),
        "definition": this.getToJsonObjectConverter("definition")((typeof(simpleQuantityKind.definition) != "undefined" && simpleQuantityKind.definition != null) ? Object.assign([], simpleQuantityKind.definition).sort() : simpleQuantityKind.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(simpleQuantityKind.excludedDomain) != "undefined" && simpleQuantityKind.excludedDomain != null) ? Object.assign([], simpleQuantityKind.excludedDomain).sort() : simpleQuantityKind.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(simpleQuantityKind.excludedPerson) != "undefined" && simpleQuantityKind.excludedPerson != null) ? Object.assign([], simpleQuantityKind.excludedPerson).sort() : simpleQuantityKind.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(simpleQuantityKind.hyperLink) != "undefined" && simpleQuantityKind.hyperLink != null) ? Object.assign([], simpleQuantityKind.hyperLink).sort() : simpleQuantityKind.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(simpleQuantityKind.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(simpleQuantityKind.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleQuantityKind.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(simpleQuantityKind.name),
        "possibleScale": this.getToJsonObjectConverter("possibleScale")((typeof(simpleQuantityKind.possibleScale) != "undefined" && simpleQuantityKind.possibleScale != null) ? Object.assign([], simpleQuantityKind.possibleScale).sort() : simpleQuantityKind.possibleScale),
        "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(simpleQuantityKind.quantityDimensionSymbol),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleQuantityKind.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(simpleQuantityKind.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(simpleQuantityKind.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SimpleQuantityKind
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts SimpleUnit to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let simpleUnit = <Dto.SimpleUnit>thing;
      if (typeof(simpleUnit) == "undefined" || simpleUnit == null) {
        throw new Error("The object is not SimpleUnit");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(simpleUnit.alias) != "undefined" && simpleUnit.alias != null) ? Object.assign([], simpleUnit.alias).sort() : simpleUnit.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(simpleUnit.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(simpleUnit.definition) != "undefined" && simpleUnit.definition != null) ? Object.assign([], simpleUnit.definition).sort() : simpleUnit.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(simpleUnit.excludedDomain) != "undefined" && simpleUnit.excludedDomain != null) ? Object.assign([], simpleUnit.excludedDomain).sort() : simpleUnit.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(simpleUnit.excludedPerson) != "undefined" && simpleUnit.excludedPerson != null) ? Object.assign([], simpleUnit.excludedPerson).sort() : simpleUnit.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(simpleUnit.hyperLink) != "undefined" && simpleUnit.hyperLink != null) ? Object.assign([], simpleUnit.hyperLink).sort() : simpleUnit.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(simpleUnit.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(simpleUnit.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(simpleUnit.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(simpleUnit.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(simpleUnit.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(simpleUnit.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SimpleUnit
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
        "siteReferenceDataLibrary": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteDirectory to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteDirectory = <Dto.SiteDirectory>thing;
      if (typeof(siteDirectory) == "undefined" || siteDirectory == null) {
        throw new Error("The object is not SiteDirectory");
      }

      let jsonObject = {
        "annotation": this.getToJsonObjectConverter("annotation")((typeof(siteDirectory.annotation) != "undefined" && siteDirectory.annotation != null) ? Object.assign([], siteDirectory.annotation).sort() : siteDirectory.annotation),
        "classKind": this.getToJsonObjectConverter("classKind")(siteDirectory.classKind),
        "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectory.createdOn),
        "defaultParticipantRole": this.getToJsonObjectConverter("defaultParticipantRole")(siteDirectory.defaultParticipantRole),
        "defaultPersonRole": this.getToJsonObjectConverter("defaultPersonRole")(siteDirectory.defaultPersonRole),
        "domain": this.getToJsonObjectConverter("domain")((typeof(siteDirectory.domain) != "undefined" && siteDirectory.domain != null) ? Object.assign([], siteDirectory.domain).sort() : siteDirectory.domain),
        "domainGroup": this.getToJsonObjectConverter("domainGroup")((typeof(siteDirectory.domainGroup) != "undefined" && siteDirectory.domainGroup != null) ? Object.assign([], siteDirectory.domainGroup).sort() : siteDirectory.domainGroup),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteDirectory.excludedDomain) != "undefined" && siteDirectory.excludedDomain != null) ? Object.assign([], siteDirectory.excludedDomain).sort() : siteDirectory.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteDirectory.excludedPerson) != "undefined" && siteDirectory.excludedPerson != null) ? Object.assign([], siteDirectory.excludedPerson).sort() : siteDirectory.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(siteDirectory.iid),
        "lastModifiedOn": this.getToJsonObjectConverter("lastModifiedOn")(siteDirectory.lastModifiedOn),
        "logEntry": this.getToJsonObjectConverter("logEntry")((typeof(siteDirectory.logEntry) != "undefined" && siteDirectory.logEntry != null) ? Object.assign([], siteDirectory.logEntry).sort() : siteDirectory.logEntry),
        "model": this.getToJsonObjectConverter("model")((typeof(siteDirectory.model) != "undefined" && siteDirectory.model != null) ? Object.assign([], siteDirectory.model).sort() : siteDirectory.model),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectory.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(siteDirectory.name),
        "naturalLanguage": this.getToJsonObjectConverter("naturalLanguage")((typeof(siteDirectory.naturalLanguage) != "undefined" && siteDirectory.naturalLanguage != null) ? Object.assign([], siteDirectory.naturalLanguage).sort() : siteDirectory.naturalLanguage),
        "organization": this.getToJsonObjectConverter("organization")((typeof(siteDirectory.organization) != "undefined" && siteDirectory.organization != null) ? Object.assign([], siteDirectory.organization).sort() : siteDirectory.organization),
        "participantRole": this.getToJsonObjectConverter("participantRole")((typeof(siteDirectory.participantRole) != "undefined" && siteDirectory.participantRole != null) ? Object.assign([], siteDirectory.participantRole).sort() : siteDirectory.participantRole),
        "person": this.getToJsonObjectConverter("person")((typeof(siteDirectory.person) != "undefined" && siteDirectory.person != null) ? Object.assign([], siteDirectory.person).sort() : siteDirectory.person),
        "personRole": this.getToJsonObjectConverter("personRole")((typeof(siteDirectory.personRole) != "undefined" && siteDirectory.personRole != null) ? Object.assign([], siteDirectory.personRole).sort() : siteDirectory.personRole),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectory.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(siteDirectory.shortName),
        "siteReferenceDataLibrary": this.getToJsonObjectConverter("siteReferenceDataLibrary")((typeof(siteDirectory.siteReferenceDataLibrary) != "undefined" && siteDirectory.siteReferenceDataLibrary != null) ? Object.assign([], siteDirectory.siteReferenceDataLibrary).sort() : siteDirectory.siteReferenceDataLibrary),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteDirectory
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteDirectoryDataAnnotation to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteDirectoryDataAnnotation = <Dto.SiteDirectoryDataAnnotation>thing;
      if (typeof(siteDirectoryDataAnnotation) == "undefined" || siteDirectoryDataAnnotation == null) {
        throw new Error("The object is not SiteDirectoryDataAnnotation");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(siteDirectoryDataAnnotation.author),
        "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryDataAnnotation.classKind),
        "content": this.getToJsonObjectConverter("content")(siteDirectoryDataAnnotation.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectoryDataAnnotation.createdOn),
        "discussion": this.getToJsonObjectConverter("discussion")((typeof(siteDirectoryDataAnnotation.discussion) != "undefined" && siteDirectoryDataAnnotation.discussion != null) ? Object.assign([], siteDirectoryDataAnnotation.discussion).sort() : siteDirectoryDataAnnotation.discussion),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteDirectoryDataAnnotation.excludedDomain) != "undefined" && siteDirectoryDataAnnotation.excludedDomain != null) ? Object.assign([], siteDirectoryDataAnnotation.excludedDomain).sort() : siteDirectoryDataAnnotation.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteDirectoryDataAnnotation.excludedPerson) != "undefined" && siteDirectoryDataAnnotation.excludedPerson != null) ? Object.assign([], siteDirectoryDataAnnotation.excludedPerson).sort() : siteDirectoryDataAnnotation.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(siteDirectoryDataAnnotation.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(siteDirectoryDataAnnotation.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryDataAnnotation.modifiedOn),
        "primaryAnnotatedThing": this.getToJsonObjectConverter("primaryAnnotatedThing")(siteDirectoryDataAnnotation.primaryAnnotatedThing),
        "relatedThing": this.getToJsonObjectConverter("relatedThing")((typeof(siteDirectoryDataAnnotation.relatedThing) != "undefined" && siteDirectoryDataAnnotation.relatedThing != null) ? Object.assign([], siteDirectoryDataAnnotation.relatedThing).sort() : siteDirectoryDataAnnotation.relatedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryDataAnnotation.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteDirectoryDataAnnotation
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteDirectoryDataDiscussionItem to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteDirectoryDataDiscussionItem = <Dto.SiteDirectoryDataDiscussionItem>thing;
      if (typeof(siteDirectoryDataDiscussionItem) == "undefined" || siteDirectoryDataDiscussionItem == null) {
        throw new Error("The object is not SiteDirectoryDataDiscussionItem");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(siteDirectoryDataDiscussionItem.author),
        "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryDataDiscussionItem.classKind),
        "content": this.getToJsonObjectConverter("content")(siteDirectoryDataDiscussionItem.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(siteDirectoryDataDiscussionItem.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteDirectoryDataDiscussionItem.excludedDomain) != "undefined" && siteDirectoryDataDiscussionItem.excludedDomain != null) ? Object.assign([], siteDirectoryDataDiscussionItem.excludedDomain).sort() : siteDirectoryDataDiscussionItem.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteDirectoryDataDiscussionItem.excludedPerson) != "undefined" && siteDirectoryDataDiscussionItem.excludedPerson != null) ? Object.assign([], siteDirectoryDataDiscussionItem.excludedPerson).sort() : siteDirectoryDataDiscussionItem.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(siteDirectoryDataDiscussionItem.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(siteDirectoryDataDiscussionItem.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryDataDiscussionItem.modifiedOn),
        "replyTo": this.getToJsonObjectConverter("replyTo")(siteDirectoryDataDiscussionItem.replyTo),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryDataDiscussionItem.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteDirectoryDataDiscussionItem
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteDirectoryThingReference to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteDirectoryThingReference = <Dto.SiteDirectoryThingReference>thing;
      if (typeof(siteDirectoryThingReference) == "undefined" || siteDirectoryThingReference == null) {
        throw new Error("The object is not SiteDirectoryThingReference");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(siteDirectoryThingReference.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteDirectoryThingReference.excludedDomain) != "undefined" && siteDirectoryThingReference.excludedDomain != null) ? Object.assign([], siteDirectoryThingReference.excludedDomain).sort() : siteDirectoryThingReference.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteDirectoryThingReference.excludedPerson) != "undefined" && siteDirectoryThingReference.excludedPerson != null) ? Object.assign([], siteDirectoryThingReference.excludedPerson).sort() : siteDirectoryThingReference.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(siteDirectoryThingReference.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteDirectoryThingReference.modifiedOn),
        "referencedRevisionNumber": this.getToJsonObjectConverter("referencedRevisionNumber")(siteDirectoryThingReference.referencedRevisionNumber),
        "referencedThing": this.getToJsonObjectConverter("referencedThing")(siteDirectoryThingReference.referencedThing),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteDirectoryThingReference.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteDirectoryThingReference
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteLogEntry to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteLogEntry = <Dto.SiteLogEntry>thing;
      if (typeof(siteLogEntry) == "undefined" || siteLogEntry == null) {
        throw new Error("The object is not SiteLogEntry");
      }

      let jsonObject = {
        "affectedItemIid": this.getToJsonObjectConverter("affectedItemIid")((typeof(siteLogEntry.affectedItemIid) != "undefined" && siteLogEntry.affectedItemIid != null) ? Object.assign([], siteLogEntry.affectedItemIid).sort() : siteLogEntry.affectedItemIid),
        "author": this.getToJsonObjectConverter("author")(siteLogEntry.author),
        "category": this.getToJsonObjectConverter("category")((typeof(siteLogEntry.category) != "undefined" && siteLogEntry.category != null) ? Object.assign([], siteLogEntry.category).sort() : siteLogEntry.category),
        "classKind": this.getToJsonObjectConverter("classKind")(siteLogEntry.classKind),
        "content": this.getToJsonObjectConverter("content")(siteLogEntry.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(siteLogEntry.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteLogEntry.excludedDomain) != "undefined" && siteLogEntry.excludedDomain != null) ? Object.assign([], siteLogEntry.excludedDomain).sort() : siteLogEntry.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteLogEntry.excludedPerson) != "undefined" && siteLogEntry.excludedPerson != null) ? Object.assign([], siteLogEntry.excludedPerson).sort() : siteLogEntry.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(siteLogEntry.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(siteLogEntry.languageCode),
        "level": this.getToJsonObjectConverter("level")(siteLogEntry.level),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteLogEntry.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteLogEntry.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteLogEntry
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
        "unitPrefix": (value: any) => { return value; },
      };
    }

    /**
     * Converts SiteReferenceDataLibrary to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let siteReferenceDataLibrary = <Dto.SiteReferenceDataLibrary>thing;
      if (typeof(siteReferenceDataLibrary) == "undefined" || siteReferenceDataLibrary == null) {
        throw new Error("The object is not SiteReferenceDataLibrary");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(siteReferenceDataLibrary.alias) != "undefined" && siteReferenceDataLibrary.alias != null) ? Object.assign([], siteReferenceDataLibrary.alias).sort() : siteReferenceDataLibrary.alias),
        "baseQuantityKind": this.getToJsonObjectConverter("baseQuantityKind")(siteReferenceDataLibrary.baseQuantityKind),
        "baseUnit": this.getToJsonObjectConverter("baseUnit")((typeof(siteReferenceDataLibrary.baseUnit) != "undefined" && siteReferenceDataLibrary.baseUnit != null) ? Object.assign([], siteReferenceDataLibrary.baseUnit).sort() : siteReferenceDataLibrary.baseUnit),
        "classKind": this.getToJsonObjectConverter("classKind")(siteReferenceDataLibrary.classKind),
        "constant": this.getToJsonObjectConverter("constant")((typeof(siteReferenceDataLibrary.constant) != "undefined" && siteReferenceDataLibrary.constant != null) ? Object.assign([], siteReferenceDataLibrary.constant).sort() : siteReferenceDataLibrary.constant),
        "definedCategory": this.getToJsonObjectConverter("definedCategory")((typeof(siteReferenceDataLibrary.definedCategory) != "undefined" && siteReferenceDataLibrary.definedCategory != null) ? Object.assign([], siteReferenceDataLibrary.definedCategory).sort() : siteReferenceDataLibrary.definedCategory),
        "definition": this.getToJsonObjectConverter("definition")((typeof(siteReferenceDataLibrary.definition) != "undefined" && siteReferenceDataLibrary.definition != null) ? Object.assign([], siteReferenceDataLibrary.definition).sort() : siteReferenceDataLibrary.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(siteReferenceDataLibrary.excludedDomain) != "undefined" && siteReferenceDataLibrary.excludedDomain != null) ? Object.assign([], siteReferenceDataLibrary.excludedDomain).sort() : siteReferenceDataLibrary.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(siteReferenceDataLibrary.excludedPerson) != "undefined" && siteReferenceDataLibrary.excludedPerson != null) ? Object.assign([], siteReferenceDataLibrary.excludedPerson).sort() : siteReferenceDataLibrary.excludedPerson),
        "fileType": this.getToJsonObjectConverter("fileType")((typeof(siteReferenceDataLibrary.fileType) != "undefined" && siteReferenceDataLibrary.fileType != null) ? Object.assign([], siteReferenceDataLibrary.fileType).sort() : siteReferenceDataLibrary.fileType),
        "glossary": this.getToJsonObjectConverter("glossary")((typeof(siteReferenceDataLibrary.glossary) != "undefined" && siteReferenceDataLibrary.glossary != null) ? Object.assign([], siteReferenceDataLibrary.glossary).sort() : siteReferenceDataLibrary.glossary),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(siteReferenceDataLibrary.hyperLink) != "undefined" && siteReferenceDataLibrary.hyperLink != null) ? Object.assign([], siteReferenceDataLibrary.hyperLink).sort() : siteReferenceDataLibrary.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(siteReferenceDataLibrary.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(siteReferenceDataLibrary.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(siteReferenceDataLibrary.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(siteReferenceDataLibrary.name),
        "parameterType": this.getToJsonObjectConverter("parameterType")((typeof(siteReferenceDataLibrary.parameterType) != "undefined" && siteReferenceDataLibrary.parameterType != null) ? Object.assign([], siteReferenceDataLibrary.parameterType).sort() : siteReferenceDataLibrary.parameterType),
        "referenceSource": this.getToJsonObjectConverter("referenceSource")((typeof(siteReferenceDataLibrary.referenceSource) != "undefined" && siteReferenceDataLibrary.referenceSource != null) ? Object.assign([], siteReferenceDataLibrary.referenceSource).sort() : siteReferenceDataLibrary.referenceSource),
        "requiredRdl": this.getToJsonObjectConverter("requiredRdl")(siteReferenceDataLibrary.requiredRdl),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(siteReferenceDataLibrary.revisionNumber),
        "rule": this.getToJsonObjectConverter("rule")((typeof(siteReferenceDataLibrary.rule) != "undefined" && siteReferenceDataLibrary.rule != null) ? Object.assign([], siteReferenceDataLibrary.rule).sort() : siteReferenceDataLibrary.rule),
        "scale": this.getToJsonObjectConverter("scale")((typeof(siteReferenceDataLibrary.scale) != "undefined" && siteReferenceDataLibrary.scale != null) ? Object.assign([], siteReferenceDataLibrary.scale).sort() : siteReferenceDataLibrary.scale),
        "shortName": this.getToJsonObjectConverter("shortName")(siteReferenceDataLibrary.shortName),
        "unit": this.getToJsonObjectConverter("unit")((typeof(siteReferenceDataLibrary.unit) != "undefined" && siteReferenceDataLibrary.unit != null) ? Object.assign([], siteReferenceDataLibrary.unit).sort() : siteReferenceDataLibrary.unit),
        "unitPrefix": this.getToJsonObjectConverter("unitPrefix")((typeof(siteReferenceDataLibrary.unitPrefix) != "undefined" && siteReferenceDataLibrary.unitPrefix != null) ? Object.assign([], siteReferenceDataLibrary.unitPrefix).sort() : siteReferenceDataLibrary.unitPrefix),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SiteReferenceDataLibrary
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
        "revisionNumber": (value: any) => { return value; },
      };
    }

    /**
     * Converts Solution to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let solution = <Dto.Solution>thing;
      if (typeof(solution) == "undefined" || solution == null) {
        throw new Error("The object is not Solution");
      }

      let jsonObject = {
        "author": this.getToJsonObjectConverter("author")(solution.author),
        "classKind": this.getToJsonObjectConverter("classKind")(solution.classKind),
        "content": this.getToJsonObjectConverter("content")(solution.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(solution.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(solution.excludedDomain) != "undefined" && solution.excludedDomain != null) ? Object.assign([], solution.excludedDomain).sort() : solution.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(solution.excludedPerson) != "undefined" && solution.excludedPerson != null) ? Object.assign([], solution.excludedPerson).sort() : solution.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(solution.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(solution.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(solution.modifiedOn),
        "owner": this.getToJsonObjectConverter("owner")(solution.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(solution.revisionNumber),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Solution
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts SpecializedQuantityKind to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let specializedQuantityKind = <Dto.SpecializedQuantityKind>thing;
      if (typeof(specializedQuantityKind) == "undefined" || specializedQuantityKind == null) {
        throw new Error("The object is not SpecializedQuantityKind");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(specializedQuantityKind.alias) != "undefined" && specializedQuantityKind.alias != null) ? Object.assign([], specializedQuantityKind.alias).sort() : specializedQuantityKind.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(specializedQuantityKind.category) != "undefined" && specializedQuantityKind.category != null) ? Object.assign([], specializedQuantityKind.category).sort() : specializedQuantityKind.category),
        "classKind": this.getToJsonObjectConverter("classKind")(specializedQuantityKind.classKind),
        "defaultScale": this.getToJsonObjectConverter("defaultScale")(specializedQuantityKind.defaultScale),
        "definition": this.getToJsonObjectConverter("definition")((typeof(specializedQuantityKind.definition) != "undefined" && specializedQuantityKind.definition != null) ? Object.assign([], specializedQuantityKind.definition).sort() : specializedQuantityKind.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(specializedQuantityKind.excludedDomain) != "undefined" && specializedQuantityKind.excludedDomain != null) ? Object.assign([], specializedQuantityKind.excludedDomain).sort() : specializedQuantityKind.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(specializedQuantityKind.excludedPerson) != "undefined" && specializedQuantityKind.excludedPerson != null) ? Object.assign([], specializedQuantityKind.excludedPerson).sort() : specializedQuantityKind.excludedPerson),
        "general": this.getToJsonObjectConverter("general")(specializedQuantityKind.general),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(specializedQuantityKind.hyperLink) != "undefined" && specializedQuantityKind.hyperLink != null) ? Object.assign([], specializedQuantityKind.hyperLink).sort() : specializedQuantityKind.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(specializedQuantityKind.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(specializedQuantityKind.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(specializedQuantityKind.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(specializedQuantityKind.name),
        "possibleScale": this.getToJsonObjectConverter("possibleScale")((typeof(specializedQuantityKind.possibleScale) != "undefined" && specializedQuantityKind.possibleScale != null) ? Object.assign([], specializedQuantityKind.possibleScale).sort() : specializedQuantityKind.possibleScale),
        "quantityDimensionSymbol": this.getToJsonObjectConverter("quantityDimensionSymbol")(specializedQuantityKind.quantityDimensionSymbol),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(specializedQuantityKind.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(specializedQuantityKind.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(specializedQuantityKind.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to SpecializedQuantityKind
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
        "stakeholderValue": (value: any) => { return value; },
      };
    }

    /**
     * Converts Stakeholder to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let stakeholder = <Dto.Stakeholder>thing;
      if (typeof(stakeholder) == "undefined" || stakeholder == null) {
        throw new Error("The object is not Stakeholder");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(stakeholder.alias) != "undefined" && stakeholder.alias != null) ? Object.assign([], stakeholder.alias).sort() : stakeholder.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(stakeholder.category) != "undefined" && stakeholder.category != null) ? Object.assign([], stakeholder.category).sort() : stakeholder.category),
        "classKind": this.getToJsonObjectConverter("classKind")(stakeholder.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(stakeholder.definition) != "undefined" && stakeholder.definition != null) ? Object.assign([], stakeholder.definition).sort() : stakeholder.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(stakeholder.excludedDomain) != "undefined" && stakeholder.excludedDomain != null) ? Object.assign([], stakeholder.excludedDomain).sort() : stakeholder.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(stakeholder.excludedPerson) != "undefined" && stakeholder.excludedPerson != null) ? Object.assign([], stakeholder.excludedPerson).sort() : stakeholder.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(stakeholder.hyperLink) != "undefined" && stakeholder.hyperLink != null) ? Object.assign([], stakeholder.hyperLink).sort() : stakeholder.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(stakeholder.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeholder.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(stakeholder.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeholder.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(stakeholder.shortName),
        "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")((typeof(stakeholder.stakeholderValue) != "undefined" && stakeholder.stakeholderValue != null) ? Object.assign([], stakeholder.stakeholderValue).sort() : stakeholder.stakeholderValue),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Stakeholder
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts StakeholderValue to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let stakeholderValue = <Dto.StakeholderValue>thing;
      if (typeof(stakeholderValue) == "undefined" || stakeholderValue == null) {
        throw new Error("The object is not StakeholderValue");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(stakeholderValue.alias) != "undefined" && stakeholderValue.alias != null) ? Object.assign([], stakeholderValue.alias).sort() : stakeholderValue.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(stakeholderValue.category) != "undefined" && stakeholderValue.category != null) ? Object.assign([], stakeholderValue.category).sort() : stakeholderValue.category),
        "classKind": this.getToJsonObjectConverter("classKind")(stakeholderValue.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(stakeholderValue.definition) != "undefined" && stakeholderValue.definition != null) ? Object.assign([], stakeholderValue.definition).sort() : stakeholderValue.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(stakeholderValue.excludedDomain) != "undefined" && stakeholderValue.excludedDomain != null) ? Object.assign([], stakeholderValue.excludedDomain).sort() : stakeholderValue.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(stakeholderValue.excludedPerson) != "undefined" && stakeholderValue.excludedPerson != null) ? Object.assign([], stakeholderValue.excludedPerson).sort() : stakeholderValue.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(stakeholderValue.hyperLink) != "undefined" && stakeholderValue.hyperLink != null) ? Object.assign([], stakeholderValue.hyperLink).sort() : stakeholderValue.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(stakeholderValue.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeholderValue.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(stakeholderValue.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeholderValue.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(stakeholderValue.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to StakeholderValue
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
        "valueGroup": (value: any) => { return value; },
      };
    }

    /**
     * Converts StakeHolderValueMap to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let stakeHolderValueMap = <Dto.StakeHolderValueMap>thing;
      if (typeof(stakeHolderValueMap) == "undefined" || stakeHolderValueMap == null) {
        throw new Error("The object is not StakeHolderValueMap");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(stakeHolderValueMap.alias) != "undefined" && stakeHolderValueMap.alias != null) ? Object.assign([], stakeHolderValueMap.alias).sort() : stakeHolderValueMap.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(stakeHolderValueMap.category) != "undefined" && stakeHolderValueMap.category != null) ? Object.assign([], stakeHolderValueMap.category).sort() : stakeHolderValueMap.category),
        "classKind": this.getToJsonObjectConverter("classKind")(stakeHolderValueMap.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(stakeHolderValueMap.definition) != "undefined" && stakeHolderValueMap.definition != null) ? Object.assign([], stakeHolderValueMap.definition).sort() : stakeHolderValueMap.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(stakeHolderValueMap.excludedDomain) != "undefined" && stakeHolderValueMap.excludedDomain != null) ? Object.assign([], stakeHolderValueMap.excludedDomain).sort() : stakeHolderValueMap.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(stakeHolderValueMap.excludedPerson) != "undefined" && stakeHolderValueMap.excludedPerson != null) ? Object.assign([], stakeHolderValueMap.excludedPerson).sort() : stakeHolderValueMap.excludedPerson),
        "goal": this.getToJsonObjectConverter("goal")((typeof(stakeHolderValueMap.goal) != "undefined" && stakeHolderValueMap.goal != null) ? Object.assign([], stakeHolderValueMap.goal).sort() : stakeHolderValueMap.goal),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(stakeHolderValueMap.hyperLink) != "undefined" && stakeHolderValueMap.hyperLink != null) ? Object.assign([], stakeHolderValueMap.hyperLink).sort() : stakeHolderValueMap.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(stakeHolderValueMap.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeHolderValueMap.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(stakeHolderValueMap.name),
        "requirement": this.getToJsonObjectConverter("requirement")((typeof(stakeHolderValueMap.requirement) != "undefined" && stakeHolderValueMap.requirement != null) ? Object.assign([], stakeHolderValueMap.requirement).sort() : stakeHolderValueMap.requirement),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeHolderValueMap.revisionNumber),
        "settings": this.getToJsonObjectConverter("settings")((typeof(stakeHolderValueMap.settings) != "undefined" && stakeHolderValueMap.settings != null) ? Object.assign([], stakeHolderValueMap.settings).sort() : stakeHolderValueMap.settings),
        "shortName": this.getToJsonObjectConverter("shortName")(stakeHolderValueMap.shortName),
        "stakeholderValue": this.getToJsonObjectConverter("stakeholderValue")((typeof(stakeHolderValueMap.stakeholderValue) != "undefined" && stakeHolderValueMap.stakeholderValue != null) ? Object.assign([], stakeHolderValueMap.stakeholderValue).sort() : stakeHolderValueMap.stakeholderValue),
        "valueGroup": this.getToJsonObjectConverter("valueGroup")((typeof(stakeHolderValueMap.valueGroup) != "undefined" && stakeHolderValueMap.valueGroup != null) ? Object.assign([], stakeHolderValueMap.valueGroup).sort() : stakeHolderValueMap.valueGroup),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to StakeHolderValueMap
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
        "valueGroupToStakeholderValueRelationship": (value: any) => { return value; },
      };
    }

    /**
     * Converts StakeHolderValueMapSettings to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let stakeHolderValueMapSettings = <Dto.StakeHolderValueMapSettings>thing;
      if (typeof(stakeHolderValueMapSettings) == "undefined" || stakeHolderValueMapSettings == null) {
        throw new Error("The object is not StakeHolderValueMapSettings");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(stakeHolderValueMapSettings.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(stakeHolderValueMapSettings.excludedDomain) != "undefined" && stakeHolderValueMapSettings.excludedDomain != null) ? Object.assign([], stakeHolderValueMapSettings.excludedDomain).sort() : stakeHolderValueMapSettings.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(stakeHolderValueMapSettings.excludedPerson) != "undefined" && stakeHolderValueMapSettings.excludedPerson != null) ? Object.assign([], stakeHolderValueMapSettings.excludedPerson).sort() : stakeHolderValueMapSettings.excludedPerson),
        "goalToValueGroupRelationship": this.getToJsonObjectConverter("goalToValueGroupRelationship")(stakeHolderValueMapSettings.goalToValueGroupRelationship),
        "iid": this.getToJsonObjectConverter("iid")(stakeHolderValueMapSettings.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(stakeHolderValueMapSettings.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(stakeHolderValueMapSettings.revisionNumber),
        "stakeholderValueToRequirementRelationship": this.getToJsonObjectConverter("stakeholderValueToRequirementRelationship")(stakeHolderValueMapSettings.stakeholderValueToRequirementRelationship),
        "valueGroupToStakeholderValueRelationship": this.getToJsonObjectConverter("valueGroupToStakeholderValueRelationship")(stakeHolderValueMapSettings.valueGroupToStakeholderValueRelationship),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to StakeHolderValueMapSettings
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
        "vcardType": (value: any) => { return value.map((x, i) => Dto.VcardTelephoneNumberKind[x]); },
      };
    }

    /**
     * Converts TelephoneNumber to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let telephoneNumber = <Dto.TelephoneNumber>thing;
      if (typeof(telephoneNumber) == "undefined" || telephoneNumber == null) {
        throw new Error("The object is not TelephoneNumber");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(telephoneNumber.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(telephoneNumber.excludedDomain) != "undefined" && telephoneNumber.excludedDomain != null) ? Object.assign([], telephoneNumber.excludedDomain).sort() : telephoneNumber.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(telephoneNumber.excludedPerson) != "undefined" && telephoneNumber.excludedPerson != null) ? Object.assign([], telephoneNumber.excludedPerson).sort() : telephoneNumber.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(telephoneNumber.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(telephoneNumber.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(telephoneNumber.revisionNumber),
        "value": this.getToJsonObjectConverter("value")(telephoneNumber.value),
        "vcardType": this.getToJsonObjectConverter("vcardType")((typeof(telephoneNumber.vcardType) != "undefined" && telephoneNumber.vcardType != null) ? Object.assign([], telephoneNumber.vcardType).sort() : telephoneNumber.vcardType),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to TelephoneNumber
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts Term to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let term = <Dto.Term>thing;
      if (typeof(term) == "undefined" || term == null) {
        throw new Error("The object is not Term");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(term.alias) != "undefined" && term.alias != null) ? Object.assign([], term.alias).sort() : term.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(term.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(term.definition) != "undefined" && term.definition != null) ? Object.assign([], term.definition).sort() : term.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(term.excludedDomain) != "undefined" && term.excludedDomain != null) ? Object.assign([], term.excludedDomain).sort() : term.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(term.excludedPerson) != "undefined" && term.excludedPerson != null) ? Object.assign([], term.excludedPerson).sort() : term.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(term.hyperLink) != "undefined" && term.hyperLink != null) ? Object.assign([], term.hyperLink).sort() : term.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(term.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(term.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(term.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(term.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(term.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(term.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to Term
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts TextParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let textParameterType = <Dto.TextParameterType>thing;
      if (typeof(textParameterType) == "undefined" || textParameterType == null) {
        throw new Error("The object is not TextParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(textParameterType.alias) != "undefined" && textParameterType.alias != null) ? Object.assign([], textParameterType.alias).sort() : textParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(textParameterType.category) != "undefined" && textParameterType.category != null) ? Object.assign([], textParameterType.category).sort() : textParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(textParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(textParameterType.definition) != "undefined" && textParameterType.definition != null) ? Object.assign([], textParameterType.definition).sort() : textParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(textParameterType.excludedDomain) != "undefined" && textParameterType.excludedDomain != null) ? Object.assign([], textParameterType.excludedDomain).sort() : textParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(textParameterType.excludedPerson) != "undefined" && textParameterType.excludedPerson != null) ? Object.assign([], textParameterType.excludedPerson).sort() : textParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(textParameterType.hyperLink) != "undefined" && textParameterType.hyperLink != null) ? Object.assign([], textParameterType.hyperLink).sort() : textParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(textParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(textParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(textParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(textParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(textParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(textParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(textParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to TextParameterType
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts TextualNote to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let textualNote = <Dto.TextualNote>thing;
      if (typeof(textualNote) == "undefined" || textualNote == null) {
        throw new Error("The object is not TextualNote");
      }

      let jsonObject = {
        "category": this.getToJsonObjectConverter("category")((typeof(textualNote.category) != "undefined" && textualNote.category != null) ? Object.assign([], textualNote.category).sort() : textualNote.category),
        "classKind": this.getToJsonObjectConverter("classKind")(textualNote.classKind),
        "content": this.getToJsonObjectConverter("content")(textualNote.content),
        "createdOn": this.getToJsonObjectConverter("createdOn")(textualNote.createdOn),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(textualNote.excludedDomain) != "undefined" && textualNote.excludedDomain != null) ? Object.assign([], textualNote.excludedDomain).sort() : textualNote.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(textualNote.excludedPerson) != "undefined" && textualNote.excludedPerson != null) ? Object.assign([], textualNote.excludedPerson).sort() : textualNote.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(textualNote.iid),
        "languageCode": this.getToJsonObjectConverter("languageCode")(textualNote.languageCode),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(textualNote.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(textualNote.name),
        "owner": this.getToJsonObjectConverter("owner")(textualNote.owner),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(textualNote.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(textualNote.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to TextualNote
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
        "symbol": (value: any) => { return value; },
      };
    }

    /**
     * Converts TimeOfDayParameterType to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let timeOfDayParameterType = <Dto.TimeOfDayParameterType>thing;
      if (typeof(timeOfDayParameterType) == "undefined" || timeOfDayParameterType == null) {
        throw new Error("The object is not TimeOfDayParameterType");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(timeOfDayParameterType.alias) != "undefined" && timeOfDayParameterType.alias != null) ? Object.assign([], timeOfDayParameterType.alias).sort() : timeOfDayParameterType.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(timeOfDayParameterType.category) != "undefined" && timeOfDayParameterType.category != null) ? Object.assign([], timeOfDayParameterType.category).sort() : timeOfDayParameterType.category),
        "classKind": this.getToJsonObjectConverter("classKind")(timeOfDayParameterType.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(timeOfDayParameterType.definition) != "undefined" && timeOfDayParameterType.definition != null) ? Object.assign([], timeOfDayParameterType.definition).sort() : timeOfDayParameterType.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(timeOfDayParameterType.excludedDomain) != "undefined" && timeOfDayParameterType.excludedDomain != null) ? Object.assign([], timeOfDayParameterType.excludedDomain).sort() : timeOfDayParameterType.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(timeOfDayParameterType.excludedPerson) != "undefined" && timeOfDayParameterType.excludedPerson != null) ? Object.assign([], timeOfDayParameterType.excludedPerson).sort() : timeOfDayParameterType.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(timeOfDayParameterType.hyperLink) != "undefined" && timeOfDayParameterType.hyperLink != null) ? Object.assign([], timeOfDayParameterType.hyperLink).sort() : timeOfDayParameterType.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(timeOfDayParameterType.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(timeOfDayParameterType.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(timeOfDayParameterType.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(timeOfDayParameterType.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(timeOfDayParameterType.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(timeOfDayParameterType.shortName),
        "symbol": this.getToJsonObjectConverter("symbol")(timeOfDayParameterType.symbol),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to TimeOfDayParameterType
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
        "unit": (value: any) => { return value; },
      };
    }

    /**
     * Converts UnitFactor to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let unitFactor = <Dto.UnitFactor>thing;
      if (typeof(unitFactor) == "undefined" || unitFactor == null) {
        throw new Error("The object is not UnitFactor");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(unitFactor.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(unitFactor.excludedDomain) != "undefined" && unitFactor.excludedDomain != null) ? Object.assign([], unitFactor.excludedDomain).sort() : unitFactor.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(unitFactor.excludedPerson) != "undefined" && unitFactor.excludedPerson != null) ? Object.assign([], unitFactor.excludedPerson).sort() : unitFactor.excludedPerson),
        "exponent": this.getToJsonObjectConverter("exponent")(unitFactor.exponent),
        "iid": this.getToJsonObjectConverter("iid")(unitFactor.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(unitFactor.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(unitFactor.revisionNumber),
        "unit": this.getToJsonObjectConverter("unit")(unitFactor.unit),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to UnitFactor
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts UnitPrefix to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let unitPrefix = <Dto.UnitPrefix>thing;
      if (typeof(unitPrefix) == "undefined" || unitPrefix == null) {
        throw new Error("The object is not UnitPrefix");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(unitPrefix.alias) != "undefined" && unitPrefix.alias != null) ? Object.assign([], unitPrefix.alias).sort() : unitPrefix.alias),
        "classKind": this.getToJsonObjectConverter("classKind")(unitPrefix.classKind),
        "conversionFactor": this.getToJsonObjectConverter("conversionFactor")(unitPrefix.conversionFactor),
        "definition": this.getToJsonObjectConverter("definition")((typeof(unitPrefix.definition) != "undefined" && unitPrefix.definition != null) ? Object.assign([], unitPrefix.definition).sort() : unitPrefix.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(unitPrefix.excludedDomain) != "undefined" && unitPrefix.excludedDomain != null) ? Object.assign([], unitPrefix.excludedDomain).sort() : unitPrefix.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(unitPrefix.excludedPerson) != "undefined" && unitPrefix.excludedPerson != null) ? Object.assign([], unitPrefix.excludedPerson).sort() : unitPrefix.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(unitPrefix.hyperLink) != "undefined" && unitPrefix.hyperLink != null) ? Object.assign([], unitPrefix.hyperLink).sort() : unitPrefix.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(unitPrefix.iid),
        "isDeprecated": this.getToJsonObjectConverter("isDeprecated")(unitPrefix.isDeprecated),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(unitPrefix.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(unitPrefix.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(unitPrefix.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(unitPrefix.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to UnitPrefix
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
        "value": (value: any) => { return value; },
      };
    }

    /**
     * Converts UserPreference to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let userPreference = <Dto.UserPreference>thing;
      if (typeof(userPreference) == "undefined" || userPreference == null) {
        throw new Error("The object is not UserPreference");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(userPreference.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(userPreference.excludedDomain) != "undefined" && userPreference.excludedDomain != null) ? Object.assign([], userPreference.excludedDomain).sort() : userPreference.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(userPreference.excludedPerson) != "undefined" && userPreference.excludedPerson != null) ? Object.assign([], userPreference.excludedPerson).sort() : userPreference.excludedPerson),
        "iid": this.getToJsonObjectConverter("iid")(userPreference.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(userPreference.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(userPreference.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(userPreference.shortName),
        "value": this.getToJsonObjectConverter("value")(userPreference.value),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to UserPreference
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
        "status": (value: any) => { return Dto.RuleVerificationStatusKind[value]; },
      };
    }

    /**
     * Converts UserRuleVerification to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let userRuleVerification = <Dto.UserRuleVerification>thing;
      if (typeof(userRuleVerification) == "undefined" || userRuleVerification == null) {
        throw new Error("The object is not UserRuleVerification");
      }

      let jsonObject = {
        "classKind": this.getToJsonObjectConverter("classKind")(userRuleVerification.classKind),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(userRuleVerification.excludedDomain) != "undefined" && userRuleVerification.excludedDomain != null) ? Object.assign([], userRuleVerification.excludedDomain).sort() : userRuleVerification.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(userRuleVerification.excludedPerson) != "undefined" && userRuleVerification.excludedPerson != null) ? Object.assign([], userRuleVerification.excludedPerson).sort() : userRuleVerification.excludedPerson),
        "executedOn": this.getToJsonObjectConverter("executedOn")(userRuleVerification.executedOn),
        "iid": this.getToJsonObjectConverter("iid")(userRuleVerification.iid),
        "isActive": this.getToJsonObjectConverter("isActive")(userRuleVerification.isActive),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(userRuleVerification.modifiedOn),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(userRuleVerification.revisionNumber),
        "rule": this.getToJsonObjectConverter("rule")(userRuleVerification.rule),
        "status": this.getToJsonObjectConverter("status")(userRuleVerification.status),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to UserRuleVerification
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
        "shortName": (value: any) => { return value; },
      };
    }

    /**
     * Converts ValueGroup to a JSON object
     */
    public toJsonObject(thing: Dto.Thing) : any {
      let valueGroup = <Dto.ValueGroup>thing;
      if (typeof(valueGroup) == "undefined" || valueGroup == null) {
        throw new Error("The object is not ValueGroup");
      }

      let jsonObject = {
        "alias": this.getToJsonObjectConverter("alias")((typeof(valueGroup.alias) != "undefined" && valueGroup.alias != null) ? Object.assign([], valueGroup.alias).sort() : valueGroup.alias),
        "category": this.getToJsonObjectConverter("category")((typeof(valueGroup.category) != "undefined" && valueGroup.category != null) ? Object.assign([], valueGroup.category).sort() : valueGroup.category),
        "classKind": this.getToJsonObjectConverter("classKind")(valueGroup.classKind),
        "definition": this.getToJsonObjectConverter("definition")((typeof(valueGroup.definition) != "undefined" && valueGroup.definition != null) ? Object.assign([], valueGroup.definition).sort() : valueGroup.definition),
        "excludedDomain": this.getToJsonObjectConverter("excludedDomain")((typeof(valueGroup.excludedDomain) != "undefined" && valueGroup.excludedDomain != null) ? Object.assign([], valueGroup.excludedDomain).sort() : valueGroup.excludedDomain),
        "excludedPerson": this.getToJsonObjectConverter("excludedPerson")((typeof(valueGroup.excludedPerson) != "undefined" && valueGroup.excludedPerson != null) ? Object.assign([], valueGroup.excludedPerson).sort() : valueGroup.excludedPerson),
        "hyperLink": this.getToJsonObjectConverter("hyperLink")((typeof(valueGroup.hyperLink) != "undefined" && valueGroup.hyperLink != null) ? Object.assign([], valueGroup.hyperLink).sort() : valueGroup.hyperLink),
        "iid": this.getToJsonObjectConverter("iid")(valueGroup.iid),
        "modifiedOn": this.getToJsonObjectConverter("modifiedOn")(valueGroup.modifiedOn),
        "name": this.getToJsonObjectConverter("name")(valueGroup.name),
        "revisionNumber": this.getToJsonObjectConverter("revisionNumber")(valueGroup.revisionNumber),
        "shortName": this.getToJsonObjectConverter("shortName")(valueGroup.shortName),
      };

      return jsonObject;
    }

    /**
     * Deserializes a JSON object to ValueGroup
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
  export function parseValueArray(jsonObject: string): string[] {
    var valueArray = new Array<string>();

    // extract the array in between []
    var stringArray = /^\[([\s\S]*)\]$/g;
    var parsedJson = stringArray.exec(jsonObject)[1];

    var elements = /\"([^\"\\]*(\\.[^\"\\]*)*)\"/g;

    var match;
    while((match = elements.exec(parsedJson)) !== null){
      valueArray.push(
        match[1]
        .replace(/\\\"/g, "\"")
        .replace(/\\\\/g, "\\")
        .replace(/\\f/g, "\f")
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\t/g, "\t")
      )
    }

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
   * @param valueArray The  value-array to convert
   * @returns The JSON string
   */
  export function toJsonValueArray(valueArray: string[]): string {
    let tmpArray = new Array<string>();
    valueArray.forEach(v => tmpArray.push("\""
      + v.replace(/\\/g, "\\\\")
      .replace(/"/g, "\\\"")
      .replace(/\f/g, "\\f")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t")
      + "\""));

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

    return jsonArray.sort((a,b) => (a["k"] > b["k"]) ? 1 : ((b["k"] > a["k"]) ? -1 : 0));
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
    "ValueGroup": new ValueGroupSerializer(),
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
  export function serialize(array: Array<any>): string {
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
