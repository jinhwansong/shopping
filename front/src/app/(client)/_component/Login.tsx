'use client'
import React from 'react'
import Link from 'next/link';
import { Button, Input } from '@/component';
import { useInput } from "@/hooks";
import Social from './Social';
import style from "./login.module.scss";

export default function Login() {
    const [email, changeEmail] = useInput("")
    const [password, changePassword] = useInput("");
      return (
        <div>
          <form className={style.form}>
            <Input
              placeholder="이메일"
              type="text"
              value={email}
              onchange={changeEmail}
              name="email"
            />
            <Input
              placeholder="비밀번호"
              type="password"
              value={password}
              onchange={changePassword}
              name="password"
            />
            <Button type="submit">로그인</Button>
          </form>
          <div className={style.link}>
            <Link href="/signup">아이디찾기</Link>
            <Link href="/signup">비밀번호찾기</Link>
            <Link href="/signup/terms">회원가입</Link>
          </div>
          <Social />
        </div>
      );
}
