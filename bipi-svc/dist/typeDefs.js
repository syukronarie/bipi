"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerCore = require("apollo-server-core");

var _templateObject;

var typeDefs = (0, _apolloServerCore.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  enum SortBy {\n    ASC\n    DESC\n  }\n\n  interface MutationResponse {\n    code: String!\n    success: Boolean!\n    message: String!\n  }\n\n  interface SearchResponse {\n    total: Int!\n    lastPage: Int!\n    currentPage: Int!\n    limit: Int!\n    offset: Int!\n  }\n\n  input AllMerchantFilterOptions {\n    page: Int = 1\n    limit: Int = 10\n    sortBy: SortBy = ASC\n  }\n\n  input SearchMerchantFilterOptions {\n    page: Int = 1\n    limit: Int = 10\n    sortBy: SortBy = ASC\n    title: String!\n  }\n\n  input InputMerchant {\n    merchantName: String!\n    phoneNumber: String!\n    latitude: Float!\n    longitude: Float!\n    isActive: Boolean = false\n    recordedDateTime: DateTime!\n  }\n\n  input InputUpdateMerchant {\n    merchantName: String!\n    phoneNumber: String!\n    latitude: Float!\n    longitude: Float!\n    isActive: Boolean!\n    recordedDateTime: DateTime!\n  }\n\n  type Merchant {\n    id: Int!\n    merchantName: String!\n    phoneNumber: String!\n    latitude: Float!\n    longitude: Float!\n    isActive: Boolean!\n    recordedDateTime: DateTime!\n  }\n\n  type MerchantsQueryResponse implements SearchResponse {\n    total: Int!\n    lastPage: Int!\n    currentPage: Int!\n    limit: Int!\n    offset: Int!\n    merchants: [Merchant]\n  }\n\n  type CreateMerchantMutationResponse implements MutationResponse {\n    code: String!\n    success: Boolean!\n    message: String!\n    merchant: Merchant\n  }\n\n  type UpdateMerchantMutationResponse implements MutationResponse {\n    code: String!\n    success: Boolean!\n    message: String!\n    merchant: Merchant\n  }\n\n  type ToggleBulkIsActiveMutationResponse implements MutationResponse {\n    code: String!\n    success: Boolean!\n    message: String!\n  }\n\n  type Query {\n    searchMerchants(searchFilterOptions: SearchMerchantFilterOptions!): MerchantsQueryResponse!\n    getMerchant(id: Int!): Merchant\n    allMerchant(allMerchantfilterOptions: AllMerchantFilterOptions): MerchantsQueryResponse!\n  }\n\n  type Mutation {\n    createMerchant(merchant: InputMerchant!): CreateMerchantMutationResponse!\n    updateMerchant(id: Int!, merchant: InputUpdateMerchant!): UpdateMerchantMutationResponse!\n    toggleBulkIsActive(isActive: Boolean!): ToggleBulkIsActiveMutationResponse!\n  }\n"])));
var _default = typeDefs;
exports["default"] = _default;