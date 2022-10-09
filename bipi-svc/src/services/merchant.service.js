import httpStatus from "http-status";
import CONST from "../models/Constants";
import MerchantRepository from "../repositories/merchant.repository";
import createMutateResponse from "../utils/createMutateResponse";

const merchantRepo = new MerchantRepository();

const createMerchant = async (data) => {
  const createResult = await merchantRepo.create(data);
  if (createResult.success !== CONST.SUCCESS) {
    const result = createMutateResponse(
      httpStatus.INTERNAL_SERVER_ERROR,
      CONST.INTERNAL_SERVER_ERROR
    );
    return result;
  }
  const result = createMutateResponse(httpStatus.CREATED, CONST.MERCHANT_SUCCESS_CREATED, {
    merchant: createResult.data,
  });
  return result;
};

const updateMerchant = async (id, merchant) => {
  const updateResult = await merchantRepo.update(id, merchant);
  if (updateResult.success !== CONST.SUCCESS) {
    const result = createMutateResponse(
      httpStatus.INTERNAL_SERVER_ERROR,
      CONST.INTERNAL_SERVER_ERROR
    );
    return result;
  }
  const result = createMutateResponse(httpStatus.OK, CONST.MERCHANT_SUCCESS_UPDATED, {
    merchant: updateResult.data,
  });
  return result;
};

const queryMerchants = async (filterOptions) => {
  const result = await merchantRepo.getMerchants(filterOptions);
  return result;
};

const getMerchantById = async (id) => {
  const result = await merchantRepo.findById(id);
  return result;
};

const toggleBulkIsActive = async (isActive) => {
  const toggleResult = await merchantRepo.batchUpdateIsActive(isActive);
  if (toggleResult !== CONST.SUCCESS) {
    const result = createMutateResponse(
      httpStatus.INTERNAL_SERVER_ERROR,
      CONST.INTERNAL_SERVER_ERROR
    );
    return result;
  }
  const result = createMutateResponse(httpStatus.OK, `${CONST.BULK_IS_ACTIVE_SUCCESS(isActive)}`);
  return result;
};

const searchMerchants = async (searchFilterOptions) => {
  const result = await merchantRepo.searchMerchantContainTitle(searchFilterOptions);
  return result;
};

export {
  createMerchant,
  getMerchantById,
  queryMerchants,
  updateMerchant,
  toggleBulkIsActive,
  searchMerchants,
};
