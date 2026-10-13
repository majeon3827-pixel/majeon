/**
 * 사이트의 모든 문구·스펙·연락처는 이 파일 한 곳에서 관리합니다.
 * 출처: majeon.my.canva.site 원본 페이지 + Google Drive 제품 자료(제품소개서, 사용/설치설명서)
 */

export const brand = {
  name: "MAJEON",
  nameKo: "마전",
  company: "목화기업",
  companyEn: "MOKHWA ent.",
  tagline: "당신의 생활을 쾌적하게, 고품격 전동 빨래건조대",
  url: "https://majeon.co.kr",
};

export const nav = [
  { href: "#brand", label: "브랜드" },
  { href: "#features", label: "특징" },
  { href: "#products", label: "제품" },
  { href: "#compare", label: "비교" },
  { href: "#downloads", label: "자료실" },
  { href: "#contact", label: "문의" },
];

export const hero = {
  eyebrow: "For Your Life-Style",
  title: ["버튼 하나로 내려오고,", "빛과 바람으로 말립니다."],
  description:
    "마전은 리모컨으로 건조봉을 올리고 내리는 전동 빨래건조대입니다. LED 조명과 송풍 건조로 좁은 베란다를 넓게, 장마철 빨래를 가볍게 만듭니다.",
  primaryCta: { href: "#products", label: "제품 보기" },
  secondaryCta: { href: "#contact", label: "설치·견적 문의" },
  stats: [
    { value: "1등급", label: "에너지소비효율" },
    { value: "20kg", label: "권상 용량" },
    { value: "약 5천원", label: "연간 전기료" },
    { value: "5년", label: "부품 보유 기간" },
  ],
  statsNote: "MAJEON Plus 기준, 제품소개서 표기값",
};

export const story = {
  eyebrow: "What is MAJEON?",
  title: "마전(majeon)이란?",
  lead: "생베를 삶아 여러 번 빨고, 볕에 말려 하얗게 바래는 일. 우리 선조들은 이 과정을 '마전'이라 불렀습니다.",
  body: [
    "옷 한 벌을 희게 만들기 위해 들이던 그 정성을, 저희는 매일의 빨래에 담고 싶었습니다. 그래서 세탁의 마지막 단계인 '말리는 일'을 가장 편하고 위생적으로 만드는 건조대를 설계했습니다.",
    "마전은 전자 제어를 기반으로 사용자 중심의 설계를 더해 안전성과 편리성을 강화한 건조대입니다. 특허·실용신안·디자인 등록을 마쳤고, 가정용 1년 품질보증과 5년 부품 보유로 오래 쓰는 제품을 약속합니다.",
  ],
  pills: ["특허·실용신안·디자인 등록", "품질보증 1년", "부품 보유 5년"],
};

export type Feature = {
  title: string;
  description: string;
  note?: string;
  image: string;
  alt: string;
};

export const features: Feature[] = [
  {
    title: "리모컨 전동 승강",
    description:
      "30N·m 파워 모터가 건조봉을 직접 구동합니다. 내 키에 맞춰 내리고, 널고, 올리면 끝. 최대 1m까지 내려옵니다.",
    image: "/images/feature-u-rod.webp",
    alt: "천장에서 내려온 마전 건조봉",
  },
  {
    title: "송풍 건조",
    description:
      "120mm 팬 모터 2대가 빨래 사이로 바람을 보내 장마철에도 빠르게 말립니다. 90분 뒤 자동으로 꺼집니다.",
    note: "Plus 기본 탑재 · Fusion 선택 사양",
    image: "/images/feature-fan.webp",
    alt: "마전 본체 내부의 송풍 팬 모터",
  },
  {
    title: "LED 조명",
    description:
      "저녁 베란다를 밝히는 LED 조명. 30분 후 자동 소등되어 전기 걱정 없이 사용할 수 있습니다.",
    image: "/images/feature-led.webp",
    alt: "마전 본체의 LED 조명",
  },
  {
    title: "탈부착 U자 건조봉",
    description:
      "건조봉 한쪽을 분리하면 이불·카펫·커튼처럼 넓은 빨래도 걸림 없이 널 수 있습니다. 봉 길이도 1,300~1,900mm로 조절됩니다.",
    note: "Plus 기준",
    image: "/images/feature-detach.webp",
    alt: "U자 건조봉을 분리한 모습",
  },
];

