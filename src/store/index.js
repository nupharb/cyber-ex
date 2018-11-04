import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
// import layouts from '../constants/layouts'

const store = createStore(
    rootReducer, 
    applyMiddleware(logger)
);

export default store;