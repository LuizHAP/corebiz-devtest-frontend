import Slider from "react-slick";

interface SliderProps {
  children?: React.ReactNode;
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M13.1115 10.1416L3.3212 0.351461C3.09476 0.124845 2.79249 0 2.47018 0C2.14788 0 1.8456 0.124845 1.61917 0.351461L0.89818 1.07227C0.42903 1.54195 0.42903 2.30533 0.89818 2.7743L9.11932 10.9954L0.889058 19.2257C0.662621 19.4523 0.537598 19.7544 0.537598 20.0765C0.537598 20.399 0.662621 20.7011 0.889058 20.9279L1.61004 21.6485C1.83666 21.8752 2.13876 22 2.46106 22C2.78337 22 3.08564 21.8752 3.31208 21.6485L13.1115 11.8495C13.3385 11.6222 13.4631 11.3186 13.4624 10.996C13.4631 10.6721 13.3385 10.3687 13.1115 10.1416Z"
          fill="black"
        />{" "}
      </svg>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.88085 11.0047L13.111 2.77415C13.3376 2.54806 13.4623 2.24579 13.4623 1.92348C13.4623 1.60099 13.3376 1.29889 13.111 1.07246L12.3898 0.351642C12.1636 0.124846 11.8611 0 11.5388 0C11.2165 0 10.9144 0.124846 10.688 0.351642L0.888651 10.1508C0.661318 10.3779 0.53683 10.6814 0.537725 11.0041C0.53683 11.3282 0.661139 11.6314 0.888651 11.8587L10.6788 21.6484C10.9053 21.8752 11.2074 22 11.5299 22C11.8522 22 12.1543 21.8752 12.3809 21.6484L13.1019 20.9275C13.571 20.4584 13.571 19.6946 13.1019 19.2257L4.88085 11.0047Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
