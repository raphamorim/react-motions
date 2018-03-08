import React from 'react'

function withConfig(Component, config) {
  const { delay, duration, fillMode } = config;

  if (Component.props.style) {
    if (delay) {
      Component.props.style['animationDelay'] = delay
      Component.props.style['WebKitAnimationDelay'] = delay
    }

    if (duration) {
      Component.props.style['animationDuration'] = duration
      Component.props.style['WebkitAnimationDuration'] = duration
    }

    if (fillMode) {
      Component.props.style['fillMode'] = fillMode
      Component.props.style['WebkitAnimationFillMode'] = fillMode
    }
  }

  return Component
}

export default withConfig
