import Nav from "./Nav";

import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledHeader>
      <FontAwesomeIcon icon={faBars} size="3x" />
      <Link to="/">
        <h1>bia</h1>
      </Link>
      <FontAwesomeIcon icon={faSearch} size="3x" />
    </StyledHeader>
  );
}

const StyledHeader = styled(motion.div)`
  background: rgba(123, 205, 223, 0.55);
  color: #ffa1a1;
  display: flex;
  h1 {
    font-size: 4rem;
  }
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 10vh;
`;

export default Header;
