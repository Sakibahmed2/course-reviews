import { Router } from "express";
import { categoryController } from "./category.controller";

const route = Router();

route.post("/", categoryController.createCategory);

route.get("/", categoryController.getAllCategories);

export const categoryRoutes = route;
