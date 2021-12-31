import './App.css';
import About from './About.js';
import Contact from './Contact.js';
import Shop from './Shop.js';
import Zine from './Zine.js';
import Explanations from './Explanations.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex-container navbar">
          <Link to="/">
            <span className="brand">eleanor rykener</span>
          </Link>
          <div className="flex-container">
            SITE UNDER CONSTRUCTION
          </div>
          <div className="flex-container">
            <Link to="/shop">shop</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <a href="https://instagram.com/eleanor.rykener">instagram</a>
          </div>
        </div>
      </div>


      <div className="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/zine">
            <Zine />
          </Route>
          <Route path="/explain">
            <Explanations />
          </Route>
          <Route path="/">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
