"use client";
import React from "react";
import { useVaild } from "@/hooks";
import { onEmail, onPassword, onPasswordCheack, onName, onPhone } from "@/hooks/useSign";
import SignField from "../_component/SignField";
import style from "./signup.module.scss";
import { Button } from "@/component";
export default function page() {
  const [email, changeEmail, emailError] = useVaild("", onEmail);
  const [password, changePassword, passwordError] = useVaild("", onPassword);
  const [passwordCheack, changePasswordCheack, passwordCheackError] = useVaild(
    "",
    (value) => onPasswordCheack(password, value)
  );
  const [name, changeName, nameError] = useVaild("", onName);
  const [nickname, changeNickname, nicknameError] = useVaild("", onName);
  const [phone, changePhone, phoneError] = useVaild("010", onPhone);
  return (
    <section className={style.section}>
      <h4>
        거이 다왔어요! <br /> <span>회원정보</span>를 입력해주세요
      </h4>
      <form>
        <SignField
          type="text"
          value={email}
          onchange={changeEmail}
          name="이메일"
          placeholder="example@trand.com"
          error={emailError}
        />
        <SignField
          type="password"
          value={password}
          onchange={changePassword}
          name="비밀번호"
          placeholder="8자이상 영문 숫자 특수문자 포함"
          error={passwordError}
        />
        <SignField
          type="password"
          value={passwordCheack}
          onchange={changePasswordCheack}
          name="비밀번호 확인"
          placeholder="8자이상 영문 숫자 특수문자 포함"
          error={passwordCheackError}
        />
        <SignField
          type="text"
          value={name}
          onchange={changeName}
          name="이름"
          placeholder="지젤"
          error={nameError}
        />
        <SignField
          type="text"
          value={nickname}
          onchange={changeNickname}
          name="닉네임"
          placeholder="지젤"
          error={nicknameError}
        />
        <SignField
          type="tel"
          value={phone}
          onchange={changePhone}
          name="휴대폰"
          placeholder="-없이 숫자만 입력"
          error={phoneError}
          maxLength={11}
        />
        <Button
          type="submit"
          disabled={
            !(
              phoneError === "" &&
              nicknameError === "" &&
              nameError === "" &&
              passwordCheackError === "" &&
              passwordError === "" &&
              emailError === "" &&
              email.length > 0 &&
              password.length > 0 &&
              passwordCheack.length > 0 &&
              name.length > 0 &&
              nickname.length > 0 &&
              phone.length > 0
            )
          }
        >
          회원가입
        </Button>
      </form>
    </section>
  );
}
