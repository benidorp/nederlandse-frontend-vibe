import { FileText, Mail, Shield } from "lucide-react";

const FooterRU = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Юридические Документы</span>
            </div>
            <p className="text-slate-400">
              Профессиональные юридические документы для сайтов. GDPR, CCPA и FTC соответствие.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Быстрые Ссылки</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Функции</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы</a></li>
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
                <span>Безопасная Оплата через Stripe</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Юридические Документы для Сайтов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterRU;
