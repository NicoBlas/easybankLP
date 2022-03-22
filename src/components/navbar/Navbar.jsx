import React, {useState} from 'react'
import svgLogo from "../../assets/logo.svg"
import RequestInvite from '../button/RequestInvite'
import "./navbar.css"
import { RiMenu3Line,  RiCloseLin, RiCloseLine} from "react-icons/ri"



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

  const [toggleMenu, setToggleMenu] = useState(false)

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

      <div className='navbar-menu scale-in-ver-top '>
        {toggleMenu
          ? <RiCloseLine color = "#000000 " size={27} onClick={ () => setToggleMenu(false)} />
          : <RiMenu3Line color = "#000000 " size={27} onClick={ () => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-in-ver-top '> 
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
          </div>

          
          
        )

        }
        

      </div>

    </div>
  )
}

export default Navbar