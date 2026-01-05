import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Połącz konto",
      description: "Dodaj swój klucz API ChatGPT do swojego profilu"
    },
    {
      number: "02",
      title: "Opisz temat",
      description: "Wprowadź temat i parametry testu, który chcesz stworzyć"
    },
    {
      number: "03",
      title: "Wygeneruj test",
      description: "AI automatycznie utworzy pytania dopasowane do Twoich wymagań"
    },
    {
      number: "04",
      title: "Udostępnij",
      description: "Wyślij link do testu swoim uczniom lub pracownikom"
    }
  ];

  return (
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Jak to działa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cztery proste kroki do stworzenia profesjonalnego testu
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl primary-gradient flex items-center justify-center mb-6 shadow-lg">
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full -translate-x-1/2 text-primary/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
