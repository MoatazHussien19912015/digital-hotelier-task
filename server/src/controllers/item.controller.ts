import { Request, Response } from "express";
import Category from "../models/category.model";
import Item from "../models/item.model";

export const getItemsByCategory = async (req: Request, res: Response): Promise<void> =>  {
    try {
      const {cat} = req.query;
      // get category id
      const category = await Category.findOne({id: cat});
      if (!category) {
         res.status(404).json({message: 'that category is not exist'});
         return;
      }
      const items = await Item.find({categoryId: category._id});
      
        res.status(200).json(items);
        return;

      
    } catch (err) {
      res.status(404).json({ message: (err as Error).message });
    }
  };

  export const addItem = async (req: Request, res: Response): Promise<void> =>  {
    try {
      const {image, name, description, price, tags, categoryId} = req.body;
      const item = new Item({image, name, description, price, tags, categoryId});
      const savedItem = await item.save();
      res.status(200).json(savedItem);
    } catch (err) {
      res.status(404).json({ message: (err as Error).message });
    }
  };