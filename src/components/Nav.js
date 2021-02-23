import { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { navAnim } from "../animations";

function Nav({ navToggle, setNavToggle }) {
  console.log(navToggle);

  const [apple, setApple] = useState(0);
  console.log(apple);

  const navClose = () => {
    setNavToggle(false);
    console.log("Closing");
  };

  // useEffect(() => {
  //   navClose();
  // }, []);

  return (
    <StyledNav
      variants={navAnim}
      initial="hide"
      animate={navToggle ? "show" : "hide"}
    >
      <StyledHeader onClick={navClose}>
        <h1>Close</h1>
        <FontAwesomeIcon size="3x" icon={faTimes}></FontAwesomeIcon>
      </StyledHeader>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  min-height: 100vh;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  left: -80%;
  width: 80%;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    padding-right: 2rem;
  }
`;

export default Nav;
