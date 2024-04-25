import * as dotenv from "dotenv";
import { Config } from './configTypes';

dotenv.config();

const env = process.env;
console.log("config check", process.env.AUTH_USERNAME);

const config: Config = {
  BASIC_AUTH_NAME: env.AUTH_USERNAME,
  BASIC_AUTH_PASSWORD: env.AUTH_PASSWORD,
  BASIC_JWT_SECRET: env.JWT_SECRET,
  BASIC_JWT_REFRESH_SECRET: env.JWT_REFRESH_SECRET ,
  BASIC_SESSION_EXPIRATION: env.SESSION_EXPIRATION,
  JWT_SECRET: env.JWT_SECRET,
  JWT_REFRESH_SECRET: env.JWT_REFRESH_SECRET,
  SESSION_EXPIRATION: env.SESSION_EXPIRATION,
};

export default config;
