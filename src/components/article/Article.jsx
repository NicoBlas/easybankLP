import React from 'react'
import "./article.css"
import iconPlane from "../../assets/image-plane.jpg"


const Article = (props) => {
  return (
    <div className='article'>
      <div className='article__image'>
        <img src={props.icon} alt="" />
      </div>

      <div className='article__content'>
        <p>{props.autor}</p>
        <h3>{props.title}</h3>
        <p>{props.parraf}</p>

      </div>
    </div>
  )
}

export default Article