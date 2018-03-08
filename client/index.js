// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
//
// // main routes
// import AppRoutes from '../routes';
//
// import store from '../store';
//
// ReactDOM.render(
// <Provider store={store}>
//   <AppRoutes />
//   </Provider>,
// document.getElementById('root')
// )


/* Import statements */
import React from 'react';
import ReactDOM from 'react-dom';

/* App is the entry point to the React code.*/
import App from './App';

/* import BrowserRouter from 'react-router-dom' */
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));