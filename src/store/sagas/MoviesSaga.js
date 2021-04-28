import { put, call, takeLatest } from "redux-saga/effects";
import { ADD_MOVIE, ADD_TO_MOVIELIST, DETAILS_VISIT, GET_GENRES, GET_MOVIES, GET_MY_MOVIELIST, REMOVE_FROM_MOVIELIST } from "../../constants/action-types";
import { getMovies,recieveMovies,SaveGenres,saveMovieCount } from "../actions/index";
import MoviesService from "../../services/MoviesService";
import AuthService from "../../services/AuthService";

function* fetchMovies(params) {
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getMovies, params);
    yield put(recieveMovies(response.data.results));
    yield put(saveMovieCount(response.data.count));
}

function* addNewMovie(newMovie) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.postMovies, newMovie.payload);
    yield put(getMovies());
}

function* fetchGenres() {
    yield call(AuthService.Refresh);
    const {data} = yield call(MoviesService.getGenres);
    yield put(SaveGenres(data));
}

function* updateDetailsVisit({movieId}) {
    let params = {movId : movieId};
    yield call(MoviesService.updateMovieDetailsVisit,params);
}

function* getMyMovies() {
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getMyMovies)
    yield put(recieveMovies(response.data));
}

function* addToMovieList({payload}) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.addMovieToWatchList,payload)
}

function* removeFromMovieList({payload}) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.addMovieToWatchList,payload.payload)
}

export default function* moviesSaga() {
    yield takeLatest(ADD_MOVIE,addNewMovie)
    yield takeLatest(GET_MOVIES,fetchMovies)
    yield takeLatest(GET_GENRES,fetchGenres)
    yield takeLatest(DETAILS_VISIT,updateDetailsVisit)
    yield takeLatest(GET_MY_MOVIELIST,getMyMovies)
    yield takeLatest(ADD_TO_MOVIELIST,addToMovieList)
    yield takeLatest(REMOVE_FROM_MOVIELIST,removeFromMovieList)
}