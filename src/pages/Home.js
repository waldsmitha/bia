import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

import Landing from "../components/Landing";
import Section from "../components/Section";
import Faq from "../components/Faq";

function Home({ artists, articles }) {
  const info = {
    artists: "Artists of the Week",
    articles: "Article of the Week",
    allArtists: "All Artists",
    allArticles: "All Articles",
  };

  let randomArtist = artists[Math.floor(Math.random() * artists.length)];
  let randomArticle = articles[Math.floor(Math.random() * articles.length)];
  let randomArtistImage = randomArtist.profileImage;
  let randomArticleImages = randomArticle.images;
  let randomArticleImage =
    randomArticleImages[Math.floor(Math.random() * randomArticleImages.length)];

  return (
    <StyledHome>
      <Landing />
      <Link
        to="/artists/week"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Section
          info={info.artists}
          artists={artists}
          image={randomArtistImage}
        />
      </Link>
      <Link to="/artists" style={{ color: "black", textDecoration: "none" }}>
        <Section info={info.allArtists} image={randomArtistImage} />
      </Link>
      <Link to="/articles" style={{ color: "black", textDecoration: "none" }}>
        <Section
          info={info.allArticles}
          articles={articles}
          image={randomArticleImage}
        />
      </Link>
      <Faq />
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)``;

export default Home;
