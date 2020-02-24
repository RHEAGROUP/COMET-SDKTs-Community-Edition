/**
 * @file		dto.generated.ts
 * @company		RHEA System S.A.
 * @copyright  Copyright (c) 2020  RHEA System S.A.
 * @summary		This is an auto-generated class. Any manual changes on this file will be overwritten!
 */

import { Utils } from "../../utils/utils";
import {Metadata} from "./metadata/thing.metadata.generated";
import {Cdp4Type} from "../../types/ordered-item";

export module Dto {
  /**
   * <!--StartFragment--><a id="ParameterValueKind">enumeration datatype that represents</a><!--EndFragment--> the different study phases that may apply to an EngineeringModelSetup / EngineeringModel
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
    COMPLETED_STUDY,
  }

  /**
   * enumeration datatype that represents the different possible kinds ofEngineeringModel
   */
  export enum EngineeringModelKind {
    /**
     * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is the model of a concrete study
     */
    STUDY_MODEL,
    /**
     * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a template model intended to be used as the basis for new study modelsNote: A template model may have only one iteration (represented by a combination of IterationSetup and Iteration).
     */
    TEMPLATE_MODEL,
    /**
     * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a catalogue of model components and/or patterns that can be re-used in the model of a studyNote: A catalogue may have only one iteration (represented by a combination of IterationSetup and Iteration), and one Option.
     */
    MODEL_CATALOGUE,
    /**
     * assertion that an engineering model (represented by an EngineeringModelSetup and an EngineeringModel) is a scratch model to be used for preparation, training or experimentation purposes
     */
    SCRATCH_MODEL,
  }

