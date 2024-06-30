"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { IcBanner, IcLogo } from "@/asset";
import {
  BiBell,
  BiPackage,
  BiChat,
  BiSearch,
  BiChevronLeft,
  BiChevronRight,
  BiGridAlt,
} from "react-icons/bi";
import Input from "@/component/Input";
import { useArray, useInput, useSlide } from "@/hooks";
import { searchMock, category } from "@/mock/search";
import { ICategory } from "@/type";
import style from "./header.module.scss";
import "./swipers.scss"

export default function Header() {
  const [search, changeSearch] = useInput("");
  // 5개씩 배열 나눔 
  const bestSearch = useArray(searchMock, 5);
  // 스와이퍼
  const { onPrevButton, onNextButton, swiperOptions, setSwiper } = useSlide();
  return (
    <header className={style.headerWrap}>
      {/* 배너 */}
      <div className={style.banner}>
        <Link href="/">
          <Image
            src={IcBanner}
            alt="banner"
            quality={100}
          />
        </Link>
      </div>
      <div className={style.headerOther}>
        <div className={style.headerMid}>
          <Link href="/">
            <IcLogo />
          </Link>
          <div className={style.searchBox}>
            {/* 검색창 */}
            <form className={style.form}>
              <label htmlFor="search">
                <BiSearch />
              </label>
              <Input
                type="text"
                placeholder="어떤 상품을 찾으시나요?"
                value={search}
                onchange={changeSearch}
                name="search"
                bg="search"
              />
            </form>
            {/* 슬라이드 */}
            <div className={`${style.searchBest} searchBest`}>
              <div className={style.navi}>
                <button onClick={onPrevButton}>
                  <BiChevronLeft />
                </button>
                <button onClick={onNextButton}>
                  <BiChevronRight />
                </button>
              </div>
              <Swiper
                {...swiperOptions.basic}
                {...swiperOptions.loop}
                {...swiperOptions.module}
                spaceBetween={10}
                {...swiperOptions.autoplay}
                onSwiper={(e) => setSwiper(e)}
              >
                {bestSearch.map((best, i) => (
                  <SwiperSlide key={i}>
                    {best.map((bests) => (
                      <Link href="/" className={style.searchbtn} key={bests.id}>
                        <span>{bests.id}. </span>
                        <p>{bests.name}</p>
                      </Link>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* 기타 버튼 */}
          <div className={style.buttonWrap}>
            <button
              data-tip="알림"
              className={`${style.buttons} ${style.bell}`}
            >
              <BiBell />
              알림
            </button>
            <Link href="/chat" data-tip="채팅" className={style.buttons}>
              <BiChat />
              채팅
            </Link>
            <Link href="/sell" data-tip="판매하기" className={style.buttons}>
              <BiPackage />
              판매하기
            </Link>

            <Link href="/login" className={style.login}>
              로그인
            </Link>
          </div>
        </div>
        {/* 카테고리 */}
        <nav className={style.nav}>
          <button className={style.navButton}>
            <p>
              <BiGridAlt />
              카테고리
            </p>
            <div>
              <ul className={style.category}>
                {category.map((categories: ICategory) => (
                  <li key={categories.id} className={style.categoryLink}>
                    <Link href="/">{categories.name}</Link>
                    <div className={style.depths}>
                      {categories.depth.map((depths) => (
                        <div key={depths.id}>
                          <Link href="/">{depths.name}</Link>
                          <div className={style.depths2}>
                            {depths.depth2?.map((depths2) => (
                              <Link href="/" key={depths2.id}>
                                {depths2.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <Link href="/">공지사항</Link>
          <Link href="/">이벤트</Link>
        </nav>
      </div>
    </header>
  );
}
