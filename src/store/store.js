import { combineReducers, createStore } from "redux";

import tabReducer from "./reducers/tabReducers";
import movieReducer from "./reducers/movieReducer";

const reducers = combineReducers({
  navTab: tabReducer,
  movieList: movieReducer,
});

const store = createStore(reducers);

export default store;
