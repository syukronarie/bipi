"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config/config"));

var _morgan = require("./config/morgan");

var _error = require("./middlewares/error");

var _ErrorMessages = _interopRequireDefault(require("./utils/ErrorMessages"));

var app = (0, _express["default"])();

if (_config["default"].env !== "test") {
  app.use(_morgan.successHandler);
  app.use(_morgan.errorHandler);
} // enable cors


app.use((0, _cors["default"])());
app.options("*", (0, _cors["default"])()); // send back a 404 error for any unknown api request

app.use(function (req, res, next) {
  if (req.originalUrl !== "/graphql") {
    next(new Error(_ErrorMessages["default"].NOT_FOUND));
  }

  next();
}); // convert error to Errow, if needed

app.use(_error.errorConverter); // handle error

app.use(_error.errorHandler);
var _default = app;
exports["default"] = _default;