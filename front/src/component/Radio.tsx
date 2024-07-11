import React from 'react'
import styles from "./radio.module.scss";

export default function Radio({
  children,
  name,
  id,
  onChange,
}: {
  children: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label htmlFor={id} className={styles.radio}>
      <input type="radio" name={name} value={id} id={id} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}
