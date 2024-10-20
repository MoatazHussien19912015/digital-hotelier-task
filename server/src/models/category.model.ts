import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    id: {
        type: String,
        default: () => Math.floor(Math.random()*1000).toString().padEnd(4, '0')
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
   
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;