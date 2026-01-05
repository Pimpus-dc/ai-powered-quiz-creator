import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16 glow-effect">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na <span className="primary-gradient bg-clip-text text-transparent">inteligentne testy</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Dołącz do tysięcy nauczycieli i trenerów, którzy już korzystają z TestPortal AI
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl" className="group">
                Zacznij teraz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
