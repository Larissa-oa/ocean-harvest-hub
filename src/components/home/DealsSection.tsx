import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Percent } from "lucide-react";
import seafoodSpread from "@/assets/seafood-spread.png";
import salmonImage from "@/assets/salmon-collection.jpg";

const DealsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Flame className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hot Deals</h2>
            <p className="text-muted-foreground text-sm">Mis deze aanbiedingen niet!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Deal 1 - Large Feature */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-ocean text-primary-foreground p-6 md:p-8 min-h-[280px] flex flex-col justify-between group">
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium">
                <Percent className="h-4 w-4" />
                Tot 25% korting
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Zeevruchtenpakket
              </h3>
              <p className="text-primary-foreground/80 max-w-xs">
                Samengesteld pakket met garnalen, oesters, mosselen en kreeft. Perfect voor een feestje!
              </p>
            </div>
            <div className="relative z-10">
              <Button variant="ice" size="lg" asChild>
                <Link to="/collections/packages">
                  Bekijk Pakketten
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-3/5 h-full opacity-30 group-hover:opacity-40 transition-opacity">
              <img
                src={seafoodSpread}
                alt="Zeevruchten"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Deal 2 - Compact Feature */}
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-card p-6 md:p-8 min-h-[280px] flex flex-col justify-between group border border-border">
            <div className="absolute top-4 right-4">
              <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold text-lg shadow-soft">
                €19.95
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-sm font-medium text-muted-foreground">Weekaanbieding</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Verse Zalmfilet
              </h3>
              <p className="text-muted-foreground max-w-xs">
                Noorse zalm, perfect voor op de grill. Nu extra voordelig!
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">€19.95</span>
                <span className="text-sm text-muted-foreground line-through">€24.95</span>
                <span className="px-2 py-0.5 bg-success/10 text-success rounded-full text-xs font-medium">-20%</span>
              </div>
            </div>
            <div>
              <Button variant="coral" size="default" asChild>
                <Link to="/products/verse-zalm-filet">
                  Nu Bestellen
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-2/3 opacity-80 group-hover:scale-105 transition-transform duration-500">
              <img
                src={salmonImage}
                alt="Zalm"
                className="w-full h-full object-cover rounded-tl-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
