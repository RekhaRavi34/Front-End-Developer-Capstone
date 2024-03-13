import React from 'react'

function Button({children,onclick}) {
  return (
    <div className='buttoncomp' onClick={onclick}>
      {children}
    </div>
  )
}

export default Button