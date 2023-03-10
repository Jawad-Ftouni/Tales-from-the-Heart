import express from "express";
import { addCategory } from "../controllers/categoriesController.js";
let router = express.Router();

router.post("/add-category", addCategory);

export default router;
