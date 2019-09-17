import * as actionType from "../action/actionType";

const initialState={
  jokes:null,
  message:null
};
const jokeReducer = (state=initialState , action) => {
  switch (action.type) {
    case actionType.CREATE_JOKE_SUCCESS: {
      debugger;
      return { ...state, jokes: action.jokes,message:action.message};
    }

    case actionType.LOAD_JOKE_SUCCESS: {
      return  { ...state, jokes: action.jokes,message:action.message};
    }

    case actionType.GET_RANDOM_JOKE_SUCCESS: {
      return { ...initialState, joke: action.joke };
    }
    case actionType.ERRORTOST_JOKE_FAILED: {
      return { ...initialState, message: action.message};
    }
    case actionType.UPDATE_JOKE_SUCCESS: {
      return { ...initialState, jokes: action.jokes };
    }

    case actionType.DELETE_JOKE_SUCCESS: {
      return { ...initialState, jokes: action.jokes };
    }

    default:
      return initialState;
  }
};

export default jokeReducer;
