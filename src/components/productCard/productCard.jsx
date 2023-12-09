import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
  };

  return (
    <section className="body-font text-gray-600">
      <div className="w-full  pb-4">
        <div className="rounded-lg border border-gray-200 bg-white px-10 lg:px-28">
          <p className="py-5 text-xl font-bold ">BEST SELLING ITEMS</p>
          <div className="mb-6">
            <Slider {...settings}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
