// Wrapper page that loads VATCalculatorTemplate with the correct language translation
import { useParams } from "react-router-dom";
import VATCalculatorTemplate from "./VATCalculatorTemplate";
import { vatCalcTranslations, vatCalcSlugs } from "@/data/vatCalcTranslations";
import NotFound from "./NotFound";

// Build reverse map: slug -> lang code
const slugToLang: Record<string, string> = {};
Object.entries(vatCalcSlugs).forEach(([lang, slug]) => {
  slugToLang[slug] = lang;
});

interface Props {
  langCode: string;
}

const VATCalculatorLangPage = ({ langCode }: Props) => {
  const t = vatCalcTranslations[langCode];
  if (!t) return <NotFound />;
  return <VATCalculatorTemplate t={t} />;
};

export default VATCalculatorLangPage;
