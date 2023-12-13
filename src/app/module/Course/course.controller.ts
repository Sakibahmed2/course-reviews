import { RequestHandler } from "express";
import { courseServices } from "./course.service";
import sendResponse from "../../utils/sendResponse";

const createCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await courseServices.createCourseIntoDB(req.body);

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

const getAllCourses: RequestHandler = async (req, res, next) => {
  try {
    const result = await courseServices.getAllCoursesFromDB(req.query);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Courses retrieved successfully",
      meta: result.meta,
      data: result.result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleCourse: RequestHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    const result = await courseServices.getSingleCourseFromDB(courseId);

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

const updateCourse: RequestHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    const result = await courseServices.updateCourseIntoDB(courseId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Course updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBestCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await courseServices.getBestCourseFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Best course retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const courseController = {
  createCourse,
  getSingleCourse,
  getAllCourses,
  updateCourse,
  getBestCourse,
};
