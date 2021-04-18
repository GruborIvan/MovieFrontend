import {
  RECIEVE_MOVIES,
  ADD_MOVIE,
  SAVE_TOKEN,
  SAVE_MOVIE_COUNT,
  LOG_OUT,
} from "../../constants/action-types";

const initialState = {
  token: "",
  movies: [],
  movieCount: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case RECIEVE_MOVIES: {
      return { ...state, movies: action.data };
    }
    case ADD_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, action.json],
      };
    }
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case SAVE_MOVIE_COUNT: {
        return {
            ...state, 
            movieCount: action.payload,
        }
    }
    case LOG_OUT: {
      return { ...state, token: '' }
    }
    default: {
      return { ...state };
    }
  }

}

export default rootReducer;
