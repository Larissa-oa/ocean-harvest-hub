import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fish } from "lucide-react";
import heroImage from "@/assets/lobster-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[380px] md:min-h-[420px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh seafood"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-lg space-y-5 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Verse vis &{" "}
            <span className="text-primary">zeevruchten</span>
          </h1>
          
          <p className="text-base text-muted-foreground max-w-md">
            Ontdek onze selectie van de beste verse vis en schelpdieren, 
            rechtstreeks van Nederlandse vissers naar uw deur.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="lg" asChild>
              <Link to="/collections">
                Bekijk Producten
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/collections/catch-of-the-month" className="flex items-center gap-2">
                <Fish className="h-4 w-4" />
                Vangst van de Maand
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
