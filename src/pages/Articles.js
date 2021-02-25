// import { Link } from "react-router-dom";

import Section from "../components/Section";

function Articles({ articles }) {
  console.log(articles);
  return (
    <div>
      <h1>Articles</h1>
      <Section />
      <Section />
      <Section />
    </div>
  );
}

export default Articles;
