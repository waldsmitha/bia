import { Link } from "react-router-dom";

import Landing from "../components/Landing";
import Section from "../components/Section";
import Faq from "../components/Faq";

function Home() {
  return (
    <div>
      <Landing />
      <Link to="/artists">
        <Section />
      </Link>
      <Link to="/articles">
        <Section />
      </Link>
      <Section />
      <Faq />
    </div>
  );
}

export default Home;
