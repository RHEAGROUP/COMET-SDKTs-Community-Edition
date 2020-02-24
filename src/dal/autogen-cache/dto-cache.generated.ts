/**
 * @file		dto-cache.generated.ts
 * @company		RHEA System S.A.
 * @copyright  Copyright (c) 2020  RHEA System S.A.
 * @summary		This is an auto-generated class. Any manual changes on this file will be overwritten!
 */

import {Dto} from "../../dto/autogen/dto.generated";
import {ThingUpdateService} from "../thing-update.service";
import {UpdateKind, ThingUpdateEvent} from "../thing-update.event";
import {Utils} from "../../utils/utils";
import {Metadata} from "../../dto/autogen/metadata/thing.metadata.generated";
import {Cdp4Type} from "../../types/ordered-item";

export class DtoCache {

  /**
   * The cache used to store ActionItem
   */
  private actionItemCache: { [cacheId: string]: Dto.ActionItem };

  /**
   * The cache used to store ActualFiniteState
   */
  private actualFiniteStateCache: { [cacheId: string]: Dto.ActualFiniteState };

  /**
   * The cache used to store ActualFiniteStateList
   */
  private actualFiniteStateListCache: { [cacheId: string]: Dto.ActualFiniteStateList };

  /**
   * The cache used to store Alias
   */
  private aliasCache: { [cacheId: string]: Dto.Alias };

  /**
   * The cache used to store AndExpression
   */
  private andExpressionCache: { [cacheId: string]: Dto.AndExpression };

  /**
   * The cache used to store Approval
   */
  private approvalCache: { [cacheId: string]: Dto.Approval };

  /**
   * The cache used to store ArrayParameterType
   */
  private arrayParameterTypeCache: { [cacheId: string]: Dto.ArrayParameterType };

  /**
   * The cache used to store BinaryNote
   */
  private binaryNoteCache: { [cacheId: string]: Dto.BinaryNote };

  /**
   * The cache used to store BinaryRelationship
   */
  private binaryRelationshipCache: { [cacheId: string]: Dto.BinaryRelationship };

  /**
   * The cache used to store BinaryRelationshipRule
   */
  private binaryRelationshipRuleCache: { [cacheId: string]: Dto.BinaryRelationshipRule };

  /**
   * The cache used to store Book
   */
  private bookCache: { [cacheId: string]: Dto.Book };

  /**
   * The cache used to store BooleanParameterType
   */
  private booleanParameterTypeCache: { [cacheId: string]: Dto.BooleanParameterType };

  /**
   * The cache used to store Bounds
   */
  private boundsCache: { [cacheId: string]: Dto.Bounds };

  /**
   * The cache used to store BuiltInRuleVerification
   */
  private builtInRuleVerificationCache: { [cacheId: string]: Dto.BuiltInRuleVerification };

  /**
   * The cache used to store Category
   */
  private categoryCache: { [cacheId: string]: Dto.Category };

  /**
   * The cache used to store ChangeProposal
   */
  private changeProposalCache: { [cacheId: string]: Dto.ChangeProposal };

  /**
   * The cache used to store ChangeRequest
   */
  private changeRequestCache: { [cacheId: string]: Dto.ChangeRequest };

  /**
   * The cache used to store Citation
   */
  private citationCache: { [cacheId: string]: Dto.Citation };

  /**
   * The cache used to store Color
   */
  private colorCache: { [cacheId: string]: Dto.Color };

  /**
   * The cache used to store CommonFileStore
   */
  private commonFileStoreCache: { [cacheId: string]: Dto.CommonFileStore };

  /**
   * The cache used to store CompoundParameterType
   */
  private compoundParameterTypeCache: { [cacheId: string]: Dto.CompoundParameterType };

  /**
   * The cache used to store Constant
   */
  private constantCache: { [cacheId: string]: Dto.Constant };

  /**
   * The cache used to store ContractChangeNotice
   */
  private contractChangeNoticeCache: { [cacheId: string]: Dto.ContractChangeNotice };

  /**
   * The cache used to store CyclicRatioScale
   */
  private cyclicRatioScaleCache: { [cacheId: string]: Dto.CyclicRatioScale };

  /**
   * The cache used to store DateParameterType
   */
  private dateParameterTypeCache: { [cacheId: string]: Dto.DateParameterType };

  /**
   * The cache used to store DateTimeParameterType
   */
  private dateTimeParameterTypeCache: { [cacheId: string]: Dto.DateTimeParameterType };

  /**
   * The cache used to store DecompositionRule
   */
  private decompositionRuleCache: { [cacheId: string]: Dto.DecompositionRule };

  /**
   * The cache used to store Definition
   */
  private definitionCache: { [cacheId: string]: Dto.Definition };

  /**
   * The cache used to store DerivedQuantityKind
   */
  private derivedQuantityKindCache: { [cacheId: string]: Dto.DerivedQuantityKind };

  /**
   * The cache used to store DerivedUnit
   */
  private derivedUnitCache: { [cacheId: string]: Dto.DerivedUnit };

  /**
   * The cache used to store DiagramCanvas
   */
  private diagramCanvasCache: { [cacheId: string]: Dto.DiagramCanvas };

  /**
   * The cache used to store DiagramEdge
   */
  private diagramEdgeCache: { [cacheId: string]: Dto.DiagramEdge };

  /**
   * The cache used to store DiagramObject
   */
  private diagramObjectCache: { [cacheId: string]: Dto.DiagramObject };

  /**
   * The cache used to store DomainFileStore
   */
  private domainFileStoreCache: { [cacheId: string]: Dto.DomainFileStore };

  /**
   * The cache used to store DomainOfExpertise
   */
  private domainOfExpertiseCache: { [cacheId: string]: Dto.DomainOfExpertise };

  /**
   * The cache used to store DomainOfExpertiseGroup
   */
  private domainOfExpertiseGroupCache: { [cacheId: string]: Dto.DomainOfExpertiseGroup };

  /**
   * The cache used to store ElementDefinition
   */
  private elementDefinitionCache: { [cacheId: string]: Dto.ElementDefinition };

  /**
   * The cache used to store ElementUsage
   */
  private elementUsageCache: { [cacheId: string]: Dto.ElementUsage };

  /**
   * The cache used to store EmailAddress
   */
  private emailAddressCache: { [cacheId: string]: Dto.EmailAddress };

  /**
   * The cache used to store EngineeringModel
   */
  private engineeringModelCache: { [cacheId: string]: Dto.EngineeringModel };

  /**
   * The cache used to store EngineeringModelDataDiscussionItem
   */
  private engineeringModelDataDiscussionItemCache: { [cacheId: string]: Dto.EngineeringModelDataDiscussionItem };

  /**
   * The cache used to store EngineeringModelDataNote
   */
  private engineeringModelDataNoteCache: { [cacheId: string]: Dto.EngineeringModelDataNote };

  /**
   * The cache used to store EngineeringModelSetup
   */
  private engineeringModelSetupCache: { [cacheId: string]: Dto.EngineeringModelSetup };

  /**
   * The cache used to store EnumerationParameterType
   */
  private enumerationParameterTypeCache: { [cacheId: string]: Dto.EnumerationParameterType };

  /**
   * The cache used to store EnumerationValueDefinition
   */
  private enumerationValueDefinitionCache: { [cacheId: string]: Dto.EnumerationValueDefinition };

  /**
   * The cache used to store ExclusiveOrExpression
   */
  private exclusiveOrExpressionCache: { [cacheId: string]: Dto.ExclusiveOrExpression };

