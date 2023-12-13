/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericError } from "../interface/error";

const handleDuplicateError = (err: any): TGenericError => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorDetails: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "This data is already exist !",
    errorMessage: `${errorDetails.map((message) => message.message)}`,
    errorDetails,
  };
};

export default handleDuplicateError;
