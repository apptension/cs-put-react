import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';

import reducers from '../reducers';


export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger())
    )
  );
}
