import { Truck, ThermometerSnowflake, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Truck,
    title: "Gratis Verzending",
    description: "Vanaf €50",
  },
  {
    icon: ThermometerSnowflake,
    title: "Gekoeld Bezorgd",
    description: "Altijd vers",
  },
  {
    icon: ShieldCheck,
    title: "100% Kwaliteit",
    description: "Niet goed, geld terug",
  },
];

const TrustSection = () => {
  return (
    <section className="py-6 bg-secondary/50 border-y border-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{point.title}</h3>
                <p className="text-xs text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
