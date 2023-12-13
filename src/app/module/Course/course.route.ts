import { Router } from "express";
import { courseController } from "./course.controller";
import validationRequest from "../../middlewares/validationRequest";
import { createCourseValidationSchema } from "./course.validation";

const route = Router();

route.post(
  "/",
  validationRequest(createCourseValidationSchema),
  courseController.createCourse
);

route.get("/best", courseController.getBestCourse);

export const courseRoutes = route;
