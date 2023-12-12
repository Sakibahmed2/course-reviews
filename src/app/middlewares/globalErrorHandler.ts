/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import handleZodError from "../Error/zodError";
import { ZodError } from "zod";

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
