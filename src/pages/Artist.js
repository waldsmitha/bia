import styled from "styled-components";
import { motion } from "framer-motion";

function Artist() {
  return (
    <StyledArtist>
      <h1>Artist</h1>
    </StyledArtist>
  );
}
const StyledArtist = styled(motion.div)`
  h1 {
    padding: 2rem 0 0 2rem;
  }
`;

export default Artist;
