import express, { Application, Request, Response } from "express";
import cors from "cors";
import { categoryRoutes } from "./app/module/Category/category.route";
import notFound from "./app/middlewares/notFound";
import { courseRoutes } from "./app/module/Course/course.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { reviewRoutes } from "./app/module/Review/review.route";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoutes);

app.use("/api/course", courseRoutes);

app.use("/api/reviews", reviewRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my project 🙂");
});

//not found error
app.use(notFound);

//global error
app.use(globalErrorHandler);

export default app;
