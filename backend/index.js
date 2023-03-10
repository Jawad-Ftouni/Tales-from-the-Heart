import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./database/database.js";
import categoryRouter from "./routes/categories.js";
import bodyParser from "body-parser";
dotenv.config();

let app = express();
dotenv.config();
let PORT = process.env.PORT || 4000;

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to mysql server");
  })
  .catch((e) => {
    console.log(e.message);
    console.log("error in auth");
  });
try {
  app.listen(PORT, () => {
    console.log("server workes on " + PORT);
  });
} catch (error) {
  console.log(e.message);
}

app.use(bodyParser.json());
app.use("/api/blog", categoryRouter);
