import React from 'react'

type Props = {}

function SimpleLoader({}: Props) {
  return (    
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    
  )
}

export default SimpleLoader