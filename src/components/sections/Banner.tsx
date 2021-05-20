import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent 
      bottom-0 z-20"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/banner_1.jpg" alt="banner_1" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner_2.jpg" alt="banner_2" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner_3.jpg" alt="banner_3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
