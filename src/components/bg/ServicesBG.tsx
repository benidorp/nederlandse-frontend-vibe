import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesBG = () => {
  const documents = [
    {
      icon: FileText,
      title: "Общи Условия",
      description: "Изчерпателни условия за ползване, покриващи използването на уебсайта, потребителски права, задължения и правна рамка.",
      features: ["Правила за ползване", "Права на интелектуална собственост", "Ограничение на отговорността", "Условия за прекратяване"]
    },
    {
      icon: Shield,
      title: "Политика за Поверителност",
      description: "GDPR съвместима политика, обясняваща събирането, използването и защитата на данните.",
      features: ["Събиране на данни", "Цели на използване", "Потребителски права", "Сигурност на данните"]
    },
    {
      icon: Cookie,
      title: "Политика за Бисквитки",
      description: "Подробно обяснение на използването на бисквитки и технологии за проследяване на уебсайта.",
      features: ["Видове бисквитки", "Цели на използване", "Управление на бисквитки", "Бисквитки на трети страни"]
    },
    {
      icon: Users,
      title: "Афилиейт Разкриване",
      description: "Прозрачно разкриване на афилиейт отношения съгласно насоките на FTC.",
      features: ["Структура на комисионни", "Отношения с рекламодатели", "Поставяне на продукти", "Политика за отзиви"]
    },
    {
      icon: AlertTriangle,
      title: "Отказ от Отговорност",
      description: "Правна защита за съдържанието и препоръките на вашия уебсайт.",
      features: ["Точност на съдържанието", "Професионални съвети", "Външни връзки", "Промени в съдържанието"]
    },
    {
      icon: BookOpen,
      title: "Ръководство за Внедряване",
      description: "Стъпка по стъпка инструкции за инсталиране и персонализиране на всички документи.",
      features: ["Инструкции за инсталиране", "Съвети за персонализиране", "Добри практики", "Съвети за поддръжка"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Какво е Включено в Пакета
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Получете всички основни правни документи за вашия уебсайт в един пълен пакет
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

export default ServicesBG;
