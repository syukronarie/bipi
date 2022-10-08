import CONST from "../../models/Constants";

const batchUpdate = async ({ db, table }, collection) => {
  const trx = await db.transaction();
  try {
    await Promise.all(
      collection.map((record) =>
        db(table).where({ id: record.id }).update(record).transacting(trx)
      )
    );
    await trx.commit();
    return CONST.SUCCESS;
  } catch (error) {
    await trx.rollback();
    return CONST.FALSE;
  }
};

export default batchUpdate;
