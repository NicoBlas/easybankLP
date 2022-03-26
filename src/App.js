
import './App.css';
import {Navbar, Footer, Header, FormContact} from "./components/allComponents"
import {FeaturesList, ArticlesList} from "./containers/allContainers"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"



function App() {
  
  return (

    
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/contact' element={<FormContact />}/>
        </Routes>
      
    </div>
  );
}

export default App;




