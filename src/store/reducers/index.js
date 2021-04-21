import { combineReducers } from "redux";
import movies from "./MovieReducer";
import auth from "./AuthReducer";

const rootReducer =  combineReducers({
  movies,
  auth
});

export default rootReducer;