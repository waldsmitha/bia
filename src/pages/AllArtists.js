import styled from "styled-components";
import { motion } from "framer-motion";

import Section from "../components/Section";

function AllArtists() {
  return (
    <StyledArtists>
      <h1>All Artists</h1>
      <Section />
      <Section />
      <Section />
    </StyledArtists>
  );
}
const StyledArtists = styled(motion.div)`
  h1 {
    padding: 2rem 0 0 2rem;
  }
`;

export default AllArtists;
