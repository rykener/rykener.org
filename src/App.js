import './App.css';
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
            <Link to="/shop">shop</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
          </div>
        </div>
      </div>


      <div className="main">
        <h1>coming soon</h1>
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

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function Shop() {
  return <h2>Shop</h2>;
}

export default App;
