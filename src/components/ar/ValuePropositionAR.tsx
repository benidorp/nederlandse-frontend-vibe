import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionAR = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              وثائق قانونية احترافية لأعمال الأفلييت
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جميع الوثائق القانونية المطلوبة لموقع الأفلييت الخاص بك
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              كمسوق بالعمولة، تكسب عمولات من خلال توصية المنتجات. لكن هل تعلم أنك
              <strong> ملزم قانونياً</strong> بوجود وثائق قانونية معينة على موقعك؟
              بدون هذه الوثائق، تخاطر بغرامات عالية ومشاكل قانونية.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">نبذة عني</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="نيكول هندرسون - أخصائية قانونية" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">نيكول هندرسون</p>
                <p className="text-lg text-muted-foreground font-medium">
                  أخصائية قانونية متخصصة في الوثائق القانونية الواضحة والدقيقة والمهنية
                </p>
              </div>
              
              <div className="space-y-4 text-right max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  مرحباً، أنا نيكول هندرسون، كاتبة قانونية متخصصة في الوثائق القانونية الواضحة والدقيقة والمهنية. أقوم بصياغة العقود والسياسات والاتفاقيات للشركات والمؤسسات والأفراد التي تحمي مصالحك وتضمن الامتثال، مما يجعل الأعمال الورقية القانونية بسيطة وخالية من التوتر.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    وثائق قانونية احترافية لأعمال الأفلييت
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    للإجابة على الأسئلة العديدة حول المتطلبات القانونية للأفلييت، قمت بتطوير وثائق قانونية عالية الجودة خصيصاً لمواقع الأفلييت. هذه الوثائق مصممة للاستخدام الوطني والدولي وتوفر الحماية الأساسية بجزء من التكلفة المعتادة. احصل على تغطية قانونية احترافية بسعر معقول—أمّن عملك اليوم!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                ما تحصل عليه: الباقة القانونية الكاملة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                تحتوي باقتنا الكاملة على <strong>جميع الوثائق القانونية المكتوبة خصيصاً لمواقع الأفلييت</strong>.
                ليست قوالب عامة، بل نصوص احترافية تتوافق تماماً مع نموذج عملك في الأفلييت:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">سياسة الخصوصية GDPR</h4>
                    <p className="text-sm text-muted-foreground">متوافقة تماماً مع التشريعات الأوروبية، بما في ذلك استخدام ملفات تعريف الارتباط وحماية البيانات</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">إفصاح الأفلييت</h4>
                    <p className="text-sm text-muted-foreground">إشعار شفاف بأنك تكسب عمولات، متوافق مع لوائح FTC والاتحاد الأوروبي</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">الشروط والأحكام</h4>
                    <p className="text-sm text-foreground/80">يحميك من مطالبات المسؤولية وينظم العلاقة مع الزوار</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">إخلاء المسؤولية القانوني</h4>
                    <p className="text-sm text-foreground/80">يحد من مسؤوليتك عن التوصيات التي تقدمها</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">سياسة ملفات تعريف الارتباط</h4>
                    <p className="text-sm text-foreground/80">متوافقة مع GDPR، شرح ملفات تعريف الارتباط للتتبع والتحليلات</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">دليل التنفيذ</h4>
                    <p className="text-sm text-foreground/80">تعليمات خطوة بخطوة لوضع كل شيء بشكل صحيح على موقعك</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">جاهز في دقائق</h3>
                <p className="text-sm text-foreground/80">
                  قم بالتنزيل، واملأ تفاصيل عملك، وضع الوثائق على موقعك. لا حاجة لمحامٍ، لا انتظار لأسابيع.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">لجميع مواقعك</h3>
                <p className="text-sm text-muted-foreground">
                  شراء واحد، استخدام غير محدود. استخدم هذه الوثائق لجميع مواقع الأفلييت الحالية والمستقبلية!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">استخدام دولي</h3>
                <p className="text-sm text-muted-foreground">
                  القوالب متاحة للتنزيل بعدة لغات للاستخدام الدولي، حتى تتمكن من نشرها على جميع مواقعك حول العالم.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                متوافق تماماً مع GDPR والتشريعات الدولية. خيار التنزيل بلغات مختلفة للاستخدام الدولي. حماية كاملة لعملك.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                مقابل <strong className="text-primary-foreground">€79 لمرة واحدة فقط</strong> تنظم جميع الالتزامات القانونية
                لجميع مواقع الأفلييت الخاصة بك. لا رسوم شهرية، لا متاعب مع المحامين، لا مخاطر غرامات.
                فقط جميع الوثائق التي تحتاجها، جاهزة للاستخدام.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                اطلب الآن بـ €79
                <CheckCircle className="mr-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 فكر في هذا: ساعة واحدة مع محامٍ تكلف أكثر من €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionAR;