import { Truck, ThermometerSnowflake, ShieldCheck, Fish } from "lucide-react";
import logoSz from "@/assets/logosz.png";

const trustPoints = [
  {
    icon: Truck,
    title: "Gratis Verzending",
    description: "Vanaf €200",
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
    <section className="py-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 60px',
          backgroundRepeat: 'repeat-x',
        }} />
      </div>
      
      <div className="container relative">
        <div className="flex items-center justify-between">
          {/* Logo accent on left - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3 pr-6 border-r border-primary-foreground/20">
            <img src={logoSz} alt="Schmidt Zeevis" className="h-10 w-auto brightness-0 invert opacity-90" />
          </div>
          
          {/* Trust points */}
          <div className="flex items-center justify-start sm:justify-center lg:justify-end flex-1 overflow-x-auto scrollbar-hide">
            {trustPoints.map((point, index) => (
              <div key={point.title} className="flex items-center flex-shrink-0">
                <div
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 lg:px-8 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                    <point.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-primary-foreground whitespace-nowrap">{point.title}</h3>
                    <p className="text-xs text-primary-foreground/70 whitespace-nowrap">{point.description}</p>
                  </div>
                </div>
                {index < trustPoints.length - 1 && (
                  <div className="h-8 w-px bg-primary-foreground/20 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
          
          {/* Swimming fish accent on right - hidden on mobile */}
          <div className="hidden lg:flex items-center pl-6 border-l border-primary-foreground/20">
            <Fish className="h-6 w-6 text-primary-foreground/60 animate-swim" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
