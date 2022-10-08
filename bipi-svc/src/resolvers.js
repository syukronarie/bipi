/* eslint-disable prettier/prettier */
import {
  createMerchant,
  getMerchantById,
  queryMerchants,
  updateMerchant,
  toggleBulkIsActive,
} from "./services/merchant.service";

const resolvers = {
  Mutation: {
    createMerchant: async (_, { merchant }) => {
      const result = await createMerchant(merchant);
      return result;
    },
    updateMerchant: async (_, { id, merchant }) => {
      const result = await updateMerchant(id, merchant);
      return result;
    },
    toggleBulkIsActive: async (_, { isActive }) => {
      const result = await toggleBulkIsActive(isActive);
      return result;
    },
  },
  Query: {
    getMerchant: async (_, { id }) => {
      const result = await getMerchantById(id);
      return result;
    },
    allMerchant: async (_, { filterOptions }) => {
      const result = await queryMerchants(filterOptions);
      return result;
    },
  },
};

export default resolvers;
