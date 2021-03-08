import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fade,
  homeAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animations";

import Landing from "../components/Landing";
import Section from "../components/Section";
import Faq from "../components/Faq";
import Logo from "../components/Logo";

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
    <StyledHome variants={homeAnim} initial="hidden" animate="show" exit="exit">
      <motion.div variants={fade}>
        <Landing />
        <Link
          to="/artistsofweek"
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
      </motion.div>
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
  /* div:nth-child(3n + 2) {
    background: blue;
  } */
`;

export default Home;
