import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React-Motions</h1>
      </div>
    );
  }
}

render(<App/>, document.querySelector('#root'));
