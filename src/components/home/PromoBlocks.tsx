import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import lobsterImage from "@/assets/lobster-hero.png";
import oysterImage from "@/assets/oyster-collection.jpg";

const PromoBlocks = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
          Hete Deals
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {/* Promo Block 1 - Bigger (3 cols) */}
          <Link
            to="/collections/shellfish"
            className="md:col-span-3 relative overflow-hidden rounded-2xl h-56 md:h-64 group"
          >
            <img
              src={lobsterImage}
              alt="Kreeft & Schelpdieren"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/25" />
            
            {/* Circular Sticker Tag */}
            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex flex-col items-center justify-center rotate-12 shadow-lg transform group-hover:rotate-6 transition-transform">
              <Flame className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
              <span className="text-xs md:text-sm font-black text-accent-foreground leading-tight">HOT</span>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-5">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Kreeft & Schelpdieren
              </h3>
              <Button variant="secondary" size="sm" className="self-start group-hover:bg-white transition-colors">
                Bekijk Collectie
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </Link>

          {/* Promo Block 2 - Thinner (2 cols) */}
          <Link
            to="/collections/oysters"
            className="md:col-span-2 relative overflow-hidden rounded-2xl h-56 md:h-64 group"
          >
            <img
              src={oysterImage}
              alt="Oesters"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/25" />
            
            {/* Circular Sticker Tag */}
            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-success flex flex-col items-center justify-center -rotate-6 shadow-lg transform group-hover:rotate-0 transition-transform">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-success-foreground" />
              <span className="text-[10px] md:text-xs font-black text-success-foreground leading-tight text-center">SEIZOEN</span>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-5">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Verse Oesters
              </h3>
              <Button variant="secondary" size="sm" className="self-start group-hover:bg-white transition-colors">
                Shop Nu
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBlocks;
