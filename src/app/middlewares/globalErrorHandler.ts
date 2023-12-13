/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import handleZodError from "../Error/zodError";
import { ZodError } from "zod";
import handleCastError from "../Error/castError";
import handleDuplicateError from "../Error/duplicateError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessage = "Something went wrong!";

  if (err instanceof ZodError) {
    const customZodError = handleZodError(err);
    statusCode = customZodError?.statusCode;
    message = customZodError?.message;
    errorMessage = customZodError.errorMessage;
  } else if (err?.name === "CastError") {
    const customCastError = handleCastError(err);
    statusCode = customCastError?.statusCode;
    message = customCastError?.message;
    errorMessage = customCastError?.errorMessage;
  } else if (err?.code === 11000) {
    const customDuplicateError = handleDuplicateError(err);
    statusCode = customDuplicateError?.statusCode;
    message = customDuplicateError?.message;
    errorMessage = customDuplicateError?.errorMessage;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: err,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
