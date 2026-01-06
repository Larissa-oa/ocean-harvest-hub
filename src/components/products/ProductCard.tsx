import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/collections";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";

interface ProductCardProps {
  product: Product;
}

const productImages: Record<string, string> = {
  "verse-zalm-filet": salmonImage,
  "hollandse-garnalen": shrimpImage,
  "zeeuwse-platte-oesters": oysterImage,
  "zeeuwse-kreeft": mackerelImage,
};

const getProductImage = (slug: string) => {
  return productImages[slug] || salmonImage;
};

const getSeasonalityBadge = (seasonality: Product["seasonality"]) => {
  switch (seasonality) {
    case "in-season":
      return (
        <span className="absolute top-3 left-3 px-2 py-1 bg-success text-success-foreground text-xs font-semibold rounded-full">
          In Seizoen
        </span>
      );
    case "unavailable":
      return (
        <span className="absolute top-3 left-3 px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
          Niet Beschikbaar
        </span>
      );
    default:
      return null;
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 card-lift">
      {/* Image Container */}
      <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={getProductImage(product.slug)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {getSeasonalityBadge(product.seasonality)}
        {hasDiscount && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
            -{discountPercent}%
          </span>
        )}
        
        {/* Add to Cart Button - Shows on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors">
          <Button
            variant="hero"
            size="icon"
            className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-1">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-accent text-accent"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs text-muted-foreground">vanaf</span>
          <span className="text-lg font-bold text-foreground">
            €{product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              €{product.originalPrice!.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
