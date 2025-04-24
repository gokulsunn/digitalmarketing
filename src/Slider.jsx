import chairImage from "../images/chair.png";
import bookImage from "../images/bibel-2615221_1280.png";
import cycleImage from "../images/png-2757379_1280.png";
import React, { useState } from "react";
import avatar from "../images/pexels-pixabay-415829.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      content: `"I'm not a designer, when I had to make a logo I found myself staring at a blank screen. Web Integrate made the process actually enjoyable."`,
      author: "Valentyna Kuzmych",
      title: "CEO, PubLaw Project",
      image: chairImage,
    },
    {
      content: `"Web Integrate is an excellent tool for entrepreneurs who need quick and professional branding solutions."`,
      author: "John Doe",
      title: "Founder, Startup Inc.",
      image: bookImage,
    },
    {
      content: `"The templates provided were exactly what I needed to kickstart my project with a professional look."`,
      author: "Jane Smith",
      title: "Creative Director, Design Hub",
      image: cycleImage,
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className=" mt-[-200px]   mb-[30px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            className="flex items-center  justify-center bg-inherit pb-[50px]"
            style={{ zIndex: 100 }}
            key={index}
          >
            <div className="h-[200px]   bg-none"></div>
            <div className="flex h-[200px] xsm:h-[400px] pb-20 max-md:flex-col-reverse max-md:h-full  relative items-center justify-center bg-gradient-to-r from-yellow-50 to-[#fcd469]">
              <div className="flex flex-col items-start justify-end w-[300px]  ">
                <span className="text-[13px]">{slide.content}</span>
                <div className="flex justify-between items-center ">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={avatar}
                    alt="Rounded avatar"
                  />
                  <p className="text-[16px] font-semibold md:mt-[15px]">
                    {slide.author}
                  </p>
                </div>
                <p className="text-[16px]">{slide.title}</p>
              </div>
              <img
                src={slide.image}
                className="lg:w-[500px] xsm:w-[250px] mt-[-100px] "
                alt="Slide Image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
