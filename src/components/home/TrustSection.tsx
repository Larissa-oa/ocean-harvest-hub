import groeneVisImage from "@/assets/schmidt-fish.png";

const trustPoints = [
  {
    title: "Gratis Verzending",
    description: "Vanaf €200",
  },
  {
    title: "Gekoeld Bezorgd",
    description: "Altijd vers",
  },
  {
    title: "100% Kwaliteit",
    description: "Niet goed, geld terug",
  },
];

const TrustSection = () => {
  return (
    <section className="py-4 bg-primary text-primary-foreground relative overflow-x-clip">
      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 60px',
          backgroundRepeat: 'repeat-x',
        }} />
      </div>
      
      <div className="container relative px-4 sm:px-6">
        <div className="flex items-center justify-center min-w-0">
          {/* Trust points - scroll on mobile, no clipping */}
          <div className="flex items-center justify-center gap-0 overflow-x-auto scrollbar-hide w-full min-w-0 py-2">
            {trustPoints.map((point, index) => (
              <div key={point.title} className="flex items-center flex-shrink-0">
                <div
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 lg:px-8 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img src={groeneVisImage} alt="" className="h-8 w-auto object-contain scale-x-[-1]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-primary-foreground whitespace-nowrap">{point.title}</h3>
                    <p className="text-xs text-primary-foreground/70 whitespace-nowrap">{point.description}</p>
                  </div>
                </div>
                {index < trustPoints.length - 1 && (
                  <div className="h-8 w-px bg-primary-foreground/20 flex-shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
