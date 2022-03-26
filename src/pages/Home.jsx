import React from 'react'
import {Navbar, Footer, Header, FormContact} from "../components/allComponents"
import {FeaturesList, ArticlesList} from "../containers/allContainers"


const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <FeaturesList />
        <ArticlesList /> 
        <Footer />
    </React.Fragment>
              

  )
}

export default Home