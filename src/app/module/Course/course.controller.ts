import { RequestHandler } from "express";
import { courseServices } from "./course.service";
import sendResponse from "../../utils/sendResponse";

const createCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await courseServices.createCourse(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Course created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleCourse: RequestHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    const result = await courseServices.getSingleCourse(courseId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Course and Reviews retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const courseController = {
  createCourse,
  getSingleCourse,
};