  /**
   * The cache used to store ExternalIdentifierMap
   */
  private externalIdentifierMapCache: { [cacheId: string]: Dto.ExternalIdentifierMap };

  /**
   * The cache used to store File
   */
  private fileCache: { [cacheId: string]: Dto.File };

  /**
   * The cache used to store FileRevision
   */
  private fileRevisionCache: { [cacheId: string]: Dto.FileRevision };

  /**
   * The cache used to store FileType
   */
  private fileTypeCache: { [cacheId: string]: Dto.FileType };

  /**
   * The cache used to store Folder
   */
  private folderCache: { [cacheId: string]: Dto.Folder };

  /**
   * The cache used to store Glossary
   */
  private glossaryCache: { [cacheId: string]: Dto.Glossary };

  /**
   * The cache used to store Goal
   */
  private goalCache: { [cacheId: string]: Dto.Goal };

  /**
   * The cache used to store HyperLink
   */
  private hyperLinkCache: { [cacheId: string]: Dto.HyperLink };

  /**
   * The cache used to store IdCorrespondence
   */
  private idCorrespondenceCache: { [cacheId: string]: Dto.IdCorrespondence };

  /**
   * The cache used to store IntervalScale
   */
  private intervalScaleCache: { [cacheId: string]: Dto.IntervalScale };

  /**
   * The cache used to store Iteration
   */
  private iterationCache: { [cacheId: string]: Dto.Iteration };

  /**
   * The cache used to store IterationSetup
   */
  private iterationSetupCache: { [cacheId: string]: Dto.IterationSetup };

  /**
   * The cache used to store LinearConversionUnit
   */
  private linearConversionUnitCache: { [cacheId: string]: Dto.LinearConversionUnit };

  /**
   * The cache used to store LogarithmicScale
   */
  private logarithmicScaleCache: { [cacheId: string]: Dto.LogarithmicScale };

  /**
   * The cache used to store MappingToReferenceScale
   */
  private mappingToReferenceScaleCache: { [cacheId: string]: Dto.MappingToReferenceScale };

  /**
   * The cache used to store ModellingThingReference
   */
  private modellingThingReferenceCache: { [cacheId: string]: Dto.ModellingThingReference };

  /**
   * The cache used to store ModelLogEntry
   */
  private modelLogEntryCache: { [cacheId: string]: Dto.ModelLogEntry };

  /**
   * The cache used to store ModelReferenceDataLibrary
   */
  private modelReferenceDataLibraryCache: { [cacheId: string]: Dto.ModelReferenceDataLibrary };

  /**
   * The cache used to store MultiRelationship
   */
  private multiRelationshipCache: { [cacheId: string]: Dto.MultiRelationship };

  /**
   * The cache used to store MultiRelationshipRule
   */
  private multiRelationshipRuleCache: { [cacheId: string]: Dto.MultiRelationshipRule };

  /**
   * The cache used to store NaturalLanguage
   */
  private naturalLanguageCache: { [cacheId: string]: Dto.NaturalLanguage };

  /**
   * The cache used to store NestedElement
   */
  private nestedElementCache: { [cacheId: string]: Dto.NestedElement };

  /**
   * The cache used to store NestedParameter
   */
  private nestedParameterCache: { [cacheId: string]: Dto.NestedParameter };

  /**
   * The cache used to store NotExpression
   */
  private notExpressionCache: { [cacheId: string]: Dto.NotExpression };

  /**
   * The cache used to store Option
   */
  private optionCache: { [cacheId: string]: Dto.Option };

  /**
   * The cache used to store OrdinalScale
   */
  private ordinalScaleCache: { [cacheId: string]: Dto.OrdinalScale };

  /**
   * The cache used to store OrExpression
   */
  private orExpressionCache: { [cacheId: string]: Dto.OrExpression };

  /**
   * The cache used to store Organization
   */
  private organizationCache: { [cacheId: string]: Dto.Organization };

  /**
   * The cache used to store OwnedStyle
   */
  private ownedStyleCache: { [cacheId: string]: Dto.OwnedStyle };

  /**
   * The cache used to store Page
   */
  private pageCache: { [cacheId: string]: Dto.Page };

  /**
   * The cache used to store Parameter
   */
  private parameterCache: { [cacheId: string]: Dto.Parameter };

  /**
   * The cache used to store ParameterGroup
   */
  private parameterGroupCache: { [cacheId: string]: Dto.ParameterGroup };

  /**
   * The cache used to store ParameterizedCategoryRule
   */
  private parameterizedCategoryRuleCache: { [cacheId: string]: Dto.ParameterizedCategoryRule };

  /**
   * The cache used to store ParameterOverride
   */
  private parameterOverrideCache: { [cacheId: string]: Dto.ParameterOverride };

  /**
   * The cache used to store ParameterOverrideValueSet
   */
  private parameterOverrideValueSetCache: { [cacheId: string]: Dto.ParameterOverrideValueSet };

  /**
   * The cache used to store ParameterSubscription
   */
  private parameterSubscriptionCache: { [cacheId: string]: Dto.ParameterSubscription };

  /**
   * The cache used to store ParameterSubscriptionValueSet
   */
  private parameterSubscriptionValueSetCache: { [cacheId: string]: Dto.ParameterSubscriptionValueSet };

  /**
   * The cache used to store ParameterTypeComponent
   */
  private parameterTypeComponentCache: { [cacheId: string]: Dto.ParameterTypeComponent };

  /**
   * The cache used to store ParameterValueSet
   */
  private parameterValueSetCache: { [cacheId: string]: Dto.ParameterValueSet };

  /**
   * The cache used to store ParametricConstraint
   */
  private parametricConstraintCache: { [cacheId: string]: Dto.ParametricConstraint };

  /**
   * The cache used to store Participant
   */
  private participantCache: { [cacheId: string]: Dto.Participant };

  /**
   * The cache used to store ParticipantPermission
   */
  private participantPermissionCache: { [cacheId: string]: Dto.ParticipantPermission };

  /**
   * The cache used to store ParticipantRole
   */
  private participantRoleCache: { [cacheId: string]: Dto.ParticipantRole };

  /**
   * The cache used to store Person
   */
  private personCache: { [cacheId: string]: Dto.Person };

  /**
   * The cache used to store PersonPermission
   */
  private personPermissionCache: { [cacheId: string]: Dto.PersonPermission };

  /**
   * The cache used to store PersonRole
   */
  private personRoleCache: { [cacheId: string]: Dto.PersonRole };

  /**
   * The cache used to store Point
   */
  private pointCache: { [cacheId: string]: Dto.Point };

  /**
   * The cache used to store PossibleFiniteState
   */
  private possibleFiniteStateCache: { [cacheId: string]: Dto.PossibleFiniteState };

  /**
   * The cache used to store PossibleFiniteStateList
   */
  private possibleFiniteStateListCache: { [cacheId: string]: Dto.PossibleFiniteStateList };

  /**
   * The cache used to store PrefixedUnit
   */
  private prefixedUnitCache: { [cacheId: string]: Dto.PrefixedUnit };

  /**
   * The cache used to store Publication
   */
  private publicationCache: { [cacheId: string]: Dto.Publication };

  /**
   * The cache used to store QuantityKindFactor
   */
  private quantityKindFactorCache: { [cacheId: string]: Dto.QuantityKindFactor };

  /**
   * The cache used to store RatioScale
   */
  private ratioScaleCache: { [cacheId: string]: Dto.RatioScale };

