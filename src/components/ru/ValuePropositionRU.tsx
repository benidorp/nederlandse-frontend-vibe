import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionRU = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Юридическая Защита",
      description: "Полные документы, защищающие ваш бизнес от юридических обязательств и обеспечивающие соответствие."
    },
    {
      icon: FileText,
      title: "Профессиональные Шаблоны",
      description: "Юридические документы, специально адаптированные для сайтов и цифрового бизнеса."
    },
    {
      icon: Clock,
      title: "Мгновенный Доступ",
      description: "Скачайте сразу после покупки. Без ожидания, без задержек — внедрите сегодня."
    },
    {
      icon: Globe,
      title: "Международное Соответствие",
      description: "Соответствие GDPR, CCPA и FTC. Подходит для международных сайтов."
    },
    {
      icon: CheckCircle,
      title: "Простое Внедрение",
      description: "Чёткие инструкции и настраиваемые шаблоны упрощают установку."
    },
    {
      icon: Award,
      title: "Проверенное Качество",
      description: "Используется сотнями владельцев сайтов по всему миру с отличными отзывами."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Почему Выбирают Наш Юридический Пакет?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Полная юридическая защита для вашего сайта с профессиональными документами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionRU;
