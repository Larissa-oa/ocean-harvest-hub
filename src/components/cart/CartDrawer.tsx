import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag, Package, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/hooks/useCart";
import { products, Product } from "@/data/collections";
import { getNewProductImage } from "@/data/productImageAssets";
import QuickAddModal from "@/components/products/QuickAddModal";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";
import octopusTentaclesImage from "@/assets/octopus-tentacles.png";
import dutchShrimpImage from "@/assets/dutch-shrimp.avif";
import oceanParadiseImage from "@/assets/ocean-paradise.png";
import zeebassImage from "@/assets/zeebass.avif";

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

const getProductImage = (product: Product) =>
  (product.image && getNewProductImage(product.image)) || productImages[product.slug] || salmonImage;

const CartDrawer = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    toggleVacuumSealing,
    cartTotal,
    addItem
  } = useCart();

  const [selectedUpsellProduct, setSelectedUpsellProduct] = useState<Product | null>(null);

  // Get upsell products (products not in cart) - shuffled for variety
  const cartProductIds = items.map(item => item.product.id);
  const availableProducts = products.filter(p => !cartProductIds.includes(p.id));
  const shuffled = [...availableProducts].sort(() => Math.random() - 0.5);
  const upsellProducts = shuffled.slice(0, 3);

  // Prevent body scroll when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-foreground/40 z-[45]"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 md:top-[7rem] h-full md:h-[calc(100vh-7rem)] w-full max-w-md bg-card z-50 shadow-float animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Winkelwagen</h2>
            <span className="text-sm text-muted-foreground">({items.length} items)</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Je winkelwagen is leeg</h3>
              <p className="text-sm text-muted-foreground mb-4">Ontdek onze verse producten</p>
              <Button onClick={() => setIsCartOpen(false)} asChild>
                <Link to="/collections/alle-producten">Bekijk Producten</Link>
              </Button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.selectedOption}`}
                  className="flex gap-2.5 p-2.5 bg-secondary/50 rounded-xl"
                >
                  <img
                    src={getProductImage(item.product)}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{item.selectedOption}</p>
                    
                    {/* Vacuum sealing option */}
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                      <Checkbox
                        checked={item.vacuumSealing}
                        onCheckedChange={() => toggleVacuumSealing(item.product.id, item.selectedOption)}
                        className="h-4 w-4"
                      />
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        Vacuüm verpakken (+€1,50)
                      </span>
                    </label>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 bg-card rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedOption, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-secondary rounded-l-lg transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedOption, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-secondary rounded-r-lg transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">
                          €{((item.product.price * item.quantity) + (item.vacuumSealing ? 1.5 * item.quantity : 0)).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedOption)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell Section - Column layout, max 3 */}
              {upsellProducts.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">Klanten kochten ook</h3>
                  </div>
                  <div className="space-y-2">
                    {upsellProducts.slice(0, 3).map((product) => (
                      <div 
                        key={product.id}
                        className="flex items-center gap-2 p-1.5 bg-card rounded-lg border border-border"
                      >
                        <img
                          src={getProductImage(product)}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground line-clamp-1">{product.name}</h4>
                          <p className="text-sm text-primary font-bold">€{product.price.toFixed(2)}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedUpsellProduct(product)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotaal</span>
              <span className="text-xl font-bold text-foreground">€{cartTotal.toFixed(2)}</span>
            </div>
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => setIsCartOpen(false)}
              asChild
            >
              <Link to="/cart">
                Naar Checkout
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => setIsCartOpen(false)}
            >
              Verder winkelen
            </Button>
          </div>
        )}
      </div>
      
      {/* Quick Add Modal for Upsell Products */}
      {selectedUpsellProduct && (
        <QuickAddModal
          product={selectedUpsellProduct}
          isOpen={!!selectedUpsellProduct}
          onClose={() => setSelectedUpsellProduct(null)}
        />
      )}
    </>
  );
};

export default CartDrawer;