  /**
   * The cache used to store ReferencerRule
   */
  private referencerRuleCache: { [cacheId: string]: Dto.ReferencerRule };

  /**
   * The cache used to store ReferenceSource
   */
  private referenceSourceCache: { [cacheId: string]: Dto.ReferenceSource };

  /**
   * The cache used to store RelationalExpression
   */
  private relationalExpressionCache: { [cacheId: string]: Dto.RelationalExpression };

  /**
   * The cache used to store RelationshipParameterValue
   */
  private relationshipParameterValueCache: { [cacheId: string]: Dto.RelationshipParameterValue };

  /**
   * The cache used to store RequestForDeviation
   */
  private requestForDeviationCache: { [cacheId: string]: Dto.RequestForDeviation };

  /**
   * The cache used to store RequestForWaiver
   */
  private requestForWaiverCache: { [cacheId: string]: Dto.RequestForWaiver };

  /**
   * The cache used to store Requirement
   */
  private requirementCache: { [cacheId: string]: Dto.Requirement };

  /**
   * The cache used to store RequirementsContainerParameterValue
   */
  private requirementsContainerParameterValueCache: { [cacheId: string]: Dto.RequirementsContainerParameterValue };

  /**
   * The cache used to store RequirementsGroup
   */
  private requirementsGroupCache: { [cacheId: string]: Dto.RequirementsGroup };

  /**
   * The cache used to store RequirementsSpecification
   */
  private requirementsSpecificationCache: { [cacheId: string]: Dto.RequirementsSpecification };

  /**
   * The cache used to store ReviewItemDiscrepancy
   */
  private reviewItemDiscrepancyCache: { [cacheId: string]: Dto.ReviewItemDiscrepancy };

  /**
   * The cache used to store RuleVerificationList
   */
  private ruleVerificationListCache: { [cacheId: string]: Dto.RuleVerificationList };

  /**
   * The cache used to store RuleViolation
   */
  private ruleViolationCache: { [cacheId: string]: Dto.RuleViolation };

  /**
   * The cache used to store ScaleReferenceQuantityValue
   */
  private scaleReferenceQuantityValueCache: { [cacheId: string]: Dto.ScaleReferenceQuantityValue };

  /**
   * The cache used to store ScaleValueDefinition
   */
  private scaleValueDefinitionCache: { [cacheId: string]: Dto.ScaleValueDefinition };

  /**
   * The cache used to store Section
   */
  private sectionCache: { [cacheId: string]: Dto.Section };

  /**
   * The cache used to store SharedStyle
   */
  private sharedStyleCache: { [cacheId: string]: Dto.SharedStyle };

  /**
   * The cache used to store SimpleParameterValue
   */
  private simpleParameterValueCache: { [cacheId: string]: Dto.SimpleParameterValue };

  /**
   * The cache used to store SimpleQuantityKind
   */
  private simpleQuantityKindCache: { [cacheId: string]: Dto.SimpleQuantityKind };

  /**
   * The cache used to store SimpleUnit
   */
  private simpleUnitCache: { [cacheId: string]: Dto.SimpleUnit };

  /**
   * The cache used to store SiteDirectory
   */
  private siteDirectoryCache: { [cacheId: string]: Dto.SiteDirectory };

  /**
   * The cache used to store SiteDirectoryDataAnnotation
   */
  private siteDirectoryDataAnnotationCache: { [cacheId: string]: Dto.SiteDirectoryDataAnnotation };

  /**
   * The cache used to store SiteDirectoryDataDiscussionItem
   */
  private siteDirectoryDataDiscussionItemCache: { [cacheId: string]: Dto.SiteDirectoryDataDiscussionItem };

  /**
   * The cache used to store SiteDirectoryThingReference
   */
  private siteDirectoryThingReferenceCache: { [cacheId: string]: Dto.SiteDirectoryThingReference };

  /**
   * The cache used to store SiteLogEntry
   */
  private siteLogEntryCache: { [cacheId: string]: Dto.SiteLogEntry };

  /**
   * The cache used to store SiteReferenceDataLibrary
   */
  private siteReferenceDataLibraryCache: { [cacheId: string]: Dto.SiteReferenceDataLibrary };

  /**
   * The cache used to store Solution
   */
  private solutionCache: { [cacheId: string]: Dto.Solution };

  /**
   * The cache used to store SpecializedQuantityKind
   */
  private specializedQuantityKindCache: { [cacheId: string]: Dto.SpecializedQuantityKind };

  /**
   * The cache used to store Stakeholder
   */
  private stakeholderCache: { [cacheId: string]: Dto.Stakeholder };

  /**
   * The cache used to store StakeholderValue
   */
  private stakeholderValueCache: { [cacheId: string]: Dto.StakeholderValue };

  /**
   * The cache used to store StakeHolderValueMap
   */
  private stakeHolderValueMapCache: { [cacheId: string]: Dto.StakeHolderValueMap };

  /**
   * The cache used to store StakeHolderValueMapSettings
   */
  private stakeHolderValueMapSettingsCache: { [cacheId: string]: Dto.StakeHolderValueMapSettings };

  /**
   * The cache used to store TelephoneNumber
   */
  private telephoneNumberCache: { [cacheId: string]: Dto.TelephoneNumber };

  /**
   * The cache used to store Term
   */
  private termCache: { [cacheId: string]: Dto.Term };

  /**
   * The cache used to store TextParameterType
   */
  private textParameterTypeCache: { [cacheId: string]: Dto.TextParameterType };

  /**
   * The cache used to store TextualNote
   */
  private textualNoteCache: { [cacheId: string]: Dto.TextualNote };

  /**
   * The cache used to store TimeOfDayParameterType
   */
  private timeOfDayParameterTypeCache: { [cacheId: string]: Dto.TimeOfDayParameterType };

  /**
   * The cache used to store UnitFactor
   */
  private unitFactorCache: { [cacheId: string]: Dto.UnitFactor };

  /**
   * The cache used to store UnitPrefix
   */
  private unitPrefixCache: { [cacheId: string]: Dto.UnitPrefix };

  /**
   * The cache used to store UserPreference
   */
  private userPreferenceCache: { [cacheId: string]: Dto.UserPreference };

  /**
   * The cache used to store UserRuleVerification
   */
  private userRuleVerificationCache: { [cacheId: string]: Dto.UserRuleVerification };

  /**
   * The cache used to store ValueGroup
   */
  private valueGroupCache: { [cacheId: string]: Dto.ValueGroup };

  /**
   * The map of cache that associates a classKind to the corresponding cache(s)
   */
  private cacheMap: { [classKind: string]: any };

  /**
   * The array of ids representing a thing that are contained by another thing in the scope of a synchronization
   */
  private containedThings : string[];

