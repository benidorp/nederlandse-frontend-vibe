import { FileText, Mail, Shield } from "lucide-react";

const FooterBG = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Правни Документи</span>
            </div>
            <p className="text-slate-400">
              Професионални правни документи за уебсайтове. GDPR, CCPA и FTC съвместими.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Бързи Връзки</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Цени</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Характеристики</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Въпроси</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакт</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@iaee.eu</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Сигурно Плащане чрез Stripe</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Правни Документи за Уебсайтове. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBG;