export type Spec = { label: string; value: string };

export type Product = {
  id: "plus" | "fusion" | "light";
  name: string;
  badge: string;
  tagline: string;
  description: string;
  audience: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  specs: Spec[];
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "plus",
    name: "MAJEON Plus",
    badge: "대표 제품",
    tagline: "이불까지 한 번에, 가족을 위한 플래그십",
    description:
      "20kg 하중을 견디는 탈부착 U자형 건조봉으로 이불처럼 넓은 빨래도 편하게 널 수 있습니다. 송풍 건조와 LED 조명이 기본으로 들어간 마전의 대표 모델입니다.",
    audience: "3~4인 가족 · 이불 빨래가 잦은 집",
    image: "/images/plus-main.webp",
    imageAlt: "MAJEON Plus 전동 빨래건조대",
    gallery: [
      { src: "/images/plus-angle.webp", alt: "MAJEON Plus 측면" },
      { src: "/images/plus-rod.webp", alt: "MAJEON Plus 건조봉 길이 조절" },
    ],
    specs: [
      { label: "본체 크기", value: "960 × 365 × 115 mm" },
      { label: "본체 재질", value: "ABS 수지 (흰색 광택)" },
      { label: "조명", value: "LED 220V / 5W (MR16)" },
      { label: "송풍", value: "120 × 120 mm 팬 모터 2대" },
      { label: "건조봉", value: "I자 4개 + U자 4개, 스테인리스" },
      { label: "건조봉 길이", value: "1,300 ~ 1,900 mm" },
      { label: "하강 거리", value: "1,000 mm 이내" },
      { label: "권상 용량", value: "20kg (권장 15kg)" },
      { label: "전원", value: "AC 220V / 60Hz / 1A" },
      { label: "제품 중량", value: "13kg" },
    ],
    highlights: ["탈부착 U자 건조봉", "송풍 건조 기본", "에너지효율 1등급"],
  },
  {
    id: "fusion",
    name: "MAJEON Fusion",
    badge: "경량 전동형",
    tagline: "기존 건조대와 결합하는 가벼운 전동 모듈",
    description:
      "Plus에서 한 단계 가볍고 간결해진 알루미늄 본체. 쓰던 수동 건조대 지지대와 조합해 설치할 수 있어 인테리어를 해치지 않고, 옷걸이 봉으로도 활용도가 높습니다.",
    audience: "베란다 · 원룸 · 오피스텔 · 세탁실",
    image: "/images/fusion-main.webp",
    imageAlt: "MAJEON Fusion 전동 빨래건조대",
    gallery: [
      { src: "/images/fusion-angle.webp", alt: "MAJEON Fusion 측면" },
      { src: "/images/fusion-front.webp", alt: "MAJEON Fusion 정면" },
    ],
    specs: [
      { label: "본체 크기", value: "600 × 115 × 110 mm" },
      { label: "본체 재질", value: "알루미늄 (AI)" },
      { label: "조명", value: "LED 기판 220V / 18W" },
      { label: "송풍", value: "80 × 80 mm (선택 사양)" },
      { label: "건조봉", value: "I자 4개, 철봉 / 스테인리스 선택" },
      { label: "건조봉 길이", value: "약 1,900 mm" },
      { label: "하강 거리", value: "500 ~ 700 mm (2·3단 자바라)" },
      { label: "권상 용량", value: "20kg 이내" },
      { label: "전원", value: "AC 220V / 60Hz / 1A" },
      { label: "제품 중량", value: "8kg" },
    ],
    highlights: ["알루미늄 경량 본체", "기존 건조대와 결합", "무선 리모컨"],
  },
  {
    id: "light",
    name: "MAJEON Light",
    badge: "컴팩트",
    tagline: "1인 가구와 좁은 공간을 위한 I봉형",
    description:
      "I자 건조봉 구조라 좁은 발코니에도 설치할 수 있습니다. 미니멀한 공간을 유지하면서 빨래건조대와 옷걸이 봉 역할을 동시에 해냅니다.",
    audience: "1인 가구 · 미니멀 라이프 · 좁은 발코니",
    image: "/images/light-main.webp",
    imageAlt: "MAJEON Light 전동 빨래건조대",
    gallery: [
      { src: "/images/light-angle.webp", alt: "MAJEON Light 측면" },
      { src: "/images/light-front.webp", alt: "MAJEON Light 정면" },
    ],
    specs: [
      { label: "본체 크기", value: "600 × 115 × 110 mm" },
      { label: "본체 재질", value: "알루미늄 (AI)" },
      { label: "조명", value: "LED 기판 220V / 18W" },
      { label: "송풍", value: "—" },
      { label: "건조봉", value: "I자 2개 + U자 보조 2개, 스테인리스" },
      { label: "건조봉 길이", value: "1,000 ~ 1,800 mm (단 · 장)" },
      { label: "하강 거리", value: "800 mm 이내" },
      { label: "권상 용량", value: "20kg 이내" },
      { label: "전원", value: "AC 220V / 60Hz / 1A" },
      { label: "제품 중량", value: "8kg" },
    ],
    highlights: ["좁은 공간 설치", "수평 길이 조절", "무선 리모컨"],
  },
];

