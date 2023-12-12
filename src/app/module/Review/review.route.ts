import { Router } from "express";
import { reviewController } from "./review.controller";

const route = Router();

route.post("/", reviewController.createReview);

export const reviewRoutes = route;
