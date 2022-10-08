import cors from "cors";
import express from "express";

import config from "./config/config";
import { successHandler, errorHandler } from "./config/morgan";
import {
  errorConverter,
  errorHandler as midErrorHandler,
} from "./middlewares/error";
import ErrorMessage from "./utils/ErrorMessages";

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
    next(new Error(ErrorMessage.NOT_FOUND));
  }
  next();
});

// convert error to Errow, if needed
app.use(errorConverter);

// handle error
app.use(midErrorHandler);

export default app;
