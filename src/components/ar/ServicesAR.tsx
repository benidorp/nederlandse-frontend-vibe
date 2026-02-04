import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "سياسة الخصوصية",
    description: "سياسة خصوصية كاملة متوافقة مع تشريعات GDPR",
    details: [
      "حقوق المستخدم بموجب GDPR",
      "ما هي البيانات التي يتم جمعها",
      "كيف ولماذا تُستخدم هذه البيانات",
      "مشاركة البيانات مع أطراف ثالثة"
    ]
  },
  {
    icon: AlertCircle,
    title: "إخلاء المسؤولية",
    description: "حماية قانونية ضد مطالبات المسؤولية",
    details: [
      "لا ضمان للنتائج",
      "لا مسؤولية عن المعلومات",
      "إشعار بروابط الأفلييت والعمولات"
    ]
  },
  {
    icon: FileText,
    title: "إفصاح الأفلييت",
    description: "إفصاح شفاف متوافق مع إرشادات FTC",
    details: [
      "الشفافية حول المعلنين",
      "إفصاح واضح عن العمولات",
      "الامتثال للوائح الاتحاد الأوروبي والولايات المتحدة"
    ]
  },
  {
    icon: ScrollText,
    title: "الشروط والأحكام",
    description: "تحكم العلاقة بين موقعك والمستخدمين",
    details: [
      "تحديد المسؤولية",
      "قيود الاستخدام",
      "حقوق الملكية الفكرية"
    ]
  },
  {
    icon: Cookie,
    title: "سياسة ملفات تعريف الارتباط",
    description: "امتثال كامل لملفات تعريف الارتباط والموافقة",
    details: [
      "شرح استخدام ملفات تعريف الارتباط",
      "موافقة متوافقة مع GDPR",
      "إدارة ملفات تعريف الارتباط التحليلية"
    ]
  },
  {
    icon: BookOpen,
    title: "دليل التنفيذ",
    description: "تعليمات خطوة بخطوة للتنفيذ",
    details: [
      "تعليمات تثبيت بسيطة",
      "التنسيب الصحيح للوثائق",
      "نصائح التخصيص لموقعك"
    ]
  }
];

const ServicesAR = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">خدماتنا</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            الوثائق القانونية الأساسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لموقع أفلييت، الوثائق القانونية التالية ضرورية.
            تحتوي باقتنا على كل ما تحتاجه.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">مثالي لجميع المسوقين بالعمولة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                مع آلاف مواقع الأفلييت، وثائقنا القابلة للتخصيص مناسبة لكل نشاط تجاري في الأفلييت.
                ركز على كسب العمولات—لقد جعلنا الامتثال القانوني بسيطاً!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">لجميع مواقعك</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                الوثائق القانونية الأساسية لجميع موقع(مواقع) الأفلييت الخاصة بك. نعم، يمكنك استخدامها
                لجميع المواقع دون الحاجة لشراء تراخيص منفصلة!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">قلل من مخاطرك</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "بينما لا توجد ضمانات ولا يمكن لأي وثيقة ضمان كل شيء، فإن هذه الوثائق القانونية مصممة لتقليل مخاطرك وتوفير أقصى حماية لك. إنها تمنحك اليقين بشروط واضحة وموثوقة."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesAR;