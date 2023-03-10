import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export let Category = sequelize.define("categories", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  image1: {
    type: DataTypes.STRING,
    require: true,
  },
  image2: {
    type: DataTypes.STRING,
    require: true,
  },
  image3: {
    type: DataTypes.STRING,
    require: true,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("categories table created");
  })
  .catch((e) => {
    console.log(e.message);
  });
