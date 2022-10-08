import config from "./config/config";

const { host, database, user, password, port } = config.pg;

const development = {
  client: "pg",
  connection: {
    host,
    database,
    user,
    password,
    port,
  },
};

const production = {
  client: "pg",
  connection: {
    host,
    database,
    user,
    password,
    port,
    ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 2,
    max: 10,
  },
};

const knexfile = {
  development,
  production,
};

export default knexfile;
