"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Item from "./Item";
import { useSlide } from "@/hooks";
import style from "./ItemContent.module.scss";
import "./swipers.scss";

interface IItemContent {
  link: string;
  title: string;
  items: {
    id: number;
    time: string;
    price: number;
    img: string;
    title:string;
    place: string;
  }[];
}

export default function ItemContent({ title, link, items }: IItemContent) {
  const { onPrevButton, onNextButton, swiperOptions, setSwiper } = useSlide();
  return (
    <section className={`${style.section} `}>
      <h4>
        {title} <Link href={link}>바로가기 &gt;</Link>
      </h4>
      <div className={style.slide}>
        <div className={style.navi}>
          <button onClick={onPrevButton}>
            <BiChevronLeft />
          </button>
          <button onClick={onNextButton}>
            <BiChevronRight />
          </button>
        </div>
        <Swiper
          {...swiperOptions.module}
          {...swiperOptions.slide6}
          spaceBetween={10}
          pagination={{ clickable: true }}
          onSwiper={(e) => setSwiper(e)}
          className="itemSlide"
        >
          {items.map((items) => (
            <SwiperSlide key={items.id}>
              <Item
                title={items.title}
                price={items.price}
                time={items.time}
                img={items.img}
                place={items.place}
                id={items.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
