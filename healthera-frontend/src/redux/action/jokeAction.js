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

export const createJoke = (joke) => {
  return async dispatch => {
    const jokes = await api.createJoke(joke);
    const jokesResult = await api.loadJokes();
    dispatch({
      type: actionType.LOAD_JOKE_SUCCESS,
      jokes: jokesResult
    });
  };
};

export const updateJoke = (joke) => {
  return async dispatch => {

    try{
      const response = await api.updateJoke(joke);
    console.log(response);
    let status = response && response.status;
    
    if(status === 200){
      const jokesResult = await api.loadJokes();
      dispatch({
        type: actionType.LOAD_JOKE_SUCCESS,
        jokes: jokesResult
      });
    }
    
    }catch(error){
      dispatch({
        type: actionType.ERRORTOST_JOKE_FAILED,
        errorMsg:'Joke Not updated' 
      });
    }
    
  };
};

export const removeJoke = (joke) => {
  return async dispatch => {
    const jokes = await api.removeJoke(joke);
    const jokesResult = await api.loadJokes();
    dispatch({
      type: actionType.LOAD_JOKE_SUCCESS,
      jokes: jokesResult
    });
  };
};
