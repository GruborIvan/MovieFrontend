import { put, all, call, takeLatest } from "redux-saga/effects";
import { ADD_MOVIE, GET_GENRES, GET_MOVIES, LOG_IN, REGISTER_USER } from "../../constants/action-types";
import { getMovies,recieveMovies,SaveGenres,saveMovieCount,SaveToken } from "../actions/index";
import MoviesService from "../../services/MoviesService";
import AuthService from "../../services/AuthService";

function* fetchMovies(page) {
  yield call(AuthService.Refresh);
  const response = yield call(MoviesService.getMovies, page);
  yield put(recieveMovies(response.data.results));
  yield put(saveMovieCount(response.data.count));
}

function* addNewMovie(newMovie) {
  yield call(AuthService.Refresh);
  yield call(MoviesService.postMovies, newMovie.payload);
  yield put(getMovies());
}

function* logIn({ payload }) {
  const tokens = yield call(AuthService.LogIn, payload.credentials);
  yield put(SaveToken(tokens.access));
  yield call(payload.loginCallback);
}

function* fetchGenres() {
  const {data} = yield call(MoviesService.getGenres);
  console.log(data);
  yield put(SaveGenres(data));
}

function* registerUser(payload) {
  yield call(AuthService.RegisterNewUser,payload.json.user);
  yield call(payload.json.registerCallback);
}

function* actionWatcher() {
  yield takeLatest(ADD_MOVIE, addNewMovie);
  yield takeLatest(LOG_IN, logIn);
  yield takeLatest(GET_MOVIES, fetchMovies);
  yield takeLatest(GET_GENRES, fetchGenres);
  yield takeLatest(REGISTER_USER, registerUser)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
