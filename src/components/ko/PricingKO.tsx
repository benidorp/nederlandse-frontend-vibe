import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "개인정보보호정책 (GDPR 준수)",
  "면책조항",
  "제휴 공개 (FTC)",
  "이용약관",
  "쿠키 정책",
  "구현 가이드"
];

const PricingKO = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">가격</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            제휴 웹사이트 필수 문서
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            제휴 웹사이트에 필요한 모든 법적 문서가 포함된 완전 패키지입니다. 원하는 언어로 패키지를 쉽게 다운로드하세요 – 또는 여러 언어로 – 국제적 사용을 위해 사이트를 준비하세요.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">일회성</span>
              </div>
              <CardTitle className="text-2xl">완전 문서 패키지</CardTitle>
              <CardDescription className="text-base">
                무제한 사용을 위한 모든 필수 법적 문서
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Stripe를 통한 안전한 결제 • 현지 통화로 자동 변환
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">중요: 환불 불가</h4>
                    <p className="text-xs text-muted-foreground">
                      당사 제품은 반품할 수 없으며 환불 보장을 제공하지 않습니다. 
                      다운로드 후 쉽게 복사할 수 있는 디지털 문서의 경우 이는 합리적입니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingKO;
