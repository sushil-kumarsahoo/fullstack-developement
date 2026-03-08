import { Client } from "../node_modules/@types/pg/index.js";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "sushil7847",
  port: 5433, 
});
