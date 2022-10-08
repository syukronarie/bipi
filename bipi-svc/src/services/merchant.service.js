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

export { createMerchant, queryMerchants };
