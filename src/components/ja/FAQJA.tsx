import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQJA = () => {
  const faqs = [
    {
      question: "パッケージにはどのような法的文書が含まれていますか？",
      answer: "パッケージには利用規約、プライバシーポリシー（GDPR準拠）、Cookieポリシー、アフィリエイト開示（FTC準拠）、免責事項、実装ガイドが含まれています。"
    },
    {
      question: "文書はGDPRに準拠していますか？",
      answer: "はい、すべての文書は国際的な使用のためにGDPR、CCPA、FTCガイドラインに完全に準拠しています。"
    },
    {
      question: "購入後、文書はどのように受け取れますか？",
      answer: "お支払い後、すべての文書をダウンロードするための即時アクセスが得られます。ダウンロードリンク付きの確認メールも届きます。"
    },
    {
      question: "文書を自分のサイト用にカスタマイズできますか？",
      answer: "はい、すべての文書は完全にカスタマイズ可能です。簡単にカスタマイズするための詳細なガイドが含まれています。"
    },
    {
      question: "文書はどのタイプのサイトにも適していますか？",
      answer: "はい、文書はブログ、オンラインストア、アフィリエイトサイトなどに適しています。実装ガイドが適応に役立ちます。"
    },
    {
      question: "無料アップデートは受けられますか？",
      answer: "はい、法律が変更された場合は無料アップデートを受けられます。文書は常に最新の状態に保たれます。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            当社の法的パッケージについて最も一般的な質問への回答
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQJA;
