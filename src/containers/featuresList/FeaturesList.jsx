import React from 'react'
import Features from '../../components/features/Features'
import "./featuresList.css"
import onlineIcon from "../../assets/icon-online.svg"
import budgetIcon from "../../assets/icon-budgeting.svg"
import onboardingIcon from "../../assets/icon-onboarding.svg"
import apiIcon from "../../assets/icon-api.svg"


const articleInfo = [
  {
    image: onlineIcon,
    title:"Online Banking " ,
    parraf: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    image: budgetIcon,
    title:"Simple Budgeting" ,
    parraf: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },

  {
    image: onboardingIcon,
    title: "Fast Onboarding",
    parraf: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    image: apiIcon,
    title: "Open API",
    parraf: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  },
  

]

const featuresList = () => {
  return (
    <div className='featuresList'>
      <div className='featuresList__title'>
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className='featuresList__container'>
        {
          articleInfo.map((element, i) =>{
            return(
              <Features
                key={i}
                icon = {element.image}
                title = {element.title}
                parraf = {element.parraf}
              ></Features>
            )
          })
        }

        
      </div>


    </div>
  )
}

export default featuresList