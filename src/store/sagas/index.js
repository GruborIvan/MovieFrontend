import { put, all, call, takeLatest } from 'redux-saga/effects';
import { RECIEVE_MOVIES, ADD_MOVIE, GET_MOVIES, LOG_IN, SAVE_TOKEN } from "../../constants/action-types";
import { getMovies } from '../../services/BaseApiService';

const baseUrl = 'http://localhost:8000/movies';
const logInUrl = 'http://localhost:8000/token';

function* fetchMovies() {
    const response = yield getMovies();
    yield put({ type: RECIEVE_MOVIES, json: response })
}

function* addNewMovie(newMovie) {
    console.log(JSON.stringify(newMovie.payload));

    //axios.post(JSON.stringify(newMovie.payload));

    const response = yield fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie.payload)
    })
    console.log(response)
}

function* logIn(credentials) {
    const response = yield call(fetch, logInUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials.payload)
    })
    const data = yield response.json()
    yield put({ type: SAVE_TOKEN, json: data });
}

function* actionWatcher() {
    yield takeLatest(ADD_MOVIE, addNewMovie)
    yield takeLatest(LOG_IN, logIn)
    yield takeLatest(GET_MOVIES, fetchMovies)
}

export default function* rootSaga() {
    yield all([fetchMovies(), RECIEVE_MOVIES, actionWatcher()]);
}