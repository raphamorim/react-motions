import React from 'react'
import withFadeOut from './withFadeOut'

function FadeOut({ children }) {
  return (
    <div>
      {withFadeOut(children)}
    </div>
  )
}

export default FadeOut
