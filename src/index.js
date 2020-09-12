import React from 'react';
import ReactDOM from 'react-dom';

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
    <div>
      <h1>Welcome!</h1>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
