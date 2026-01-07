import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/collections";
import { useCart } from "@/hooks/useCart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";

interface QuickAddModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
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

const QuickAddModal = ({ product, isOpen, onClose }: QuickAddModalProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(() => {
    if (product.variants.length > 0 && product.variants[0].options.length > 0) {
      return product.variants[0].options[0];
    }
    return "";
  });

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addItem(product, quantity, selectedOption);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-lg font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="p-4 space-y-4">
          {/* Product Image */}
          <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
            <img
              src={getProductImage(product.slug)}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground">
            {product.shortDescription}
          </p>

          {/* Single Variant Selector */}
          {product.variants.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{product.variants[0].name}</label>
              <div className="flex flex-wrap gap-2">
                {product.variants[0].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedOption === option
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Aantal</span>
            <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-background transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-background transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <span className="text-xs text-muted-foreground">Totaal</span>
              <p className="text-xl font-bold text-foreground">
                €{(product.price * quantity).toFixed(2)}
              </p>
            </div>
            <Button size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Toevoegen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickAddModal;
