import { call, takeLatest } from "redux-saga/effects";
import { LIKE_DISLIKE_MOVIE } from "../../constants/action-types";
import feedbackService from "../../services/FeedbackService";
import movieService from "../../services/MoviesService";

function* processLikes({payload}) {
    yield call(feedbackService.processLikeOrDislike,payload);
    yield call(movieService.getMovies,{page: 1});
}

export default function* feedbackSaga() {
    yield takeLatest(LIKE_DISLIKE_MOVIE,processLikes)
}