import React from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { SiTistory } from "react-icons/si";
import style from "./footer.module.scss";
export default function Footer() {
    const help = [
      { id: 1, name: "공지사항", link: "/" },
      { id: 2, name: "자주 묻는 질문", link: "/" },
      { id: 3, name: "이용약관", link: "/" },
      { id: 4, name: "개인정보 처리방침", link: "/" },
      { id: 5, name: "청소년보호정책", link: "/" },
    ];
  return (
    <footer className={style.footer}>
      <div>
        <div className={style.footerleft}>
          <div>
            <em>헬프센터</em>
            {help.slice(0, 2).map((helps) => (
              <Link href={helps.link} key={helps.id}>
                {helps.name}
              </Link>
            ))}
          </div>
          <div>
            <em>운영정책</em>
            {help.slice(2).map((helps) => (
              <Link href={helps.link} key={helps.id}>
                {helps.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.footerright}>
          <Link href="https://song7022556.tistory.com/">
            <SiTistory />
          </Link>
          <Link href="https://github.com/jinhwansong">
            <IoLogoGithub />
          </Link>
        </div>
        <div className={style.copy}>
          <p>
            <span>트렌드셀러 대표자 : 송진환 ㅣ</span>
            <span>사업자 등록번호 : 없쩌영 ㅣ</span>
            <span>통신판매신고번호 : 없쩌영</span>
            <br />
            <span>주소 : 서울특별시 마포구 성산동 ㅣ</span>
            <span>대표번호 : 010-1234-1234 ㅣ</span>
            <span>메일 : song7022556@gmail.com ㅣ</span>
            <span>호스팅제공자 : Amazon Web Services (AWS)</span>
          </p>
          <strong>
            트렌드셀러는 통신판매중개자로서 거래당사자가 아니며, 판매자가 등록한
            상품정보 및 거래에 대해 트렌드셀러은 일체 책임을 지지 않습니다.
          </strong>
          <em>Copyright ⓒ 2024 Trend Seller Inc. All Rights Reserved.</em>
        </div>
      </div>
    </footer>
  );
}
