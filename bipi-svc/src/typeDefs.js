import { gql } from "apollo-server-core";

const typeDefs = gql`
  enum SortBy {
    ASC
    DESC
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  interface SearchResponse {
    total: Int!
    lastPage: Int!
    currentPage: Int!
    limit: Int!
    offset: Int!
  }

  input AllMerchantFilterOptions {
    page: Int = 1
    limit: Int = 10
    sortBy: SortBy = ASC
  }

  input SearchMerchantFilterOptions {
    page: Int = 1
    limit: Int = 10
    sortBy: SortBy = ASC
    title: String!
  }

  input InputMerchant {
    merchantName: String!
    phoneNumber: String!
    latitude: Float!
    longitude: Float!
    isActive: Boolean = false
    recordedDateTime: DateTime!
  }

  input InputUpdateMerchant {
    merchantName: String!
    phoneNumber: String!
    latitude: Float!
    longitude: Float!
    isActive: Boolean!
    recordedDateTime: DateTime!
  }

  type Merchant {
    id: Int!
    merchantName: String!
    phoneNumber: String!
    latitude: Float!
    longitude: Float!
    isActive: Boolean!
    recordedDateTime: DateTime!
  }

  type MerchantsQueryResponse implements SearchResponse {
    total: Int!
    lastPage: Int!
    currentPage: Int!
    limit: Int!
    offset: Int!
    merchants: [Merchant]
  }

  type CreateMerchantMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    merchant: Merchant
  }

  type UpdateMerchantMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    merchant: Merchant
  }

  type ToggleBulkIsActiveMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Query {
    searchMerchants(searchFilterOptions: SearchMerchantFilterOptions!): MerchantsQueryResponse!
    getMerchant(id: Int!): Merchant
    allMerchant(allMerchantfilterOptions: AllMerchantFilterOptions): MerchantsQueryResponse!
  }

  type Mutation {
    createMerchant(merchant: InputMerchant!): CreateMerchantMutationResponse!
    updateMerchant(id: Int!, merchant: InputUpdateMerchant!): UpdateMerchantMutationResponse!
    toggleBulkIsActive(isActive: Boolean!): ToggleBulkIsActiveMutationResponse!
  }
`;

export default typeDefs;
