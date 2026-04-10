import { Client } from "../node_modules/@types/pg/index.js";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432, 
});
