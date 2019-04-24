import mysql from "mysql2/promise";
import { db } from "../config";

const pool = mysql.createPool(db);
console.log(`db`, db);

export default pool;
