import React from 'react'
import withShake from './withShake'

function Shake({ children }) {
  return (
    <div>
      {withShake(children)}
    </div>
  )
}

export default Shake
