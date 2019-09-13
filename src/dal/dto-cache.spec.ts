/**
 * @file    DtoCache.tests.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import {Dto} from "../dto/autogen/dto.generated";
import {DtoCache} from "./autogen-cache/dto-cache.generated";
import {ThingUpdateService} from "./thing-update.service";

describe("cache Tests", () => {

  it("cache should work",
    () => {
      const iterationId = "a49abaf8-d550-44b1-b32b-aaaaaaaaaaaa";
      const bpt1 = new Dto.BooleanParameterType("a49abaf8-d550-44b1-b32b-aa4b358f5d73", 0, true);

      const bpt3 = new Dto.BooleanParameterType("b49abaf8-d550-44b1-b32b-aa4b358f5d73", 0, true);

      const dpt1 = new Dto.DateParameterType("c49abaf8-d550-44b1-b32b-aa4b358f5d73", 0, true);

      const parameter = new Dto.Parameter("a49abaf8-d550-44b1-b32b-bbbbbbbbbbbb", 0, true);
      parameter.iterationContainerId = iterationId;

      const cache = new DtoCache(new ThingUpdateService());
      cache.synchronize([bpt1, bpt3, dpt1]);
      cache.synchronize([parameter]);

      expect(cache.retrieve<Dto.BooleanParameterType>(Dto.ClassKind.BooleanParameterType, null).length).toBe(2);
      expect(cache.retrieve<Dto.Parameter>(Dto.ClassKind.Parameter, iterationId).length).toBe(1);
    }
  );

  it("cache should not return parameter if wrong iteration id provided",
    () => {
      const iterationId = "a49abaf8-d550-44b1-b32b-aaaaaaaaaaaa";
      const otherId = "a49bbaf8-d550-44b1-b32b-aaaaaaaaaaaa";

      const parameter = new Dto.Parameter("a49abaf8-d550-44b1-b32b-bbbbbbbbbbbb", 0, true);
      parameter.iterationContainerId = iterationId;

      const cache = new DtoCache(new ThingUpdateService());
      cache.synchronize([parameter]);

      const result = cache.retrieve<Dto.Parameter>(Dto.ClassKind.Parameter, otherId);
      expect(result.length).toBe(0);
    }
  );

  it("cache should handle move and remove correctly",
    () => {
      const iterationId = "a49abaf8-d550-44b1-b32b-aaaaaaaaaaaa";

      const ed1 = new Dto.ElementDefinition("a49acaf8-d550-44b1-b32b-bbbbbcbbbbbb", 0, true);
      const parameter1 = new Dto.Parameter("a49abaf8-d550-44b1-b32b-bbbbbbbbbbbb", 0, true);
      const parameter2 = new Dto.Parameter("249abaf8-d550-44b1-b32b-bbbbbbbbbbbb", 0, true);
      parameter1.iterationContainerId = iterationId;
      parameter2.iterationContainerId = iterationId;
      ed1.iterationContainerId = iterationId;
      ed1.parameter.push(parameter1.iid);
      ed1.parameter.push(parameter2.iid);

      const cache = new DtoCache(new ThingUpdateService());
      cache.synchronize([ed1, parameter1, parameter2]);

      const ed2 = new Dto.ElementDefinition("b49acaf8-d550-44b1-b32b-bbbbbcbbbbbb", 0, true);
      ed2.iterationContainerId = iterationId;
      ed2.parameter.push(parameter1.iid);

      const updateEd2 = new Dto.ElementDefinition("b49acaf8-d550-44b1-b32b-bbbbbcbbbbbb", 1, true);
      updateEd2.iterationContainerId = iterationId;

      cache.synchronize([updateEd2, ed2]);

      const result = cache.retrieve<Dto.Parameter>(Dto.ClassKind.Parameter, iterationId);
      expect(result.length).toBe(2);
      expect(result[0].iid).toBe(parameter1.iid);
      expect(result[1].iid).toBe(parameter2.iid);

      const result2 = cache.retrieve<Dto.ParameterBase>(Dto.ClassKind.ParameterBase, iterationId);
      expect(result2.length).toBe(2);
      expect(result2[0].iid).toBe(parameter1.iid);
      expect(result2[1].iid).toBe(parameter2.iid);
    }
  );

  it("retrieve should throw with undefined iteration id",
    () => {
      const cache = new DtoCache(new ThingUpdateService());
      expect(function () {
        cache.retrieve<Dto.BooleanParameterType>(Dto.ClassKind.BooleanParameterType, undefined);
      }).toThrow(new Error("The iteration cannot be undefined. it shall be null or be a real id."));
    }
  );

  it("retrieve site directory should work",
    () => {
      const cache = new DtoCache(new ThingUpdateService());
      const sitedir = new Dto.SiteDirectory("b49acaf8-d550-44b1-b32b-bbbbbcbbbbbb", 0, true);
      cache.synchronize([sitedir]);
      expect(cache.retrieve<Dto.SiteDirectory>(Dto.ClassKind.SiteDirectory, null)[0]).toBeDefined();
    }
  );
});
