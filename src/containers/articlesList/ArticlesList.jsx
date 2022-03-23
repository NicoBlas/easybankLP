import React from 'react'
import "./articlesList.css"
import Article from '../../components/article/Article'
import iconMoney from "../../assets/image-currency.jpg"
import iconRestaurant from "../../assets/image-restaurant.jpg"
import iconPlane from "../../assets/image-plane.jpg"
import iconConfetti from "../../assets/image-confetti.jpg"

const articlesData = [
  {
    icon: iconMoney,
    autor:"By Claire Robinson" ,
    title:"Receive money in any currency with no fees" ,
    parraf:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …" 

  },
  {
    icon: iconRestaurant,
    autor:"By Wilson Hutton" ,
    title:" Treat yourself without worrying about money" ,
    parraf:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..." 

  },
  {
    icon:iconPlane ,
    autor:"By Wilson Hutton" ,
    title:"Take your Easybank card wherever you go" ,
    parraf: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you..."

  },
  {
    icon:iconConfetti ,
    autor: "By Claire Robinson",
    title:"Our invite-only Beta accounts are now live!" ,
    parraf: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site..."

  },
 

]

const ArticlesList = () => {
  return (
    <div className='articlesList' id="blog">

      <div className='articlesList__title'>
        <p>Latest Articles</p>
      </div>

      <div className='articlesList__content'> 
        {
          articlesData.map((element, i) => {
            return(
              <Article
                key = {i}
                icon = {element.icon}
                autor = {element.autor}
                title = {element.title}
                parraf = {element.parraf} 
              ></Article>
            )
          })
        }
      </div>

    </div>
  )
}

export default ArticlesList


