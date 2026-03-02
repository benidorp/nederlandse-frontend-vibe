import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { flagComponents } from "@/components/af/AfFlags";
import { verticalLanguages, type VerticalId } from "@/data/verticalLanguageRegistry";
import { supabase } from "@/integrations/supabase/client";

interface VerticalLanguageSwitcherProps {
  vertical: VerticalId;
  currentLang: string;
  /** Use absolute URLs (anchor tags) instead of React Router navigate */
  useAbsoluteUrls?: boolean;
  /** Dark theme variant (for premium-domains) */
  dark?: boolean;
}

interface LangEntry {
  code: string;
  name: string;
  path: string;
}

const VerticalLanguageSwitcher = ({
  vertical,
  currentLang,
  useAbsoluteUrls = false,
  dark = false,
}: VerticalLanguageSwitcherProps) => {
  const navigate = useNavigate();
  const [dynamicLangs, setDynamicLangs] = useState<LangEntry[]>([]);

  // Fetch dynamic language routes from DB
  useEffect(() => {
    const fetchDynamic = async () => {
      try {
        const { data, error } = await supabase
          .from("vertical_language_routes" as any)
          .select("lang_code, lang_name, path")
          .eq("vertical", vertical);
        if (error) throw error;
        if (data) {
          setDynamicLangs(
            (data as any[]).map((r: any) => ({
              code: r.lang_code,
              name: r.lang_name,
              path: r.path,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch dynamic languages:", err);
      }
    };
    fetchDynamic();
  }, [vertical]);

  // Merge static + dynamic (dynamic overrides static for same code)
  const staticLangs = verticalLanguages[vertical] || [];
  const mergedMap = new Map<string, LangEntry>();
  staticLangs.forEach((l) => mergedMap.set(l.code, l));
  dynamicLangs.forEach((l) => mergedMap.set(l.code, l));
  const languages = Array.from(mergedMap.values());

  if (languages.length <= 1) return null;

  const bgClass = dark
    ? "bg-gradient-to-b from-black via-slate-900 to-slate-800 border-b border-slate-700/50"
    : "bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50";

  const labelClass = dark
    ? "text-slate-400 text-xs font-medium mr-1 hidden sm:inline"
    : "text-muted-foreground text-xs font-medium mr-1 hidden sm:inline";

  const activeClass = dark
    ? "border-amber-400 shadow-md shadow-amber-500/30 scale-105 ring-1 ring-amber-400/50"
    : "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50";

  const inactiveClass = dark
    ? "border-slate-600 opacity-85 hover:opacity-100 hover:border-slate-400"
    : "border-border opacity-85 hover:opacity-100 hover:border-muted-foreground";

  return (
    <div className={`flex items-center justify-center gap-2 py-3 ${bgClass}`}>
      <span className={labelClass}>Select language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
        {languages.map(({ code, name, path }) => {
          const flagCode = code === "zh" ? "zh-CN" : code;
          const FlagComponent = flagComponents[flagCode] || flagComponents[code];
          const isActive = currentLang === code;

          const classes = `
            relative w-7 h-5 sm:w-8 sm:h-6 rounded-sm overflow-hidden border transition-all duration-200
            hover:scale-110 hover:shadow-md p-0.5 cursor-pointer
            ${isActive ? activeClass : inactiveClass}
            ${dark ? "bg-slate-800" : ""}
          `;

          if (useAbsoluteUrls) {
            return (
              <a key={code} href={path} className={classes} title={name}>
                {FlagComponent && <FlagComponent />}
              </a>
            );
          }

          return (
            <button
              key={code}
              onClick={() => navigate(path)}
              className={classes}
              title={name}
            >
              {FlagComponent && <FlagComponent />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalLanguageSwitcher;
