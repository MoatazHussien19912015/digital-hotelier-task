"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItem = exports.getItemsByCategory = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const item_model_1 = __importDefault(require("../models/item.model"));
const getItemsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cat } = req.query;
        // get category id
        const category = yield category_model_1.default.findOne({ id: cat });
        if (!category) {
            res.status(404).json({ message: 'that category is not exist' });
            return;
        }
        const items = yield item_model_1.default.find({ categoryId: category._id });
        res.status(200).json(items);
        return;
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
});
exports.getItemsByCategory = getItemsByCategory;
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, name, description, price, tags, categoryId } = req.body;
        const item = new item_model_1.default({ image, name, description, price, tags, categoryId });
        const savedItem = yield item.save();
        res.status(200).json(savedItem);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
});
exports.addItem = addItem;
