# CLAUDE.md - kgency_shop

This file provides guidance to Claude Code when working with the kgency_shop web project.

## 프로젝트 개요

**kgency_shop**은 "야트라 에듀케이션(Yatra Education)" 브랜드의 독립적인 온라인 교육 플랫폼입니다. React + TypeScript + Vite로 구축된 SPA(Single Page Application)으로, 외국인을 위한 한국 직업교육 콘텐츠를 제공합니다.

### 핵심 목표
- **서비스 정체성**: K-Agency와 완전히 독립된 교육 서비스
- **실제 목적**: 온라인 교육 콘텐츠 판매를 통한 수익 창출
- **전략**: 브랜드 분리를 통한 Apple 정책 준수

## 기술 스택

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **Payment**: 토스페이먼츠 / 포트원 (아임포트)
- **State Management**: Zustand (필요시)
- **HTTP Client**: Axios

## 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 프리뷰
npm run preview

# 타입 체크
npm run type-check

# 린트
npm run lint
```

## 프로젝트 구조

```
kgency_shop/
├── src/
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── Landing/        # 메인 랜딩 페이지
│   │   │   ├── index.tsx   
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FreeResources.tsx
│   │   │   └── PremiumTeaser.tsx
│   │   ├── Resources/      # 리소스 목록 페이지
│   │   │   ├── index.tsx
│   │   │   ├── ResourceCard.tsx
│   │   │   └── FilterSection.tsx
│   │   └── Membership/     # 멤버십 결제 페이지
│   │       ├── index.tsx
│   │       ├── BenefitsList.tsx
│   │       └── PaymentForm.tsx
│   ├── components/         # 공통 컴포넌트
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── Common/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── Payment/
│   │       └── TossPaymentWidget.tsx
│   ├── services/          # API 및 외부 서비스
│   │   ├── api.ts         # API 클라이언트
│   │   ├── payment.ts     # PG사 연동
│   │   └── auth.ts        # 인증 관련
│   ├── utils/             # 유틸리티 함수
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── types/             # TypeScript 타입 정의
│   │   └── index.ts
│   ├── App.tsx           # 앱 루트 컴포넌트
│   ├── main.tsx          # 엔트리 포인트
│   └── index.css         # 글로벌 스타일
├── public/               # 정적 파일
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 브랜드 분리 전략

### 1. 독립적 서비스 포지셔닝
- **야트라 에듀케이션**: 온라인 직업교육 전문 브랜드
- **K-Agency와 완전 분리**: 별도 회사, 별도 서비스로 운영
- **교육 중심 메시징**: 채용 매칭이 아닌 교육에 집중

### 2. 안전한 브랜딩 전략
```typescript
// ❌ 피해야 할 문구
"K-Agency 회원", "채용 매칭", "구직 서비스", "앱 연동"

// ✅ 사용할 문구  
"온라인 교육", "직업교육", "학습 플랫폼", "교육 콘텐츠"
```

### 3. 상품 구성 (교육 중심)
```typescript
interface EducationPackage {
  name: "한국 직업교육 패키지";
  price: 49000; // 일시불
  benefits: [
    "한국 직장문화 이해 PDF (300페이지)",
    "비즈니스 한국어 학습서 PDF",
    "취업 성공 전략 가이드 PDF",
    "1:1 이력서 첨삭 서비스",
    "온라인 상담 30분"
  ];
}
```

## 핵심 기능 구현

### 1. 독립적 서비스 운영
```typescript
// 완전 독립적인 교육 플랫폼
// https://education-yatra.com

// 앱 연동 금지 - 딥링크 없음
// 각각 별도 회원 시스템 운영
```

### 2. PG사 결제 연동
```typescript
// 토스페이먼츠 예시
const payment = await loadTossPayments(clientKey);
await payment.requestPayment('카드', {
  amount: 49000,
  orderId: generateOrderId(),
  orderName: '야트라 프리미엄 멤버십',
  customerName: userName,
  successUrl: `${window.location.origin}/payment/success`,
  failUrl: `${window.location.origin}/payment/fail`,
});
```

### 3. PDF 다운로드 보안
```typescript
// 일회용 다운로드 토큰 생성
const downloadToken = await generateOneTimeToken(userId, pdfId);
const downloadUrl = `/api/download/${pdfId}?token=${downloadToken}`;
```

## SEO 최적화 (심사 대비)

### 메타 태그 (교육 중심)
```html
<meta name="description" content="외국인을 위한 한국 직업교육 온라인 플랫폼 - 야트라 에듀케이션">
<meta name="keywords" content="온라인 교육, 직업교육, 한국 직장문화, 비즈니스 한국어, 취업 교육">
```

### 구조화된 데이터 (교육 기관)
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "야트라 에듀케이션",
  "description": "외국인을 위한 한국 직업교육 전문 온라인 플랫폼"
}
```

## 보안 고려사항

1. **독립적 보안**: 별도 도메인으로 완전 분리된 보안 정책
2. **회원 인증**: 독립적인 JWT 토큰 시스템
3. **Rate Limiting**: 다운로드 및 결제 API에 rate limit 적용  
4. **HTTPS 필수**: 모든 통신은 HTTPS로만
5. **K-Agency 연동 금지**: 어떤 형태의 계정 연동도 구현하지 않음

## 환경 변수

```env
# .env.local
VITE_API_BASE_URL=https://api.kgency.com
VITE_TOSS_CLIENT_KEY=your_toss_client_key
VITE_PORTONE_MERCHANT_ID=your_portone_id
VITE_GA_TRACKING_ID=your_ga_id
```

## 배포

```bash
# Vercel 배포 (추천)
npm run build
vercel --prod

# Netlify 배포
npm run build
netlify deploy --prod
```

## 성능 최적화

1. **Code Splitting**: React.lazy() 사용
2. **Image Optimization**: WebP 포맷 사용
3. **CDN**: 정적 자산은 CDN 활용
4. **Caching**: 적절한 캐시 헤더 설정

## 모니터링

- Google Analytics 4: 사용자 행동 분석
- Sentry: 에러 트래킹
- Hotjar: 히트맵 분석 (옵션)

## 주요 컴포넌트 설명

### Landing Page
- **목적**: 정보성 콘텐츠로 앱 심사 통과
- **구성**: 무료 자료 70% + 프리미엄 티저 30%
- **CTA**: "더 많은 혜택 확인하기" (결제 페이지로 간접 유도)

### Resources Page
- **목적**: 실제 가치 있는 콘텐츠 제공
- **구성**: 카테고리별 자료 목록 (무료/프리미엄 구분)
- **UX**: 프리미엄 콘텐츠는 🔒 아이콘 표시

### Membership Page
- **목적**: 실제 결제 처리
- **구성**: 혜택 설명 + 결제 폼
- **보안**: PG사 결제창은 iframe/팝업으로 처리

## 테스트

```bash
# 단위 테스트
npm run test

# E2E 테스트
npm run test:e2e

# 결제 테스트 (테스트 모드)
# 토스페이먼츠 테스트 카드: 4330-0000-0000-0005
```

## 문제 해결

### 앱에서 웹페이지가 안 열릴 때
- 앱의 Info.plist에 도메인 추가 필요
- Android는 AndroidManifest.xml에 인텐트 필터 추가

### 결제 실패 시
- PG사 대시보드에서 에러 로그 확인
- 테스트/프로덕션 키 확인

### CORS 에러
- 서버에서 kgency 앱 도메인 허용 설정
- credentials: 'include' 옵션 확인