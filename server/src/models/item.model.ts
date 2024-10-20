import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
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
            currency: {type: String}, 
            value: {type: Number},
            
        },
        required: true,
        _id: false
      },
      tags: {
        type: Array,
        default: []
      },
      categoryId: {
        type: mongoose.Schema.Types.ObjectId, ref:'Category'
      }
   
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;