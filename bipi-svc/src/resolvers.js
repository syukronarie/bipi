import { createMerchant, queryMerchants } from "./services/merchant.service";

const resolvers = {
  Mutation: {
    createMerchant: async (_, { merchant }) => {
      const result = await createMerchant(merchant);
      return result;
    },
  },
  Query: {
    allMerchant: async (_, { filterOptions }) => {
      const result = await queryMerchants(filterOptions);
      console.log({ tes: result });
      return result;
    },
  },
};

export default resolvers;