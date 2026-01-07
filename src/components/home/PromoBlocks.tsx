import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import dealBanner1 from "@/assets/banner/dealbanner1.png";
import dealBanner2 from "@/assets/banner/dealbanner2.png";
import dealBanner3 from "@/assets/banner/dealbanner3.png";

const PromoBlocks = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="flex items-center gap-2 mb-5">
          <Flame className="h-6 w-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Hete Deals
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-2">
          {/* Left - Tall container */}
          <Link
            to="/collections/schaal-en-schelpdieren"
            className="relative overflow-hidden rounded-2xl md:rounded-r-none h-72 md:h-[340px] group"
          >
            <img
              src={dealBanner1}
              alt="Kreeft & Schelpdieren"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            
            {/* Discount tag */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-lg">
              -20% Korting
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-5">
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Kreeft & Schelpdieren
                </h3>
                <p className="text-sm text-white/90 mb-3">
                  Ontdek onze premium selectie van verse kreeft, krab en schelpdieren
                </p>
                <Button variant="secondary" size="sm" className="self-start group-hover:bg-white transition-colors">
                  Bekijk Collectie
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </Link>

          {/* Right - Two stacked containers */}
          <div className="flex flex-col gap-4 md:gap-2">
            <Link
              to="/collections/verse-vis"
              className="relative overflow-hidden rounded-2xl md:rounded-l-none h-36 md:h-[166px] group"
            >
              <img
                src={dealBanner2}
                alt="Verse Vis"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
              
              {/* Tag */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-lg">
                Nieuw Binnen
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Verse Vis van de Dag
                </h3>
                <p className="text-xs text-white/90 mb-2 max-w-xs">
                  Dagelijks verse vis, direct van de markt
                </p>
                <Button variant="secondary" size="sm" className="self-start text-xs h-8 group-hover:bg-white transition-colors">
                  Shop Nu
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </Link>

            <Link
              to="/collections/sushi-en-sashimi"
              className="relative overflow-hidden rounded-2xl md:rounded-l-none h-36 md:h-[166px] group"
            >
              <img
                src={dealBanner3}
                alt="Sushi & Sashimi"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
              
              {/* Tag */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-semibold text-xs shadow-lg">
                Populair
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Sushi & Sashimi Kwaliteit
                </h3>
                <p className="text-xs text-white/90 mb-2 max-w-xs">
                  Premium vis voor de beste sushi thuis
                </p>
                <Button variant="secondary" size="sm" className="self-start text-xs h-8 group-hover:bg-white transition-colors">
                  Ontdek Meer
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBlocks;