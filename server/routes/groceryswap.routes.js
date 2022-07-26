const groceryswapController = require("../controllers/groceryswap.controller");
const { authenticate } = require("../middleware/jwt.config.js");

module.exports = (app) => {
    app.post("/api/groceryswap/create", authenticate, groceryswapController.createNewItem);
    app.get("/api/groceryswap/allItems", groceryswapController.findAllItems);
    app.get("/api/groceryswap/:id", groceryswapController.getOneItem);
    app.get("/api/groceryswap/myItems/:username", authenticate, groceryswapController.findAllItemsByUser);
    app.put("/api/groceryswap/:id", groceryswapController.updateItem);
    app.delete("/api/groceryswap/:id", groceryswapController.deleteItem);
}