# 20251223_gyp_codingtest

투비플러스 코딩 테스트 과제 결과물입니다.  
React 기반(SPA)으로 구현했습니다. (mobile-first)

---

## 1) 제출 파일 구조

20251223_gyp_codingtest/
├── build/ # React 빌드 결과물 (제출 필수)
│ ├── index.html
│ ├── static/
│ └── asset-manifest.json
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ └── ...
└── README.md

yaml
코드 복사

- 이미지 리소스: `build/images/` (logo, photo, icon 사용)
- 실행 확인은 `build` 폴더 기준으로 가능합니다.

---

## 2) 실행 방법

### (1) 로컬 개발 실행
```bash
npm install
npm run dev
(2) 빌드 파일 생성
bash
코드 복사
npm run build
3) 구현 범위 요약
✅ Header (반응형 2-depth)
배경: white 기반 투명도 50% 적용

로고: logo.png 사용 / 클릭 시 Home 이동

메뉴 구조

menu1 → section1, section2

menu2 → test1, test2, test3, test4

menu3 → section3, test5

✅ 반응형 (Mobile / Tablet: < 1280px)
기준: 768px

헤더 높이 60px / Toggle 버튼으로 gnb 열기

gnb 오픈 시 외부 영역 dim 처리 (black 30%)

1 depth 클릭 시 2 depth 첫 페이지로 이동, gnb 유지

1 depth 클릭 시 해당 메뉴의 2 depth만 슬라이드로 표시

2 depth 클릭 시 페이지 이동 + gnb 닫힘

gnb 외부 클릭 시 닫힘

✅ 반응형 (PC: ≥ 1280px)
헤더 높이 80px / Toggle 제거, 메뉴 노출

hover 시 2 depth 슬라이드

1 depth / 2 depth 각각 hover effect 다르게 적용

4) 페이지별 구현 내용
/ (index)
디바이스 높이 100% 섹션 1개

중앙 텍스트: 코딩테스트 지원자명

hover: 폰트 색상 #555, 커서 pointer

/section1
높이 100% 섹션 3개

Swiper 슬라이드 3장 (photo_01~03)

옵션: 자동 슬라이드 / pagination / navigation / progressbar / loop

/test1
Swiper 슬라이드 5장 (icon_01~05)

반응형 설정

< 768px: 1장 + autoplay

768~1279px: 2장 + autoplay off

≥ 1280px: 3장 + autoplay on

/section3
중앙에 200x200 div 3개 (1,2,3)

레이아웃

< 768px: 세로 배치

768~1279px: 가로 배치 + gap 20px

≥ 1280px: 가로 배치 + gap 40px + border 2px(#000) + size 고정

hover/click (≥1280px에서만 적용)

1번: overlay 텍스트박스 “Hello World” 아래에서 올라오며 fade-in/out (transition 600ms)

2번: border 20px 안쪽 생성/색 변경, 배경색 변경 (transition 없음)

3번: 내부에 200x100 div 2개

3-1: 페이지 접근 후 클릭 횟수 (::before)

3-2: 3번 div 클릭 횟수 (::after)

5) 사용 기술
React

CSS / (사용한 경우) [TailwindCSS]

Swiper.js

6) 참고
mobile-first 기준으로 작업했습니다.

구현한 기능 설명 주석은 관련 코드 상단에 기재했습니다.

yaml
코드 복사

---

너 지금 여기서 **[지원자명]**, **[Tailwind 썼는지]**, **라우팅 경로가 실제로 `/section1`, `/test1`, `/section3` 맞는지**만 맞춰주면 바로 제출용 README 됨.

원하면 내가 너 프로젝트 구조(폴더 트리) 기준으로 **경로/페이지명 100% 맞춰서** 더 깔끔하게 다듬어줄게.  
지금 너 라우팅 실제 파일명이 `section1.html` 같은 정적이야? 아니면 React Router로 `Section1.jsx` 페이지야? (둘 중 하나만 말해줘)






