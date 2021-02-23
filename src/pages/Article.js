import styled from "styled-components";
import { motion } from "framer-motion";

function Article() {
  return (
    <StyledArticle>
      <h1>Article</h1>
    </StyledArticle>
  );
}
const StyledArticle = styled(motion.div)`
  h1 {
    padding: 2rem 0 0 2rem;
  }
`;

export default Article;
