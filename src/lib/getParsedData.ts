import { SupplyPointDataResponse, SupplyPointDataResponseSchema } from '../schema';
import { FetchService } from '../services/fetch';
import { Validator } from '../services/validator';

export const getParsedData = async (): Promise<SupplyPointDataResponse> => {
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
