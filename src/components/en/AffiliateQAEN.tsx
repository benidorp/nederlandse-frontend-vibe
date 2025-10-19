import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const AffiliateQAEN = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions About Affiliate Legal Requirements
          </h2>
          <p className="text-lg text-muted-foreground">
            Understand what you need to be legally compliant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-2">What You MUST Have</CardTitle>
                  <CardDescription>Essential legal documents for every affiliate website</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Privacy Policy:</strong> Required by GDPR/AVG for data collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Affiliate Disclosure:</strong> FTC requires transparency about commissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Cookie Policy:</strong> Required if you use cookies or tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Terms & Conditions:</strong> Protects you from liability</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <XCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-2">Common Mistakes to Avoid</CardTitle>
                  <CardDescription>What can go wrong without proper legal protection</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>No disclosure:</strong> FTC fines up to $43,792 per violation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>No privacy policy:</strong> GDPR fines up to €20 million</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Outdated documents:</strong> Non-compliance with current laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Generic templates:</strong> May not cover affiliate-specific requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <HelpCircle className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-2">Why Choose Our Package?</CardTitle>
                  <CardDescription>Specifically designed for affiliate marketers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Written by legal experts specialized in affiliate marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Covers all major affiliate networks and platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Regular updates included for legal changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>One-time payment, use on unlimited websites</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-2">International Compliance</CardTitle>
                  <CardDescription>Compliant with major international regulations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Europe:</strong> GDPR/AVG and ePrivacy Directive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>USA:</strong> FTC guidelines and state privacy laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>UK:</strong> UK GDPR and Data Protection Act</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Other regions:</strong> Adaptable to local requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AffiliateQAEN;
