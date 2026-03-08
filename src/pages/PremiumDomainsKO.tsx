import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "ko", locale: "ko_KR", brandName: "IAEE 프리미엄 도메인",
  title: "프리미엄 도메인 구매 | 높은 권위 SEO 가치 | IAEE",
  metaDesc: "높은 도메인 권위와 SEO 가치를 가진 프리미엄 도메인을 구매하세요. MOZ DA 29+의 만료 도메인으로 즉시 브랜드와 검색 순위를 높이세요.",
  heroBadge: "프리미엄 도메인 마켓플레이스",
  heroTitle: "높은 권위의 프리미엄 도메인 구매",
  heroSub: "즉각적인 SEO 파워를 가진 프리미엄 만료 도메인을 발견하세요. 모든 도메인은 높은 도메인 권위, 검증된 백링크, 즉시 이전 가능합니다.",
  ctaBrowse: "도메인 둘러보기", ctaMore: "더 알아보기",
  statLabels: ["프리미엄 도메인", "백링크", "카테고리", "만족한 고객"],
  navDomains: "도메인", navWhy: "프리미엄 이유", navFaq: "FAQ", navContact: "문의",
  gridBadge: "프리미엄 컬렉션", gridTitle: "프리미엄 도메인", gridSub: "SEO 가치가 검증된 프리미엄 도메인을 둘러보세요.",
  gridIntro: [
    "모든 도메인은 <strong>높은 도메인 권위(DA 29+)</strong>와 <strong>검증된 백링크 프로필</strong>을 보유하고 있습니다.",
    "각 도메인에는 MOZ 점수, 페이지 권위, 연결 도메인 수, 최상위 백링크 정보가 포함됩니다.",
  ],
  vatInfo: "💡 EU 고객: 모든 가격에 VAT가 포함되어 있습니다 (EU VAT 규정 적용)",
  buyNow: "지금 구매", inquiryLabel: "문의하기", priceLabel: "가격",
  blLabel: "백링크", paLabel: "PA", ldLabel: "연결 도메인", ibLabel: "인바운드", flLabel: "팔로우", topBlLabel: "상위 백링크",
  viewDetails: "상세보기", buyAlt: "프리미엄 도메인 구매",
  whyBadge: "왜 프리미엄인가", whyTitle: "프리미엄 도메인의 장점", whySub: "프리미엄 도메인은 새 도메인보다 더 빠른 SEO 결과를 제공합니다.",
  whyCards: [
    { title: "즉시 권위", desc: "높은 DA로 검색 순위를 즉시 높이세요" },
    { title: "검증된 백링크", desc: "수백 개의 고품질 백링크 포함" },
    { title: "SEO 우위", desc: "새 도메인보다 훨씬 빠른 순위 상승" },
    { title: "글로벌 인지도", desc: "즉각적인 브랜드 신뢰성 확보" },
  ],
  faqBadge: "자주 묻는 질문", faqTitle: "FAQ",
  faqs: [
    { q: "프리미엄 도메인이란 무엇인가요?", a: "프리미엄 도메인은 높은 도메인 권위, 기존 백링크 프로필, 검증된 SEO 가치를 가진 만료 도메인입니다." },
    { q: "도메인 이전은 어떻게 진행되나요?", a: "결제 완료 후 24시간 이내에 도메인 이전 절차를 시작합니다. 전체 과정은 보통 3-5 영업일이 소요됩니다." },
    { q: "환불 정책은 어떻게 되나요?", a: "도메인 이전이 시작되기 전에는 전액 환불이 가능합니다." },
    { q: "어떤 결제 방법을 지원하나요?", a: "Stripe를 통해 모든 주요 신용카드와 직불카드를 지원합니다." },
    { q: "도메인의 SEO 가치를 어떻게 확인하나요?", a: "각 도메인에는 MOZ DA/PA 점수, 백링크 수, 연결 도메인 수 등 검증된 SEO 지표가 포함됩니다." },
  ],
  contactBadge: "문의하기", contactTitle: "연락처", contactSub: "프리미엄 도메인에 대해 질문이 있으신가요? 연락해 주세요.",
  nameLabel: "이름", emailLabel: "이메일", domainLabel: "관심 도메인", msgLabel: "메시지",
  namePh: "홍길동", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "문의 내용을 입력하세요...",
  submitBtn: "메시지 보내기", formErrTitle: "양식 오류", formErrCheck: "모든 필드를 확인해 주세요.",
  sendingTitle: "전송 중...", sendingDesc: "이메일 클라이언트가 열립니다.",
  emailSubjectPrefix: "프리미엄 도메인 문의",
  seoTitle: "프리미엄 도메인으로 온라인 성공 시작",
  seoP1: "프리미엄 만료 도메인은 높은 도메인 권위와 기존 백링크를 통해 새 프로젝트에 즉각적인 SEO 이점을 제공합니다.",
  seoP2: "IAEE의 프리미엄 도메인 컬렉션은 철저한 SEO 분석을 거쳐 선별되었으며, 각 도메인은 검증된 MOZ 점수와 백링크 프로필을 보유합니다.",
  nordTitle: "🛡️ NordVPN 추천", nordDesc: "온라인 보안과 개인 정보 보호를 위해 NordVPN을 추천합니다.", nordCta: "NordVPN 받기",
  contactBtmTitle: "시작할 준비가 되셨나요?", contactBtmSub: "지금 프리미엄 도메인을 확보하세요.", contactBtmNote: "24시간 이내 답변 보장",
  legalTitle: "법적 정보", legalTerms: "이용약관", legalPrivacy: "개인정보 처리방침",
  copyrightText: "© 2025 IAEE Premium Domains. 모든 권리 보유.",
  backToTopLabel: "맨 위로",
};

const PremiumDomainsKO = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsKO;
