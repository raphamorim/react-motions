import React from 'react'
import withPulse from './withPulse'

function Pulse({ children }) {
  return (
    <div>
      {withPulse(children)}
    </div>
  )
}

export default Pulse
