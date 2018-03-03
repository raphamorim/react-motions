import React from 'react';
import { render } from 'react-dom';
import ReactMotions from 'react-motions';

ReactMotions()

function App(argument) {
  return (
    <div>
      <h1>React-Motions</h1>
    </div>
  );
}

render(<App/>, document.querySelector('#root'));
