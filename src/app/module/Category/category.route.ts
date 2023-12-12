import { Router } from "express";
import { categoryController } from "./category.controller";

const route = Router();

route.post("/", categoryController.createCategory);

export const categoryRoutes = route;
