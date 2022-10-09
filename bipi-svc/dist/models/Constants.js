"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CONST = {
  FALSE: "FALSE",
  SUCCESS: "SUCCESS",
  MERCHANT_SUCCESS_CREATED: "Merchant was successfully created",
  MERCHANT_SUCCESS_UPDATED: "Merchant was successfully updated",
  BULK_IS_ACTIVE_SUCCESS: function BULK_IS_ACTIVE_SUCCESS(isActive) {
    return "ALL merchant's `isActive` were successfully updated to `".concat(isActive, "`");
  }
};
Object.freeze(CONST);
var _default = CONST;
exports["default"] = _default;