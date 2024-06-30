import { ICategory } from "@/type";


export const searchMock = [
  { id: 1, name: "장난감" },
  { id: 2, name: "핫토이" },
  { id: 3, name: "발로란토" },
  { id: 4, name: "닌텐도" },
  { id: 5, name: "캠핑카" },
  { id: 6, name: "소닉" },
  { id: 7, name: "전기자전거" },
  { id: 8, name: "만년필" },
  { id: 9, name: "아이브" },
  { id: 10, name: "스타크래프트" },
  { id: 11, name: "장난감" },
  { id: 12, name: "핫토이" },
  { id: 13, name: "발로란토" },
  { id: 14, name: "닌텐도" },
  { id: 15, name: "캠핑카" },
  { id: 16, name: "소닉" },
  { id: 17, name: "전기자전거" },
  { id: 18, name: "만년필" },
  { id: 19, name: "아이브" },
  { id: 20, name: "스타크래프트" },
];

export const category: ICategory[] = [
  {
    id: 1,
    name: "패션의류",
    depth: [
      {
        id: 1,
        name: "여성의류",
        depth2: [
          { id: 1, name: "티셔츠/캐쥬얼의류" },
          { id: 2, name: "니트/스웨터/가디건" },
          { id: 3, name: "원피스/정장" },
          { id: 4, name: "블라우스/셔츠/남방" },
          { id: 5, name: "조끼/베스트" },
          { id: 6, name: "바지/팬츠/청바지" },
          { id: 7, name: "스커트/치마" },
          { id: 8, name: "자켓/코트" },
          { id: 9, name: "패딩/야상/점퍼" },
          { id: 10, name: "트레이닝복" },
        ],
      },
      {
        id: 2,
        name: "남성의류",
        depth2: [
          { id: 1, name: "티셔츠/캐쥬얼의류" },
          { id: 2, name: "니트/스웨터/가디건" },
          { id: 3, name: "정장" },
          { id: 4, name: "조끼/베스트" },
          { id: 5, name: "셔츠/남방" },
          { id: 6, name: "바지/팬츠/청바지" },
          { id: 7, name: "자켓/코트" },
          { id: 8, name: "패딩/야상/점퍼" },
          { id: 9, name: "트레이닝복" },
          { id: 10, name: "언더웨어/잠옷" },
        ],
      },

      { id: 3, name: "교복/체육복/단복" },
      {
        id: 4,
        name: "클로젯셰어",
        depth2: [
          { id: 1, name: "상의/하의" },
          { id: 2, name: "원피스" },
          { id: 3, name: "아우터" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "패션잡화",
    depth: [
      {
        id: 1,
        name: "운동화",
        depth2: [
          { id: 1, name: "런닝화/워킹화" },
          { id: 2, name: "단화/캐쥬얼화" },
        ],
      },
      {
        id: 2,
        name: "여성신발",
        depth2: [
          { id: 1, name: "가보시/웨지힐/통굽" },
          { id: 2, name: "펌프스/하이힐" },
          { id: 3, name: "토오픈/오픈힐" },
          { id: 4, name: "단화/로퍼" },
          { id: 5, name: "워커/부츠/부티" },
          { id: 6, name: "샌들/슬리퍼" },
          { id: 7, name: "슬링백/뮬/블로퍼" },
        ],
      },
      {
        id: 3,
        name: "남성신발",
        depth2: [
          { id: 1, name: "단화/로퍼/구두" },
          { id: 2, name: "워커/부츠" },
          { id: 3, name: "샌들/슬리퍼" },
        ],
      },
      {
        id: 4,
        name: "가방/핸드백",
        depth2: [
          { id: 1, name: "숄더백" },
          { id: 2, name: "크로스백" },
          { id: 3, name: "토트백" },
          { id: 4, name: "백팩" },
          { id: 5, name: "힙색/세컨백" },
          { id: 6, name: "파우치/클러치백" },
          { id: 7, name: "서류가방" },
          { id: 8, name: "여행가방" },
        ],
      },
      {
        id: 5,
        name: "지갑/벨트",
        depth2: [
          { id: 1, name: "여성용지갑" },
          { id: 2, name: "남성용지갑" },
          { id: 3, name: "머니클립/명함/키지갑" },
          { id: 4, name: "벨트/멜빵" },
        ],
      },
      {
        id: 6,
        name: "악세서리/귀금속",
        depth2: [
          { id: 1, name: "반지/귀걸이" },
          { id: 2, name: "목걸이/팬던트" },
          { id: 3, name: "팔찌/발찌" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "뷰티",
    depth: [
      {
        id: 1,
        name: "스킨케어",
      },
      {
        id: 2,
        name: "메이크업",
        depth2: [
          { id: 1, name: "베이스 메이크업" },
          { id: 2, name: "아이 메이크업" },
          { id: 3, name: "립 메이크업" },
          { id: 4, name: "치크/하이라이터/쉐딩" },
        ],
      },
      {
        id: 3,
        name: "팩/클렌징/필링",
      },
      {
        id: 4,
        name: "헤어/바디",
      },
      {
        id: 5,
        name: "향수",
      },
    ],
  },

  {
    id: 4,
    name: "출산/유아동",
    depth: [
      {
        id: 1,
        name: "출산/육아용품",
        depth2: [
          { id: 1, name: "모유수유용품" },
          { id: 2, name: "분유수유용품" },
          { id: 3, name: "튼살크림/스킨케어" },
          { id: 4, name: "임부복/수유복/언더웨어" },
          { id: 5, name: "물티슈/기저귀" },
          { id: 6, name: "분유/이유식" },
          { id: 7, name: "아기띠/기저귀가방" },
          { id: 8, name: "신생아/영유아의류" },
          { id: 9, name: "유아로션/목욕용품" },
          { id: 10, name: "유아건강/위생용품" },
          { id: 11, name: "유모차/웨건" },
        ],
      },
      {
        id: 2,
        name: "유아동안전/실내용품",
        depth2: [
          { id: 1, name: "카시트" },
          { id: 2, name: "놀이매트" },
          { id: 3, name: "보행기/쏘서/바운서/부스터" },
        ],
      },
      {
        id: 3,
        name: "유아동의류",
        depth2: [
          { id: 1, name: "유아용의류" },
          { id: 2, name: "아동용의류" },
          { id: 3, name: "내의/잠옷/속옷" },
          { id: 4, name: "패딩/자켓" },
          { id: 5, name: "한복/소품" },
        ],
      },
      {
        id: 4,
        name: "유아동의류",
        depth2: [
          { id: 1, name: "구두/운동화/샌들/부츠" },
          { id: 2, name: "장화/우비/우산" },
          { id: 3, name: "모자/장갑" },
          { id: 4, name: "책가방/여행가방" },
        ],
      },
      {
        id: 5,
        name: "유아동가구",
        depth2: [
          { id: 1, name: "침대/매트리스" },
          { id: 2, name: "옷장/서랍장" },
          { id: 3, name: "책상/공부상/책장" },
          { id: 4, name: "의자/소파/빈백" },
        ],
      },
      {
        id: 6,
        name: "유아동교구/완구",
        depth2: [
          { id: 1, name: "신생아완구" },
          { id: 2, name: "원목교구" },
          { id: 3, name: "음악놀이/자석교구" },
          { id: 4, name: "전동차/핫휠" },
          { id: 5, name: "로봇" },
          { id: 6, name: "인형/디즈니의상" },
          { id: 7, name: "블록/레고" },
          { id: 8, name: "대형 완구용품" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "모바일/태블릿",
    depth: [
      {
        id: 1,
        name: "스마트폰",
        depth2: [
          { id: 1, name: "삼성" },
          { id: 2, name: "애플" },
          { id: 3, name: "LG" },
          { id: 4, name: "기타 제조사" },
        ],
      },
      {
        id: 2,
        name: "태블릿PC",
        depth2: [
          { id: 1, name: "삼성" },
          { id: 2, name: "애플" },
          { id: 3, name: "기타 제조사" },
        ],
      },
      {
        id: 3,
        name: "스마트워치/밴드",
      },
      {
        id: 4,
        name: "일반/피쳐폰",
      },
      {
        id: 5,
        name: "케이스/거치대/보호필름",
      },
      {
        id: 6,
        name: "배터리/충전기/케이블",
      },
      {
        id: 7,
        name: "메모리/젠더/리더기",
      },
    ],
  },
  {
    id: 6,
    name: "가전제품",
    depth: [
      {
        id: 1,
        name: "냉장고",
      },
      {
        id: 2,
        name: "TV",
      },
      {
        id: 3,
        name: "세탁기/건조기",
      },
      {
        id: 4,
        name: "주방가전",
        depth2: [
          { id: 1, name: "전기밥솥" },
          { id: 2, name: "가스/전기레인지" },
          { id: 3, name: "전자레인지/오븐/제빵기" },
          { id: 4, name: "정수기/탄산수제조기" },
          { id: 5, name: "커피기기" },
          { id: 6, name: "살균기/세척기" },
          { id: 7, name: "주방소형가전" },
          { id: 8, name: "업소용주방가전" },
        ],
      },
      {
        id: 5,
        name: "스마트홈",
        depth2: [
          { id: 1, name: "인공지능 스피커" },
          { id: 2, name: "360카메라/홈캠" },
          { id: 3, name: "스마트 램프/플러그/스위치" },
          { id: 4, name: "영상가전" },
          { id: 5, name: "영상플레이어" },
          { id: 6, name: "프로젝터/스마트빔" },
          { id: 7, name: "전자사전/PMP/DMB" },
        ],
      },
      {
        id: 6,
        name: "음향가전",
        depth2: [
          { id: 1, name: "이어폰/헤드폰" },
          { id: 2, name: "스피커" },
          { id: 3, name: "마이크" },
          { id: 4, name: "음향플레이어" },
          { id: 5, name: "오디오/홈시어터" },
          { id: 6, name: "LP/턴테이블" },
          { id: 7, name: "리시버/앰프" },
          { id: 8, name: "보이스레코더" },
        ],
      },
      {
        id: 7,
        name: "계절가전",
        depth2: [
          { id: 1, name: "공기청정기/가습기/제습기" },
          { id: 2, name: "히터/난방/온풍기" },
          { id: 3, name: "전기/온수매트" },
          { id: 4, name: "에어컨" },
          { id: 5, name: "선풍기/냉풍기" },
        ],
      },
    ],
  },
];
