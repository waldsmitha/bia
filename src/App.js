//Router
import { Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Articles from "./pages/Articles";

//Styling & Animations
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
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
