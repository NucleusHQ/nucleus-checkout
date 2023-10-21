// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);


export default store;
