import React from 'react'
import withFadeIn from './withFadeIn'

function FadeIn({ children }) {
  return (
    <div>
      {withFadeIn(children)}
    </div>
  )
}

export default FadeIn
