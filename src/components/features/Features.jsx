import React from 'react'
import "./features.css"


const Features = (props) => {
  return (
    <div className='featuresList__container__article'>
      <div className='featuresList__container__article-image'>  
        <img src={props.icon} alt="" />
      </div>      
      <div className='featuresList__container__article-content'>
        <h3>{props.title}</h3>
        <p>{props.parraf}</p>

      </div>

    </div>
  )
}

export default Features