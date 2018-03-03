import React from 'react'

function withInfinite(Component) {
  Component.props.style['WebkitAnimationIterationCount'] = "infinite"
  Component.props.style['animationIterationCount'] = "infinite"

  return Component
}

export default withInfinite
