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
        <p>...</p>
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
