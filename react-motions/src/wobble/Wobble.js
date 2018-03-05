import React from 'react'
import withWobble from './withWobble'

function Wobble({ children }) {
  return (
    <div>
      {withWobble(children)}
    </div>
  )
}

export default Wobble
