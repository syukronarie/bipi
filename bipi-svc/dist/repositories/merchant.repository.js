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
        var ids;
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
                _context.next = 5;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).insert(data, ["id"]);

              case 5:
                ids = _context.sent;
                data.id = ids[0].id;
                return _context.abrupt("return", data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                throw new Error(_ErrorMessages["default"].INTERNAL_SERVER_ERROR);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "getMerchants",
    value: function () {
      var _getMerchants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filterOptions) {
        var sortBy, limit, page, offset, query, merchants, _yield$db$count$first, count, result;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sortBy = filterOptions.sortBy, limit = filterOptions.limit;
                page = filterOptions.page;
                if (page < 1) page = 1;
                offset = (page - 1) * limit;
                _context2.prev = 4;
                query = (0, _db["default"])(_Tables["default"].MERCHANTS).select("*").limit(limit).offset(offset);
                if (sortBy) query.orderBy("merchantName", sortBy);
                _context2.next = 9;
                return query.then(function (res) {
                  return res;
                });

              case 9:
                merchants = _context2.sent;
                _context2.next = 12;
                return (0, _db["default"])(_Tables["default"].MERCHANTS).count({
                  count: "*"
                }).first();

              case 12:
                _yield$db$count$first = _context2.sent;
                count = _yield$db$count$first.count;
                result = parseRawAllMerchants(merchants, count, page, limit, offset);
                return _context2.abrupt("return", result);

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](4);
                throw new Error(_httpStatus["default"].INTERNAL_SERVER_ERROR);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 18]]);
      }));

      function getMerchants(_x2) {
        return _getMerchants.apply(this, arguments);
      }

      return getMerchants;
    }()
  }]);
  return MerchantRepository;
}();

var _default = MerchantRepository;
exports["default"] = _default;