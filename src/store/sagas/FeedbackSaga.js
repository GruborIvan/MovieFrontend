import { call, takeLatest } from "redux-saga/effects";
import { LIKE_DISLIKE_MOVIE, POST_COMMENT } from "../../constants/action-types";
import feedbackService from "../../services/FeedbackService";
import movieService from "../../services/MoviesService";
import authService from '../../services/AuthService'

function* processLikes({payload}) {
    yield call(feedbackService.processLikeOrDislike,payload);
    yield call(movieService.getMovies,{page: 1});
}

function* addComment({payload}) {
    yield call(authService.Refresh)
    yield call(feedbackService.addComment,payload)
}

export default function* feedbackSaga() {
    yield takeLatest(LIKE_DISLIKE_MOVIE,processLikes)
    yield takeLatest(POST_COMMENT,addComment)
}