  constructor(private thingUpdateService: ThingUpdateService) {
    this.actionItemCache = {};
    this.actualFiniteStateCache = {};
    this.actualFiniteStateListCache = {};
    this.aliasCache = {};
    this.andExpressionCache = {};
    this.approvalCache = {};
    this.arrayParameterTypeCache = {};
    this.binaryNoteCache = {};
    this.binaryRelationshipCache = {};
    this.binaryRelationshipRuleCache = {};
    this.bookCache = {};
    this.booleanParameterTypeCache = {};
    this.boundsCache = {};
    this.builtInRuleVerificationCache = {};
    this.categoryCache = {};
    this.changeProposalCache = {};
    this.changeRequestCache = {};
    this.citationCache = {};
    this.colorCache = {};
    this.commonFileStoreCache = {};
    this.compoundParameterTypeCache = {};
    this.constantCache = {};
    this.contractChangeNoticeCache = {};
    this.cyclicRatioScaleCache = {};
    this.dateParameterTypeCache = {};
    this.dateTimeParameterTypeCache = {};
    this.decompositionRuleCache = {};
    this.definitionCache = {};
    this.derivedQuantityKindCache = {};
    this.derivedUnitCache = {};
    this.diagramCanvasCache = {};
    this.diagramEdgeCache = {};
    this.diagramObjectCache = {};
    this.domainFileStoreCache = {};
    this.domainOfExpertiseCache = {};
    this.domainOfExpertiseGroupCache = {};
    this.elementDefinitionCache = {};
    this.elementUsageCache = {};
    this.emailAddressCache = {};
    this.engineeringModelCache = {};
    this.engineeringModelDataDiscussionItemCache = {};
    this.engineeringModelDataNoteCache = {};
    this.engineeringModelSetupCache = {};
    this.enumerationParameterTypeCache = {};
    this.enumerationValueDefinitionCache = {};
    this.exclusiveOrExpressionCache = {};
    this.externalIdentifierMapCache = {};
    this.fileCache = {};
    this.fileRevisionCache = {};
    this.fileTypeCache = {};
    this.folderCache = {};
    this.glossaryCache = {};
    this.goalCache = {};
    this.hyperLinkCache = {};
    this.idCorrespondenceCache = {};
    this.intervalScaleCache = {};
    this.iterationCache = {};
    this.iterationSetupCache = {};
    this.linearConversionUnitCache = {};
    this.logarithmicScaleCache = {};
    this.mappingToReferenceScaleCache = {};
    this.modellingThingReferenceCache = {};
    this.modelLogEntryCache = {};
    this.modelReferenceDataLibraryCache = {};
    this.multiRelationshipCache = {};
    this.multiRelationshipRuleCache = {};
    this.naturalLanguageCache = {};
    this.nestedElementCache = {};
    this.nestedParameterCache = {};
    this.notExpressionCache = {};
    this.optionCache = {};
    this.ordinalScaleCache = {};
    this.orExpressionCache = {};
    this.organizationCache = {};
    this.ownedStyleCache = {};
    this.pageCache = {};
    this.parameterCache = {};
    this.parameterGroupCache = {};
    this.parameterizedCategoryRuleCache = {};
    this.parameterOverrideCache = {};
    this.parameterOverrideValueSetCache = {};
    this.parameterSubscriptionCache = {};
    this.parameterSubscriptionValueSetCache = {};
    this.parameterTypeComponentCache = {};
    this.parameterValueSetCache = {};
    this.parametricConstraintCache = {};
    this.participantCache = {};
    this.participantPermissionCache = {};
    this.participantRoleCache = {};
    this.personCache = {};
    this.personPermissionCache = {};
    this.personRoleCache = {};
    this.pointCache = {};
    this.possibleFiniteStateCache = {};
    this.possibleFiniteStateListCache = {};
    this.prefixedUnitCache = {};
    this.publicationCache = {};
    this.quantityKindFactorCache = {};
    this.ratioScaleCache = {};
    this.referencerRuleCache = {};
    this.referenceSourceCache = {};
    this.relationalExpressionCache = {};
    this.relationshipParameterValueCache = {};
    this.requestForDeviationCache = {};
    this.requestForWaiverCache = {};
    this.requirementCache = {};
    this.requirementsContainerParameterValueCache = {};
    this.requirementsGroupCache = {};
    this.requirementsSpecificationCache = {};
    this.reviewItemDiscrepancyCache = {};
    this.ruleVerificationListCache = {};
    this.ruleViolationCache = {};
    this.scaleReferenceQuantityValueCache = {};
    this.scaleValueDefinitionCache = {};
    this.sectionCache = {};
    this.sharedStyleCache = {};
    this.simpleParameterValueCache = {};
    this.simpleQuantityKindCache = {};
    this.simpleUnitCache = {};
    this.siteDirectoryCache = {};
    this.siteDirectoryDataAnnotationCache = {};
    this.siteDirectoryDataDiscussionItemCache = {};
    this.siteDirectoryThingReferenceCache = {};
    this.siteLogEntryCache = {};
    this.siteReferenceDataLibraryCache = {};
    this.solutionCache = {};
    this.specializedQuantityKindCache = {};
    this.stakeholderCache = {};
    this.stakeholderValueCache = {};
    this.stakeHolderValueMapCache = {};
    this.stakeHolderValueMapSettingsCache = {};
    this.telephoneNumberCache = {};
    this.termCache = {};
    this.textParameterTypeCache = {};
    this.textualNoteCache = {};
    this.timeOfDayParameterTypeCache = {};
    this.unitFactorCache = {};
    this.unitPrefixCache = {};
    this.userPreferenceCache = {};
    this.userRuleVerificationCache = {};
    this.valueGroupCache = {};

    this.cacheMap = {
      "ActionItem": [this.actionItemCache],
      "ActualFiniteState": [this.actualFiniteStateCache],
      "ActualFiniteStateList": [this.actualFiniteStateListCache],
      "Alias": [this.aliasCache],
      "AndExpression": [this.andExpressionCache],
      "Approval": [this.approvalCache],
      "ArrayParameterType": [this.arrayParameterTypeCache],
      "BinaryNote": [this.binaryNoteCache],
      "BinaryRelationship": [this.binaryRelationshipCache],
      "BinaryRelationshipRule": [this.binaryRelationshipRuleCache],
      "Book": [this.bookCache],
      "BooleanExpression": [this.andExpressionCache, this.exclusiveOrExpressionCache, this.notExpressionCache, this.orExpressionCache, this.relationalExpressionCache],
      "BooleanParameterType": [this.booleanParameterTypeCache],
      "Bounds": [this.boundsCache],
      "BuiltInRuleVerification": [this.builtInRuleVerificationCache],
      "Category": [this.categoryCache],
      "ChangeProposal": [this.changeProposalCache],
      "ChangeRequest": [this.changeRequestCache],
      "Citation": [this.citationCache],
      "Color": [this.colorCache],
      "CommonFileStore": [this.commonFileStoreCache],
      "CompoundParameterType": [this.arrayParameterTypeCache, this.compoundParameterTypeCache],
      "Constant": [this.constantCache],
      "ContractChangeNotice": [this.contractChangeNoticeCache],
      "ContractDeviation": [this.changeRequestCache, this.requestForDeviationCache, this.requestForWaiverCache],
      "ConversionBasedUnit": [this.linearConversionUnitCache, this.prefixedUnitCache],
      "CyclicRatioScale": [this.cyclicRatioScaleCache],
      "DateParameterType": [this.dateParameterTypeCache],
      "DateTimeParameterType": [this.dateTimeParameterTypeCache],
      "DecompositionRule": [this.decompositionRuleCache],
      "DefinedThing": [this.arrayParameterTypeCache, this.binaryRelationshipRuleCache, this.booleanParameterTypeCache, this.categoryCache, this.compoundParameterTypeCache, this.constantCache, this.cyclicRatioScaleCache, this.dateParameterTypeCache, this.dateTimeParameterTypeCache, this.decompositionRuleCache, this.derivedQuantityKindCache, this.derivedUnitCache, this.domainOfExpertiseCache, this.domainOfExpertiseGroupCache, this.elementDefinitionCache, this.elementUsageCache, this.engineeringModelSetupCache, this.enumerationParameterTypeCache, this.enumerationValueDefinitionCache, this.fileTypeCache, this.glossaryCache, this.goalCache, this.intervalScaleCache, this.linearConversionUnitCache, this.logarithmicScaleCache, this.modelReferenceDataLibraryCache, this.multiRelationshipRuleCache, this.optionCache, this.ordinalScaleCache, this.parameterizedCategoryRuleCache, this.participantRoleCache, this.personRoleCache, this.possibleFiniteStateCache, this.possibleFiniteStateListCache, this.prefixedUnitCache, this.ratioScaleCache, this.referencerRuleCache, this.referenceSourceCache, this.requirementCache, this.requirementsGroupCache, this.requirementsSpecificationCache, this.ruleVerificationListCache, this.scaleValueDefinitionCache, this.simpleQuantityKindCache, this.simpleUnitCache, this.siteReferenceDataLibraryCache, this.specializedQuantityKindCache, this.stakeholderCache, this.stakeholderValueCache, this.stakeHolderValueMapCache, this.termCache, this.textParameterTypeCache, this.timeOfDayParameterTypeCache, this.unitPrefixCache, this.valueGroupCache],
      "Definition": [this.definitionCache],
      "DerivedQuantityKind": [this.derivedQuantityKindCache],
      "DerivedUnit": [this.derivedUnitCache],
      "DiagramCanvas": [this.diagramCanvasCache],
      "DiagramEdge": [this.diagramEdgeCache],
      "DiagramElementContainer": [this.diagramCanvasCache, this.diagramEdgeCache, this.diagramObjectCache],
      "DiagramElementThing": [this.diagramEdgeCache, this.diagramObjectCache],
      "DiagrammingStyle": [this.ownedStyleCache, this.sharedStyleCache],
      "DiagramObject": [this.diagramObjectCache],
      "DiagramShape": [this.diagramObjectCache],
      "DiagramThingBase": [this.boundsCache, this.colorCache, this.diagramCanvasCache, this.diagramEdgeCache, this.diagramObjectCache, this.ownedStyleCache, this.pointCache, this.sharedStyleCache],
      "DiscussionItem": [this.engineeringModelDataDiscussionItemCache, this.siteDirectoryDataDiscussionItemCache],
      "DomainFileStore": [this.domainFileStoreCache],
      "DomainOfExpertise": [this.domainOfExpertiseCache],
      "DomainOfExpertiseGroup": [this.domainOfExpertiseGroupCache],
      "ElementBase": [this.elementDefinitionCache, this.elementUsageCache],
      "ElementDefinition": [this.elementDefinitionCache],
      "ElementUsage": [this.elementUsageCache],
      "EmailAddress": [this.emailAddressCache],
      "EngineeringModel": [this.engineeringModelCache],
      "EngineeringModelDataAnnotation": [this.actionItemCache, this.changeProposalCache, this.changeRequestCache, this.contractChangeNoticeCache, this.engineeringModelDataNoteCache, this.requestForDeviationCache, this.requestForWaiverCache, this.reviewItemDiscrepancyCache],
      "EngineeringModelDataDiscussionItem": [this.engineeringModelDataDiscussionItemCache],
      "EngineeringModelDataNote": [this.engineeringModelDataNoteCache],
      "EngineeringModelSetup": [this.engineeringModelSetupCache],
      "EnumerationParameterType": [this.enumerationParameterTypeCache],
      "EnumerationValueDefinition": [this.enumerationValueDefinitionCache],
      "ExclusiveOrExpression": [this.exclusiveOrExpressionCache],
      "ExternalIdentifierMap": [this.externalIdentifierMapCache],
      "File": [this.fileCache],
      "FileRevision": [this.fileRevisionCache],
      "FileStore": [this.commonFileStoreCache, this.domainFileStoreCache],
      "FileType": [this.fileTypeCache],
      "Folder": [this.folderCache],
      "GenericAnnotation": [this.actionItemCache, this.approvalCache, this.changeProposalCache, this.changeRequestCache, this.contractChangeNoticeCache, this.engineeringModelDataDiscussionItemCache, this.engineeringModelDataNoteCache, this.requestForDeviationCache, this.requestForWaiverCache, this.reviewItemDiscrepancyCache, this.siteDirectoryDataAnnotationCache, this.siteDirectoryDataDiscussionItemCache, this.solutionCache],
      "Glossary": [this.glossaryCache],
      "Goal": [this.goalCache],
      "HyperLink": [this.hyperLinkCache],
      "IdCorrespondence": [this.idCorrespondenceCache],
      "IntervalScale": [this.intervalScaleCache],
      "Iteration": [this.iterationCache],
      "IterationSetup": [this.iterationSetupCache],
      "LinearConversionUnit": [this.linearConversionUnitCache],
      "LogarithmicScale": [this.logarithmicScaleCache],
      "MappingToReferenceScale": [this.mappingToReferenceScaleCache],
      "MeasurementScale": [this.cyclicRatioScaleCache, this.intervalScaleCache, this.logarithmicScaleCache, this.ordinalScaleCache, this.ratioScaleCache],
      "MeasurementUnit": [this.derivedUnitCache, this.linearConversionUnitCache, this.prefixedUnitCache, this.simpleUnitCache],
      "ModellingAnnotationItem": [this.actionItemCache, this.changeProposalCache, this.changeRequestCache, this.contractChangeNoticeCache, this.requestForDeviationCache, this.requestForWaiverCache, this.reviewItemDiscrepancyCache],
      "ModellingThingReference": [this.modellingThingReferenceCache],
      "ModelLogEntry": [this.modelLogEntryCache],
      "ModelReferenceDataLibrary": [this.modelReferenceDataLibraryCache],
      "MultiRelationship": [this.multiRelationshipCache],
      "MultiRelationshipRule": [this.multiRelationshipRuleCache],
      "NaturalLanguage": [this.naturalLanguageCache],
      "NestedElement": [this.nestedElementCache],
      "NestedParameter": [this.nestedParameterCache],
      "Note": [this.binaryNoteCache, this.textualNoteCache],
      "NotExpression": [this.notExpressionCache],
      "Option": [this.optionCache],
      "OrdinalScale": [this.ordinalScaleCache],
      "OrExpression": [this.orExpressionCache],
      "Organization": [this.organizationCache],
      "OwnedStyle": [this.ownedStyleCache],
      "Page": [this.pageCache],
      "Parameter": [this.parameterCache],
      "ParameterBase": [this.parameterCache, this.parameterOverrideCache, this.parameterSubscriptionCache],
      "ParameterGroup": [this.parameterGroupCache],
      "ParameterizedCategoryRule": [this.parameterizedCategoryRuleCache],
      "ParameterOrOverrideBase": [this.parameterCache, this.parameterOverrideCache],
      "ParameterOverride": [this.parameterOverrideCache],
      "ParameterOverrideValueSet": [this.parameterOverrideValueSetCache],
      "ParameterSubscription": [this.parameterSubscriptionCache],
      "ParameterSubscriptionValueSet": [this.parameterSubscriptionValueSetCache],
      "ParameterType": [this.arrayParameterTypeCache, this.booleanParameterTypeCache, this.compoundParameterTypeCache, this.dateParameterTypeCache, this.dateTimeParameterTypeCache, this.derivedQuantityKindCache, this.enumerationParameterTypeCache, this.simpleQuantityKindCache, this.specializedQuantityKindCache, this.textParameterTypeCache, this.timeOfDayParameterTypeCache],
      "ParameterTypeComponent": [this.parameterTypeComponentCache],
      "ParameterValue": [this.relationshipParameterValueCache, this.requirementsContainerParameterValueCache],
      "ParameterValueSet": [this.parameterValueSetCache],
      "ParameterValueSetBase": [this.parameterOverrideValueSetCache, this.parameterValueSetCache],
      "ParametricConstraint": [this.parametricConstraintCache],
      "Participant": [this.participantCache],
      "ParticipantPermission": [this.participantPermissionCache],
      "ParticipantRole": [this.participantRoleCache],
      "Person": [this.personCache],
      "PersonPermission": [this.personPermissionCache],
      "PersonRole": [this.personRoleCache],
      "Point": [this.pointCache],
      "PossibleFiniteState": [this.possibleFiniteStateCache],
      "PossibleFiniteStateList": [this.possibleFiniteStateListCache],
      "PrefixedUnit": [this.prefixedUnitCache],
      "Publication": [this.publicationCache],
      "QuantityKind": [this.derivedQuantityKindCache, this.simpleQuantityKindCache, this.specializedQuantityKindCache],
      "QuantityKindFactor": [this.quantityKindFactorCache],
      "RatioScale": [this.cyclicRatioScaleCache, this.ratioScaleCache],
      "ReferenceDataLibrary": [this.modelReferenceDataLibraryCache, this.siteReferenceDataLibraryCache],
      "ReferencerRule": [this.referencerRuleCache],
      "ReferenceSource": [this.referenceSourceCache],
      "RelationalExpression": [this.relationalExpressionCache],
      "Relationship": [this.binaryRelationshipCache, this.multiRelationshipCache],
      "RelationshipParameterValue": [this.relationshipParameterValueCache],
      "RequestForDeviation": [this.requestForDeviationCache],
      "RequestForWaiver": [this.requestForWaiverCache],
      "Requirement": [this.requirementCache],
      "RequirementsContainer": [this.requirementsGroupCache, this.requirementsSpecificationCache],
      "RequirementsContainerParameterValue": [this.requirementsContainerParameterValueCache],
      "RequirementsGroup": [this.requirementsGroupCache],
      "RequirementsSpecification": [this.requirementsSpecificationCache],
      "ReviewItemDiscrepancy": [this.reviewItemDiscrepancyCache],
      "Rule": [this.binaryRelationshipRuleCache, this.decompositionRuleCache, this.multiRelationshipRuleCache, this.parameterizedCategoryRuleCache, this.referencerRuleCache],
      "RuleVerification": [this.builtInRuleVerificationCache, this.userRuleVerificationCache],
      "RuleVerificationList": [this.ruleVerificationListCache],
      "RuleViolation": [this.ruleViolationCache],
      "ScalarParameterType": [this.booleanParameterTypeCache, this.dateParameterTypeCache, this.dateTimeParameterTypeCache, this.derivedQuantityKindCache, this.enumerationParameterTypeCache, this.simpleQuantityKindCache, this.specializedQuantityKindCache, this.textParameterTypeCache, this.timeOfDayParameterTypeCache],
      "ScaleReferenceQuantityValue": [this.scaleReferenceQuantityValueCache],
      "ScaleValueDefinition": [this.scaleValueDefinitionCache],
      "Section": [this.sectionCache],
      "SharedStyle": [this.sharedStyleCache],
      "SimpleParameterizableThing": [this.requirementCache],
      "SimpleParameterValue": [this.simpleParameterValueCache],
      "SimpleQuantityKind": [this.simpleQuantityKindCache],
      "SimpleUnit": [this.simpleUnitCache],
      "SiteDirectory": [this.siteDirectoryCache],
      "SiteDirectoryDataAnnotation": [this.siteDirectoryDataAnnotationCache],
      "SiteDirectoryDataDiscussionItem": [this.siteDirectoryDataDiscussionItemCache],
      "SiteDirectoryThingReference": [this.siteDirectoryThingReferenceCache],
      "SiteLogEntry": [this.siteLogEntryCache],
      "SiteReferenceDataLibrary": [this.siteReferenceDataLibraryCache],
      "Solution": [this.solutionCache],
      "SpecializedQuantityKind": [this.specializedQuantityKindCache],
      "Stakeholder": [this.stakeholderCache],
      "StakeholderValue": [this.stakeholderValueCache],
      "StakeHolderValueMap": [this.stakeHolderValueMapCache],
      "StakeHolderValueMapSettings": [this.stakeHolderValueMapSettingsCache],
      "TelephoneNumber": [this.telephoneNumberCache],
      "Term": [this.termCache],
      "TextParameterType": [this.textParameterTypeCache],
      "TextualNote": [this.textualNoteCache],
      "Thing": [this.actionItemCache, this.actualFiniteStateCache, this.actualFiniteStateListCache, this.aliasCache, this.andExpressionCache, this.approvalCache, this.arrayParameterTypeCache, this.binaryNoteCache, this.binaryRelationshipCache, this.binaryRelationshipRuleCache, this.bookCache, this.booleanParameterTypeCache, this.boundsCache, this.builtInRuleVerificationCache, this.categoryCache, this.changeProposalCache, this.changeRequestCache, this.citationCache, this.colorCache, this.commonFileStoreCache, this.compoundParameterTypeCache, this.constantCache, this.contractChangeNoticeCache, this.cyclicRatioScaleCache, this.dateParameterTypeCache, this.dateTimeParameterTypeCache, this.decompositionRuleCache, this.definitionCache, this.derivedQuantityKindCache, this.derivedUnitCache, this.diagramCanvasCache, this.diagramEdgeCache, this.diagramObjectCache, this.domainFileStoreCache, this.domainOfExpertiseCache, this.domainOfExpertiseGroupCache, this.elementDefinitionCache, this.elementUsageCache, this.emailAddressCache, this.engineeringModelCache, this.engineeringModelDataDiscussionItemCache, this.engineeringModelDataNoteCache, this.engineeringModelSetupCache, this.enumerationParameterTypeCache, this.enumerationValueDefinitionCache, this.exclusiveOrExpressionCache, this.externalIdentifierMapCache, this.fileCache, this.fileRevisionCache, this.fileTypeCache, this.folderCache, this.glossaryCache, this.goalCache, this.hyperLinkCache, this.idCorrespondenceCache, this.intervalScaleCache, this.iterationCache, this.iterationSetupCache, this.linearConversionUnitCache, this.logarithmicScaleCache, this.mappingToReferenceScaleCache, this.modellingThingReferenceCache, this.modelLogEntryCache, this.modelReferenceDataLibraryCache, this.multiRelationshipCache, this.multiRelationshipRuleCache, this.naturalLanguageCache, this.nestedElementCache, this.nestedParameterCache, this.notExpressionCache, this.optionCache, this.ordinalScaleCache, this.orExpressionCache, this.organizationCache, this.ownedStyleCache, this.pageCache, this.parameterCache, this.parameterGroupCache, this.parameterizedCategoryRuleCache, this.parameterOverrideCache, this.parameterOverrideValueSetCache, this.parameterSubscriptionCache, this.parameterSubscriptionValueSetCache, this.parameterTypeComponentCache, this.parameterValueSetCache, this.parametricConstraintCache, this.participantCache, this.participantPermissionCache, this.participantRoleCache, this.personCache, this.personPermissionCache, this.personRoleCache, this.pointCache, this.possibleFiniteStateCache, this.possibleFiniteStateListCache, this.prefixedUnitCache, this.publicationCache, this.quantityKindFactorCache, this.ratioScaleCache, this.referencerRuleCache, this.referenceSourceCache, this.relationalExpressionCache, this.relationshipParameterValueCache, this.requestForDeviationCache, this.requestForWaiverCache, this.requirementCache, this.requirementsContainerParameterValueCache, this.requirementsGroupCache, this.requirementsSpecificationCache, this.reviewItemDiscrepancyCache, this.ruleVerificationListCache, this.ruleViolationCache, this.scaleReferenceQuantityValueCache, this.scaleValueDefinitionCache, this.sectionCache, this.sharedStyleCache, this.simpleParameterValueCache, this.simpleQuantityKindCache, this.simpleUnitCache, this.siteDirectoryCache, this.siteDirectoryDataAnnotationCache, this.siteDirectoryDataDiscussionItemCache, this.siteDirectoryThingReferenceCache, this.siteLogEntryCache, this.siteReferenceDataLibraryCache, this.solutionCache, this.specializedQuantityKindCache, this.stakeholderCache, this.stakeholderValueCache, this.stakeHolderValueMapCache, this.stakeHolderValueMapSettingsCache, this.telephoneNumberCache, this.termCache, this.textParameterTypeCache, this.textualNoteCache, this.timeOfDayParameterTypeCache, this.unitFactorCache, this.unitPrefixCache, this.userPreferenceCache, this.userRuleVerificationCache, this.valueGroupCache],
      "ThingReference": [this.modellingThingReferenceCache, this.siteDirectoryThingReferenceCache],
      "TimeOfDayParameterType": [this.timeOfDayParameterTypeCache],
      "TopContainer": [this.engineeringModelCache, this.siteDirectoryCache],
      "UnitFactor": [this.unitFactorCache],
      "UnitPrefix": [this.unitPrefixCache],
      "UserPreference": [this.userPreferenceCache],
      "UserRuleVerification": [this.userRuleVerificationCache],
      "ValueGroup": [this.valueGroupCache],
    };
  }