/** 비교표: 라벨 기준으로 products[].specs 에서 값을 찾습니다. */
export const compareRows = [
  "본체 크기",
  "본체 재질",
  "조명",
  "송풍",
  "건조봉",
  "건조봉 길이",
  "하강 거리",
  "권상 용량",
  "제품 중량",
];

export type DocFile = {
  label: string;
  file: string; // public/docs 경로
  thumb: string; // 첫 페이지 썸네일
  pages: number;
  note?: string;
};

export const downloads: {
  id: string;
  name: string;
  tagline: string;
  driveHref: string;
  docs: DocFile[];
}[] = [
  {
    id: "plus",
    name: "MAJEON Plus",
    tagline: "프리미엄 모델 · 제품소개서 4p",
    driveHref: "https://drive.google.com/drive/folders/128YJ3Qjb7pm0ZMn1BizYS9s6h12ZvJ2f?usp=drive_link",
    docs: [
      { label: "제품소개서", file: "/docs/plus-intro.pdf", thumb: "/docs/plus-intro.webp", pages: 4 },
      { label: "사용설명서", file: "/docs/plus-manual.pdf", thumb: "/docs/plus-manual.webp", pages: 2 },
      { label: "설치설명서", file: "/docs/plus-install.pdf", thumb: "/docs/plus-install.webp", pages: 2 },
    ],
  },
  {
    id: "fusion",
    name: "MAJEON Fusion",
    tagline: "실속 모델 · 리플릿 1p",
    driveHref: "https://drive.google.com/drive/folders/19x9rvDQ2hu4Y-bm7Y577W2-fpR2hd242?usp=drive_link",
    docs: [
      { label: "제품소개자료", file: "/docs/fusion-intro.pdf", thumb: "/docs/fusion-intro.webp", pages: 1 },
      { label: "사용설명서", file: "/docs/fusion-manual.pdf", thumb: "/docs/fusion-manual.webp", pages: 1 },
      { label: "설치설명서", file: "/docs/fusion-install.pdf", thumb: "/docs/fusion-install.webp", pages: 1 },
    ],
  },
  {
    id: "light",
    name: "MAJEON Light",
    tagline: "컴팩트 모델 · 리플릿 1p",
    driveHref: "https://drive.google.com/drive/folders/19fnxV8IUosVfSSQWG9Yi5_PBng6pyEmN?usp=drive_link",
    docs: [
      { label: "제품소개자료", file: "/docs/light-intro.pdf", thumb: "/docs/light-intro.webp", pages: 1 },
      // Light의 사용·설치설명서는 Fusion과 동일한 문서입니다.
      { label: "사용설명서", file: "/docs/fusion-manual.pdf", thumb: "/docs/fusion-manual.webp", pages: 1, note: "Fusion·Light 공용" },
      { label: "설치설명서", file: "/docs/fusion-install.pdf", thumb: "/docs/fusion-install.webp", pages: 1, note: "Fusion·Light 공용" },
    ],
  },
];

export const contact = {
  phone: "010-2807-5284",
  email: "mh-majeon@daum.net",
  hours: "평일 09:00 ~ 18:00",
  hoursNote: "주말·공휴일에는 빠른 상담이 어려울 수 있습니다.",
};

export const company = {
  name: "목화기업",
  ceo: "황문현",
  bizNo: "301-30-36524",
  email: contact.email,
};
