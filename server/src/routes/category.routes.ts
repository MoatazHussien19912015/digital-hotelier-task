import express from "express";
import { addCategory, getCategories } from "../controllers/category.controller";


const router = express.Router();

/* READ */
router.get("/", getCategories);

/* CREATE*/
router.post("/", addCategory);



export default router;