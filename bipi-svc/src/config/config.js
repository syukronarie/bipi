import dotenv from "dotenv";
import path from "path";
import Joi from "joi";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development", "test").required(),
    PORT: Joi.number().default(8080),
    PG_HOST: Joi.string().required().description("Postgress Host"),
    PG_DATABASE: Joi.string().required().description("Postgress Database"),
    PG_USER: Joi.string().required().description("Postgress Username"),
    PG_PASSWORD: Joi.string().required().description("Postgress Password"),
    PG_PORT: Joi.string().required().description("Postgress Port"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  pg: {
    host: envVars.PG_HOST,
    database: envVars.PG_DATABASE,
    user: envVars.PG_USER,
    password: envVars.PG_PASSWORD,
    port: envVars.PG_PORT,
  },
};

export default config;
