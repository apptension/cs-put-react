import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/bootstrap-material-design.min.css';
import './main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from './src/components/App/App';
import configureStore from './src/store/configureStore';
import DevTools from './src/components/DevTools';

window.React = React;

const store = configureStore();
const reactRoot = document.getElementById('react-root');

ReactDom.render(
  <Provider store={store}>
    <div>
      <App/>
      <DevTools />
    </div>
  </Provider>
  , reactRoot
);
