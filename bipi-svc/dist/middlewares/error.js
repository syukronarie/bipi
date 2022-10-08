"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = exports.errorConverter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _config = _interopRequireDefault(require("../config/config"));

var _logger = _interopRequireDefault(require("../config/logger"));

var _ApiError = _interopRequireDefault(require("../utils/ApiError"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var errorConverter = function errorConverter(err, req, res, next) {
  var error = err;

  if (!(error instanceof _ApiError["default"])) {
    var statusCode = error.statusCode || error ? _httpStatus["default"].BAD_REQUEST : _httpStatus["default"].INTERNAL_SERVER_ERROR;
    var message = error.message || _httpStatus["default"][statusCode];
    error = new _ApiError["default"](statusCode, message, false, err.stack);
  }

  next(error);
};

exports.errorConverter = errorConverter;

var errorHandler = function errorHandler(err, req, res, _next) {
  var statusCode = err.statusCode,
      message = err.message;

  if (process.env.NODE_ENV === "production" && !err.isOperational) {
    statusCode = _httpStatus["default"].INTERNAL_SERVER_ERROR;
    message = _httpStatus["default"][_httpStatus["default"].INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  var response = _objectSpread({
    success: false,
    code: statusCode,
    message: message
  }, _config["default"].env === "development" && {
    stack: err.stack
  });

  if (_config["default"].env === "development") {
    _logger["default"].error(err);
  }

  res.status(statusCode).send(response);
};

exports.errorHandler = errorHandler;