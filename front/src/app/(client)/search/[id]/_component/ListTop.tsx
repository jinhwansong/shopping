"use client";
import React, { useCallback, useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import styles from "./search.module.scss";

export default function ListTop() {
  const sorts = ["추천순", "최근 등록순", "낮은 가격순", "높은 가격순"];
  const [option, setOption] = useState({
    Boolean: false,
    sort: sorts[0],
  });
  const onSort = useCallback(() => {
    setOption({ ...option, Boolean: !option.Boolean });
  }, [option.Boolean, option.sort]);

  const onSorts = useCallback(
    (name: string) => {
      setOption({ ...option, Boolean: false, sort: name });
    },
    [option.Boolean, option.sort]
  );
  return (
    <div className={styles.goodwrap}>
      <p className={styles.title}>
        <span>1234</span>개의 상품이 있습니다.
      </p>
      <div className={styles.sort}>
        <button
          className={styles.sortbutton}
          type="button"
          onClick={() => onSort()}
        >
          {option.sort}
          <HiOutlineArrowsUpDown />
        </button>
        {option?.Boolean && (
          <ul className={styles.sortlist}>
            {sorts?.map((name) => (
              <li key={name}>
                <button type="button" onClick={() => onSorts(name)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
