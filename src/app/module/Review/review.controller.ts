import { RequestHandler } from "express";
import { reviewServices } from "./review.service";
import sendResponse from "../../utils/sendResponse";

const createReview: RequestHandler = async (req, res, next) => {
  try {
    const result = await reviewServices.crateReview(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Review created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const reviewController = {
  createReview,
};
