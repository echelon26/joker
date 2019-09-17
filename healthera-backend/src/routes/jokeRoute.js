const express = require("express");
const jokeRouter = express.Router();
const jokeModel = require("../model/jokeModel");

jokeRouter
  .get("/", (req, res) => {
    jokeModel.find((error, jokes) => {
      let RandomNumber = Math.floor(Math.random() * jokes.length);
      randomJoke = jokes[RandomNumber];
      error || jokes==null
        ? res.status(500).json({ message: "No jokes found" })
        : res.status(200).json({ jokes, randomJoke });
    });
  })

  .post("/", (req, res) => {
    let jokes = new jokeModel(req.body);
    jokes
      .save()
      .then(joke => {
        let jokeId=joke._id;
        res.status(200).json({ jokeId, message: "joke created successfully" });
      })
      .catch(() => {
        res.status(500).json({ message: "Oops!! Joke not inserted" });
      });
  })

  .put("/:id", (req, res) => {
    console.log(req);
    jokeModel.findByIdAndUpdate(
      req.body.id,
      { title: req.body.title },
      (error, data) => {
console.log(req.body);
        error || data==null
          ? res.status(500).json({ message: "Joke is not updated" })
          : res.status(200).json({ message: "Joke updated successfully" });
      }
    );
  })

  .delete("/:id", (req, res) => {
    jokeModel.findByIdAndRemove(req.params.id, (error, jokes) => {
      error || jokes==null
        ? res.status(500).json({ message: "Joke is not existing" })
        : res
          .status(200)
          .json({ message: "Joke removed successfully from Database" });
    });
  });
module.exports = jokeRouter;
