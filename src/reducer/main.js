import { combineReducers } from 'redux';
import postReducer from './post.js';
import feedReducer from './feed.js';

const reducer = combineReducers({
  feedReducer,
  postReducer,
});

export default reducer;
