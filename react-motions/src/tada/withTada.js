import React from 'react'
import styles from './styles'
import memoize from 'fast-memoize'

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

export default memoize(withTada)
