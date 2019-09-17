import axios from "axios";

class Api {
  constructor() { }

  createJoke = async joke => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const response = await axios.post(`http://localhost:7000`, joke, headers);
    return response.data;
  };

  loadJokes = async () => {
    const jokes = await axios.get(`http://localhost:7000`);
    return jokes.data;
  };
  updateJoke = async joke => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const response = await axios.put(
      `http://localhost:7000/${joke._id}`,
      joke,
      headers
    );
    return response;
  };
  removeJoke = async joke => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const response = await axios.delete(
      `http://localhost:7000/${joke._id}`,
      joke,
      headers
    );
    return response;
  };
  randomJoke = async () => { };
}

export default Api;
