import { all } from "redux-saga/effects"
import authSaga from './AuthSaga'
import feedbackSaga from "./FeedbackSaga";
import moviesSaga from './MoviesSaga'

export default function* rootSaga() {
  yield all([moviesSaga(), authSaga(), feedbackSaga()]);
}
