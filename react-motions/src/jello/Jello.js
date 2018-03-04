import React from 'react'
import withJello from './withJello'

function Jello({ children }) {
  return (
    <div>
      {withJello(children)}
    </div>
  )
}

export default Jello
