const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello Rehman");
// });

// app.get("/visitor", (req, res) => {
//   res.send("Hello Visitor");
// });

const connectDB = require("./config/db");

//Load Config
dotenv.config({ path: "./config/config.env" });
connectDB();

//Routes
const myroute = require("./routes/index");

app.use("/", myroute);

//Routes
// app.use('/', require('./routes/index'));

app.listen(3000);
