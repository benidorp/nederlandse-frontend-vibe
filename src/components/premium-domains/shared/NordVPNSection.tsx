import { Shield } from "lucide-react";

type Lang = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk';

const NORDVPN_LINK = "https://www.tkqlhce.com/click-100643838-14352852";

const t: Record<Lang, { title: string; desc: string; cta: string }> = {
  sv: { title: "Skydda Din Integritet med NordVPN", desc: "Säkra din onlineverksamhet med NordVPN. Perfekt för att skydda dina domäntransaktioner och webbhantering.", cta: "Skaffa NordVPN" },
  no: { title: "Beskytt Personvernet Ditt med NordVPN", desc: "Sikre din nettvirksomhet med NordVPN. Perfekt for å beskytte dine domenetransaksjoner.", cta: "Skaff NordVPN" },
  da: { title: "Beskyt Dit Privatliv med NordVPN", desc: "Sikr din onlinevirksomhed med NordVPN. Perfekt til at beskytte dine domænetransaktioner.", cta: "Få NordVPN" },
  fi: { title: "Suojaa Yksityisyytesi NordVPN:llä", desc: "Turvaa verkkotoimintasi NordVPN:llä. Täydellinen verkkotunnustapahtumien suojaamiseen.", cta: "Hanki NordVPN" },
  cs: { title: "Chraňte Své Soukromí s NordVPN", desc: "Zabezpečte svou online činnost s NordVPN. Ideální pro ochranu doménových transakcí.", cta: "Získat NordVPN" },
  el: { title: "Προστατέψτε το Απόρρητό Σας με NordVPN", desc: "Ασφαλίστε τη δραστηριότητά σας με NordVPN. Ιδανικό για προστασία συναλλαγών domains.", cta: "Αποκτήστε NordVPN" },
  ru: { title: "Защитите Свою Конфиденциальность с NordVPN", desc: "Обезопасьте свою онлайн-деятельность с NordVPN. Идеально для защиты доменных транзакций.", cta: "Получить NordVPN" },
  ro: { title: "Protejează-ți Confidențialitatea cu NordVPN", desc: "Securizează-ți activitatea online cu NordVPN. Perfect pentru protejarea tranzacțiilor cu domenii.", cta: "Obține NordVPN" },
  bg: { title: "Защитете Поверителността Си с NordVPN", desc: "Осигурете онлайн дейността си с NordVPN. Перфектен за защита на домейн транзакции.", cta: "Вземете NordVPN" },
  uk: { title: "Захистіть Свою Конфіденційність з NordVPN", desc: "Убезпечте свою онлайн-діяльність з NordVPN. Ідеально для захисту доменних транзакцій.", cta: "Отримати NordVPN" }
};

const NordVPNSection = ({ lang }: { lang: Lang }) => {
  const c = t[lang];
  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-slate-800/40 border border-blue-500/30 rounded-2xl p-8 text-center">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">{c.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{c.desc}</p>
          <a href={NORDVPN_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg shadow-lg shadow-blue-500/25">
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default NordVPNSection;
