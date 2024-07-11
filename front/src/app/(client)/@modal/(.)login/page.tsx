'use client'
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiX } from "react-icons/bi";
import { IcLogo } from "@/asset";
import Login from "../../_component/Login";
import style from "./login.module.scss";

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/login") {
    return (
      <section className={style.popupWrap}>
        <article className={style.popup}>
          <div className={style.popupTop}>
            <p />
            <Link href="/">
              <IcLogo />
            </Link>
            <button onClick={() => router.back()}>
              <BiX />
            </button>
          </div>
          <Login />
        </article>
        <article className={style.popupBg} onClick={() => router.back()} />
      </section>
    );
  }
  return null;
}
