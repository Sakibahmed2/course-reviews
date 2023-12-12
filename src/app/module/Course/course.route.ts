import { Router } from "express";
import { courseController } from "./course.controller";

const route = Router();

route.post("/", courseController.createCourse);

export const courseRoutes = route;
