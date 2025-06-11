import { z } from "zod";

export const IntervalBlockSchema = z.object({
  __typename: z.literal("IntervalBlock"),
  id: z.string(),
  startDateTime: z.string(),
  endDateTime: z.string(),
  block: z.string(), // or z.string().regex(/^\d+(\.\d+)?$/) to ensure numeric string
  registerId: z.string(),
  unitOfMeasurement: z.literal("KWH"),
  usageCategory: z.enum(["INTERVAL", "SOLAR"]),
  flagType: z.literal("ACTUAL"),
});

export const SupplyPointDataResponseSchema = z.object({
  data: z.object({
    supplyPoint: z.object({
      __typename: z.literal("SupplyPoint"),
      sprn: z.string(),
      meterIntervalData: z.object({
        edges: z.array(
          z.object({
            node: IntervalBlockSchema,
          }),
        ),
      }),
    }),
  }),
});

export type SupplyPointDataResponse = z.infer<
  typeof SupplyPointDataResponseSchema
>;
