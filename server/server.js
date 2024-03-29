require("dotenv").config();
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.MY_PORT;

app.use(cookieParser());
app.use(cors({
    origin: `http://localhost:3000`,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/groceryswap.routes")(app);
require("./routes/user.routes")(app);
require("./routes/comment.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
