const GrocerySwap = require("../models/groceryswap.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { populate } = require("../models/user.model");

module.exports = {
  createNewItem: async (req, res) => {
    const {body}= req;
    let newGroceryObject = new GrocerySwap(body);
    const decodedJWT = jwt.decode(req.cookies.usertoken, {
      complete: true})
    newGroceryObject.createdBy = decodedJWT.payload.id;
    try{
      newGroceryObject= await newGroceryObject.save();
      res.json(newGroceryObject);
      return;
    }catch (error) {
      console.log('error', error);
      res.status(400).json(error);
      return;
    }
    },

  findAllItems: async (req, res) => {
    console.log("line 25******")
    try {
      const allItems= await GrocerySwap.find({})
        .populate("createdBy")
        .populate({
          path: "comments",
          model: "Comment",
          populate: {
            path: "user_id",
            model: "User",
          },
        })
        .exec();
      console.log(allItems);
      res.json(allItems);
    }catch (error) {
      console.log('err block');
      console.log(error);
      console.log(error.response);
      res.status(400).json(error);
    }
  },
  
  getOneItem: (req, res) => {
    GrocerySwap.findOne({ _id: req.params.id })
      .then((oneItem) => {
        console.log(oneItem);
        res.json(oneItem);
      })
      .catch((err) => {
        console.log("error fnding item");
        res.status(400).json(err);
      });
  },


  findAllItemsByUser: (req, res) => {
      console.log("=====REQ", req.params)
      console.log("=====PAYLOAD", req.jwtpayload);
    if(req.jwtpayload.username !== req.params.userLoggedIn){
      console.log('not the user')

      User.findOne({username: req.params.username})
        .then((userNotLoggedIn)=>{
          console.log("user not logged in", userNotLoggedIn)
          GrocerySwap.find({createdBy: userNotLoggedIn._id})
            .populate("createdBy", "username")
            .then((allItemsFromUser)=>{
              console.log(allItemsFromUser);
              res.json(allItemsFromUser);
            })
            .catch((err)=>{
              console.log(err);
              res.status(400).json();
            })
        })
    } else {
      console.log('current user');
      GrocerySwap.find({createdBy: req.jwtpayload.id})
        .populate("createdBy", "username")
        .then((allItemsFromLoggedInUser)=>{
          console.log(allItemsFromLoggedInUser);
          res.json(allItemsFromLoggedInUser);
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json();
        })
    }
  },

  updateItem: (req, res) => {
    GrocerySwap.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedItem) => res.json(updatedItem))
      .catch((err) => {
        console.log("error updating item");
        res.status(400).json(err);
      });
  },

  deleteItem: (req, res) => {
    GrocerySwap.deleteOne({ _id: req.params.id })
      .then((deletedItem) => {
        console.log(deletedItem);
        res.json({ deleted: deletedItem });
      })
      .catch((err) => {
        console.log("error deleting item");
        res.status(400).json(err);
      });
  },
};
