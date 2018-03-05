import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

function Swing({ children, duration, fillMode, infinite, transformOrigin }) {
  const style = {
    animation: {
      WebkitAnimationName: "swing",
      animationName: "swing",
      WebkitTransformOrigin: transformOrigin,
      transformOrigin,
      WebkitAnimationDuration: `${duration}s`,
      animationDuration: `${duration}s`,
      WebkitAnimationFillMode: fillMode,
      animationFillMode: fillMode
    },
    infinite: {
      WebkitAnimationIterationCount: "infinite",
      animationIterationCount: "infinite",
    }
  }

  const styleComponent = infinite
    ? Object.assign(style.animation, style.infinite)
    : style.animation

  return (
    <div style={styleComponent}>
      {children}
    </div>
  )
}

Swing.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  fillMode: PropTypes.string,
  infinite: PropTypes.bool,
  transformOrigin: PropTypes.string,
}

Swing.defaultProps = {
  duration: 1,
  fillMode: "both",
  infinite: false,
  transformOrigin: "top center"
}

export default Swing
