"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../knexfile"));

var _config = _interopRequireDefault(require("./config"));

var db = (0, _knex["default"])(_knexfile["default"][_config["default"].env]);
var _default = db;
exports["default"] = _default;