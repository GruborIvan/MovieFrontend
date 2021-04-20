import {
    RECIEVE_MOVIES,
    ADD_MOVIE,
    SAVE_MOVIE_COUNT,
    SAVE_GENRES,
} from "../../constants/action-types";

const initialState = {
    movies: [],
    movieCount: 0,
    movieGenres: [],
}

export default function MovieReducer(state = initialState, action) {
    switch(action.type) {
        case RECIEVE_MOVIES: {
            return { 
                ...state, movies: action.data 
            };
        }
        case ADD_MOVIE: {
            return {
              ...state, movies: [...state.movies, action.json],
            };
        }
        case SAVE_MOVIE_COUNT: {
            return {
                ...state, movieCount: action.payload,
            }
        }
        case SAVE_GENRES: {
            return {
                ...state, movieGenres: action.json 
            }
        }
        default: {
            return { ...state }
        }
    }
}