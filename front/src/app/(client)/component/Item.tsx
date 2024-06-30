"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTime } from "@/hooks";
import style from "./item.module.scss";

interface IItem {
  title: string;
  price: number;
  time: string;
  img: string;
  place: string;
  id: number;
}
export default function Item({ title, price, time, img, place, id }: IItem) {
  const times = useTime(time);
  return (
    <Link href={`/product/${id}`}>
      <div className={style.imgBox}>
        <Image src={img} alt={title} width={400} height={400} />
      </div>
      <div className={style.textBox}>
        <strong>{title}</strong>
        <em>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</em>
        <p>
          <span>{place}</span>
          <span>{times}</span>
        </p>
      </div>
    </Link>
  );
}
