import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lobster-hero.png";
import schmidtFishIcon from "@/assets/schmidt-fish.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[280px] md:min-h-[360px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh seafood"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'left center' }}
        />
        <div className="absolute inset-0 bg-background/25" />
      </div>

      {/* Content */}
      <div className="container relative z-10 -my-4 sm:my-0">
        <div className="max-w-[70%] sm:max-w-lg space-y-3 sm:space-y-5 animate-fade-in text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Verse vis &{" "}
            <span className="text-primary">zeevruchten</span>
          </h1>
          
          <p className="text-sm sm:text-base text-muted-foreground sm:max-w-sm">
            Verse vis en zeevruchten direct van Nederlandse vissers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="default" size="sm" className="w-auto text-xs sm:text-sm h-8 px-2 sm:h-10 sm:px-4 max-w-fit" asChild>
              <Link to="/collections">
                Bekijk alle Producten
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="w-auto text-xs sm:text-sm h-8 px-2 sm:h-10 sm:px-4 max-w-fit" asChild>
              <Link to="/collections/catch-of-the-month" className="flex items-center gap-1 sm:gap-2">
                Vangst van de Maand
                <img 
                  src={schmidtFishIcon} 
                  alt="Schmidt fish" 
                  className="h-5 w-4 sm:h-5 sm:w-5 object-contain"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(2000%) hue-rotate(195deg) brightness(0.45) contrast(1.3)',
                    transform: 'scaleX(-1)',
                    opacity: 0.8
                  }}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
