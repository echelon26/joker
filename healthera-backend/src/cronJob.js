require("dotenv").config();
const fs = require("fs");
const Promise = require("bluebird");
const jokeModel = require("./model/jokeModel");
const parse = Promise.promisify(require("csv-parse"));
const { CSV } = process.env;

const insertJokeFromCsvFile = joke => {
  response = fs.readFileSync(joke, "utf8");
  //console.log(response);
  return parse(response, {});
};

const initialJob = async () => {
  await jokeModel.deleteMany({});
  const jokes = await insertJokeFromCsvFile(CSV);
  const jokeResponse = await jokes.map(joke =>
    jokeModel.create({ title: joke[0] })
  );
  console.log(`Inserted ${jokeResponse.length} jokes into database`);
};

module.exports = { initialJob };
