import type { Metadata } from "next";
import localFont from "next/font/local";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "normalize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "트렌드셀러",
  description: "트렌드셀러에 오신것을 환영합니다.",
};
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={pretendard.variable}>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