  /**
   * enumeration datatype that specifies a mathematical number set
   */
  export enum NumberSetKind {
    /**
     * Note: In mathematics the set of natural numbers is denoted by ℕ, seealso <a href="http://mathworld.wolfram.com/NaturalNumber.html">http://mathworld.wolfram.com/NaturalNumber.html</a>.Theset of natural numbers is a subset of the set of integer numbers.
     */
    NATURAL_NUMBER_SET,
    /**
     * designation of the mathematical set of integer numbers, i.e. ..., -2,-1, 0, 1, 2, ...Note: In mathematics the set of integer numbers is denoted by ℤ, seealso <a href="http://mathworld.wolfram.com/Integer.html">http://mathworld.wolfram.com/Integer.html</a>.The set of integer numbers is a subset of the set of rational numbers.
     */
    INTEGER_NUMBER_SET,
    /**
     * designation of the mathematical set of rational numbers, i.e. numbersthat can be expressed as a ratio (with a non-zero denominator)Note: In mathematics the set of rational numbers is denoted by ℂ, seealso <a href="http://mathworld.wolfram.com/RationalNumber.html">http://mathworld.wolfram.com/RationalNumber.html</a>.The set of rational numbers is a subset of the set of real numbers.
     */
    RATIONAL_NUMBER_SET,
    /**
     * designation of the mathematical set of real numbers, i.e. the union ofrational and irrational numbersNote: In mathematics the set of real numbers is denoted by ℝ, see also <a href="http://mathworld.wolfram.com/RealNumber.html">http://mathworld.wolfram.com/RealNumber.html</a>.
     */
    REAL_NUMBER_SET,
  }

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
    BASE10,
  }

  /**
   * <a id="ParameterValueKind">enumeration datatype that represents</a> the possible values for a vCard telephone numberNote: The values are defined in the vCard format specification in <a href="http://datatracker.ietf.org/doc/rfc6350/?include_text=1">IETF RFC 6350</a>.
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
    VIDEO,
  }

  /**
   * <a id="ParameterValueKind">enumeration datatype that represents</a> the possible values for a vCard e-mail addressNote: The values are defined in the vCard format specification in <a href="http://datatracker.ietf.org/doc/rfc6350/?include_text=1">IETF RFC 6350</a>.
   */
  export enum VcardEmailAddressKind {
    /**
     * indication that an e-mail address is for professional use
     */
    WORK,
    /**
     * indication that an e-mail address is for private or home use
     */
    HOME,
  }

  /**
   * enumeration datatype that denotes the possible classes in the current       data       modelNote 1: Values are used to represent classes in instance directories and       in       the       definition       of       validation       rules.Note 2: The implementation in a programming language needs to provide a       reflection       capability       that       allows       runtime       evaluation       of       an       instance's       class       against       the       enumeration       literal       that       represents       the       class       name.
   */
  export enum ClassKind {
    /**
     * Assertion that the Class is an instance of ActionItem
     */
    ActionItem,
    /**
     * Assertion that the Class is an instance of ActualFiniteState
     */
    ActualFiniteState,
    /**
     * Assertion that the Class is an instance of ActualFiniteStateList
     */
    ActualFiniteStateList,
    /**
     * Assertion that the Class is an instance of Alias
     */
    Alias,
    /**
     * Assertion that the Class is an instance of AndExpression
     */
    AndExpression,
    /**
     * Assertion that the Class is an instance of Approval
     */
    Approval,
    /**
     * Assertion that the Class is an instance of ArrayParameterType
     */
    ArrayParameterType,
    /**
     * Assertion that the Class is an instance of BinaryNote
     */
    BinaryNote,
    /**
     * Assertion that the Class is an instance of BinaryRelationship
     */
    BinaryRelationship,
    /**
     * Assertion that the Class is an instance of BinaryRelationshipRule
     */
    BinaryRelationshipRule,
    /**
     * Assertion that the Class is an instance of Book
     */
    Book,
    /**
     * Assertion that the Class is an instance of BooleanExpression
     */
    BooleanExpression,
    /**
     * Assertion that the Class is an instance of BooleanParameterType
     */
    BooleanParameterType,
    /**
     * Assertion that the Class is an instance of Bounds
     */
    Bounds,
    /**
     * Assertion that the Class is an instance of BuiltInRuleVerification
     */
    BuiltInRuleVerification,
    /**
     * Assertion that the Class is an instance of Category
     */
    Category,
    /**
     * Assertion that the Class is an instance of ChangeProposal
     */
    ChangeProposal,
    /**
     * Assertion that the Class is an instance of ChangeRequest
     */
    ChangeRequest,
    /**
     * Assertion that the Class is an instance of Citation
     */
    Citation,
    /**
     * Assertion that the Class is an instance of Color
     */
    Color,
    /**
     * Assertion that the Class is an instance of CommonFileStore
     */
    CommonFileStore,
    /**
     * Assertion that the Class is an instance of CompoundParameterType
     */
    CompoundParameterType,
    /**
     * Assertion that the Class is an instance of Constant
     */
    Constant,
    /**
     * Assertion that the Class is an instance of ContractChangeNotice
     */
    ContractChangeNotice,
    /**
     * Assertion that the Class is an instance of ContractDeviation
     */
    ContractDeviation,
    /**
     * Assertion that the Class is an instance of ConversionBasedUnit
     */
    ConversionBasedUnit,
    /**
     * Assertion that the Class is an instance of CyclicRatioScale
     */
    CyclicRatioScale,
    /**
     * Assertion that the Class is an instance of DateParameterType
     */
    DateParameterType,
    /**
     * Assertion that the Class is an instance of DateTimeParameterType
     */
    DateTimeParameterType,
    /**
     * Assertion that the Class is an instance of DecompositionRule
     */
    DecompositionRule,
    /**
     * Assertion that the Class is an instance of DefinedThing
     */
    DefinedThing,
    /**
     * Assertion that the Class is an instance of Definition
     */
    Definition,
    /**
     * Assertion that the Class is an instance of DerivedQuantityKind
     */
    DerivedQuantityKind,
    /**
     * Assertion that the Class is an instance of DerivedUnit
     */
    DerivedUnit,
    /**
     * Assertion that the Class is an instance of DiagramCanvas
     */
    DiagramCanvas,
    /**
     * Assertion that the Class is an instance of DiagramEdge
     */
    DiagramEdge,
    /**
     * Assertion that the Class is an instance of DiagramElementContainer
     */
    DiagramElementContainer,
    /**
     * Assertion that the Class is an instance of DiagramElementThing
     */
    DiagramElementThing,
    /**
     * Assertion that the Class is an instance of DiagrammingStyle
     */
    DiagrammingStyle,
    /**
     * Assertion that the Class is an instance of DiagramObject
     */
    DiagramObject,
    /**
     * Assertion that the Class is an instance of DiagramShape
     */
    DiagramShape,
    /**
     * Assertion that the Class is an instance of DiagramThingBase
     */
    DiagramThingBase,
    /**
     * Assertion that the Class is an instance of DiscussionItem
     */
    DiscussionItem,
    /**
     * Assertion that the Class is an instance of DomainFileStore
     */
    DomainFileStore,
    /**
     * Assertion that the Class is an instance of DomainOfExpertise
     */
    DomainOfExpertise,
    /**
     * Assertion that the Class is an instance of DomainOfExpertiseGroup
     */
    DomainOfExpertiseGroup,
    /**
     * Assertion that the Class is an instance of ElementBase
     */
    ElementBase,
    /**
     * Assertion that the Class is an instance of ElementDefinition
     */
    ElementDefinition,
    /**
     * Assertion that the Class is an instance of ElementUsage
     */
    ElementUsage,
    /**
     * Assertion that the Class is an instance of EmailAddress
     */
    EmailAddress,
    /**
     * Assertion that the Class is an instance of EngineeringModel
     */
    EngineeringModel,
    /**
     * Assertion that the Class is an instance of EngineeringModelDataAnnotation
     */
    EngineeringModelDataAnnotation,
    /**
     * Assertion that the Class is an instance of EngineeringModelDataDiscussionItem
     */
    EngineeringModelDataDiscussionItem,
    /**
     * Assertion that the Class is an instance of EngineeringModelDataNote
     */
    EngineeringModelDataNote,
    /**
     * Assertion that the Class is an instance of EngineeringModelSetup
     */
    EngineeringModelSetup,
    /**
     * Assertion that the Class is an instance of EnumerationParameterType
     */
    EnumerationParameterType,
    /**
     * Assertion that the Class is an instance of EnumerationValueDefinition
     */
    EnumerationValueDefinition,
    /**
     * Assertion that the Class is an instance of ExclusiveOrExpression
     */
    ExclusiveOrExpression,
    /**
     * Assertion that the Class is an instance of ExternalIdentifierMap
     */
    ExternalIdentifierMap,
    /**
     * Assertion that the Class is an instance of File
     */
    File,
    /**
     * Assertion that the Class is an instance of FileRevision
     */
    FileRevision,
    /**
     * Assertion that the Class is an instance of FileStore
     */
    FileStore,
    /**
     * Assertion that the Class is an instance of FileType
     */
    FileType,
    /**
     * Assertion that the Class is an instance of Folder
     */
    Folder,
    /**
     * Assertion that the Class is an instance of GenericAnnotation
     */
    GenericAnnotation,
    /**
     * Assertion that the Class is an instance of Glossary
     */
    Glossary,
    /**
     * Assertion that the Class is an instance of Goal
     */
    Goal,
    /**
     * Assertion that the Class is an instance of HyperLink
     */
    HyperLink,
    /**
     * Assertion that the Class is an instance of IdCorrespondence
     */
    IdCorrespondence,
    /**
     * Assertion that the Class is an instance of IntervalScale
     */
    IntervalScale,
    /**
     * Assertion that the Class is an instance of Iteration
     */
    Iteration,
    /**
     * Assertion that the Class is an instance of IterationSetup
     */
    IterationSetup,
    /**
     * Assertion that the Class is an instance of LinearConversionUnit
     */
    LinearConversionUnit,
    /**
     * Assertion that the Class is an instance of LogarithmicScale
     */
    LogarithmicScale,
    /**
     * Assertion that the Class is an instance of MappingToReferenceScale
     */
    MappingToReferenceScale,
    /**
     * Assertion that the Class is an instance of MeasurementScale
     */
    MeasurementScale,
    /**
     * Assertion that the Class is an instance of MeasurementUnit
     */
    MeasurementUnit,
    /**
     * Assertion that the Class is an instance of ModellingAnnotationItem
     */
    ModellingAnnotationItem,
    /**
     * Assertion that the Class is an instance of ModellingThingReference
     */
    ModellingThingReference,
    /**
     * Assertion that the Class is an instance of ModelLogEntry
     */
    ModelLogEntry,
    /**
     * Assertion that the Class is an instance of ModelReferenceDataLibrary
     */
    ModelReferenceDataLibrary,
    /**
     * Assertion that the Class is an instance of MultiRelationship
     */
    MultiRelationship,
    /**
     * Assertion that the Class is an instance of MultiRelationshipRule
     */
    MultiRelationshipRule,
    /**
     * Assertion that the Class is an instance of NaturalLanguage
     */
    NaturalLanguage,
    /**
     * Assertion that the Class is an instance of NestedElement
     */
    NestedElement,
    /**
     * Assertion that the Class is an instance of NestedParameter
     */
    NestedParameter,
    /**
     * Assertion that the Class is an instance of Note
     */
    Note,
    /**
     * Assertion that the Class is an instance of NotExpression
     */
    NotExpression,
    /**
     * Assertion that the Class is an instance of NotThing
     */
    NotThing,
    /**
     * Assertion that the Class is an instance of Option
     */
    Option,
    /**
     * Assertion that the Class is an instance of OrdinalScale
     */
    OrdinalScale,
    /**
     * Assertion that the Class is an instance of OrExpression
     */
    OrExpression,
    /**
     * Assertion that the Class is an instance of Organization
     */
    Organization,
    /**
     * Assertion that the Class is an instance of OwnedStyle
     */
    OwnedStyle,
    /**
     * Assertion that the Class is an instance of Page
     */
    Page,
    /**
     * Assertion that the Class is an instance of Parameter
     */
    Parameter,
    /**
     * Assertion that the Class is an instance of ParameterBase
     */
    ParameterBase,
    /**
     * Assertion that the Class is an instance of ParameterGroup
     */
    ParameterGroup,
    /**
     * Assertion that the Class is an instance of ParameterizedCategoryRule
     */
    ParameterizedCategoryRule,
    /**
     * Assertion that the Class is an instance of ParameterOrOverrideBase
     */
    ParameterOrOverrideBase,
    /**
     * Assertion that the Class is an instance of ParameterOverride
     */
    ParameterOverride,
    /**
     * Assertion that the Class is an instance of ParameterOverrideValueSet
     */
    ParameterOverrideValueSet,
    /**
     * Assertion that the Class is an instance of ParameterSubscription
     */
    ParameterSubscription,
    /**
     * Assertion that the Class is an instance of ParameterSubscriptionValueSet
     */
    ParameterSubscriptionValueSet,
    /**
     * Assertion that the Class is an instance of ParameterType
     */
    ParameterType,
    /**
     * Assertion that the Class is an instance of ParameterTypeComponent
     */
    ParameterTypeComponent,
    /**
     * Assertion that the Class is an instance of ParameterValue
     */
    ParameterValue,
    /**
     * Assertion that the Class is an instance of ParameterValueSet
     */
    ParameterValueSet,
    /**
     * Assertion that the Class is an instance of ParameterValueSetBase
     */
    ParameterValueSetBase,
    /**
     * Assertion that the Class is an instance of ParametricConstraint
     */
    ParametricConstraint,
    /**
     * Assertion that the Class is an instance of Participant
     */
    Participant,
    /**
     * Assertion that the Class is an instance of ParticipantPermission
     */
    ParticipantPermission,
    /**
     * Assertion that the Class is an instance of ParticipantRole
     */
    ParticipantRole,
    /**
     * Assertion that the Class is an instance of Person
     */
    Person,
    /**
     * Assertion that the Class is an instance of PersonPermission
     */
    PersonPermission,
    /**
     * Assertion that the Class is an instance of PersonRole
     */
    PersonRole,
    /**
     * Assertion that the Class is an instance of Point
     */
    Point,
    /**
     * Assertion that the Class is an instance of PossibleFiniteState
     */
    PossibleFiniteState,
    /**
     * Assertion that the Class is an instance of PossibleFiniteStateList
     */
    PossibleFiniteStateList,
    /**
     * Assertion that the Class is an instance of PrefixedUnit
     */
    PrefixedUnit,
    /**
     * Assertion that the Class is an instance of Publication
     */
    Publication,
    /**
     * Assertion that the Class is an instance of QuantityKind
     */
    QuantityKind,
    /**
     * Assertion that the Class is an instance of QuantityKindFactor
     */
    QuantityKindFactor,
    /**
     * Assertion that the Class is an instance of RatioScale
     */
    RatioScale,
    /**
     * Assertion that the Class is an instance of ReferenceDataLibrary
     */
    ReferenceDataLibrary,
    /**
     * Assertion that the Class is an instance of ReferencerRule
     */
    ReferencerRule,
    /**
     * Assertion that the Class is an instance of ReferenceSource
     */
    ReferenceSource,
    /**
     * Assertion that the Class is an instance of RelationalExpression
     */
    RelationalExpression,
    /**
     * Assertion that the Class is an instance of Relationship
     */
    Relationship,
    /**
     * Assertion that the Class is an instance of RelationshipParameterValue
     */
    RelationshipParameterValue,
    /**
     * Assertion that the Class is an instance of RequestForDeviation
     */
    RequestForDeviation,
    /**
     * Assertion that the Class is an instance of RequestForWaiver
     */
    RequestForWaiver,
    /**
     * Assertion that the Class is an instance of Requirement
     */
    Requirement,
    /**
     * Assertion that the Class is an instance of RequirementsContainer
     */
    RequirementsContainer,
    /**
     * Assertion that the Class is an instance of RequirementsContainerParameterValue
     */
    RequirementsContainerParameterValue,
    /**
     * Assertion that the Class is an instance of RequirementsGroup
     */
    RequirementsGroup,
    /**
     * Assertion that the Class is an instance of RequirementsSpecification
     */
    RequirementsSpecification,
    /**
     * Assertion that the Class is an instance of ReviewItemDiscrepancy
     */
    ReviewItemDiscrepancy,
    /**
     * Assertion that the Class is an instance of Rule
     */
    Rule,
    /**
     * Assertion that the Class is an instance of RuleVerification
     */
    RuleVerification,
    /**
     * Assertion that the Class is an instance of RuleVerificationList
     */
    RuleVerificationList,
    /**
     * Assertion that the Class is an instance of RuleViolation
     */
    RuleViolation,
    /**
     * Assertion that the Class is an instance of ScalarParameterType
     */
    ScalarParameterType,
    /**
     * Assertion that the Class is an instance of ScaleReferenceQuantityValue
     */
    ScaleReferenceQuantityValue,
    /**
     * Assertion that the Class is an instance of ScaleValueDefinition
     */
    ScaleValueDefinition,
    /**
     * Assertion that the Class is an instance of Section
     */
    Section,
    /**
     * Assertion that the Class is an instance of SharedStyle
     */
    SharedStyle,
    /**
     * Assertion that the Class is an instance of SimpleParameterizableThing
     */
    SimpleParameterizableThing,
    /**
     * Assertion that the Class is an instance of SimpleParameterValue
     */
    SimpleParameterValue,
    /**
     * Assertion that the Class is an instance of SimpleQuantityKind
     */
    SimpleQuantityKind,
    /**
     * Assertion that the Class is an instance of SimpleUnit
     */
    SimpleUnit,
    /**
     * Assertion that the Class is an instance of SiteDirectory
     */
    SiteDirectory,
    /**
     * Assertion that the Class is an instance of SiteDirectoryDataAnnotation
     */
    SiteDirectoryDataAnnotation,
    /**
     * Assertion that the Class is an instance of SiteDirectoryDataDiscussionItem
     */
    SiteDirectoryDataDiscussionItem,
    /**
     * Assertion that the Class is an instance of SiteDirectoryThingReference
     */
    SiteDirectoryThingReference,
    /**
     * Assertion that the Class is an instance of SiteLogEntry
     */
    SiteLogEntry,
    /**
     * Assertion that the Class is an instance of SiteReferenceDataLibrary
     */
    SiteReferenceDataLibrary,
    /**
     * Assertion that the Class is an instance of Solution
     */
    Solution,
    /**
     * Assertion that the Class is an instance of SpecializedQuantityKind
     */
    SpecializedQuantityKind,
    /**
     * Assertion that the Class is an instance of Stakeholder
     */
    Stakeholder,
    /**
     * Assertion that the Class is an instance of StakeholderValue
     */
    StakeholderValue,
    /**
     * Assertion that the Class is an instance of StakeHolderValueMap
     */
    StakeHolderValueMap,
    /**
     * Assertion that the Class is an instance of StakeHolderValueMapSettings
     */
    StakeHolderValueMapSettings,
    /**
     * Assertion that the Class is an instance of TelephoneNumber
     */
    TelephoneNumber,
    /**
     * Assertion that the Class is an instance of Term
     */
    Term,
    /**
     * Assertion that the Class is an instance of TextParameterType
     */
    TextParameterType,
    /**
     * Assertion that the Class is an instance of TextualNote
     */
    TextualNote,
    /**
     * Assertion that the Class is an instance of Thing
     */
    Thing,
    /**
     * Assertion that the Class is an instance of ThingReference
     */
    ThingReference,
    /**
     * Assertion that the Class is an instance of TimeOfDayParameterType
     */
    TimeOfDayParameterType,
    /**
     * Assertion that the Class is an instance of TopContainer
     */
    TopContainer,
    /**
     * Assertion that the Class is an instance of UnitFactor
     */
    UnitFactor,
    /**
     * Assertion that the Class is an instance of UnitPrefix
     */
    UnitPrefix,
    /**
     * Assertion that the Class is an instance of UserPreference
     */
    UserPreference,
    /**
     * Assertion that the Class is an instance of UserRuleVerification
     */
    UserRuleVerification,
    /**
     * Assertion that the Class is an instance of ValueGroup
     */
    ValueGroup,
  }

  /**
   * enumeration datatype that defines the possible access rights for a class of objects in a PersonPermissionNote 1: The relevant class of objects is specified in the <i>objectClass</i> property of a PersonPermission.Note 2: PersonAccessRightKind.MODIFY implies read, create and update actions, and if delete is allowed, deleted actions as well.Note 3: PersonAccessRightKind.MODIFY access to an object also implies the right to modify the container collection that contains the object, even if the access right to the container collection object is limited to PersonAccessRightKind.READ.
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
     * access right to a given class of objects is the same as that of the class of its container object
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
     * read-only access to information contained in EngineeringModelSetups where the authenticated Person is a ParticipantNote: If an authenticated Person has PersonAccessRightKind.MODIFY_OWN_PERSON to the ClassKind.Person, then READ_IF_PARTICIPANT also implies READ access on any Person that is associated with any Participant in any of the EngineeringModelSetups in which the authenticated Person is a Participant. In other words, READ access to the union of Persons referenced by Participants in the union of EngineeringModelSetups for which the authenticated Person has at least READ_IF_PARTICIPANT access. Basically this means that a Participant has access to the information describing the other Participants and Persons in a team that he or she is a member of.
     */
    READ_IF_PARTICIPANT,
    /**
     * modify access to information contained in EngineeringModelSetups where the authenticated Person is a Participant
     */
    MODIFY_IF_PARTICIPANT,
    /**
     * modify access to the Person data of the actual authenticated person (i.e. user) in a session
     */
    MODIFY_OWN_PERSON,
  }

  /**
   * enumeration datatype that defines the possible access rights for a class of objects in a ParticipantPermissionNote 1: The relevant class of objects is specified in the <i>objectClass</i> property of a ParticipantPermission.Note 2: ParticipantAccessRightKind.MODIFY implies read, create and update actions, and if delete is allowed, deleted actions as well.Note 3: ParticipantAccessRightKind.MODIFY access to an object also implies the right to modify the container collection that contains the object, even if the access right to the container collection object is limited to ParticipantAccessRightKind.READ.
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
     * access right to a given class of objects is the same as that of the class of its container object
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
     * modify access for objects owned by a selected DomainOfExpertiseNote: A Participant in a concurrent engineering session can only represent one DomainOfExpertise at a time, but may switch between the (possible) domains assigned to the Participant.
     */
    MODIFY_IF_OWNER,
  }

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
     * designation of an information level log entry used to mark and annotate event logging for informationNote: Information level LogEntry instances are typically produced automatically by executing applications.
     */
    INFO,
    /**
     * designation of a user level log entry used to mark and annotate event logging with user defined contentNote: User level LogEntry instances are typically produced on demand by a human user and its <i>content</i> is typically manually written. Its use is similar to the log message used upon commit or check-in in a configuration control system.
     */
    USER,
  }

  /**
   * enumeration datatype that represents a simple set of boolean operatorsNote: For an explanation of the operators see <a href="http://en.wikipedia.org/wiki/Boolean_algebra#Basic_operations">WikipediaBoolean_algebra Basic_operations</a>.
   */
  export enum BooleanOperatorKind {
    /**
     * conjunction boolean operatorNote: When both operands are true then the result is true, otherwise false.
     */
    AND,
    /**
     * disjunction boolean operatorNote: When at least one operand is true then the result is true,otherwise false.
     */
    OR,
    /**
     * exclusive or boolean operatorNote: When one operand is true and the other is false then the result istrue, when both operands are true or both are false then the result isfalse.
     */
    XOR,
  }

  /**
   * enumeration datatype that represents the possible operators for equalitiesand inequalities
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
    GE,
  }

  /**
   * enumeration datatype that asserts whether an ElementUsage is an interface end, and if so, what kind of role the interface end fulfillsNote: An <i>interface end</i> is one side of an interface. A complete interface consists of at least two interface ends and a connection between them.
   */
  export enum InterfaceEndKind {
    /**
     * not an interface end
     */
    NONE,
    /**
     * general undirected interface endExample: For example a mechanical mounting plate.
     */
    UNDIRECTED,
    /**
     * interface end that acts as an input for its <i>containingElement</i> ElementDefinitionExample: For example a power inlet socket.
     */
    INPUT,
    /**
     * interface end that acts as an output for its <i>containingElement</i> ElementDefinitionExample: For example a signal output connector on a sensor.
     */
    OUTPUT,
    /**
     * interface end that acts both as an input and an output for its <i>containingElement</i> ElementDefinitionExample: For example an Ethernet port on an electronic device.
     */
    IN_OUT,
  }

  /**
   * enumeration datatype that defines the possible switch settings to select a value in a ParameterValueSet or a ParameterSubscriptionValueSetNote: In this concurrent engineering model all parameters (see Parameter and ParameterOverride) and parameter subscriptions (see ParameterSubscription) have 3 possible values:  <i>computed</i>, <i>manual</i> and <i>reference</i>, and a <i>valueSwitch</i> to select the actual value to be used for modelling purposes. The <i>computed</i> value is the value as computed by the owner (DomainOfExpertise) of a Parameter or ParameterOverride, or in case of a ParameterSubscription it is derived from the referenced <i>published</i> value (see Publication and ParameterSubscriptionValueSet). The <i>manual</i> value is a literal value set by the owner of a Parameter, ParameterOverride or ParameterSubscription. Finally, the <i>reference</i> value is another value to be used as a reference in comparisons. Such values would typically be imported from another source than the current EngineeringModel.
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
    REFERENCE,
  }

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
    FORBIDDEN,
  }

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
    INCONCLUSIVE,
  }

  /**
   * Enumeration datatype that defines the status of a annotation
   */
  export enum AnnotationStatusKind {
    /**
     *
     */
    OPEN,
    /**
     *
     */
    DONE,
    /**
     *
     */
    CLOSED,
    /**
     *
     */
    INVALID,
    /**
     *
     */
    WONTFIX,
    /**
     *
     */
    NOT_APPLICABLE,
  }

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
    WITHDRAWN,
  }

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
    MINOR,
  }


  /**
   * Represents the equivalent TypeScript interface of Annotation in the DTO space.
   */
  export interface AnnotationInterface {
    /**
     * Gets or sets the content
     */
    content: string;

    /**
     * Gets or sets the languageCode
     */
    languageCode: string;

  }

  /**
   * Represents the equivalent TypeScript interface of CategorizableThing in the DTO space.
   */
  export interface CategorizableThingInterface {
    /**
     * Gets or sets the category
     */
    category: string[];

  }

  /**
   * Represents the equivalent TypeScript interface of DeprecatableThing in the DTO space.
   */
  export interface DeprecatableThingInterface {
    /**
     * Gets or sets the isDeprecated
     */
    isDeprecated: boolean;

  }

  /**
   * Represents the equivalent TypeScript interface of LogEntry in the DTO space.
   */
  export interface LogEntryInterface {
    /**
     * Gets or sets the affectedItemIid
     */
    affectedItemIid: string[];

    /**
     * Gets or sets the author
     */
    author: string;

    /**
     * Gets or sets the level
     */
    level: LogLevelKind;

  }

  /**
   * Represents the equivalent TypeScript interface of NamedThing in the DTO space.
   */
  export interface NamedThingInterface {
    /**
     * Gets or sets the name
     */
    name: string;

  }

  /**
   * Represents the equivalent TypeScript interface of OptionDependentThing in the DTO space.
   */
  export interface OptionDependentThingInterface {
    /**
     * Gets or sets the excludeOption
     */
    excludeOption: string[];

  }

  /**
   * Represents the equivalent TypeScript interface of OwnedThing in the DTO space.
   */
  export interface OwnedThingInterface {
    /**
     * Gets or sets the owner
     */
    owner: string;

  }

  /**
   * Represents the equivalent TypeScript interface of ParticipantAffectedAccessThing in the DTO space.
   */
  export interface ParticipantAffectedAccessThingInterface {
  }

  /**
   * Represents the equivalent TypeScript interface of ShortNamedThing in the DTO space.
   */
  export interface ShortNamedThingInterface {
    /**
     * Gets or sets the shortName
     */
    shortName: string;

  }

  /**
   * Represents the equivalent TypeScript interface of TimeStampedThing in the DTO space.
   */
  export interface TimeStampedThingInterface {
    /**
     * Gets or sets the createdOn
     */
    createdOn: string;

  }

  /**
   * Represents the equivalent TypeScript interface of VolatileThing in the DTO space.
   */
  export interface VolatileThingInterface {
    /**
     * Gets or sets the isVolatile
     */
    isVolatile: boolean;

  }

  /**
   * A TypeScript DTO representation of the Thing class.
   */
  export abstract class Thing  {
    /**
     * The partial routes that were added
     */
    private partialRoutes: string[];

    /**
     * The partial classKind routes that were added
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
     * Initializes a new instance of the Thing class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      this.iid = iid;
      this.classKind = this.computeCurrentClassKind();
      this.revisionNumber = rev;
      this._isOriginal = isOriginal;
      this.partialClassKindRoutes = new Array<ClassKind>();
      this.partialRoutes = new Array<string>();
      this.excludedDomain = [];
      this.excludedPerson = [];
    }

    /**
     * Gets or sets the classKind
     */
    public classKind: ClassKind;

    /**
     * Gets or sets the excludedDomain
     */
    public excludedDomain: string[];

    /**
     * Gets or sets the excludedPerson
     */
    public excludedPerson: string[];

    /**
     * Gets or sets the iid
     */
    public iid: string;

    /**
     * Gets or sets the modifiedOn
     */
    public modifiedOn: string;

    /**
     * Gets or sets the revisionNumber
     */
    public revisionNumber: number;

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
   * A TypeScript DTO representation of the DefinedThing class.
   */
  export abstract class DefinedThing extends Thing implements NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the DefinedThing class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the GenericAnnotation class.
   */
  export abstract class GenericAnnotation extends Thing implements AnnotationInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the GenericAnnotation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

  }

  /**
   * A TypeScript DTO representation of the ParameterType class.
   */
  export abstract class ParameterType extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the ParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * This is a derived property!
     */
    public get numberOfValues(): number {
      throw new Error("ParameterType.numberOfValues is a derived property");
    }

    /**
     * Gets or sets the symbol
     */
    public symbol: string;

    /**
     * Gets the route for the current ParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramThingBase class.
   */
  export abstract class DiagramThingBase extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the DiagramThingBase class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the EngineeringModelDataAnnotation class.
   */
  export abstract class EngineeringModelDataAnnotation extends GenericAnnotation  {

    /**
     * Initializes a new instance of the EngineeringModelDataAnnotation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.discussion = [];
      this.relatedThing = [];
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the discussion
     */
    public discussion: string[];

    /**
     * Gets or sets the primaryAnnotatedThing
     */
    public primaryAnnotatedThing: string;

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

  }

  /**
   * A TypeScript DTO representation of the ScalarParameterType class.
   */
  export abstract class ScalarParameterType extends ParameterType  {

    /**
     * Initializes a new instance of the ScalarParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ScalarParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ModellingAnnotationItem class.
   */
  export abstract class ModellingAnnotationItem extends EngineeringModelDataAnnotation implements CategorizableThingInterface, OwnedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the ModellingAnnotationItem class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.approvedBy = [];
      this.category = [];
      this.sourceAnnotation = [];
    }

    /**
     * Gets or sets the approvedBy
     */
    public approvedBy: string[];

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the classification
     */
    public classification: AnnotationClassificationKind;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the sourceAnnotation
     */
    public sourceAnnotation: string[];

    /**
     * Gets or sets the status
     */
    public status: AnnotationStatusKind;

    /**
     * Gets or sets the title
     */
    public title: string;

    /**
     * Gets the route for the current ModellingAnnotationItem
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BooleanExpression class.
   */
  export abstract class BooleanExpression extends Thing  {

    /**
     * Initializes a new instance of the BooleanExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current BooleanExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramElementContainer class.
   */
  export abstract class DiagramElementContainer extends DiagramThingBase  {

    /**
     * Initializes a new instance of the DiagramElementContainer class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.bounds = [];
      this.diagramElement = [];
    }

    /**
     * Gets or sets the bounds
     */
    public bounds: string[];

    /**
     * Gets or sets the diagramElement
     */
    public diagramElement: string[];

  }

  /**
   * A TypeScript DTO representation of the MeasurementScale class.
   */
  export abstract class MeasurementScale extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the MeasurementScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.mappingToReferenceScale = [];
      this.valueDefinition = [];
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets a value indicating whether isMaximumInclusive
     */
    public isMaximumInclusive: boolean;

    /**
     * Gets or sets a value indicating whether isMinimumInclusive
     */
    public isMinimumInclusive: boolean;

    /**
     * Gets or sets the mappingToReferenceScale
     */
    public mappingToReferenceScale: string[];

    /**
     * Gets or sets the maximumPermissibleValue
     */
    public maximumPermissibleValue: string;

    /**
     * Gets or sets the minimumPermissibleValue
     */
    public minimumPermissibleValue: string;

    /**
     * Gets or sets the negativeValueConnotation
     */
    public negativeValueConnotation: string;

    /**
     * Gets or sets the numberSet
     */
    public numberSet: NumberSetKind;

    /**
     * Gets or sets the positiveValueConnotation
     */
    public positiveValueConnotation: string;

    /**
     * Gets or sets the unit
     */
    public unit: string;

    /**
     * Gets or sets the valueDefinition
     */
    public valueDefinition: string[];

    /**
     * Gets the route for the current MeasurementScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the MeasurementUnit class.
   */
  export abstract class MeasurementUnit extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the MeasurementUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current MeasurementUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Rule class.
   */
  export abstract class Rule extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Rule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current Rule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterBase class.
   */
  export abstract class ParameterBase extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the ParameterBase class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the group
     */
    public group: string;

    /**
     * Gets or sets a value indicating whether isOptionDependent
     */
    public isOptionDependent: boolean;

    /**
     * Gets or sets the owner
     */
    public owner: string;

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

  }

  /**
   * A TypeScript DTO representation of the ContractDeviation class.
   */
  export abstract class ContractDeviation extends ModellingAnnotationItem  {

    /**
     * Initializes a new instance of the ContractDeviation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ContractDeviation
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramElementThing class.
   */
  export abstract class DiagramElementThing extends DiagramElementContainer  {

    /**
     * Initializes a new instance of the DiagramElementThing class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current DiagramElementThing
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the QuantityKind class.
   */
  export abstract class QuantityKind extends ScalarParameterType  {

    /**
     * Initializes a new instance of the QuantityKind class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleScale = [];
    }

    /**
     * This is a derived property!
     */
    public get allPossibleScale(): string[] {
      throw new Error("QuantityKind.allPossibleScale is a derived property");
    }

    /**
     * Gets or sets the defaultScale
     */
    public defaultScale: string;

    /**
     * Gets or sets the possibleScale
     */
    public possibleScale: string[];

    /**
     * This is a derived property!
     */
    public get quantityDimensionExponent(): Cdp4Type.OrderedItem[] {
      throw new Error("QuantityKind.quantityDimensionExponent is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get quantityDimensionExpression(): string {
      throw new Error("QuantityKind.quantityDimensionExpression is a derived property");
    }

    /**
     * Gets or sets the quantityDimensionSymbol
     */
    public quantityDimensionSymbol: string;

    /**
     * Gets the route for the current QuantityKind
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ConversionBasedUnit class.
   */
  export abstract class ConversionBasedUnit extends MeasurementUnit  {

    /**
     * Initializes a new instance of the ConversionBasedUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the conversionFactor
     */
    public conversionFactor: string;

    /**
     * Gets or sets the referenceUnit
     */
    public referenceUnit: string;

    /**
     * Gets the route for the current ConversionBasedUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagrammingStyle class.
   */
  export abstract class DiagrammingStyle extends DiagramThingBase  {

    /**
     * Initializes a new instance of the DiagrammingStyle class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether fontBold
     */
    public fontBold: boolean;

    /**
     * Gets or sets the fontColor
     */
    public fontColor: string;

    /**
     * Gets or sets a value indicating whether fontItalic
     */
    public fontItalic: boolean;

    /**
     * Gets or sets the fontName
     */
    public fontName: string;

    /**
     * Gets or sets the fontSize
     */
    public fontSize: number;

    /**
     * Gets or sets a value indicating whether fontStrokeThrough
     */
    public fontStrokeThrough: boolean;

    /**
     * Gets or sets a value indicating whether fontUnderline
     */
    public fontUnderline: boolean;

    /**
     * Gets or sets the strokeColor
     */
    public strokeColor: string;

    /**
     * Gets or sets the strokeOpacity
     */
    public strokeOpacity: number;

    /**
     * Gets or sets the strokeWidth
     */
    public strokeWidth: number;

    /**
     * Gets or sets the usedColor
     */
    public usedColor: string[];

  }

  /**
   * A TypeScript DTO representation of the DiscussionItem class.
   */
  export abstract class DiscussionItem extends GenericAnnotation  {

    /**
     * Initializes a new instance of the DiscussionItem class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the ElementBase class.
   */
  export abstract class ElementBase extends DefinedThing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the ElementBase class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the FileStore class.
   */
  export abstract class FileStore extends Thing implements NamedThingInterface, OwnedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the FileStore class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.file = [];
      this.folder = [];
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the file
     */
    public file: string[];

    /**
     * Gets or sets the folder
     */
    public folder: string[];

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

  }

  /**
   * A TypeScript DTO representation of the Note class.
   */
  export abstract class Note extends Thing implements CategorizableThingInterface, NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Note class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current Note
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterOrOverrideBase class.
   */
  export abstract class ParameterOrOverrideBase extends ParameterBase  {

    /**
     * Initializes a new instance of the ParameterOrOverrideBase class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the ParameterValue class.
   */
  export abstract class ParameterValue extends Thing  {

    /**
     * Initializes a new instance of the ParameterValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the ParameterValueSetBase class.
   */
  export abstract class ParameterValueSetBase extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the ParameterValueSetBase class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.computed = [];
      this.formula = [];
      this.manual = [];
      this.published = [];
      this.reference = [];
    }

    /**
     * Gets or sets the actualOption
     */
    public actualOption: string;

    /**
     * Gets or sets the actualState
     */
    public actualState: string;

    /**
     * This is a derived property!
     */
    public get actualValue(): string[] {
      throw new Error("ParameterValueSetBase.actualValue is a derived property");
    }

    /**
     * Gets or sets the computed
     */
    public computed: string[];

    /**
     * Gets or sets the formula
     */
    public formula: string[];

    /**
     * Gets or sets the manual
     */
    public manual: string[];

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("ParameterValueSetBase.owner is a derived property");
    }

    /**
     * Gets or sets the published
     */
    public published: string[];

    /**
     * Gets or sets the reference
     */
    public reference: string[];

    /**
     * Gets or sets the valueSwitch
     */
    public valueSwitch: ParameterSwitchKind;

  }

  /**
   * A TypeScript DTO representation of the ReferenceDataLibrary class.
   */
  export abstract class ReferenceDataLibrary extends DefinedThing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the ReferenceDataLibrary class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.baseQuantityKind = [];
      this.baseUnit = [];
      this.constant = [];
      this.definedCategory = [];
      this.fileType = [];
      this.glossary = [];
      this.parameterType = [];
      this.referenceSource = [];
      this.rule = [];
      this.scale = [];
      this.unit = [];
      this.unitPrefix = [];
    }

    /**
     * Gets or sets the baseQuantityKind
     */
    public baseQuantityKind: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the baseUnit
     */
    public baseUnit: string[];

    /**
     * Gets or sets the constant
     */
    public constant: string[];

    /**
     * Gets or sets the definedCategory
     */
    public definedCategory: string[];

    /**
     * Gets or sets the fileType
     */
    public fileType: string[];

    /**
     * Gets or sets the glossary
     */
    public glossary: string[];

    /**
     * Gets or sets the parameterType
     */
    public parameterType: string[];

    /**
     * Gets or sets the referenceSource
     */
    public referenceSource: string[];

    /**
     * Gets or sets the requiredRdl
     */
    public requiredRdl: string;

    /**
     * Gets or sets the rule
     */
    public rule: string[];

    /**
     * Gets or sets the scale
     */
    public scale: string[];

    /**
     * Gets or sets the unit
     */
    public unit: string[];

    /**
     * Gets or sets the unitPrefix
     */
    public unitPrefix: string[];

  }

  /**
   * A TypeScript DTO representation of the Relationship class.
   */
  export abstract class Relationship extends Thing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the Relationship class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.parameterValue = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

    /**
     * Gets the route for the current Relationship
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequirementsContainer class.
   */
  export abstract class RequirementsContainer extends DefinedThing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the RequirementsContainer class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.group = [];
      this.parameterValue = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the group
     */
    public group: string[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

  }

  /**
   * A TypeScript DTO representation of the RuleVerification class.
   */
  export abstract class RuleVerification extends Thing implements NamedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the RuleVerification class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.violation = [];
    }

    /**
     * Gets or sets the executedOn
     */
    public executedOn: string;

    /**
     * Gets or sets a value indicating whether isActive
     */
    public isActive: boolean;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("RuleVerification.owner is a derived property");
    }

    /**
     * Gets or sets the status
     */
    public status: RuleVerificationStatusKind;

    /**
     * Gets or sets the violation
     */
    public violation: string[];

    /**
     * Gets the route for the current RuleVerification
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ThingReference class.
   */
  export abstract class ThingReference extends Thing  {

    /**
     * Initializes a new instance of the ThingReference class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the TopContainer class.
   */
  export abstract class TopContainer extends Thing  {

    /**
     * Initializes a new instance of the TopContainer class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
   * A TypeScript DTO representation of the DiagramShape class.
   */
  export abstract class DiagramShape extends DiagramElementThing  {

    /**
     * Initializes a new instance of the DiagramShape class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current DiagramShape
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SimpleParameterizableThing class.
   */
  export abstract class SimpleParameterizableThing extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the SimpleParameterizableThing class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.parameterValue = [];
    }

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the parameterValue
     */
    public parameterValue: string[];

  }

  /**
   * A TypeScript DTO representation of the CompoundParameterType class.
   */
  export class CompoundParameterType extends ParameterType  {

    /**
     * Initializes a new instance of the CompoundParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether isFinalized
     */
    public isFinalized: boolean;

    /**
     * Gets the route for the current CompoundParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RatioScale class.
   */
  export class RatioScale extends MeasurementScale  {

    /**
     * Initializes a new instance of the RatioScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RatioScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ActionItem class.
   */
  export class ActionItem extends ModellingAnnotationItem  {

    /**
     * Initializes a new instance of the ActionItem class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the actionee
     */
    public actionee: string;

    /**
     * Gets or sets the closeOutDate
     */
    public closeOutDate: string;

    /**
     * Gets or sets the closeOutStatement
     */
    public closeOutStatement: string;

    /**
     * Gets or sets the dueDate
     */
    public dueDate: string;

    /**
     * Gets the route for the current ActionItem
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ActualFiniteState class.
   */
  export class ActualFiniteState extends Thing implements NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the ActualFiniteState class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.possibleState = [];
    }

    /**
     * Gets or sets the kind
     */
    public kind: ActualFiniteStateKind;

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("ActualFiniteState.name is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("ActualFiniteState.owner is a derived property");
    }

    /**
     * Gets or sets the possibleState
     */
    public possibleState: string[];

    /**
     * This is a derived property!
     */
    public get shortName(): string {
      throw new Error("ActualFiniteState.shortName is a derived property");
    }

    /**
     * Gets the route for the current ActualFiniteState
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ActualFiniteStateList class.
   */
  export class ActualFiniteStateList extends Thing implements NamedThingInterface, OptionDependentThingInterface, OwnedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the ActualFiniteStateList class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.actualState = [];
      this.excludeOption = [];
      this.possibleFiniteStateList = [];
    }

    /**
     * Gets or sets the actualState
     */
    public actualState: string[];

    /**
     * Gets or sets the excludeOption
     */
    public excludeOption: string[];

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("ActualFiniteStateList.name is a derived property");
    }

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the possibleFiniteStateList
     */
    public possibleFiniteStateList: Cdp4Type.OrderedItem[];

    /**
     * This is a derived property!
     */
    public get shortName(): string {
      throw new Error("ActualFiniteStateList.shortName is a derived property");
    }

    /**
     * Gets the route for the current ActualFiniteStateList
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Alias class.
   */
  export class Alias extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the Alias class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets a value indicating whether isSynonym
     */
    public isSynonym: boolean;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets the route for the current Alias
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the AndExpression class.
   */
  export class AndExpression extends BooleanExpression  {

    /**
     * Initializes a new instance of the AndExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

    /**
     * Gets the route for the current AndExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Approval class.
   */
  export class Approval extends GenericAnnotation implements OwnedThingInterface {

    /**
     * Initializes a new instance of the Approval class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current Approval
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ArrayParameterType class.
   */
  export class ArrayParameterType extends CompoundParameterType  {

    /**
     * Initializes a new instance of the ArrayParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * This is a derived property!
     */
    public get hasSingleComponentType(): boolean {
      throw new Error("ArrayParameterType.hasSingleComponentType is a derived property");
    }

    /**
     * Gets or sets a value indicating whether isTensor
     */
    public isTensor: boolean;

    /**
     * This is a derived property!
     */
    public get rank(): number {
      throw new Error("ArrayParameterType.rank is a derived property");
    }

    /**
     * Gets the route for the current ArrayParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BinaryNote class.
   */
  export class BinaryNote extends Note  {

    /**
     * Initializes a new instance of the BinaryNote class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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

    /**
     * Gets the route for the current BinaryNote
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BinaryRelationship class.
   */
  export class BinaryRelationship extends Relationship  {

    /**
     * Initializes a new instance of the BinaryRelationship class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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

    /**
     * Gets the route for the current BinaryRelationship
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BinaryRelationshipRule class.
   */
  export class BinaryRelationshipRule extends Rule  {

    /**
     * Initializes a new instance of the BinaryRelationshipRule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the forwardRelationshipName
     */
    public forwardRelationshipName: string;

    /**
     * Gets or sets the inverseRelationshipName
     */
    public inverseRelationshipName: string;

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
     * Gets the route for the current BinaryRelationshipRule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Book class.
   */
  export class Book extends Thing implements CategorizableThingInterface, NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Book class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.section = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the section
     */
    public section: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current Book
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BooleanParameterType class.
   */
  export class BooleanParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the BooleanParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current BooleanParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Bounds class.
   */
  export class Bounds extends DiagramThingBase  {

    /**
     * Initializes a new instance of the Bounds class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the height
     */
    public height: number;

    /**
     * Gets or sets the width
     */
    public width: number;

    /**
     * Gets or sets the x
     */
    public x: number;

    /**
     * Gets or sets the y
     */
    public y: number;

    /**
     * Gets the route for the current Bounds
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the BuiltInRuleVerification class.
   */
  export class BuiltInRuleVerification extends RuleVerification  {

    /**
     * Initializes a new instance of the BuiltInRuleVerification class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current BuiltInRuleVerification
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Category class.
   */
  export class Category extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Category class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.permissibleClass = [];
      this.superCategory = [];
    }

    /**
     * Gets or sets a value indicating whether isAbstract
     */
    public isAbstract: boolean;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the permissibleClass
     */
    public permissibleClass: ClassKind[];

    /**
     * Gets or sets the superCategory
     */
    public superCategory: string[];

    /**
     * Gets the route for the current Category
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ChangeProposal class.
   */
  export class ChangeProposal extends ModellingAnnotationItem  {

    /**
     * Initializes a new instance of the ChangeProposal class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the changeRequest
     */
    public changeRequest: string;

    /**
     * Gets the route for the current ChangeProposal
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ChangeRequest class.
   */
  export class ChangeRequest extends ContractDeviation  {

    /**
     * Initializes a new instance of the ChangeRequest class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ChangeRequest
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Citation class.
   */
  export class Citation extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the Citation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isAdaptation
     */
    public isAdaptation: boolean;

    /**
     * Gets or sets the location
     */
    public location: string;

    /**
     * Gets or sets the remark
     */
    public remark: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the source
     */
    public source: string;

    /**
     * Gets the route for the current Citation
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Color class.
   */
  export class Color extends DiagramThingBase  {

    /**
     * Initializes a new instance of the Color class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the blue
     */
    public blue: number;

    /**
     * Gets or sets the green
     */
    public green: number;

    /**
     * Gets or sets the red
     */
    public red: number;

    /**
     * Gets the route for the current Color
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the CommonFileStore class.
   */
  export class CommonFileStore extends FileStore  {

    /**
     * Initializes a new instance of the CommonFileStore class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current CommonFileStore
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Constant class.
   */
  export class Constant extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Constant class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.value = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

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

    /**
     * Gets the route for the current Constant
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ContractChangeNotice class.
   */
  export class ContractChangeNotice extends ModellingAnnotationItem  {

    /**
     * Initializes a new instance of the ContractChangeNotice class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the changeProposal
     */
    public changeProposal: string;

    /**
     * Gets the route for the current ContractChangeNotice
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the CyclicRatioScale class.
   */
  export class CyclicRatioScale extends RatioScale  {

    /**
     * Initializes a new instance of the CyclicRatioScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the modulus
     */
    public modulus: string;

    /**
     * Gets the route for the current CyclicRatioScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DateParameterType class.
   */
  export class DateParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the DateParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current DateParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DateTimeParameterType class.
   */
  export class DateTimeParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the DateTimeParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current DateTimeParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DecompositionRule class.
   */
  export class DecompositionRule extends Rule  {

    /**
     * Initializes a new instance of the DecompositionRule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.containedCategory = [];
    }

    /**
     * Gets or sets the containedCategory
     */
    public containedCategory: string[];

    /**
     * Gets or sets the containingCategory
     */
    public containingCategory: string;

    /**
     * Gets or sets the maxContained
     */
    public maxContained: number;

    /**
     * Gets or sets the minContained
     */
    public minContained: number;

    /**
     * Gets the route for the current DecompositionRule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Definition class.
   */
  export class Definition extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the Definition class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.citation = [];
      this.example = [];
      this.note = [];
    }

    /**
     * Gets or sets the citation
     */
    public citation: string[];

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the example
     */
    public example: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the note
     */
    public note: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current Definition
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DerivedQuantityKind class.
   */
  export class DerivedQuantityKind extends QuantityKind  {

    /**
     * Initializes a new instance of the DerivedQuantityKind class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.quantityKindFactor = [];
    }

    /**
     * Gets or sets the quantityKindFactor
     */
    public quantityKindFactor: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current DerivedQuantityKind
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DerivedUnit class.
   */
  export class DerivedUnit extends MeasurementUnit  {

    /**
     * Initializes a new instance of the DerivedUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.unitFactor = [];
    }

    /**
     * Gets or sets the unitFactor
     */
    public unitFactor: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current DerivedUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramCanvas class.
   */
  export class DiagramCanvas extends DiagramElementContainer implements TimeStampedThingInterface {

    /**
     * Initializes a new instance of the DiagramCanvas class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets the route for the current DiagramCanvas
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramEdge class.
   */
  export class DiagramEdge extends DiagramElementThing  {

    /**
     * Initializes a new instance of the DiagramEdge class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.point = [];
    }

    /**
     * Gets or sets the point
     */
    public point: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the source
     */
    public source: string;

    /**
     * Gets or sets the target
     */
    public target: string;

    /**
     * Gets the route for the current DiagramEdge
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DiagramObject class.
   */
  export class DiagramObject extends DiagramShape  {

    /**
     * Initializes a new instance of the DiagramObject class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the documentation
     */
    public documentation: string;

    /**
     * Gets or sets the resolution
     */
    public resolution: number;

    /**
     * Gets the route for the current DiagramObject
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DomainFileStore class.
   */
  export class DomainFileStore extends FileStore  {

    /**
     * Initializes a new instance of the DomainFileStore class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isHidden
     */
    public isHidden: boolean;

    /**
     * Gets the route for the current DomainFileStore
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DomainOfExpertise class.
   */
  export class DomainOfExpertise extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the DomainOfExpertise class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current DomainOfExpertise
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the DomainOfExpertiseGroup class.
   */
  export class DomainOfExpertiseGroup extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the DomainOfExpertiseGroup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current DomainOfExpertiseGroup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ElementDefinition class.
   */
  export class ElementDefinition extends ElementBase  {

    /**
     * Initializes a new instance of the ElementDefinition class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current ElementDefinition
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ElementUsage class.
   */
  export class ElementUsage extends ElementBase implements OptionDependentThingInterface {

    /**
     * Initializes a new instance of the ElementUsage class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.excludeOption = [];
      this.parameterOverride = [];
    }

    /**
     * Gets or sets the elementDefinition
     */
    public elementDefinition: string;

    /**
     * Gets or sets the excludeOption
     */
    public excludeOption: string[];

    /**
     * Gets or sets the interfaceEnd
     */
    public interfaceEnd: InterfaceEndKind;

    /**
     * Gets or sets the parameterOverride
     */
    public parameterOverride: string[];

    /**
     * Gets the route for the current ElementUsage
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EmailAddress class.
   */
  export class EmailAddress extends Thing  {

    /**
     * Initializes a new instance of the EmailAddress class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets or sets the vcardType
     */
    public vcardType: VcardEmailAddressKind;

    /**
     * Gets the route for the current EmailAddress
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EngineeringModel class.
   */
  export class EngineeringModel extends TopContainer  {

    /**
     * Initializes a new instance of the EngineeringModel class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.book = [];
      this.commonFileStore = [];
      this.genericNote = [];
      this.iteration = [];
      this.logEntry = [];
      this.modellingAnnotation = [];
    }

    /**
     * Gets or sets the book
     */
    public book: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the commonFileStore
     */
    public commonFileStore: string[];

    /**
     * Gets or sets the engineeringModelSetup
     */
    public engineeringModelSetup: string;

    /**
     * Gets or sets the genericNote
     */
    public genericNote: string[];

    /**
     * Gets or sets the iteration
     */
    public iteration: string[];

    /**
     * Gets or sets the logEntry
     */
    public logEntry: string[];

    /**
     * Gets or sets the modellingAnnotation
     */
    public modellingAnnotation: string[];

    /**
     * Gets the route for the current EngineeringModel
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EngineeringModelDataDiscussionItem class.
   */
  export class EngineeringModelDataDiscussionItem extends DiscussionItem  {

    /**
     * Initializes a new instance of the EngineeringModelDataDiscussionItem class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets the route for the current EngineeringModelDataDiscussionItem
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EngineeringModelDataNote class.
   */
  export class EngineeringModelDataNote extends EngineeringModelDataAnnotation  {

    /**
     * Initializes a new instance of the EngineeringModelDataNote class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current EngineeringModelDataNote
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EngineeringModelSetup class.
   */
  export class EngineeringModelSetup extends DefinedThing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the EngineeringModelSetup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.activeDomain = [];
      this.iterationSetup = [];
      this.participant = [];
      this.requiredRdl = [];
    }

    /**
     * Gets or sets the activeDomain
     */
    public activeDomain: string[];

    /**
     * Gets or sets the engineeringModelIid
     */
    public engineeringModelIid: string;

    /**
     * Gets or sets the iterationSetup
     */
    public iterationSetup: string[];

    /**
     * Gets or sets the kind
     */
    public kind: EngineeringModelKind;

    /**
     * Gets or sets the participant
     */
    public participant: string[];

    /**
     * Gets or sets the requiredRdl
     */
    public requiredRdl: string[];

    /**
     * Gets or sets the sourceEngineeringModelSetupIid
     */
    public sourceEngineeringModelSetupIid: string;

    /**
     * Gets or sets the studyPhase
     */
    public studyPhase: StudyPhaseKind;

    /**
     * Gets the route for the current EngineeringModelSetup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EnumerationParameterType class.
   */
  export class EnumerationParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the EnumerationParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueDefinition = [];
    }

    /**
     * Gets or sets a value indicating whether allowMultiSelect
     */
    public allowMultiSelect: boolean;

    /**
     * Gets or sets the valueDefinition
     */
    public valueDefinition: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current EnumerationParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the EnumerationValueDefinition class.
   */
  export class EnumerationValueDefinition extends DefinedThing  {

    /**
     * Initializes a new instance of the EnumerationValueDefinition class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current EnumerationValueDefinition
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ExclusiveOrExpression class.
   */
  export class ExclusiveOrExpression extends BooleanExpression  {

    /**
     * Initializes a new instance of the ExclusiveOrExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

    /**
     * Gets the route for the current ExclusiveOrExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ExternalIdentifierMap class.
   */
  export class ExternalIdentifierMap extends Thing implements NamedThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the ExternalIdentifierMap class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets the externalFormat
     */
    public externalFormat: string;

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
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current ExternalIdentifierMap
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the File class.
   */
  export class File extends Thing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the File class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.fileRevision = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the fileRevision
     */
    public fileRevision: string[];

    /**
     * Gets or sets the lockedBy
     */
    public lockedBy: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets the route for the current File
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the FileRevision class.
   */
  export class FileRevision extends Thing implements NamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the FileRevision class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.fileType = [];
    }

    /**
     * Gets or sets the containingFolder
     */
    public containingFolder: string;

    /**
     * Gets or sets the contentHash
     */
    public contentHash: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the creator
     */
    public creator: string;

    /**
     * Gets or sets the fileType
     */
    public fileType: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * This is a derived property!
     */
    public get path(): string {
      throw new Error("FileRevision.path is a derived property");
    }

    /**
     * Gets the route for the current FileRevision
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the FileType class.
   */
  export class FileType extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the FileType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets the extension
     */
    public extension: string;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current FileType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Folder class.
   */
  export class Folder extends Thing implements NamedThingInterface, OwnedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Folder class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the containingFolder
     */
    public containingFolder: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the creator
     */
    public creator: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * This is a derived property!
     */
    public get path(): string {
      throw new Error("Folder.path is a derived property");
    }

    /**
     * Gets the route for the current Folder
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Glossary class.
   */
  export class Glossary extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Glossary class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.term = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the term
     */
    public term: string[];

    /**
     * Gets the route for the current Glossary
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Goal class.
   */
  export class Goal extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the Goal class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current Goal
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the HyperLink class.
   */
  export class HyperLink extends Thing implements AnnotationInterface {

    /**
     * Initializes a new instance of the HyperLink class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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

    /**
     * Gets or sets the uri
     */
    public uri: string;

    /**
     * Gets the route for the current HyperLink
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the IdCorrespondence class.
   */
  export class IdCorrespondence extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the IdCorrespondence class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the externalId
     */
    public externalId: string;

    /**
     * Gets or sets the internalThing
     */
    public internalThing: string;

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("IdCorrespondence.owner is a derived property");
    }

    /**
     * Gets the route for the current IdCorrespondence
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the IntervalScale class.
   */
  export class IntervalScale extends MeasurementScale  {

    /**
     * Initializes a new instance of the IntervalScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current IntervalScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Iteration class.
   */
  export class Iteration extends Thing  {

    /**
     * Initializes a new instance of the Iteration class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.actualFiniteStateList = [];
      this.diagramCanvas = [];
      this.domainFileStore = [];
      this.element = [];
      this.externalIdentifierMap = [];
      this.goal = [];
      this.option = [];
      this.possibleFiniteStateList = [];
      this.publication = [];
      this.relationship = [];
      this.requirementsSpecification = [];
      this.ruleVerificationList = [];
      this.sharedDiagramStyle = [];
      this.stakeholder = [];
      this.stakeholderValue = [];
      this.stakeholderValueMap = [];
      this.valueGroup = [];
    }

    /**
     * Gets or sets the actualFiniteStateList
     */
    public actualFiniteStateList: string[];

    /**
     * Gets or sets the defaultOption
     */
    public defaultOption: string;

    /**
     * Gets or sets the diagramCanvas
     */
    public diagramCanvas: string[];

    /**
     * Gets or sets the domainFileStore
     */
    public domainFileStore: string[];

    /**
     * Gets or sets the element
     */
    public element: string[];

    /**
     * Gets or sets the externalIdentifierMap
     */
    public externalIdentifierMap: string[];

    /**
     * Gets or sets the goal
     */
    public goal: string[];

    /**
     * Gets or sets the iterationSetup
     */
    public iterationSetup: string;

    /**
     * Gets or sets the option
     */
    public option: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the possibleFiniteStateList
     */
    public possibleFiniteStateList: string[];

    /**
     * Gets or sets the publication
     */
    public publication: string[];

    /**
     * Gets or sets the relationship
     */
    public relationship: string[];

    /**
     * Gets or sets the requirementsSpecification
     */
    public requirementsSpecification: string[];

    /**
     * Gets or sets the ruleVerificationList
     */
    public ruleVerificationList: string[];

    /**
     * Gets or sets the sharedDiagramStyle
     */
    public sharedDiagramStyle: string[];

    /**
     * Gets or sets the sourceIterationIid
     */
    public sourceIterationIid: string;

    /**
     * Gets or sets the stakeholder
     */
    public stakeholder: string[];

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets or sets the stakeholderValueMap
     */
    public stakeholderValueMap: string[];

    /**
     * Gets or sets the topElement
     */
    public topElement: string;

    /**
     * Gets or sets the valueGroup
     */
    public valueGroup: string[];

    /**
     * Gets the route for the current Iteration
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the IterationSetup class.
   */
  export class IterationSetup extends Thing implements ParticipantAffectedAccessThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the IterationSetup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the description
     */
    public description: string;

    /**
     * Gets or sets the frozenOn
     */
    public frozenOn: string;

    /**
     * Gets or sets a value indicating whether isDeleted
     */
    public isDeleted: boolean;

    /**
     * Gets or sets the iterationIid
     */
    public iterationIid: string;

    /**
     * Gets or sets the iterationNumber
     */
    public iterationNumber: number;

    /**
     * Gets or sets the sourceIterationSetup
     */
    public sourceIterationSetup: string;

    /**
     * Gets the route for the current IterationSetup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the LinearConversionUnit class.
   */
  export class LinearConversionUnit extends ConversionBasedUnit  {

    /**
     * Initializes a new instance of the LinearConversionUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current LinearConversionUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the LogarithmicScale class.
   */
  export class LogarithmicScale extends MeasurementScale  {

    /**
     * Initializes a new instance of the LogarithmicScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.referenceQuantityValue = [];
    }

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets or sets the factor
     */
    public factor: string;

    /**
     * Gets or sets the logarithmBase
     */
    public logarithmBase: LogarithmBaseKind;

    /**
     * Gets or sets the referenceQuantityKind
     */
    public referenceQuantityKind: string;

    /**
     * Gets or sets the referenceQuantityValue
     */
    public referenceQuantityValue: string[];

    /**
     * Gets the route for the current LogarithmicScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the MappingToReferenceScale class.
   */
  export class MappingToReferenceScale extends Thing  {

    /**
     * Initializes a new instance of the MappingToReferenceScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the dependentScaleValue
     */
    public dependentScaleValue: string;

    /**
     * Gets or sets the referenceScaleValue
     */
    public referenceScaleValue: string;

    /**
     * Gets the route for the current MappingToReferenceScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ModellingThingReference class.
   */
  export class ModellingThingReference extends ThingReference  {

    /**
     * Initializes a new instance of the ModellingThingReference class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ModellingThingReference
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ModelLogEntry class.
   */
  export class ModelLogEntry extends Thing implements AnnotationInterface, CategorizableThingInterface, LogEntryInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the ModelLogEntry class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.affectedItemIid = [];
      this.category = [];
    }

    /**
     * Gets or sets the affectedItemIid
     */
    public affectedItemIid: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the level
     */
    public level: LogLevelKind;

    /**
     * Gets the route for the current ModelLogEntry
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ModelReferenceDataLibrary class.
   */
  export class ModelReferenceDataLibrary extends ReferenceDataLibrary  {

    /**
     * Initializes a new instance of the ModelReferenceDataLibrary class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ModelReferenceDataLibrary
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the MultiRelationship class.
   */
  export class MultiRelationship extends Relationship  {

    /**
     * Initializes a new instance of the MultiRelationship class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedThing = [];
    }

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

    /**
     * Gets the route for the current MultiRelationship
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the MultiRelationshipRule class.
   */
  export class MultiRelationshipRule extends Rule  {

    /**
     * Initializes a new instance of the MultiRelationshipRule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.relatedCategory = [];
    }

    /**
     * Gets or sets the maxRelated
     */
    public maxRelated: number;

    /**
     * Gets or sets the minRelated
     */
    public minRelated: number;

    /**
     * Gets or sets the relatedCategory
     */
    public relatedCategory: string[];

    /**
     * Gets or sets the relationshipCategory
     */
    public relationshipCategory: string;

    /**
     * Gets the route for the current MultiRelationshipRule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the NaturalLanguage class.
   */
  export class NaturalLanguage extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the NaturalLanguage class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the nativeName
     */
    public nativeName: string;

    /**
     * Gets the route for the current NaturalLanguage
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the NestedElement class.
   */
  export class NestedElement extends Thing implements NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface, VolatileThingInterface {

    /**
     * Initializes a new instance of the NestedElement class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.elementUsage = [];
      this.nestedParameter = [];
    }

    /**
     * Gets or sets the elementUsage
     */
    public elementUsage: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets a value indicating whether isVolatile
     */
    public isVolatile: boolean;

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("NestedElement.name is a derived property");
    }

    /**
     * Gets or sets the nestedParameter
     */
    public nestedParameter: string[];

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("NestedElement.owner is a derived property");
    }

    /**
     * Gets or sets the rootElement
     */
    public rootElement: string;

    /**
     * This is a derived property!
     */
    public get shortName(): string {
      throw new Error("NestedElement.shortName is a derived property");
    }

    /**
     * Gets the route for the current NestedElement
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the NestedParameter class.
   */
  export class NestedParameter extends Thing implements OwnedThingInterface, VolatileThingInterface {

    /**
     * Initializes a new instance of the NestedParameter class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the actualState
     */
    public actualState: string;

    /**
     * Gets or sets the actualValue
     */
    public actualValue: string;

    /**
     * Gets or sets the associatedParameter
     */
    public associatedParameter: string;

    /**
     * Gets or sets the formula
     */
    public formula: string;

    /**
     * Gets or sets a value indicating whether isVolatile
     */
    public isVolatile: boolean;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * This is a derived property!
     */
    public get path(): string {
      throw new Error("NestedParameter.path is a derived property");
    }

    /**
     * Gets the route for the current NestedParameter
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the NotExpression class.
   */
  export class NotExpression extends BooleanExpression  {

    /**
     * Initializes a new instance of the NotExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the term
     */
    public term: string;

    /**
     * Gets the route for the current NotExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Option class.
   */
  export class Option extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the Option class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.nestedElement = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the nestedElement
     */
    public nestedElement: string[];

    /**
     * Gets the route for the current Option
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the OrdinalScale class.
   */
  export class OrdinalScale extends MeasurementScale  {

    /**
     * Initializes a new instance of the OrdinalScale class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether useShortNameValues
     */
    public useShortNameValues: boolean;

    /**
     * Gets the route for the current OrdinalScale
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the OrExpression class.
   */
  export class OrExpression extends BooleanExpression  {

    /**
     * Initializes a new instance of the OrExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.term = [];
    }

    /**
     * Gets or sets the term
     */
    public term: string[];

    /**
     * Gets the route for the current OrExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Organization class.
   */
  export class Organization extends Thing implements DeprecatableThingInterface, NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the Organization class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current Organization
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the OwnedStyle class.
   */
  export class OwnedStyle extends DiagrammingStyle  {

    /**
     * Initializes a new instance of the OwnedStyle class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current OwnedStyle
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Page class.
   */
  export class Page extends Thing implements CategorizableThingInterface, NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Page class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.note = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the note
     */
    public note: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current Page
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Parameter class.
   */
  export class Parameter extends ParameterOrOverrideBase  {

    /**
     * Initializes a new instance of the Parameter class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * Gets or sets a value indicating whether allowDifferentOwnerOfOverride
     */
    public allowDifferentOwnerOfOverride: boolean;

    /**
     * Gets or sets a value indicating whether expectsOverride
     */
    public expectsOverride: boolean;

    /**
     * Gets or sets the requestedBy
     */
    public requestedBy: string;

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets the route for the current Parameter
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterGroup class.
   */
  export class ParameterGroup extends Thing implements NamedThingInterface {

    /**
     * Initializes a new instance of the ParameterGroup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current ParameterGroup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterizedCategoryRule class.
   */
  export class ParameterizedCategoryRule extends Rule  {

    /**
     * Initializes a new instance of the ParameterizedCategoryRule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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

    /**
     * Gets the route for the current ParameterizedCategoryRule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterOverride class.
   */
  export class ParameterOverride extends ParameterOrOverrideBase  {

    /**
     * Initializes a new instance of the ParameterOverride class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * This is a derived property!
     */
    public get group(): string {
      throw new Error("ParameterOverride.group is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get isOptionDependent(): boolean {
      throw new Error("ParameterOverride.isOptionDependent is a derived property");
    }

    /**
     * Gets or sets the parameter
     */
    public parameter: string;

    /**
     * This is a derived property!
     */
    public get parameterType(): string {
      throw new Error("ParameterOverride.parameterType is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get scale(): string {
      throw new Error("ParameterOverride.scale is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get stateDependence(): string {
      throw new Error("ParameterOverride.stateDependence is a derived property");
    }

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets the route for the current ParameterOverride
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterOverrideValueSet class.
   */
  export class ParameterOverrideValueSet extends ParameterValueSetBase  {

    /**
     * Initializes a new instance of the ParameterOverrideValueSet class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get actualOption(): string {
      throw new Error("ParameterOverrideValueSet.actualOption is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualState(): string {
      throw new Error("ParameterOverrideValueSet.actualState is a derived property");
    }

    /**
     * Gets or sets the parameterValueSet
     */
    public parameterValueSet: string;

    /**
     * Gets the route for the current ParameterOverrideValueSet
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterSubscription class.
   */
  export class ParameterSubscription extends ParameterBase  {

    /**
     * Initializes a new instance of the ParameterSubscription class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.valueSet = [];
    }

    /**
     * This is a derived property!
     */
    public get group(): string {
      throw new Error("ParameterSubscription.group is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get isOptionDependent(): boolean {
      throw new Error("ParameterSubscription.isOptionDependent is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get parameterType(): string {
      throw new Error("ParameterSubscription.parameterType is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get scale(): string {
      throw new Error("ParameterSubscription.scale is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get stateDependence(): string {
      throw new Error("ParameterSubscription.stateDependence is a derived property");
    }

    /**
     * Gets or sets the valueSet
     */
    public valueSet: string[];

    /**
     * Gets the route for the current ParameterSubscription
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterSubscriptionValueSet class.
   */
  export class ParameterSubscriptionValueSet extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the ParameterSubscriptionValueSet class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.manual = [];
    }

    /**
     * This is a derived property!
     */
    public get actualOption(): string {
      throw new Error("ParameterSubscriptionValueSet.actualOption is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualState(): string {
      throw new Error("ParameterSubscriptionValueSet.actualState is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get actualValue(): string[] {
      throw new Error("ParameterSubscriptionValueSet.actualValue is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get computed(): string[] {
      throw new Error("ParameterSubscriptionValueSet.computed is a derived property");
    }

    /**
     * Gets or sets the manual
     */
    public manual: string[];

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("ParameterSubscriptionValueSet.owner is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get reference(): string[] {
      throw new Error("ParameterSubscriptionValueSet.reference is a derived property");
    }

    /**
     * Gets or sets the subscribedValueSet
     */
    public subscribedValueSet: string;

    /**
     * Gets or sets the valueSwitch
     */
    public valueSwitch: ParameterSwitchKind;

    /**
     * Gets the route for the current ParameterSubscriptionValueSet
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterTypeComponent class.
   */
  export class ParameterTypeComponent extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the ParameterTypeComponent class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current ParameterTypeComponent
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParameterValueSet class.
   */
  export class ParameterValueSet extends ParameterValueSetBase  {

    /**
     * Initializes a new instance of the ParameterValueSet class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current ParameterValueSet
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParametricConstraint class.
   */
  export class ParametricConstraint extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the ParametricConstraint class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("ParametricConstraint.owner is a derived property");
    }

    /**
     * Gets or sets the topExpression
     */
    public topExpression: string;

    /**
     * Gets the route for the current ParametricConstraint
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Participant class.
   */
  export class Participant extends Thing implements ParticipantAffectedAccessThingInterface {

    /**
     * Initializes a new instance of the Participant class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets a value indicating whether isActive
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
     * Gets or sets the selectedDomain
     */
    public selectedDomain: string;

    /**
     * Gets the route for the current Participant
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParticipantPermission class.
   */
  export class ParticipantPermission extends Thing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the ParticipantPermission class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the accessRight
     */
    public accessRight: ParticipantAccessRightKind;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the objectClass
     */
    public objectClass: ClassKind;

    /**
     * Gets the route for the current ParticipantPermission
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ParticipantRole class.
   */
  export class ParticipantRole extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the ParticipantRole class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.participantPermission = [];
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the participantPermission
     */
    public participantPermission: string[];

    /**
     * Gets the route for the current ParticipantRole
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Person class.
   */
  export class Person extends Thing implements DeprecatableThingInterface, NamedThingInterface, ShortNamedThingInterface {

    /**
     * Initializes a new instance of the Person class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.emailAddress = [];
      this.telephoneNumber = [];
      this.userPreference = [];
    }

    /**
     * Gets or sets the defaultDomain
     */
    public defaultDomain: string;

    /**
     * Gets or sets the defaultEmailAddress
     */
    public defaultEmailAddress: string;

    /**
     * Gets or sets the defaultTelephoneNumber
     */
    public defaultTelephoneNumber: string;

    /**
     * Gets or sets the emailAddress
     */
    public emailAddress: string[];

    /**
     * Gets or sets the givenName
     */
    public givenName: string;

    /**
     * Gets or sets a value indicating whether isActive
     */
    public isActive: boolean;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("Person.name is a derived property");
    }

    /**
     * Gets or sets the organization
     */
    public organization: string;

    /**
     * Gets or sets the organizationalUnit
     */
    public organizationalUnit: string;

    /**
     * Gets or sets the password
     */
    public password: string;

    /**
     * Gets or sets the role
     */
    public role: string;

    /**
     * Gets or sets the salt
     */
    public salt: string;

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the surname
     */
    public surname: string;

    /**
     * Gets or sets the telephoneNumber
     */
    public telephoneNumber: string[];

    /**
     * Gets or sets the userPreference
     */
    public userPreference: string[];

    /**
     * Gets the route for the current Person
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the PersonPermission class.
   */
  export class PersonPermission extends Thing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the PersonPermission class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the accessRight
     */
    public accessRight: PersonAccessRightKind;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the objectClass
     */
    public objectClass: ClassKind;

    /**
     * Gets the route for the current PersonPermission
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the PersonRole class.
   */
  export class PersonRole extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the PersonRole class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.personPermission = [];
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the personPermission
     */
    public personPermission: string[];

    /**
     * Gets the route for the current PersonRole
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Point class.
   */
  export class Point extends DiagramThingBase  {

    /**
     * Initializes a new instance of the Point class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current Point
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the PossibleFiniteState class.
   */
  export class PossibleFiniteState extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the PossibleFiniteState class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("PossibleFiniteState.owner is a derived property");
    }

    /**
     * Gets the route for the current PossibleFiniteState
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the PossibleFiniteStateList class.
   */
  export class PossibleFiniteStateList extends DefinedThing implements CategorizableThingInterface, OwnedThingInterface {

    /**
     * Initializes a new instance of the PossibleFiniteStateList class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.possibleState = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the defaultState
     */
    public defaultState: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the possibleState
     */
    public possibleState: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current PossibleFiniteStateList
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the PrefixedUnit class.
   */
  export class PrefixedUnit extends ConversionBasedUnit  {

    /**
     * Initializes a new instance of the PrefixedUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get conversionFactor(): string {
      throw new Error("PrefixedUnit.conversionFactor is a derived property");
    }

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("PrefixedUnit.name is a derived property");
    }

    /**
     * Gets or sets the prefix
     */
    public prefix: string;

    /**
     * This is a derived property!
     */
    public get shortName(): string {
      throw new Error("PrefixedUnit.shortName is a derived property");
    }

    /**
     * Gets the route for the current PrefixedUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Publication class.
   */
  export class Publication extends Thing implements TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Publication class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.domain = [];
      this.publishedParameter = [];
    }

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the publishedParameter
     */
    public publishedParameter: string[];

    /**
     * Gets the route for the current Publication
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the QuantityKindFactor class.
   */
  export class QuantityKindFactor extends Thing  {

    /**
     * Initializes a new instance of the QuantityKindFactor class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets or sets the quantityKind
     */
    public quantityKind: string;

    /**
     * Gets the route for the current QuantityKindFactor
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ReferencerRule class.
   */
  export class ReferencerRule extends Rule  {

    /**
     * Initializes a new instance of the ReferencerRule class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.referencedCategory = [];
    }

    /**
     * Gets or sets the maxReferenced
     */
    public maxReferenced: number;

    /**
     * Gets or sets the minReferenced
     */
    public minReferenced: number;

    /**
     * Gets or sets the referencedCategory
     */
    public referencedCategory: string[];

    /**
     * Gets or sets the referencingCategory
     */
    public referencingCategory: string;

    /**
     * Gets the route for the current ReferencerRule
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ReferenceSource class.
   */
  export class ReferenceSource extends DefinedThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the ReferenceSource class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the language
     */
    public language: string;

    /**
     * Gets or sets the publicationYear
     */
    public publicationYear: number;

    /**
     * Gets or sets the publishedIn
     */
    public publishedIn: string;

    /**
     * Gets or sets the publisher
     */
    public publisher: string;

    /**
     * Gets or sets the versionDate
     */
    public versionDate: string;

    /**
     * Gets or sets the versionIdentifier
     */
    public versionIdentifier: string;

    /**
     * Gets the route for the current ReferenceSource
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RelationalExpression class.
   */
  export class RelationalExpression extends BooleanExpression  {

    /**
     * Initializes a new instance of the RelationalExpression class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets or sets the scale
     */
    public scale: string;

    /**
     * Gets or sets the value
     */
    public value: string[];

    /**
     * Gets the route for the current RelationalExpression
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RelationshipParameterValue class.
   */
  export class RelationshipParameterValue extends ParameterValue  {

    /**
     * Initializes a new instance of the RelationshipParameterValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RelationshipParameterValue
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequestForDeviation class.
   */
  export class RequestForDeviation extends ContractDeviation  {

    /**
     * Initializes a new instance of the RequestForDeviation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RequestForDeviation
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequestForWaiver class.
   */
  export class RequestForWaiver extends ContractDeviation  {

    /**
     * Initializes a new instance of the RequestForWaiver class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RequestForWaiver
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Requirement class.
   */
  export class Requirement extends SimpleParameterizableThing implements CategorizableThingInterface, DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Requirement class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.parametricConstraint = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the group
     */
    public group: string;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the parametricConstraint
     */
    public parametricConstraint: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current Requirement
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequirementsContainerParameterValue class.
   */
  export class RequirementsContainerParameterValue extends ParameterValue  {

    /**
     * Initializes a new instance of the RequirementsContainerParameterValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RequirementsContainerParameterValue
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequirementsGroup class.
   */
  export class RequirementsGroup extends RequirementsContainer  {

    /**
     * Initializes a new instance of the RequirementsGroup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current RequirementsGroup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RequirementsSpecification class.
   */
  export class RequirementsSpecification extends RequirementsContainer implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the RequirementsSpecification class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.requirement = [];
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets or sets the requirement
     */
    public requirement: string[];

    /**
     * Gets the route for the current RequirementsSpecification
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ReviewItemDiscrepancy class.
   */
  export class ReviewItemDiscrepancy extends ModellingAnnotationItem  {

    /**
     * Initializes a new instance of the ReviewItemDiscrepancy class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.solution = [];
    }

    /**
     * Gets or sets the solution
     */
    public solution: string[];

    /**
     * Gets the route for the current ReviewItemDiscrepancy
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RuleVerificationList class.
   */
  export class RuleVerificationList extends DefinedThing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the RuleVerificationList class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.ruleVerification = [];
    }

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the ruleVerification
     */
    public ruleVerification: Cdp4Type.OrderedItem[];

    /**
     * Gets the route for the current RuleVerificationList
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the RuleViolation class.
   */
  export class RuleViolation extends Thing  {

    /**
     * Initializes a new instance of the RuleViolation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current RuleViolation
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ScaleReferenceQuantityValue class.
   */
  export class ScaleReferenceQuantityValue extends Thing  {

    /**
     * Initializes a new instance of the ScaleReferenceQuantityValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current ScaleReferenceQuantityValue
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ScaleValueDefinition class.
   */
  export class ScaleValueDefinition extends DefinedThing  {

    /**
     * Initializes a new instance of the ScaleValueDefinition class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current ScaleValueDefinition
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Section class.
   */
  export class Section extends Thing implements CategorizableThingInterface, NamedThingInterface, OwnedThingInterface, ShortNamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the Section class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.page = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the owner
     */
    public owner: string;

    /**
     * Gets or sets the page
     */
    public page: Cdp4Type.OrderedItem[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets the route for the current Section
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SharedStyle class.
   */
  export class SharedStyle extends DiagrammingStyle  {

    /**
     * Initializes a new instance of the SharedStyle class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current SharedStyle
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SimpleParameterValue class.
   */
  export class SimpleParameterValue extends Thing implements OwnedThingInterface {

    /**
     * Initializes a new instance of the SimpleParameterValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.value = [];
    }

    /**
     * This is a derived property!
     */
    public get owner(): string {
      throw new Error("SimpleParameterValue.owner is a derived property");
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

    /**
     * Gets the route for the current SimpleParameterValue
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SimpleQuantityKind class.
   */
  export class SimpleQuantityKind extends QuantityKind  {

    /**
     * Initializes a new instance of the SimpleQuantityKind class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current SimpleQuantityKind
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SimpleUnit class.
   */
  export class SimpleUnit extends MeasurementUnit  {

    /**
     * Initializes a new instance of the SimpleUnit class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current SimpleUnit
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteDirectory class.
   */
  export class SiteDirectory extends TopContainer implements NamedThingInterface, ShortNamedThingInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the SiteDirectory class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.annotation = [];
      this.domain = [];
      this.domainGroup = [];
      this.logEntry = [];
      this.model = [];
      this.naturalLanguage = [];
      this.organization = [];
      this.participantRole = [];
      this.person = [];
      this.personRole = [];
      this.siteReferenceDataLibrary = [];
    }

    /**
     * Gets or sets the annotation
     */
    public annotation: string[];

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the defaultParticipantRole
     */
    public defaultParticipantRole: string;

    /**
     * Gets or sets the defaultPersonRole
     */
    public defaultPersonRole: string;

    /**
     * Gets or sets the domain
     */
    public domain: string[];

    /**
     * Gets or sets the domainGroup
     */
    public domainGroup: string[];

    /**
     * Gets or sets the logEntry
     */
    public logEntry: string[];

    /**
     * Gets or sets the model
     */
    public model: string[];

    /**
     * Gets or sets the name
     */
    public name: string;

    /**
     * Gets or sets the naturalLanguage
     */
    public naturalLanguage: string[];

    /**
     * Gets or sets the organization
     */
    public organization: string[];

    /**
     * Gets or sets the participantRole
     */
    public participantRole: string[];

    /**
     * Gets or sets the person
     */
    public person: string[];

    /**
     * Gets or sets the personRole
     */
    public personRole: string[];

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the siteReferenceDataLibrary
     */
    public siteReferenceDataLibrary: string[];

    /**
     * Gets the route for the current SiteDirectory
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteDirectoryDataAnnotation class.
   */
  export class SiteDirectoryDataAnnotation extends GenericAnnotation  {

    /**
     * Initializes a new instance of the SiteDirectoryDataAnnotation class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.discussion = [];
      this.relatedThing = [];
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the discussion
     */
    public discussion: string[];

    /**
     * Gets or sets the primaryAnnotatedThing
     */
    public primaryAnnotatedThing: string;

    /**
     * Gets or sets the relatedThing
     */
    public relatedThing: string[];

    /**
     * Gets the route for the current SiteDirectoryDataAnnotation
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteDirectoryDataDiscussionItem class.
   */
  export class SiteDirectoryDataDiscussionItem extends DiscussionItem  {

    /**
     * Initializes a new instance of the SiteDirectoryDataDiscussionItem class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets the route for the current SiteDirectoryDataDiscussionItem
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteDirectoryThingReference class.
   */
  export class SiteDirectoryThingReference extends ThingReference  {

    /**
     * Initializes a new instance of the SiteDirectoryThingReference class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current SiteDirectoryThingReference
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteLogEntry class.
   */
  export class SiteLogEntry extends Thing implements AnnotationInterface, CategorizableThingInterface, LogEntryInterface, TimeStampedThingInterface {

    /**
     * Initializes a new instance of the SiteLogEntry class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.affectedItemIid = [];
      this.category = [];
    }

    /**
     * Gets or sets the affectedItemIid
     */
    public affectedItemIid: string[];

    /**
     * Gets or sets the author
     */
    public author: string;

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the content
     */
    public content: string;

    /**
     * Gets or sets the createdOn
     */
    public createdOn: string;

    /**
     * Gets or sets the languageCode
     */
    public languageCode: string;

    /**
     * Gets or sets the level
     */
    public level: LogLevelKind;

    /**
     * Gets the route for the current SiteLogEntry
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SiteReferenceDataLibrary class.
   */
  export class SiteReferenceDataLibrary extends ReferenceDataLibrary implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the SiteReferenceDataLibrary class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current SiteReferenceDataLibrary
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Solution class.
   */
  export class Solution extends GenericAnnotation implements OwnedThingInterface {

    /**
     * Initializes a new instance of the Solution class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current Solution
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the SpecializedQuantityKind class.
   */
  export class SpecializedQuantityKind extends QuantityKind  {

    /**
     * Initializes a new instance of the SpecializedQuantityKind class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the general
     */
    public general: string;

    /**
     * Gets the route for the current SpecializedQuantityKind
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Stakeholder class.
   */
  export class Stakeholder extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the Stakeholder class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.stakeholderValue = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets the route for the current Stakeholder
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the StakeholderValue class.
   */
  export class StakeholderValue extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the StakeholderValue class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current StakeholderValue
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the StakeHolderValueMap class.
   */
  export class StakeHolderValueMap extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the StakeHolderValueMap class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.category = [];
      this.goal = [];
      this.requirement = [];
      this.settings = [];
      this.stakeholderValue = [];
      this.valueGroup = [];
    }

    /**
     * Gets or sets the category
     */
    public category: string[];

    /**
     * Gets or sets the goal
     */
    public goal: string[];

    /**
     * Gets or sets the requirement
     */
    public requirement: string[];

    /**
     * Gets or sets the settings
     */
    public settings: string[];

    /**
     * Gets or sets the stakeholderValue
     */
    public stakeholderValue: string[];

    /**
     * Gets or sets the valueGroup
     */
    public valueGroup: string[];

    /**
     * Gets the route for the current StakeHolderValueMap
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the StakeHolderValueMapSettings class.
   */
  export class StakeHolderValueMapSettings extends Thing  {

    /**
     * Initializes a new instance of the StakeHolderValueMapSettings class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the goalToValueGroupRelationship
     */
    public goalToValueGroupRelationship: string;

    /**
     * Gets or sets the stakeholderValueToRequirementRelationship
     */
    public stakeholderValueToRequirementRelationship: string;

    /**
     * Gets or sets the valueGroupToStakeholderValueRelationship
     */
    public valueGroupToStakeholderValueRelationship: string;

    /**
     * Gets the route for the current StakeHolderValueMapSettings
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the TelephoneNumber class.
   */
  export class TelephoneNumber extends Thing  {

    /**
     * Initializes a new instance of the TelephoneNumber class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
      this.vcardType = [];
    }

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets or sets the vcardType
     */
    public vcardType: VcardTelephoneNumberKind[];

    /**
     * Gets the route for the current TelephoneNumber
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the Term class.
   */
  export class Term extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the Term class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current Term
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the TextParameterType class.
   */
  export class TextParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the TextParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current TextParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the TextualNote class.
   */
  export class TextualNote extends Note  {

    /**
     * Initializes a new instance of the TextualNote class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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

    /**
     * Gets the route for the current TextualNote
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the TimeOfDayParameterType class.
   */
  export class TimeOfDayParameterType extends ScalarParameterType  {

    /**
     * Initializes a new instance of the TimeOfDayParameterType class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets the route for the current TimeOfDayParameterType
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the UnitFactor class.
   */
  export class UnitFactor extends Thing  {

    /**
     * Initializes a new instance of the UnitFactor class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the exponent
     */
    public exponent: string;

    /**
     * Gets or sets the unit
     */
    public unit: string;

    /**
     * Gets the route for the current UnitFactor
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the UnitPrefix class.
   */
  export class UnitPrefix extends DefinedThing implements DeprecatableThingInterface {

    /**
     * Initializes a new instance of the UnitPrefix class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the conversionFactor
     */
    public conversionFactor: string;

    /**
     * Gets or sets a value indicating whether isDeprecated
     */
    public isDeprecated: boolean;

    /**
     * Gets the route for the current UnitPrefix
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the UserPreference class.
   */
  export class UserPreference extends Thing implements ShortNamedThingInterface {

    /**
     * Initializes a new instance of the UserPreference class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * Gets or sets the shortName
     */
    public shortName: string;

    /**
     * Gets or sets the value
     */
    public value: string;

    /**
     * Gets the route for the current UserPreference
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the UserRuleVerification class.
   */
  export class UserRuleVerification extends RuleVerification  {

    /**
     * Initializes a new instance of the UserRuleVerification class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
     */
    constructor(iid: string, rev: number, isOriginal: boolean) {
      super(iid, rev, isOriginal);
    }

    /**
     * This is a derived property!
     */
    public get name(): string {
      throw new Error("UserRuleVerification.name is a derived property");
    }

    /**
     * Gets or sets the rule
     */
    public rule: string;

    /**
     * Gets the route for the current UserRuleVerification
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

  /**
   * A TypeScript DTO representation of the ValueGroup class.
   */
  export class ValueGroup extends DefinedThing implements CategorizableThingInterface {

    /**
     * Initializes a new instance of the ValueGroup class.
     * @iid The unique identifier.
     * @rev The revision number.
     * @isOriginal The original thing or not.
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
     * Gets the route for the current ValueGroup
     */
    public get route(): string {
      return this.computedRoute();
    }
  }

}
