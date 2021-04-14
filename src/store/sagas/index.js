import { put, all, call, takeLatest } from 'redux-saga/effects';
import { RECIEVE_MOVIES,ADD_MOVIE,GET_MOVIES } from "../../constants/action-types";

const baseUrl = 'http://localhost:8000/movies';

function* fetchMovies() {
    const answer = yield call(fetch,baseUrl);
    const response = yield answer.json();
    yield put({ type: RECIEVE_MOVIES, json: response })
}

function* addNewMovie(newMovie) {
    console.log('EEJE')
    console.log(JSON.stringify(newMovie.payload));
    const response = yield fetch(baseUrl,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie.payload)
    });
    console.log('RESPONSE')
    console.log(response);
}

function* actionWatcher() {
    yield takeLatest(ADD_MOVIE,addNewMovie);
    yield takeLatest(GET_MOVIES,fetchMovies)
}

export default function* rootSaga() {
    yield all([ fetchMovies(), RECIEVE_MOVIES, actionWatcher() ]);
}