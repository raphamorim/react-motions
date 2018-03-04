import React from 'react'
import withTada from './withTada'

function Tada({ children }) {
  return (
    <div>
      {withTada(children)}
    </div>
  )
}

export default Tada
