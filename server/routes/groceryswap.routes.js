const groceryswapController = require("../controllers/groceryswap.controller");
const { authenticate } = require("../middleware/jwt.config.js");

module.exports = (app) => {
    app.post("/api/GrocerySwap/create", authenticate, groceryswapController.createNewItem);
    app.get("/api/GrocerySwap/allItems", groceryswapController.findAllItems);
    app.get("/api/GrocerySwap/myItems/:username", authenticate, groceryswapController.findAllItemsByUser);
    app.put("/api/GrocerySwap/:id", groceryswapController.updateItem);
    app.delete("/api/GrocerySwap/:id", groceryswapController.deleteItem);
}