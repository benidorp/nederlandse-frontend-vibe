import { FileText, Mail, Shield } from "lucide-react";

const FooterZH = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">法律文件</span>
            </div>
            <p className="text-slate-400">
              专业的网站法律文件。符合GDPR、CCPA和FTC。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">价格</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">功能</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">问题</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@iaee.eu</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>通过Stripe安全支付</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} 网站法律文件。保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterZH;
