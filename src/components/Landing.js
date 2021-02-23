import styled from "styled-components";
import { motion } from "framer-motion";

import test1 from "../img/test1.png";

function Landing() {
  return (
    <StyledLanding>
      <img src={test1} alt="" />
      <h1>Article Etc. Read Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        vel!
      </p>
    </StyledLanding>
  );
}

const StyledLanding = styled(motion.div)`
  img {
    padding-bottom: 2rem;
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
