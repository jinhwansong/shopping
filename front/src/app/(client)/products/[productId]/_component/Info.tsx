import React from 'react'
import styles from "./info.module.scss";
export default function Info({
  text,
  img,
  children,
}: {
  text: string;
  img: React.ReactNode;
  children: string;
}) {
  return (
    <div className={styles.shoppinginfo}>
      {img}
      <em>{text}</em>
      <p>{children}</p>
    </div>
  );
}
