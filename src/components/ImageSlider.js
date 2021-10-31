import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 2rem;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: all 0.2s ease-out 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -4.5rem;
  }
  .slick-next {
    right: -4.5rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.4rem;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 0.4rem;
    img {
      height: auto;
      width: 100%;
    }

    &:hover {
      padding: 0;
      border: 0.4rem solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
  @media (max-width: 768px) {
    height: 50vh;
    a {
      height: 50vh;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        inset: 0;
      }
    }
  }
`;

export default ImageSlider;
