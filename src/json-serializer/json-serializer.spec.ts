/**
 * @file    json-serializer.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2017  RHEA System S.A.
 */

import {Cdp4JsonSerializer} from "./autogen/thing-serializers.generated";
import {Dto} from "../dto/autogen/dto.generated";

declare let jsonSerializerData : any;

describe("serializer Tests", () => {

  it("Deserializer should work",
    () => {
      const result = Cdp4JsonSerializer.deserialize(jsonSerializerData);
      const valueset = <Dto.ParameterSubscriptionValueSet>result[0];
      const psl = <Dto.PossibleFiniteStateList>result[1];

      expect(result.length).toBe(2);

      expect(valueset.iid).toBe("a49abaf8-d550-44b1-b32b-aa4b358f5d73");
      expect(valueset.revisionNumber).toBe(2679);
      expect(valueset.valueSwitch).toBe(Dto.ParameterSwitchKind.MANUAL);
      expect(valueset.subscribedValueSet).toBe("049abaf8-d550-44b1-b32b-c74b308f5d73");
      expect(valueset.manual[0]).toBe("123");
      expect(valueset.manual[1]).toBe("456");
      expect(valueset.manual[2]).toBe("789");
      expect(valueset.modifiedOn).toBe("2016-02-02");

      expect(psl.hyperLink[0]).toBe("049abaf8-d550-44b1-b32b-c74b333f5d73");
      expect(psl.definition.length).toBe(0);
      expect(psl.possibleState[0].k).toBe(123);
      expect(psl.possibleState[0].v).toBe("049abaf8-9850-44b1-b32b-c74b358f5d73");
      expect(psl.possibleState[1].k).toBe(456);
      expect(psl.possibleState[1].v).toBe("04978af8-d550-44b1-b32b-c74b358f5d73");
    }
  );

  it("Serializer should work",
    () => {
      const result = Cdp4JsonSerializer.deserialize(jsonSerializerData);

      const serializerResult = Cdp4JsonSerializer.serialize(result);
      const serializerResultObj = JSON.parse(serializerResult);
      expect(serializerResultObj).toEqual(jsonSerializerData);
    }
  );

  it("Serializer should throw error",
    () => {
      const array = ["abc"];
      expect(function () {
        Cdp4JsonSerializer.serialize(array);
      }).toThrow(new Error("The type string not supported yet"));
    }
  );
});
