# 🎓 ALOC (알록)

> 알고리즘 공부를 더 재미있고 꾸준하게 도와주는 학습 플랫폼, 알록

<br/>

## 📚 주요 기능

### ✏️ _"Daily Course"_

매일 하나씩 공개되는 문제를 꾸준히 풀어야 완주할 수 있는 데일리 코스입니다.

### 🃏 _"Deadline Course"_

정해진 기간 안에 모든 문제를 자율적으로 해결해야 완주할 수 있는 마감형 코스입니다.

<br/>

## 👀 서비스 미리보기

현재 서비스 중인 웹사이트에서 ALOC의 모든 기능을 경험해보세요.

### [🌐 https://openaloc.store](https://openaloc.store)

<br/>

## 🛠️ 기술 스택

### 프론트엔드

- **핵심 기술**: TypeScript, React 19
- **상태 관리**: Jotai
- **스타일링**: Emotion
- **애니메이션**: Framer Motion, GSAP
- **API 통신**: Axios
- **날짜 처리**: Dayjs
- **알림 시스템**: Sonner
- **빌드 도구**: Vite

### 인프라

- **배포**: Vercel
- **CI/CD**: GitHub Actions

### 개발 도구

- **코드 품질**: ESLint, Prettier
- **버전 관리**: Git, GitHub
- **디자인**: Figma

<br/>

## 🚀 시작하기

### 설치 및 실행 방법

```bash
# 저장소 클론
git clone https://github.com/ALOC-UOS/aloc-client-v1.git aloc-client

# 프로젝트 디렉토리로 이동
cd aloc-client

# 의존성 설치
yarn install

# 개발 서버 실행 (http://localhost:3000에서 접속 가능)
yarn dev
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수를 설정하세요:

```
VITE_API_BASE_URL=https://api.openaloc.store/api
VITE_USER_PROFILE_IMAGE_URL=https://api.openaloc.store/upload/user
VITE_GOOGLE_LOGIN_URL=https://api.openaloc.store/oauth2/authorization/google
```

<br/>

## 📂 프로젝트 구조

```
aloc-client/
├── src/                      # 소스 코드
│  ├── assets/                # 이미지, 폰트 등 정적 리소스
│  │  ├── images/             # 이미지 리소스
│  │  ├── icons/              # 아이콘 리소스
│  │  ├── videos/             # 비디오 리소스
│  │  └── items/              # 아이템 항목
│  ├── components/            # 재사용 가능한 컴포넌트
│  │  ├── common/             # 공통 UI 컴포넌트
│  │  └── service/            # 서비스 관련 컴포넌트
│  ├── hooks/                 # 커스텀 React 훅
│  ├── lib/                   # 유틸리티 함수 및 라이브러리
│  │  ├── api/                # API 호출 관련 모듈
│  │  ├── constants/          # 상수값 정의
│  │  └── utils/              # 유틸리티 함수
│  ├── styles/                # 글로벌 스타일 및 테마
│  ├── types/                 # TypeScript 타입 정의
│  ├── views/                 # 페이지 컴포넌트
│  │  ├── Main/               # 메인 페이지
│  │  ├── Profile/            # 프로필 페이지
│  │  ├── Course/             # 코스 페이지
│  │  ├── Shop/               # 샵 페이지 (현재 사용안함)
│  │  └── User/               # 사용자 관련 페이지
│  ├── handlers/              # 이벤트 핸들러 및 API 통신
│  ├── App.tsx                # 앱 진입점
│  └── main.tsx               # 앱 렌더링
├── public/                   # 정적 파일
├── .env                      # 환경 변수
├── vite.config.ts            # Vite 설정
├── tsconfig.json             # TypeScript 설정
├── tsconfig.paths.json       # TypeScript 경로 설정
├── tsconfig.node.json        # Node용 TypeScript 설정
├── eslint.config.js          # ESLint 설정
├── .prettierrc.js            # Prettier 설정
├── vercel.json               # Vercel 배포 설정
└── build.sh                  # 빌드 스크립트
```

<br/>

## 📞 연락처 및 지원

프로젝트 관련 문의사항은 다음 방법으로 연락해주세요:

- **이슈 등록**: GitHub Issues를 통해 버그 리포트 또는 기능 요청을 제출해주세요.
- **이메일**: open.aloc@gmail.com

<br/>
```
---

© 2024 ALOC Team. All Rights Reserved.
