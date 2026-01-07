import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lobsterImage from "@/assets/lobster-hero.png";
import oysterImage from "@/assets/oyster-collection.jpg";

const PromoBlocks = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-4">
          {/* Promo Block 1 - Bigger (3 cols) */}
          <Link
            to="/collections/shellfish"
            className="md:col-span-3 relative overflow-hidden rounded-2xl h-64 md:h-72 group"
          >
            <img
              src={lobsterImage}
              alt="Kreeft & Schelpdieren"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/40" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="inline-flex self-start items-center px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold text-sm mb-3">
                Populair
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Kreeft & Schelpdieren
              </h3>
              <Button variant="secondary" size="default" className="self-start group-hover:bg-white transition-colors">
                Bekijk Collectie
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </Link>

          {/* Promo Block 2 - Thinner (2 cols) */}
          <Link
            to="/collections/oysters"
            className="md:col-span-2 relative overflow-hidden rounded-2xl h-64 md:h-72 group"
          >
            <img
              src={oysterImage}
              alt="Oesters"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/40" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="inline-flex self-start items-center px-4 py-2 bg-coral text-white rounded-full font-bold text-sm mb-3">
                In Seizoen
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Verse Oesters
              </h3>
              <Button variant="secondary" size="default" className="self-start group-hover:bg-white transition-colors">
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