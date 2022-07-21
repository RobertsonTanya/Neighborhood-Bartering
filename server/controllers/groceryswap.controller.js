const GrocerySwap = require("../models/groceryswap.model");

module.exports = {
  createNewItem: (req, res) => {
    GrocerySwap.create(req.body)
      .then((newItem) => {
        console.log(newItem);
        res.json(newItem);
      })
      .catch((err) => res.status(400).json({ err }));
  },

  findAllItems: (req, res) => {
    GrocerySwap.find()
      .then((allItems) => {
        console.log(allItems);
        res.json(allItems);
      })
      .catch((err) => {
        console.log("error finding items");
        res.status(400).json(err);
      });
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

// We'll need a findAllItemsbyUser and maybe this:

//   showAllItems: (req, res) => {
//     GrocerySwap.find()
//       .populate("createdBy", "username email")
//       .then((allitems) => {
//         console.log(allitems);
//         res.json(allitems);
//       })
//       .catch((err) => {
//         console.log("error showing all items");
//         res.status(400).json(err);
//       });
//   },

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