  /**
   * Synchronizes this Dto cache instance with new Things
   * @param dtos The updated Things
   */
  public synchronize(dtos: Dto.Thing[]) {
    if (dtos.length === 0) {
      console.log("No dtos were returned.");
      return;
    }

    this.computeContainedThing(dtos);
    const updatedDto = new Array<Dto.Thing>();
    const createdDto = new Array<Dto.Thing>();
    for (let dto of dtos) {
      if (updatedDto.findIndex(x => x.iid === dto.iid) >= 0) {
        continue;
      }

      if (createdDto.findIndex(x => x.iid === dto.iid) >= 0) {
        continue;
      }

      const updatedKind = this.updateCache(dto);
      if (updatedKind === UpdateKind.UPDATE) {
        updatedDto.push(dto);
      }
      else if (updatedKind === UpdateKind.CREATE)
      {
        createdDto.push(dto);
      }
    }

    // compute containers for all things
    for (let dto of updatedDto) {
      this.computeContainer(dto);
    }

    for (let dto of createdDto) {
      this.computeContainer(dto);
    }

    // send notifications of updated and created things
    for (let dto of updatedDto) {
      const event = new ThingUpdateEvent(dto, UpdateKind.UPDATE);
      console.log("Cache.Synchronize, Update of: " + Dto.ClassKind[dto.classKind]);
      this.thingUpdateService.notifyThingUpdate(event);
    }

    for (let dto of createdDto) {
      const event = new ThingUpdateEvent(dto, UpdateKind.CREATE);
      this.thingUpdateService.notifyThingUpdate(event);
    }

    this.containedThings.length = 0;
  }

