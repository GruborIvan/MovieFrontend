import {
  RECIEVE_MOVIES,
  ADD_MOVIE,
  SAVE_TOKEN,
  SAVE_MOVIE_COUNT,
  LOG_OUT,
  SAVE_GENRES,
} from "../../constants/action-types";

//import combineReducers from "react-combine-reducers";
//import MovieReducer from "./MovieReducer";
//import AuthReducer from "./AuthReducer";

const initialState = {
  token: "",
  movies: [],
  movieCount: 0,
  movieGenres: [],
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
      };
    }
    case SAVE_GENRES: {
      return {
        ...state,
        movieGenres: action.json,
      };
    }
    case LOG_OUT: {
      return { ...state, token: "" };
    }
    default: {
      return { ...state };
    }
  }
}

// const rootReducer =  combineReducers({
//     MovieReducer,
//     AuthReducer
// });

export default rootReducer;
