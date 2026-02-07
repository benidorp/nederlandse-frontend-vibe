import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "Политика Конфиденциальности (GDPR)",
  "Отказ от Ответственности",
  "Партнёрское Раскрытие (FTC)",
  "Условия Использования",
  "Политика Cookies",
  "Руководство по Внедрению"
];

const PricingRU = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Цены</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Основные Документы для Партнёров
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный пакет со всеми юридическими документами для вашего партнёрского сайта. Легко скачайте пакет на своём языке – или на нескольких языках – и подготовьте свой сайт для международного использования.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">единоразово</span>
              </div>
              <CardTitle className="text-2xl">Полный Пакет Документов</CardTitle>
              <CardDescription className="text-base">
                Все основные юридические документы для неограниченного использования
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
                  Безопасная оплата через Stripe • Автоматическая конвертация в вашу валюту
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Важно: Без Возвратов</h4>
                    <p className="text-xs text-muted-foreground">
                      Наши продукты не подлежат возврату, и мы не предлагаем гарантию возврата денег. 
                      Это логично для цифровых документов, которые легко можно скопировать после загрузки.
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

export default PricingRU;
