"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const item_routes_1 = __importDefault(require("./routes/item.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("welcome");
});
app.use('/categories', category_routes_1.default);
app.use('/items', item_routes_1.default);
mongoose_1.default
    .connect(process.env.DATABASE_URL)
    .then(() => {
    app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
})
    .catch((error) => console.log(`${error} did not connect`));
