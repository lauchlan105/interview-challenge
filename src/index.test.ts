import { sumIntervalDataByCategory } from ".";
import { meterIntervalDataFixture } from "./__fixtures__/meterIntervalData.fixture";
import { SupplyPointDataResponse } from "./schema";

describe("sumIntervalDataByCategory", () => {
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

    const result = sumIntervalDataByCategory(
      mockData,
      "2025-01-19",
      "INTERVAL",
    );
    expect(result).toBe(30);
  });
});
