require("dotenv").config();
const cookieParser = require('cookie-parser');

// process.env.DB_NAME etc.


const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/groceryswap.routes")(app);

app.listen(8000, () => {
    console.log(`Listening on port: 8000`);
});