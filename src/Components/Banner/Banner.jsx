import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "The best choice for your work",
      subTitle: "welcome to laptops",
      image: "/src/assets/Banner/laptop.png",
    },
    {
      id: 2,
      title: "Can talk anywhere",
      subTitle: "welcome to phones",
      image: "/src/assets/Banner/phone.png",
    },
    {
      id: 3,
      title: "Play games with the most powerful performance",
      subTitle: "welcome to vga",
      image: "/src/assets/Banner/vga.png",
    },
    {
      id: 4,
      title: "Experience ultimate convenience",
      subTitle: "Others",
      image: "/src/assets/Banner/headphone.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:container">
      <div className="slider-container slider_container w-full h-full">
        <Slider {...settings}>
          {products?.map((product) => (
            <div key={product?.id} className="banner_slide_item">
              {/* banner text  */}
              <div className="banner_text">
                <p className="text-sm font-inter text-[#272343] uppercase font-normal">
                  {product?.subTitle}
                </p>
                <h3 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">
                  {product?.title}
                </h3>
                <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg capitalize text-white cursor-pointer">
                  shop now <MoveRight />
                </button>
              </div>

              {/* banner image  */}
              <div className="banner_image  w-full h-full flex items-center justify-end">
                <img src={product?.image} alt={product?.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
