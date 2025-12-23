⚙️ 개발 환경

Framework: React 18+

Language: JavaScript (ES6)

Styling: CSS3 (모바일 퍼스트)

Library: Swiper.js (슬라이드 구현)

Breakpoints:

Mobile: <768px

Tablet: 768px ~ 1279px

PC: ≥1280px

🧩 구현 내역
🧱 Header (헤더)

투명도 50%의 white 배경

로고 클릭 시 홈(/) 이동

2 depth 메뉴 구조

반응형:

Mobile (≤768px): 메뉴명 숨김 + Toggle 버튼

PC (≥1280px): hover 시 2 depth 슬라이드 표시

기능:

1depth 클릭 시 첫 하위 페이지 이동

2depth 클릭 시 GNB 닫힘

GNB 외부 클릭 시 메뉴 닫힘

🏠 Home (index)

화면 중앙 텍스트: 코딩테스트 박기영

폰트 크기 5rem, hover 시 색상 #555, 커서 pointer

🖼️ Section1

Swiper.js 슬라이드 (3장: photo_01~03.jpg)

옵션:

autoplay, pagination, navigation, progressbar, loop

🧭 Test1

Swiper.js 슬라이드 (5장: icon_01~05.png)

반응형 옵션:

<768px: 1장 + autoplay

768~1279px: 2장 + 수동

≥1280px: 3장 + autoplay

⚙️ Section3

중앙 200×200 div 3개 배치

반응형 정렬:

<768px: 세로

768~1279px: 가로 + 20px 간격

≥1280px: 가로 + 40px 간격 + border(2px solid #000)

Hover / Click 이벤트:

1번: Hello World 오버레이 fade-in/out

2번: border 색상 전환 (transition X)

3번: 클릭 횟수 표시 (::before / ::after)

🧪 Free Content (선택)

가산점용 자유 섹션

인터랙션/애니메이션 구현 가능

🧩 실행 방법
npm install
npm start

📦 빌드 (제출용)
npm run build


/build 폴더를 압축해 20251223_pky_codingtest.zip 으로 제출.

📨 제출 정보

메일: kyungsu102@toobplus.com

참조: yjy@toobplus.com

파일명: 20251223_pky_codingtest.zip

제출 기한: 링크 전달 후 24시간 이내

주의: JS 포함 시 메일 발송 오류 → Google Drive 링크 활용

📈 참고 사항

Vanilla JS + React Hooks 조합

모바일 퍼스트 스타일링

명확한 주석 (기능 설명 필수)

SPA 라우팅 및 컴포넌트 구조화 완료

👤 작성자

박기영 (Park Ki Young)
📧 Email: [본인 이메일 주소]
📅 Date: 2025-12-23
