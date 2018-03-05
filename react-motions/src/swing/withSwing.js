import React from 'react'
import styles from './styles'

function withSwing(Component) {
  const style = {
    WebkitAnimationName: "swing",
    animationName: "swing",
    WebkitAnimationDuration: "1s",
    animationDuration: "1s",
    WebkitAnimationFillMode: "both",
    animationFillMode: "both",
    WebkitTransformOrigin: "top center",
    transformOrigin: "top center",
  }

  return (
    <div style={style}>
      {Component}
    </div>
  )
}

export default withSwing
