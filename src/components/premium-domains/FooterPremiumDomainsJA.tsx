import { ShoppingCart, Mail, Shield } from "lucide-react";

const FooterPremiumDomainsJA = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-white">プレミアムドメイン</span>
            </div>
            <p className="text-slate-400 text-sm">
              高権威と実証済みのSEO価値を持つプレミアム期限切れドメインの専門家。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#domains" className="hover:text-amber-400 transition-colors">利用可能なドメイン</a></li>
              <li><a href="#advantages" className="hover:text-amber-400 transition-colors">メリット</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">よくある質問</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">お問い合わせ</a></li>
              <li><a href="/btw-calculator-wereldwijd" className="hover:text-amber-400 transition-colors">消費税計算機</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@expireddomainnames.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Stripe経由の安全な支払い</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Premium Domains. 全著作権所有。</p>
          <p className="mt-2">
            高権威の期限切れドメインへの投資。実証済みのSEO価値。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsJA;
