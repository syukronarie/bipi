"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMerchant = exports.toggleBulkIsActive = exports.searchMerchants = exports.queryMerchants = exports.getMerchantById = exports.createMerchant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _Constants = _interopRequireDefault(require("../models/Constants"));

var _merchant = _interopRequireDefault(require("../repositories/merchant.repository"));

var _createMutateResponse = _interopRequireDefault(require("../utils/createMutateResponse"));

var merchantRepo = new _merchant["default"]();

var createMerchant = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var createResult, _result, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return merchantRepo.create(data);

          case 2:
            createResult = _context.sent;

            if (!(createResult.success !== _Constants["default"].SUCCESS)) {
              _context.next = 6;
              break;
            }

            _result = (0, _createMutateResponse["default"])(_httpStatus["default"].INTERNAL_SERVER_ERROR, _Constants["default"].INTERNAL_SERVER_ERROR);
            return _context.abrupt("return", _result);

          case 6:
            result = (0, _createMutateResponse["default"])(_httpStatus["default"].CREATED, _Constants["default"].MERCHANT_SUCCESS_CREATED, {
              merchant: createResult.data
            });
            return _context.abrupt("return", result);

          case 8:
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

var updateMerchant = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, merchant) {
    var updateResult, _result2, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return merchantRepo.update(id, merchant);

          case 2:
            updateResult = _context2.sent;

            if (!(updateResult.success !== _Constants["default"].SUCCESS)) {
              _context2.next = 6;
              break;
            }

            _result2 = (0, _createMutateResponse["default"])(_httpStatus["default"].INTERNAL_SERVER_ERROR, _Constants["default"].INTERNAL_SERVER_ERROR);
            return _context2.abrupt("return", _result2);

          case 6:
            result = (0, _createMutateResponse["default"])(_httpStatus["default"].OK, _Constants["default"].MERCHANT_SUCCESS_UPDATED, {
              merchant: updateResult.data
            });
            return _context2.abrupt("return", result);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateMerchant(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateMerchant = updateMerchant;

var queryMerchants = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(filterOptions) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return merchantRepo.getMerchants(filterOptions);

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

  return function queryMerchants(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.queryMerchants = queryMerchants;

var getMerchantById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return merchantRepo.findById(id);

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

  return function getMerchantById(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getMerchantById = getMerchantById;

var toggleBulkIsActive = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(isActive) {
    var toggleResult, _result3, result;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return merchantRepo.batchUpdateIsActive(isActive);

          case 2:
            toggleResult = _context5.sent;

            if (!(toggleResult !== _Constants["default"].SUCCESS)) {
              _context5.next = 6;
              break;
            }

            _result3 = (0, _createMutateResponse["default"])(_httpStatus["default"].INTERNAL_SERVER_ERROR, _Constants["default"].INTERNAL_SERVER_ERROR);
            return _context5.abrupt("return", _result3);

          case 6:
            result = (0, _createMutateResponse["default"])(_httpStatus["default"].OK, "".concat(_Constants["default"].BULK_IS_ACTIVE_SUCCESS(isActive)));
            return _context5.abrupt("return", result);

          case 8:
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

var searchMerchants = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(searchFilterOptions) {
    var result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return merchantRepo.searchMerchantContainTitle(searchFilterOptions);

          case 2:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function searchMerchants(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

exports.searchMerchants = searchMerchants;