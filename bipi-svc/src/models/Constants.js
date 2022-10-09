const CONST = {
  FALSE: "FALSE",
  SUCCESS: "SUCCESS",
  MERCHANT_SUCCESS_CREATED: "Merchant was successfully created",
  MERCHANT_SUCCESS_UPDATED: "Merchant was successfully updated",
  BULK_IS_ACTIVE_SUCCESS: (isActive) =>
    `ALL merchant's \`isActive\` were successfully updated to \`${isActive}\``,
};

Object.freeze(CONST);

export default CONST;
