import { put, call, takeLatest } from "redux-saga/effects";
import { ADD_MOVIE, ADD_TO_MOVIELIST, DETAILS_VISIT, FETCH_FROM_OMDB, GET_GENRES, GET_MOVIES, GET_MY_MOVIELIST, GET_POPULAR, GET_RELATED_MOVIES, MARK_AS_WATCHED, REMOVE_FROM_MOVIELIST } from "../../constants/action-types";
import { getMovies,recieveMovies,SaveGenres,saveMovieCount, saveSidebarContent } from "../actions/index";
import MoviesService from "../../services/MoviesService";
import AuthService from "../../services/AuthService";
import OmdbService from "../../services/OmdbService";

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
    yield put(recieveMovies([]));
    const response = yield call(MoviesService.getMyMovies)
    yield put(recieveMovies(response.data));
}

function* addToMovieList({payload}) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.addMovieToWatchList,payload)
    yield call(fetchMovies,{page: 1})
}

function* removeFromMovieList({payload}) {
    yield call(AuthService.Refresh);
    yield call(MoviesService.removeMovieFromWatchlist,payload)
    yield call(getMyMovies)
}

function* markMovieWatched({payload}) {
    yield call(MoviesService.addMovieToWatchList,payload.payload)

    if (payload.path === '/movies') {
        yield call(fetchMovies,{page: 1})
    }
    else {
        yield call(getMyMovies)
    }
}

function* getPopularMovies() {
    const response = yield call(MoviesService.getPopularMovies)
    yield put(saveSidebarContent(response))
}

function* getMoviesRelated({payload}) {
    yield call(AuthService.Refresh);
    const response = yield call(MoviesService.getMovies, { payload: { genre: payload }});
    yield put(saveSidebarContent(response.data.results))
}

function* fetchMoviesFromOmdbAPI({payload}) {
    yield call(AuthService.Refresh);
    const response = yield call(OmdbService.fetchMoviesFromOmdb,payload);

    const {data} = yield call(MoviesService.getGenres);
    const genre = yield call(OmdbService.filterGenres,response.Genre.split(','),data);

    const movie = { title: response.Title, description: response.Plot, imageurl: response.Poster, genre: genre }
    yield call(addNewMovie,{payload : movie})
}

export default function* moviesSaga() {
    yield takeLatest(ADD_MOVIE,addNewMovie)
    yield takeLatest(GET_MOVIES,fetchMovies)
    yield takeLatest(GET_GENRES,fetchGenres)
    yield takeLatest(DETAILS_VISIT,updateDetailsVisit)
    yield takeLatest(GET_MY_MOVIELIST,getMyMovies)
    yield takeLatest(ADD_TO_MOVIELIST,addToMovieList)
    yield takeLatest(REMOVE_FROM_MOVIELIST,removeFromMovieList)
    yield takeLatest(MARK_AS_WATCHED,markMovieWatched)
    yield takeLatest(GET_POPULAR,getPopularMovies)
    yield takeLatest(GET_RELATED_MOVIES, getMoviesRelated)
    yield takeLatest(FETCH_FROM_OMDB, fetchMoviesFromOmdbAPI)
}