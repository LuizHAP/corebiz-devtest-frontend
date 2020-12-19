import Slider from "react-slick";

interface SliderProps {
  children?: React.ReactNode;
}

const settings = {
  dots: false,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const ProductsSlider = ({ children }: SliderProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default ProductsSlider;
