"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Checkbox } from "@/component";
import { useCheck } from "@/hooks";
import { check } from "@/mock/signup";
import style from "./terms.module.scss";


export default function page() {
  const [checkbox, singlecheck, allcheck,essentialCheck] = useCheck(check);
  const router = useRouter();
  const onLink = () => router.push("/signup/signup");
  return (
    <section className={style.section}>
      <h4>
        <span>이용약관</span>에 먼저
        <br />
        동의해주세요
      </h4>
      <div className={style.allCheck}>
        <Checkbox
          id="allCheck"
          weight="700"
          onChange={allcheck}
          checked={checkbox.every((item) => item.isChecked)}
        >
          전체동의
        </Checkbox>
      </div>
      <div className={style.checks}>
        {checkbox.map((checkboxs) => (
          <Checkbox
            id={checkboxs.id}
            checks={checkboxs.checks}
            key={checkboxs.id}
            checked={checkboxs.isChecked}
            onChange={() => singlecheck(checkboxs.id)}
          >
            {checkboxs.name}
          </Checkbox>
        ))}
      </div>
      <p className={style.message}>
        고객은 동의를 거부할 권리가 있으며 동의를 거부할 경우, 사이트 가입 또는
        일부 서비스 이용이 제한됩니다.
      </p>
      <Button type="button" onClick={onLink} disabled={!essentialCheck()}>
        다음단계로
      </Button>
    </section>
  );
}
