# TOOBPLUS Coding Test
코딩테스트 지원자명: 박기영 
작성일자: 2025-12-24  
제출 파일명: 20251224_gyp_codingtest.zip

---

## 🧭 프로젝트 개요
투브플러스 프론트엔드 코딩테스트 과제로, **반응형 헤더 및 메인 콘텐츠 제작**을 목표로 합니다.  
요구사항에 따라 HTML/CSS/JS 기반의 정적 웹 프로젝트를 구성하였으며, 반응형 환경(모바일, 태블릿, PC)을 모두 지원합니다.

---

## 🗂️ 디렉토리 구조
```yaml
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



yaml
코드 복사

---

## ⚙️ 개발 환경
- **HTML5 / CSS3 / JavaScript (ES6)**
- **Swiper.js** (슬라이드 구현용)
- **반응형 구현 기준**
    - 모바일: `<768px`
    - 태블릿: `768px ~ 1279px`
    - PC: `≥1280px`

---

## 🧩 구현 내역 요약

### 1️⃣ 헤더 (40점)
- 투명 배경(`rgba(255,255,255,0.5)`) 및 로고 클릭 시 홈 이동
- 2 depth 메뉴 구조 구성
- 모바일 / 태블릿에서는 Toggle 버튼 + Modal 메뉴
- PC에서는 hover 시 2 depth 슬라이드 표시
- 반응형 높이
    - Mobile: 60px
    - PC: 80px
- gnb 외부 클릭 시 메뉴 닫힘 기능 포함

---

### 2️⃣ 메인(index.html)
- 화면 중앙 텍스트: “코딩테스트 지원자명”
- `font-size: 5rem`
- hover 시 색상 변경 (#555) 및 커서 포인터 적용

---

### 3️⃣ section1.html
- Swiper로 3장 이미지 슬라이드 구성 (photo_01~03.jpg)
- 옵션: autoplay, pagination, navigation, progressbar, loop 적용

---

### 4️⃣ test1.html
- Swiper로 5장 아이콘 슬라이드 구성 (icon_01~05.png)
- 반응형:
    - <768px: 1장 + autoplay
    - 768~1279px: 2장 + 수동 슬라이드
    - ≥1280px: 3장 + autoplay

---

### 5️⃣ section3.html
- 중앙에 200x200 크기의 div 3개 생성
- 반응형 배치:
    - <768px: 세로 정렬
    - 768~1279px: 가로 + 20px 간격
    - ≥1280px: 가로 + 40px 간격 + border 추가
- hover / click 이벤트
    - 1번 div: Hello World 오버레이 등장 (fade-in/out)
    - 2번 div: border 색상 변화 (transition 없이)
    - 3번 div: 클릭 횟수 표시 (::before / ::after)

---

### 6️⃣ free-content.html (선택)
- 자유 구성 섹션 (가산점 대상)
- 간단한 인터랙션 / 애니메이션 추가

---

## 🧠 추가 구현 포인트
- **Vanilla JS 기반**, jQuery 미사용
- **모바일 퍼스트 구조**
- **주석**을 통해 기능 설명 추가
- **디렉토리 구조화 및 정리 완료**

---

## 📨 제출 정보
- **제출 기한:** 링크 수신 후 24시간 이내
- **메일 수신:** kyungsu102@toobplus.com
- **참조:** yjy@toobplus.com
- **첨부 주의:** JS 포함 시 구글드라이브 링크로 전달

---

## 📈 참고
본 과제는 **만점 목표가 아닌 실무 능력 중심 평가**임.  
핵심은 **구현력, 구조화, 반응형 사고, 주석 명료도, 제출 속도**입니다.
