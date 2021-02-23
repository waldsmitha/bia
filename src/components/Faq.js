import styled from "styled-components";

function Faq() {
  return (
    <StyledFaq>
      <h1>Who are we?</h1>
      <p>
        Don’t exactly know. This started as a place for my artist friends to
        post their stuff and share. Where it goes from here, who knows? -Austin
      </p>
    </StyledFaq>
  );
}

const StyledFaq = styled.div`
  padding: 2rem;
  min-height: 50vh;
  h1 {
    padding: 2rem 0;
  }
`;

export default Faq;
