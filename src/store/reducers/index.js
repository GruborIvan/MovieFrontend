import { GET_MOVIES, RECIEVE_MOVIES,ADD_MOVIE, SAVE_TOKEN } from '../../constants/action-types'

const initialState = {
    token: '',
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
        case SAVE_TOKEN: {
            console.log('TOKEN IS: ');
            console.log(action.json.access);
            return {
                ...state, token: action.json.access
            }
        }
        default: {
            return { ...state }
        }
    }

}

export default rootReducer;