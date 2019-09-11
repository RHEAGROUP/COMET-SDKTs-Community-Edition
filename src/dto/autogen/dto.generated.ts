/**
 * @file		dto.generated.ts
 * @company		RHEA System S.A.
 * @copyright	Copyright (c) 2017 RHEA System S.A.
 * @summary		This is an auto-generated class. Any manual changes on this file will be overwritten!
 */

import { Utils } from "../../utils/utils";
import {Metadata} from "./metadata/thing.metadata.generated";
import {Cdp4Type} from "../../types/ordered-item";

export module Dto {
  /**
   * <!--StartFragment--><a id="ParameterValueKind">enumeration datatype that represents</a><!--EndFragment--> the different study phases that may apply to an EngineeringModelSetup / EngineeringModel
   */
  export enum StudyPhaseKind {
    /**
     * assertion that a model pertains to a study preparation phase
     */
    PREPARATION_PHASE,
      /**
       * assertion that a model pertains to a study design session phase
       */
    DESIGN_SESSION_PHASE,
      /**
       * assertion that a model pertains to a study reporting phase
       */
    REPORTING_PHASE,
      /**
       * assertion that a model pertains to a completed study
       */
    COMPLETED_STUDY    }

  /**
   * enumeration datatype that represents the different possible kinds of
   *     EngineeringModel
   */
  export enum EngineeringModelKind {
    /**
     * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is the model of a concrete study
     */
    STUDY_MODEL,
      /**
       * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a template model intended to be used as the basis for new study models
       * note: A template model may have only one iteration (represented by a combination of IterationSetup and Iteration).
       */
    TEMPLATE_MODEL,
      /**
       * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a catalogue of model components and/or patterns that can be re-used in the model of a study
       * note: A catalogue may have only one iteration (represented by a combination of IterationSetup and Iteration), and one option.
       */
    MODEL_CATALOGUE,
      /**
       * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a scratch model to be used for preparation, training or experimentation purposes
       */
    SCRATCH_MODEL    }

  /**
   * enumeration datatype that specifies a mathematical number set
   */
  export enum NumberSetKind {
    /**
     * note: In mathematics the set of natural numbers is denoted by ℕ, see
     *       also <a href="http://mathworld.wolfram.com/NaturalNumber.html">http://mathworld.wolfram.com/NaturalNumber.html</a>.The
     *       set of natural numbers is a subset of the set of integer numbers.
     */
    NATURAL_NUMBER_SET,
      /**
       * designation of the mathematical set of integer numbers, i.e. ..., -2,
       *       -1, 0, 1, 2, ...
       * note: In mathematics the set of integer numbers is denoted by ℤ, see
       *       also <a href="http://mathworld.wolfram.com/Integer.html">http://mathworld.wolfram.com/Integer.html</a>.
       *       The set of integer numbers is a subset of the set of rational numbers.
       */
    INTEGER_NUMBER_SET,
      /**
       * designation of the mathematical set of rational numbers, i.e. numbers
       *       that can be expressed as a ratio (with a non-zero denominator)
       * note: In mathematics the set of rational numbers is denoted by ℂ, see
       *       also <a href="http://mathworld.wolfram.com/RationalNumber.html">http://mathworld.wolfram.com/RationalNumber.html</a>.
       *       The set of rational numbers is a subset of the set of real numbers.
       */
    RATIONAL_NUMBER_SET,
      /**
       * designation of the mathematical set of real numbers, i.e. the union of
       *       rational and irrational numbers
       * note: In mathematics the set of real numbers is denoted by ℝ, see also <a href="http://mathworld.wolfram.com/RealNumber.html">http://mathworld.wolfram.com/RealNumber.html</a>.
       */
    REAL_NUMBER_SET    }

  /**
   * enumeration datatype that represents the known bases for the logarithm function used in LogarithmicScales
   */
  export enum LogarithmBaseKind {
    /**
     * natural logarithm
     */
    NATURAL,
      /**
       * base 2 logarithm
       */
    BASE2,
      /**
       * base 10 logarithm
       */
    BASE10    }

  /**
   * <a id="ParameterValueKind">enumeration datatype that represents</a> the possible values for a vCard telephone number
   * note: The values are defined in the vCard format specification in <a href="http://datatracker.ietf.org/doc/rfc6350/?include_text=1">IETF RFC 6350</a>.
   */
  export enum VcardTelephoneNumberKind {
    /**
     * indication that a telephone number is for professional use
     */
    WORK,
      /**
       * indication that a telephone number is for private or home use
       */
    HOME,
      /**
       * indication of a voice telephone number
       */
    VOICE,
      /**
       * indication that the telephone number supports text messages (SMS)
       */
    TEXT,
      /**
       * indication of a facsimile telephone number
       */
    FAX,
      /**
       * indication of a cellular or mobile telephone number
       */
    CELL,
      /**
       * indication of a paging device telephone number
       */
    PAGER,
      /**
       * indication of a telecommunication device for people with hearing or speech difficulties
       */
    TEXTPHONE,
      /**
       * indication of a video conferencing telephone number
       */
    VIDEO    }

  /**
   * <a id="ParameterValueKind">enumeration datatype that represents</a> the possible values for a vCard e-mail address
   * note: The values are defined in the vCard format specification in <a href="http://datatracker.ietf.org/doc/rfc6350/?include_text=1">IETF RFC 6350</a>.
   */
  export enum VcardEmailAddressKind {
    /**
     * indication that an e-mail address is for professional use
     */
    WORK,
      /**
       * indication that an e-mail address is for private or home use
       */
    HOME    }

