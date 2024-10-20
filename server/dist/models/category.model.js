"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/* import { genRand } from "../utils";
import crypto from"crypto"; */
const categorySchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        default: () => Math.floor(Math.random() * 1000).toString().padEnd(4, '0')
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    opening: {
        type: String
    },
});
const Category = mongoose_1.default.model("Category", categorySchema);
exports.default = Category;
