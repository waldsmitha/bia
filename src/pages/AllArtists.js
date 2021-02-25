import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

import Section from "../components/Section";

function AllArtists({ artists }) {
  console.log(artists);

  return (
    <StyledArtists>
      <h1>All Artists</h1>
      {artists.map((artist) => (
        <div>
          <Link to={`artists/${artist.name}`}>
            <h1>{artist.name}</h1>
            <img src={artist.profileImage} alt="profile image" />
          </Link>
        </div>
      ))}
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
