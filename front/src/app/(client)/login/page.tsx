import React from 'react'
import Link from "next/link";
import Login from '../_component/Login';
import { IcLogo } from '@/asset';
import style from "./login.module.scss";

export default function page() {
  return (
    <section className={style.section}>
      <Link href="/">
        <IcLogo />
      </Link>
      <p>로그인 후 이용하실 수 있습니다.</p>
      <Login />
    </section>
  );
}
