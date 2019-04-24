import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const db = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "chat_management",
  port: process.env.MYSQL_PORT || "3306"
};
