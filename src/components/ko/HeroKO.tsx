import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const HeroKO = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-primary text-primary-foreground">
      <div className="container grid lg:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary-foreground/90 uppercase tracking-wide">법적 확실성</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
            제휴 웹사이트를 위한 법적 문서: 이용약관, 개인정보보호정책, 공개 및 쿠키 정책
          </h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            제휴 비즈니스를 보호하고 모든 법적 요구사항 준수를 보장하는 전문 법적 문서.
            저렴한 패키지에는 <strong>이용약관, 개인정보보호정책 및 면책조항</strong> 등
            모든 필수 계약서가 포함되어 있습니다 — 완전한 준수, 신뢰 및 안심을 위해.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("pricing")} className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              패키지 보기 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-slate-950">
              자세한 정보
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50"></div>
          <img src={heroImage} alt="전문 법률 컨설턴트" className="relative rounded-lg shadow-2xl w-full object-cover ring-2 ring-primary/10" />
        </div>
      </div>
    </section>
  );
};

export default HeroKO;
