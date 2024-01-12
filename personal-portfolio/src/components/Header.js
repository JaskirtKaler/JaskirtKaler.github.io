import React from 'react'
import { Link } from 'react-scroll';
import './Header.css'
import Logo from '../images/Logo2.gif'
import { Link as ScrollLink } from 'react-scroll';
function Header() {
  return (
    <header className='main'>
        <img src={Logo} alt='Logo' className="logo"></img>
        <ul className='list'>
          <li>
          <ScrollLink className='link' to="home" smooth={true} duration={500}>
            Home
          </ScrollLink></li>
          <li><ScrollLink className='link' to="about" smooth={true} duration={500}>
            About
          </ScrollLink></li>
          <li><ScrollLink className='link' to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink></li>
        </ul>
    </header>
  )
}

export default Header