import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.svg"
import facebookIcon from "../../assets/icon-facebook.svg"
import youtubeIcon from "../../assets/icon-youtube.svg"
import twitterIcon from "../../assets/icon-twitter.svg"
import pinterestIcon from "../../assets/icon-pinterest.svg"
import instagramIcon from "../../assets/icon-instagram.svg"
import iconWhite from "../../assets/icon-white.svg"
import RequesInvite from "../../components/button/RequestInvite"


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__icons'>
        <div className='footer__icons-logo'>
          <img src={iconWhite} alt="logo" />
        </div>
        <div className='footer__icons-media'>
          <img src={facebookIcon} alt="face" />
          <img src={youtubeIcon} alt="yt" />
          <img src={twitterIcon} alt="tw" />
          <img src={pinterestIcon} alt="pim" />
          <img src={instagramIcon} alt="insta" />
        </div>
      </div>

      <div className='footer__links'>
        <div className='footer__links-1'>
          <p><a href='#home'>About Us</a></p>
          <p><a href='#about'>Contact</a></p>
          <p><a href='#blog'>Blog</a></p>
        </div>

        <div className='footer__links-2'>
          <p><a href='#home'>Careers</a></p>
          <p><a href='#about'>Suport</a></p>
          <p><a href='#contact'>Privacy Policy</a></p>
        </div>
      </div>

      <div className='footer__ending'>
        <RequesInvite />
        <p>© Easybank. All Rights Reserved</p>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Footer