  /**
   * Retrieve all the Things of a specific type that are currently in the caches
   * @param classKind The classKind of the things to retrieve
   * @param iterationId the iteration id the thing is contained in
   * @returns The array of Things
   */
  public retrieve<T extends Dto.Thing>(classKind: Dto.ClassKind, iterationId: string): Array<T> {
    if (typeof(iterationId) == "undefined") {
      throw new Error("The iteration cannot be undefined. it shall be null or be a real id.");
    }

    const caches = this.cacheMap[Dto.ClassKind[classKind]];
    return this.getDictionariesValues<T>(caches, iterationId);
  }

  /**
   * Get the thing of a specific classKind and the provided id in the cache
   * @param classKind the classKind
   * @param id the id of the thing
   * @param iterationId the iteration id of the thing is contained in
   */
  public get<T extends Dto.Thing>(classKind: string, id: string, iterationId: string): T {
    return <T>this.findInCache(classKind, id, iterationId);
  }

  /**
   * Remove the RDL object and its contained things
   * @param rdl The RDL to close
   */
  public closeRdl(rdl: Dto.ReferenceDataLibrary) {
    this.cascadeRemove(Dto.ClassKind[rdl.classKind], rdl.iid, rdl.iterationContainerId);
  }

  /**
   * Remove the iteration object and its contained things
   * @param iteration The iteration to close
   */
  public closeIteration(iteration: Dto.Iteration) {
    this.cascadeRemove(Dto.ClassKind[iteration.classKind], iteration.iid, iteration.iid);
    // todo close model as well if last iteration
  }

