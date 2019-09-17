import Api from "./api";
import * as actionType from "./actionType";
const api = new Api();

export const loadJokes = () => {
  return async dispatch => {
    const response = await api.loadJokes();
    dispatch({
      type: actionType.LOAD_JOKE_SUCCESS,
      jokes:response[`data`]
    });
  };
};

export const createJoke = (joke) => {
  return async dispatch => {
    try {
      const response = await api.createJoke(joke);
      let status = response && response.status;
      if(status === 200){
        
        const jokesResult = await api.loadJokes();
        debugger;
        return dispatch({
          type: actionType.LOAD_JOKE_SUCCESS,
          jokes: jokesResult[`data`],
          message:response.data.message
        });
      }
    }
    catch(error){
      dispatch({
        type: actionType.ERRORTOST_JOKE_FAILED,
        message: jokesResult.message
      }); 
    }
    
  };
};

export const updateJoke = (joke) => {
  return async dispatch => {
    try {
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
    } catch(error){
      dispatch({
        type: actionType.ERRORTOST_JOKE_FAILED,
        message:'Joke Not updated' 
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
