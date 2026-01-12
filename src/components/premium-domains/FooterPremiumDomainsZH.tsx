import { Crown, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FooterPremiumDomainsZH = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-semibold text-white">优质域名</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              您值得信赖的高域名权重和优质外链过期域名合作伙伴。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("domains")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  域名列表
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("moz-explanation")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  关于 MOZ DA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  常见问题
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* All Pages - Domain Names Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">所有页面</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  优质域名
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  法律文件
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@iaee.eu" 
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                support@iaee.eu
              </a>
              <p className="text-slate-500 text-xs">
                我们将在24小时内回复您的消息。
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <div className="flex items-center gap-3">
            <Crown className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-white">优质域名</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} IAEE. 版权所有。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsZH;
