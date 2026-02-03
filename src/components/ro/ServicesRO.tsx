import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesRO = () => {
  const documents = [
    {
      icon: FileText,
      title: "Termeni și Condiții",
      description: "Termeni cuprinzători de utilizare care acoperă utilizarea site-ului, drepturile utilizatorilor, obligațiile și cadrul legal.",
      features: ["Reguli utilizare site", "Drepturi proprietate intelectuală", "Limitare răspundere", "Condiții reziliere"]
    },
    {
      icon: Shield,
      title: "Politica de Confidențialitate",
      description: "Politică conformă GDPR care explică colectarea, utilizarea și protecția datelor.",
      features: ["Colectare date", "Scopuri utilizare", "Drepturi utilizatori", "Securitate date"]
    },
    {
      icon: Cookie,
      title: "Politica Cookies",
      description: "Explicație detaliată a utilizării cookies și tehnologiilor de urmărire pe site.",
      features: ["Tipuri cookies", "Scopuri utilizare", "Gestionare cookies", "Cookies terți"]
    },
    {
      icon: Users,
      title: "Dezvăluire Afiliere",
      description: "Dezvăluire transparentă a relațiilor de afiliere conform liniilor directoare FTC.",
      features: ["Structură comisioane", "Relații advertiser", "Plasare produse", "Politică recenzii"]
    },
    {
      icon: AlertTriangle,
      title: "Declinare Responsabilitate",
      description: "Protecție legală pentru conținutul și recomandările site-ului dvs.",
      features: ["Acuratețe conținut", "Sfaturi profesionale", "Link-uri externe", "Modificări conținut"]
    },
    {
      icon: BookOpen,
      title: "Ghid Implementare",
      description: "Instrucțiuni pas cu pas pentru instalarea și personalizarea tuturor documentelor.",
      features: ["Instrucțiuni instalare", "Sfaturi personalizare", "Bune practici", "Sfaturi întreținere"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ce Este Inclus în Pachet
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Primiți toate documentele legale esențiale pentru site-ul dvs. într-un singur pachet complet
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

export default ServicesRO;
