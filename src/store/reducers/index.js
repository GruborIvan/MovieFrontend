import { GET_MOVIES, RECIEVE_MOVIES } from '../../constants/action-types'

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
        default: {
            return { ...state }
        }
    }

}

export default rootReducer;