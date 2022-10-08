"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _joi = _interopRequireDefault(require("joi"));

_dotenv["default"].config({
  path: _path["default"].join(__dirname, "../../.env")
});

var envVarsSchema = _joi["default"].object().keys({
  NODE_ENV: _joi["default"].string().valid("production", "development", "test").required(),
  PORT: _joi["default"].number()["default"](8080),
  PG_HOST: _joi["default"].string().required().description("Postgress Host"),
  PG_DATABASE: _joi["default"].string().required().description("Postgress Database"),
  PG_USER: _joi["default"].string().required().description("Postgress Username"),
  PG_PASSWORD: _joi["default"].string().required().description("Postgress Password"),
  PG_PORT: _joi["default"].string().required().description("Postgress Port")
}).unknown();

var _envVarsSchema$prefs$ = envVarsSchema.prefs({
  errors: {
    label: "key"
  }
}).validate(process.env),
    envVars = _envVarsSchema$prefs$.value,
    error = _envVarsSchema$prefs$.error;

if (error) {
  throw new Error("Config validation error: ".concat(error.message));
}

var config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  pg: {
    host: envVars.PG_HOST,
    database: envVars.PG_DATABASE,
    user: envVars.PG_USER,
    password: envVars.PG_PASSWORD,
    port: envVars.PG_PORT
  }
};
var _default = config;
exports["default"] = _default;