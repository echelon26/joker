const express = require("express");
const jokeRouter = express.Router();
const jokeModel = require("../model/jokeModel");

jokeRouter
  .get("/", (req, res) => {
    jokeModel.find((error, jokes) => {
      error
        ? res.status(404).json({ error: "No jokes found" })
        : res.status(200).json(jokes);
    });
  })

  .post("/", (req, res) => {
    let jokes = new jokeModel(req.query);
    jokes
      .save()
      .then(joke => {
        res
          .status(200)
          .json({ message: "jokes inserted into database successfully" });
      })
      .catch(() => {
        res.status(400).json({ error: "Oops!! Joke not inserted" });
      });
  })

  .put("/:id", (req, res) => {
    jokeModel.findByIdAndUpdate(
      req.params.id,
      { title: req.query.title },
      (error, data) => {
        error
          ? res.status(404).json({ error: "Joke is not existing" })
          : res.status(200).json({ message: "Joke updated successfully" });
      }
    );
  })

  .delete("/:id", (req, res) => {
    jokeModel.findByIdAndRemove(req.params.id, (error, jokes) => {
      error
        ? res.status(404).json({ error: "Joke is not existing" })
        : res
            .status(200)
            .json({ message: "Joke removed successfully from Database" });
    });
  });
module.exports = jokeRouter;
