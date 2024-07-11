import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniChevronRight } from "react-icons/hi2";
import { IoHeartOutline, IoHeartSharp, IoSend } from "react-icons/io5";
import { FcPackage, FcInTransit, FcHighPriority, FcIdea } from "react-icons/fc";
import { Button } from "@/component";
import ItemContent from "../../_component/ItemContent";
import Slide from "../../_component/Slide";
import styles from "./product.module.scss";
import Info from "./_component/Info";

export default function page() {
  return (
    <>
      <section className={styles.productContainer}>
        <article className={styles.productImage}>
          <Slide slides="view" />
        </article>
        <article className={styles.detail}>
          <span className={styles.status}>새 상품</span>
          <h4 className={styles.title}>asdasdasdasdasdasd</h4>
          <p className={styles.price}>59,000원</p>
          <p className={styles.description}>
            좋아요 90 ∙ 조회 2398 ∙ 몇시간 전
          </p>
          <div className={styles.shopping}>
            <h5>상품정보</h5>
            <p>asdasdasdasdasd</p>
          </div>
          <div className={styles.shopping}>
            <h5>카테고리</h5>
            <div className={styles.location}>
              <Link href="/">홈</Link>
              <HiMiniChevronRight />
              <Link href="/search/1">로케이션</Link>
              <HiMiniChevronRight />
              <Link href="/search/1">로케이션</Link>
            </div>
          </div>
          <div className={styles.shopping}>
            <h5>태그</h5>
            <p>#asdasdasdasdasd</p>
          </div>
          <div className={styles.shopping}>
            <h5>배송정보</h5>
            <Info text="거래지역" img={<FcIdea />}>
              택배배송
            </Info>
            <Info text="배송방법" img={<FcInTransit />}>
              택배배송
            </Info>
            <Info text="배송비" img={<FcPackage />}>
              3,000원
            </Info>

            <div className={styles.important}>
              <FcHighPriority />
              <span>안전결제</span> 외 거래는 사기피해 보호를 받을 수 없습니다.
            </div>
          </div>
          <div className={styles.shoppingbtn}>
            <Button type="button" img={<IoHeartOutline />} bg="white">
              0
            </Button>
            <Button type="button" bg="f7" color="black" width="button3">
              셀러톡
            </Button>
            <Button type="button" width="button3">
              안전결제
            </Button>
          </div>
        </article>
      </section>
      <div className={styles.follower}>
        <Link href="/shop/${username}">
          <div className={styles.imagebox}>
            <Image
              src="https://picsum.photos/400/400"
              alt="https://picsum.photos/400/400"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.textbox}>
            <h6>asdasdasdasdasdasdasdasd</h6>
            <p>팔로워 90 ∙ 판매상품 2398</p>
          </div>
        </Link>
        <Button type="button" width="90">
          팔로우
        </Button>
      </div>
      <ItemContent />
    </>
  );
}