  /**
   * enumeration datatype that denotes the possible classes in the current       data       model
   * note 1: Values are used to represent classes in instance directories and       in       the       definition       of       validation       rules.
   * note 2: The implementation in a programming language needs to provide a       reflection       capability       that       allows       runtime       evaluation       of       an       instance's       class       against       the       enumeration       literal       that       represents       the       class       name.
   */
  export enum ClassKind {
    /**
     * Assertian that the Class is an instance of ActionItem
     */
    ActionItem,
      /**
       * Assertian that the Class is an instance of ActualFiniteState
       */
    ActualFiniteState,
      /**
       * Assertian that the Class is an instance of ActualFiniteStateList
       */
    ActualFiniteStateList,
      /**
       * Assertian that the Class is an instance of Alias
       */
    Alias,
      /**
       * Assertian that the Class is an instance of AndExpression
       */
    AndExpression,
      /**
       * Assertian that the Class is an instance of Approval
       */
    Approval,
      /**
       * Assertian that the Class is an instance of ArrayParameterType
       */
    ArrayParameterType,
      /**
       * Assertian that the Class is an instance of BinaryNote
       */
    BinaryNote,
      /**
       * Assertian that the Class is an instance of BinaryRelationship
       */
    BinaryRelationship,
      /**
       * Assertian that the Class is an instance of BinaryRelationshipRule
       */
    BinaryRelationshipRule,
      /**
       * Assertian that the Class is an instance of book
       */
    Book,
      /**
       * Assertian that the Class is an instance of BooleanExpression
       */
    BooleanExpression,
      /**
       * Assertian that the Class is an instance of BooleanParameterType
       */
    BooleanParameterType,
      /**
       * Assertian that the Class is an instance of Bounds
       */
    Bounds,
      /**
       * Assertian that the Class is an instance of BuiltInRuleVerification
       */
    BuiltInRuleVerification,
      /**
       * Assertian that the Class is an instance of Category
       */
    Category,
      /**
       * Assertian that the Class is an instance of ChangeProposal
       */
    ChangeProposal,
      /**
       * Assertian that the Class is an instance of ChangeRequest
       */
    ChangeRequest,
      /**
       * Assertian that the Class is an instance of Citation
       */
    Citation,
      /**
       * Assertian that the Class is an instance of Color
       */
    Color,
      /**
       * Assertian that the Class is an instance of CommonFileStore
       */
    CommonFileStore,
      /**
       * Assertian that the Class is an instance of CompoundParameterType
       */
    CompoundParameterType,
      /**
       * Assertian that the Class is an instance of Constant
       */
    Constant,
      /**
       * Assertian that the Class is an instance of ContractChangeNotice
       */
    ContractChangeNotice,
      /**
       * Assertian that the Class is an instance of ContractDeviation
       */
    ContractDeviation,
      /**
       * Assertian that the Class is an instance of ConversionBasedUnit
       */
    ConversionBasedUnit,
      /**
       * Assertian that the Class is an instance of CyclicRatioScale
       */
    CyclicRatioScale,
      /**
       * Assertian that the Class is an instance of DateParameterType
       */
    DateParameterType,
      /**
       * Assertian that the Class is an instance of DateTimeParameterType
       */
    DateTimeParameterType,
      /**
       * Assertian that the Class is an instance of DecompositionRule
       */
    DecompositionRule,
      /**
       * Assertian that the Class is an instance of DefinedThing
       */
    DefinedThing,
      /**
       * Assertian that the Class is an instance of Definition
       */
    Definition,
      /**
       * Assertian that the Class is an instance of DerivedQuantityKind
       */
    DerivedQuantityKind,
      /**
       * Assertian that the Class is an instance of DerivedUnit
       */
    DerivedUnit,
      /**
       * Assertian that the Class is an instance of DiagramCanvas
       */
    DiagramCanvas,
      /**
       * Assertian that the Class is an instance of DiagramEdge
       */
    DiagramEdge,
      /**
       * Assertian that the Class is an instance of DiagramElementContainer
       */
    DiagramElementContainer,
      /**
       * Assertian that the Class is an instance of DiagramElementThing
       */
    DiagramElementThing,
      /**
       * Assertian that the Class is an instance of DiagrammingStyle
       */
    DiagrammingStyle,
      /**
       * Assertian that the Class is an instance of DiagramObject
       */
    DiagramObject,
      /**
       * Assertian that the Class is an instance of DiagramShape
       */
    DiagramShape,
      /**
       * Assertian that the Class is an instance of DiagramThingBase
       */
    DiagramThingBase,
      /**
       * Assertian that the Class is an instance of DiscussionItem
       */
    DiscussionItem,
      /**
       * Assertian that the Class is an instance of DomainFileStore
       */
    DomainFileStore,
      /**
       * Assertian that the Class is an instance of DomainOfExpertise
       */
    DomainOfExpertise,
      /**
       * Assertian that the Class is an instance of DomainOfExpertiseGroup
       */
    DomainOfExpertiseGroup,
      /**
       * Assertian that the Class is an instance of ElementBase
       */
    ElementBase,
      /**
       * Assertian that the Class is an instance of ElementDefinition
       */
    ElementDefinition,
      /**
       * Assertian that the Class is an instance of ElementUsage
       */
    ElementUsage,
      /**
       * Assertian that the Class is an instance of EmailAddress
       */
    EmailAddress,
      /**
       * Assertian that the Class is an instance of EngineeringModel
       */
    EngineeringModel,
      /**
       * Assertian that the Class is an instance of EngineeringModelDataAnnotation
       */
    EngineeringModelDataAnnotation,
      /**
       * Assertian that the Class is an instance of EngineeringModelDataDiscussionItem
       */
    EngineeringModelDataDiscussionItem,
      /**
       * Assertian that the Class is an instance of EngineeringModelDataNote
       */
    EngineeringModelDataNote,
      /**
       * Assertian that the Class is an instance of EngineeringModelSetup
       */
    EngineeringModelSetup,
      /**
       * Assertian that the Class is an instance of EnumerationParameterType
       */
    EnumerationParameterType,
      /**
       * Assertian that the Class is an instance of EnumerationValueDefinition
       */
    EnumerationValueDefinition,
      /**
       * Assertian that the Class is an instance of ExclusiveOrExpression
       */
    ExclusiveOrExpression,
      /**
       * Assertian that the Class is an instance of ExternalIdentifierMap
       */
    ExternalIdentifierMap,
      /**
       * Assertian that the Class is an instance of File
       */
    File,
      /**
       * Assertian that the Class is an instance of FileRevision
       */
    FileRevision,
      /**
       * Assertian that the Class is an instance of FileStore
       */
    FileStore,
      /**
       * Assertian that the Class is an instance of FileType
       */
    FileType,
      /**
       * Assertian that the Class is an instance of Folder
       */
    Folder,
      /**
       * Assertian that the Class is an instance of GenericAnnotation
       */
    GenericAnnotation,
      /**
       * Assertian that the Class is an instance of Glossary
       */
    Glossary,
      /**
       * Assertian that the Class is an instance of Goal
       */
    Goal,
      /**
       * Assertian that the Class is an instance of HyperLink
       */
    HyperLink,
      /**
       * Assertian that the Class is an instance of IdCorrespondence
       */
    IdCorrespondence,
      /**
       * Assertian that the Class is an instance of IntervalScale
       */
    IntervalScale,
      /**
       * Assertian that the Class is an instance of Iteration
       */
    Iteration,
      /**
       * Assertian that the Class is an instance of IterationSetup
       */
    IterationSetup,
      /**
       * Assertian that the Class is an instance of LinearConversionUnit
       */
    LinearConversionUnit,
      /**
       * Assertian that the Class is an instance of LogarithmicScale
       */
    LogarithmicScale,
      /**
       * Assertian that the Class is an instance of MappingToReferenceScale
       */
    MappingToReferenceScale,
      /**
       * Assertian that the Class is an instance of MeasurementScale
       */
    MeasurementScale,
      /**
       * Assertian that the Class is an instance of MeasurementUnit
       */
    MeasurementUnit,
      /**
       * Assertian that the Class is an instance of ModellingAnnotationItem
       */
    ModellingAnnotationItem,
      /**
       * Assertian that the Class is an instance of ModellingThingReference
       */
    ModellingThingReference,
      /**
       * Assertian that the Class is an instance of ModelLogEntry
       */
    ModelLogEntry,
      /**
       * Assertian that the Class is an instance of ModelReferenceDataLibrary
       */
    ModelReferenceDataLibrary,
      /**
       * Assertian that the Class is an instance of MultiRelationship
       */
    MultiRelationship,
      /**
       * Assertian that the Class is an instance of MultiRelationshipRule
       */
    MultiRelationshipRule,
      /**
       * Assertian that the Class is an instance of NaturalLanguage
       */
    NaturalLanguage,
      /**
       * Assertian that the Class is an instance of NestedElement
       */
    NestedElement,
      /**
       * Assertian that the Class is an instance of NestedParameter
       */
    NestedParameter,
      /**
       * Assertian that the Class is an instance of note
       */
    Note,
      /**
       * Assertian that the Class is an instance of NotExpression
       */
    NotExpression,
      /**
       * Assertian that the Class is an instance of NotThing
       */
    NotThing,
      /**
       * Assertian that the Class is an instance of option
       */
    Option,
      /**
       * Assertian that the Class is an instance of OrdinalScale
       */
    OrdinalScale,
      /**
       * Assertian that the Class is an instance of OrExpression
       */
    OrExpression,
      /**
       * Assertian that the Class is an instance of Organization
       */
    Organization,
      /**
       * Assertian that the Class is an instance of OwnedStyle
       */
    OwnedStyle,
      /**
       * Assertian that the Class is an instance of page
       */
    Page,
      /**
       * Assertian that the Class is an instance of Parameter
       */
    Parameter,
      /**
       * Assertian that the Class is an instance of ParameterBase
       */
    ParameterBase,
      /**
       * Assertian that the Class is an instance of ParameterGroup
       */
    ParameterGroup,
      /**
       * Assertian that the Class is an instance of ParameterizedCategoryRule
       */
    ParameterizedCategoryRule,
      /**
       * Assertian that the Class is an instance of ParameterOrOverrideBase
       */
    ParameterOrOverrideBase,
      /**
       * Assertian that the Class is an instance of ParameterOverride
       */
    ParameterOverride,
      /**
       * Assertian that the Class is an instance of ParameterOverrideValueSet
       */
    ParameterOverrideValueSet,
      /**
       * Assertian that the Class is an instance of ParameterSubscription
       */
    ParameterSubscription,
      /**
       * Assertian that the Class is an instance of ParameterSubscriptionValueSet
       */
    ParameterSubscriptionValueSet,
      /**
       * Assertian that the Class is an instance of ParameterType
       */
    ParameterType,
      /**
       * Assertian that the Class is an instance of ParameterTypeComponent
       */
    ParameterTypeComponent,
      /**
       * Assertian that the Class is an instance of ParameterValue
       */
    ParameterValue,
      /**
       * Assertian that the Class is an instance of ParameterValueSet
       */
    ParameterValueSet,
      /**
       * Assertian that the Class is an instance of ParameterValueSetBase
       */
    ParameterValueSetBase,
      /**
       * Assertian that the Class is an instance of ParametricConstraint
       */
    ParametricConstraint,
      /**
       * Assertian that the Class is an instance of Participant
       */
    Participant,
      /**
       * Assertian that the Class is an instance of ParticipantPermission
       */
    ParticipantPermission,
      /**
       * Assertian that the Class is an instance of ParticipantRole
       */
    ParticipantRole,
      /**
       * Assertian that the Class is an instance of Person
       */
    Person,
      /**
       * Assertian that the Class is an instance of PersonPermission
       */
    PersonPermission,
      /**
       * Assertian that the Class is an instance of PersonRole
       */
    PersonRole,
      /**
       * Assertian that the Class is an instance of Point
       */
    Point,
      /**
       * Assertian that the Class is an instance of PossibleFiniteState
       */
    PossibleFiniteState,
      /**
       * Assertian that the Class is an instance of PossibleFiniteStateList
       */
    PossibleFiniteStateList,
      /**
       * Assertian that the Class is an instance of PrefixedUnit
       */
    PrefixedUnit,
      /**
       * Assertian that the Class is an instance of Publication
       */
    Publication,
      /**
       * Assertian that the Class is an instance of QuantityKind
       */
    QuantityKind,
      /**
       * Assertian that the Class is an instance of QuantityKindFactor
       */
    QuantityKindFactor,
      /**
       * Assertian that the Class is an instance of RatioScale
       */
    RatioScale,
      /**
       * Assertian that the Class is an instance of ReferenceDataLibrary
       */
    ReferenceDataLibrary,
      /**
       * Assertian that the Class is an instance of ReferencerRule
       */
    ReferencerRule,
      /**
       * Assertian that the Class is an instance of ReferenceSource
       */
    ReferenceSource,
      /**
       * Assertian that the Class is an instance of RelationalExpression
       */
    RelationalExpression,
      /**
       * Assertian that the Class is an instance of Relationship
       */
    Relationship,
      /**
       * Assertian that the Class is an instance of RelationshipParameterValue
       */
    RelationshipParameterValue,
      /**
       * Assertian that the Class is an instance of RequestForDeviation
       */
    RequestForDeviation,
      /**
       * Assertian that the Class is an instance of RequestForWaiver
       */
    RequestForWaiver,
      /**
       * Assertian that the Class is an instance of Requirement
       */
    Requirement,
      /**
       * Assertian that the Class is an instance of RequirementsContainer
       */
    RequirementsContainer,
      /**
       * Assertian that the Class is an instance of RequirementsContainerParameterValue
       */
    RequirementsContainerParameterValue,
      /**
       * Assertian that the Class is an instance of RequirementsGroup
       */
    RequirementsGroup,
      /**
       * Assertian that the Class is an instance of RequirementsSpecification
       */
    RequirementsSpecification,
      /**
       * Assertian that the Class is an instance of ReviewItemDiscrepancy
       */
    ReviewItemDiscrepancy,
      /**
       * Assertian that the Class is an instance of Rule
       */
    Rule,
      /**
       * Assertian that the Class is an instance of RuleVerification
       */
    RuleVerification,
      /**
       * Assertian that the Class is an instance of RuleVerificationList
       */
    RuleVerificationList,
      /**
       * Assertian that the Class is an instance of RuleViolation
       */
    RuleViolation,
      /**
       * Assertian that the Class is an instance of ScalarParameterType
       */
    ScalarParameterType,
      /**
       * Assertian that the Class is an instance of ScaleReferenceQuantityValue
       */
    ScaleReferenceQuantityValue,
      /**
       * Assertian that the Class is an instance of ScaleValueDefinition
       */
    ScaleValueDefinition,
      /**
       * Assertian that the Class is an instance of section
       */
    Section,
      /**
       * Assertian that the Class is an instance of SharedStyle
       */
    SharedStyle,
      /**
       * Assertian that the Class is an instance of SimpleParameterizableThing
       */
    SimpleParameterizableThing,
      /**
       * Assertian that the Class is an instance of SimpleParameterValue
       */
    SimpleParameterValue,
      /**
       * Assertian that the Class is an instance of SimpleQuantityKind
       */
    SimpleQuantityKind,
      /**
       * Assertian that the Class is an instance of SimpleUnit
       */
    SimpleUnit,
      /**
       * Assertian that the Class is an instance of SiteDirectory
       */
    SiteDirectory,
      /**
       * Assertian that the Class is an instance of SiteDirectoryDataAnnotation
       */
    SiteDirectoryDataAnnotation,
      /**
       * Assertian that the Class is an instance of SiteDirectoryDataDiscussionItem
       */
    SiteDirectoryDataDiscussionItem,
      /**
       * Assertian that the Class is an instance of SiteDirectoryThingReference
       */
    SiteDirectoryThingReference,
      /**
       * Assertian that the Class is an instance of SiteLogEntry
       */
    SiteLogEntry,
      /**
       * Assertian that the Class is an instance of SiteReferenceDataLibrary
       */
    SiteReferenceDataLibrary,
      /**
       * Assertian that the Class is an instance of Solution
       */
    Solution,
      /**
       * Assertian that the Class is an instance of SpecializedQuantityKind
       */
    SpecializedQuantityKind,
      /**
       * Assertian that the Class is an instance of Stakeholder
       */
    Stakeholder,
      /**
       * Assertian that the Class is an instance of StakeholderValue
       */
    StakeholderValue,
      /**
       * Assertian that the Class is an instance of StakeHolderValueMap
       */
    StakeHolderValueMap,
      /**
       * Assertian that the Class is an instance of StakeHolderValueMapSettings
       */
    StakeHolderValueMapSettings,
      /**
       * Assertian that the Class is an instance of TelephoneNumber
       */
    TelephoneNumber,
      /**
       * Assertian that the Class is an instance of Term
       */
    Term,
      /**
       * Assertian that the Class is an instance of TextParameterType
       */
    TextParameterType,
      /**
       * Assertian that the Class is an instance of TextualNote
       */
    TextualNote,
      /**
       * Assertian that the Class is an instance of Thing
       */
    Thing,
      /**
       * Assertian that the Class is an instance of ThingReference
       */
    ThingReference,
      /**
       * Assertian that the Class is an instance of TimeOfDayParameterType
       */
    TimeOfDayParameterType,
      /**
       * Assertian that the Class is an instance of TopContainer
       */
    TopContainer,
      /**
       * Assertian that the Class is an instance of UnitFactor
       */
    UnitFactor,
      /**
       * Assertian that the Class is an instance of UnitPrefix
       */
    UnitPrefix,
      /**
       * Assertian that the Class is an instance of UserPreference
       */
    UserPreference,
      /**
       * Assertian that the Class is an instance of UserRuleVerification
       */
    UserRuleVerification,
      /**
       * Assertian that the Class is an instance of ValueGroup
       */
    ValueGroup    }

  /**
   * enumeration datatype that defines the possible access rights for a class of objects in a PersonPermission
   * note 1: The relevant class of objects is specified in the <i>objectClass</i> property of a PersonPermission.
   * note 2: PersonAccessRightKind.MODIFY implies read, create and update actions, and if delete is allowed, deleted actions as well.
   * note 3: PersonAccessRightKind.MODIFY access to an object also implies the right to modify the container collection that contains the object, even if the access right to the container collection object is limited to PersonAccessRightKind.READ.
   */
  export enum PersonAccessRightKind {
    /**
     * assertion that Person access to the given class of objects is not applicable
     */
    NOT_APPLICABLE,
      /**
       * no access
       */
    NONE,
      /**
       * access right to a given class of objects is the same as that of the class of its container object
       */
    SAME_AS_CONTAINER,
      /**
       * access right to a given class of objects is the same as that of its superclass
       */
    SAME_AS_SUPERCLASS,
      /**
       * read-only access
       */
    READ,
      /**
       * modify access
       */
    MODIFY,
      /**
       * read-only access to information contained in EngineeringModelSetups where the authenticated Person is a Participant
       * note: If an authenticated Person has PersonAccessRightKind.MODIFY_OWN_PERSON to the ClassKind.Person, then READ_IF_PARTICIPANT also implies READ access on any Person that is associated with any Participant in any of the EngineeringModelSetups in which the authenticated Person is a Participant. In other words, READ access to the union of Persons referenced by Participants in the union of EngineeringModelSetups for which the authenticated Person has at least READ_IF_PARTICIPANT access. Basically this means that a Participant has access to the information describing the other Participants and Persons in a team that he or she is a member of.
       */
    READ_IF_PARTICIPANT,
      /**
       * modify access to information contained in EngineeringModelSetups where the authenticated Person is a Participant
       */
    MODIFY_IF_PARTICIPANT,
      /**
       * modify access to the Person data of the actual authenticated person (i.e. user) in a session
       */
    MODIFY_OWN_PERSON    }

  /**
   * enumeration datatype that defines the possible access rights for a class of objects in a ParticipantPermission
   * note 1: The relevant class of objects is specified in the <i>objectClass</i> property of a ParticipantPermission.
   * note 2: ParticipantAccessRightKind.MODIFY implies read, create and update actions, and if delete is allowed, deleted actions as well.
   * note 3: ParticipantAccessRightKind.MODIFY access to an object also implies the right to modify the container collection that contains the object, even if the access right to the container collection object is limited to ParticipantAccessRightKind.READ.
   */
  export enum ParticipantAccessRightKind {
    /**
     * assertion that Participant access to the given class of objects is not applicable
     */
    NOT_APPLICABLE,
      /**
       * no access
       */
    NONE,
      /**
       * access right to a given class of objects is the same as that of the class of its container object
       */
    SAME_AS_CONTAINER,
      /**
       * access right to a given class of objects is the same as that of its superclass
       */
    SAME_AS_SUPERCLASS,
      /**
       * read-only access
       */
    READ,
      /**
       * modify access
       */
    MODIFY,
      /**
       * modify access for objects owned by a selected DomainOfExpertise
       * note: A Participant in a concurrent engineering session can only represent one DomainOfExpertise at a time, but may switch between the (possible) domains assigned to the Participant.
       */
    MODIFY_IF_OWNER    }

  /**
   * enumeration datatype that defines the possible levels for a LogEntry
   */
  export enum LogLevelKind {
    /**
     * designation of a trace level log entry used to mark and annotate very low level detailed event logging for software development or problem fixing purposes
     */
    TRACE,
      /**
       * designation of a debug level log entry used to mark and annotate low level detailed event logging for software development or problem fixing purposes
       */
    DEBUG,
      /**
       * designation of an information level log entry used to mark and annotate event logging for information
       * note: Information level LogEntry instances are typically produced automatically by executing applications.
       */
    INFO,
      /**
       * designation of a user level log entry used to mark and annotate event logging with user defined content
       * note: User level LogEntry instances are typically produced on demand by a human user and its <i>content</i> is typically manually written. Its use is similar to the log message used upon commit or check-in in a configuration control system.
       */
    USER    }

