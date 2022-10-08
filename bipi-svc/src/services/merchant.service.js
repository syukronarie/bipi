import MerchantRepository from "../repositories/merchant.repository";

const merchantRepo = new MerchantRepository();

const createMerchant = async (data) => {
  const result = await merchantRepo.create(data);
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

const updateMerchant = async (id, merchant) => {
  const result = await merchantRepo.update(id, merchant);
  return result;
};

export { createMerchant, getMerchantById, queryMerchants, updateMerchant };
