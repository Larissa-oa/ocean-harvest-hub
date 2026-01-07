import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/collections";
import QuickAddModal from "./QuickAddModal";
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
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-success text-success-foreground text-xs font-medium rounded-full">
          In Seizoen
        </span>
      );
    case "unavailable":
      return (
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
          Niet Beschikbaar
        </span>
      );
    default:
      return null;
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <>
      <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
        {/* Image Container */}
        <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={getProductImage(product.slug)}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {getSeasonalityBadge(product.seasonality)}
          {hasDiscount && (
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
              -{discountPercent}%
            </span>
          )}
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
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

          {/* Price Row with Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-muted-foreground">vanaf</span>
              <span className="text-lg font-bold text-foreground">
                €{product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted-foreground line-through">
                  €{product.originalPrice!.toFixed(2)}
                </span>
              )}
            </div>
            <Button
              variant="default"
              size="icon"
              className="h-9 w-9 rounded-full"
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
