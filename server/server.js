require("dotenv").config();
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.MY_PORT;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/groceryswap.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
