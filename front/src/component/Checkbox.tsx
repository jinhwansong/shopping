import React from 'react'
import { IuseCheck } from "@/type";
import style from "./checkbox.module.scss";

interface ICheckbox {
  id: string;
  weight?: string;
  children: string;
  checks?: string;
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({
  id,
  weight,
  children,
  checks,
  onChange,
  checked,
}: ICheckbox) {
  const check = [style.check, weight && style[`weight${weight as string}`]]
    .filter(Boolean)
    .join(" ");
  return (
    <label htmlFor={id} className={check}>
      <input
        type="checkbox"
        id={id}
        required
        className={style.checkbox}
        onChange={onChange}
        checked={checked}
      />
      <em>
        {children} {id !== "allCheck" && <span>{checks}</span>}
      </em>
    </label>
  );
}
