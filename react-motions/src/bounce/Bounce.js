import React from 'react'
import withBounce from './withBounce'

function Bounce({ children }) {
  return (
    <div>
      {withBounce(children)}
    </div>
  )
}

export default Bounce
