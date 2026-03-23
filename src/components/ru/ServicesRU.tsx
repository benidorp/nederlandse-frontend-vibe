import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesRU = () => {
  const documents = [
    {
      icon: FileText,
      title: "Условия Использования",
      description: "Комплексные условия использования, охватывающие использование сайта, права пользователей, обязательства и правовую базу.",
      features: ["Правила использования сайта", "Права интеллектуальной собственности", "Ограничение ответственности", "Условия расторжения"]
    },
    {
      icon: Shield,
      title: "Политика Конфиденциальности",
      description: "Политика, соответствующая GDPR, объясняющая сбор, использование и защиту данных.",
      features: ["Сбор данных", "Цели использования", "Права пользователей", "Безопасность данных"]
    },
    {
      icon: Cookie,
      title: "Политика Cookies",
      description: "Подробное объяснение использования cookies и технологий отслеживания на сайте.",
      features: ["Типы cookies", "Цели использования", "Управление cookies", "Cookies третьих сторон"]
    },
    {
      icon: Users,
      title: "Партнёрское Раскрытие",
      description: "Прозрачное раскрытие партнёрских отношений в соответствии с рекомендациями FTC.",
      features: ["Структура комиссий", "Отношения с рекламодателями", "Размещение продуктов", "Политика отзывов"]
    },
    {
      icon: AlertTriangle,
      title: "Отказ от Ответственности",
      description: "Юридическая защита контента и рекомендаций вашего сайта.",
      features: ["Точность контента", "Профессиональные советы", "Внешние ссылки", "Изменения контента"]
    },
    {
      icon: BookOpen,
      title: "Руководство по Внедрению",
      description: "Пошаговые инструкции по установке и настройке всех документов.",
      features: ["Инструкции по установке", "Советы по настройке", "Лучшие практики", "Советы по обслуживанию"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Что Включено в Пакет
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Получите все необходимые юридические документы для вашего сайта в одном полном пакете
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <doc.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {doc.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {doc.description}
              </p>
              <ul className="space-y-2">
                {doc.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesRU;
