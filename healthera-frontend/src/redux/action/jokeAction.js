import Api from "./api";
import * as actionType from "./actionType";
const api = new Api();

export const loadJokes = () => {
  return async dispatch => {
    const jokes = await api.loadJokes();
    dispatch({
      type: actionType.LOAD_JOKE_SUCCESS,
      jokes
    });
  };
};

export const createJoke = () => {
  const joke = {
    title: "security is myth my friend"
  };
  return async dispatch => {
    const jokes = await api.createJoke(joke);
    dispatch({
      type: actionType.CREATE_JOKE_SUCCESS,
      jokes
    });
  };
};
//"5d0378652ad536352435c5ff"
//"5d0373184eb06c3f78c6d1f6"
//"5d03746236b03249e899d29b"
//5d0380e21386705078a7a10f
export const updateJoke = () => {
  const joke = {
    id: "5d037fd6f7ec434a74fbccd9",
    title: "game of throne"
  };
  return async dispatch => {
    const jokes = await api.updateJoke(joke);
    dispatch({
      type: actionType.UPDATE_JOKE_SUCCESS,
      jokes
    });
  };
};

export const removeJoke = () => {
  const joke = {
    id: "5d038405cc56dd11d49b535a"
  };
  return async dispatch => {
    const jokes = await api.removeJoke(joke);
    dispatch({
      type: actionType.DELETE_JOKE_SUCCESS,
      jokes
    });
  };
};
