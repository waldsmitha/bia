//Router
import { Route, Switch } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/artists"}>
          <Artists />
        </Route>
        <Route exact path={"/articles"}>
          <Articles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
