import { Types } from "mongoose";
import { z } from "zod";

export const TReviewValidation = z.object({
  body: z.object({
    courseId: z.string().refine((value) => Types.ObjectId.isValid(value), {
      message: "Invalid courseId. Must be a valid ObjectId.",
    }),
    rating: z
      .number()
      .min(1, { message: "Rating must be at least 1." })
      .max(5, { message: "Rating cannot exceed 5." }),
    review: z.string().min(1, { message: "Review cannot be empty." }),
  }),
});
