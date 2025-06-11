import { SupplyPointDataResponse } from "../schema";

export const meterIntervalDataFixture: SupplyPointDataResponse["data"]["supplyPoint"]["meterIntervalData"] =
  {
    edges: [
      {
        node: {
          __typename: "IntervalBlock",
          id: "1",
          startDateTime: "2025-01-19T00:00:00.000Z",
          endDateTime: "2025-01-19T00:30:00.000Z",
          block: "10",
          registerId: "E1",
          unitOfMeasurement: "KWH",
          usageCategory: "INTERVAL",
          flagType: "ACTUAL",
        },
      },
      {
        node: {
          __typename: "IntervalBlock",
          id: "2",
          startDateTime: "2025-01-19T00:30:00.000Z",
          endDateTime: "2025-01-19T01:00:00.000Z",
          block: "20",
          registerId: "E1",
          unitOfMeasurement: "KWH",
          usageCategory: "INTERVAL",
          flagType: "ACTUAL",
        },
      },
      {
        node: {
          __typename: "IntervalBlock",
          id: "2",
          startDateTime: "2025-01-19T03:00:00.000Z",
          endDateTime: "2025-01-19T03:30:00.000Z",
          block: "0",
          registerId: "E1",
          unitOfMeasurement: "KWH",
          usageCategory: "INTERVAL",
          flagType: "ACTUAL",
        },
      },
      {
        node: {
          __typename: "IntervalBlock",
          id: "6203849384:A4842744:B1:1737255600000",
          startDateTime: "2025-01-19T03:00:00.000Z",
          endDateTime: "2025-01-19T03:30:00.000Z",
          block: "0.823",
          registerId: "B1",
          unitOfMeasurement: "KWH",
          usageCategory: "SOLAR",
          flagType: "ACTUAL",
        },
      },

      {
        node: {
          __typename: "IntervalBlock",
          id: "3",
          startDateTime: "2025-01-20T00:00:00.000Z",
          endDateTime: "2025-01-20T00:30:00.000Z",
          block: "30",
          registerId: "E1",
          unitOfMeasurement: "KWH",
          usageCategory: "INTERVAL",
          flagType: "ACTUAL",
        },
      },
    ],
  };
