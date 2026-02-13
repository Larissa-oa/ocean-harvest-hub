import { Link } from "react-router-dom";
import { collections } from "@/data/collections";
import { FishIcon } from "@/components/ui/FishIcon";
import { Button } from "@/components/ui/button";
import alleImage from "@/assets/collection/alle.png";
import versevisImage from "@/assets/new-category-image/verse-vis-Photoroom.png";
import schalpImage from "@/assets/new-category-image/schaal-Photoroom.png";
import kantAnKlaarImage from "@/assets/new-category-image/kant-en-klaar-Photoroom.png";
import sushiensashimiImage from "@/assets/new-category-image/sushi-Photoroom.png";
import olieenazijnImage from "@/assets/collection/olieenazijn.png";
import specialsImage from "@/assets/new-category-image/Special-Photoroom.png";
import deliImage from "@/assets/new-category-image/delicatessen-Photoroom.png";
import sauzenImage from "@/assets/collection/sauzen.png";
import schotelImage from "@/assets/new-category-image/schotels-Photoroom.png";
import diepvriesImage from "@/assets/new-category-image/diepvries-Photoroom.png";
import conservenImage from "@/assets/collection/conserven.png";
import kruidenImage from "@/assets/collection/kruiden.png";
import merchandiseImage from "@/assets/collection/merchandise.png";
import diversenImage from "@/assets/collection/diversen.png";
import versevangstImage from "@/assets/collection/versevangst.png";

const collectionImages: Record<string, string> = {
  "alle-producten": versevisImage,
  "verse-vis": alleImage,
  "schaal-en-schelpdieren": schalpImage,
  "klaar-en-klaar": kantAnKlaarImage,
  "sushi-en-sashimi": sushiensashimiImage,
  "olie-en-azijn": olieenazijnImage,
  "specials": specialsImage,
  "delicatessen": deliImage,
  "sauzen": sauzenImage,
  "schotels": schotelImage,
  "diepvries": diepvriesImage,
  "conserven": conservenImage,
  "kruiden-en-specerijen": kruidenImage,
  "merchandise": merchandiseImage,
  "diversen": diversenImage,
  "vangst-van-de-maand": versevangstImage,
};

const CollectionsGrid = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
            Onze Categorieën
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ontdek ons uitgebreide assortiment verse vis en zeevruchten
          </p>
        </div>

        {/* Collections Grid - 4 columns, bigger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => {
            return (
              <Link
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="collection-card-border relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {/* Card content */}
                  <div className="p-4 md:p-6">
                    {/* Product image with circular accent - fixed height so all cards same size */}
                    <div className="relative h-44 md:h-[235px] flex items-center justify-center mb-2 md:mb-3">
                      {/* Circular accent behind product - solid primary blue */}
                      <div 
                        className="absolute rounded-full bg-primary/70 transition-all duration-300 w-[112px] h-[112px] md:w-[220px] md:h-[220px] group-hover:w-[124px] group-hover:h-[124px] md:group-hover:w-[232px] md:group-hover:h-[232px]"
                      />
                      
                      {/* Product image - fills container; larger scale for some; alle-producten slightly smaller, shifted right */}
                      {(() => {
                        const biggerImageSlugs = ["schotels", "specials", "diepvries", "diversen", "sushi-en-sashimi", "sauzen", "olie-en-azijn"];
                        const isBiggerImage = biggerImageSlugs.includes(collection.slug);
                        const isAlleProducten = collection.slug === "alle-producten";
                        const scaleClass = isAlleProducten
                          ? "scale-100 group-hover:scale-105"
                          : isBiggerImage
                            ? "scale-[1.4] group-hover:scale-[1.5]"
                            : "scale-110 group-hover:scale-[1.2]";
                        const translateClass = isAlleProducten ? "translate-x-6 md:translate-x-8" : "";
                        return (
                          <img
                            src={collectionImages[collection.slug] || alleImage}
                            alt={collection.name}
                            className={`relative z-10 h-full max-h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 ${scaleClass} ${translateClass}`}
                          />
                        );
                      })()}
                    </div>

                    {/* Collection info */}
                    <div className="text-center">
                      <h3 className="text-base md:text-lg lg:text-xl mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors font-bold">
                        {collection.name}
                      </h3>
                      
                      {/* CTA Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all text-xs md:text-sm border-primary/50 text-primary"
                      >
                        Bekijk collectie
                        <FishIcon className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      </Button>
                    </div>

                    {/* Hover - Product count */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-2.5 py-1 rounded-full bg-primary/70 text-primary-foreground text-xs font-medium">
                        {collection.productCount} producten
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;