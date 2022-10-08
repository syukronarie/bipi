"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("./config/config"));

var _config$pg = _config["default"].pg,
    host = _config$pg.host,
    database = _config$pg.database,
    user = _config$pg.user,
    password = _config$pg.password,
    port = _config$pg.port;
var development = {
  client: "pg",
  connection: {
    host: host,
    database: database,
    user: user,
    password: password,
    port: port
  }
};
var production = {
  client: "pg",
  connection: {
    host: host,
    database: database,
    user: user,
    password: password,
    port: port,
    ssl: {
      rejectUnauthorized: false
    }
  },
  pool: {
    min: 2,
    max: 10
  }
};
var knexfile = {
  development: development,
  production: production
};
var _default = knexfile;
exports["default"] = _default;