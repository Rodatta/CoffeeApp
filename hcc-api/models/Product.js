const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: Array
    },
    price: {
      type: [Number],
      required: true,
    },
    desc: {
      type: String,
      maxlength: 200,
      required: false,
    },
    sizes:{
      type: Array, 
      required: true
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
