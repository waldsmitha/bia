//Router
import { Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import AllArtists from "./pages/AllArtists";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

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
        <Route exact path={"/artist"}>
          <Artist />
        </Route>
        <Route exact path={"/all/artists"}>
          <AllArtists />
        </Route>
        <Route exact path={"/articles"}>
          <Articles />
        </Route>
        <Route exact path={"/article"}>
          <Article />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
