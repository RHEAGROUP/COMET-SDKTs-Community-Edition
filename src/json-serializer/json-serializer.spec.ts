/**
 * @file    json-serializer.spec.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2019  RHEA System S.A.
 */

import {Cdp4JsonSerializer} from './autogen/thing-serializers.generated';
import {Dto} from '../dto/autogen/dto.generated';
import FileRevision = Dto.FileRevision;
import {Cdp4Type} from '../types/ordered-item';
import OrderedItem = Cdp4Type.OrderedItem;

declare let jsonSerializerData: any;

describe('serializer Tests', () => {

  it('Deserializer should work',
    () => {
      const result = Cdp4JsonSerializer.deserialize(jsonSerializerData);
      const valueset = <Dto.ParameterSubscriptionValueSet>result[0];
      const psl = <Dto.PossibleFiniteStateList>result[1];

      expect(result.length).toBe(2);

      expect(valueset.iid).toBe('a49abaf8-d550-44b1-b32b-aa4b358f5d73');
      expect(valueset.revisionNumber).toBe(2679);
      expect(valueset.valueSwitch).toBe(Dto.ParameterSwitchKind.MANUAL);
      expect(valueset.subscribedValueSet).toBe('049abaf8-d550-44b1-b32b-c74b308f5d73');
      expect(valueset.manual[0]).toBe('123');
      expect(valueset.manual[1]).toBe('456');
      expect(valueset.manual[2]).toBe('789');
      expect(valueset.modifiedOn).toBe('2016-02-02');

      expect(psl.hyperLink[0]).toBe('049abaf8-d550-44b1-b32b-c74b333f5d73');
      expect(psl.definition.length).toBe(0);
      expect(psl.possibleState[0].k).toBe(123);
      expect(psl.possibleState[0].v).toBe('049abaf8-9850-44b1-b32b-c74b358f5d73');
      expect(psl.possibleState[1].k).toBe(456);
      expect(psl.possibleState[1].v).toBe('04978af8-d550-44b1-b32b-c74b358f5d73');
    }
  );

  it('Serializer should work',
    () => {
      const result = Cdp4JsonSerializer.deserialize(jsonSerializerData);
      const serializerResult = Cdp4JsonSerializer.serialize(result);
      const serializerResultObj = JSON.parse(serializerResult);
      expect(serializerResultObj).toEqual(jsonSerializerData);
    }
  );

  it('Serializer should throw error',
    () => {
      const array = ['abc'];
      expect(function () {
        Cdp4JsonSerializer.serialize(array);
      }).toThrow(new Error('The type string not supported yet'));
    }
  );

  it('Serializer performs stable serialization of properties',
    () => {
    const expectedResult = "[{\"classKind\":\"FileRevision\",\"contentHash\":\"F73747371CFD9473C19A0A7F99BCAB008474C4CA\",\"creator\":\"284334dd-e8e5-42d6-bc8a-715c507a7f02\",\"excludedDomain\":[],\"excludedPerson\":[\"b16894e4-acb5-4e81-a118-16c00eb86d8f\",\"b18894e4-acb5-4e81-a118-16c00eb86d8f\",\"b19894e4-acb5-4e81-a118-16c00eb86d8f\"],\"fileType\":[{\"k\":4,\"v\":\"b16894e4-acb5-4e81-a118-16c00eb86d8f\"},{\"k\":8,\"v\":\"b19894e4-acb5-4e81-a118-16c00eb86d8f\"},{\"k\":12,\"v\":\"b18894e4-acb5-4e81-a118-16c00eb86d8f\"}],\"iid\":\"e8de903b-9c38-416a-83f4-90b6cf7b7a41\",\"name\":\"testfile\",\"revisionNumber\":0}]";
      const fileRevision = new FileRevision('e8de903b-9c38-416a-83f4-90b6cf7b7a41', 0, true);
      fileRevision.name = 'testfile';
      fileRevision.contentHash = 'F73747371CFD9473C19A0A7F99BCAB008474C4CA';
      
      const fileType1 = new OrderedItem();
      fileType1.k = 8;
      fileType1.v = 'b19894e4-acb5-4e81-a118-16c00eb86d8f';

      const fileType2 = new OrderedItem();
      fileType2.k = 12;
      fileType2.v = 'b18894e4-acb5-4e81-a118-16c00eb86d8f';

      const fileType3 = new OrderedItem();
      fileType3.k = 4;
      fileType3.v = 'b16894e4-acb5-4e81-a118-16c00eb86d8f';
      
      fileRevision.fileType.push(fileType1);
      fileRevision.fileType.push(fileType2);
      fileRevision.fileType.push(fileType3);
      
      fileRevision.creator = '284334dd-e8e5-42d6-bc8a-715c507a7f02';
      
      fileRevision.excludedPerson.push('b18894e4-acb5-4e81-a118-16c00eb86d8f');
      fileRevision.excludedPerson.push('b19894e4-acb5-4e81-a118-16c00eb86d8f');
      fileRevision.excludedPerson.push('b16894e4-acb5-4e81-a118-16c00eb86d8f');

      console.log(Cdp4JsonSerializer.serialize(Array.of(fileRevision)));

      expect(Cdp4JsonSerializer.serialize(Array.of(fileRevision))).toBe(expectedResult);
    }
  );

  it('ValueArray with special characters is serialized and deserialized without errors',
    () => {
      const jsonString = `{"widget": {
                "debug": "on",
                "window": {
                    "title": "Sample Konfabulator Widget",
                    "name": "main_window",
                    "width": 500,
                    "height": 500
                },
                "image": { 
                    "src": "Images/Sun.png",
                    "name": "sun1",
                    "hOffset": 250,
                    "vOffset": 250,
                    "alignment": "center"
                },
                "text": {
                    "data": "Click Here",
                    "size": 36,
                    "style": "bold",
                    "name": "text1",
                    "hOffset": 250,
                    "vOffset": 100,
                    "alignment": "center",
                    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
                }
            }}`;
      const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
            <bookstore>
                <book category="cooking">
                    <title lang="en">Everyday food</title>
                    <author>Some great cook</author>
                    <year>2005</year>
                    <price>30.00</price>
                    <data><![CDATA[Within this Character Data block I can
                        use double dashes as much as I want (along with <, &, ', and ")
                        *and* %MyParamEntity; will be expanded to the text
                        "Has been expanded" ... however, I can't use
                        the CEND sequence.If I need to use CEND I must escape one of the
                        brackets or the greater-than sign using concatenated CDATA sections.
                        ]]></data>
                </book>
                <book category="children">
                    <title lang="en">Harry the child</title>
                    <author>Some child author</author>
                    <year>2005</year>
                    <price>29.99</price>
                </book>
                <book category="web">
                    <title lang="en">Learning XML</title>
                    <author>Some XML expert</author>
                    <year>2003</year>
                    <price>39.95</price>
                </book>
            </bookstore>`;

      const testStrings: string[] = [
        'value with trailing spaces  ',
        'value with trailing space ',
        ' value with leading spaces',
        '  value with leading space',
        '\t\t\tvalue with leading and trailing tabs \t',
        '\nvalue with leading and trailing linebreaks \r',
        '=2*(2+2)',
        '=2*\n(2+2)',
        '=2*\r(2+2)',
        '=2*\r\n(2+2)',
        '=2*\n\r(2+2)',
        '= 2 * \n ( 2 + 2 )',
        '=2*\b(2+2)',
        '=2*\f(2+2)',
        '=2*\t(2+2)',
        'Ar54WbBu + yhw - R:G!d)C!X_H % Vy ? V',
        'qm+L/{hp,qU[F\nnSyFymmZ\n+F(G/pP8@',
        'JSfJzH!U5:*wcnzT+{a5-L&+Xaq[g4',
        'EfRKJ[*A%uiM9MJ_h-z?9X(KYJQ/xL',
        'B_Dw+Tw.7g,.36]7(j8(k3/hxX,K_y',
        'qKt_C}@).D!ik.4W48ESR}w*VGvaub',
        '33CDr2NPZ[fJQ]p?aXT2L{giUUm}g#',
        'mpb-!ump7S{D)]Z9B@S([FXMRSq/9S',
        'D,VeZQRnV/}?}*qxMeX}N7*%R]!Tf/',
        'L$X7@P,JhcYM,-e4Z5,!ft.UbC[Y{n',
        'QWuAr.P$RUCf(NiV{7}tcwnia:.Fnp',
        'L%%t?cdpa?g#-PE4w6=[yU72Cgxz:f',
        ',GCeVX=$6R,(JJW[mLd4uF@{,Yr%NL',
        'i?5,/.G%D,M3im?8:,+ju}(CMh_E77',
        '}8Bn)rtS4BGTWThmT,=nu,q{[H?):9',
        'ScVmbHjSB[HS$8A*C{awPvvp{%@5Xr',
        'wy6bDVDuim}YLhB24=[y6!4vpM2pTw',
        'f:][.LfcN#(gH=Dq$6Lcp7TWQP7LH!',
        '!&.v8L44$ep69u+W-_5jq?DV@fi($H',
        '?_uB5Z(U$B6,cVPMPJv%q}d[+2PAMZ',
        '[_*q5d$U{qE7}r_7$fdf$h5yBFpPG+',
        jsonString,
        xmlString
      ];

      for (const testString of testStrings) {
        console.log('ValueArray with special characters: ' + testString);
        const valueArray: string[] = [testString];
        const json = Cdp4JsonSerializer.toJsonValueArray(valueArray);
        const result = Cdp4JsonSerializer.parseValueArray(json);

        expect(valueArray).toEqual(result);

        const resultJson = Cdp4JsonSerializer.toJsonValueArray(result);

        expect(json).toEqual(resultJson);
      }
    }
  );
});
