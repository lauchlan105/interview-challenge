import { meterIntervalDataFixture } from '../__fixtures__/meterIntervalData.fixture';
import { SupplyPointDataResponse } from '../schema';
import { Intervals } from './intervals';

describe("sumIntervalData", () => {
  it("sums block values for a provided day and usage category", () => {
    const mockData: SupplyPointDataResponse = {
      data: {
        supplyPoint: {
          __typename: "SupplyPoint",
          sprn: "1234567890",
          meterIntervalData: meterIntervalDataFixture,
        },
      },
    };

    const result = Intervals.sumIntervalData(mockData);

    expect(result).toBe(102.82300000000001);
  });
});
