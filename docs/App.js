import React from 'react';
import { render } from 'react-dom';
import { withBounce, withPulse, withShake, withInfinite } from 'react-motions';

const Bounce = withBounce(<div>aaa</div>)
const Pulse = withInfinite(withPulse(<div>aaa</div>))
const Shake = withShake(<div>aaa</div>)

function App(argument) {
  return (
    <div>
      <h1>React-Motions</h1>
      {Bounce}
      {Pulse}
      {Shake}
    </div>
  );
}

render(<App/>, document.querySelector('#root'));
