"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Constants = _interopRequireDefault(require("../../models/Constants"));

var batchUpdate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, collection) {
    var db, table, trx;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = _ref.db, table = _ref.table;
            _context.next = 3;
            return db.transaction();

          case 3:
            trx = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return Promise.all(collection.map(function (record) {
              return db(table).where({
                id: record.id
              }).update(record).transacting(trx);
            }));

          case 7:
            _context.next = 9;
            return trx.commit();

          case 9:
            return _context.abrupt("return", _Constants["default"].SUCCESS);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            _context.next = 16;
            return trx.rollback();

          case 16:
            return _context.abrupt("return", _Constants["default"].FALSE);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 12]]);
  }));

  return function batchUpdate(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = batchUpdate;
exports["default"] = _default;