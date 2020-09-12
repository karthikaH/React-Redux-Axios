import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppRoot from './containers';

// JSX just translating those HTML tags into React.createElement calls
/** 
 const App = () => {
   return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Welcome!')
  );
 };
*/

const App = () => {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
