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
              className="group flex items-center bg-card rounded-xl overflow-hidden border-l-[5px] border-l-primary border border-border hover:shadow-lg transition-all duration-300 animate-fade-in h-28"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Wide Blob with Icon */}
              <div className="w-36 h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 240 120" className="absolute w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <ellipse cx="120" cy="60" rx="100" ry="50" className="fill-coral/15" />
                  <ellipse cx="110" cy="55" rx="80" ry="40" className="fill-coral/10" />
                </svg>
                <CollectionIcon slug={collection.slug} />
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{collection.productCount} producten</p>
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
  const iconClass = "relative z-10 h-10 w-10 text-coral";
  
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
