import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

import { useHistory } from "react-router-dom";

import ScrollTop from "../components/ScrollTop";

function Artist({ artists }) {
  // console.log(artists[0]);
  const history = useHistory();
  const urlArtist = history.location.pathname.split("/")[2];
  console.log(`url Artist: ${urlArtist}`);
  // const selectedArtist = artists.map((artist) => artist.name);
  const selectedArtist = artists.filter((artist) => artist.id === urlArtist);
  console.log(`selectedArtist: ${selectedArtist}`);
  console.log(artists[0].id);

  return (
    <StyledArtist variants={pageAnim} initial="hide" animate="show" exit="exit">
      <h1>{selectedArtist[0].name}</h1>
      <img src={selectedArtist[0].profileImage} alt="" />
      <p>{selectedArtist[0].bio}</p>
      <h2>Portfolio</h2>
      {selectedArtist[0].portfolio.map((url) => (
        <img src={url} alt="" />
      ))}
      <ScrollTop />
    </StyledArtist>
  );
}
const StyledArtist = styled(motion.div)`
  h1 {
    padding: 1rem 0 0 1rem;
  }
  h2,
  p {
    padding: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    max-height: 50vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Artist;
