import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeaderBG = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Правни Документи</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Цени</a>
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Характеристики</a>
            <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">Въпроси</a>
          </nav>

          <Button 
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            Купете Сега
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBG;
