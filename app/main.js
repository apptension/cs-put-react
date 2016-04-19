import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/bootstrap-material-design.min.css';
import './main.scss';

import React from 'react';
import ReactDom from 'react-dom';

import App from './src/components/app';


const reactRoot = document.getElementById('react-root');
ReactDom.render(<App/>, reactRoot);
