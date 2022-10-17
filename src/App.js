import './App.css';
import Explanations from './Explanations.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h1>Eleanor Rykener</h1>
        <h4><i>A 14th Century Transgender Icon</i></h4>
        <p>Learn about her life on <a href="https://en.wikipedia.org/wiki/John/Eleanor_Rykener">Wikipedia</a></p>.
      </div>
      <div className="main">
        <Switch>
          <Route path="/explain">
            <Explanations />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
