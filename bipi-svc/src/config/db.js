import knex from "knex";
import knexfile from "../knexfile";
import config from "./config";

const db = knex(knexfile[config.env]);

export default db;
