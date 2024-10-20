import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import categoriesRouter from './routes/category.routes';
import itemsRouter from './routes/item.routes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});



app.use('/categories', categoriesRouter);
app.use('/items', itemsRouter);

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));