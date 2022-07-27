const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "text is required for comment"],
    },
    groceryswap_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GrocerySwap",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
