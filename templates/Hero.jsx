"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HomePage() {
  return (
    <section className="bg-slate-800 h-[75vh] mt-26 overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src="/img/home/banner.jpg"
            alt="hero"
            className="w-full object-cover h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/home/banner.jpg"
            alt="hero"
            className="w-full object-cover h-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
