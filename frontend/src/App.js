import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/admin/Admin';
import Adomanyok from "./components/adomanyok/Adomanyok";
import Esemenyek from "./components/esemenyek/Esemenyek";
import Header from "./components/header/Header";
import Hirdetes from "./components/hirdetes/Hirdetes";
import HomePage from "./components/home/Home";
import Kapcsolat from "./components/kapcsolat/Kapcsolat";
import Messenger from "./components/messanger/Messanger";
import PostFeed from "./components/postFeed/PostFeed";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/adomanyok">
              <Adomanyok />
            </Route>
            <Route exact path="/esemenyek">
              <Esemenyek />
            </Route>
            <Route exact path="/header">
              <Header />
            </Route>
            <Route path="/hirdetes">
              <Hirdetes />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/kapcsolat">
              <Kapcsolat />
            </Route>
            <Route exact path="/messenger">
              <Messenger />
            </Route>
            <Route exact path="/postFeed">
              <PostFeed />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
