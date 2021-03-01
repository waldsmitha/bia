import { useState } from "react";

import Nav from "./Nav";

import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [navToggle, setNavToggle] = useState(0);

  const navOpen = () => {
    setNavToggle(true);
    console.log("Showing");
  };

  return (
    <StyledHeader>
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
      <StyledIcon>
        <FontAwesomeIcon onClick={navOpen} icon={faBars} size="3x" />
      </StyledIcon>
      <Link to="/" style={{ color: "#ffa1a1", textDecoration: "none" }}>
        <h1>bia</h1>
      </Link>
      <StyledIcon>
        <FontAwesomeIcon icon={faSearch} size="3x" />
      </StyledIcon>
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

const StyledIcon = styled(motion.div)`
  cursor: pointer;
`;

export default Header;
