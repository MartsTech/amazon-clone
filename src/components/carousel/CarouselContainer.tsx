import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];

interface CarouselContainerProps {}

const CarouselContainer: React.FC<CarouselContainerProps> = ({}) => {
  return (
    <Carousel
      className="sm:m-12 sm:rounded-lg shadow-md overflow-hidden"
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      {images.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={index} src={`/images/slides/${image}`} alt="carousel" />
      ))}
    </Carousel>
  );
};

export default CarouselContainer;
