import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "سياسة الخصوصية (متوافقة مع GDPR)",
  "إخلاء المسؤولية",
  "إفصاح الأفلييت (FTC)",
  "الشروط والأحكام",
  "سياسة ملفات تعريف الارتباط",
  "دليل التنفيذ"
];

const PricingAR = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">الأسعار</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            وثائق الأفلييت الأساسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            باقة كاملة مع جميع الوثائق القانونية التي تحتاجها لموقع الأفلييت الخاص بك. قم بتنزيل الباقة بسهولة بلغتك - أو بعدة لغات - واجعل موقع الأفلييت الخاص بك جاهزاً للاستخدام الدولي.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground mr-2">لمرة واحدة</span>
              </div>
              <CardTitle className="text-2xl">باقة الوثائق الكاملة</CardTitle>
              <CardDescription className="text-base">
                جميع الوثائق القانونية الأساسية للاستخدام غير المحدود
              </CardDescription>
              <div className="flex justify-center mt-6">
                <img src="/images/iaee-logo.png" alt="IAEE" className="h-20 w-20 object-contain" loading="eager" />
              </div>
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
                  دفع آمن عبر Stripe • يتم التحويل تلقائياً إلى عملتك المحلية
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">مهم: لا إرجاع</h4>
                    <p className="text-xs text-muted-foreground">
                      لا يمكن إرجاع منتجاتنا ونحن لا نقدم ضمان استرداد الأموال.
                      هذا منطقي للوثائق الرقمية التي يمكن نسخها بسهولة بعد التنزيل.
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

export default PricingAR;