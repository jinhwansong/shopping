'use client'
import React from 'react'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { mainSlide } from '@/mock/slide';
import { useSlide } from "@/hooks";
import style from "./slide.module.scss";
import "./swipers.scss";

export default function Slide() {
    const {
      onPrevButton,
      onNextButton,
      swiperOptions,
      setSwiper,
    } = useSlide();
  return (
    <section className={style.section}>
      <div className={style.navi}>
        <button onClick={onPrevButton}>
          <BiChevronLeft />
        </button>
        <button onClick={onNextButton}>
          <BiChevronRight />
        </button>
      </div>
      <Swiper
        {...swiperOptions.loop}
        {...swiperOptions.module}
        {...swiperOptions.autoplay}
        {...swiperOptions.slide3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        onSwiper={(e) => setSwiper(e)}
        className="mainslide"
      >
        {mainSlide.map((swipers) => (
          <SwiperSlide key={swipers.id}>
            <Link href="/" className={style.swiper}>
              <div className={style.swiperImg}>{swipers.img}</div>
              <div className={style.swiperText}>
                <em>{swipers.title}</em>
                <em>{swipers.title2}</em>
                <p>{swipers.sub}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
