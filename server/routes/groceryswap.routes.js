const groceryswapController = require("../controllers/groceryswap.controller");
const GrocerySwap = require("../controllers/groceryswap.controller");

module.exports = (app) => {
    app.post("/api/GrocerySwap/create", groceryswapController.createNewItem);
    app.get("/api/GrocerySwap/allItems", groceryswapController.findAllItems);
    app.get("/api/GrocerySwap/myItems/:createdBy", groceryswapController.findAllItemsByUser);
    app.put("/api/GrocerySwap/:id", groceryswapController.updateItem);
    app.delete("/api/GrocerySwap/:id", groceryswapController.deleteItem);
}