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
    <section className="py-5 bg-secondary/50 border-y border-border">
      <div className="container">
        <div className="flex items-center justify-center">
          {trustPoints.map((point, index) => (
            <div key={point.title} className="flex items-center">
              <div
                className="flex items-center gap-3 px-6 md:px-10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{point.title}</h3>
                  <p className="text-xs text-muted-foreground">{point.description}</p>
                </div>
              </div>
              {index < trustPoints.length - 1 && (
                <div className="h-10 w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
