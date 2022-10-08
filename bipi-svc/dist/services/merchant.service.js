"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMerchant = exports.toggleBulkIsActive = exports.queryMerchants = exports.getMerchantById = exports.createMerchant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Constants = _interopRequireDefault(require("../models/Constants"));

var _merchant = _interopRequireDefault(require("../repositories/merchant.repository"));

var merchantRepo = new _merchant["default"]();

var createMerchant = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return merchantRepo.create(data);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMerchant(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMerchant = createMerchant;

var queryMerchants = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filterOptions) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return merchantRepo.getMerchants(filterOptions);

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function queryMerchants(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.queryMerchants = queryMerchants;

var getMerchantById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return merchantRepo.findById(id);

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMerchantById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMerchantById = getMerchantById;

var updateMerchant = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, merchant) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return merchantRepo.update(id, merchant);

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateMerchant(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateMerchant = updateMerchant;

var toggleBulkIsActive = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(isActive) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return merchantRepo.batchUpdateIsActive(isActive);

          case 2:
            result = _context5.sent;

            if (!(result === _Constants["default"].SUCCESS)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", _Constants["default"].SUCCESS);

          case 5:
            return _context5.abrupt("return", _Constants["default"].FALSE);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function toggleBulkIsActive(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

exports.toggleBulkIsActive = toggleBulkIsActive;