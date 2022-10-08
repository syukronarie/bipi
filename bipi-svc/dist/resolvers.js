"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _merchant = require("./services/merchant.service");

/* eslint-disable prettier/prettier */
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
    }(),
    updateMerchant: function () {
      var _updateMerchant2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
        var id, merchant, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id, merchant = _ref2.merchant;
                _context2.next = 3;
                return (0, _merchant.updateMerchant)(id, merchant);

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

      function updateMerchant(_x3, _x4) {
        return _updateMerchant2.apply(this, arguments);
      }

      return updateMerchant;
    }(),
    toggleBulkIsActive: function () {
      var _toggleBulkIsActive2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
        var isActive, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isActive = _ref3.isActive;
                _context3.next = 3;
                return (0, _merchant.toggleBulkIsActive)(isActive);

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function toggleBulkIsActive(_x5, _x6) {
        return _toggleBulkIsActive2.apply(this, arguments);
      }

      return toggleBulkIsActive;
    }()
  },
  Query: {
    getMerchant: function () {
      var _getMerchant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_, _ref4) {
        var id, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref4.id;
                _context4.next = 3;
                return (0, _merchant.getMerchantById)(id);

              case 3:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getMerchant(_x7, _x8) {
        return _getMerchant.apply(this, arguments);
      }

      return getMerchant;
    }(),
    allMerchant: function () {
      var _allMerchant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_, _ref5) {
        var filterOptions, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                filterOptions = _ref5.filterOptions;
                _context5.next = 3;
                return (0, _merchant.queryMerchants)(filterOptions);

              case 3:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function allMerchant(_x9, _x10) {
        return _allMerchant.apply(this, arguments);
      }

      return allMerchant;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;