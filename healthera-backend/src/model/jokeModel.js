const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: x => {
        return x !== "" || x !== undefined;
      }
    }
  },
  updation_date: { type: Date, default: Date.now },
  creation_date: { type: Date, default: Date.now }
});

const jokeModel = mongoose.model("jokedbmodel", jokeSchema);
module.exports = jokeModel;
