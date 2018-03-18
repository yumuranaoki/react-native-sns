//storeの作成
//reducerと紐付け
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/post';

const initialStore = {

};

const store = createStore(reducer, initialStore, applyMiddleware(thunk));

export default store;
