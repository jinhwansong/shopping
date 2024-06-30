import React from 'react'
import style from "./input.module.css";

interface Input {
  type: string;
  value: string;
  placeholder: string;
  onchange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  bg?:string
  name:string;
}

export default function Input({ value, type, placeholder, onchange, bg, name }: Input) {
  const input = [style.input, bg && style[`bg${bg as string}`]]
    .filter(Boolean)
    .join(" ");
  return (
    <input
      type={type}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
      className={input}
      name={name}
    />
  );
}
