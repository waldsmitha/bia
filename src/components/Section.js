import styled from "styled-components";
import { motion } from "framer-motion";

import test1 from "../img/test1.png";

function Section({ info }) {
  return (
    <StyledSection>
      <h1>{info}</h1>
      <img src={test1} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        vel!
      </p>
    </StyledSection>
  );
}

const StyledSection = styled(motion.div)`
  padding: 2rem 0;
  p,
  h1 {
    padding: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export default Section;
