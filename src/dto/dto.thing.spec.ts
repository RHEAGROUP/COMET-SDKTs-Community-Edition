/**
 * @file    dto.thing.tests.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import {Dto} from "./autogen/dto.generated";

describe("Dto Tests", () => {

  it("Site directory route should work",
    () => {
      let category = new Dto.Category("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let srdl = new Dto.SiteReferenceDataLibrary("aaa1dc01-5766-4bf8-9d92-2a0920798d43", 2, true);
      let sitedir = new Dto.SiteDirectory("bba1dc01-5766-4bf8-9d92-2a0920798d43", 10, true);

      category.addContainer(srdl.classKind, srdl.iid);
      category.addContainer(sitedir.classKind, sitedir.iid);

      let expectedRoute =
        "/SiteDirectory/bba1dc01-5766-4bf8-9d92-2a0920798d43/siteReferenceDataLibrary/aaa1dc01-5766-4bf8-9d92-2a0920798d43/definedCategory/d9a1dc01-5766-4bf8-9d92-2a0920798d43";
      expect(category.route).toBe(expectedRoute);
    });

  it("Engineering Model route should work",
    () => {
      let subscription = new Dto.ParameterSubscription("d9a1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let override = new Dto.ParameterOverride("bba1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let usage = new Dto.ElementUsage("cca1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let definition = new Dto.ElementDefinition("dda1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let iteration = new Dto.Iteration("eea1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);
      let model = new Dto.EngineeringModel("ffa1dc01-5766-4bf8-9d92-2a0920798d43", 34, true);

      subscription.addContainer(override.classKind, override.iid);
      subscription.addContainer(usage.classKind, usage.iid);
      subscription.addContainer(definition.classKind, definition.iid);
      subscription.addContainer(iteration.classKind, iteration.iid);
      subscription.addContainer(model.classKind, model.iid);

      expect(subscription.route).toBe("/EngineeringModel/" + model.iid + "/iteration/" + iteration.iid + "/element/" + definition.iid + "/containedElement/" + usage.iid + "/parameterOverride/" + override.iid + "/parameterSubscription/" + subscription.iid);
    });
});

