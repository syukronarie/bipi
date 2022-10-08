import httpStatus from "http-status";
import config from "../config/config";
import logger from "../config/logger";

const errorConverter = (err, req, res, next) => {
  next(err);
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
