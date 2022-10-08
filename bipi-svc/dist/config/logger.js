"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _config = _interopRequireDefault(require("./config"));

var enumerateErrorFormat = _winston["default"].format(function (info) {
  if (info instanceof Error) {
    Object.assign(info, {
      message: info.stack
    });
  }

  return info;
});

var logger = _winston["default"].createLogger({
  level: _config["default"].env === "development" ? "debug" : "info",
  format: _winston["default"].format.combine(enumerateErrorFormat(), _config["default"].env === "development" ? _winston["default"].format.colorize() : _winston["default"].format.uncolorize(), _winston["default"].format.splat(), _winston["default"].format.printf(function (_ref) {
    var level = _ref.level,
        message = _ref.message;
    return "".concat(level, ": ").concat(message);
  })),
  transports: [new _winston["default"].transports.Console({
    stderrLevels: ["error"]
  })]
});

var _default = logger;
exports["default"] = _default;