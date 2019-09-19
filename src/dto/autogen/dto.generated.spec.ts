/**
 * @file		dto.generated.spec.ts
 * @company		RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 * @summary		This is an auto-generated test file. Any manual changes on this file will be overwritten!
 */

import { Dto } from "./dto.generated";

namespace DtoTests
{
  describe("AutoGenDTO Tests", () => {


    it("should initialize ParticipantPermission", () => {
      var ds = new Dto.ParticipantPermission("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParticipantPermission);
    });

    it("should initialize SiteDirectory", () => {
      var ds = new Dto.SiteDirectory("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteDirectory);
    });

    it("should initialize ParticipantRole", () => {
      var ds = new Dto.ParticipantRole("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParticipantRole);
    });

    it("should initialize Person", () => {
      var ds = new Dto.Person("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Person);
    });

    it("should initialize Organization", () => {
      var ds = new Dto.Organization("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Organization);
    });

    it("should initialize EngineeringModelSetup", () => {
      var ds = new Dto.EngineeringModelSetup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EngineeringModelSetup);
    });

    it("should initialize Participant", () => {
      var ds = new Dto.Participant("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Participant);
    });

    it("should initialize ArrayParameterType", () => {
      var ds = new Dto.ArrayParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ArrayParameterType);
    });

    it("should initialize CyclicRatioScale", () => {
      var ds = new Dto.CyclicRatioScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.CyclicRatioScale);
    });

    it("should initialize EnumerationParameterType", () => {
      var ds = new Dto.EnumerationParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EnumerationParameterType);
    });

    it("should initialize Glossary", () => {
      var ds = new Dto.Glossary("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Glossary);
    });

    it("should initialize OrdinalScale", () => {
      var ds = new Dto.OrdinalScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.OrdinalScale);
    });

    it("should initialize ReferencerRule", () => {
      var ds = new Dto.ReferencerRule("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ReferencerRule);
    });

    it("should initialize BooleanParameterType", () => {
      var ds = new Dto.BooleanParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.BooleanParameterType);
    });

    it("should initialize ScaleReferenceQuantityValue", () => {
      var ds = new Dto.ScaleReferenceQuantityValue("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ScaleReferenceQuantityValue);
    });

    it("should initialize MappingToReferenceScale", () => {
      var ds = new Dto.MappingToReferenceScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.MappingToReferenceScale);
    });

    it("should initialize RatioScale", () => {
      var ds = new Dto.RatioScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RatioScale);
    });

    it("should initialize CompoundParameterType", () => {
      var ds = new Dto.CompoundParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.CompoundParameterType);
    });

    it("should initialize DateParameterType", () => {
      var ds = new Dto.DateParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DateParameterType);
    });

    it("should initialize LinearConversionUnit", () => {
      var ds = new Dto.LinearConversionUnit("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.LinearConversionUnit);
    });

    it("should initialize Term", () => {
      var ds = new Dto.Term("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Term);
    });

    it("should initialize FileType", () => {
      var ds = new Dto.FileType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.FileType);
    });

    it("should initialize DerivedUnit", () => {
      var ds = new Dto.DerivedUnit("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DerivedUnit);
    });

    it("should initialize BinaryRelationshipRule", () => {
      var ds = new Dto.BinaryRelationshipRule("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.BinaryRelationshipRule);
    });

    it("should initialize QuantityKindFactor", () => {
      var ds = new Dto.QuantityKindFactor("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.QuantityKindFactor);
    });

    it("should initialize TextParameterType", () => {
      var ds = new Dto.TextParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.TextParameterType);
    });

    it("should initialize UnitFactor", () => {
      var ds = new Dto.UnitFactor("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.UnitFactor);
    });

    it("should initialize IntervalScale", () => {
      var ds = new Dto.IntervalScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.IntervalScale);
    });

    it("should initialize SpecializedQuantityKind", () => {
      var ds = new Dto.SpecializedQuantityKind("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SpecializedQuantityKind);
    });

    it("should initialize SimpleUnit", () => {
      var ds = new Dto.SimpleUnit("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SimpleUnit);
    });

    it("should initialize MultiRelationshipRule", () => {
      var ds = new Dto.MultiRelationshipRule("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.MultiRelationshipRule);
    });

    it("should initialize DomainOfExpertise", () => {
      var ds = new Dto.DomainOfExpertise("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DomainOfExpertise);
    });

    it("should initialize SimpleQuantityKind", () => {
      var ds = new Dto.SimpleQuantityKind("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SimpleQuantityKind);
    });

    it("should initialize PrefixedUnit", () => {
      var ds = new Dto.PrefixedUnit("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.PrefixedUnit);
    });

    it("should initialize DateTimeParameterType", () => {
      var ds = new Dto.DateTimeParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DateTimeParameterType);
    });

    it("should initialize ScaleValueDefinition", () => {
      var ds = new Dto.ScaleValueDefinition("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ScaleValueDefinition);
    });

    it("should initialize ParameterTypeComponent", () => {
      var ds = new Dto.ParameterTypeComponent("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterTypeComponent);
    });

    it("should initialize TimeOfDayParameterType", () => {
      var ds = new Dto.TimeOfDayParameterType("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.TimeOfDayParameterType);
    });

    it("should initialize DecompositionRule", () => {
      var ds = new Dto.DecompositionRule("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DecompositionRule);
    });

    it("should initialize Category", () => {
      var ds = new Dto.Category("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Category);
    });

    it("should initialize DerivedQuantityKind", () => {
      var ds = new Dto.DerivedQuantityKind("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DerivedQuantityKind);
    });

    it("should initialize LogarithmicScale", () => {
      var ds = new Dto.LogarithmicScale("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.LogarithmicScale);
    });

    it("should initialize UnitPrefix", () => {
      var ds = new Dto.UnitPrefix("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.UnitPrefix);
    });

    it("should initialize ParameterizedCategoryRule", () => {
      var ds = new Dto.ParameterizedCategoryRule("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterizedCategoryRule);
    });

    it("should initialize EnumerationValueDefinition", () => {
      var ds = new Dto.EnumerationValueDefinition("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EnumerationValueDefinition);
    });

    it("should initialize PersonPermission", () => {
      var ds = new Dto.PersonPermission("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.PersonPermission);
    });

    it("should initialize SiteReferenceDataLibrary", () => {
      var ds = new Dto.SiteReferenceDataLibrary("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteReferenceDataLibrary);
    });

    it("should initialize ModelReferenceDataLibrary", () => {
      var ds = new Dto.ModelReferenceDataLibrary("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ModelReferenceDataLibrary);
    });

    it("should initialize PersonRole", () => {
      var ds = new Dto.PersonRole("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.PersonRole);
    });

    it("should initialize SiteLogEntry", () => {
      var ds = new Dto.SiteLogEntry("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteLogEntry);
    });

    it("should initialize DomainOfExpertiseGroup", () => {
      var ds = new Dto.DomainOfExpertiseGroup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DomainOfExpertiseGroup);
    });

    it("should initialize IterationSetup", () => {
      var ds = new Dto.IterationSetup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.IterationSetup);
    });

    it("should initialize TelephoneNumber", () => {
      var ds = new Dto.TelephoneNumber("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.TelephoneNumber);
    });

    it("should initialize EmailAddress", () => {
      var ds = new Dto.EmailAddress("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EmailAddress);
    });

    it("should initialize ReferenceSource", () => {
      var ds = new Dto.ReferenceSource("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ReferenceSource);
    });

    it("should initialize Constant", () => {
      var ds = new Dto.Constant("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Constant);
    });

    it("should initialize UserPreference", () => {
      var ds = new Dto.UserPreference("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.UserPreference);
    });

    it("should initialize NaturalLanguage", () => {
      var ds = new Dto.NaturalLanguage("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.NaturalLanguage);
    });

    it("should initialize HyperLink", () => {
      var ds = new Dto.HyperLink("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.HyperLink);
    });

    it("should initialize Definition", () => {
      var ds = new Dto.Definition("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Definition);
    });

    it("should initialize Alias", () => {
      var ds = new Dto.Alias("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Alias);
    });

    it("should initialize Citation", () => {
      var ds = new Dto.Citation("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Citation);
    });

    it("should initialize PossibleFiniteState", () => {
      var ds = new Dto.PossibleFiniteState("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.PossibleFiniteState);
    });

    it("should initialize Parameter", () => {
      var ds = new Dto.Parameter("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Parameter);
    });

    it("should initialize option", () => {
      var ds = new Dto.Option("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Option);
    });

    it("should initialize ParameterSubscription", () => {
      var ds = new Dto.ParameterSubscription("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterSubscription);
    });

    it("should initialize ParameterGroup", () => {
      var ds = new Dto.ParameterGroup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterGroup);
    });

    it("should initialize Publication", () => {
      var ds = new Dto.Publication("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Publication);
    });

    it("should initialize PossibleFiniteStateList", () => {
      var ds = new Dto.PossibleFiniteStateList("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.PossibleFiniteStateList);
    });

    it("should initialize File", () => {
      var ds = new Dto.File("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.File);
    });

    it("should initialize EngineeringModel", () => {
      var ds = new Dto.EngineeringModel("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EngineeringModel);
    });

    it("should initialize ParameterValueSet", () => {
      var ds = new Dto.ParameterValueSet("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterValueSet);
    });

    it("should initialize ElementDefinition", () => {
      var ds = new Dto.ElementDefinition("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ElementDefinition);
    });

    it("should initialize ElementUsage", () => {
      var ds = new Dto.ElementUsage("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ElementUsage);
    });

    it("should initialize ParametricConstraint", () => {
      var ds = new Dto.ParametricConstraint("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParametricConstraint);
    });

    it("should initialize Requirement", () => {
      var ds = new Dto.Requirement("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Requirement);
    });

    it("should initialize RequirementsSpecification", () => {
      var ds = new Dto.RequirementsSpecification("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RequirementsSpecification);
    });

    it("should initialize RequirementsGroup", () => {
      var ds = new Dto.RequirementsGroup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RequirementsGroup);
    });

    it("should initialize ExternalIdentifierMap", () => {
      var ds = new Dto.ExternalIdentifierMap("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ExternalIdentifierMap);
    });

    it("should initialize NestedElement", () => {
      var ds = new Dto.NestedElement("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.NestedElement);
    });

    it("should initialize Folder", () => {
      var ds = new Dto.Folder("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Folder);
    });

    it("should initialize IdCorrespondence", () => {
      var ds = new Dto.IdCorrespondence("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.IdCorrespondence);
    });

    it("should initialize CommonFileStore", () => {
      var ds = new Dto.CommonFileStore("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.CommonFileStore);
    });

    it("should initialize DomainFileStore", () => {
      var ds = new Dto.DomainFileStore("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DomainFileStore);
    });

    it("should initialize MultiRelationship", () => {
      var ds = new Dto.MultiRelationship("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.MultiRelationship);
    });

    it("should initialize BinaryRelationship", () => {
      var ds = new Dto.BinaryRelationship("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.BinaryRelationship);
    });

    it("should initialize SimpleParameterValue", () => {
      var ds = new Dto.SimpleParameterValue("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SimpleParameterValue);
    });

    it("should initialize ParameterOverride", () => {
      var ds = new Dto.ParameterOverride("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterOverride);
    });

    it("should initialize ParameterSubscriptionValueSet", () => {
      var ds = new Dto.ParameterSubscriptionValueSet("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterSubscriptionValueSet);
    });

    it("should initialize ActualFiniteState", () => {
      var ds = new Dto.ActualFiniteState("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ActualFiniteState);
    });

    it("should initialize ModelLogEntry", () => {
      var ds = new Dto.ModelLogEntry("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ModelLogEntry);
    });

    it("should initialize Iteration", () => {
      var ds = new Dto.Iteration("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Iteration);
    });

    it("should initialize ActualFiniteStateList", () => {
      var ds = new Dto.ActualFiniteStateList("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ActualFiniteStateList);
    });

    it("should initialize OrExpression", () => {
      var ds = new Dto.OrExpression("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.OrExpression);
    });

    it("should initialize NotExpression", () => {
      var ds = new Dto.NotExpression("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.NotExpression);
    });

    it("should initialize AndExpression", () => {
      var ds = new Dto.AndExpression("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.AndExpression);
    });

    it("should initialize ExclusiveOrExpression", () => {
      var ds = new Dto.ExclusiveOrExpression("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ExclusiveOrExpression);
    });

    it("should initialize RelationalExpression", () => {
      var ds = new Dto.RelationalExpression("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RelationalExpression);
    });

    it("should initialize ParameterOverrideValueSet", () => {
      var ds = new Dto.ParameterOverrideValueSet("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ParameterOverrideValueSet);
    });

    it("should initialize NestedParameter", () => {
      var ds = new Dto.NestedParameter("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.NestedParameter);
    });

    it("should initialize FileRevision", () => {
      var ds = new Dto.FileRevision("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.FileRevision);
    });

    it("should initialize RuleVerificationList", () => {
      var ds = new Dto.RuleVerificationList("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RuleVerificationList);
    });

    it("should initialize UserRuleVerification", () => {
      var ds = new Dto.UserRuleVerification("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.UserRuleVerification);
    });

    it("should initialize BuiltInRuleVerification", () => {
      var ds = new Dto.BuiltInRuleVerification("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.BuiltInRuleVerification);
    });

    it("should initialize RuleViolation", () => {
      var ds = new Dto.RuleViolation("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RuleViolation);
    });

    it("should initialize Goal", () => {
      var ds = new Dto.Goal("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Goal);
    });

    it("should initialize Stakeholder", () => {
      var ds = new Dto.Stakeholder("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Stakeholder);
    });

    it("should initialize ValueGroup", () => {
      var ds = new Dto.ValueGroup("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ValueGroup);
    });

    it("should initialize StakeholderValue", () => {
      var ds = new Dto.StakeholderValue("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.StakeholderValue);
    });

    it("should initialize StakeHolderValueMap", () => {
      var ds = new Dto.StakeHolderValueMap("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.StakeHolderValueMap);
    });

    it("should initialize StakeHolderValueMapSettings", () => {
      var ds = new Dto.StakeHolderValueMapSettings("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.StakeHolderValueMapSettings);
    });

    it("should initialize RequirementsContainerParameterValue", () => {
      var ds = new Dto.RequirementsContainerParameterValue("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RequirementsContainerParameterValue);
    });

    it("should initialize RelationshipParameterValue", () => {
      var ds = new Dto.RelationshipParameterValue("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RelationshipParameterValue);
    });

    it("should initialize book", () => {
      var ds = new Dto.Book("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Book);
    });

    it("should initialize section", () => {
      var ds = new Dto.Section("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Section);
    });

    it("should initialize page", () => {
      var ds = new Dto.Page("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Page);
    });

    it("should initialize BinaryNote", () => {
      var ds = new Dto.BinaryNote("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.BinaryNote);
    });

    it("should initialize TextualNote", () => {
      var ds = new Dto.TextualNote("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.TextualNote);
    });

    it("should initialize RequestForWaiver", () => {
      var ds = new Dto.RequestForWaiver("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RequestForWaiver);
    });

    it("should initialize RequestForDeviation", () => {
      var ds = new Dto.RequestForDeviation("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.RequestForDeviation);
    });

    it("should initialize ChangeRequest", () => {
      var ds = new Dto.ChangeRequest("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ChangeRequest);
    });

    it("should initialize ReviewItemDiscrepancy", () => {
      var ds = new Dto.ReviewItemDiscrepancy("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ReviewItemDiscrepancy);
    });

    it("should initialize ActionItem", () => {
      var ds = new Dto.ActionItem("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ActionItem);
    });

    it("should initialize ModellingThingReference", () => {
      var ds = new Dto.ModellingThingReference("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ModellingThingReference);
    });

    it("should initialize EngineeringModelDataDiscussionItem", () => {
      var ds = new Dto.EngineeringModelDataDiscussionItem("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EngineeringModelDataDiscussionItem);
    });

    it("should initialize Solution", () => {
      var ds = new Dto.Solution("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Solution);
    });

    it("should initialize SiteDirectoryThingReference", () => {
      var ds = new Dto.SiteDirectoryThingReference("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteDirectoryThingReference);
    });

    it("should initialize SiteDirectoryDataAnnotation", () => {
      var ds = new Dto.SiteDirectoryDataAnnotation("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteDirectoryDataAnnotation);
    });

    it("should initialize ChangeProposal", () => {
      var ds = new Dto.ChangeProposal("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ChangeProposal);
    });

    it("should initialize ContractChangeNotice", () => {
      var ds = new Dto.ContractChangeNotice("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.ContractChangeNotice);
    });

    it("should initialize Approval", () => {
      var ds = new Dto.Approval("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Approval);
    });

    it("should initialize SiteDirectoryDataDiscussionItem", () => {
      var ds = new Dto.SiteDirectoryDataDiscussionItem("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SiteDirectoryDataDiscussionItem);
    });

    it("should initialize EngineeringModelDataNote", () => {
      var ds = new Dto.EngineeringModelDataNote("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.EngineeringModelDataNote);
    });

    it("should initialize Point", () => {
      var ds = new Dto.Point("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Point);
    });

    it("should initialize Bounds", () => {
      var ds = new Dto.Bounds("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Bounds);
    });

    it("should initialize Color", () => {
      var ds = new Dto.Color("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.Color);
    });

    it("should initialize DiagramEdge", () => {
      var ds = new Dto.DiagramEdge("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DiagramEdge);
    });

    it("should initialize DiagramObject", () => {
      var ds = new Dto.DiagramObject("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DiagramObject);
    });

    it("should initialize OwnedStyle", () => {
      var ds = new Dto.OwnedStyle("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.OwnedStyle);
    });

    it("should initialize SharedStyle", () => {
      var ds = new Dto.SharedStyle("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.SharedStyle);
    });

    it("should initialize DiagramCanvas", () => {
      var ds = new Dto.DiagramCanvas("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      expect(ds.iid).toBe("d9a1dc01-5766-4bf8-9d92-2a0920798d43");
      expect(ds.revisionNumber).toBe(34);
      expect(ds.classKind).toBe(Dto.ClassKind.DiagramCanvas);
    });
  });
}
