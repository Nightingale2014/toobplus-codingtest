🧩 TOOBPLUS Coding Test

지원자명: 박기영
작성일자: 2025-12-23
제출 파일명: 20251223_pky_codingtest.zip

🧭 프로젝트 개요

React 기반 SPA(Single Page Application) 형태로 제작된 투브플러스 프론트엔드 코딩테스트 과제입니다.
요구사항에 맞춰 반응형 헤더, Swiper 슬라이드, hover/click 이펙트, 페이지별 반응형 레이아웃을 구현했습니다.
모든 스타일은 모바일 퍼스트 원칙으로 작성되었습니다.

🗂️ 디렉토리 구조
20251223_gyp_codingtest/
├── .idea/                      # IntelliJ 설정 파일
├── build/                      # React 빌드 결과물
│   ├── images/                 # 이미지 리소스 (logo, photo, icon)
│   │   ├── icon_01.png ~ icon_05.png
│   │   ├── logo.png
│   │   ├── photo_01.jpg ~ photo_03.jpg
│   ├── static/                 # 정적 파일 (CSS, JS, manifest 등)
│   │   └── asset-manifest.json
│   └── index.html              # 빌드된 메인 HTML
├── node_modules/               # NPM 의존성 모듈
├── out/                        # IntelliJ 빌드 아웃풋
├── public/                     # 정적 자원 (favicon, public index.html 등)
├── src/                        # React 소스코드
│   ├── components/             # Header, Section1, Section3 등 UI 컴포넌트
│   ├── pages/                  # 각 페이지 라우팅 구성
│   ├── styles/                 # CSS 및 전역 스타일
│   ├── App.jsx                 # App 진입점
│   └── index.js                # React DOM 렌더링 진입점
├── .gitignore                  # Git 제외 파일 목록
├── package.json                # 프로젝트 메타데이터 및 의존성
├── package-lock.json           # 의존성 버전 잠금 파일
└── README.md                   # 프로젝트 설명 문서

⚙️ 개발 환경

Framework: React 18+

Language: JavaScript (ES6)

Styling: CSS3 (모바일 퍼스트 구조)

Library: Swiper.js

Breakpoints:

Mobile: <768px

Tablet: 768px ~ 1279px

PC: ≥1280px

🧩 구현 내역
🧱 Header (헤더)

White 기반 투명도 50% 배경

로고 클릭 시 홈(/) 이동

2 depth 메뉴 구조

모바일 / 태블릿 (≤768px)

헤더 높이 60px

메뉴명 숨김, Toggle 버튼 활성화

Toggle 클릭 시 GNB Modal 오픈 (배경 블랙 30% 투명도)

1 depth 클릭 → 하위 첫 메뉴 이동, 메뉴 유지

2 depth 클릭 → 페이지 이동 후 GNB 닫힘

GNB 외부 클릭 시 닫힘

PC (≥1280px)

헤더 높이 80px

hover 시 2 depth 슬라이드 표시

1 depth / 2 depth 각각 다른 hover 이펙트 적용

🏠 Home (index.html 대응)

뷰포트 높이 100% 섹션

텍스트: "코딩테스트 박기영"

중앙 정렬

폰트 크기: 5rem

hover 시 색상 #555, 커서 pointer

🖼️ Section1 (menu1 > 섹션1)

Swiper.js 기반 3장 이미지 슬라이드 (photo_01~03.jpg)

옵션: autoplay, pagination, navigation, progressbar, loop

🧭 Test1 (menu2 > test1)

Swiper.js 기반 5장 아이콘 슬라이드 (icon_01~05.png)

반응형 옵션:

<768px → 1장 + autoplay

768~1279px → 2장 (수동)

≥1280px → 3장 + autoplay

⚙️ Section3 (menu3 > 섹션3)

중앙 정렬된 200×200 크기 div 3개

반응형 배치:

<768px: 세로 정렬

768~1279px: 가로 정렬 + 20px 간격

≥1280px: 가로 정렬 + 40px 간격 + border(2px solid #000)

hover / click 이벤트:

1번 div: Hello World 오버레이 fade-in/out

2번 div: border 색상 전환 (transition 없음)

3번 div: 클릭 횟수 표시 (::before / ::after 활용)

🎨 Free Content (선택 항목)

가산점용 자유 콘텐츠

인터랙션 / 애니메이션 등 추가 가능

🧪 실행 방법
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 빌드 (제출용)
npm run build


빌드 결과물은 /build 폴더에 생성됩니다.

제출 시 해당 폴더를 포함해 압축(20251223_pky_codingtest.zip) 후 구글드라이브로 업로드합니다.

📨 제출 정보

제출 메일: kyungsu102@toobplus.com

참조: yjy@toobplus.com

파일명: 20251223_pky_codingtest.zip

기한: 링크 전달 후 24시간 이내

주의: JS 포함 시 메일 발송 오류 → Google Drive 링크로 제출

📈 참고 사항

React Hooks 기반으로 상태 관리

모바일 퍼스트 CSS

주석을 상단에 명시해 기능 설명

구조화된 컴포넌트 설계

GNB 및 Swiper 기능 독립 모듈화

👤 작성자

박기영 (Park Ki Young)
📧 Email: [본인 이메일 주소]
📅 Date: 2025-12-23
