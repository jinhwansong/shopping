import React from 'react'
import { NextResponse } from 'next/server';
import { IcGoogle, IcKakao, IcNaver } from "@/asset";
import styles from './social.module.scss'
export default  function Social() {
  const onKakao = ()=>{
    NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/kakao`)
  }
  return (
    <div className={styles.social}>
      <hr />
      <span>간편로그인</span>
      <div>
        <button type="button" onClick={() => onKakao()}>
          <IcKakao />
        </button>
        <button type="button">
          <IcNaver />
        </button>
        <button type="button">
          <IcGoogle />
        </button>
      </div>
    </div>
  );
}
