import { FileText, Mail, Shield } from "lucide-react";

const FooterJA = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">法的文書</span>
            </div>
            <p className="text-slate-400">
              ウェブサイト向けプロフェッショナル法的文書。GDPR、CCPA、FTC準拠。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">価格</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">機能</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">質問</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@iaee.eu</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Stripeで安全な支払い</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} ウェブサイト用法的文書。全著作権所有。</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterJA;
