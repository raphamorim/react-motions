import React from 'react'
import styles from './styles'
import memoize from 'fast-memoize'

function withWobble(Component) {
  const style = {
    WebkitAnimationName: "wobble",
    animationName: "wobble",
    WebkitAnimationDuration: "1s",
    animationDuration: "1s",
    WebkitAnimationFillMode: "both",
    animationFillMode: "both"
  }

  return (
    <div style={style}>
      {Component}
    </div>
  )
}

export default memoize(withWobble)
