import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Fish, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/collections";
import QuickAddModal from "./QuickAddModal";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";
import octopusTentaclesImage from "@/assets/octopus-tentacles.png";
import dutchShrimpImage from "@/assets/dutch-shrimp.avif";
import oceanParadiseImage from "@/assets/ocean-paradise.png";
import zeebassImage from "@/assets/zeebass.avif";
import schmidtFishIcon from "@/assets/schmidt-fish.png";
import reviewIcon from "@/assets/review-icon.png";

interface ProductCardProps {
  product: Product;
}

const productImages: Record<string, string> = {
  "octopus-tentakels": octopusTentaclesImage,
  "hollandse-garnalen-fresh": dutchShrimpImage,
  "ocean-paradise": oceanParadiseImage,
  "zeebaars-fresh": zeebassImage,
  "verse-zalm-filet": salmonImage,
  "hollandse-garnalen": shrimpImage,
  "zeeuwse-platte-oesters": oysterImage,
  "zeeuwse-kreeft": mackerelImage,
};

const getProductImage = (slug: string) => {
  return productImages[slug] || salmonImage;
};

const SeasonalityBadge = ({ 
  seasonality, 
  hasSchmidtsTag 
}: { 
  seasonality: Product["seasonality"];
  hasSchmidtsTag: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (seasonality !== "in-season") return null;

  // Position: if Schmidt's tag exists, position after it with proper spacing; otherwise, position on left
  // Schmidt tag width: mobile ~9rem, desktop ~10rem
  // Add gap of 1rem between tags to prevent overlap
  const leftPosition = hasSchmidtsTag ? "left-[9.5rem] sm:left-[9.6rem]" : "left-3";

  return (
    <div className={`absolute top-3 ${leftPosition} z-20`}>
      <button
        type="button"
        className="relative w-4 h-4 rounded-full group/season"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {/* Outer ring with success color - matches filter border */}
        <div className="absolute inset-0 rounded-full border-2 border-success/60 group-hover/season:border-success transition-colors" />
        {/* Inner glow effect */}
        <div className="absolute inset-0.5 rounded-full bg-success/20 group-hover/season:bg-success/30 transition-colors" />
        {/* Core circle with gradient - matches filter background style */}
        <div className="absolute inset-1 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.4)] group-hover/season:shadow-[0_0_12px_rgba(34,197,94,0.6)] transition-all" />
        {/* Subtle pulse animation */}
        <div className="absolute inset-0 rounded-full bg-success/30 animate-ping opacity-0 group-hover/season:opacity-100" style={{ animationDuration: '2s' }} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 sm:w-56 bg-popover border-2 border-border rounded-lg shadow-xl p-3.5 z-50 whitespace-normal animate-in fade-in-0 zoom-in-95 duration-200 relative overflow-hidden">
          <p className="text-xs text-popover-foreground leading-relaxed relative z-10">
            Dit product is momenteel in het seizoen en op zijn versst.
          </p>
          {/* Watermark icon */}
          <img 
            src={reviewIcon} 
            alt="" 
            className="absolute bottom-1 right-1 h-16 w-16 rounded-full object-cover opacity-[0.06] group-hover/season:opacity-[0.12] pointer-events-none transition-opacity duration-200"
          />
        </div>
      )}
    </div>
  );
};

const SchmidtsChoiceBadge = ({ isSchmidtsChoice }: { isSchmidtsChoice?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isSchmidtsChoice) return null;

  return (
    <div className="absolute top-3 left-3 z-20">
      <button
        type="button"
        className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1.5 group/schmidt"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <img 
          src={schmidtFishIcon} 
          alt="Schmidt fish icon" 
          className="h-5 w-5 object-contain"
        />
        Schmidt's Keuze
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 sm:w-56 bg-popover border-2 border-border rounded-lg shadow-xl p-3.5 z-50 whitespace-normal animate-in fade-in-0 zoom-in-95 duration-200 relative overflow-hidden">
          <p className="text-xs text-popover-foreground leading-relaxed relative z-10">
            Onze favoriete selectie van premium kwaliteit vis en zeevruchten.
          </p>
          {/* Watermark icon */}
          <img 
            src={reviewIcon} 
            alt="" 
            className="absolute bottom-1 right-1 h-16 w-16 rounded-full object-cover opacity-[0.06] group-hover/schmidt:opacity-[0.06] pointer-events-none transition-opacity duration-200"
          />
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-card rounded-xl overflow-visible border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-secondary rounded-t-xl">
          <Link to={`/products/${product.slug}`} className="block w-full h-full overflow-hidden rounded-t-xl">
            <img
              src={getProductImage(product.slug)}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <SchmidtsChoiceBadge isSchmidtsChoice={product.rating >= 4.8} />
          <SeasonalityBadge 
            seasonality={product.seasonality} 
            hasSchmidtsTag={product.rating >= 4.8}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          {/* Price Row with Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-muted-foreground">vanaf</span>
              <span className="text-lg font-bold text-foreground">
                €{product.price.toFixed(2)}
              </span>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full border-2 border-primary bg-transparent hover:bg-primary/10 text-primary hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <QuickAddModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
