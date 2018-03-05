import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

function Shake({ children, duration, fillMode, infinite }) {
  const style = {
    animation: {
      WebkitAnimationName: "shake",
      animationName: "shake",
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

Shake.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  fillMode: PropTypes.string,
  infinite: PropTypes.bool
}

Shake.defaultProps = {
  duration: 1,
  fillMode: "both",
  infinite: false
}

export default Shake
