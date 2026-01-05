import { Button } from "@/components/ui/button";
import { Sparkles, Brain, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Generuj testy z pomocą AI</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Twórz inteligentne
            <span className="primary-gradient bg-clip-text text-transparent"> testy online</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Połącz swoje konto ChatGPT i automatycznie generuj profesjonalne testy z pytaniami zamkniętymi i otwartymi. Szybko, łatwo i efektywnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Rozpocznij za darmo
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="heroOutline" size="xl">
                Zaloguj się
              </Button>
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Integracja z AI"
              description="Połącz ChatGPT i generuj pytania automatycznie"
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Różne typy pytań"
              description="Pytania otwarte, zamknięte, wielokrotnego wyboru"
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Automatyczna ocena"
              description="System automatycznie sprawdza odpowiedzi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card rounded-2xl p-6 text-left hover:scale-105 transition-transform duration-300">
    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center text-primary-foreground mb-4">
      {icon}
    </div>
    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default Hero;
