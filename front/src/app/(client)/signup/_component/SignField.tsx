"use client"
import React from 'react'
import { Input,Button } from '@/component';
import style from "./signField.module.scss";

interface IForm {
  type: "text" | "password" | "email" | "number" | "tel";
  value: string;
  onchange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name: string;
  placeholder: string;
  error: string;
  maxLength?: number;
};

export default function SignField({
  maxLength,
  type,
  value,
  onchange,
  name,
  placeholder,
  error,
}: IForm) {
  return (
    <article className={style.article}>
      <label>{name}</label>
      <div>
        <Input
          type={type}
          value={value}
          onchange={onchange}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          height="50"
        />
        {(name === "이메일" || name === "닉네임") && (
          <Button type="button" width="100" height="50">
            중복확인
          </Button>
        )}
      </div>
      <p>{error}</p>
    </article>
  );
}
