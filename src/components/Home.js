import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 25rem);
  overflow-x: hidden;
  display: block;
  top: 5rem;
  padding: 0 calc(3.5vw + 0.5rem);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
