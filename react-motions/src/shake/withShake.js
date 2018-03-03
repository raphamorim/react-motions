import React from 'react'
import styles from './styles'

function withShake(Component) {
  const style = {
    WebkitAnimationName: "shake",
    animationName: "shake",
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

export default withShake
