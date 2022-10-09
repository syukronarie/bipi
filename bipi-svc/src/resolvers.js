import {
  createMerchant,
  getMerchantById,
  queryMerchants,
  updateMerchant,
  toggleBulkIsActive,
  searchMerchants,
} from "./services/merchant.service";

const FILTER_OPTIONS = { page: 1, limit: 10, sortBy: "ASC" };

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
    allMerchant: async (_, { allMerchantfilterOptions }) => {
      // this if condition should be exist to prevent error respond
      // when client send with no args `allMerchantfilterOptions`
      if (!allMerchantfilterOptions) allMerchantfilterOptions = FILTER_OPTIONS;
      const result = await queryMerchants(allMerchantfilterOptions);
      return result;
    },
    searchMerchants: async (_, { searchFilterOptions }) => {
      const result = await searchMerchants(searchFilterOptions);
      return result;
    },
  },
};

export default resolvers;
