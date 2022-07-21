const mongoose = require("mongoose");
require("dotenv").config();

const dbName = process.env.DB_NAME;

mongoose
  .connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`We have connection to ${dbName}`))
  .catch((err) =>
    console.log(`We have a problem connecting to the ${dbName}`, err)
  );