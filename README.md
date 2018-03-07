# React Motions

[![CircleCI](https://circleci.com/gh/raphamorim/react-motions/tree/master.svg?style=svg)](https://circleci.com/gh/raphamorim/react-motions/tree/master)

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

HOF - Based on Compositions

You can add compose animations (even custom animations) based on functions. Here is an example:

```jsx
import { withShake, withFadeOut, withInfine } from 'react-motions'

const Component = () => (
  withInfinite(
    withFadeOut(
      withInfinite(
        withShake(
          <h2>Bouncing and Fading Out infinitely!!</h2>
        )
      )
    )
  )
)
```

Using Components

```jsx
import { Bounce, Shake } from 'react-motions'

const ComponentWithShake = () => (
  <Shake duration={4}>
    <div>How can I look beautiful</div>
  </Shake>
)

const ComponentWithShake = () => (
  <Bounce infinite>
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

# API

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

## Bounce
### Component

Render a React Component with Bounce animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Bounce } from 'react-motions'

const ComponentBounce = (
  <Bounce duration={2} infinite>
    Let's bounce here
  </Bounce>
)
```

### Function

Return a React Component with Bounce animation (`1s` duration)

```jsx
import { withBounce } from 'react-motions'

const ComponentWithBounce = withBounce(<div>Let's bounce here</div>)
```

## FadeIn
### Component

Render a React Component with FadeIn animation (`2s` duration and iterationCount `infinite`)

```jsx
import { FadeIn } from 'react-motions'

const ComponentFadeIn = (
  <FadeIn duration={2} infinite>
    Let's fadeIn here
  </FadeIn>
)
```
### Function

Return a React Component with FadeIn animation (`1s` duration)

```jsx
import { withFadeIn } from 'react-motions'

const ComponentWithFadeIn = withFadeIn(<div>Let's fadeIn here</div>)
```

## FadeOut
### Component

Render a React Component with FadeOut animation (`2s` duration and iterationCount `infinite`)

```jsx
import { FadeOut } from 'react-motions'

const ComponentFadeOut = (
  <FadeOut duration={2} infinite>
    Let's fadeOut here
  </FadeOut>
)
```
### Function

Return a React Component with FadeOut animation (`1s` duration)

```jsx
import { withFadeOut } from 'react-motions'

const ComponentWithFadeOut = withFadeOut(<div>fadeOut here</div>)
```

## Flash
### Component

Render a React Component with Flash animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Flash } from 'react-motions'

const ComponentFlash = (
  <Flash duration={2} infinite>
    Let's flash here
  </Flash>
)
```
### Function

Return a React Component with Flash animation (`1s` duration)

```jsx
import { withFlash } from 'react-motions'

const ComponentWithFlash = withFlash(<div>Flash! Flash!</div>)
```

## Jello
### Component

Render a React Component with Jello animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Jello } from 'react-motions'

const ComponentJello = (
  <Jello duration={2} infinite>
    Let's jello here
  </Jello>
)
```
### Function

Return a React Component with Jello animation (`1s` duration)

```jsx
import { withJello } from 'react-motions'

const ComponentWithJello = withJello(<div>Jelloooool</div>)
```

## Pulse
### Component

Render a React Component with Pulse animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Pulse } from 'react-motions'

const ComponentPulse = (
  <Pulse duration={2} infinite>
    Let's pulse here
  </Pulse>
)
```
### Function

Return a React Component with Pulse animation (`1s` duration)

```jsx
import { withPulse } from 'react-motions'

const ComponentWithPulse = withPulse(<div>Let's pulse here</div>)
```

## RubberBand
### Component

Render a React Component with RubberBand animation (`2s` duration and iterationCount `infinite`)

```jsx
import { RubberBand } from 'react-motions'

const ComponentRubberBand = (
  <RubberBand duration={2} infinite>
    Let's rubberBand here
  </RubberBand>
)
```
### Function

Return a React Component with rubberBand animation (`1s` duration)

```jsx
import { withRubberBand } from 'react-motions'

const ComponentWithRubberBand = withRubberBand(<div>rubberBand!</div>)
```

## Shake
### Component

Render a React Component with Shake animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Shake } from 'react-motions'

const ComponentShake = (
  <Shake duration={2} infinite>
    Let's shake here
  </Shake>
)
```
### Function

Return a React Component with Shake animation (`1s` duration)

```jsx
import { withShake } from 'react-motions'

const ComponentWithShake = withShake(<div>Let's shake here</div>)
```
## Swing
### Component

Render a React Component with Swing animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Swing } from 'react-motions'

const ComponentSwing = (
  <Swing duration={2} infinite>
    Let's swing here
  </Swing>
)
```
### Function

Return a React Component with Swing animation (`1s` duration)

```jsx
import { withSwing } from 'react-motions'

const ComponentWithSwing = withSwing(<div>Swing!</div>)
```
## Tada
### Component

Render a React Component with Tada animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Tada } from 'react-motions'

const ComponentTada = (
  <Tada duration={2} infinite>
    Let's tada here
  </Tada>
)
```

### Function

Return a React Component with Tada animation (`1s` duration)

```jsx
import { withTada } from 'react-motions'

const ComponentWithTada = withTada(<div>Tadaaaan!</div>)
```
## Wobble
### Component

Render a React Component with Wobble animation (`2s` duration and iterationCount `infinite`)

```jsx
import { Wobble } from 'react-motions'

const ComponentWobble = (
  <Wobble duration={2} infinite>
    Let's wobble here
  </Wobble>
)
```
### Function

Return a React Component with Wobble animation (`1s` duration)

```jsx
import { withWobble } from 'react-motions'

const ComponentWithWobble = withWobble(<div>Wobble!</div>)
```

# Roadmap

- [ ] `withSequence`
- [ ] `compose`
- [ ] Create handler props on Components for bind Animation Hooks
- [ ] Allows to configure animation property on HOC

# Credits

A thanks to [Animate.css](https://github.com/daneden/animate.css) for all animations.

Created by [Raphael Amorim](https://twitter.com/raphamorims).
