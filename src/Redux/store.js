import {createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';


const composeEnnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;



const store = createStore(reducer,
    composeEnnhancer(applyMiddleware(thunkMiddleware)));

    export default store;