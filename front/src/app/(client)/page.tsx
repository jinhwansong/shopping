import React from 'react'
import style from "./main.module.scss";
import Slide from './component/Slide';
import ItemContent from './component/ItemContent';
import { item } from '@/mock/item';

export default function page() {
  return (
    <main className={style.main}>
      <Slide />
      <ItemContent link="/" title="당신을 위한 추천상품!" items={item} />
      <ItemContent link="/" title="방금 등록된 상품" items={item} />
      <ItemContent link="/" title="실시간 인기상품" items={item} />
      <ItemContent link="/" title="지금 주목해야 할 추천 상품" items={item} />
    </main>
  );
}
