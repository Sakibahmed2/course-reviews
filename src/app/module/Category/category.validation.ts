import { z } from "zod";

export const TCategoryValidation = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name cannot be empty." })
      .refine((value) => typeof value === "string", {
        message: "Invalid name. Must be a string.",
      }),
  }),
});
