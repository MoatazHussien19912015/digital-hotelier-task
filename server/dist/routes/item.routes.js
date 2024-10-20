"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_controller_1 = require("../controllers/item.controller");
const router = express_1.default.Router();
/* READ */
router.get("/", item_controller_1.getItemsByCategory);
/* CREATE */
router.post("/", item_controller_1.addItem);
exports.default = router;
