"use client";

import HeroCarouselCard from "./HeroCarouselCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={-6}
      centeredSlides={true}
      slidesPerView={1.5}
      loop={true}
      className=""
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="">
        <HeroCarouselCard></HeroCarouselCard>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <HeroCarouselCard></HeroCarouselCard>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <HeroCarouselCard></HeroCarouselCard>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <HeroCarouselCard></HeroCarouselCard>
      </SwiperSlide>
    </Swiper>
  );
}
