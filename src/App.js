
import './App.css';
import {Navbar, Article, Footer, Header, Features} from "./components/allComponents"
import {FeaturesList, ArticlesList} from "./containers/allContainers"


function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <FeaturesList />
        <ArticlesList />
        <Footer />

    </div>
  );
}

export default App;
