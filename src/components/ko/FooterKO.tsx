import { FileText, Mail, Shield } from "lucide-react";

const FooterKO = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center"><FileText className="w-5 h-5 text-white" /></div><span className="text-xl font-bold">법적 문서</span></div>
            <p className="text-slate-400">웹사이트를 위한 전문 법적 문서. GDPR, CCPA 및 FTC 준수.</p>
          </div>
          <div><h4 className="font-semibold mb-4">빠른 링크</h4><ul className="space-y-2 text-slate-400"><li><a href="#pricing" className="hover:text-white transition-colors">가격</a></li><li><a href="#features" className="hover:text-white transition-colors">기능</a></li><li><a href="#faq" className="hover:text-white transition-colors">질문</a></li></ul></div>
          <div><h4 className="font-semibold mb-4">연락처</h4><div className="space-y-2 text-slate-400"><div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>info@iaee.eu</span></div><div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Stripe를 통한 안전한 결제</span></div></div></div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500"><p>© {new Date().getFullYear()} 웹사이트 법적 문서. 모든 권리 보유.</p></div>
      </div>
    </footer>
  );
};

export default FooterKO;