  /**
   * enumeration datatype that represents a simple set of boolean operators
   * note: For an explanation of the operators see <a href="http://en.wikipedia.org/wiki/Boolean_algebra#Basic_operations">Wikipedia
   *       Boolean_algebra Basic_operations</a>.
   */
  export enum BooleanOperatorKind {
    /**
     * conjunction boolean operator
     * note: When both operands are true then the result is true, otherwise false.
     */
    AND,
      /**
       * disjunction boolean operator
       * note: When at least one operand is true then the result is true,
       *       otherwise false.
       */
    OR,
      /**
       * exclusive or boolean operator
       * note: When one operand is true and the other is false then the result is
       *       true, when both operands are true or both are false then the result is
       *       false.
       */
    XOR    }

  /**
   * enumeration datatype that represents the possible operators for equalities
   *     and inequalities
   */
  export enum RelationalOperatorKind {
    /**
     * equal
     */
    EQ,
      /**
       * not equal
       */
    NE,
      /**
       * less than
       */
    LT,
      /**
       * greater than
       */
    GT,
      /**
       * less than or equal
       */
    LE,
      /**
       * greater than or equal
       */
    GE    }

  /**
   * enumeration datatype that asserts whether an ElementUsage is an interface end, and if so, what kind of role the interface end fulfills
   * note: An <i>interface end</i> is one side of an interface. A complete interface consists of at least two interface ends and a connection between them.
   */
  export enum InterfaceEndKind {
    /**
     * not an interface end
     */
    NONE,
      /**
       * general undirected interface end
       * Example: For example a mechanical mounting plate.
       */
    UNDIRECTED,
      /**
       * interface end that acts as an input for its <i>containingElement</i> ElementDefinition
       * Example: For example a power inlet socket.
       */
    INPUT,
      /**
       * interface end that acts as an output for its <i>containingElement</i> ElementDefinition
       * Example: For example a signal output connector on a sensor.
       */
    OUTPUT,
      /**
       * interface end that acts both as an input and an output for its <i>containingElement</i> ElementDefinition
       * Example: For example an Ethernet port on an electronic device.
       */
    IN_OUT    }

  /**
   * enumeration datatype that defines the possible switch settings to select a value in a ParameterValueSet or a ParameterSubscriptionValueSet
   * note: In this concurrent engineering model all parameters (see Parameter and ParameterOverride) and parameter subscriptions (see ParameterSubscription) have 3 possible values:  <i>computed</i>, <i>manual</i> and <i>reference</i>, and a <i>valueSwitch</i> to select the actual value to be used for modelling purposes. The <i>computed</i> value is the value as computed by the owner (DomainOfExpertise) of a Parameter or ParameterOverride, or in case of a ParameterSubscription it is derived from the referenced <i>published</i> value (see Publication and ParameterSubscriptionValueSet). The <i>manual</i> value is a literal value set by the owner of a Parameter, ParameterOverride or ParameterSubscription. Finally, the <i>reference</i> value is another value to be used as a reference in comparisons. Such values would typically be imported from another source than the current EngineeringModel.
   */
  export enum ParameterSwitchKind {
    /**
     * assertion that the computed value of a Parameter, ParameterOverride or ParameterSubscription will be used as the actual value
     */
    COMPUTED,
      /**
       * assertion that the manual value of a Parameter, ParameterOverride or ParameterSubscription will be used as the actual value
       */
    MANUAL,
      /**
       * assertion that the reference value of a Parameter, ParameterOverride or ParameterSubscription will be used as the actual value
       */
    REFERENCE    }

  /**
   * enumeration datatype that defines the possible kinds of ActualFiniteState
   */
  export enum ActualFiniteStateKind {
    /**
     * assertion that an ActualFiniteState is mandatory, i.e. shall be used as an actualState on a ParameterValueSet or ParameterSubscriptionValueSet for a Parameter that has a <i>stateDependence</i> on the ActualFiniteStateList that contains the ActualFiniteState
     */
    MANDATORY,
      /**
       * assertion that an ActualFiniteState is forbidden, i.e. shall be not used as an actualState on a ParameterValueSet or ParameterSubscriptionValueSet for a Parameter that has a <i>stateDependence</i> on the ActualFiniteStateList that contains the ActualFiniteState
       */
    FORBIDDEN    }

  /**
   * enumeration datatype that represents the possible values for the status of the executed verification of a rule
   */
  export enum RuleVerificationStatusKind {
    /**
     * verification has not been executed yet
     */
    NONE,
      /**
       * verification passed successfully, the rule is satisfied
       */
    PASSED,
      /**
       * verification failed, the rule is violated
       */
    FAILED,
      /**
       * verification was executed, but no verdict could be produced
       */
    INCONCLUSIVE    }

  /**
   * Enumeration datatype that defines the status of a annotation
   */
  export enum AnnotationStatusKind {
    /**
     */
    OPEN,
      /**
       */
    DONE,
      /**
       */
    CLOSED,
      /**
       */
    INVALID,
      /**
       */
    WONTFIX,
      /**
       */
    NOT_APPLICABLE    }

  /**
   * Enumeration datatype that defines the possible states of an Approval item
   */
  export enum AnnotationApprovalKind {
    /**
     * Assertion that the annotation was accepted
     */
    ACCEPTED,
      /**
       * Assertion that the annotation was rejected
       */
    REJECTED,
      /**
       * Assertion that the annotation was withdrawn
       */
    WITHDRAWN    }

  /**
   * Enumeration datatype that describes the different classification of a ModellingAnnotationItem
   */
  export enum AnnotationClassificationKind {
    /**
     * Assertion that defines that the ModellingAnnotation is classified as Major
     */
    MAJOR,
      /**
       * Assertion that describes that the ModellingAnnotation is classified as Minor
       */
    MINOR    }


  /**
   * Represents the equivalent TypeScript interface of CategorizableThingInterface" in the DTO space.
   */
  export interface CategorizableThingInterface {
    /**
     * Gets or sets the category
     */
    category: string[];

  }


  /**
   * Represents the equivalent TypeScript interface of ParticipantAffectedAccessThingInterface" in the DTO space.
   */
  export interface ParticipantAffectedAccessThingInterface {
  }


  /**
   * Represents the equivalent TypeScript interface of AnnotationInterface" in the DTO space.
   */
  export interface AnnotationInterface {
    /**
     * Gets or sets the languageCode
     */
    languageCode: string;

    /**
     * Gets or sets the content
     */
    content: string;

  }


  /**
   * Represents the equivalent TypeScript interface of NamedThingInterface" in the DTO space.
   */
  export interface NamedThingInterface {
    /**
     * Gets or sets the name
     */
    name: string;

  }


  /**
   * Represents the equivalent TypeScript interface of ShortNamedThingInterface" in the DTO space.
   */
  export interface ShortNamedThingInterface {
    /**
     * Gets or sets the shortName
     */
    shortName: string;

  }


  /**
   * Represents the equivalent TypeScript interface of TimeStampedThingInterface" in the DTO space.
   */
  export interface TimeStampedThingInterface {
    /**
     * Gets or sets the createdOn
     */
    createdOn: string;

  }


  /**
   * Represents the equivalent TypeScript interface of DeprecatableThingInterface" in the DTO space.
   */
  export interface DeprecatableThingInterface {
    /**
     * Gets or sets the isDeprecated
     */
    isDeprecated: boolean;

  }


  /**
   * Represents the equivalent TypeScript interface of LogEntryInterface" in the DTO space.
   */
  export interface LogEntryInterface {
    /**
     * Gets or sets the author
     */
    author: string;

    /**
     * Gets or sets the affectedItemIid
     */
    affectedItemIid: string[];

    /**
     * Gets or sets the level
     */
    level: LogLevelKind;

  }


  /**
   * Represents the equivalent TypeScript interface of VolatileThingInterface" in the DTO space.
   */
  export interface VolatileThingInterface {
    /**
     * Gets or sets the isVolatile
     */
    isVolatile: boolean;

  }


  /**
   * Represents the equivalent TypeScript interface of OptionDependentThingInterface" in the DTO space.
   */
  export interface OptionDependentThingInterface {
    /**
     * Gets or sets the excludeOption
     */
    excludeOption: string[];

  }


  /**
   * Represents the equivalent TypeScript interface of OwnedThingInterface" in the DTO space.
   */
  export interface OwnedThingInterface {
    /**
     * Gets or sets the owner
     */
    owner: string;

  }


  /**
   * A TypeScript DTO representation of the DTOThing class.
   */
  export abstract class Thing {
    /**
     * The partial routes that were added
     */
    private partialRoutes: string[];

    /**
     * The partial classkind routes that were added
     */
    private partialClassKindRoutes: ClassKind[];

    /**
     * The backing field for container
     */
    private _container: Dto.Thing;

    /**
     * The backing field for isOriginal
     */
    private _isOriginal: boolean = false;

    /**
     * Initializes a new instance of the <see cref="DTOThing"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      this.iid = iid;
      this.classKind = this.computeCurrentClassKind();
      this.revisionNumber = rev;
      this._isOriginal = isOriginal;
      this.partialClassKindRoutes = new Array<ClassKind>();
      this.partialRoutes = new Array<string>();
      this.excludedPerson = [];
      this.excludedDomain = [];
    }

    /**
     * Gets or sets the iid
     */
    public iid: string;

    public revisionNumber: number;

    public classKind: ClassKind;

    /**
     * Gets or sets the modifiedOn
     */
    public modifiedOn: string;

    /**
     * Gets or sets the excludedPerson
     */
    public excludedPerson: string[];

    /**
     * Gets or sets the excludedDomain
     */
    public excludedDomain: string[];

    /**
     * Gets the route for the current <see ref="Thing"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

    /**
     * The iteration id in which this thing is contained
     */
    public iterationContainerId : string;

    /**
     * Gets a value indicating whether the thing is original
     */
    public get isOriginal() : boolean {
      return this._isOriginal;
    }

    /**
     * Gets the container of this Thing
     */
    public get container() : Dto.Thing {
      if (!Utils.isUndefinedOrNull(this._container)) {
        return this._container;
      }

      if (this instanceof TopContainer) {
        return null;
      }

      throw new Error(`The container of the ${ClassKind[this.classKind]} ${this.iid} is null or undefined.`);
    }

    /**
     * Sets the container of this Thing
     */
    public set container(container: Dto.Thing) {
      this._container = container;
    }

    /**
     * Gets the top-container of this thing
     * @returns {} The top-container
     */
    public get topContainer(): Thing {
      let topcontainer: Thing = this;
      while (!(topcontainer instanceof TopContainer)) {
        if (Utils.isUndefinedOrNull(this.container)) {
          throw new Error("A container is not set in the containment tree. The top container cannot be computed");
        }

        topcontainer = topcontainer.container;
      }

      return topcontainer;
    }

    /**
     * The key used in the cache to store this thing
     */
    public get cacheId() : string {
      return (Utils.isUndefinedOrNull(this.iterationContainerId)) ? this.iid : this.iid + ";" + this.iterationContainerId;
    }

    /**
     * Gets the route from the defined container
     * @returns {} the route for this thing
     */
    public get routeFromContainer(): string {
      let containerThing = this.container;
      const containerList: Thing[] = [];
      while (!Utils.isUndefinedOrNull(containerThing)) {
        containerList.push(containerThing);
        containerThing = containerThing.container;
      }

      const containerPropertyName = Metadata.getContainerInfo(ClassKind[this.classKind]).propertyName;
      const partialRoute = containerPropertyName + "/" + this.iid;

      if (containerList.length === 0) {
        if (this instanceof TopContainer) {
          return "/" + partialRoute;
        }

        throw new Error(`No container is defined for the ${ClassKind[this.classKind]} ${this.iid}`);
      }

      containerList.reverse();
      const partialRoutes = containerList.map(x => Metadata.getContainerInfo(ClassKind[x.classKind]).propertyName + "/" + x.iid);
      partialRoutes.push(partialRoute);

      return "/" + partialRoutes.join("/");
    }
    /**
     * Compute the route given the current state of partial routes that were added
     */
    protected computedRoute() : string {
      const temporaryList = new Array<string>();
      for (let i = 0; i < this.partialRoutes.length; i++) {
        const index = this.partialRoutes.length - 1 - i;
        temporaryList.push(this.partialRoutes[index]);
      }

      const containerRoute = temporaryList.join("/");

      const containerPropertyName = Metadata.getContainerInfo(ClassKind[this.classKind]).propertyName;
      const partialRoute = containerPropertyName + "/" + this.iid;

      if (!containerRoute) {
        return "/" + partialRoute;
      }

      return "/" + containerRoute + "/" + partialRoute;
    }

    /**
     * Add a container to a Thing
     * @param classKind The classkind of the container
     * @param iid the id of the container
     */
    public addContainer(classKind: ClassKind, iid: string) {
      const lastRouteClassKind = this.partialClassKindRoutes.length === 0 ? this.classKind : this.partialClassKindRoutes[this.partialClassKindRoutes.length - 1];
      switch (lastRouteClassKind) {
        case ClassKind.SiteDirectory:
        case ClassKind.EngineeringModel:
          console.error("cannot add another container to a top container.");
        default:
          if (this.isAuthorizedRoute(lastRouteClassKind, classKind)) {
            const containerPropertyName = Metadata.getContainerInfo(ClassKind[classKind]);
            const partialRoute = containerPropertyName.propertyName + "/" + iid;
            this.partialRoutes.push(partialRoute);
            this.partialClassKindRoutes.push(classKind);
            break;
          }

          console.error("the added container of classkind: is not consistent with the existing route: " + ClassKind[classKind]);
      }
    }

