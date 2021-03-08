// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/admin/Admin';
import HomePage from "./components/home/Home";
import HirdetesPage from "./components/hirdetes/HirdetesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/hirdetes">
              <HirdetesPage />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
