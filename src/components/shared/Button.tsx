import React from 'react'

type Props = {
  children?: React.ReactNode
  version?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  isDisabled?: boolean
}

function Button(props: Props) {
  const {
    children,
    version = 'primary',
    type = 'button',
    isDisabled = false,
  } = props

  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button
