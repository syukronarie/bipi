import cors from "cors";
import express from "express";
import httpStatus from "http-status";

import config from "./config/config";
import { successHandler, errorHandler } from "./config/morgan";
import ApiError from "./utils/ApiError";
// eslint-disable-next-line prettier/prettier
import {
  errorConverter,
  errorHandler as midErrorHandler,
} from "./middlewares/error";

const app = express();

if (config.env !== "test") {
  app.use(successHandler);
  app.use(errorHandler);
}

// enable cors
app.use(cors());
app.options("*", cors());

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  if (req.originalUrl !== "/graphql") {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
  }
  next();
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(midErrorHandler);

export default app;
