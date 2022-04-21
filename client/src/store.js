import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import index from './reducers/index';

const initialState = {};

const middleWare = [thunk];

const store = createStore(index, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;