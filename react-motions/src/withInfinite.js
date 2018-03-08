import React from 'react'
import memoize from 'fast-memoize'

// TODO: rewrite it to keep displayName

const withInfinite = (Component) => {
  Component.props.style['WebkitAnimationIterationCount'] = "infinite"
  Component.props.style['animationIterationCount'] = "infinite"

  return Component
}

export default memoize(withInfinite)
