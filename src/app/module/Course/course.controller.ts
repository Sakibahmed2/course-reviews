import { Request, Response } from "express";
import { courseServices } from "./course.service";
import sendResponse from "../../utils/sendResponse";

const createCourse = async (req: Request, res: Response) => {
  try {
    const result = await courseServices.createCourse(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Course created successfully",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const getSingleCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    const result = await courseServices.getSingleCourse(courseId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Course and Reviews retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

export const courseController = {
  createCourse,
  getSingleCourse,
};
