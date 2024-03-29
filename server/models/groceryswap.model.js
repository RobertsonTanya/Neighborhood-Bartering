const mongoose = require("mongoose");
const GroceryswapSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item Name is requried"],
      minlength: [3, "Item Name must be at least 3 characters"],
      maxlength: [20, "Item Name cannot exceed 20 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is requried"],
      minlength: [10, "Must be at least 10 Characters"],
      maxlength: [100, "Cannot exceed 100 Characters"],
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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);
const GrocerySwap= mongoose.model("GrocerySwap", GroceryswapSchema)

module.exports = GrocerySwap;