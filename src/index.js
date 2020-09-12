import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store/configureStore';

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
      <h1>Welcome!</h1>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
