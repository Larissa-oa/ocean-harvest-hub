import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lobster-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh seafood"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm">
            <span className="animate-pulse">🦞</span>
            Vers van de haven
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Verse vis &
            <br />
            <span className="text-gradient-ocean">zeevruchten</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md">
            Ontdek onze selectie van de beste verse vis en schelpdieren, 
            rechtstreeks van Nederlandse vissers naar uw deur.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/collections">
                Bekijk Collecties
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/collections/deals">
                Bekijk Aanbiedingen
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
