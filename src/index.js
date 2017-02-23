import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack import the css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

// We can pass initial state to overwrite the default value of
// parameter state = [] specified in the ES6 way.
// But if you want to configure store for server rendering
// just pass argument into the configureStore function.
const store = configureStore();
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
