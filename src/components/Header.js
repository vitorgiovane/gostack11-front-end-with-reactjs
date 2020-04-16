import React from 'react'

import logo from '../assets/logo.png'

const Header = ({ prefix, title }) => {
  return (
    <header>
      <img src={logo} alt="My Projects Logo" />
      <span>{prefix}</span>
      <strong>{title}</strong>
    </header>
  )
}

export default Header
