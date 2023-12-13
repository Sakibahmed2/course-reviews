import mongoose from "mongoose";
import { TErrorSources, TGenericError } from "../interface/error";

const handleCastError = (err: mongoose.Error.CastError): TGenericError => {
  const errorDetails: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  console.log(errorDetails);

  return {
    statusCode,
    message: "Invalid ID",
    errorMessage: `${err?.value} is not a valid ID!`,
    errorDetails,
  };
};

export default handleCastError;
