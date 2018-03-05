import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

function Pulse({ children, duration, fillMode, infinite }) {
  const style = {
    animation: {
      WebkitAnimationName: "pulse",
      animationName: "pulse",
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

Pulse.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  fillMode: PropTypes.string,
  infinite: PropTypes.bool
}

Pulse.defaultProps = {
  duration: 1,
  fillMode: "both",
  infinite: false
}

export default Pulse
