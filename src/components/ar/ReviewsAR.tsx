import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "إيما طومسون",
    role: "مالكة فندق",
    rating: 5,
    text: "تشغيل فندق بوتيكي يتطلب حماية قانونية مناسبة، وقد وفرت هذه الوثائق بالضبط ما احتاجه. سياسة الإلغاء والشروط والأحكام واضحة تماماً للضيوف، والامتثال لـ GDPR منحني راحة البال. جودة احترافية بجزء من تكلفة المحامي!"
  },
  {
    name: "لوكاس مارتينيز",
    role: "مؤسس منصة سفر",
    rating: 5,
    text: "كشخص يدير منصة حجز لإيجارات العطلات، كانت هذه القوالب القانونية منقذة للحياة. إنها تغطي كل شيء من حماية البيانات إلى إخلاء المسؤولية، ودليل التنفيذ جعل الإعداد سهلاً للغاية. أفضل استثمار قمت به لعملي في السفر!"
  }
];

const ReviewsAR = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">المراجعات</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف لماذا يثق أصحاب الفنادق ومنصات السفر في وثائقنا القانونية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsAR;