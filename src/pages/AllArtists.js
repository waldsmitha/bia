import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

import ScrollTop from "../components/ScrollTop";

function AllArtists({ artists }) {
  return (
    <StyledArtists
      variants={pageAnim}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h1>All Artists</h1>
      {artists.map((artist) => (
        <div>
          <Link
            to={`artists/${artist.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h1>{artist.name}</h1>
            <img src={artist.profileImage} alt="profile" />
          </Link>
        </div>
      ))}
      <ScrollTop />
    </StyledArtists>
  );
}
const StyledArtists = styled(motion.div)`
  h1 {
    padding: 2rem 0 0 2rem;
  }
  img {
    max-height: 50vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default AllArtists;
