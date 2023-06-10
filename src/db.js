import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "172.18.0.2",
  user: "root",
  password: "password",
  port: 3306,
  database: "customersdb",
});
