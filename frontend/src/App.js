import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/admin/Admin';
import HomePage from "./components/home/Home";
import Hirdetes from "./components/hirdetes/Hirdetes";
import PostFeed from "./components/postFeed/PostFeed"

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/postFeed">
              <PostFeed />
            </Route>
            <Route path="/hirdetes">
              <Hirdetes />
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
