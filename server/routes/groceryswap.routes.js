const groceryswapController = require("../controllers/groceryswap.controller");
const GrocerySwap = require("../controllers/groceryswap.controller");

module.exports = (app) => {
    app.post("/api/GrocerySwap/create", groceryswapController.createNewItem);
    app.get("/api/GrocerySwap/myItems", groceryswapController.findAllItems);
    app.put("/api/GrocerySwap/:id", groceryswapController.updateItem);
    app.delete("/api/GrocerySwap/:id", groceryswapController.deleteItem);
}