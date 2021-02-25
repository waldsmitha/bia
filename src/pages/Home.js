import { useState } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Landing from "../components/Landing";
import Section from "../components/Section";
import Faq from "../components/Faq";

import contentData from "../data";

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
      <Link
        to="/artists/week"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Section info={info.artists} />
      </Link>
      <Link to="/artists" style={{ color: "black", textDecoration: "none" }}>
        <Section info={info.allArtists} />
      </Link>
      <Link to="/articles" style={{ color: "black", textDecoration: "none" }}>
        <Section info={info.allArticles} a />
      </Link>
      <Faq />
    </div>
  );
}

export default Home;
