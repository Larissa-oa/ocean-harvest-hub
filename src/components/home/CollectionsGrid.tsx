import { Link } from "react-router-dom";
import { ArrowRight, Fish, Shell, Anchor, Flame, Package, Tag, Star, Waves } from "lucide-react";
import { collections } from "@/data/collections";

const CollectionsGrid = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Onze Collecties</h2>
            <p className="text-muted-foreground mt-1">Ontdek ons assortiment verse vis en zeevruchten</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="group flex items-center bg-card rounded-xl overflow-hidden border-l-4 border-l-primary border border-border hover:shadow-lg transition-all duration-300 animate-fade-in h-24"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Blob with Icon */}
              <div className="w-28 h-full flex-shrink-0 relative flex items-center justify-center bg-coral/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-24 h-24 fill-coral/20">
                    <path d="M47.5,-57.2C59.2,-46.8,64.8,-30.2,67.4,-13.3C70,3.6,69.6,20.7,62.3,34.7C55,48.7,40.8,59.5,24.8,65.6C8.8,71.7,-9,73.2,-24.8,68.1C-40.6,63,-54.3,51.3,-62.7,36.5C-71.1,21.7,-74.1,3.8,-70.8,-12.6C-67.5,-29,-57.8,-43.9,-44.7,-54C-31.6,-64.1,-15.8,-69.3,0.8,-70.3C17.5,-71.3,35.8,-67.7,47.5,-57.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <CollectionIcon slug={collection.slug} />
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{collection.productCount} producten</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-10 h-10 rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollectionIcon = ({ slug }: { slug: string }) => {
  const iconClass = "relative z-10 h-8 w-8 text-coral";
  
  const iconMap: Record<string, React.ReactNode> = {
    salmon: <Fish className={iconClass} />,
    shrimp: <Shell className={iconClass} />,
    oysters: <Shell className={iconClass} />,
    lobster: <Anchor className={iconClass} />,
    mussels: <Shell className={iconClass} />,
    tuna: <Fish className={iconClass} />,
    cod: <Fish className={iconClass} />,
    mackerel: <Fish className={iconClass} />,
    shellfish: <Shell className={iconClass} />,
    smoked: <Flame className={iconClass} />,
    herring: <Fish className={iconClass} />,
    seabass: <Fish className={iconClass} />,
    seasonal: <Waves className={iconClass} />,
    packages: <Package className={iconClass} />,
    deals: <Tag className={iconClass} />,
    "catch-of-the-month": <Star className={iconClass} />,
  };
  
  return iconMap[slug] || <Fish className={iconClass} />;
};

export default CollectionsGrid;