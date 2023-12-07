import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  "blog",
  process.env.DBUSER ? process.env.DBUSER : "root",
  process.env.PASSWORD ? process.env.PASSWORD : "suresh02!",
  {
    dialect: "mysql",
    host: "127.0.0.1",
  }
);
