import { ZodType } from "zod";

export class Validator {
  static validate<T>(input: unknown, schema: ZodType<T>): T {
    const result = schema.safeParse(input);

    if (result.success) {
      return result.data;
    } else {
      throw new Error(
        `Validation failed: ${JSON.stringify(result.error, null, 2)}`,
      );
    }
  }
}
