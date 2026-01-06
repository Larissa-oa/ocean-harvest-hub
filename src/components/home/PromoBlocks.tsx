import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import lobsterImage from "@/assets/lobster-hero.png";
import oysterImage from "@/assets/oyster-collection.jpg";

const PromoBlocks = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo Block 1 - Seasonal Offer */}
          <div className="relative overflow-hidden rounded-2xl bg-secondary group">
            <div className="absolute top-4 left-4 z-10">
              <div className="badge-playful flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Beperkte Voorraad
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-sm font-medium text-muted-foreground">Tijd voor kreeft!</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Speciale aanbiedingen op{" "}
                  <span className="text-gradient-ocean">kreeft & schelpdieren</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Van sappige kreeft tot dagverse schelpdieren, geniet van kwaliteitszeevruchten.
                </p>
                <Button variant="hero" size="default" asChild>
                  <Link to="/collections/shellfish">
                    Shop Nu
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="w-48 h-48 md:w-56 md:h-56 relative group-hover:scale-105 transition-transform duration-500">
                <img
                  src={lobsterImage}
                  alt="Kreeft"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Promo Block 2 - Deal of the Week */}
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-card group">
            <div className="absolute top-4 right-4 z-10 flex flex-col items-end">
              <span className="text-sm font-medium text-muted-foreground">Deal of the Week</span>
              <span className="text-5xl md:text-6xl font-bold text-accent">15%</span>
              <span className="text-sm font-medium text-muted-foreground">korting</span>
            </div>
            <div className="flex flex-col items-start p-6 md:p-8 h-full">
              <div className="flex-1 space-y-4 max-w-[60%]">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Oesters & Coquilles
                </h3>
                <Button variant="default" size="default" asChild>
                  <Link to="/collections/oysters">
                    Shop Now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-full pointer-events-none">
                <img
                  src={oysterImage}
                  alt="Oesters"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBlocks;
