import React from 'react';
import { render } from 'react-dom';
import {
  Bounce,
  Pulse,
  Shake,
  Jello,
  Flash,
  Tada,
  Wobble,
  withBounce,
  withPulse,
  withShake,
  withInfinite,
  withJello,
  withTada,
  withWobble,
  withFlash,
} from 'react-motions';
import Select from 'react-select';

const Poster = () => (
  <div className='poster'>
    <img src="assets/images/driver.jpg" />
  </div>
)

const MOTIONS = {
  withBounce,
  withPulse,
  withShake,
  withFlash,
  withTada,
  withWobble,
  withJello,
  withBounceInfinite: Component => withInfinite(withBounce(Component)),
  withPulseInfinite: Component => withInfinite(withPulse(Component)),
  withShakeInfinite: Component => withInfinite(withShake(Component)),
  withFlashInfinite: Component => withInfinite(withFlash(Component)),
  withTadaInfinite: Component => withInfinite(withTada(Component)),
  withWobbleInfinite: Component => withInfinite(withWobble(Component)),
  withJelloInfinite: Component => withInfinite(withJello(Component)),
};

const OPTIONS = [
  { label: 'withBounce(Component)', value: 'withBounce' },
  { label: 'withShake(Component)', value: 'withShake' },
  { label: 'withPulse(Component)', value: 'withPulse' },
  { label: 'withFlash(Component)', value: 'withFlash' },
  { label: 'withTada(Component)', value: 'withTada' },
  { label: 'withWobble(Component)', value: 'withWobble' },
  { label: 'withJello(Component)', value: 'withJello' },
  { label: 'withInfinite(withBounce(Component))', value: 'withBounceInfinite' },
  { label: 'withInfinite(withPulse(Component))', value: 'withPulseInfinite' },
  { label: 'withInfinite(withShake(Component))', value: 'withShakeInfinite' },
  { label: 'withInfinite(withFlash(Component))', value: 'withFlashInfinite' },
  { label: 'withInfinite(withTada(Component))', value: 'withTadaInfinite' },
  { label: 'withInfinite(withWobble(Component))', value: 'withWobbleInfinite' },
  { label: 'withInfinite(withJello(Component))', value: 'withJelloInfinite' },
];

class Sandbox extends React.Component {
  constructor(props) {
    super()
    this.state = {
      value: 'withJello',
      example: withJello(Poster()),
      code: this.generateCode('withJello')
    }
  }

  generateCode(method) {
    method = [ method, `${method}(Component)` ];
    if (method[0].indexOf('Infinite') > -1) {
      const effect = method[0].replace('Infinite', '');
      method = [ `withInfinite, ${effect}`, `withInfinite(${effect}(Component))` ]
    }

    const code = `
import React from 'react';
import { render } from 'react-dom';
import { ${method[0]} } from 'react-motions';

const Component = () => (
  <div className='poster'>
    <img src='assets/images/driver.jpg' />
  </div>
);

render(${method[1]}, document.querySelector('#root'));`

    return code;
  }

  onChange(value) {
    this.setState({
      value,
      example: MOTIONS[value](Poster()),
      code: this.generateCode(value),
    });
  }

  render() {
    return (
      <div className='sandbox'>
        <Select
          // multi
          placeholder="Compose Animations"
          value={this.state.value}
          removeSelected
          closeOnSelect
          simpleValue
          options={OPTIONS}
          onChange={this.onChange.bind(this)}
        />
        <div className='container'>
          <div className='code'>
            <pre>
              { this.state.code }
            </pre>
          </div>
          <div className='example'>
            { this.state.example }
          </div>
        </div>
      </div>
    )
  }
}


function App(argument) {
  return (
    <div>
      <h1>React Motions</h1>
      <h2>Compose React Animations using High-Order Functions or Components</h2>
      <Sandbox/>
      <a
        className='link'
        href={'https://github.com/raphamorim/react-motions'}
      >
        See it on Github | YARN ADD react-motions
      </a>
    </div>
  );
}

render(<App/>, document.querySelector('#root'));
