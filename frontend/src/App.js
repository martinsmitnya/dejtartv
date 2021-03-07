import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
