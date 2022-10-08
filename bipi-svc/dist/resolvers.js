"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _merchant = require("./services/merchant.service");

var resolvers = {
  Mutation: {
    createMerchant: function () {
      var _createMerchant2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var merchant, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                merchant = _ref.merchant;
                _context.next = 3;
                return (0, _merchant.createMerchant)(merchant);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createMerchant(_x, _x2) {
        return _createMerchant2.apply(this, arguments);
      }

      return createMerchant;
    }()
  },
  Query: {
    allMerchant: function () {
      var _allMerchant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
        var filterOptions, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filterOptions = _ref2.filterOptions;
                _context2.next = 3;
                return (0, _merchant.queryMerchants)(filterOptions);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function allMerchant(_x3, _x4) {
        return _allMerchant.apply(this, arguments);
      }

      return allMerchant;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;