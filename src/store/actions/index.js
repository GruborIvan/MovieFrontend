import { GET_MOVIES, RECIEVE_MOVIES,ADD_MOVIE,LOG_IN } from '../../constants/action-types'

export const getMovies = () => ({ type: GET_MOVIES })
export const recieveMovies = data => ({ type: RECIEVE_MOVIES, data })

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload: payload };
}

export function LogIn(payload) {
    return { type: LOG_IN, payload: payload };
}