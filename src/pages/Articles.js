import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

import { Link } from "react-router-dom";

function Articles({ articles }) {
  console.log(articles);
  return (
    <StyledArticles
      variants={pageAnim}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h1>All Articles</h1>
      {articles.map((article) => (
        <Link
          to={`/articles/${article.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <div>
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <img src={article.images[0]} alt="" />
          </div>
        </Link>
      ))}
    </StyledArticles>
  );
}

const StyledArticles = styled(motion.div)`
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
  div {
    padding: 2rem 0;
  }
`;

export default Articles;
