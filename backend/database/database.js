import { Sequelize } from "sequelize";

export let sequelize = new Sequelize(
  "blogs_database",
  "root",
  "Jawadftouni123...",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
