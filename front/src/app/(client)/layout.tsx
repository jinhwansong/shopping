import type { Metadata } from "next";
import Header from "./component/Header";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "트렌드셀러",
  description: "트렌드셀러에 오신것을 환영합니다.",
};

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>
        {children}
        {modal}
      </div>
    </>
  );
};