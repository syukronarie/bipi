"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _db = _interopRequireDefault(require("../config/db"));

var _batchUpdate = _interopRequireDefault(require("../middlewares/helpers/batchUpdate"));

var _Constants = _interopRequireDefault(require("../models/Constants"));

var _Tables = _interopRequireDefault(require("../models/Tables"));

var _ErrorMessages = _interopRequireDefault(require("../utils/ErrorMessages"));

function parseRawAllMerchants(merchants, count, page, limit, offset) {
  if (merchants === undefined || count === undefined || page === undefined || limit === undefined || offset === undefined) {
    return null;
  }

  var result = {};
  result.total = Number(count);
  result.limit = limit;
  result.offset = offset;
  result.lastPage = Math.ceil(count / limit);
  result.currentPage = page;
  result.merchants = merchants;
  return result;
}

var MerchantRepository = /*#__PURE__*/function () {
  function MerchantRepository() {
    (0, _classCallCheck2["default"])(this, MerchantRepository);
  }

  (0, _createClass2["default"])(MerchantRepository, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var result, ids;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(data.isActive === null)) {
                  _context.next = 2;
                  break;
                }

                throw Error(_ErrorMessages["default"].INPUT_IS_ACTIVE_IS_BOOLEAN);

              case 2:
                _context.prev = 2;
                result = {};
                _context.next = 6;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).insert(data, ["id"]);

              case 6:
                ids = _context.sent;
                data.id = ids[0].id;
                result.data = data;
                result.success = _Constants["default"].SUCCESS;
                return _context.abrupt("return", result);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                throw new Error(_ErrorMessages["default"].INTERNAL_SERVER_ERROR);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 13]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, data) {
        var result, ids;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                result = {};
                _context2.next = 4;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).where({
                  id: id
                }).update(data, ["id"]);

              case 4:
                ids = _context2.sent;
                data.id = ids[0].id;
                result.data = data;
                result.success = _Constants["default"].SUCCESS;
                return _context2.abrupt("return", result);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "getMerchants",
    value: function () {
      var _getMerchants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(filterOptions) {
        var sortBy, limit, page, offset, query, merchants, _yield$db$count$first, count, result;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sortBy = filterOptions.sortBy, limit = filterOptions.limit;
                page = filterOptions.page;
                if (page < 1) page = 1;
                offset = (page - 1) * limit;
                _context3.prev = 4;
                query = (0, _db["default"])(_Tables["default"].MERCHANTS).select("*").limit(limit).offset(offset);
                if (sortBy) query.orderBy("merchantName", sortBy);
                _context3.next = 9;
                return query.then(function (res) {
                  return res;
                });

              case 9:
                merchants = _context3.sent;
                _context3.next = 12;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).count({
                  count: "*"
                }).first();

              case 12:
                _yield$db$count$first = _context3.sent;
                count = _yield$db$count$first.count;
                result = parseRawAllMerchants(merchants, count, page, limit, offset);
                return _context3.abrupt("return", result);

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](4);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 18]]);
      }));

      function getMerchants(_x4) {
        return _getMerchants.apply(this, arguments);
      }

      return getMerchants;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).where({
                  id: id
                }).first();

              case 3:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function findById(_x5) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "batchUpdateIsActive",
    value: function () {
      var _batchUpdateIsActive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(isActive) {
        var collection, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).select("*");

              case 3:
                collection = _context5.sent;
                collection.forEach(function (record) {
                  record.isActive = isActive;
                });
                _context5.next = 7;
                return (0, _batchUpdate["default"])({
                  db: _db["default"],
                  table: _Tables["default"].MERCHANTS
                }, collection);

              case 7:
                result = _context5.sent;

                if (!(result === _Constants["default"].SUCCESS)) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", _Constants["default"].SUCCESS);

              case 10:
                return _context5.abrupt("return", _Constants["default"].FALSE);

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](0);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 13]]);
      }));

      function batchUpdateIsActive(_x6) {
        return _batchUpdateIsActive.apply(this, arguments);
      }

      return batchUpdateIsActive;
    }()
  }, {
    key: "searchMerchantContainTitle",
    value: function () {
      var _searchMerchantContainTitle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(searchFilterOptions) {
        var sortBy, limit, title, page, offset, query, merchants, filtered, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                sortBy = searchFilterOptions.sortBy, limit = searchFilterOptions.limit, title = searchFilterOptions.title;
                page = searchFilterOptions.page;
                if (page < 1) page = 1;
                offset = (page - 1) * limit;
                _context6.prev = 4;
                query = (0, _db["default"])(_Tables["default"].MERCHANTS).select("*").limit(limit).offset(offset);
                if (sortBy) query.orderBy("merchantName", sortBy);
                _context6.next = 9;
                return query.then(function (res) {
                  return res;
                });

              case 9:
                merchants = _context6.sent;
                filtered = merchants.filter(function (merchant) {
                  var merchantName = merchant.merchantName.toLowerCase();
                  if (merchantName.includes(title.toLowerCase())) return merchant;
                  return null;
                });
                result = parseRawAllMerchants(filtered, filtered.length, page, limit, offset);
                return _context6.abrupt("return", result);

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](4);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 15]]);
      }));

      function searchMerchantContainTitle(_x7) {
        return _searchMerchantContainTitle.apply(this, arguments);
      }

      return searchMerchantContainTitle;
    }()
  }]);
  return MerchantRepository;
}();

var _default = MerchantRepository;
exports["default"] = _default;