import React from 'react'
import withFlash from './withFlash'

function Flash({ children }) {
  return (
    <div>
      {withFlash(children)}
    </div>
  )
}

export default Flash
