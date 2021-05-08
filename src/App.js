import './App.css';

// Import Components
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import { Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  // Heroku URL
  const URL = "https://jamieroszel-react-portfolio.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <StickyFooter />
    </div>
  );
}

export default App;
