import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <h1>Austin Waldsmith @2021</h1>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  background: rgba(123, 205, 223, 0.55);
  color: #ffa1a1;
  h1 {
    font-size: 2rem;
  }
`;
export default Footer;
