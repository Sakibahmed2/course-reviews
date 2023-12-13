import { ZodError, ZodIssue } from "zod";
import { TErrorSources, TGenericError } from "../interface/error";

const handleZodError = (err: ZodError): TGenericError => {
  const errorDetails: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  const errorMessage = errorDetails
    .map((error) => `${error.path} is ${error.message}`)
    .join(". ");

  return {
    statusCode,
    message: "Validation error",
    errorMessage,
    errorDetails,
  };
};

export default handleZodError;
