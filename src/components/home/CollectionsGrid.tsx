import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";

const collectionImages: Record<string, string> = {
  salmon: salmonImage,
  shrimp: shrimpImage,
  oysters: oysterImage,
  mackerel: mackerelImage,
};

const getCollectionImage = (slug: string) => {
  return collectionImages[slug] || salmonImage;
};

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
              className="group flex items-center bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in h-20"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="w-24 h-full flex-shrink-0 overflow-hidden">
                <img
                  src={getCollectionImage(collection.slug)}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {collection.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{collection.productCount} producten</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
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

export default CollectionsGrid;
