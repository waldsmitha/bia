import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { navAnim } from "../animations";
import { Link } from "react-router-dom";

function Nav({ navToggle, setNavToggle }) {
  // console.log(navToggle);

  const navClose = () => {
    setNavToggle(false);
    // console.log("Closing");
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
      <StyledNavItem>
        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>Home</h3>
        </Link>
        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>Top Artists</h3>
        </Link>
        <Link
          to="artists/week"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>Artists of the Week</h3>
        </Link>
        <Link
          to="artists"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>All Artists</h3>
        </Link>
        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>Article of the Week</h3>
        </Link>
        <Link
          to="articles"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>All Articles</h3>
        </Link>
        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>About</h3>
        </Link>
        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
          onClick={navClose}
        >
          <h3>FAQ</h3>
        </Link>
      </StyledNavItem>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  min-height: 100vh;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  left: -80%;
  /* left: 65%; */
  width: 80%;
  cursor: pointer;
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

const StyledNavItem = styled.div`
  border-top: 0.25rem solid #cfcfcf;
  color: black;
  h3 {
    border-bottom: 0.25rem solid #cfcfcf;
    padding: 2rem 0;
    cursor: pointer;
  }
`;

export default Nav;
