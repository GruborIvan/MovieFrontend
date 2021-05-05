import { call, takeLatest,put } from "redux-saga/effects";
import { GET_COMMENTS, LIKE_DISLIKE_MOVIE, POST_COMMENT } from "../../constants/action-types";
import feedbackService from "../../services/FeedbackService";
import authService from '../../services/AuthService'
import { ClearComments, recieveMovies, SaveCommentCount, SaveComments, saveMovieCount } from "../actions";
import movieService from "../../services/MoviesService";

function* processLikes({payload}) {
    yield call(feedbackService.processLikeOrDislike,payload.payload);
    if (payload.path === '/movies') {
        const response = yield call(movieService.getMovies, {page: 1});
        yield put(recieveMovies(response.data.results));
        yield put(saveMovieCount(response.data.count));
    }
    else {
        const response = yield call(movieService.getMyMovies)
        yield put(recieveMovies(response.data));
    }
}

function* addComment({payload}) {
    yield call(authService.Refresh)
    const resp = yield call(feedbackService.addComment,payload)
    yield put(SaveComments(resp))
}

function* getComments(payload) {
    if (payload.payload.page === 1) {
        yield put(ClearComments())
    }
    const comments = yield call(feedbackService.getComments,payload)
    yield put(SaveComments(comments.results))
    yield put(SaveCommentCount(Math.ceil(comments.count / 2)))
}

export default function* feedbackSaga() {
    yield takeLatest(LIKE_DISLIKE_MOVIE,processLikes)
    yield takeLatest(POST_COMMENT,addComment)
    yield takeLatest(GET_COMMENTS,getComments)
}