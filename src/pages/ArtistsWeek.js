import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

function ArtistsWeek({ info, artists }) {
  return (
    <StyledArtists
      variants={pageAnim}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h1>Artists of the Week</h1>
      {artists.map((artist) => (
        <Link
          to={`/artists/${artist.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <h1>{artist.name}</h1>
          <img src={artist.profileImage} alt="profile" />
        </Link>
      ))}
    </StyledArtists>
  );
}
const StyledArtists = styled(motion.div)`
  h1 {
    padding: 2rem 0 0 2rem;
  }
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
`;

export default ArtistsWeek;
