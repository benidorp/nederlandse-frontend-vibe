import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const HeaderKO = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary">웹사이트 필수 법적 문서</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">홈</button>
          <button onClick={() => scrollToSection("about-me")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">소개</button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">서비스</button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">가격</button>
          <Button onClick={() => scrollToSection("contact")}>문의하기</Button>
        </nav>
      </div>
    </header>;
};
export default HeaderKO;
