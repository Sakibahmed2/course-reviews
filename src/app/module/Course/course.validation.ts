import { z } from "zod";

const tagSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean().default(false),
});

const detailsSchema = z.object({
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  description: z.string().optional(),
});

export const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(tagSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.number().optional(),
    details: detailsSchema,
  }),
});
