import { useNavigate } from "react-router-dom";
import { FlagGB, FlagDE } from "@/components/af/AfFlags";

interface NonprofitLanguageSwitcherProps {
  activeLang: "en" | "de";
}

const languages = [
  { code: "en", label: "English", path: "/nonprofit-charity-legal-documents-donation-terms-privacy-policy", Flag: FlagGB },
  { code: "de", label: "Deutsch", path: "/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz", Flag: FlagDE },
];

const NonprofitLanguageSwitcher = ({ activeLang }: NonprofitLanguageSwitcherProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-3 py-3 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
      <span className="text-muted-foreground text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      {languages.map(({ code, label, path, Flag }) => {
        const isActive = activeLang === code;
        return (
          <button
            key={code}
            onClick={() => navigate(path)}
            className={`
              relative w-8 h-6 rounded-sm overflow-hidden border transition-all duration-200
              hover:scale-110 hover:shadow-md p-0.5 cursor-pointer
              ${isActive
                ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50"
                : "border-border opacity-85 hover:opacity-100 hover:border-muted-foreground"
              }
            `}
            title={label}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
};

export default NonprofitLanguageSwitcher;
