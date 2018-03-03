import React from 'react'
import styles from './styles'

function withPulse(Component) {
  const style = {
    WebkitAnimationName: "pulse",
    animationName: "pulse",
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

export default withPulse
