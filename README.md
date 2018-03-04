# React Motions

> Compose React Animations using High-Order Functions or Components

React-Motions is a mix of ideas from [Recompose](https://github.com/acdlite/recompose) and [Animate.css](https://github.com/daneden/animate.css). In fact, `react-motions` is a set of pure functions entirely based on animation purpose.

```bash
yarn add react-motions --dev
```

# Usage

Using HOF

```jsx

import { withBounce, withShake, withInfinite, withSequence } from 'react-motions'

const Component = <div>How can I look beautiful</div>

const ComponentWithShake = withShake(Component)
const ComponentWithShakeAndBounce = withShake(withBounce(Component))
const ComponentWithInfiniteBounce = withInfinite(withBounce(Component))
const ComponentWithShakeThenBounce = withSequence(withShake(withBounce(Component)))

```

Using Components (in development)

```jsx

import { Bounce, Shake } from 'react-motions'

const ComponentWithShake = () => (
  <Shake duration={4}>
    <div>How can I look beautiful</div>
  </Shake>
)

const ComponentWithShake = () => (
  <Bounce onAnimationEnd={() => console.log('animation finished!')}>
    <div>How can I look beautiful</div>
  </Bounce>
)

```

React-Motions was created to be agnostic to the renderer:

| React Renderer | Available for use  | Version |
| :--- | :--- | :--- |
| [React-DOM](github.com/facebook/react) | ✔️ | `^16` |
| [React-Native](https://github.com/facebook/react-native) | ✖️ | ✖️ |
| [React-TV](https://github.com/raphamorim/react-tv) | ✔️ | `^0.3`

# Functions

## withBounce

Return a React Component with Bounce animation (`1s` duration)

```jsx
import { withBounce } from 'react-motions'

const ComponentWithBounce = withBounce(<div>Let's bounce here</div>)
```

## withPulse

Return a React Component with Pulse animation (`1s` duration)

```jsx
import { withPulse } from 'react-motions'

const ComponentWithPulse = withPulse(<div>Let's pulse here</div>)
```

## withShake

Return a React Component with Shake animation (`1s` duration)

```jsx
import { withShake } from 'react-motions'

const ComponentWithShake = withShake(<div>Let's shake here</div>)
```

## withJello

Return a React Component with Jello animation (`1s` duration)

```jsx
import { withJello } from 'react-motions'

const ComponentWithJello = withJello(<div>Jelloooool</div>)
```

## withFlash

Return a React Component with Flash animation (`1s` duration)

```jsx
import { withFlash } from 'react-motions'

const ComponentWithFlash = withFlash(<div>Flash! Flash!</div>)
```

## withWobble

Return a React Component with Wobble animation (`1s` duration)

```jsx
import { withWobble } from 'react-motions'

const ComponentWithWobble = withWobble(<div>Wobble!</div>)
```

## withTada

Return a React Component with Tada animation (`1s` duration)

```jsx
import { withTada } from 'react-motions'

const ComponentWithTada = withTada(<div>Tadaaaan!</div>)
```

## withInfinite

Set last animation with `infinity` property.

```jsx
import { withInfinite, withShake } from 'react-motions'

const DoNotStopBouncing = withInfinite(withShake(<div>Let's shake without stop!</div>))
```

## withSequence

Execute next animation only after previous animation be finished.

```jsx
import { withSequence, withShake, withJello } from 'react-motions'

const SequencialAnimations = withSequence(
  withShake,
  withJello,
  <div>First shake it then jello! </div>
)
```

## compose

Execute all animations in the same time.

```jsx
import { compose, withFlash, withPulse } from 'react-motions'

const VividAnimation = compose(
  withFlash,
  withPulse,
  <div>Flash and Pulse!</div>
)
```

# Roadmap

- [ ] `withSequence`
- [ ] `compose`
- [ ] Configurable props for `<Shake/>`
- [ ] Configurable props for `<Pulse/>`
- [ ] Configurable props for `<Bounce/>`
- [ ] Configurable props for `<Flash/>`
- [ ] Configurable props for `<Jello/>`
- [ ] Configurable props for `<Tada/>`
- [ ] Configurable props for `<Wobble/>`
- [ ] Allows to configure animation property on HOC

# Credits

A thanks to [Animate.css](https://github.com/daneden/animate.css) for all animations.

Created by [Raphael Amorim](https://twitter.com/raphamorims).
