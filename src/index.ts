import {
  SupplyPointDataResponseSchema,
  SupplyPointDataResponse,
} from "./schema";
import { FetchService } from "./services/fetch";
import { Validator } from "./services/validator";

import "dotenv/config";

const getParsedData = async (): Promise<SupplyPointDataResponse> => {
  const response = await FetchService.fetchData(
    process.env.API_ENDPOINT || "",
    {
      "X-SILO-KEY": process.env.X_SILO_KEY || "",
    },
  );

  return Validator.validate<SupplyPointDataResponse>(
    response,
    SupplyPointDataResponseSchema,
  );
};

export const sumIntervalDataByCategory = (
  data: SupplyPointDataResponse,
  day: string, // YYYY-MM-DD format
  category: "INTERVAL" | "SOLAR",
): number => {
  const targetDay = new Date(day).toISOString().slice(0, 10); // YYYY-MM-DD

  return data.data.supplyPoint.meterIntervalData.edges
    .filter((edge) => {
      const { usageCategory, startDateTime } = edge.node;
      const blockDate = new Date(startDateTime).toISOString().slice(0, 10);
      return usageCategory === category && blockDate === targetDay;
    })
    .reduce((sum, edge) => sum + parseFloat(edge.node.block), 0);
};

const main = async () => {
  const data = await getParsedData();
  const day = "2025-01-19"; // Example
  const total = sumIntervalDataByCategory(data, day, "INTERVAL");

  return total;
};

main().catch((error) => console.error("An error occurred:", error));
