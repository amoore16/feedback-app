import React, { ReactElement } from 'react'

type Props = { children: React.ReactNode }

function Card(props: Props) {
  const { children } = props;
  return (
    <div className='card'>{children}</div>
  )
}

export default Card