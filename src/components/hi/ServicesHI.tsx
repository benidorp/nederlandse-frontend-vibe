import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "गोपनीयता नीति",
    description: "GDPR कानून के अनुरूप पूर्ण गोपनीयता नीति",
    details: [
      "GDPR के तहत उपयोगकर्ता अधिकार",
      "कौन सा डेटा एकत्र किया जाता है",
      "यह डेटा कैसे और क्यों उपयोग किया जाता है",
      "तृतीय पक्षों के साथ डेटा साझाकरण"
    ]
  },
  {
    icon: AlertCircle,
    title: "अस्वीकरण",
    description: "दायित्व दावों के खिलाफ कानूनी सुरक्षा",
    details: [
      "परिणामों की कोई गारंटी नहीं",
      "जानकारी के लिए कोई देयता नहीं",
      "एफिलिएट लिंक और कमीशन की सूचना"
    ]
  },
  {
    icon: FileText,
    title: "एफिलिएट प्रकटीकरण",
    description: "FTC दिशानिर्देशों के अनुरूप पारदर्शी प्रकटीकरण",
    details: [
      "विज्ञापनदाताओं के बारे में पारदर्शिता",
      "स्पष्ट कमीशन प्रकटीकरण",
      "EU और US नियमों का अनुपालन"
    ]
  },
  {
    icon: ScrollText,
    title: "नियम और शर्तें",
    description: "आपकी वेबसाइट और उपयोगकर्ताओं के बीच संबंध को नियंत्रित करता है",
    details: [
      "देयता की सीमा",
      "उपयोग प्रतिबंध",
      "बौद्धिक संपदा अधिकार"
    ]
  },
  {
    icon: Cookie,
    title: "कुकी नीति",
    description: "पूर्ण कुकी अनुपालन और सहमति",
    details: [
      "कुकी उपयोग की व्याख्या",
      "GDPR-अनुपालक सहमति",
      "विश्लेषणात्मक कुकीज़ का प्रबंधन"
    ]
  },
  {
    icon: BookOpen,
    title: "कार्यान्वयन गाइड",
    description: "कार्यान्वयन के लिए चरण-दर-चरण निर्देश",
    details: [
      "सरल स्थापना निर्देश",
      "दस्तावेज़ों का सही स्थान",
      "आपकी वेबसाइट के लिए अनुकूलन युक्तियाँ"
    ]
  }
];

const ServicesHI = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">हमारी सेवाएं</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            आवश्यक कानूनी दस्तावेज़
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            एक एफिलिएट वेबसाइट के लिए, निम्नलिखित कानूनी दस्तावेज़ आवश्यक हैं।
            हमारे पैकेज में वह सब कुछ है जो आपको चाहिए।
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
              <CardTitle className="text-lg text-primary-foreground">सभी एफिलिएट्स के लिए परफेक्ट</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                हजारों एफिलिएट वेबसाइटों के साथ, हमारे अनुकूलन योग्य दस्तावेज़ हर एफिलिएट व्यवसाय के लिए उपयुक्त हैं।
                कमीशन कमाने पर ध्यान दें—हमने कानूनी अनुपालन को सरल बना दिया है!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">आपकी सभी वेबसाइटों के लिए</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                आपकी सभी एफिलिएट साइट(ों) के लिए आवश्यक कानूनी दस्तावेज़। हां, आप इन्हें
                सभी वेबसाइटों के लिए उपयोग कर सकते हैं बिना अलग लाइसेंस खरीदे!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">अपने जोखिम कम करें</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "हालांकि गारंटी मौजूद नहीं है और कोई भी दस्तावेज़ सब कुछ गारंटी नहीं दे सकता, ये कानूनी दस्तावेज़ आपके जोखिमों को कम करने और आपको अधिकतम सुरक्षा प्रदान करने के लिए डिज़ाइन किए गए हैं। वे आपको स्पष्ट और विश्वसनीय शर्तों की निश्चितता देते हैं।"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesHI;