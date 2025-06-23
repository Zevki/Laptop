import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Laptop ASUS ExpertBook B1 B1402CVA NK1280",
      status: "New",
      price: "13.490.000 VND",
      image: "/src/assets/features/laptop1.png",

    },
    {
      title: "Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP",
      status: "New",
      price: "15.290.000 VND",
      image: "/src/assets/features/laptop2.png",
    },
    {
      title: "Laptop MSI Prestige 14 AI Studio C1UDXG 058VN",
      status: "New",
      price: "28.790.000 VND",
      image: "/src/assets/features/laptop3.png",
    },
    {
      title: "Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB",
      status: "Sales",
      price: "24.990.000 VND",
      image: "/src/assets/features/laptop4.png",
      currentPrice: "20.990.000 VND",
    },
    {
      title: "Samsung Galaxy S25 Ultra 12GB 256GB",
      price: "28.490.000 VND",
      image: "/src/assets/features/phone1.png",
    },
    {
      title: "Samsung Galaxy S25 256GB",
      price: "19.690.000 VND",
      image: "/src/assets/features/phone2.png",
    },
    {
      title: "iPhone 16 Pro Max 256GB",
      price: "30.490.000 VND",
      image: "/src/assets/features/phone3.png",
    },
    {
      title: "ASUS Prime GeForce RTX 5070 Ti 16GB GDDR7 OC Edition",
      status: "New",
      price: "29.490.000 VND",
      image: "/src/assets/features/vga1.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="lg:container mx-auto ">
        <SectionTitle title="Featured Products" mb="mb-11"></SectionTitle>

        <div className="slider-container features_slider w-full h-full">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="feature_image mb-4 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={feature?.image}
                    alt={feature?.title}
                  />
                  {feature?.status && (
                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature?.status}
                      </button>
                    </div>
                  )}
                </div>
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                      {feature?.title}
                    </h4>
                    <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </span>
                  </div>
                  <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                    {feature?.price}
                    {feature?.currentPrice && (
                      <span className="text-sm text-[#9a9caa] font-inter font-normal">
                        {feature?.currentPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
