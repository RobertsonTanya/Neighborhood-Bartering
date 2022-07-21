const mongoose = require("mongoose");

const dbName = "GrocerySwap";

mongoose
  .connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`We have connection to ${dbName}`))
  .catch((err) =>
    console.log(`We have a problem connecting to the ${dbName}`, err)
  );