    /**
     * Assert that the new added container is consistent with the container previously added
     * @param lastRoute container previously added
     * @param newRoute new container
     */
    private isAuthorizedRoute(lastRoute: ClassKind, newRoute: ClassKind) : boolean {
      const lastRouteContainerClass = Metadata.getContainerInfo(ClassKind[lastRoute]);
      if (newRoute === ClassKind[lastRouteContainerClass.classKind]) {
        return true;
      }

      // the newRoute may not correspond to the container class because the container class is abstract.
      // Check if the parent of the added container is that abstract class
      let parent = Metadata.getBaseType(ClassKind[newRoute]);
      while (parent !== "Thing") {
        if (parent === lastRouteContainerClass.classKind) {
          return true;
        }

        parent = Metadata.getBaseType(parent);
      }

      return false;
    }

    /**
     * Computes the proper ClassKind of any given Thing.
     * @param thing
     */
    private computeCurrentClassKind(): ClassKind {
      return ClassKind[this.constructor.name];
    }
  }


  /**
   * A TypeScript DTO representation of the DTODefinedThing class.
   */
  export abstract class DefinedThing extends Thing implements NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTODefinedThing"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.alias = [];
      this.definition = [];
      this.hyperLink = [];
    }

    /**
     * Gets or sets the alias
     */
    public alias: string[];

    /**
     * Gets or sets the definition
     */
    public definition: string[];

    /**
     * Gets or sets the hyperLink
     */
    public hyperLink: string[];

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

  }


  /**
   * A TypeScript DTO representation of the DTOTopContainer class.
   */
  export abstract class TopContainer extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOTopContainer"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the lastModifiedOn
     */
    public lastModifiedOn: string;

  }


  /**
   * A TypeScript DTO representation of the DTOParameterBase class.
   */
  export abstract class ParameterBase extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterBase"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the stateDependence
     */
    public stateDependence: string;

    /**
     * Gets or sets the group
     */
    public group: string;

    /**
     * Gets or sets the isOptionDependent
     */
    public isOptionDependent: boolean;

    /**
     * Gets or sets the owner
     */
    public owner: string;

  }


  /**
   * A TypeScript DTO representation of the DTOFileStore class.
   */
  export abstract class FileStore extends Thing implements NamedThingInterface, TimeStampedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOFileStore"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.folder = [];
      this.file = [];
    }

    /**
     * Gets or sets the folder
     */
    public folder: string[];

    /**
     * Gets or sets the file
     */
    public file: string[];

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

  }


  /**
   * A TypeScript DTO representation of the DTORelationship class.
   */
    //@Container("Iteration", "Relationship")
  export abstract class Relationship extends Thing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORelationship"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterValue = [];
      this.category = [];
    }

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="Relationship"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOBooleanExpression class.
   */
    //@Container("ParametricConstraint", "Expression")
  export abstract class BooleanExpression extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOBooleanExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="BooleanExpression"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterValueSetBase class.
   */
  export abstract class ParameterValueSetBase extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterValueSetBase"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.published = [];
      this.formula = [];
      this.computed = [];
      this.manual = [];
      this.reference = [];
    }

    /**
     * Gets or sets the valueSwitch
     */
    public valueSwitch: ParameterSwitchKind;

    /**
     * Gets or sets the published
     */
    public published: string[];

    /**
     * Gets or sets the formula
     */
    public formula: string[];

    /**
     * Gets or sets the computed
     */
    public computed: string[];

    /**
     * Gets or sets the manual
     */
    public manual: string[];

    /**
     * Gets or sets the reference
     */
    public reference: string[];

    /**
     * This is a derived property!
     */
    public get actualValue() : string[] {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the actualState
     */
    public actualState: string;

    /**
     * Gets or sets the actualOption
     */
    public actualOption: string;

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

  }


  /**
   * A TypeScript DTO representation of the DTORuleVerification class.
   */
    //@Container("RuleVerificationList", "RuleVerification")
  export abstract class RuleVerification extends Thing implements NamedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORuleVerification"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.violation = [];
    }

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the isActive
     */
    public isActive: boolean;

    /**
     * Gets or sets the violation
     */
    public violation: string[];

    /**
     * Gets or sets the executedOn
     */
    public executedOn: string;

    /**
     * Gets or sets the status
     */
    public status: RuleVerificationStatusKind;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets the route for the current <see ref="RuleVerification"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterValue class.
   */
    //@CDPVersion("1.1.0")
  export abstract class ParameterValue extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOParameterValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.value = [];
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the value
     */
    public value: string[];

  }


  /**
   * A TypeScript DTO representation of the DTONote class.
   */
    //@CDPVersion("1.1.0")
    //@Container("page", "note")
  export abstract class Note extends Thing implements ShortNamedThingInterface, NamedThingInterface, CategorizableThingInterface, TimeStampedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTONote"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="note"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOThingReference class.
   */
    //@CDPVersion("1.1.0")
  export abstract class ThingReference extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOThingReference"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the referencedRevisionNumber
     */
    public referencedRevisionNumber: number;

    /**
     * Gets or sets the referencedThing
     */
    public referencedThing: string;

  }


  /**
   * A TypeScript DTO representation of the DTOGenericAnnotation class.
   */
    //@CDPVersion("1.1.0")
  export abstract class GenericAnnotation extends Thing implements AnnotationInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOGenericAnnotation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

  }


  /**
   * A TypeScript DTO representation of the DTODiagramThingBase class.
   */
    //@CDPVersion("1.1.0")
  export abstract class DiagramThingBase extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTODiagramThingBase"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the name
     */
    public name: string;

  }


  /**
   * A TypeScript DTO representation of the DTOReferenceDataLibrary class.
   */
  export abstract class ReferenceDataLibrary extends DefinedThing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOReferenceDataLibrary"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.definedCategory = [];
      this.parameterType = [];
      this.baseQuantityKind = [];
      this.scale = [];
      this.unitPrefix = [];
      this.unit = [];
      this.baseUnit = [];
      this.fileType = [];
      this.glossary = [];
      this.referenceSource = [];
      this.rule = [];
      this.constant = [];
    }

    /**
     * Gets or sets the definedCategory
     */
    public definedCategory: string[];

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string[];

    /**
     * Gets or sets the baseQuantityKind
     */
    public baseQuantityKind: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the scale
     */
    public scale: string[];

    /**
     * Gets or sets the unitPrefix
     */
    public unitPrefix: string[];

    /**
     * Gets or sets the unit
     */
    public unit: string[];

    /**
     * Gets or sets the baseUnit
     */
    public baseUnit: string[];

    /**
     * Gets or sets the fileType
     */
    public fileType: string[];

    /**
     * Gets or sets the glossary
     */
    public glossary: string[];

    /**
     * Gets or sets the referenceSource
     */
    public referenceSource: string[];

    /**
     * Gets or sets the rule
     */
    public rule: string[];

    /**
     * Gets or sets the requiredRdl
     */
    public requiredRdl: string;

    /**
     * Gets or sets the constant
     */
    public constant: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOMeasurementScale class.
   */
    //@Container("ReferenceDataLibrary", "Scale")
  export abstract class MeasurementScale extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOMeasurementScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueDefinition = [];
      this.mappingToReferenceScale = [];
    }

    /**
     * Gets or sets the unit
     */
    public unit: string;

    /**
     * Gets or sets the valueDefinition
     */
    public valueDefinition: string[];

    /**
     * Gets or sets the numberSet
     */
    public numberSet: NumberSetKind;

    /**
     * Gets or sets the minimumPermissibleValue
     */
    public minimumPermissibleValue: string;

    /**
     * Gets or sets the isMinimumInclusive
     */
    public isMinimumInclusive: boolean;

    /**
     * Gets or sets the maximumPermissibleValue
     */
    public maximumPermissibleValue: string;

    /**
     * Gets or sets the isMaximumInclusive
     */
    public isMaximumInclusive: boolean;

    /**
     * Gets or sets the positiveValueConnotation
     */
    public positiveValueConnotation: string;

    /**
     * Gets or sets the negativeValueConnotation
     */
    public negativeValueConnotation: string;

    /**
     * Gets or sets the mappingToReferenceScale
     */
    public mappingToReferenceScale: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="MeasurementScale"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterType class.
   */
    //@Container("ReferenceDataLibrary", "ParameterType")
  export abstract class ParameterType extends DefinedThing implements DeprecatableThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * This is a derived property!
     */
    public get numberOfValues() : number {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the symbol
     */
    public symbol: string;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="ParameterType"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOMeasurementUnit class.
   */
    //@Container("ReferenceDataLibrary", "Unit")
  export abstract class MeasurementUnit extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOMeasurementUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="MeasurementUnit"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORule class.
   */
    //@Container("ReferenceDataLibrary", "Rule")
  export abstract class Rule extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Rule"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOElementBase class.
   */
  export abstract class ElementBase extends DefinedThing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOElementBase"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

  }


  /**
   * A TypeScript DTO representation of the DTORequirementsContainer class.
   */
  export abstract class RequirementsContainer extends DefinedThing implements OwnedThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORequirementsContainer"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.group = [];
      this.parameterValue = [];
      this.category = [];
    }

    /**
     * Gets or sets the group
     */
    public group: string[];

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOSimpleParameterizableThing class.
   */
  export abstract class SimpleParameterizableThing extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSimpleParameterizableThing"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterValue = [];
    }

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

  }


  /**
   * A TypeScript DTO representation of the DTOParameterOrOverrideBase class.
   */
  export abstract class ParameterOrOverrideBase extends ParameterBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameterOrOverrideBase"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterSubscription = [];
    }

    /**
     * Gets or sets the parameterSubscription
     */
    public parameterSubscription: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOEngineeringModelDataAnnotation class.
   */
    //@CDPVersion("1.1.0")
  export abstract class EngineeringModelDataAnnotation extends GenericAnnotation {

    /**
     * Initializes a new instance of the <see cref="DTOEngineeringModelDataAnnotation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedThing = [];
      this.discussion = [];
    }

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the primaryAnnotatedThing
     */
    public primaryAnnotatedThing: string;

    /**
     * Gets or sets the discussion
     */
    public discussion: string[];

  }


  /**
   * A TypeScript DTO representation of the DTODiscussionItem class.
   */
    //@CDPVersion("1.1.0")
  export abstract class DiscussionItem extends GenericAnnotation {

    /**
     * Initializes a new instance of the <see cref="DTODiscussionItem"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the replyTo
     */
    public replyTo: string;

  }


  /**
   * A TypeScript DTO representation of the DTODiagrammingStyle class.
   */
    //@CDPVersion("1.1.0")
  export abstract class DiagrammingStyle extends DiagramThingBase {

    /**
     * Initializes a new instance of the <see cref="DTODiagrammingStyle"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.usedColor = [];
    }

    /**
     * Gets or sets the fillColor
     */
    public fillColor: string;

    /**
     * Gets or sets the fillOpacity
     */
    public fillOpacity: number;

    /**
     * Gets or sets the strokeWidth
     */
    public strokeWidth: number;

    /**
     * Gets or sets the strokeOpacity
     */
    public strokeOpacity: number;

    /**
     * Gets or sets the strokeColor
     */
    public strokeColor: string;

    /**
     * Gets or sets the fontSize
     */
    public fontSize: number;

    /**
     * Gets or sets the fontName
     */
    public fontName: string;

    /**
     * Gets or sets the fontColor
     */
    public fontColor: string;

    /**
     * Gets or sets the fontItalic
     */
    public fontItalic: boolean;

    /**
     * Gets or sets the fontBold
     */
    public fontBold: boolean;

    /**
     * Gets or sets the fontUnderline
     */
    public fontUnderline: boolean;

    /**
     * Gets or sets the fontStrokeThrough
     */
    public fontStrokeThrough: boolean;

    /**
     * Gets or sets the usedColor
     */
    public usedColor: string[];

  }


  /**
   * A TypeScript DTO representation of the DTODiagramElementContainer class.
   */
    //@CDPVersion("1.1.0")
  export abstract class DiagramElementContainer extends DiagramThingBase {

    /**
     * Initializes a new instance of the <see cref="DTODiagramElementContainer"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.diagramElement = [];
      this.bounds = [];
    }

    /**
     * Gets or sets the diagramElement
     */
    public diagramElement: string[];

    /**
     * Gets or sets the bounds
     */
    public bounds: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOConversionBasedUnit class.
   */
  export abstract class ConversionBasedUnit extends MeasurementUnit {

    /**
     * Initializes a new instance of the <see cref="DTOConversionBasedUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the referenceUnit
     */
    public referenceUnit: string;

    /**
     * Gets or sets the conversionFactor
     */
    public conversionFactor: string;

  }


  /**
   * A TypeScript DTO representation of the DTOScalarParameterType class.
   */
  export abstract class ScalarParameterType extends ParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOScalarParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOModellingAnnotationItem class.
   */
    //@CDPVersion("1.1.0")
    //@Container("EngineeringModel", "ModellingAnnotation")
  export abstract class ModellingAnnotationItem extends EngineeringModelDataAnnotation implements OwnedThingInterface, ShortNamedThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOModellingAnnotationItem"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.approvedBy = [];
      this.sourceAnnotation = [];
      this.category = [];
    }

    /**
     * Gets or sets the status
     */
    public status: AnnotationStatusKind;

    /**
     * Gets or sets the title
     */
    public title: string;

    /**
     * Gets or sets the classification
     */
    public classification: AnnotationClassificationKind;

    /**
     * Gets or sets the approvedBy
     */
    public approvedBy: string[];

    /**
     * Gets or sets the sourceAnnotation
     */
    public sourceAnnotation: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="ModellingAnnotationItem"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODiagramElementThing class.
   */
    //@CDPVersion("1.1.0")
    //@Container("DiagramElementContainer", "DiagramElement")
  export abstract class DiagramElementThing extends DiagramElementContainer {

    /**
     * Initializes a new instance of the <see cref="DTODiagramElementThing"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.localStyle = [];
    }

    /**
     * Gets or sets the depictedThing
     */
    public depictedThing: string;

    /**
     * Gets or sets the localStyle
     */
    public localStyle: string[];

    /**
     * Gets or sets the sharedStyle
     */
    public sharedStyle: string;

    /**
     * Gets the route for the current <see ref="DiagramElementThing"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOQuantityKind class.
   */
  export abstract class QuantityKind extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOQuantityKind"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleScale = [];
    }

    /**
     * Gets or sets the possibleScale
     */
    public possibleScale: string[];

    /**
     * Gets or sets the defaultScale
     */
    public defaultScale: string;

    /**
     * This is a derived property!
     */
    public get allPossibleScale() : string[] {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the quantityDimensionSymbol
     */
    public quantityDimensionSymbol: string;

    /**
     * This is a derived property!
     */
    public get quantityDimensionExponent() : Cdp4Type.OrderedItem[] {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get quantityDimensionExpression() : string {
      throw new Error("this is a derived property");
    }

  }


  /**
   * A TypeScript DTO representation of the DTOContractDeviation class.
   */
    //@CDPVersion("1.1.0")
  export abstract class ContractDeviation extends ModellingAnnotationItem {

    /**
     * Initializes a new instance of the <see cref="DTOContractDeviation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTODiagramShape class.
   */
    //@CDPVersion("1.1.0")
  export abstract class DiagramShape extends DiagramElementThing {

    /**
     * Initializes a new instance of the <see cref="DTODiagramShape"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParticipantPermission class.
   */
    //@Container("ParticipantRole", "ParticipantPermission")
  export class ParticipantPermission extends Thing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParticipantPermission"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the accessRight
     */
    public accessRight: ParticipantAccessRightKind;

    /**
     * Gets or sets the objectClass
     */
    public objectClass: ClassKind;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="ParticipantPermission"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPerson class.
   */
    //@Container("SiteDirectory", "Person")
  export class Person extends Thing implements ShortNamedThingInterface, NamedThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPerson"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.emailAddress = [];
      this.telephoneNumber = [];
      this.userPreference = [];
    }

    /**
     * Gets or sets the organization
     */
    public organization: string;

    /**
     * Gets or sets the givenName
     */
    public givenName: string;

    /**
     * Gets or sets the surname
     */
    public surname: string;

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the organizationalUnit
     */
    public organizationalUnit: string;

    /**
     * Gets or sets the emailAddress
     */
    public emailAddress: string[];

    /**
     * Gets or sets the telephoneNumber
     */
    public telephoneNumber: string[];

    /**
     * Gets or sets the defaultDomain
     */
    public defaultDomain: string;

    /**
     * Gets or sets the isActive
     */
    public isActive: boolean;

    /**
     * Gets or sets the role
     */
    public role: string;

    /**
     * Gets or sets the password
     */
    public password: string;

    /**
     * Gets or sets the defaultEmailAddress
     */
    public defaultEmailAddress: string;

    /**
     * Gets or sets the defaultTelephoneNumber
     */
    public defaultTelephoneNumber: string;

    /**
     * Gets or sets the userPreference
     */
    public userPreference: string[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Person"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOOrganization class.
   */
    //@Container("SiteDirectory", "Organization")
  export class Organization extends Thing implements NamedThingInterface, ShortNamedThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOOrganization"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Organization"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParticipant class.
   */
    //@Container("EngineeringModelSetup", "Participant")
  export class Participant extends Thing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParticipant"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.domain = [];
    }

    /**
     * Gets or sets the isActive
     */
    public isActive: boolean;

    /**
     * Gets or sets the person
     */
    public person: string;

    /**
     * Gets or sets the role
     */
    public role: string;

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the selectedDomain
     */
    public selectedDomain: string;

    /**
     * Gets the route for the current <see ref="Participant"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOScaleReferenceQuantityValue class.
   */
    //@Container("LogarithmicScale", "ReferenceQuantityValue")
  export class ScaleReferenceQuantityValue extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOScaleReferenceQuantityValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current <see ref="ScaleReferenceQuantityValue"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOMappingToReferenceScale class.
   */
    //@Container("MeasurementScale", "MappingToReferenceScale")
  export class MappingToReferenceScale extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOMappingToReferenceScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the referenceScaleValue
     */
    public referenceScaleValue: string;

    /**
     * Gets or sets the dependentScaleValue
     */
    public dependentScaleValue: string;

    /**
     * Gets the route for the current <see ref="MappingToReferenceScale"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOQuantityKindFactor class.
   */
    //@Container("DerivedQuantityKind", "QuantityKindFactor")
  export class QuantityKindFactor extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOQuantityKindFactor"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the quantityKind
     */
    public quantityKind: string;

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets the route for the current <see ref="QuantityKindFactor"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOUnitFactor class.
   */
    //@Container("DerivedUnit", "UnitFactor")
  export class UnitFactor extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOUnitFactor"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the unit
     */
    public unit: string;

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets the route for the current <see ref="UnitFactor"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterTypeComponent class.
   */
    //@Container("CompoundParameterType", "Component")
  export class ParameterTypeComponent extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterTypeComponent"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current <see ref="ParameterTypeComponent"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPersonPermission class.
   */
    //@Container("PersonRole", "PersonPermission")
  export class PersonPermission extends Thing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPersonPermission"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the accessRight
     */
    public accessRight: PersonAccessRightKind;

    /**
     * Gets or sets the objectClass
     */
    public objectClass: ClassKind;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="PersonPermission"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSiteLogEntry class.
   */
    //@Container("SiteDirectory", "LogEntry")
  export class SiteLogEntry extends Thing implements TimeStampedThingInterface, AnnotationInterface, CategorizableThingInterface, LogEntryInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSiteLogEntry"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.affectedItemIid = [];
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the affectedItemIid
     */
    public affectedItemIid: string[];

    /**
     * Gets or sets the level
     */
    public level: LogLevelKind;

    /**
     * Gets the route for the current <see ref="SiteLogEntry"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOIterationSetup class.
   */
    //@Container("EngineeringModelSetup", "IterationSetup")
  export class IterationSetup extends Thing implements TimeStampedThingInterface, ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOIterationSetup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the iterationIid
     */
    public iterationIid: string;

    public iterationNumber: number;

    /**
     * Gets or sets the description
     */
    public description: string;

    /**
     * Gets or sets the sourceIterationSetup
     */
    public sourceIterationSetup: string;

    /**
     * Gets or sets the frozenOn
     */
    public frozenOn: string;

    /**
     * Gets or sets the isDeleted
     */
    public isDeleted: boolean;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets the route for the current <see ref="IterationSetup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOTelephoneNumber class.
   */
    //@Container("Person", "TelephoneNumber")
  export class TelephoneNumber extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOTelephoneNumber"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.vcardType = [];
    }

    /**
     * Gets or sets the vcardType
     */
    public vcardType: VcardTelephoneNumberKind[];

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current <see ref="TelephoneNumber"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEmailAddress class.
   */
    //@Container("Person", "EmailAddress")
  export class EmailAddress extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOEmailAddress"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the vcardType
     */
    public vcardType: VcardEmailAddressKind;

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current <see ref="EmailAddress"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOUserPreference class.
   */
    //@Container("Person", "UserPreference")
  export class UserPreference extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOUserPreference"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current <see ref="UserPreference"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTONaturalLanguage class.
   */
    //@Container("SiteDirectory", "NaturalLanguage")
  export class NaturalLanguage extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTONaturalLanguage"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the nativeName
     */
    public nativeName: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets the route for the current <see ref="NaturalLanguage"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOHyperLink class.
   */
    //@Container("DefinedThing", "HyperLink")
  export class HyperLink extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the <see cref="DTOHyperLink"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the uri
     */
    public uri: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets the route for the current <see ref="HyperLink"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODefinition class.
   */
    //@Container("DefinedThing", "Definition")
  export class Definition extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the <see cref="DTODefinition"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.citation = [];
      this.note = [];
      this.example = [];
    }

    /**
     * Gets or sets the citation
     */
    public citation: string[];

    /**
     * Gets or sets the note
     */
    public note: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the example
     */
    public example: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets the route for the current <see ref="Definition"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOAlias class.
   */
    //@Container("DefinedThing", "Alias")
  export class Alias extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the <see cref="DTOAlias"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isSynonym
     */
    public isSynonym: boolean;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets the route for the current <see ref="Alias"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOCitation class.
   */
    //@Container("Definition", "Citation")
  export class Citation extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOCitation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the source
     */
    public source: string;

    /**
     * Gets or sets the location
     */
    public location: string;

    /**
     * Gets or sets the isAdaptation
     */
    public isAdaptation: boolean;

    /**
     * Gets or sets the remark
     */
    public remark: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current <see ref="Citation"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterGroup class.
   */
    //@Container("ElementDefinition", "ParameterGroup")
  export class ParameterGroup extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterGroup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the containingGroup
     */
    public containingGroup: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets the route for the current <see ref="ParameterGroup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPublication class.
   */
    //@Container("Iteration", "Publication")
  export class Publication extends Thing implements TimeStampedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPublication"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.domain = [];
      this.publishedParameter = [];
    }

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the publishedParameter
     */
    public publishedParameter: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets the route for the current <see ref="Publication"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOFile class.
   */
    //@Container("FileStore", "File")
  export class File extends Thing implements OwnedThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOFile"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.fileRevision = [];
      this.category = [];
    }

    /**
     * Gets or sets the lockedBy
     */
    public lockedBy: string;

    /**
     * Gets or sets the fileRevision
     */
    public fileRevision: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="File"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParametricConstraint class.
   */
    //@Container("Requirement", "ParametricConstraint")
  export class ParametricConstraint extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParametricConstraint"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.expression = [];
    }

    /**
     * Gets or sets the expression
     */
    public expression: string[];

    /**
     * Gets or sets the topExpression
     */
    public topExpression: string;

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="ParametricConstraint"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOExternalIdentifierMap class.
   */
    //@Container("Iteration", "ExternalIdentifierMap")
  export class ExternalIdentifierMap extends Thing implements NamedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOExternalIdentifierMap"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.correspondence = [];
    }

    /**
     * Gets or sets the correspondence
     */
    public correspondence: string[];

    /**
     * Gets or sets the externalModelName
     */
    public externalModelName: string;

    /**
     * Gets or sets the externalToolName
     */
    public externalToolName: string;

    /**
     * Gets or sets the externalToolVersion
     */
    public externalToolVersion: string;

    /**
     * Gets or sets the externalFormat
     */
    public externalFormat: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="ExternalIdentifierMap"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTONestedElement class.
   */
    //@Container("option", "NestedElement")
  export class NestedElement extends Thing implements NamedThingInterface, ShortNamedThingInterface, OwnedThingInterface, VolatileThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTONestedElement"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.elementUsage = [];
      this.nestedParameter = [];
    }

    /**
     * Gets or sets the rootElement
     */
    public rootElement: string;

    /**
     * Gets or sets the elementUsage
     */
    public elementUsage: Cdp4Type.OrderedItem[];

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get shortName() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the nestedParameter
     */
    public nestedParameter: string[];

    /**
     * Gets or sets the isVolatile
     */
    public isVolatile: boolean;

    /**
     * Gets the route for the current <see ref="NestedElement"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOFolder class.
   */
    //@Container("FileStore", "Folder")
  export class Folder extends Thing implements OwnedThingInterface, NamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOFolder"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the creator
     */
    public creator: string;

    /**
     * Gets or sets the containingFolder
     */
    public containingFolder: string;

    /**
     * This is a derived property!
     */
    public get path() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets the route for the current <see ref="Folder"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOIdCorrespondence class.
   */
    //@Container("ExternalIdentifierMap", "Correspondence")
  export class IdCorrespondence extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOIdCorrespondence"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the internalThing
     */
    public internalThing: string;

    /**
     * Gets or sets the externalId
     */
    public externalId: string;

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="IdCorrespondence"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSimpleParameterValue class.
   */
    //@Container("SimpleParameterizableThing", "ParameterValue")
  export class SimpleParameterValue extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSimpleParameterValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.value = [];
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the value
     */
    public value: string[];

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="SimpleParameterValue"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterSubscriptionValueSet class.
   */
    //@Container("ParameterSubscription", "ValueSet")
  export class ParameterSubscriptionValueSet extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParameterSubscriptionValueSet"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.manual = [];
    }

    /**
     * Gets or sets the valueSwitch
     */
    public valueSwitch: ParameterSwitchKind;

    /**
     * This is a derived property!
     */
    public get computed() : string[] {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the manual
     */
    public manual: string[];

    /**
     * This is a derived property!
     */
    public get reference() : string[] {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualValue() : string[] {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the subscribedValueSet
     */
    public subscribedValueSet: string;

    /**
     * This is a derived property!
     */
    public get actualState() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualOption() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="ParameterSubscriptionValueSet"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOActualFiniteState class.
   */
    //@Container("ActualFiniteStateList", "ActualState")
  export class ActualFiniteState extends Thing implements NamedThingInterface, ShortNamedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOActualFiniteState"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleState = [];
    }

    /**
     * Gets or sets the possibleState
     */
    public possibleState: string[];

    /**
     * Gets or sets the kind
     */
    public kind: ActualFiniteStateKind;

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get shortName() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="ActualFiniteState"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOModelLogEntry class.
   */
    //@Container("EngineeringModel", "LogEntry")
  export class ModelLogEntry extends Thing implements AnnotationInterface, TimeStampedThingInterface, CategorizableThingInterface, LogEntryInterface {

    /**
     * Initializes a new instance of the <see cref="DTOModelLogEntry"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.affectedItemIid = [];
    }

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the affectedItemIid
     */
    public affectedItemIid: string[];

    /**
     * Gets or sets the level
     */
    public level: LogLevelKind;

    /**
     * Gets the route for the current <see ref="ModelLogEntry"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOIteration class.
   */
    //@Container("EngineeringModel", "Iteration")
  export class Iteration extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOIteration"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.option = [];
      this.publication = [];
      this.possibleFiniteStateList = [];
      this.element = [];
      this.relationship = [];
      this.externalIdentifierMap = [];
      this.requirementsSpecification = [];
      this.domainFileStore = [];
      this.actualFiniteStateList = [];
      this.ruleVerificationList = [];
      this.stakeholder = [];
      this.goal = [];
      this.valueGroup = [];
      this.stakeholderValue = [];
      this.stakeholderValueMap = [];
      this.sharedDiagramStyle = [];
      this.diagramCanvas = [];
    }

    /**
     * Gets or sets the iterationSetup
     */
    public iterationSetup: string;

    /**
     * Gets or sets the sourceIterationIid
     */
    public sourceIterationIid: string;

    /**
     * Gets or sets the option
     */
    public option: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the publication
     */
    public publication: string[];

    /**
     * Gets or sets the possibleFiniteStateList
     */
    public possibleFiniteStateList: string[];

    /**
     * Gets or sets the topElement
     */
    public topElement: string;

    /**
     * Gets or sets the element
     */
    public element: string[];

    /**
     * Gets or sets the relationship
     */
    public relationship: string[];

    /**
     * Gets or sets the externalIdentifierMap
     */
    public externalIdentifierMap: string[];

    /**
     * Gets or sets the requirementsSpecification
     */
    public requirementsSpecification: string[];

    /**
     * Gets or sets the domainFileStore
     */
    public domainFileStore: string[];

    /**
     * Gets or sets the actualFiniteStateList
     */
    public actualFiniteStateList: string[];

    /**
     * Gets or sets the defaultOption
     */
    public defaultOption: string;

    /**
     * Gets or sets the ruleVerificationList
     */
    public ruleVerificationList: string[];

    /**
     * Gets or sets the stakeholder
     */
    public stakeholder: string[];

    /**
     * Gets or sets the goal
     */
    public goal: string[];

    /**
     * Gets or sets the valueGroup
     */
    public valueGroup: string[];

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets or sets the stakeholderValueMap
     */
    public stakeholderValueMap: string[];

    /**
     * Gets or sets the sharedDiagramStyle
     */
    public sharedDiagramStyle: string[];

    /**
     * Gets or sets the diagramCanvas
     */
    public diagramCanvas: string[];

    /**
     * Gets the route for the current <see ref="Iteration"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOActualFiniteStateList class.
   */
    //@Container("Iteration", "ActualFiniteStateList")
  export class ActualFiniteStateList extends Thing implements OptionDependentThingInterface, OwnedThingInterface, NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOActualFiniteStateList"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleFiniteStateList = [];
      this.actualState = [];
      this.excludeOption = [];
    }

    /**
     * Gets or sets the possibleFiniteStateList
     */
    public possibleFiniteStateList: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the actualState
     */
    public actualState: string[];

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get shortName() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the excludeOption
     */
    public excludeOption: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="ActualFiniteStateList"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTONestedParameter class.
   */
    //@Container("NestedElement", "NestedParameter")
  export class NestedParameter extends Thing implements OwnedThingInterface, VolatileThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTONestedParameter"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the associatedParameter
     */
    public associatedParameter: string;

    /**
     * Gets or sets the actualState
     */
    public actualState: string;

    /**
     * This is a derived property!
     */
    public get path() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the formula
     */
    public formula: string;

    /**
     * Gets or sets the actualValue
     */
    public actualValue: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the isVolatile
     */
    public isVolatile: boolean;

    /**
     * Gets the route for the current <see ref="NestedParameter"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOFileRevision class.
   */
    //@Container("File", "FileRevision")
  export class FileRevision extends Thing implements TimeStampedThingInterface, NamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOFileRevision"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.fileType = [];
    }

    public contentHash: string;

    /**
     * Gets or sets the creator
     */
    public creator: string;

    /**
     * Gets or sets the containingFolder
     */
    public containingFolder: string;

    /**
     * Gets or sets the fileType
     */
    public fileType: Cdp4Type.OrderedItem[];

    /**
     * This is a derived property!
     */
    public get path() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets the route for the current <see ref="FileRevision"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORuleViolation class.
   */
    //@Container("RuleVerification", "Violation")
  export class RuleViolation extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTORuleViolation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.violatingThing = [];
    }

    /**
     * Gets or sets the description
     */
    public description: string;

    /**
     * Gets or sets the violatingThing
     */
    public violatingThing: string[];

    /**
     * Gets the route for the current <see ref="RuleViolation"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOStakeHolderValueMapSettings class.
   */
    //@CDPVersion("1.1.0")
    //@Container("StakeHolderValueMap", "Settings")
  export class StakeHolderValueMapSettings extends Thing {

    /**
     * Initializes a new instance of the <see cref="DTOStakeHolderValueMapSettings"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the goalToValueGroupRelationship
     */
    public goalToValueGroupRelationship: string;

    /**
     * Gets or sets the valueGroupToStakeholderValueRelationship
     */
    public valueGroupToStakeholderValueRelationship: string;

    /**
     * Gets or sets the stakeholderValueToRequirementRelationship
     */
    public stakeholderValueToRequirementRelationship: string;

    /**
     * Gets the route for the current <see ref="StakeHolderValueMapSettings"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOBook class.
   */
    //@CDPVersion("1.1.0")
    //@Container("EngineeringModel", "book")
  export class Book extends Thing implements ShortNamedThingInterface, NamedThingInterface, CategorizableThingInterface, TimeStampedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOBook"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.section = [];
      this.category = [];
    }

    /**
     * Gets or sets the section
     */
    public section: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="book"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSection class.
   */
    //@CDPVersion("1.1.0")
    //@Container("book", "section")
  export class Section extends Thing implements ShortNamedThingInterface, NamedThingInterface, CategorizableThingInterface, TimeStampedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSection"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.page = [];
      this.category = [];
    }

    /**
     * Gets or sets the page
     */
    public page: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="section"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPage class.
   */
    //@CDPVersion("1.1.0")
    //@Container("section", "page")
  export class Page extends Thing implements ShortNamedThingInterface, NamedThingInterface, CategorizableThingInterface, TimeStampedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPage"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.note = [];
      this.category = [];
    }

    /**
     * Gets or sets the note
     */
    public note: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="page"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSiteDirectory class.
   */
  export class SiteDirectory extends TopContainer implements TimeStampedThingInterface, NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSiteDirectory"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.organization = [];
      this.person = [];
      this.participantRole = [];
      this.siteReferenceDataLibrary = [];
      this.model = [];
      this.personRole = [];
      this.logEntry = [];
      this.domainGroup = [];
      this.domain = [];
      this.naturalLanguage = [];
      this.annotation = [];
    }

    /**
     * Gets or sets the organization
     */
    public organization: string[];

    /**
     * Gets or sets the person
     */
    public person: string[];

    /**
     * Gets or sets the participantRole
     */
    public participantRole: string[];

    /**
     * Gets or sets the defaultParticipantRole
     */
    public defaultParticipantRole: string;

    /**
     * Gets or sets the siteReferenceDataLibrary
     */
    public siteReferenceDataLibrary: string[];

    /**
     * Gets or sets the model
     */
    public model: string[];

    /**
     * Gets or sets the personRole
     */
    public personRole: string[];

    /**
     * Gets or sets the defaultPersonRole
     */
    public defaultPersonRole: string;

    /**
     * Gets or sets the logEntry
     */
    public logEntry: string[];

    /**
     * Gets or sets the domainGroup
     */
    public domainGroup: string[];

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the naturalLanguage
     */
    public naturalLanguage: string[];

    /**
     * Gets or sets the annotation
     */
    public annotation: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current <see ref="SiteDirectory"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParticipantRole class.
   */
    //@Container("SiteDirectory", "ParticipantRole")
  export class ParticipantRole extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOParticipantRole"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.participantPermission = [];
    }

    /**
     * Gets or sets the participantPermission
     */
    public participantPermission: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="ParticipantRole"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEngineeringModelSetup class.
   */
    //@Container("SiteDirectory", "Model")
  export class EngineeringModelSetup extends DefinedThing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOEngineeringModelSetup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.participant = [];
      this.activeDomain = [];
      this.requiredRdl = [];
      this.iterationSetup = [];
    }

    /**
     * Gets or sets the participant
     */
    public participant: string[];

    /**
     * Gets or sets the activeDomain
     */
    public activeDomain: string[];

    /**
     * Gets or sets the kind
     */
    public kind: EngineeringModelKind;

    /**
     * Gets or sets the studyPhase
     */
    public studyPhase: StudyPhaseKind;

    /**
     * Gets or sets the requiredRdl
     */
    public requiredRdl: string[];

    /**
     * Gets or sets the engineeringModelIid
     */
    public engineeringModelIid: string;

    /**
     * Gets or sets the iterationSetup
     */
    public iterationSetup: string[];

    /**
     * Gets or sets the sourceEngineeringModelSetupIid
     */
    public sourceEngineeringModelSetupIid: string;

    /**
     * Gets the route for the current <see ref="EngineeringModelSetup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOGlossary class.
   */
    //@Container("ReferenceDataLibrary", "Glossary")
  export class Glossary extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOGlossary"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
      this.category = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Glossary"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOTerm class.
   */
    //@Container("Glossary", "Term")
  export class Term extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOTerm"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Term"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOFileType class.
   */
    //@Container("ReferenceDataLibrary", "FileType")
  export class FileType extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOFileType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the extension
     */
    public extension: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="FileType"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODomainOfExpertise class.
   */
    //@Container("SiteDirectory", "Domain")
  export class DomainOfExpertise extends DefinedThing implements DeprecatableThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTODomainOfExpertise"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="DomainOfExpertise"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOScaleValueDefinition class.
   */
    //@Container("MeasurementScale", "ValueDefinition")
  export class ScaleValueDefinition extends DefinedThing {

    /**
     * Initializes a new instance of the <see cref="DTOScaleValueDefinition"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current <see ref="ScaleValueDefinition"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOCategory class.
   */
    //@Container("ReferenceDataLibrary", "DefinedCategory")
  export class Category extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOCategory"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.superCategory = [];
      this.permissibleClass = [];
    }

    /**
     * Gets or sets the superCategory
     */
    public superCategory: string[];

    /**
     * Gets or sets the permissibleClass
     */
    public permissibleClass: ClassKind[];

    /**
     * Gets or sets the isAbstract
     */
    public isAbstract: boolean;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Category"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOUnitPrefix class.
   */
    //@Container("ReferenceDataLibrary", "UnitPrefix")
  export class UnitPrefix extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOUnitPrefix"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the conversionFactor
     */
    public conversionFactor: string;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="UnitPrefix"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEnumerationValueDefinition class.
   */
    //@Container("EnumerationParameterType", "ValueDefinition")
  export class EnumerationValueDefinition extends DefinedThing {

    /**
     * Initializes a new instance of the <see cref="DTOEnumerationValueDefinition"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="EnumerationValueDefinition"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPersonRole class.
   */
    //@Container("SiteDirectory", "PersonRole")
  export class PersonRole extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPersonRole"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.personPermission = [];
    }

    /**
     * Gets or sets the personPermission
     */
    public personPermission: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="PersonRole"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODomainOfExpertiseGroup class.
   */
    //@Container("SiteDirectory", "DomainGroup")
  export class DomainOfExpertiseGroup extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTODomainOfExpertiseGroup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.domain = [];
    }

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="DomainOfExpertiseGroup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOReferenceSource class.
   */
    //@Container("ReferenceDataLibrary", "ReferenceSource")
  export class ReferenceSource extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOReferenceSource"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the versionIdentifier
     */
    public versionIdentifier: string;

    /**
     * Gets or sets the versionDate
     */
    public versionDate: string;

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the publicationYear
     */
    public publicationYear: number;

    /**
     * Gets or sets the publisher
     */
    public publisher: string;

    /**
     * Gets or sets the publishedIn
     */
    public publishedIn: string;

    /**
     * Gets or sets the language
     */
    public language: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="ReferenceSource"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOConstant class.
   */
    //@Container("ReferenceDataLibrary", "Constant")
  export class Constant extends DefinedThing implements DeprecatableThingInterface, CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOConstant"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.value = [];
      this.category = [];
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the value
     */
    public value: string[];

    /**
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="Constant"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPossibleFiniteState class.
   */
    //@Container("PossibleFiniteStateList", "PossibleState")
  export class PossibleFiniteState extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPossibleFiniteState"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get owner() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets the route for the current <see ref="PossibleFiniteState"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOOption class.
   */
    //@Container("Iteration", "option")
  export class Option extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOOption"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.nestedElement = [];
      this.category = [];
    }

    /**
     * Gets or sets the nestedElement
     */
    public nestedElement: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="option"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterSubscription class.
   */
    //@Container("ParameterOrOverrideBase", "ParameterSubscription")
  export class ParameterSubscription extends ParameterBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameterSubscription"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * This is a derived property!
     */
    public get parameterType() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get scale() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get stateDependence() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get isOptionDependent() : boolean {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get group() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets the route for the current <see ref="ParameterSubscription"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPossibleFiniteStateList class.
   */
    //@Container("Iteration", "PossibleFiniteStateList")
  export class PossibleFiniteStateList extends DefinedThing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOPossibleFiniteStateList"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleState = [];
      this.category = [];
    }

    /**
     * Gets or sets the possibleState
     */
    public possibleState: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the defaultState
     */
    public defaultState: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="PossibleFiniteStateList"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEngineeringModel class.
   */
  export class EngineeringModel extends TopContainer {

    /**
     * Initializes a new instance of the <see cref="DTOEngineeringModel"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.commonFileStore = [];
      this.logEntry = [];
      this.iteration = [];
      this.book = [];
      this.genericNote = [];
      this.modellingAnnotation = [];
    }

    /**
     * Gets or sets the engineeringModelSetup
     */
    public engineeringModelSetup: string;

    /**
     * Gets or sets the commonFileStore
     */
    public commonFileStore: string[];

    /**
     * Gets or sets the logEntry
     */
    public logEntry: string[];

    /**
     * Gets or sets the iteration
     */
    public iteration: string[];

    /**
     * Gets or sets the book
     */
    public book: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the genericNote
     */
    public genericNote: string[];

    /**
     * Gets or sets the modellingAnnotation
     */
    public modellingAnnotation: string[];

    /**
     * Gets the route for the current <see ref="EngineeringModel"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterValueSet class.
   */
    //@Container("Parameter", "ValueSet")
  export class ParameterValueSet extends ParameterValueSetBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameterValueSet"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="ParameterValueSet"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOCommonFileStore class.
   */
    //@Container("EngineeringModel", "CommonFileStore")
  export class CommonFileStore extends FileStore {

    /**
     * Initializes a new instance of the <see cref="DTOCommonFileStore"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="CommonFileStore"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODomainFileStore class.
   */
    //@Container("Iteration", "DomainFileStore")
  export class DomainFileStore extends FileStore {

    /**
     * Initializes a new instance of the <see cref="DTODomainFileStore"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isHidden
     */
    public isHidden: boolean;

    /**
     * Gets the route for the current <see ref="DomainFileStore"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOMultiRelationship class.
   */
  export class MultiRelationship extends Relationship {

    /**
     * Initializes a new instance of the <see cref="DTOMultiRelationship"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedThing = [];
    }

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOBinaryRelationship class.
   */
  export class BinaryRelationship extends Relationship {

    /**
     * Initializes a new instance of the <see cref="DTOBinaryRelationship"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the source
     */
    public source: string;

    /**
     * Gets or sets the target
     */
    public target: string;

  }


  /**
   * A TypeScript DTO representation of the DTOOrExpression class.
   */
  export class OrExpression extends BooleanExpression {

    /**
     * Initializes a new instance of the <see cref="DTOOrExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

  }


  /**
   * A TypeScript DTO representation of the DTONotExpression class.
   */
  export class NotExpression extends BooleanExpression {

    /**
     * Initializes a new instance of the <see cref="DTONotExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the term
     */
    public term: string;

  }


  /**
   * A TypeScript DTO representation of the DTOAndExpression class.
   */
  export class AndExpression extends BooleanExpression {

    /**
     * Initializes a new instance of the <see cref="DTOAndExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOExclusiveOrExpression class.
   */
  export class ExclusiveOrExpression extends BooleanExpression {

    /**
     * Initializes a new instance of the <see cref="DTOExclusiveOrExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

  }


  /**
   * A TypeScript DTO representation of the DTORelationalExpression class.
   */
  export class RelationalExpression extends BooleanExpression {

    /**
     * Initializes a new instance of the <see cref="DTORelationalExpression"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.value = [];
    }

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string;

    /**
     * Gets or sets the relationalOperator
     */
    public relationalOperator: RelationalOperatorKind;

    /**
     * Gets or sets the value
     */
    public value: string[];

    /**
     * Gets or sets the scale
     */
    public scale: string;

  }


  /**
   * A TypeScript DTO representation of the DTOParameterOverrideValueSet class.
   */
    //@Container("ParameterOverride", "ValueSet")
  export class ParameterOverrideValueSet extends ParameterValueSetBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameterOverrideValueSet"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get actualState() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualOption() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the parameterValueSet
     */
    public parameterValueSet: string;

    /**
     * Gets the route for the current <see ref="ParameterOverrideValueSet"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORuleVerificationList class.
   */
    //@Container("Iteration", "RuleVerificationList")
  export class RuleVerificationList extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORuleVerificationList"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.ruleVerification = [];
    }

    /**
     * Gets or sets the ruleVerification
     */
    public ruleVerification: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="RuleVerificationList"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOUserRuleVerification class.
   */
  export class UserRuleVerification extends RuleVerification {

    /**
     * Initializes a new instance of the <see cref="DTOUserRuleVerification"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the rule
     */
    public rule: string;

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

  }


  /**
   * A TypeScript DTO representation of the DTOBuiltInRuleVerification class.
   */
  export class BuiltInRuleVerification extends RuleVerification {

    /**
     * Initializes a new instance of the <see cref="DTOBuiltInRuleVerification"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOGoal class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "Goal")
  export class Goal extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOGoal"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="Goal"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOStakeholder class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "Stakeholder")
  export class Stakeholder extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOStakeholder"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.stakeholderValue = [];
      this.category = [];
    }

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="Stakeholder"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOValueGroup class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "ValueGroup")
  export class ValueGroup extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOValueGroup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="ValueGroup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOStakeholderValue class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "StakeholderValue")
  export class StakeholderValue extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOStakeholderValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="StakeholderValue"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOStakeHolderValueMap class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "StakeholderValueMap")
  export class StakeHolderValueMap extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOStakeHolderValueMap"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.goal = [];
      this.valueGroup = [];
      this.stakeholderValue = [];
      this.settings = [];
      this.requirement = [];
      this.category = [];
    }

    /**
     * Gets or sets the goal
     */
    public goal: string[];

    /**
     * Gets or sets the valueGroup
     */
    public valueGroup: string[];

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets or sets the settings
     */
    public settings: string[];

    /**
     * Gets or sets the requirement
     */
    public requirement: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets the route for the current <see ref="StakeHolderValueMap"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORequirementsContainerParameterValue class.
   */
    //@CDPVersion("1.1.0")
    //@Container("RequirementsContainer", "ParameterValue")
  export class RequirementsContainerParameterValue extends ParameterValue {

    /**
     * Initializes a new instance of the <see cref="DTORequirementsContainerParameterValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="RequirementsContainerParameterValue"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORelationshipParameterValue class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Relationship", "ParameterValue")
  export class RelationshipParameterValue extends ParameterValue {

    /**
     * Initializes a new instance of the <see cref="DTORelationshipParameterValue"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="RelationshipParameterValue"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOBinaryNote class.
   */
    //@CDPVersion("1.1.0")
  export class BinaryNote extends Note {

    /**
     * Initializes a new instance of the <see cref="DTOBinaryNote"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the caption
     */
    public caption: string;

    /**
     * Gets or sets the fileType
     */
    public fileType: string;

  }


  /**
   * A TypeScript DTO representation of the DTOTextualNote class.
   */
    //@CDPVersion("1.1.0")
  export class TextualNote extends Note {

    /**
     * Initializes a new instance of the <see cref="DTOTextualNote"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

  }


  /**
   * A TypeScript DTO representation of the DTOModellingThingReference class.
   */
    //@CDPVersion("1.1.0")
    //@Container("EngineeringModelDataAnnotation", "RelatedThing")
  export class ModellingThingReference extends ThingReference {

    /**
     * Initializes a new instance of the <see cref="DTOModellingThingReference"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="ModellingThingReference"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSolution class.
   */
    //@CDPVersion("1.1.0")
    //@Container("ReviewItemDiscrepancy", "Solution")
  export class Solution extends GenericAnnotation implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSolution"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="Solution"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSiteDirectoryThingReference class.
   */
    //@CDPVersion("1.1.0")
    //@Container("SiteDirectoryDataAnnotation", "RelatedThing")
  export class SiteDirectoryThingReference extends ThingReference {

    /**
     * Initializes a new instance of the <see cref="DTOSiteDirectoryThingReference"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="SiteDirectoryThingReference"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSiteDirectoryDataAnnotation class.
   */
    //@CDPVersion("1.1.0")
    //@Container("SiteDirectory", "Annotation")
  export class SiteDirectoryDataAnnotation extends GenericAnnotation {

    /**
     * Initializes a new instance of the <see cref="DTOSiteDirectoryDataAnnotation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedThing = [];
      this.discussion = [];
    }

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the primaryAnnotatedThing
     */
    public primaryAnnotatedThing: string;

    /**
     * Gets or sets the discussion
     */
    public discussion: string[];

    /**
     * Gets the route for the current <see ref="SiteDirectoryDataAnnotation"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOApproval class.
   */
    //@CDPVersion("1.1.0")
    //@Container("ModellingAnnotationItem", "ApprovedBy")
  export class Approval extends GenericAnnotation implements OwnedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOApproval"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the classification
     */
    public classification: AnnotationApprovalKind;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current <see ref="Approval"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPoint class.
   */
    //@CDPVersion("1.1.0")
    //@Container("DiagramEdge", "Point")
  export class Point extends DiagramThingBase {

    /**
     * Initializes a new instance of the <see cref="DTOPoint"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the x
     */
    public x: number;

    /**
     * Gets or sets the y
     */
    public y: number;

    /**
     * Gets the route for the current <see ref="Point"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOBounds class.
   */
    //@CDPVersion("1.1.0")
    //@Container("DiagramElementContainer", "Bounds")
  export class Bounds extends DiagramThingBase {

    /**
     * Initializes a new instance of the <see cref="DTOBounds"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the x
     */
    public x: number;

    /**
     * Gets or sets the y
     */
    public y: number;

    /**
     * Gets or sets the width
     */
    public width: number;

    /**
     * Gets or sets the height
     */
    public height: number;

    /**
     * Gets the route for the current <see ref="Bounds"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOColor class.
   */
    //@Container("DiagrammingStyle", "UsedColor")
  export class Color extends DiagramThingBase {

    /**
     * Initializes a new instance of the <see cref="DTOColor"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the red
     */
    public red: number;

    /**
     * Gets or sets the green
     */
    public green: number;

    /**
     * Gets or sets the blue
     */
    public blue: number;

    /**
     * Gets the route for the current <see ref="Color"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOOrdinalScale class.
   */
  export class OrdinalScale extends MeasurementScale {

    /**
     * Initializes a new instance of the <see cref="DTOOrdinalScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the useShortNameValues
     */
    public useShortNameValues: boolean;

  }


  /**
   * A TypeScript DTO representation of the DTOReferencerRule class.
   */
  export class ReferencerRule extends Rule {

    /**
     * Initializes a new instance of the <see cref="DTOReferencerRule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.referencedCategory = [];
    }

    /**
     * Gets or sets the referencingCategory
     */
    public referencingCategory: string;

    /**
     * Gets or sets the referencedCategory
     */
    public referencedCategory: string[];

    /**
     * Gets or sets the minReferenced
     */
    public minReferenced: number;

    /**
     * Gets or sets the maxReferenced
     */
    public maxReferenced: number;

  }


  /**
   * A TypeScript DTO representation of the DTORatioScale class.
   */
  export class RatioScale extends MeasurementScale {

    /**
     * Initializes a new instance of the <see cref="DTORatioScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOCompoundParameterType class.
   */
  export class CompoundParameterType extends ParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOCompoundParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.component = [];
    }

    /**
     * Gets or sets the component
     */
    public component: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the isFinalized
     */
    public isFinalized: boolean;

  }


  /**
   * A TypeScript DTO representation of the DTODerivedUnit class.
   */
  export class DerivedUnit extends MeasurementUnit {

    /**
     * Initializes a new instance of the <see cref="DTODerivedUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.unitFactor = [];
    }

    /**
     * Gets or sets the unitFactor
     */
    public unitFactor: Cdp4Type.OrderedItem[];

  }


  /**
   * A TypeScript DTO representation of the DTOBinaryRelationshipRule class.
   */
  export class BinaryRelationshipRule extends Rule {

    /**
     * Initializes a new instance of the <see cref="DTOBinaryRelationshipRule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the relationshipCategory
     */
    public relationshipCategory: string;

    /**
     * Gets or sets the sourceCategory
     */
    public sourceCategory: string;

    /**
     * Gets or sets the targetCategory
     */
    public targetCategory: string;

    /**
     * Gets or sets the forwardRelationshipName
     */
    public forwardRelationshipName: string;

    /**
     * Gets or sets the inverseRelationshipName
     */
    public inverseRelationshipName: string;

  }


  /**
   * A TypeScript DTO representation of the DTOIntervalScale class.
   */
  export class IntervalScale extends MeasurementScale {

    /**
     * Initializes a new instance of the <see cref="DTOIntervalScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSimpleUnit class.
   */
  export class SimpleUnit extends MeasurementUnit {

    /**
     * Initializes a new instance of the <see cref="DTOSimpleUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOMultiRelationshipRule class.
   */
  export class MultiRelationshipRule extends Rule {

    /**
     * Initializes a new instance of the <see cref="DTOMultiRelationshipRule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedCategory = [];
    }

    /**
     * Gets or sets the relationshipCategory
     */
    public relationshipCategory: string;

    /**
     * Gets or sets the relatedCategory
     */
    public relatedCategory: string[];

    /**
     * Gets or sets the minRelated
     */
    public minRelated: number;

    /**
     * Gets or sets the maxRelated
     */
    public maxRelated: number;

  }


  /**
   * A TypeScript DTO representation of the DTODecompositionRule class.
   */
  export class DecompositionRule extends Rule {

    /**
     * Initializes a new instance of the <see cref="DTODecompositionRule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.containedCategory = [];
    }

    /**
     * Gets or sets the containingCategory
     */
    public containingCategory: string;

    /**
     * Gets or sets the containedCategory
     */
    public containedCategory: string[];

    /**
     * Gets or sets the minContained
     */
    public minContained: number;

    /**
     * Gets or sets the maxContained
     */
    public maxContained: number;

  }


  /**
   * A TypeScript DTO representation of the DTOLogarithmicScale class.
   */
  export class LogarithmicScale extends MeasurementScale {

    /**
     * Initializes a new instance of the <see cref="DTOLogarithmicScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.referenceQuantityValue = [];
    }

    /**
     * Gets or sets the logarithmBase
     */
    public logarithmBase: LogarithmBaseKind;

    /**
     * Gets or sets the factor
     */
    public factor: string;

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets or sets the referenceQuantityKind
     */
    public referenceQuantityKind: string;

    /**
     * Gets or sets the referenceQuantityValue
     */
    public referenceQuantityValue: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOParameterizedCategoryRule class.
   */
  export class ParameterizedCategoryRule extends Rule {

    /**
     * Initializes a new instance of the <see cref="DTOParameterizedCategoryRule"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterType = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string;

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOSiteReferenceDataLibrary class.
   */
    //@Container("SiteDirectory", "SiteReferenceDataLibrary")
  export class SiteReferenceDataLibrary extends ReferenceDataLibrary implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOSiteReferenceDataLibrary"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="SiteReferenceDataLibrary"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOModelReferenceDataLibrary class.
   */
    //@Container("EngineeringModelSetup", "RequiredRdl")
  export class ModelReferenceDataLibrary extends ReferenceDataLibrary {

    /**
     * Initializes a new instance of the <see cref="DTOModelReferenceDataLibrary"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="ModelReferenceDataLibrary"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameter class.
   */
    //@Container("ElementDefinition", "Parameter")
  export class Parameter extends ParameterOrOverrideBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameter"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * Gets or sets the requestedBy
     */
    public requestedBy: string;

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets or sets the allowDifferentOwnerOfOverride
     */
    public allowDifferentOwnerOfOverride: boolean;

    /**
     * Gets or sets the expectsOverride
     */
    public expectsOverride: boolean;

    /**
     * Gets the route for the current <see ref="Parameter"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOElementDefinition class.
   */
    //@Container("Iteration", "Element")
  export class ElementDefinition extends ElementBase {

    /**
     * Initializes a new instance of the <see cref="DTOElementDefinition"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.containedElement = [];
      this.parameter = [];
      this.parameterGroup = [];
      this.referencedElement = [];
    }

    /**
     * Gets or sets the containedElement
     */
    public containedElement: string[];

    /**
     * Gets or sets the parameter
     */
    public parameter: string[];

    /**
     * Gets or sets the parameterGroup
     */
    public parameterGroup: string[];

    /**
     * Gets or sets the referencedElement
     */
    public referencedElement: string[];

    /**
     * Gets the route for the current <see ref="ElementDefinition"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOElementUsage class.
   */
    //@Container("ElementDefinition", "ContainedElement")
  export class ElementUsage extends ElementBase implements OptionDependentThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTOElementUsage"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterOverride = [];
      this.excludeOption = [];
    }

    /**
     * Gets or sets the elementDefinition
     */
    public elementDefinition: string;

    /**
     * Gets or sets the interfaceEnd
     */
    public interfaceEnd: InterfaceEndKind;

    /**
     * Gets or sets the parameterOverride
     */
    public parameterOverride: string[];

    /**
     * Gets or sets the excludeOption
     */
    public excludeOption: string[];

    /**
     * Gets the route for the current <see ref="ElementUsage"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORequirement class.
   */
    //@Container("RequirementsSpecification", "Requirement")
  export class Requirement extends SimpleParameterizableThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORequirement"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parametricConstraint = [];
      this.category = [];
    }

    /**
     * Gets or sets the parametricConstraint
     */
    public parametricConstraint: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the group
     */
    public group: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="Requirement"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORequirementsSpecification class.
   */
    //@Container("Iteration", "RequirementsSpecification")
  export class RequirementsSpecification extends RequirementsContainer implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTORequirementsSpecification"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.requirement = [];
    }

    /**
     * Gets or sets the requirement
     */
    public requirement: string[];

    /**
     * Gets or sets the isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current <see ref="RequirementsSpecification"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTORequirementsGroup class.
   */
    //@Container("RequirementsContainer", "Group")
  export class RequirementsGroup extends RequirementsContainer {

    /**
     * Initializes a new instance of the <see cref="DTORequirementsGroup"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="RequirementsGroup"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOParameterOverride class.
   */
    //@Container("ElementUsage", "ParameterOverride")
  export class ParameterOverride extends ParameterOrOverrideBase {

    /**
     * Initializes a new instance of the <see cref="DTOParameterOverride"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * Gets or sets the parameter
     */
    public parameter: string;

    /**
     * This is a derived property!
     */
    public get parameterType() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get isOptionDependent() : boolean {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get scale() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get stateDependence() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get group() : string {
      throw new Error("this is a derived property");
    }

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets the route for the current <see ref="ParameterOverride"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEngineeringModelDataDiscussionItem class.
   */
    //@CDPVersion("1.1.0")
    //@Container("EngineeringModelDataAnnotation", "Discussion")
  export class EngineeringModelDataDiscussionItem extends DiscussionItem {

    /**
     * Initializes a new instance of the <see cref="DTOEngineeringModelDataDiscussionItem"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets the route for the current <see ref="EngineeringModelDataDiscussionItem"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSiteDirectoryDataDiscussionItem class.
   */
    //@CDPVersion("1.1.0")
    //@Container("SiteDirectoryDataAnnotation", "Discussion")
  export class SiteDirectoryDataDiscussionItem extends DiscussionItem {

    /**
     * Initializes a new instance of the <see cref="DTOSiteDirectoryDataDiscussionItem"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets the route for the current <see ref="SiteDirectoryDataDiscussionItem"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOEngineeringModelDataNote class.
   */
    //@CDPVersion("1.1.0")
    //@Container("EngineeringModel", "GenericNote")
  export class EngineeringModelDataNote extends EngineeringModelDataAnnotation {

    /**
     * Initializes a new instance of the <see cref="DTOEngineeringModelDataNote"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="EngineeringModelDataNote"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOOwnedStyle class.
   */
    //@CDPVersion("1.1.0")
    //@Container("DiagramElementThing", "LocalStyle")
  export class OwnedStyle extends DiagrammingStyle {

    /**
     * Initializes a new instance of the <see cref="DTOOwnedStyle"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="OwnedStyle"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOSharedStyle class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "SharedDiagramStyle")
  export class SharedStyle extends DiagrammingStyle {

    /**
     * Initializes a new instance of the <see cref="DTOSharedStyle"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current <see ref="SharedStyle"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTODiagramCanvas class.
   */
    //@CDPVersion("1.1.0")
    //@Container("Iteration", "DiagramCanvas")
  export class DiagramCanvas extends DiagramElementContainer implements TimeStampedThingInterface {

    /**
     * Initializes a new instance of the <see cref="DTODiagramCanvas"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets the route for the current <see ref="DiagramCanvas"/>
     */
    public get route(): string {
      return this.computedRoute();
    }

  }


  /**
   * A TypeScript DTO representation of the DTOArrayParameterType class.
   */
  export class ArrayParameterType extends CompoundParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOArrayParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.dimension = [];
    }

    /**
     * Gets or sets the dimension
     */
    public dimension: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the isTensor
     */
    public isTensor: boolean;

    /**
     * This is a derived property!
     */
    public get hasSingleComponentType() : boolean {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get rank() : number {
      throw new Error("this is a derived property");
    }

  }


  /**
   * A TypeScript DTO representation of the DTOCyclicRatioScale class.
   */
  export class CyclicRatioScale extends RatioScale {

    /**
     * Initializes a new instance of the <see cref="DTOCyclicRatioScale"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the modulus
     */
    public modulus: string;

  }


  /**
   * A TypeScript DTO representation of the DTOEnumerationParameterType class.
   */
  export class EnumerationParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOEnumerationParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueDefinition = [];
    }

    /**
     * Gets or sets the allowMultiSelect
     */
    public allowMultiSelect: boolean;

    /**
     * Gets or sets the valueDefinition
     */
    public valueDefinition: Cdp4Type.OrderedItem[];

  }


  /**
   * A TypeScript DTO representation of the DTOBooleanParameterType class.
   */
  export class BooleanParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOBooleanParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTODateParameterType class.
   */
  export class DateParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTODateParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOLinearConversionUnit class.
   */
  export class LinearConversionUnit extends ConversionBasedUnit {

    /**
     * Initializes a new instance of the <see cref="DTOLinearConversionUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOTextParameterType class.
   */
  export class TextParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOTextParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOPrefixedUnit class.
   */
  export class PrefixedUnit extends ConversionBasedUnit {

    /**
     * Initializes a new instance of the <see cref="DTOPrefixedUnit"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the prefix
     */
    public prefix: string;

    /**
     * This is a derived property!
     */
    public get conversionFactor() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get name() : string {
      throw new Error("this is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get shortName() : string {
      throw new Error("this is a derived property");
    }

  }


  /**
   * A TypeScript DTO representation of the DTODateTimeParameterType class.
   */
  export class DateTimeParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTODateTimeParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOTimeOfDayParameterType class.
   */
  export class TimeOfDayParameterType extends ScalarParameterType {

    /**
     * Initializes a new instance of the <see cref="DTOTimeOfDayParameterType"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOReviewItemDiscrepancy class.
   */
    //@CDPVersion("1.1.0")
  export class ReviewItemDiscrepancy extends ModellingAnnotationItem {

    /**
     * Initializes a new instance of the <see cref="DTOReviewItemDiscrepancy"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.solution = [];
    }

    /**
     * Gets or sets the solution
     */
    public solution: string[];

  }


  /**
   * A TypeScript DTO representation of the DTOActionItem class.
   */
    //@CDPVersion("1.1.0")
  export class ActionItem extends ModellingAnnotationItem {

    /**
     * Initializes a new instance of the <see cref="DTOActionItem"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the actionee
     */
    public actionee: string;

    /**
     * Gets or sets the dueDate
     */
    public dueDate: string;

    /**
     * Gets or sets the closeOutDate
     */
    public closeOutDate: string;

    /**
     * Gets or sets the closeOutStatement
     */
    public closeOutStatement: string;

  }


  /**
   * A TypeScript DTO representation of the DTOChangeProposal class.
   */
    //@CDPVersion("1.1.0")
  export class ChangeProposal extends ModellingAnnotationItem {

    /**
     * Initializes a new instance of the <see cref="DTOChangeProposal"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the changeRequest
     */
    public changeRequest: string;

  }


  /**
   * A TypeScript DTO representation of the DTOContractChangeNotice class.
   */
    //@CDPVersion("1.1.0")
  export class ContractChangeNotice extends ModellingAnnotationItem {

    /**
     * Initializes a new instance of the <see cref="DTOContractChangeNotice"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the changeProposal
     */
    public changeProposal: string;

  }


  /**
   * A TypeScript DTO representation of the DTODiagramEdge class.
   */
    //@CDPVersion("1.1.0")
  export class DiagramEdge extends DiagramElementThing {

    /**
     * Initializes a new instance of the <see cref="DTODiagramEdge"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.point = [];
    }

    /**
     * Gets or sets the source
     */
    public source: string;

    /**
     * Gets or sets the target
     */
    public target: string;

    /**
     * Gets or sets the point
     */
    public point: Cdp4Type.OrderedItem[];

  }


  /**
   * A TypeScript DTO representation of the DTOSpecializedQuantityKind class.
   */
  export class SpecializedQuantityKind extends QuantityKind {

    /**
     * Initializes a new instance of the <see cref="DTOSpecializedQuantityKind"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the general
     */
    public general: string;

  }


  /**
   * A TypeScript DTO representation of the DTOSimpleQuantityKind class.
   */
  export class SimpleQuantityKind extends QuantityKind {

    /**
     * Initializes a new instance of the <see cref="DTOSimpleQuantityKind"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTODerivedQuantityKind class.
   */
  export class DerivedQuantityKind extends QuantityKind {

    /**
     * Initializes a new instance of the <see cref="DTODerivedQuantityKind"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.quantityKindFactor = [];
    }

    /**
     * Gets or sets the quantityKindFactor
     */
    public quantityKindFactor: Cdp4Type.OrderedItem[];

  }


  /**
   * A TypeScript DTO representation of the DTORequestForWaiver class.
   */
    //@CDPVersion("1.1.0")
  export class RequestForWaiver extends ContractDeviation {

    /**
     * Initializes a new instance of the <see cref="DTORequestForWaiver"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTORequestForDeviation class.
   */
    //@CDPVersion("1.1.0")
  export class RequestForDeviation extends ContractDeviation {

    /**
     * Initializes a new instance of the <see cref="DTORequestForDeviation"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTOChangeRequest class.
   */
    //@CDPVersion("1.1.0")
  export class ChangeRequest extends ContractDeviation {

    /**
     * Initializes a new instance of the <see cref="DTOChangeRequest"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

  }


  /**
   * A TypeScript DTO representation of the DTODiagramObject class.
   */
    //@CDPVersion("1.1.0")
  export class DiagramObject extends DiagramShape {

    /**
     * Initializes a new instance of the <see cref="DTODiagramObject"/> class.
     * @iid The unique identifier.
     * @rev The revision number.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the resolution
     */
    public resolution: number;

    /**
     * Gets or sets the documentation
     */
    public documentation: string;

  }

}
