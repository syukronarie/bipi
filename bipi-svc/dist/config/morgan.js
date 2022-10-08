"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successHandler = exports.errorHandler = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _logger = _interopRequireDefault(require("./logger"));

_morgan["default"].token("message", function (req, res) {
  return res.locals.errorMessage || "";
});

var getIpFormat = function getIpFormat() {
  return process.env.NODE_ENV === "production" ? ":remote-addr - " : "";
};

var successResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms :date[iso]");
var errorResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms - message: :message");
var successHandler = (0, _morgan["default"])(successResponseFormat, {
  skip: function skip(req, res) {
    return res.statusCode >= 400;
  },
  stream: {
    write: function write(message) {
      return _logger["default"].info(message.trim());
    }
  }
});
exports.successHandler = successHandler;
var errorHandler = (0, _morgan["default"])(errorResponseFormat, {
  skip: function skip(req, res) {
    return res.statusCode < 400;
  },
  stream: {
    write: function write(message) {
      return _logger["default"].error(message.trim());
    }
  }
});
exports.errorHandler = errorHandler;