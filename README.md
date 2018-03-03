# React Motions

> Compose React Animations using High-Order Functions or Components

React-Motions is a mix of ideas from [Recompose](https://github.com/acdlite/recompose) and [Animate.css](https://github.com/daneden/animate.css). In fact, `react-motions` is a set of pure functions entirely based on animation purpose.

Using HOF

```jsx

import { withBounce, withShake, withInfinite, withSequence } from 'react-motions'

const Component = <div>How can I look beautiful</div>

const ComponentWithShake = withShake(Component)
const ComponentWithShakeAndBounce = withShake(withBounce(Component))
const ComponentWithInfiniteBounce = withInfinite(withBounce(Component))
const ComponentWithShakeThenBounce = withSequence(withShake(withBounce(Component)))

```

Using Components

```jsx

import { Bounce, Shake } from 'react-motions'

const ComponentWithShake = () => (
  <Shake>
    <div>How can I look beautiful</div>
  </Shake>
)

const ComponentWithShake = () => (
  <Bounce>
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

const ComponentWithBounce = withPulse(<div>Let's pulse here</div>)
```

## withShake

Return a React Component with Shake animation (`1s` duration)

```jsx
import { withShake } from 'react-motions'

const ComponentWithBounce = withShake(<div>Let's shake here</div>)
```

## withInfinite

Set last animation with `infinity` property.

```jsx
import { withInfinite, withShake } from 'react-motions'

const ComponentWithBounce = withInfinite(withShake(<div>Let's shake without stop!</div>))
```

# Credits

A thanks to [Animate.css](https://github.com/daneden/animate.css) for all animations.

Created by [Raphael Amorim](https://twitter.com/raphamorims).

# Roadmap

- [ ] `withSequence`
- [ ] `Shake`
- [ ] `Pulse`
- [ ] `Bounce`
- [ ] allows to configure animation property on HOC
