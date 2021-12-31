import './App.css';
import About from './About.js';
import Contact from './Contact.js';
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Shop() {
  return <h2>Shop</h2>;
}

export default App;
