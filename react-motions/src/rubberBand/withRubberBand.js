import React from 'react'
import styles from './styles'

function withRubberBand(Component) {
  const style = {
    WebkitAnimationName: "rubberBand",
    animationName: "rubberBand",
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

export default withRubberBand
