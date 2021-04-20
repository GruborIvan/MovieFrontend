import {
    SAVE_TOKEN,
    LOG_OUT
} from "../../constants/action-types";

const initialState = {
    token: "",
}

export default function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case SAVE_TOKEN: {
            return {
              ...state,
              token: action.payload,
            };
        }
        case LOG_OUT: {
            return { ...state, token: '' }
        }
        default: {
            return { ...state }
        }
    }
}