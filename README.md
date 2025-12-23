# 📘 Coding Test – Frontend (React)
--
프론트엔드 코딩 테스트 과제로 진행한 React 기반 프로젝트입니다.
제공된 코딩 테스트 매뉴얼을 기준으로, 요구사항을 충족하는 방향으로 구조와 기능을 구현했습니다.

모바일 퍼스트 원칙을 기반으로 반응형 헤더와 메인 콘텐츠를 구성했으며,
디렉토리 구조 정리와 파일 분리를 통해 가독성과 유지보수를 고려했습니다.


## 📂 프로젝트 개요
--
프론트엔드 코딩 테스트 제출용 프로젝트

React 기반 SPA 구조

Mobile / Tablet / PC 반응형 대응

헤더 및 메인 콘텐츠 요구사항 구현

디렉토리 구조화 및 리소스 관리에 중점

### 🛠 사용 기술
--
React

JavaScript (ES6)

HTML5

CSS3

#### 🗂 프로젝트 구조
20251223_gyp_codingtest/
20251223_gyp_codingtest/
├─ .idea/
├─ build/
│  ├─ images/
│  │  ├─ icon_01.png ~ 05.png
│  │  ├─ logo.png
│  │  ├─ photo_01.jpg ~ 03.jpg
│  ├─ static/
│  │  └─ asset-manifest.json
│  └─ index.html
├─ node_modules/
├─ out/
├─ public/
├─ src/
├─ .gitignore
├─ img.png
├─ package.json
└─ package-lock.json



##### 📁 디렉토리 구성 의도
--
build/
제출 기준에 맞춰 React build 결과물을 포함했습니다.
index.html 기준으로 결과물을 확인할 수 있습니다.

images/
코딩 테스트 매뉴얼에서 제공된 아이콘 및 이미지 리소스를 정리해 관리했습니다.

src/
React 기반 UI 구현을 위한 소스 디렉토리입니다.
컴포넌트 단위로 분리해 구조를 명확히 했습니다.

🧭 구현 범위 정리
--
헤더 제작 (반응형)

2 depth 구조의 반응형 헤더 구현

모바일 / 태블릿 환경에서 Toggle 버튼 기반 메뉴 구성

PC 환경에서 hover 기반 2 depth 메뉴 노출

gnb 영역 외 클릭 시 메뉴 닫힘 처리

메인 콘텐츠

index 페이지
화면 높이를 가득 채우는 단일 섹션 구성
중앙 정렬된 텍스트 배치 및 hover 인터랙션 구현

section1 / test1 / section3 페이지
매뉴얼에 명시된 조건에 맞춰 Swiper 슬라이드 및 레이아웃 구현
해상도 구간별 반응형 동작 분기 처리

✍️ 작업 시 고려사항
--
신입 프론트엔드 코딩 테스트 기준을 고려해
모든 요구사항을 완벽히 구현하기보다는,
구조 이해와 구현 방향성 전달에 집중했습니다.

구현한 기능에는 상단 주석으로 설명을 추가해
코드 의도가 드러나도록 작성했습니다.

📦 결과물 확인
--
React build 결과물은 build 폴더에 포함되어 있습니다.

index.html 파일 기준으로 결과물을 확인할 수 있습니다.

👤 작성자
--
박기영

▶️ 실행 방법
--
본 프로젝트는 React 기반으로 작성되어,
로컬 환경에서 실행 시 npm start 명령어를 통해 확인할 수 있습니다.

의존성 설치 후 아래 명령어를 실행하면 개발 서버가 실행됩니다.

npm install

npm start

개발 서버 실행 후 브라우저에서 로컬 주소를 통해 결과물을 확인할 수 있습니다.

📦 결과물 확인
--
React build 결과물은 build 폴더에 포함되어 있습니다.

제출용 결과물은 build 폴더 기준으로 확인할 수 있습니다.

로컬 개발 환경에서는 npm start를 통해 화면을 확인했습니다.
