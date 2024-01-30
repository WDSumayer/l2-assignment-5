import Container from "../../Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import "./HeroSection.css";
const HeroSection = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://l2-assignment-5-back.vercel.app/allProducts"
      );
      const data = await res.json();

      return data;
    },
  });
  console.log(products);
  return (
    <div className="bg-[#02011B] pt-8 pb-16">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[57%]">
            <div className="hero-left">
              <div className="hero-overlay"></div>
              <img
                className="w-full"
                src="https://i.ibb.co/YBZstBD/heroImg.jpg"
              ></img>
              <div className="hero-left-text p-10">
                <h1 className="text-[48px] text-white font-bold">
                  New Packages For Winter
                </h1>
                <p className="text-white text-[18px]">
                  Ut posuere felis arcu tellus tempus in in ultricies. Gravida
                  id nibh ornare viverra. Ultrices faucibus neque velit risus ac
                  id lorem.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%] bg-[#01000D] p-5">
            <h1 className="text-center text-white font-bold text-[24px] uppercase pb-5 border-b-2 border-white">
              Our most popular services
            </h1>
            <div className="px-12">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {products.map((product, i) => (
                  <SwiperSlide key={i}>
                    <div className="mx-3">
                      <img src={product.img}></img>
                      <h1 className="text-white text-[32px] font-bold">
                        {product.title}
                      </h1>
                      {product.benefits.map((benefit) => (
                        <ul className="text-white text-[18px]">{benefit}</ul>
                      ))}
                      <button className="w-full btn mb-5">Details</button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
