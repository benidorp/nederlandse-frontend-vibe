import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionRO = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Protecție Legală",
      description: "Documente complete care protejează afacerea dvs. de răspunderi legale și asigură conformitatea."
    },
    {
      icon: FileText,
      title: "Șabloane Profesionale",
      description: "Documente legale adaptate special pentru site-uri web și afaceri digitale."
    },
    {
      icon: Clock,
      title: "Acces Instant",
      description: "Descărcați imediat după achiziție. Fără așteptare, fără întârzieri — implementați astăzi."
    },
    {
      icon: Globe,
      title: "Conformitate Internațională",
      description: "Conform GDPR, CCPA și FTC. Potrivit pentru site-uri internaționale."
    },
    {
      icon: CheckCircle,
      title: "Implementare Ușoară",
      description: "Instrucțiuni clare și șabloane personalizabile fac instalarea simplă."
    },
    {
      icon: Award,
      title: "Calitate de Încredere",
      description: "Utilizat de sute de proprietari de site-uri din întreaga lume cu recenzii excelente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            De Ce Să Alegeți Pachetul Nostru Legal?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Protecție legală completă pentru site-ul dvs. cu documente profesionale
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

export default ValuePropositionRO;
