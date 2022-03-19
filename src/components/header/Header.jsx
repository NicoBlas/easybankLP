import React from 'react'
import "./header.css"
import RequestInvite from '../button/RequestInvite'

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
        <RequestInvite />
      </div>
    </div>
  )
}

export default Header