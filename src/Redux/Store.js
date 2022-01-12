import { createStore, applyMiddleware, combineReducers } from 'redux';

import { cartItemReducer, bookReducer } from './Reducer';

const reducer = combineReducers({
	bookReducer: bookReducer,
	cartItemReducer: cartItemReducer,
});

const store = createStore(reducer);