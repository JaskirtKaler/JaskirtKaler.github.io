import React from 'react'
import { Link } from 'react-scroll';
import './Header.css'
import Logo from '../images/Logo2.gif'
function Header() {
  return (
    <header className='main'>
        <img src={Logo} alt='Logo' className="logo"></img>
        <ul className='list'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
    </header>
  )
}

export default Header