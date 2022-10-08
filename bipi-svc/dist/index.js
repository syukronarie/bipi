"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _apolloServerExpress = require("apollo-server-express");

var _apolloServerCore = require("apollo-server-core");

var _graphqlScalars = require("graphql-scalars");

var _schema = require("@graphql-tools/schema");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config/config"));

var _db = _interopRequireDefault(require("./config/db"));

var _logger = _interopRequireDefault(require("./config/logger"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var httpServer = _http["default"].createServer(_app["default"]);

var schema = (0, _schema.makeExecutableSchema)({
  typeDefs: [].concat((0, _toConsumableArray2["default"])(_graphqlScalars.typeDefs), [_graphqlScalars.DateTimeTypeDefinition, _typeDefs["default"]]),
  resolvers: [_graphqlScalars.resolvers, {
    DateTime: _graphqlScalars.DateTimeResolver
  }, _resolvers["default"]]
});
var server = new _apolloServerExpress.ApolloServer({
  schema: schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [(0, _apolloServerCore.ApolloServerPluginDrainHttpServer)({
    httpServer: httpServer
  }), (0, _apolloServerCore.ApolloServerPluginLandingPageLocalDefault)({
    embed: true
  })],
  introspection: true // to allows introspection in production that used for example

}); // !this sintax to show list tables in postgreSQL, no need to enabled.
// db("pg_catalog.pg_tables").select("tablename").where({ schemaname: "public" });

_db["default"].raw("SELECT 1").then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _logger["default"].info("PostgreSQL connected");

          _context.next = 3;
          return server.start();

        case 3:
          server.applyMiddleware({
            app: _app["default"]
          });
          _context.next = 6;
          return new Promise(function (resolve) {
            // eslint-disable-next-line func-names
            httpServer.listen(_config["default"].port, function () {
              _logger["default"].info("We are in %s mode", _app["default"].settings.env);

              _logger["default"].info("Server listening on http://localhost:%d%s", this.address().port, server.graphqlPath);

              resolve();
            });
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (e) {
  _logger["default"].info("PostgreSQL not connected");

  _logger["default"].error(e);
});

var exitHandler = function exitHandler() {
  if (httpServer) {
    httpServer.close(function () {
      _logger["default"].info("Server closed");

      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

var unexpectedErrorHandler = function unexpectedErrorHandler(error) {
  _logger["default"].error(error);

  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
process.on("SIGTERM", function () {
  _logger["default"].info("SIGTERM received");

  if (httpServer) {
    httpServer.close();
  }
});