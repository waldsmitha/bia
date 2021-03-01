import styled from "styled-components";
import { motion } from "framer-motion";

function Section({ info, image }) {
  return (
    <StyledSection>
      <h1>{info}</h1>
      <img src={image} alt="" />
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
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
`;

export default Section;
