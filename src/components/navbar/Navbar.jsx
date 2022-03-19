import React from 'react'
import svgLogo from "../../assets/logo.svg"
import RequestInvite from '../button/RequestInvite'
import "./navbar.css"


const Menu = () => {
  return (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#contact'>Contact</a></p>
    <p><a href='#blog'>Blog</a></p>
    <p><a href='#careers'>Careers</a></p>
    </>
  )


}

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={svgLogo} alt="svgLogo"/>
      </div> 

      <div className='navbar__links'>
        <Menu />

      </div>

      <div className='navbar__invite'>
        <RequestInvite />
      </div>

    </div>
  )
}

export default Navbar