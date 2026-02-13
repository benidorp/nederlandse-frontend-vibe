import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "गोपनीयता नीति (GDPR-अनुपालक)",
  "अस्वीकरण",
  "एफिलिएट प्रकटीकरण (FTC)",
  "नियम और शर्तें",
  "कुकी नीति",
  "कार्यान्वयन गाइड"
];

const PricingHI = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">मूल्य निर्धारण</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            आवश्यक एफिलिएट दस्तावेज़
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            आपकी एफिलिएट वेबसाइट के लिए सभी कानूनी दस्तावेज़ों के साथ पूर्ण पैकेज। पैकेज को अपनी भाषा में - या कई भाषाओं में - आसानी से डाउनलोड करें और अपनी एफिलिएट वेबसाइट को अंतर्राष्ट्रीय उपयोग के लिए तैयार करें।
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">एकमुश्त</span>
              </div>
              <CardTitle className="text-2xl">पूर्ण दस्तावेज़ पैकेज</CardTitle>
              <CardDescription className="text-base">
                असीमित उपयोग के लिए सभी आवश्यक कानूनी दस्तावेज़
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
                  Stripe के माध्यम से सुरक्षित भुगतान • स्वचालित रूप से आपकी स्थानीय मुद्रा में परिवर्तित
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">महत्वपूर्ण: कोई वापसी नहीं</h4>
                    <p className="text-xs text-muted-foreground">
                      हमारे उत्पाद वापस नहीं किए जा सकते और हम मनी-बैक गारंटी नहीं देते।
                      यह डिजिटल दस्तावेज़ों के लिए समझ में आता है जिन्हें डाउनलोड के बाद आसानी से कॉपी किया जा सकता है।
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

export default PricingHI;