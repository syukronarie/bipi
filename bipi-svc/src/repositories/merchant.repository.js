import httpStatus from "http-status";

import db from "../config/db";
import TABLES from "../models/Tables";
import ErrorMessage from "../utils/ErrorMessages";

function parseRawAllMerchants(merchants, count, page, limit, offset) {
  if (
    merchants === undefined ||
    count === undefined ||
    page === undefined ||
    limit === undefined ||
    offset === undefined
  ) {
    return null;
  }
  const result = {};
  result.total = Number(count);
  result.limit = limit;
  result.offset = offset;
  result.lastPage = Math.ceil(count / limit);
  result.currentPage = page;
  result.merchants = merchants;
  return result;
}

class MerchantRepository {
  async create(data) {
    if (data.isActive === null)
      throw Error(ErrorMessage.INPUT_IS_ACTIVE_IS_BOOLEAN);
    try {
      const ids = await db(TABLES.MERCHANTS).insert(data, ["id"]);
      data.id = ids[0].id;
      return data;
    } catch (err) {
      throw new Error(ErrorMessage.INTERNAL_SERVER_ERROR);
    }
  }

  async getMerchants(filterOptions) {
    const { sortBy, limit } = filterOptions;
    let { page } = filterOptions;
    if (page < 1) page = 1;
    const offset = (page - 1) * limit;
    try {
      const query = db(TABLES.MERCHANTS)
        .select("*")
        .limit(limit)
        .offset(offset);
      if (sortBy) query.orderBy("merchantName", sortBy);
      const merchants = await query.then((res) => res);
      const { count } = await db(TABLES.MERCHANTS)
        .count({ count: "*" })
        .first();
      const result = parseRawAllMerchants(
        merchants,
        count,
        page,
        limit,
        offset
      );
      return result;
    } catch (err) {
      throw new Error(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default MerchantRepository;
