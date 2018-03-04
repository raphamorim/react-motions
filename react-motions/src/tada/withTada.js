import React from 'react'
import styles from './styles'

function withTada(Component) {
  const style = {
    WebkitAnimationName: "tada",
    animationName: "tada",
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

export default withTada
