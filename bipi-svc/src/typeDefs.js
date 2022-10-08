import { gql } from "apollo-server-core";

const typeDefs = gql`
  enum SortBy {
    ASC
    DESC
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

  type AllMerchant {
    merchants: [Merchant]
    total: Int!
    lastPage: Int!
    currentPage: Int!
    limit: Int!
    offset: Int!
  }

  input InputMerchant {
    merchantName: String!
    phoneNumber: String!
    latitude: Float!
    longitude: Float!
    isActive: Boolean = false
    recordedDateTime: DateTime!
  }

  input InputFilterOptions {
    page: Int = 1
    limit: Int = 10
    sortBy: SortBy = ASC
  }

  type Query {
    # searchMerchants(title: String!, page: Int, limit: Int, sortBy: SortBy): [Merchant!]!
    # getMerchant(id: Int!): Merchant
    allMerchant(filterOptions: InputFilterOptions): AllMerchant!
  }

  type Mutation {
    createMerchant(merchant: InputMerchant!): Merchant!
    # updateMerchant(merchant: InputMerchant!): Merchant!
    # toggleBulkIsActive(isActive: Boolean!): [Merchant!]!
  }
`;

export default typeDefs;
