import { GET_MOVIES } from '../types'

const initialState = {
    users: [],
}

export default function movies(state = initialState, action) {

    switch (action)
    {
        case GET_MOVIES: 
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }

}