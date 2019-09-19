/**
 * @file    QueryAttributes.tests.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {QueryAttributes, ExtentQueryAttribute} from "./query-attributes";

describe("QueryAttributes Tests", () => {

  it("The query attributes should return the correct partial string",
    () => {

      let attributes = new QueryAttributes();
      attributes.extent = ExtentQueryAttribute.Deep;

      expect(attributes.toString()).toBe("?extent=deep");
    });

  it("The query attributes should return the correct full string",
    () => {

      let attributes = new QueryAttributes();
      attributes.extent = ExtentQueryAttribute.Shallow;
      attributes.includeAllContainers = true;
      attributes.includeFileData = false;
      attributes.includeReferenceData = true;
      attributes.revisionNumber = 4;

      expect(attributes.toString()).toBe("?extent=shallow&includeReferenceData=true&includeAllContainers=true&includeFileData=false&revisionNumber=4");
    });
});
