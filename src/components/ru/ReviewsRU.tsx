import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const reviews = [{
  name: "Emma Thompson",
  role: "Владелец Отеля",
  rating: 5,
  text: "Управление бутик-отелем требует надлежащей юридической защиты, и эти документы предоставили именно то, что мне было нужно. Политика отмены и условия использования кристально ясны для гостей, а соответствие GDPR подарило мне спокойствие. Профессиональное качество за малую часть стоимости юриста!"
}, {
  name: "Lucas Martinez",
  role: "Основатель Туристической Платформы",
  rating: 5,
  text: "Как управляющий платформой бронирования для аренды жилья на отдых, эти юридические шаблоны стали спасением. Они охватывают всё – от защиты данных до отказов от ответственности, а руководство по внедрению сделало настройку невероятно простой. Лучшая инвестиция для моего туристического бизнеса!"
}];
const ReviewsRU = () => {
  return <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Что Говорят Наши Клиенты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, почему владельцы отелей и туристические платформы доверяют нашим юридическим документам
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ReviewsRU;