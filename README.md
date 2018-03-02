# React Motions

> Nothing to see here yet

Using HOF

```jsx

import { withBounce, withShake, inSequence } from 'react-motions'

const Component = <div>How can I look beautiful</div>

const ComponentWithShake = withShake(Component)
const ComponentWithShakeAndBounce = withShake(withBounce(Component))
const ComponentWithShakeThenBounce = inSequence(withShake(withBounce(Component)))

```

Using Components

```jsx

import { Bounce, Shake } from 'react-motions'

const ComponentWithShake =  () => (
	<Shake>
		<div>How can I look beautiful</div>
	</Shake>
)

const ComponentWithShake =  () => (
	<Bounce>
		<div>How can I look beautiful</div>
	</Bouce>
)

```
