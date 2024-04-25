import { development, production } from "./knexfile.js";
import knex from "knex";

const db = knex(
  process.env.STAGE == "production" ? production : development
  // process.env.STAGE == "development"
  //   ? knexFile.development
  //   : knexFile.production
);

export default db;
