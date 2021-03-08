import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

import { useHistory } from "react-router-dom";

function Article({ articles }) {
  const history = useHistory();
  const urlArticle = history.location.pathname.split("/")[2];
  // const selectedArtist = artists.map((artist) => artist.name);
  const selectedArticle = articles.filter(
    (article) => article.id === urlArticle
  );
  console.log(selectedArticle);
  console.log(articles[1].title);
  console.log(urlArticle);

  return (
    <StyledArticle
      variants={pageAnim}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h1>{selectedArticle[0].title}</h1>
      <h2>by {selectedArticle[0].author}</h2>
      <img src={selectedArticle[0].images[1]} alt="" />
      <p>{selectedArticle[0].content}</p>
    </StyledArticle>
  );
}
const StyledArticle = styled(motion.div)`
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
`;

export default Article;
