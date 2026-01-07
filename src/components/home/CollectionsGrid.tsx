import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";

const collectionImages: Record<string, string> = {
  "alle-producten": salmonImage,
  "verse-vis": salmonImage,
  "schaal-en-schelpdieren": shrimpImage,
  "klaar-en-klaar": oysterImage,
  "sushi-en-sashimi": mackerelImage,
  "olie-en-azijn": salmonImage,
  "specials": shrimpImage,
  "delicatessen": oysterImage,
  "sauzen": mackerelImage,
  "schotels": salmonImage,
  "diepvries": shrimpImage,
  "conserven": oysterImage,
  "kruiden-en-specerijen": mackerelImage,
  "merchandise": salmonImage,
  "diversen": shrimpImage,
  "vangst-van-de-maand": oysterImage,
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
              className="group flex items-center bg-card rounded-xl overflow-hidden border-l-[6px] border-l-primary border border-border hover:shadow-lg transition-all duration-300 animate-fade-in h-32"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Abstract blob with collection image */}
              <div className="w-40 h-full flex-shrink-0 relative flex items-center justify-center overflow-visible bg-secondary/30">
                {/* Abstract blob background */}
                <svg 
                  viewBox="0 0 200 120" 
                  className="absolute w-48 h-32 -left-4"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id={`blob-${collection.id}`}>
                      <path d="M40,20 Q80,5 140,25 Q180,40 170,70 Q160,100 100,105 Q40,110 25,75 Q10,45 40,20 Z" />
                    </clipPath>
                  </defs>
                  <ellipse cx="100" cy="60" rx="85" ry="50" className="fill-coral/20" />
                  <ellipse cx="95" cy="55" rx="70" ry="42" className="fill-coral/15" />
                </svg>
                {/* Collection image */}
                <img
                  src={collectionImages[collection.slug] || salmonImage}
                  alt={collection.name}
                  className="relative z-10 w-20 h-20 object-cover rounded-full border-2 border-white shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <h3 className="font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
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

export default CollectionsGrid;
