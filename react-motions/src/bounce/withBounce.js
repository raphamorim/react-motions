import React from 'react'
import styles from './styles'

function withBounce(Component) {
  const style = {
    WebkitAnimationName: "bounce",
    animationName: "bounce",
    WebkitTransformOrigin: "center bottom",
    transformOrigin: "center bottom",
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

export default withBounce
