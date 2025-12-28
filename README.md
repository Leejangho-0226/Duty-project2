# DUTY4 기업 홈페이지 (Corporate + Services)

> IT 기반 헬스케어 그룹의 **기업 소개 페이지**와  
> 3개의 서비스(Prore / HealingYou / DutyOn) **서비스 전용 페이지**를 통합한  
> **확장 가능한 멀티 페이지 기업 홈페이지 프로젝트**

---

## 📋 목차
- [프로젝트 목적 · 문제 정의](#프로젝트-목적--문제-정의)
- [서비스 개요](#서비스-개요)
- [정보 구조 IA · 라우팅](#정보-구조-ia--라우팅)
- [헤더 구성](#헤더-구성)
- [기업 메인 페이지 구성](#기업-메인-페이지-구성)
- [서비스 페이지 구성](#서비스-페이지-구성)
- [파일 디렉토리 구조](#파일-디렉토리-구조)
- [기술 스택](#기술-스택)
- [아키텍처 구성](#아키텍처-구성)
- [유지보수 · 확장 가이드](#유지보수--확장-가이드)
- [배포](#배포)
- [실행 방법](#실행-방법)
- [제작자](#제작자)

---

## 프로젝트 목적 · 문제 정의

서비스가 늘어날수록 기업 소개와 서비스 소개가 분리되거나,  
페이지 구조가 복잡해져 유지보수가 어려워지는 문제가 있습니다.

**DUTY4는 아래 목표를 중심으로 설계했습니다.**

- 기업 메인(Home)에서 **신뢰(정체성/비전/기술/파트너십)**를 먼저 전달
- 서비스 페이지에서 **문제 → 해결 → 설득(CTA)** 흐름을 일관되게 제공
- 브랜드별 개성은 유지하되, 전체 사이트 UX는 **강한 일관성**으로 통합
- 서비스 추가/확장 시에도 구조가 무너지지 않도록 **모듈화된 폴더 구조** 유지

---

## 서비스 개요

이 프로젝트는 하나의 기업 사이트 안에서 다음을 제공합니다.

- **기업 메인(Home)**  
  회사 정체성 / 비전 / 기술 / 파트너십 소개

- **서비스 전용 페이지**
  - **Prore** : 재활 교육 통합 플랫폼
  - **HealingYou** : 압박스타킹 기반 헬스케어 커머스
  - **DutyOn** : AI 자동 근무표 생성 솔루션

---

## 정보 구조 IA · 라우팅

라우팅 구조

- `/` : 기업 메인 페이지  
- `/prore` : 프로리 솔루션  
- `/healingyou` : 힐링유  
- `/dutyon` : 듀티온  

메인은 **신뢰**,  
서비스 페이지는 **문제 해결과 설득**에 집중합니다.

---

## 헤더 구성

### 헤더 메뉴
- 회사
- 서비스 (드롭다운)
  - Prore
  - HealingYou
  - DutyOn
- 기술
- 파트너
- 문의

### UX 원칙
- 서비스 메뉴만 드롭다운
- 모든 페이지에서 헤더 공통
- 스크롤 시 가독성 강화 처리

---

## 기업 메인 페이지 구성

기업 메인은 **회사 소개 중심 페이지**입니다.

### 섹션 흐름
1. Corporate Hero  
2. 회사 소개  
3. 기술 소개  
4. 서비스 요약  
5. 파트너  
6. 문의  

---

## 서비스 페이지 구성

모든 서비스 페이지는  
**구조 통일 + 톤 차별화**를 기준으로 설계합니다.

### 공통 구조
1. Service Hero  
2. 문제 정의  
3. 해결 방안  
4. 주요 기능  
5. 차별점  
6. CTA  

### 서비스별 요약
- **Prore** : 이론 → 실무 → 실전 → 강사 플랫폼  
- **HealingYou** : 제품 신뢰 → 경험 → 가이드 → 구매  
- **DutyOn** : 문제 → AI 생성 → 공정성 → 효율  

---

## 파일 디렉토리 구조

```txt
DUTY4/                                  (프로젝트 루트)
├─ docs/                                (문서/기획/설계 파일 보관)
│  └─ read.md                           (프로젝트 기획/IA/구조 문서)
│
├─ node_modules/                        (npm 설치 라이브러리 폴더 - 자동 생성)
│
├─ public/                              (빌드 없이 그대로 배포되는 정적 파일)
│  ├─ videos/                           (public에서 직접 참조하는 영상 폴더)
│  │  └─ company-hero.mp4               (CompanyHero 배경 영상)
│  └─ favicon.ico                       (브라우저 탭 아이콘)
│  
├─ src/                                 (실제 개발 코드가 들어가는 폴더)
│  ├─ app/                              (앱 “진입/라우팅” 핵심 영역)
│  │  ├─ App.jsx                        (Router만 렌더하는 최상위 App 컴포넌트)
│  │  ├─ router.jsx                     (react-router-dom 라우팅 설정 파일)
│  │  └─ routes.js                      (라우트 경로 상수 모음)
│  │
│  ├─ assets/                           (이미지/아이콘 같은 정적 리소스 - src import용)
│  │  ├─ common/                        (공통 리소스: 여러 페이지/브랜드에서 함께 사용)
│  │  │  ├─ icons/                      (공통 아이콘)
│  │  │  └─ images/                     (공통 이미지)
│  │  ├─ corporate/                     (기업 메인(Home) 전용 리소스)
│  │  │  ├─ images/                     (기업 메인 전용 이미지)
│  │  │  └─ videos/                     (src import용 기업 메인 영상 - 필요 시 사용)
│  │  ├─ dutyon/                        (DutyOn 전용 리소스)
│  │  │  └─ images/                     (DutyOn 전용 이미지)
│  │  ├─ healingyou/                    (HealingYou 전용 리소스)
│  │  │  └─ images/                     (HealingYou 전용 이미지)
│  │  └─ prore/                         (Prore 전용 리소스)
│  │     └─ images/                     (Prore 전용 이미지)
│  │
│  ├─ brands/                           (브랜드(서비스)별 “독립 모듈”)
│  │  ├─ dutyon/                        (DutyOn 브랜드 모듈)
│  │  │  ├─ data/                       (DutyOn 문구/리스트 등 데이터 모음)
│  │  │  │  └─ dutyonContent.js         (DutyOn 콘텐츠 데이터/문구/리스트)
│  │  │  ├─ sections/                   (DutyOn 페이지에서만 쓰는 섹션 컴포넌트)
│  │  │  │  ├─ DutyOnCTA.jsx            (DutyOn CTA 섹션)
│  │  │  │  ├─ DutyOnDifferentiation.jsx (DutyOn 차별점 섹션)
│  │  │  │  ├─ DutyOnFeatures.jsx       (DutyOn 주요 기능 섹션)
│  │  │  │  ├─ DutyOnHero.jsx           (DutyOn Hero 섹션)
│  │  │  │  ├─ DutyOnProblem.jsx        (DutyOn 문제 정의 섹션)
│  │  │  │  └─ DutyOnSolution.jsx       (DutyOn 해결 방안 섹션)
│  │  │  └─ styles/                     (DutyOn 전용 스타일)
│  │  │     └─ dutyon.css               (DutyOn 전용 CSS)
│  │  │
│  │  ├─ healingyou/                    (HealingYou 브랜드 모듈)
│  │  │  ├─ data/                       (HealingYou 문구/리스트 등 데이터 모음)
│  │  │  │  └─ healingyouContent.js     (HealingYou 콘텐츠 데이터/문구/리스트)
│  │  │  ├─ sections/                   (HealingYou 페이지에서만 쓰는 섹션 컴포넌트)
│  │  │  │  ├─ HealingYouCTA.jsx        (HealingYou CTA 섹션)
│  │  │  │  ├─ HealingYouDifferentiation.jsx (HealingYou 차별점 섹션)
│  │  │  │  ├─ HealingYouFeatures.jsx   (HealingYou 주요 기능 섹션)
│  │  │  │  ├─ HealingYouHero.jsx       (HealingYou Hero 섹션)
│  │  │  │  ├─ HealingYouProblem.jsx    (HealingYou 문제 정의 섹션)
│  │  │  │  └─ HealingYouSolution.jsx   (HealingYou 해결 방안 섹션)
│  │  │  └─ styles/                     (HealingYou 전용 스타일)
│  │  │     └─ healingyou.css           (HealingYou 전용 CSS)
│  │  │
│  │  └─ prore/                         (Prore 브랜드 모듈)
│  │     ├─ data/                       (Prore 문구/리스트 등 데이터 모음)
│  │     │  └─ proreContent.js          (Prore 콘텐츠 데이터/문구/리스트)
│  │     ├─ sections/                   (Prore 페이지에서만 쓰는 섹션 컴포넌트)
│  │     │  ├─ ProreCTA.jsx             (Prore CTA 섹션)
│  │     │  ├─ ProreDifferentiation.jsx (Prore 차별점 섹션)
│  │     │  ├─ ProreFeatures.jsx        (Prore 주요 기능 섹션)
│  │     │  ├─ ProreHero.jsx            (Prore Hero 섹션)
│  │     │  ├─ ProreProblem.jsx         (Prore 문제 정의 섹션)
│  │     │  └─ ProreSolution.jsx        (Prore 해결 방안 섹션)
│  │     └─ styles/                     (Prore 전용 스타일)
│  │        └─ prore.css                (Prore 전용 CSS)
│  │
│  ├─ components/                       (재사용 컴포넌트 모음)
│  │  ├─ common/                        (레이아웃/섹션에서 공통으로 쓰는 컴포넌트)
│  │  │  ├─ Container.jsx               (중앙 정렬/폭 제한 래퍼 컴포넌트)
│  │  │  ├─ Divider.jsx                 (구분선 컴포넌트)
│  │  │  ├─ BackToTop.jsx               (모든 페이지 공통 Top 버튼 컴포넌트)
│  │  │  ├─ back-to-top.css             (Top 버튼 전용 CSS)
│  │  │  │
│  │  │  ├─ service-modal/              (서비스 모달 기능 폴더: JSX/CSS를 한 덩어리로 관리)
│  │  │  │  ├─ ServiceModal.jsx         (서비스 카드 클릭 시 열리는 공통 모달 컴포넌트)
│  │  │  │  └─ service-modal.css        (ServiceModal 전용 CSS: 우하단 바로가기 버튼 포함)
│  │  │  │
│  │  │  ├─ contact-modal/              (문의 모달 기능 폴더: 폼/검증/모달UX까지 묶어서 관리)
│  │  │  │  ├─ ContactModal.jsx         (문의 버튼 클릭 시 열리는 공통 문의 모달 컴포넌트)
│  │  │  │  ├─ contact-modal.css        (ContactModal 전용 CSS)
│  │  │  │  ├─ useContactForm.js        (문의 폼 상태/검증/제출 로직 훅)
│  │  │  │  ├─ useModalBehavior.js      (ESC 닫기/스크롤락/첫 포커스 등 모달 UX 훅)
│  │  │  │  └─ validators.js            (validate(form) 전용: 폼 유효성 검사 함수 모음)
│  │  │  
│  │  ├─ layout/                        (레이아웃 컴포넌트)
│  │  │  ├─ Footer.jsx                  (하단 푸터 컴포넌트)
│  │  │  └─ Header.jsx                  (상단 헤더/네비 컴포넌트)
│  │  │
│  │  └─ ui/                            (작게 재사용되는 UI 단위들)
│  │     ├─ Badge.jsx                   (공통 뱃지 UI 컴포넌트)
│  │     ├─ Button.jsx                  (공통 버튼 UI 컴포넌트)
│  │     └─ Card.jsx                    (공통 카드 UI 컴포넌트)
│  │
│  ├─ layouts/                          (페이지 공통 레이아웃(틀))
│  │  ├─ RootLayout.jsx                 (헤더/푸터 포함: 전체 공통 레이아웃)
│  │  └─ ServiceLayout.jsx              (서비스 페이지 전용 레이아웃 - 필요시 사용)
│  │
│  ├─ pages/                            (URL 단위 “페이지 컴포넌트”)
│  │  ├─ HomePage.jsx                   (기업 메인 페이지 /)
│  │  └─ services/                      (서비스 페이지 묶음)
│  │     ├─ DutyOnPage.jsx              (듀티온 페이지 /dutyon)
│  │     ├─ HealingYouPage.jsx          (힐링유 페이지 /healingyou)
│  │     └─ ProrePage.jsx               (프로리 페이지 /prore)
│  │
│  ├─ sections/                         (페이지 내부를 구성하는 “섹션 블록”)
│  │  └─ corporate/                     (기업 메인(Home)에서만 쓰는 섹션들)
│  │     ├─ company-hero.css            (CompanyHero 전용 CSS: 스크롤 마우스 UI 포함)
│  │     ├─ CompanyHero.jsx             (기업 메인 Hero 섹션: 배경 영상/스크롤 UI 포함)
│  │     ├─ PlatformOverview.jsx        (회사 소개 + 기술 소개 통합 섹션)
│  │     ├─ PartnersSection.jsx         (파트너/협력사 섹션)
│  │     ├─ partners-section.css        (PartnersSection 전용 CSS)
│  │     ├─ ServicesOverview.jsx        (3개 서비스 요약 섹션: ServiceModal 연동)
│  │     ├─ services-overview.css       (ServicesOverview 전용 CSS)
│  │     ├─ ContactSection.jsx          (문의/CTA 섹션: ContactModal 연동)
│  │     └─ contact-section.css         (ContactSection 전용 CSS)
│  │
│  ├─ styles/                           (전역 스타일 + Tailwind 엔트리)
│  │  ├─ globals.css                    (Tailwind 엔트리: @tailwind base/components/utilities)
│  │  ├─ layout.css                     (Header/Footer/공통 레이아웃 CSS - Tailwind 보완)
│  │  └─ tokens.css                     (색/폰트/간격 토큰)
│  │
│  ├─ utils/                            (공통 유틸 함수/상수)
│  │  ├─ constants.js                   (상수 모음)
│  │  └─ helpers.js                     (도움 함수 모음)
│  │
│  ├─ App.css                           (App 관련 스타일)
│  ├─ index.css                         (전역/기본 스타일)
│  ├─ main.jsx                          (React 진입점: createRoot)
│  └─ react.svg                         (React 샘플 로고)
│
├─ .gitignore                           (git에 올리지 않을 파일 목록)
├─ eslint.config.js                     (ESLint 설정)
├─ index.html                           (Vite HTML 엔트리)
├─ package-lock.json                    (설치 버전 고정 - 자동 생성)
├─ package.json                         (의존성/스크립트)
├─ postcss.config.js                    (Tailwind 동작 위한 PostCSS 설정)
├─ README.md                            (깃허브 대표 문서)
├─ tailwind.config.js                   (Tailwind 설정 파일)
└─ vite.config.js                       (Vite 설정)
```

## 기술 스택

### Frontend
- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS + Custom CSS

### Tooling
- ESLint
- Git
- GitHub

---

## 아키텍처 구성

- 페이지 단위 라우팅 구조
- 공통 레이아웃 기반 페이지 구성
- 브랜드(서비스)별 자산 및 스타일 분리
- 섹션 단위 컴포넌트 설계
- 서비스/문의 모달을 폴더 단위로 분리하여 유지보수성을 강화

---

## 유지보수 · 확장 가이드

### 신규 서비스(브랜드) 추가 방법
1. `src/brands/신규브랜드/` 폴더 생성  
   (data / sections / styles 구조 유지)
2. `src/pages/services/`에 신규 페이지 추가
3. `src/app/router.jsx` 또는 `src/app/routes.js`에 라우트 등록
4. `src/components/layout/Header.jsx` 서비스 드롭다운 메뉴에 항목 추가

### 스타일 관리 원칙
- 전역 토큰: `src/styles/tokens.css` 우선
- 브랜드별 스타일: 각 브랜드 `styles/*.css`에서만 관리
- 공통 레이아웃 스타일: `src/styles/layout.css`에서 관리
- `!important`는 특수 상황이 아니면 사용하지 않음

---

## 배포

### Deployment
- GitHub Pages

### 배포 URL
- (배포 완료 후 추가)

---

## 실행 방법

### 프로젝트 의존성 설치
```bash
npm install
```
개발 서버 실행
```bash
npm run dev
```
브라우저 접속
```bash
http://localhost:5173
```
---
### 제작자

이장호

역할

IA/라우팅 설계 및 멀티 페이지 구조 구성

공통 레이아웃(헤더/푸터) 구축 및 UX 규칙 적용

ServicesOverview ↔ ServiceModal 연동 구현

ContactSection ↔ ContactModal(폼/검증/모달 UX 훅) 구현

전체 UI 톤 통일 및 브랜드별 모듈 구조 설계

GitHub 기반 버전 관리 및 배포 환경 구성
