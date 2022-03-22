import React from 'react'
import "./header.css"
import RequestInvite from '../button/RequestInvite'
import svgPhone from "../../assets/image-mockups.png"
import svgCuadrados from "../../assets/bg-intro-desktop.svg"
import svgCuadradosMini from "../../assets/bg-intro-mobile.svg"


const dataHeader = {
  title: "Next generation digital banking",
  value: "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
}

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__info'>
        <h1>{dataHeader.title}</h1>
        <p>{dataHeader.value}</p>
        <RequestInvite className="header__info-RI" />
      </div>



      <div className='header__image'>
        <img className='header__image-phone' src={svgPhone} alt="" />
      </div>
      <div>
        <picture>
          <source
            srcSet={svgCuadrados}
            media="(min-width:600px)"
            className='header__image-cuadrados-mini'
          />
          <img className="header__image-cuadrados" src={svgCuadradosMini} alt="" />
        </picture>
      </div>
    </div>
  )
}

export default Header