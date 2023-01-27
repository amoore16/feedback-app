import React from "react"

type HeaderProps = {
  text?: string,
  bgColor?: string,
  textColor?: string
}

function Header(props: HeaderProps) {

  const { bgColor = 'rgba(0,0,0,0.4)', textColor = '#ff6a95', text = 'Feedback UI' } = props

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header