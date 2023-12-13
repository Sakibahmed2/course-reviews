import { Router } from "express";
import { courseController } from "./course.controller";

const route = Router();

route.get("/", courseController.getAllCourses);

route.get("/:courseId/reviews", courseController.getSingleCourse);

route.put("/:courseId", courseController.updateCourse);

export const coursesRoutes = route;
