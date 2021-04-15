import { GET_MOVIES, RECIEVE_MOVIES,ADD_MOVIE } from '../../constants/action-types'

export const getMovies = () => ({ type: GET_MOVIES })
export const recieveMovies = data => ({ type: RECIEVE_MOVIES, data })

export function addMovie(payload) {
    let action = { type: ADD_MOVIE, payload: payload };
    console.log(action);
    return action;
}