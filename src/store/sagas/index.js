import { put, all, call, takeLatest } from "redux-saga/effects";
import { ADD_MOVIE, GET_MOVIES, LOG_IN } from "../../constants/action-types";
import { getMovies,recieveMovies,saveMovieCount,SaveToken } from "../actions/index";
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

function* actionWatcher() {
  yield takeLatest(ADD_MOVIE, addNewMovie);
  yield takeLatest(LOG_IN, logIn);
  yield takeLatest(GET_MOVIES, fetchMovies);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
