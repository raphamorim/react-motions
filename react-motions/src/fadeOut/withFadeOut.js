import React from 'react'
import styles from './styles'

function withFadeOut(Component) {
  const style = {
    WebkitAnimationName: "fadeOut",
    animationName: "fadeOut",
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

export default withFadeOut
