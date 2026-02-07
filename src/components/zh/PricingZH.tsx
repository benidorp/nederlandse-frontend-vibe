import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "隐私政策（符合GDPR）",
  "免责声明",
  "联盟披露（FTC）",
  "条款和条件",
  "Cookie政策",
  "实施指南"
];

const PricingZH = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">定价</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            联盟网站必备文件
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            包含联盟网站所需所有法律文件的完整套餐。轻松下载您语言版本的套餐 – 或多语言版本 – 让您的联盟网站准备好进行国际化使用。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">一次性</span>
              </div>
              <CardTitle className="text-2xl">完整文件套餐</CardTitle>
              <CardDescription className="text-base">
                所有必备法律文件，无限使用
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
                  通过Stripe安全支付 • 自动转换为当地货币
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">重要提示：不可退款</h4>
                    <p className="text-xs text-muted-foreground">
                      我们的产品不可退货，也不提供退款保证。
                      这对于下载后可以轻松复制的数字文件来说是合理的。
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

export default PricingZH;
