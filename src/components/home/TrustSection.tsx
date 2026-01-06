import { Truck, Award, Leaf, Clock } from "lucide-react";

const trustPoints = [
  {
    icon: Truck,
    title: "Snelle Levering",
    description: "Binnen 24 uur bezorgd",
  },
  {
    icon: Award,
    title: "Premium Kwaliteit",
    description: "Dagvers van de haven",
  },
  {
    icon: Leaf,
    title: "Duurzaam Gevangen",
    description: "MSC gecertificeerd",
  },
  {
    icon: Clock,
    title: "30+ Jaar Ervaring",
    description: "Betrouwbare service",
  },
];

const TrustSection = () => {
  return (
    <section className="py-8 md:py-12 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <point.icon className="h-6 w-6 text-primary" />
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
