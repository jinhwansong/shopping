"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { LuSearch } from "react-icons/lu";
import { Button, Input, Popup, Radio } from "@/component";
import getAddress from "@/lib/getAddress";
import getLocal from "@/lib/getLocal";
import { useInput, useNumber, useTag } from "@/hooks";
import { usePopup } from "@/store/usePopup";
import { IcSell } from "@/asset";
import styles from "./sell.module.scss";

export default function page() {
  /* 제목 */
  const [title, onTitle] = useInput("");
  /* 내용 */
  const [content, onContent] = useInput("");
  /* 검색시 장소 */
  const [searchPlace, onSearchPlace, setSearchPlace] = useInput("");
  /* 가격 */
  const [pay, onPay] = useNumber("");
  /* 배달비 */
  const [deliveryPay, onDeliveryPay] = useNumber("");
  /* 직거래유무 */
  const [delivery, onDelivery] = useInput("");
  /* 태그 */
  const { tags, tag, addTag, deleteTag, onTag } = useTag();
  /* 장소선택 */
  const { openPopup, isPopupOpen } = usePopup((state) => state);
  /* 현재 장소 */
  const [place, onPlace, setPlace] = useInput("");

  /* 현재 좌표 */
  const [map, setMap] = useState({
    lat: 0,
    lon: 0,
    currentEnabled: false,
    searchEnabled: false,
    searchloc: "",
  });
  /* 현재위치 */
  const {
    data: currentMap,
    isError: currentMapError,
    refetch: currentMapRefetch,
  } = useQuery({
    queryKey: ["address", map.lat, map.lon],
    queryFn: getAddress,
    enabled: map.currentEnabled,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  /* 현재좌표 불러오기 */
  const onCurrentMap = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        setMap({
          ...map,
          lat,
          lon,
          currentEnabled: true,
          searchEnabled: false,
        });
      });
    }
  }, [map]);
  /* 장소찾기 */
  const {
    data: searchMap,
    isError: searchMapError,
    refetch: searchMapRefetch,
  } = useQuery({
    queryKey: ["searchAddress", map.searchloc],
    queryFn: getLocal,
    enabled: map.searchEnabled,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchPlace.trim() === "") return alert("희망지역을 적어주세요.");
      setMap({
        ...map,
        searchEnabled: true,
        currentEnabled: false,
        searchloc: searchPlace,
      });
    },
    [map, searchPlace]
  );
  // 내위치 희망지역 입력후 데이터 보내기
  useEffect(() => {
    if (map.currentEnabled) {
      currentMapRefetch();
    }
    if (map.searchEnabled) {
      searchMapRefetch();
    }
  }, [
    map.currentEnabled,
    map.searchEnabled,
    currentMapRefetch,
    searchMapRefetch,
  ]);
  // 팝업 닫을시 글자 초기화
  useEffect(() => {
    if (!isPopupOpen) {
      setSearchPlace("");
    }
  }, [isPopupOpen]);
  // 내위치 희망지역 둘다 설정시
  useEffect(() => {
    if (currentMap) setPlace(currentMap);
  }, [currentMap]);
  return (
    <div>
      <div className={styles.title}>
        <h2>상품등록</h2>
        <p>
          <span>*필수항목</span>은 꼭 입력해주세요
        </p>
      </div>
      <ul>
        {/* // 상품이미지 */}
        <li className={styles.list}>
          <em>
            상품이미지<span>*</span>
          </em>
          <label className={styles.label}>
            <Image src={IcSell} alt="판매이미지" />
            <input
              type="file"
              multiple
              accept="image/jpg, image/jpeg, image/png"
            />
          </label>
        </li>
        {/* // 상품명 */}
        <li className={styles.list}>
          <em>
            상품명<span>*</span>
          </em>
          <Input
            type="text"
            value={title}
            onChange={onTitle}
            name="상품명"
            placeholder="상품명을 적어주세요"
          />
        </li>
        {/* // 태그 */}
        <li className={styles.list}>
          <em>태그</em>
          <div className={styles.tag}>
            <Input
              type="text"
              name="tag"
              placeholder="태그를 입력하세요 (엔터 또는 쉼표구분 최대 5개)"
              onChange={onTag}
              value={tag}
              onKeyDown={addTag}
            />
            <div>
              {tags.map((tag) => (
                <span key={tag}>
                  #{tag}
                  <button type="button" onClick={() => deleteTag(tag)}>
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>
        </li>
        {/* // 상품설명 */}
        <li className={styles.list}>
          <em>
            상품설명<span>*</span>
          </em>
          <textarea
            name="상품설명"
            placeholder="상품설명을 적어주세요"
            value={content}
            onChange={onContent}
            className={styles.textarea}
          />
        </li>
        {/* // 상품가격 */}
        <li className={styles.list}>
          <em>
            상품가격<span>*</span>
          </em>
          <div className={styles.pay}>
            <Input
              type="text"
              value={pay}
              onChange={onPay}
              name="상품가격"
              placeholder="상품가격을 적어주세요"
            />
            <span>원</span>
          </div>
        </li>
        {/* // 상품카테고리 */}
        <li className={styles.list}>
          <em>
            카테고리<span>*</span>
          </em>
          <div className={styles.category}>
            <div>
              {["여성 의류", "남성의류"].map((v) => (
                <button key={v}>{v}</button>
              ))}
            </div>
            <div>
              {["여성 의류", "남성의류"].map((v) => (
                <button key={v}>{v}</button>
              ))}
            </div>
          </div>
        </li>
        {/* // 거래방법 */}
        <li className={styles.list}>
          <em>
            거래방법<span>*</span>
          </em>
          {/* 택배거래  */}
          <div>
            <div className={styles.delivery}>
              <Radio name="delivery" id="yes" onChange={onDelivery}>
                택배거래
              </Radio>
              <Radio name="delivery" id="no" onChange={onDelivery}>
                직거래
              </Radio>
            </div>
            {delivery === "no" && (
              <div className={`${styles.direct} ${styles.deliverys}`}>
                <Button
                  type="button"
                  bg="f7"
                  width="20"
                  onClick={onCurrentMap}
                >
                  내 위치
                </Button>
                <Button type="button" width="20" onClick={openPopup}>
                  희망지역
                </Button>
                <Input
                  type="text"
                  value={place}
                  onChange={onPlace}
                  name="place"
                  placeholder="지역을 설정해주세요."
                  bg="f7"
                />
              </div>
            )}
            {delivery === "yes" && (
              <div className={`${styles.pay} ${styles.deliverys}`}>
                <Input
                  type="text"
                  value={deliveryPay}
                  onChange={onDeliveryPay}
                  name="배달비"
                  placeholder="배달비을 적어주세요"
                />
                <span>원</span>
              </div>
            )}
          </div>
        </li>
      </ul>
      {isPopupOpen && (
        <Popup title="주소 검색">
          <form className={styles.inputwrap} onSubmit={onSearch}>
            <Input
              type="text"
              value={searchPlace}
              onChange={onSearchPlace}
              name="searchPlace"
              placeholder="지역을 검색해주세요."
            />

            <button type="submit">
              <LuSearch />
            </button>
          </form>
          <div className={styles.searchMap}>
            {!searchMap ? (
              <p>찾으시는 주소를 검색해주세요</p>
            ) : searchMap.length > 0 ? (
              searchMap.map((loc: string, i: number) => (
                <button key={i}>{loc}</button>
              ))
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </div>
        </Popup>
      )}
    </div>
  );
}
