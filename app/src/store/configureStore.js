import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from '../reducers';
import DevTools from '../components/DevTools';


export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  );
}
