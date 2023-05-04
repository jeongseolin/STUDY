import React from 'react';
import ReactDOM from 'react-dom';

function Welcome() {
  const name = 'Sara';
  return <h2>Welcome, {name}!</h2>;
}

const element = <Welcome />;

ReactDOM.render(element, document.getElementById('root'));
