import { Zap, Shield, BarChart3, Users, Clock, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Błyskawiczne generowanie",
      description: "Stwórz kompletny test w kilka sekund dzięki AI"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bezpieczne dane",
      description: "Wszystkie dane są szyfrowane i chronione"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Szczegółowe statystyki",
      description: "Analizuj wyniki i postępy uczniów"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dla zespołów",
      description: "Współpracuj z innymi nauczycielami"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Oszczędność czasu",
      description: "Automatyzuj powtarzalne zadania"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Dostęp online",
      description: "Korzystaj z dowolnego urządzenia"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dlaczego TestPortal AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wszystko czego potrzebujesz do tworzenia i zarządzania testami w jednym miejscu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
