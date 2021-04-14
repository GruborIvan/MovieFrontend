import { put, all, call } from 'redux-saga/effects';
import { RECIEVE_MOVIES } from "../../constants/action-types";

function* fetchMovies() {
    const answer = yield call(fetch,'http://127.0.0.1:8000/movies');
    const response = yield answer.json();
    yield put({ type: RECIEVE_MOVIES, json: response })
}

export default function* rootSaga() {
    yield all([ fetchMovies(), RECIEVE_MOVIES]);
}