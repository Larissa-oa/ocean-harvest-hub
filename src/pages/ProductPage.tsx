import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Plus, Minus, ShoppingCart, Truck, Clock, Shield, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products, getProductBySlug } from "@/data/collections";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";

const productImages: Record<string, string[]> = {
  "verse-zalm-filet": [salmonImage, shrimpImage, oysterImage],
  "hollandse-garnalen": [shrimpImage, salmonImage, oysterImage],
  "zeeuwse-platte-oesters": [oysterImage, salmonImage, shrimpImage],
  "zeeuwse-kreeft": [mackerelImage, salmonImage, oysterImage],
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">🐟</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">Product niet gevonden</h1>
            <Button asChild>
              <Link to="/collections">Terug naar collecties</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = productImages[product.slug] || [salmonImage];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const getSeasonStatusColor = (status: string) => {
    switch (status) {
      case "in-season":
        return "bg-success text-success-foreground";
      case "available":
        return "bg-secondary text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getSeasonStatusLabel = (status: string) => {
    switch (status) {
      case "in-season":
        return "🌟";
      case "available":
        return "✓";
      default:
        return "—";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-primary transition-colors">Collecties</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.seasonality === "in-season" && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-success text-success-foreground text-sm font-semibold rounded-full">
                    🌟 In Seizoen
                  </span>
                )}
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails - Fun diagonal layout */}
              <div className="flex gap-3 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2 ring-primary ring-offset-2 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} beoordelingen)
                </span>
              </div>

              {/* Weight */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Gewicht per portie:</span>
                <span className="font-medium text-foreground">{product.weight}</span>
              </div>

              {/* Variants */}
              {product.variants.map((variant) => (
                <div key={variant.name} className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{variant.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          setSelectedVariants((prev) => ({ ...prev, [variant.name]: option }))
                        }
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedVariants[variant.name] === option
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity & Price */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      €{(product.price * quantity).toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        €{(product.originalPrice * quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <Button variant="coral" size="xl" className="w-full">
                <ShoppingCart className="h-5 w-5 mr-2" />
                In Winkelwagen
              </Button>

              {/* Delivery Info Bubbles */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-secondary rounded-2xl p-4 text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Gratis verzending</p>
                  <p className="text-xs text-muted-foreground">vanaf €50</p>
                </div>
                <div className="bg-secondary rounded-2xl p-4 text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Snelle levering</p>
                  <p className="text-xs text-muted-foreground">binnen 24 uur</p>
                </div>
                <div className="bg-secondary rounded-2xl p-4 text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Versgarantie</p>
                  <p className="text-xs text-muted-foreground">100% vers</p>
                </div>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="allergens" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary">
                    Allergenen
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {product.allergens.map((allergen) => (
                        <span
                          key={allergen}
                          className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nutrition" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary">
                    Voedingswaarden
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {product.nutritionalInfo.map((info) => (
                        <div key={info.name} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{info.name}</span>
                          <span className="font-medium text-foreground">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Fish Calendar */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-card mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Seizoenskalender</h2>
                <p className="text-sm text-muted-foreground">Wanneer is dit product beschikbaar?</p>
              </div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {product.seasonCalendar.map((month, index) => (
                <div
                  key={month.month}
                  className={`relative rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 ${getSeasonStatusColor(
                    month.status
                  )}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-xs font-medium mb-1">{month.month}</p>
                  <p className="text-lg">{getSeasonStatusLabel(month.status)}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-success"></div>
                <span className="text-muted-foreground">In Seizoen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="text-muted-foreground">Beschikbaar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-muted"></div>
                <span className="text-muted-foreground">Niet Beschikbaar</span>
              </div>
            </div>
          </div>

          {/* Upsell Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Klanten kochten ook
                </h2>
                <p className="text-sm text-muted-foreground">Perfect om te combineren</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <div
                  key={p.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
