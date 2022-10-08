import httpStatus from "http-status";
import config from "../config/config";
import logger from "../config/logger";
import ApiError from "../utils/ApiError";

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, _next) => {
  let { statusCode, message } = err;
  if (process.env.NODE_ENV === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }
  res.locals.errorMessage = err.message;
  const response = {
    success: false,
    code: statusCode,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };
  if (config.env === "development") {
    logger.error(err);
  }
  res.status(statusCode).send(response);
};

export { errorConverter, errorHandler };