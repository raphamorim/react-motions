import React from 'react'
import styles from './styles'

function withFadeIn(Component) {
  const style = {
    WebkitAnimationName: "fadeIn",
    animationName: "fadeIn",
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

export default withFadeIn
