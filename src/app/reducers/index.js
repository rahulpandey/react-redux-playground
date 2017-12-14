import { combineReducers } from "redux";
import movieReducer from "./movie-reducer";
const reducers = combineReducers({
  movieReducer: movieReducer
});

export { reducers };
