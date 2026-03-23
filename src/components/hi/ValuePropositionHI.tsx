import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionHI = () => {
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
              एफिलिएट व्यवसायों के लिए पेशेवर कानूनी दस्तावेज़
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              आपकी एफिलिएट वेबसाइट के लिए सभी कानूनी रूप से आवश्यक दस्तावेज़
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              एक एफिलिएट मार्केटर के रूप में, आप उत्पादों की सिफारिश करके कमीशन कमाते हैं। लेकिन क्या आप जानते हैं कि आपको
              <strong> कानूनी रूप से</strong> अपनी वेबसाइट पर कुछ कानूनी दस्तावेज़ रखने की आवश्यकता है?
              इन दस्तावेज़ों के बिना, आप उच्च जुर्माने और कानूनी मुद्दों का जोखिम उठाते हैं।
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">मेरे बारे में</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="निकोल हेंडरसन - कानूनी विशेषज्ञ" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">निकोल हेंडरसन</p>
                <p className="text-lg text-muted-foreground font-medium">
                  स्पष्ट, सटीक और पेशेवर कानूनी दस्तावेज़ों में विशेषज्ञ कानूनी विशेषज्ञ
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  नमस्ते, मैं निकोल हेंडरसन हूं, स्पष्ट, सटीक और पेशेवर कानूनी दस्तावेज़ों में विशेषज्ञ एक कानूनी लेखक। मैं व्यवसायों, संगठनों और व्यक्तियों के लिए अनुबंध, नीतियां और समझौते तैयार करती हूं जो आपके हितों की रक्षा करते हैं और अनुपालन सुनिश्चित करते हैं, कानूनी कागजी कार्रवाई को सरल और तनाव-मुक्त बनाते हैं।
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    एफिलिएट व्यवसायों के लिए पेशेवर कानूनी दस्तावेज़
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    एफिलिएट्स के लिए कानूनी आवश्यकताओं के बारे में कई सवालों के जवाब देने के लिए, मैंने विशेष रूप से एफिलिएट वेबसाइटों के लिए उच्च-गुणवत्ता वाले कानूनी दस्तावेज़ विकसित किए हैं। ये दस्तावेज़ राष्ट्रीय और अंतर्राष्ट्रीय उपयोग दोनों के लिए डिज़ाइन किए गए हैं और सामान्य लागत के एक अंश पर आवश्यक सुरक्षा प्रदान करते हैं। किफायती मूल्य पर पेशेवर कानूनी कवरेज प्राप्त करें—आज ही अपना व्यवसाय सुरक्षित करें!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                आपको क्या मिलता है: पूर्ण कानूनी पैकेज
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                हमारे पूर्ण पैकेज में <strong>विशेष रूप से एफिलिएट वेबसाइटों के लिए लिखे गए सभी कानूनी दस्तावेज़</strong> शामिल हैं।
                सामान्य टेम्पलेट नहीं, बल्कि पेशेवर टेक्स्ट जो आपके एफिलिएट बिजनेस मॉडल के साथ पूरी तरह से मेल खाते हैं:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR गोपनीयता नीति</h4>
                    <p className="text-sm text-muted-foreground">कुकी उपयोग और डेटा सुरक्षा सहित यूरोपीय कानून के साथ पूर्ण अनुपालन</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">एफिलिएट प्रकटीकरण</h4>
                    <p className="text-sm text-muted-foreground">पारदर्शी सूचना कि आप कमीशन कमाते हैं, FTC और EU नियमों के अनुरूप</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">नियम और शर्तें</h4>
                    <p className="text-sm text-foreground/80">आपको दायित्व दावों से बचाता है और आगंतुकों के साथ संबंध को नियंत्रित करता है</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">कानूनी अस्वीकरण</h4>
                    <p className="text-sm text-foreground/80">आपके द्वारा की गई सिफारिशों के लिए आपकी देयता को सीमित करता है</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">कुकी नीति</h4>
                    <p className="text-sm text-foreground/80">GDPR अनुपालक, ट्रैकिंग और एनालिटिक्स कुकीज़ की व्याख्या</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">कार्यान्वयन गाइड</h4>
                    <p className="text-sm text-foreground/80">आपकी वेबसाइट पर सब कुछ सही ढंग से रखने के लिए चरण-दर-चरण निर्देश</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">मिनटों में तैयार</h3>
                <p className="text-sm text-foreground/80">
                  डाउनलोड करें, अपने व्यवसाय विवरण भरें, और दस्तावेज़ अपनी वेबसाइट पर रखें। कोई वकील नहीं चाहिए, सप्ताहों का इंतजार नहीं।
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">आपकी सभी वेबसाइटों के लिए</h3>
                <p className="text-sm text-muted-foreground">
                  एक खरीद, असीमित उपयोग। इन दस्तावेज़ों का उपयोग अपनी सभी वर्तमान और भविष्य की एफिलिएट वेबसाइटों के लिए करें!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">अंतर्राष्ट्रीय उपयोग</h3>
                <p className="text-sm text-muted-foreground">
                  टेम्पलेट अंतर्राष्ट्रीय उपयोग के लिए कई भाषाओं में डाउनलोड के लिए उपलब्ध हैं, ताकि आप उन्हें दुनिया भर में अपनी सभी वेबसाइटों पर तैनात कर सकें।
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                GDPR और अंतर्राष्ट्रीय कानून के साथ पूर्ण अनुपालन। अंतर्राष्ट्रीय उपयोग के लिए विभिन्न भाषाओं में डाउनलोड का विकल्प। आपके व्यवसाय के लिए पूर्ण सुरक्षा।
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                केवल <strong className="text-primary-foreground">€79 एकमुश्त</strong> में आप अपनी सभी एफिलिएट वेबसाइटों के लिए सभी कानूनी दायित्वों की व्यवस्था करते हैं। कोई मासिक शुल्क नहीं, वकीलों के साथ कोई परेशानी नहीं, जुर्माने का कोई जोखिम नहीं।
                बस वे सभी दस्तावेज़ जो आपको चाहिए, उपयोग के लिए तैयार।
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                €79 में अभी ऑर्डर करें
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 इस पर विचार करें: एक वकील के साथ एक घंटे की लागत पहले से ही €200 से अधिक है
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionHI;