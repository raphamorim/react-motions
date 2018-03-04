import React from 'react'
import styles from './styles'

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

export default withWobble
