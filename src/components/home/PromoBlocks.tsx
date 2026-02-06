import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import dealBanner1 from "@/assets/banner/dealbanner6.png";
import dealBanner2 from "@/assets/banner/dealbanner8.png";
import dealBanner3 from "@/assets/banner/dealbanner3.png";
import dealBanner4 from "@/assets/banner/dealbanner4.png";

const PromoBlocks = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-5 pt-4 md:pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Unieke Visbeleving
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-2">
          {/* Left - Tall container */}
          <Link
            to="/collections/schaal-en-schelpdieren"
            className="relative overflow-hidden rounded-2xl md:rounded-r-none h-[216px] md:h-[340px] group"
          >
            <img
              src={dealBanner4}
              alt="Kreeft & Schelpdieren"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            
            <div className="relative h-full flex flex-col justify-end p-5">
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Kreeft & Schelpdieren
                </h3>
                <p className="text-sm text-white/90 mb-3 w-3/4">
                Ontdek onze exclusieve selectie van dagverse kreeft, krab en schelpdieren.
                </p>
                <Button variant="secondary" size="sm" className="self-start group-hover:bg-white transition-colors">
                  Bekijk Collectie
                </Button>
              </div>
            </div>
          </Link>

          {/* Right - Two containers in row on desktop */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full">
            <Link
              to="/collections/verse-vis"
              className="relative overflow-hidden rounded-2xl md:rounded-none h-36 md:h-[340px] group flex-1"
            >
              <img
                src={dealBanner1}
                alt="Verse Vis"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
              
              <div className="relative h-full flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Verse Vis
                </h3>
                <p className="text-sm text-white/90 mb-2 max-w-xs">
                Een zorgvuldig geselecteerde keuze van dagverse vis.
                </p>
                <Button variant="secondary" size="sm" className="self-start text-xs h-8 group-hover:bg-white transition-colors">
                  Ontdek Meer
                </Button>
              </div>
            </Link>

            <Link
              to="/collections/sushi-en-sashimi"
              className="relative overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-2xl h-36 md:h-[340px] group flex-1"
            >
              <img
                src={dealBanner2}
                alt="Sushi & Sashimi"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
              
              <div className="relative h-full flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Sushi & Sashimi Kwaliteit
                </h3>
                <p className="text-sm text-white/90 mb-2 max-w-xs">
                  Premium kwaliteit vis, perfect voor sushi en sashimi thuis.
                </p>
                <Button variant="secondary" size="sm" className="self-start text-xs h-8 group-hover:bg-white transition-colors">
                  Ontdek Meer
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