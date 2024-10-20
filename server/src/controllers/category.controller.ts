import { Request, Response } from "express";
import Category from "../models/category.model";

export const getCategories = async (req: Request, res: Response): Promise<void> =>  {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (err) {
      res.status(404).json({ message: (err as Error).message });
    }
  };


  export const addCategory = async (req: Request, res: Response): Promise<void> =>  {
    try {
      const {image, name, opening} = req.body;
      const category = new Category({image, name, opening});
      const savedCategory = await category.save();
      res.status(200).json(savedCategory);
    } catch (err) {
      res.status(404).json({ message: (err as Error).message });
    }
  };