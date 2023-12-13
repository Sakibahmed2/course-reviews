import { Router } from "express";
import { reviewController } from "./review.controller";
import validationRequest from "../../middlewares/validationRequest";
import { TReviewValidation } from "./review.validation";

const route = Router();

route.post(
  "/",
  validationRequest(TReviewValidation),
  reviewController.createReview
);

export const reviewRoutes = route;
