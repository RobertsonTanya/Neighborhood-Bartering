const {createNewItem, findAllItems, findAllItemsByUser, updateItem, deleteItem} = require("../controllers/groceryswap.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/GrocerySwap/:user_id", authenticate, createNewItem);
    app.get("/api/GrocerySwap", findAllItems);
    app.get("/api/GrocerySwap/myItems/:createdBy",findAllItemsByUser);
    app.put("/api/GrocerySwap/:id", updateItem);
    app.delete("/api/GrocerySwap/:id", deleteItem);
}