import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "एम्मा थॉम्पसन",
    role: "होटल मालिक",
    rating: 5,
    text: "एक बुटीक होटल चलाने के लिए उचित कानूनी सुरक्षा की आवश्यकता होती है, और इन दस्तावेज़ों ने ठीक वही प्रदान किया जो मुझे चाहिए था। रद्दीकरण नीति और नियम और शर्तें मेहमानों के लिए बिल्कुल स्पष्ट हैं, और GDPR अनुपालन ने मुझे मन की शांति दी। एक वकील की तुलना में बहुत कम कीमत पर पेशेवर गुणवत्ता!"
  },
  {
    name: "लुकास मार्टिनेज",
    role: "ट्रैवल प्लेटफॉर्म संस्थापक",
    rating: 5,
    text: "वेकेशन रेंटल के लिए बुकिंग प्लेटफॉर्म का प्रबंधन करने वाले के रूप में, ये कानूनी टेम्पलेट एक जीवनरक्षक थे। वे डेटा सुरक्षा से लेकर देयता अस्वीकरण तक सब कुछ कवर करते हैं, और कार्यान्वयन गाइड ने सेटअप को अविश्वसनीय रूप से सरल बना दिया। मेरे ट्रैवल बिजनेस के लिए सबसे अच्छा निवेश!"
  }
];

const ReviewsHI = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">समीक्षाएं</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">हमारे ग्राहक क्या कहते हैं</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            जानें कि होटल मालिक और ट्रैवल प्लेटफॉर्म हमारे कानूनी दस्तावेज़ों पर क्यों भरोसा करते हैं
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

export default ReviewsHI;