import {
  GET_MOVIES,
  RECIEVE_MOVIES,
  ADD_MOVIE,
  LOG_IN,
  SAVE_TOKEN,
  SAVE_MOVIE_COUNT,
  LOG_OUT,
  GET_GENRES,
  SAVE_GENRES,
  REGISTER_USER,
  LIKE_DISLIKE_MOVIE,
  DETAILS_VISIT,
  POST_COMMENT,
  GET_COMMENTS,
  SAVE_COMMENTS,
} from "../../constants/action-types";

export const getMovies = (payload) => {
  return { type: GET_MOVIES, payload: payload };
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

export function GetGenres() {
  return { type: GET_GENRES }
}

export function SaveGenres(genres) {
  return { type: SAVE_GENRES, json: genres }
}

export function RegisterUser(payload) {
  return { type: REGISTER_USER, json: payload }
}

export function ReactToMovie(movieId,reaction) {
  return { type: LIKE_DISLIKE_MOVIE, payload: {movie: movieId,reaction: reaction}}
}

export function DetailsVisit(movieId) {
  return { type: DETAILS_VISIT, movieId: movieId }
}

export function PostAComment(movieId,content) {
  return { type: POST_COMMENT, payload: { movie: movieId, content: content }}
}

export function GetComments(movieId) {
  return {type: GET_COMMENTS, payload: movieId}
}

export function SaveComments(comments) {
  return { type: SAVE_COMMENTS, payload: comments }
}