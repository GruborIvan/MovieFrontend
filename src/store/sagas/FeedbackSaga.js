import { call, takeLatest,put } from "redux-saga/effects";
import { GET_COMMENTS, LIKE_DISLIKE_MOVIE, POST_COMMENT } from "../../constants/action-types";
import feedbackService from "../../services/FeedbackService";
import movieService from "../../services/MoviesService";
import authService from '../../services/AuthService'
import { SaveComments } from "../actions";

function* processLikes({payload}) {
    yield call(feedbackService.processLikeOrDislike,payload);
    yield call(movieService.getMovies,{page: 1});
}

function* addComment({payload}) {
    console.log(payload)
    yield call(authService.Refresh)
    yield call(feedbackService.addComment,payload)
    const comments = yield call(feedbackService.getComments,payload.movie)
    yield put(SaveComments(comments))
}

function* getComments({payload}) {
    const comments = yield call(feedbackService.getComments,payload)
    yield put(SaveComments(comments))
}

export default function* feedbackSaga() {
    yield takeLatest(LIKE_DISLIKE_MOVIE,processLikes)
    yield takeLatest(POST_COMMENT,addComment)
    yield takeLatest(GET_COMMENTS,getComments)
}