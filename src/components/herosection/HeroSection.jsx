import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const carouselData = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
  },
];

function HeroSection() {
  const items = carouselData.map((e, i) => (
    <img
      key={i}
      src={e.image}
      className="cursor-pointer"
      role="presentation"
      alt="img"
    />
  ));

  return (
    <div className="w-full">
      <AliceCarousel
        animationType="fadeout"
        animationDuration={1000}
        mouseTracking
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        infinite
        controlsStrategy="alternate"
        itemsFit="fill"
      />
    </div>
  );
}

export default HeroSection;
