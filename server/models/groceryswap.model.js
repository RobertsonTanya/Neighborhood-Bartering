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
      minlength: [10, "Must be at least 10 Characters"],
      maxlength: [200, "Cannot exceed 200 Characters"],
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
    altTrade: {
      type: Boolean,
    },
    altMessage: {
      type: String,
      maxlength: [150, "Cannot exceed 150 characters"]
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("GrocerySwap", GroceryswapSchema);