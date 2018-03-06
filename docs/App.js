import React from 'react';
import { render } from 'react-dom';
import {
  withBounce,
  Bounce,
  withPulse,
  withShake,
  withInfinite,
  withJello,
  Jello,
  withTada,
  withWobble,
  withFlash,
  withFadeIn,
  withFadeOut,
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
  withFadeIn,
  withFadeOut,
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
  { label: 'withPulse(Component)', value: 'withPulse' },
  { label: 'withShake(Component)', value: 'withShake' },
  { label: 'withFadeIn(Component)', value: 'withFadeIn' },
  { label: 'withFadeOut(Component)', value: 'withFadeOut' },
  { label: 'withFlash(Component)', value: 'withFlash' },
  { label: 'withTada(Component)', value: 'withTada' },
  { label: 'withWobble(Component)', value: 'withWobble' },
  { label: 'withJello(Component)', value: 'withJello' },
  { label: '<Bounce duration={3}/>', value: 'Bounce duration={3}' },
  { label: '<Jello infinite/>', value: 'Jello infinite' },
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

  // unproud of this method
  generateCode(method) {
    method = [ method, `${method}(Component)` ];

    if (method[0].indexOf('with') <= -1) {
      const ComponentName = method[0].replace(/ .*/,'')
      method = [ ComponentName, `<${method[0]}><Component/></${ComponentName}>` ]
    }

    if (method[0].indexOf('withInfinite') > -1) {
      const effect = method[0].replace('Infinite', '')
      method = [ `withInfinite, ${effect}`, `withInfinite(${effect}(Component))` ]
    }

    return `
import React from 'react';
import { render } from 'react-dom';
import { ${method[0]} } from 'react-motions';

const Component = () => (
  <div className='poster'>
    <img src='assets/images/driver.jpg' />
  </div>
);

render(
  ${method[1]},
  document.querySelector('#root')
);`
  }

  onChange(value) {
    let example;

    if (value.indexOf('with') <= -1) {
      const ComponentName = value.replace(/ .*/,'')
      if (ComponentName === 'Bounce') {
        example = <Bounce duration={3}>{Poster()}</Bounce>
      } else if (ComponentName === 'Jello') {
        example = <Jello infinite>{Poster()}</Jello>
      }
    } else {
      example = MOTIONS[value](Poster());
    }

    this.setState({
      value,
      example,
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
    <div className='app'>
      <h1>React Motions</h1>
      <h2>Compose React Animations using High-Order Functions or Components</h2>
      <Sandbox/>
      <a
        className='link'
        href={'https://github.com/raphamorim/react-motions'}
      >
        See it on Github
      </a>
    </div>
  );
}

render(<App/>, document.querySelector('#root'));
