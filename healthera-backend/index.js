const express = require("express");
const cors = require("cors");
const boom = require("boom");
const bodyParser = require("body-parser");
const jokeRouter = require("./src/routes/jokeRoute");
require("dotenv").config();
const mongoose = require("mongoose");
const cronJob = require("./src/cronJob");
const port = process.env.PORT || 5001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//let MongoURI = "mongodb://jitendra:jitendra123@ds247569.mlab.com:47569/jitendb";
let MongoURI = "mongodb://localhost:27017/jokeDB";
let options = {
  keepAlive: 30000,
  useNewUrlParser: true
};
mongoose.Promise = global.Promise;
mongoose
  .connect(MongoURI, options)
  .then(() => {
    console.log("Ola!! Database connect Successfully");
    cronJob.initialJob();
  })
  .catch(error => {
    console.log("Oops!!! Can't connect right Now!!!");
  });

app.use(cors());
app.use("/", jokeRouter);

app.use("/*", (req, res) => {
  res.send(boom.badRequest("invalid url"));
});

app.listen(port, function () {
  console.log(`Backend server Running on port: ${port}`);
});
