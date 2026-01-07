import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fish } from "lucide-react";
import dealBanner1 from "@/assets/banner/dealbanner1.png";
import dealBanner4 from "@/assets/banner/dealbanner4.png";

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
            to="/collections/schaal-en-schelpdieren"
            className="md:col-span-3 relative overflow-hidden rounded-2xl h-56 md:h-64 group"
          >
            <img
              src={dealBanner4}
              alt="Kreeft & Schelpdieren"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            
            {/* Circular graphic tag - static black */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-foreground flex flex-col items-center justify-center shadow-lg">
              <span className="text-background font-bold text-lg leading-none">-20%</span>
              <span className="text-background text-[10px] font-medium">Korting</span>
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

          {/* Promo Block 2 - Thinner (2 cols) */}
          <Link
            to="/collections/verse-vis"
            className="md:col-span-2 relative overflow-hidden rounded-2xl h-56 md:h-64 group"
          >
            <img
              src={dealBanner1}
              alt="Verse Vis"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            
            {/* Circular graphic tag - static black */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-foreground flex flex-col items-center justify-center shadow-lg">
              <Fish className="h-5 w-5 text-background" />
              <span className="text-background text-[10px] font-bold mt-0.5">Seizoen</span>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-5">
              <div className="max-w-xs">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Verse Vis
                </h3>
                <p className="text-sm text-white/90 mb-3">
                  Dagelijks verse vis van de markt, direct bij u thuis bezorgd
                </p>
                <Button variant="secondary" size="sm" className="self-start group-hover:bg-white transition-colors">
                  Shop Nu
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBlocks;
