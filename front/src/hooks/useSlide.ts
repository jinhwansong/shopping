"use client";
import { useState } from "react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { SwiperClass } from "swiper/react";

export default function useSlide() {
  // 스와이퍼 슬라이드
  const [swiper, setSwiper] = useState<SwiperClass>();
  const onPrevButton = () => swiper?.slidePrev();
  const onNextButton = () => swiper?.slideNext();
  const swiperOptions = {
    module: {
      modules: [Navigation, Autoplay, Pagination],
    },
    basic: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    slide3: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    slide6: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
    loop: {
      loop: true,
      speed: 3000,
    },
    autoplay: {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    },
  };
  return {
    onPrevButton,
    onNextButton,
    swiperOptions,
    setSwiper,
  };
}
