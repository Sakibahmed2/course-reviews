/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { categoryServices } from "./cotegory.service";
import sendResponse from "../../utils/sendResponse";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.createCategory(req.body);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (err: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Category created failed",
      data: err,
    });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.getAllCategories();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Categories retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      message: "Category retrieve failed",
      data: err,
    });
  }
};

export const categoryController = {
  createCategory,
  getAllCategories,
};
