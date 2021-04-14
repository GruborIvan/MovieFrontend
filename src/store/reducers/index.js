import { GET_MOVIES, RECIEVE_MOVIES,ADD_MOVIE } from '../../constants/action-types'

const initialState = {
    movies: [],
}

function rootReducer(state = initialState, action) {

    switch(action.type){
        case GET_MOVIES: {
            return { ...state, movies: action.json }
        }
        case RECIEVE_MOVIES: {
            return { ...state, movies: action.json }
        }
        case ADD_MOVIE: {
            return { 
                ...state, movies: [...state.movies,action.payload] 
            }
        }
        default: {
            return { ...state }
        }
    }

}

export default rootReducer;