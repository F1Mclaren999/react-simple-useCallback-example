import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [name] = React.useState('PingPong');
  return (
    <div id="main">
      <h3>Hello, {name}</h3>
    </div>
  );
};

render(<App />, document.getElementById('root'));
