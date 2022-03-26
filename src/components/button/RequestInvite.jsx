import React from 'react'
import "./requestInvite.css"
import {Link} from "react-router-dom"



const RequestInvite = () => {
  return (
    <Link to="/contact"><div className='buton'><button type='button'>Request Invite</button></div></Link>
  )
}

export default RequestInvite