const express = require("express");
const router = require("./src/routes/api");
const app = express();
const bodyParser = require("body-parser");

//Security middleware import :
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//database :
const mongoose = require("mongoose");

//security middleware implement :

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Body-parser implement :
app.use(bodyParser.json());

//rate limit implementation :

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
});
app.use(limiter);

//MongoDB connection :
const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
let password = process.env.PASSWORD;
let URI = `mongodb+srv://drmizanurrahman452:${password}@cluster0.5vetql5.mongodb.net/StudentRegister?retryWrites=true&w=majority`;
// let OPTION = { user: "", pass: "", autoIndex: true };
mongoose
  .connect(URI)
  .then(() => console.log("Database connected ."))
  .catch((err) => console.log(err));

//implement router
app.use("/api/v1", router);

//Undefined routing :

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "No route found" });
});
module.exports = app;
