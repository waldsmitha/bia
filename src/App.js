import { useState } from "react";

//Router
import { Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artists from "./pages/ArtistsWeek";
import Artist from "./pages/Artist";
import AllArtists from "./pages/AllArtists";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

//Data
import contentData from "./data";

//Styling & Animations
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const [artists, setArtists] = useState(contentData.artists);
  const [articles, setArticles] = useState(contentData.articles);
  // console.log(artists, articles);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home artists={artists} articles={articles} />
        </Route>
        <Route exact path={"/artists/week"}>
          <Artists artists={artists} />
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
        <Route exact path={"/article"}>
          <Article articles={articles} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