  /**
   * Gets the array of things of type T from a single dictionary
   * @param dictionary The dictionary
   * @returns The array of Things
   */
  private getDictionaryValues<T extends Dto.Thing>(dictionary: { [id: string]: Dto.Thing }, iterationId: string): T[] {
    const array: T[] = new Array<T>();
    for (let key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        const iterationKey = this.getIterationId(key);
        if (Utils.isUndefinedOrNull(iterationKey) || iterationKey === iterationId) {
          array.push(<T>dictionary[key]);
        }
      }
    }

    return array;
  }

  /**
   * Gets the array of things of type T from multiple dictionaries
   * @param dictionaries The dictionaries
   * @returns The array of things
   */
  private getDictionariesValues<T extends Dto.Thing>(dictionaries: Array<{ [id: string]: Dto.Thing }>, iterationId: string): T[] {
    let array: T[] = new Array<T>();
    for (let dictionary of dictionaries) {
      const values = this.getDictionaryValues<T>(dictionary, iterationId);
      array = array.concat(values);
    }

    return array;
  }

  /**
   * Add or update the cache with a thing
   * @param dto the thing to add or update
   * @returns A value indicating whether the operation succeeded
   */
  private updateCache(dto: Dto.Thing) : UpdateKind {
    const cache = this.cacheMap[Dto.ClassKind[dto.classKind]][0];
    const result = this.addOrUpdateToCache(dto, cache);

    return result;
  }

  /**
   * Update a specific cache with the updated thing
   * @param dto the updated thing
   * @param cache the cache to update
   * @returns A value indicating whether the operation succeeded
   */
  private addOrUpdateToCache(dto: Dto.Thing, cache: { [id: string]: Dto.Thing }) : UpdateKind {
    const cachedDto = cache[dto.cacheId];
    if (Utils.isUndefinedOrNull(cachedDto)) {
      // the dto does not exist in the cache so add it
      cache[dto.cacheId] = dto;
      return UpdateKind.CREATE;
    } else {
      if (dto.revisionNumber >= cachedDto.revisionNumber) {

        this.computeMovedOrRemovedThings(cachedDto, dto);
        const oldDto = cache[dto.cacheId];
        dto.container = oldDto.container;
        cache[dto.cacheId] = dto;
        return UpdateKind.UPDATE;
      }
    }

    return UpdateKind.NONE;
  }

  /**
   * Computes the things that are contained by the things that are in the scope of a synchronization
   * @param updatedThings the updated things in the scope of a synchronization
   */
  private computeContainedThing(updatedThings: Dto.Thing[]) {
    this.containedThings = new Array<string>();
    for (let thing of updatedThings) {
      const metadata = Metadata.getMetadata(Dto.ClassKind[thing.classKind]);

      const containerLists = metadata.getContainerList(thing);
      for (let key in containerLists) {
        if (containerLists.hasOwnProperty(key)) {
          Array.prototype.push.apply(this.containedThings, containerLists[key]);
        }
      }

      const oldOrderedContainerLists = metadata.getOrderedContainerList(thing);
      for (let key in oldOrderedContainerLists) {
        if (oldOrderedContainerLists.hasOwnProperty(key)) {
          const containerList = oldOrderedContainerLists[key].map(item => item.v);
          Array.prototype.push.apply(this.containedThings, containerList);
        }
      }
    }
  }

  /**
   * Computes the things that were moved are removed
   * @param cachedDto the thing currently in the cache
   * @param updatedDto the updated thing
   */
  private computeMovedOrRemovedThings(cachedDto: Dto.Thing, updatedDto: Dto.Thing) {
    const metadata = Metadata.getMetadata(Dto.ClassKind[cachedDto.classKind]);

    const oldContainerLists = metadata.getContainerList(cachedDto);
    const iterationId = updatedDto instanceof (Dto.Iteration)
      ? updatedDto.iid
      : updatedDto.iterationContainerId;

    for (let key in oldContainerLists) {
      if (oldContainerLists.hasOwnProperty(key)) {
        const oldContainerList = oldContainerLists[key];
        const newContainerList = <string[]>metadata.getValue(updatedDto, key);
        const propertyType = metadata.propertyMetaData[key].typeName;
        let oldValues = [];
        if (oldContainerList != null){
          let oldValues = oldContainerList.filter(x => newContainerList.indexOf(x) < 0);
        }
        this.computeRemovedThings(propertyType, oldValues, iterationId);
      }
    }

    const oldOrderedContainerLists = metadata.getOrderedContainerList(cachedDto);
    for (let key in oldOrderedContainerLists) {
      if (oldOrderedContainerLists.hasOwnProperty(key)) {
        const oldContainerList = oldOrderedContainerLists[key];
        const newContainerList = <Cdp4Type.OrderedItem[]>metadata.getValue(updatedDto, key);
        const propertyType = metadata.propertyMetaData[key].typeName;
        const oldValues = oldContainerList.filter(x => typeof (newContainerList.find(item => item.v === x.v)) == "undefined").map(value => <string>value.v);
        this.computeRemovedThings(propertyType, oldValues, iterationId);
      }
    }
  }

  /**
   * Compute the things that are actually removed and clear them from the cache
   * @param classKind the classKind of the things
   * @param ids the ids of the things
   * @param iterationId the iteration id that contains the things to check
   */
  private computeRemovedThings(classKind: string, ids: string[], iterationId: string) {
    for (let id of ids) {
      if (this.containedThings.indexOf(id) >= 0) {
        // the thing was moved into another container
        console.log("moved: " + classKind + " " + id);
        continue;
      }

      // the thing was removed
      this.cascadeRemove(classKind, id, iterationId);
    }
  }

  /**
   * Cascade remove a thing
   * @param classKind The classKind of the thing to remove
   * @param id The id of the thing to remove
   * @param iterationId The id of the iteration the thing is contained in
   */
  private cascadeRemove(classKind: string, id: string, iterationId: string) {
    const removedThing = this.findInCache(classKind, id, iterationId);
    if (Utils.isUndefinedOrNull(removedThing)) {
      return;
    }

    const metadata = Metadata.getMetadata(Dto.ClassKind[removedThing.classKind]);
    const oldContainerLists = metadata.getContainerList(removedThing);
    for (let key in oldContainerLists) {
      if (oldContainerLists.hasOwnProperty(key)) {
        const oldContainerList = oldContainerLists[key];
        const propertyType = metadata.propertyMetaData[key].typeName;

        for (let containedId of oldContainerList) {
          this.cascadeRemove(propertyType, containedId, removedThing.iterationContainerId);
        }
      }
    }

    const oldOrderedContainerLists = metadata.getOrderedContainerList(removedThing);
    for (let key in oldOrderedContainerLists) {
      if (oldOrderedContainerLists.hasOwnProperty(key)) {
        const oldContainerList = oldOrderedContainerLists[key];
        const propertyType = metadata.propertyMetaData[key].typeName;

        for (let containedId of oldContainerList) {
          this.cascadeRemove(propertyType, <string>containedId.v, removedThing.iterationContainerId);
        }
      }
    }

    // we have the concrete classKind, only one cache should be returned
    const concreteCache = this.cacheMap[Dto.ClassKind[removedThing.classKind]][0];
    console.log("removed: " + classKind + " " + id);

    delete concreteCache[removedThing.cacheId];

    const event = new ThingUpdateEvent(removedThing, UpdateKind.DELETE);
    this.thingUpdateService.notifyThingUpdate(event);
  }

  /**
   * Sets the container of the contained Thing
   * @param thing The Thing which contained Things are set
   */
  private computeContainer(thing: Dto.Thing) {
    const metadata = Metadata.getMetadata(Dto.ClassKind[thing.classKind]);
    const containerLists = metadata.getContainerList(thing);
    const orderedContainerLists = metadata.getOrderedContainerList(thing);

    const iterationId = thing instanceof (Dto.Iteration)
      ? thing.iid
      : thing.iterationContainerId;

    for (let property in containerLists) {
      if (containerLists.hasOwnProperty(property)) {
        const containerList = containerLists[property];
        if (Utils.isUndefinedOrNull(containerList)) {
          continue;
        }

        const propertyType = metadata.propertyMetaData[property].typeName;

        for (let id of containerList) {
          const containedThing = this.findInCache(propertyType, id, iterationId);
          if (!Utils.isUndefinedOrNull(containedThing)) {
            containedThing.container = thing;
          }
        }
      }
    }

    for (let property in orderedContainerLists) {
      if (orderedContainerLists.hasOwnProperty(property)) {
        const containerList = orderedContainerLists[property];
        if (Utils.isUndefinedOrNull(containerList)) {
          continue;
        }

        const propertyType = metadata.propertyMetaData[property].typeName;

        for (let orderedItem of containerList) {
          const containedThing = this.findInCache(propertyType, orderedItem.v.toString(), iterationId);
          if (!Utils.isUndefinedOrNull(containedThing)) {
            containedThing.container = thing;
          }
        }
      }
    }
  }

  /**
   * Find the thing of a specific classKind and the provided ids in the cache
   * @param classKind the classKind
   * @param id the id of the thing
   * @param iterationId the iteration id the thing is contained in
   */
  private findInCache(classKind: string, id: string, iterationId: string): Dto.Thing {
    const caches = this.cacheMap[classKind];
    const cacheId = Utils.isUndefinedOrNull(iterationId) ? id : id + ";" + iterationId;

    for (let cache of caches) {
      const thing = cache[cacheId];
      if (!Utils.isUndefinedOrNull(thing)) {
        return thing;
      }
    }

    console.log("The thing " + classKind + " " + id + "could not be found");
  }

  /**
   * Get the iteration id out of the key used in the caching system
   * @param cacheId the key used in the cache
   * @returns the iteration id or null
   */
  private getIterationId(cacheId: string) : string {
    const ids = cacheId.split(";");
    const iterationId = ids[1];
    if (!Utils.isUndefinedOrNull(iterationId)) {
      return iterationId;
    }

    return null;
  }
}
