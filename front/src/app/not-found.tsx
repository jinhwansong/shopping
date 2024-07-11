import React from "react";
import Link from "next/link";
import { IcNotfound } from "@/asset";
import { BiSolidHome } from "react-icons/bi";
import Header from "./(client)/_component/Header";
import Footer from "./(client)/_component/Footer";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import style from "./notfound.module.scss";

export default function NotFound() {
    return (
      <>
        <Header />
        <section className={style.section}>
          
          <IcNotfound />
          <em>문제가 발생했습니다</em>
          <p>
            페이지를 찾을 수 없습니다.<br/> 입력하신 주소가 정확한지 다시 한 번
            확인해주세요.
          </p>
          <Link href="/">
            <BiSolidHome />
            트랜드셀러 홈으로가기
          </Link>
        </section>
        <Footer />
      </>
    );
}
