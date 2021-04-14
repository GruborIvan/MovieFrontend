import { GET_MOVIES, RECIEVE_MOVIES } from '../../constants/action-types'

export const getMovies = () => ({ type: GET_MOVIES })
export const recieveMovies = data => ({ type: RECIEVE_MOVIES, data })