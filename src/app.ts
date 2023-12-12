import express, { Application, Request, Response } from "express";
import cors from "cors";
import { categoryRoutes } from "./app/module/Category/category.route";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my project 🙂");
});

export default app;
