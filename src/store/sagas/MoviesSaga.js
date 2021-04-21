import { put, call, takeLatest } from "redux-saga/effects";
import { ADD_MOVIE, FILTER_MOVIES, FILTER_MOVIES_GENRE, GET_GENRES, GET_MOVIES } from "../../constants/action-types";
import { getMovies,recieveMovies,SaveGenres,saveMovieCount } from "../actions/index";
import MoviesService from "../../services/MoviesService";
import AuthService from "../../services/AuthService";

function* fetchMovies(page) {
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getMovies, page);
    yield put(recieveMovies(response.data.results));
    yield put(saveMovieCount(response.data.count));
}

function* filterMovies(entry) {
    console.log(entry);
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getFilteredMovies, entry);
    yield put(recieveMovies(response.data.results));
    yield put(saveMovieCount(response.data.count));
}

function* fetchMoviesByGenre(payload) {
    console.log(payload);
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getMoviesFilteredById,payload);
    yield put(recieveMovies(response.data.results));
    yield put(saveMovieCount(response.data.count));
}

function* addNewMovie(newMovie) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.postMovies, newMovie.payload);
    yield put(getMovies());
}

function* fetchGenres() {
    const {data} = yield call(MoviesService.getGenres);
    console.log(data);
    yield put(SaveGenres(data));
}

export default function* moviesSaga() {
    yield takeLatest(ADD_MOVIE,addNewMovie)
    yield takeLatest(GET_MOVIES,fetchMovies)
    yield takeLatest(GET_GENRES,fetchGenres)
    yield takeLatest(FILTER_MOVIES,filterMovies)
    yield takeLatest(FILTER_MOVIES_GENRE, fetchMoviesByGenre)
}