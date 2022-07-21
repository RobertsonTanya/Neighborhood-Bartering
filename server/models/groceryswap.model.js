const mongoose = require("mongoose");
const GroceryswapSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item Name is requried"],
      minlength: [3, "Item Name must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is requried"],
      minlength: [20, "Must be at least 20 Characters"],
      maxlength: [200, "Cannot be more than 200 Characters"],
    },
    sugItem: {
      type: String,
      required: [true, "Suggested item is required"],
      minlength: [3, "Suggested Item must be at least 3 characters"],
    },
    imgUrl: {
      type: String,
      required: [true, "Image Url is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("GrocerySwap", GroceryswapSchema);