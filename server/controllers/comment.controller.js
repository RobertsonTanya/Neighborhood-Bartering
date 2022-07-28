const Comment= require('../models/comment.model');

const jwt= require("jsonwebtoken");
const GrocerySwap= require('../models/groceryswap.model');

const addNewComment = async (req, res) => {
  const { body, params } = req;
  console.log(body, params);
  let newComment = new Comment(body);
  newComment.groceryswap_id = params.groceryswapId;
  console.log("comment doc after adding grocery swap id", newComment);
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  newComment.user_id = decodedJwt.payload.id;
  console.log("after adding post and user id to comment doc", newComment);

  try {
    newComment = await newComment.save()
    newComment= await newComment.populate('user_id')
      
    groceryswapQuery = await GrocerySwap.findByIdAndUpdate(
      { _id: params.groceryswapId },
      { $push: { comments: newComment._id } },
      { new: true, useFindAndModify: true }
    );
    res.json({ newComment, groceryswapQuery });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { addNewComment };
