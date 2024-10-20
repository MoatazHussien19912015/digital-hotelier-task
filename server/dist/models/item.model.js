"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: {
            currency: { type: String },
            value: { type: Number },
        },
        required: true,
        _id: false
    },
    tags: {
        type: Array,
        default: []
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Category'
    }
});
const Item = mongoose_1.default.model("Item", itemSchema);
exports.default = Item;
