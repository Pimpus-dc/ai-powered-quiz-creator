import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">TestPortal AI</span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">O nas</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Funkcje</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cennik</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
          </nav>

          <p className="text-muted-foreground text-sm">
            © 2025 TestPortal AI. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
