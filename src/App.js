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
        <br/>
        <br/>
        <p>
          rykener.org has borrowed this historically important woman's name,
          and works towards selling the artwork of trans women in order to
          donate profits toward mutual aid for other trans women in need.
        </p>
        <p>
          This is not a registered 501(c)(3) but instead a self funded mutual
          aid organization. When an artist sells their artwork they retain the
          cost of materials alone. A significant number of trans women live in
          poverty, and this is our meager way of lending support.
        </p>
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
