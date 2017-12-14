import { REQUEST_MOVIES, RECEIVE_MOVIES } from "../actions";
const movieReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return state;
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isLoading: false,
        movies: action.payload
      });
    default:
      return state;
  }
};
export default movieReducer;
