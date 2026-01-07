import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import alleImage from "@/assets/collection/alle.png";
import versevisImage from "@/assets/collection/versevis.png";
import schalpImage from "@/assets/collection/schalp1.png";
import kantAnKlaarImage from "@/assets/collection/kant-an-klaar.png";
import sushiensashimiImage from "@/assets/collection/sushiensashimi.png";
import olieenazijnImage from "@/assets/collection/olieenazijn.png";
import specialsImage from "@/assets/collection/specials.png";
import deliImage from "@/assets/collection/deli.png";
import sauzenImage from "@/assets/collection/sauzen.png";
import schotelImage from "@/assets/collection/schotel.png";
import diepvriesImage from "@/assets/collection/diepvrie1-Photoroom.png";
import conservenImage from "@/assets/collection/conserven.png";
import kruidenImage from "@/assets/collection/kruiden.png";
import merchandiseImage from "@/assets/collection/merchandise.png";
import diversenImage from "@/assets/collection/diversen.png";
import versevangstImage from "@/assets/collection/versevangst.png";

const collectionImages: Record<string, string> = {
  "alle-producten": alleImage,
  "verse-vis": versevisImage,
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
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Onze Collecties</h2>
            <p className="text-muted-foreground mt-1">Ontdek ons assortiment verse vis en zeevruchten</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, index) => {
            const isSmaller = ["delicatessen", "diepvries", "conserven"].includes(collection.slug);
            return (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="group flex items-center bg-card rounded-xl overflow-hidden border-l-[6px] border-l-primary border border-border hover:shadow-lg transition-all duration-300 animate-fade-in h-32"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Abstract blob with collection image */}
              <div className="w-40 h-full flex-shrink-0 relative flex items-center justify-center overflow-visible">
                {/* Abstract fluid blob background - beige/cream color */}
                <svg 
                  viewBox="0 0 200 150" 
                  className={`absolute ${isSmaller ? 'w-[12.5rem] h-[9.5rem]' : 'w-52 h-40'} -left-6`}
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Organic fluid blob shapes */}
                  <path 
                    d="M30,75 Q10,40 50,25 Q90,5 130,30 Q170,55 160,85 Q150,115 110,125 Q70,135 40,110 Q10,90 30,75 Z" 
                    className="fill-[hsl(35,40%,92%)]"
                  />
                  <path 
                    d="M45,70 Q25,45 60,35 Q100,20 135,45 Q165,65 150,90 Q135,115 95,118 Q55,120 35,95 Q20,75 45,70 Z" 
                    className="fill-[hsl(35,35%,88%)]"
                  />
                  <ellipse 
                    cx="95" 
                    cy="75" 
                    rx="55" 
                    ry="40" 
                    className="fill-[hsl(30,30%,85%)]"
                  />
                </svg>
                {/* Collection image - no shadow, no border radius, slightly bigger */}
                <img
                  src={collectionImages[collection.slug] || alleImage}
                  alt={collection.name}
                  className={`relative z-10 ${isSmaller ? 'w-24 h-24' : 'w-32 h-32'} object-cover group-hover:scale-110 transition-transform duration-300`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;