import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animations";

import test1 from "../img/test1.png";

function Landing() {
  return (
    <StyledLanding variants={fade} initial="hidden" animate="show">
      <img src={test1} alt="" />
      <h1>Home Main Article</h1>
      <p>Short Description Wow Lookie Here.</p>
    </StyledLanding>
  );
}

const StyledLanding = styled(motion.div)`
  img {
    padding-bottom: 2rem;
    width: 100%;
  }

  h1,
  p {
    padding: 0 2rem;
  }
  h1 {
    padding-bottom: 1rem;
  }
`;
export default Landing;
