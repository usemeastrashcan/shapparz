import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
    type: String,
    required: true
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Product =  mongoose.model("Products", productSchema);
export default Product