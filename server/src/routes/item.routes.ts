import express from "express";
import { addItem, getItemsByCategory } from "../controllers/item.controller";


const router = express.Router();

/* READ */
router.get("/", getItemsByCategory);

/* CREATE */
router.post("/", addItem);


export default router;