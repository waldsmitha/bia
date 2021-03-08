import { useState } from "react";

//Router
import { Route, Switch, useLocation } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArtistsWeek from "./pages/ArtistsWeek";
import Artist from "./pages/Artist";
import AllArtists from "./pages/AllArtists";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

//Data
import { contentData } from "./data";

//Styling & Animations
import GlobalStyle from "./components/GlobalStyle";
import { AnimatePresence } from "framer-motion";

function App() {
  const [artists, setArtists] = useState(contentData.artists);
  const [articles, setArticles] = useState(contentData.articles);

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path={"/"}>
            <Home artists={artists} articles={articles} />
          </Route>
          <Route exact path={"/artistsofweek"}>
            <ArtistsWeek artists={artists} />
          </Route>
          <Route exact path={"/artists/:id"}>
            <Artist artists={artists} />
          </Route>
          <Route exact path={"/artists"}>
            <AllArtists artists={artists} />
          </Route>
          <Route exact path={"/articles"}>
            <Articles articles={articles} />
          </Route>
          <Route exact path={"/articles/:id"}>
            <Article articles={articles} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
