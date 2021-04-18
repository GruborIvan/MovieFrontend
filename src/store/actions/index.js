import {
  GET_MOVIES,
  RECIEVE_MOVIES,
  ADD_MOVIE,
  LOG_IN,
  SAVE_TOKEN,
  SAVE_MOVIE_COUNT,
  LOG_OUT,
} from "../../constants/action-types";

export const getMovies = (page) => {
  return { type: GET_MOVIES, payload: page };
};

export const saveMovieCount = (payload) => {
    return { type: SAVE_MOVIE_COUNT, payload: payload}
};

export const recieveMovies = (data) => {
  return { type: RECIEVE_MOVIES, data };
};

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload: payload };
}

export function LogIn(payload) {
  return { type: LOG_IN, payload };
}

export function LogOut() {
  return { type: LOG_OUT }
}

export function SaveToken(token) {
  return { type: SAVE_TOKEN, payload: token }
}