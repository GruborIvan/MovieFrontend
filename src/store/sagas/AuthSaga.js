import { put, call, takeLatest } from "redux-saga/effects";
import { LOG_IN, REGISTER_USER } from "../../constants/action-types";
import { SaveToken } from "../actions/index";
import AuthService from "../../services/AuthService";

function* logIn({ payload }) {
    const tokens = yield call(AuthService.LogIn, payload.credentials);
    yield put(SaveToken(tokens.access));
    yield call(payload.loginCallback);
}

function* registerUser(payload) {
    yield call(AuthService.RegisterNewUser,payload.json.user);
    yield call(payload.json.registerCallback);
}

export default function* authSaga() {
    yield takeLatest(LOG_IN,logIn)
    yield takeLatest(REGISTER_USER,registerUser)
}