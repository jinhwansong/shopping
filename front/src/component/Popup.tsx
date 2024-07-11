import React from "react";
import { IoMdClose } from "react-icons/io";
import { usePopup } from "@/store/usePopup";
import styles from "./popup.module.scss";

interface IPopup {
  children: React.ReactNode;
  title: string;
}
export default function Login({ children, title }: IPopup) {
  const { closePopup } = usePopup((state) => state);
  return (
    <section className={styles.popwrap}>
      <article className={styles.popbox}>
        <button className={styles.close} onClick={closePopup}>
          <IoMdClose />
        </button>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </article>
      <div className={styles.popbg} onClick={closePopup} />
    </section>
  );
}
