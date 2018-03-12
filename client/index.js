// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
//
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   , document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './redux/index';
// import { getFoodAndDrinks } from './redux/foodAndDrink/actions';

// import { getCharacters } from './redux/characters/actions';

// Create redux store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Kick off things by getting all characters
// store.dispatch(getFoodAndDrinks());

// Create app
const container = document.getElementById('root');

// Render app
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , container
);

// Hot module reloading
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     ReactDOM.render(
//       <AppContainer>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </AppContainer>
//       , container
//     );
//   });
// }