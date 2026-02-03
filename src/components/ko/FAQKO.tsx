import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQKO = () => {
  const faqs = [
    { question: "패키지에 어떤 법적 문서가 포함되어 있나요?", answer: "패키지에는 이용약관, 개인정보보호정책(GDPR 준수), 쿠키 정책, 제휴 공개(FTC 준수), 면책조항 및 구현 가이드가 포함되어 있습니다." },
    { question: "문서가 GDPR을 준수하나요?", answer: "예, 모든 문서는 국제 사용을 위해 GDPR, CCPA 및 FTC 가이드라인을 완전히 준수합니다." },
    { question: "구매 후 문서를 어떻게 받나요?", answer: "결제 후 모든 문서를 다운로드할 수 있는 즉시 액세스 권한을 받습니다. 다운로드 링크가 포함된 확인 이메일도 받게 됩니다." },
    { question: "제 사이트에 맞게 문서를 사용자 정의할 수 있나요?", answer: "예, 모든 문서는 완전히 사용자 정의할 수 있습니다. 쉽게 사용자 정의할 수 있는 자세한 가이드가 포함되어 있습니다." },
    { question: "문서가 모든 유형의 사이트에 적합한가요?", answer: "예, 문서는 블로그, 온라인 상점, 제휴 사이트 등에 적합합니다. 구현 가이드가 적응에 도움이 됩니다." },
    { question: "무료 업데이트를 받을 수 있나요?", answer: "예, 법률이 변경되면 무료 업데이트를 받습니다. 문서는 항상 최신 상태로 유지됩니다." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">자주 묻는 질문</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">법적 패키지에 대해 가장 자주 묻는 질문에 대한 답변</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQKO;
