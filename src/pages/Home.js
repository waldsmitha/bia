import { Link } from "react-router-dom";

import styled from "styled-components";

import Landing from "../components/Landing";
import Section from "../components/Section";
import Faq from "../components/Faq";

function Home() {
  const info = {
    artists: "Artists of the Week",
    articles: "Article of the Week",
    allArtists: "All Artists",
    allArticles: "All Articles",
  };

  return (
    <div>
      <Landing />
      <Link to="/artists" style={{ color: "black", textDecoration: "none" }}>
        <Section info={info.artists} />
      </Link>
      <Link
        to="/all/artists"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Section info={info.allArtists} />
      </Link>
      <Link to="/articles" style={{ color: "black", textDecoration: "none" }}>
        <Section info={info.allArticles} />
      </Link>
      <Faq />
    </div>
  );
}

export default Home;
