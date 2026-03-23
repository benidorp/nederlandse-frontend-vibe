import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionBG = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Правна Защита",
      description: "Пълни документи, които защитават вашия бизнес от правни задължения и гарантират съответствие."
    },
    {
      icon: FileText,
      title: "Професионални Шаблони",
      description: "Правни документи, специално адаптирани за уебсайтове и дигитални бизнеси."
    },
    {
      icon: Clock,
      title: "Моментален Достъп",
      description: "Изтеглете веднага след покупката. Без чакане, без забавяне — внедрете днес."
    },
    {
      icon: Globe,
      title: "Международно Съответствие",
      description: "GDPR, CCPA и FTC съвместим. Подходящ за международни уебсайтове."
    },
    {
      icon: CheckCircle,
      title: "Лесно Внедряване",
      description: "Ясни инструкции и персонализируеми шаблони улесняват инсталацията."
    },
    {
      icon: Award,
      title: "Доверено Качество",
      description: "Използвано от стотици собственици на уебсайтове по целия свят с отлични отзиви."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Защо да Изберете Нашия Правен Пакет?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Пълна правна защита за вашия уебсайт с професионални документи
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

export default ValuePropositionBG;
