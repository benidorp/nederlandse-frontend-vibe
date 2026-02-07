import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "Πολιτική Απορρήτου (Συμβατή με GDPR)",
  "Αποποίηση Ευθύνης",
  "Γνωστοποίηση Συνεργατών (FTC)",
  "Όροι & Προϋποθέσεις",
  "Πολιτική Cookies",
  "Οδηγός Εφαρμογής"
];

const PricingEL = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Τιμολόγηση</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Απαραίτητα Έγγραφα για Συνεργάτες
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Πλήρες πακέτο με όλα τα νομικά έγγραφα που χρειάζεστε για την ιστοσελίδα συνεργατών σας. Κατεβάστε εύκολα το πακέτο στη δική σας γλώσσα – ή σε πολλές γλώσσες – και κάντε την ιστοσελίδα σας έτοιμη για διεθνή χρήση.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">εφάπαξ</span>
              </div>
              <CardTitle className="text-2xl">Πλήρες Πακέτο Εγγράφων</CardTitle>
              <CardDescription className="text-base">
                Όλα τα απαραίτητα νομικά έγγραφα για απεριόριστη χρήση
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
                  Ασφαλής πληρωμή μέσω Stripe • Αυτόματη μετατροπή στο τοπικό σας νόμισμα
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Σημαντικό: Χωρίς Επιστροφές</h4>
                    <p className="text-xs text-muted-foreground">
                      Τα προϊόντα μας δεν μπορούν να επιστραφούν και δεν προσφέρουμε εγγύηση επιστροφής χρημάτων. 
                      Αυτό είναι λογικό για ψηφιακά έγγραφα που μπορούν εύκολα να αντιγραφούν μετά τη λήψη.
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

export default PricingEL;
