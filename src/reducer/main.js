import { combineReducers } from 'redux';
import postReducer from './post.js';
import feedReducer from './feed.js';
import postImagesReducer from './postImage';

const reducer = combineReducers({
  feed: feedReducer,
  post: postReducer,
  postImages: postImagesReducer,
});

export default reducer;
