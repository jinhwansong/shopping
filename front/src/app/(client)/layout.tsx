import React from "react";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import style from "./main.module.scss";
import { RQProvider } from "@/hooks";
export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <RQProvider>
      <Header />
      <div className={style.main}>
        {children}
        {modal}
      </div>
      <Footer />
    </RQProvider>
  );
}
