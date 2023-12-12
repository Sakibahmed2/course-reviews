/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { categoryServices } from "./cotegory.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.createCategory(req.body);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Category created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Category create failed",
      error: err,
    });
  }
};

export const categoryController = {
  createCategory,
};
