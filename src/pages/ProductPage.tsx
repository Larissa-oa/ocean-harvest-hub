import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Plus, Minus, ShoppingCart, Truck, Clock, Shield, ChevronLeft, ChevronRight, Fish, Check, Ban, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products, getProductBySlug } from "@/data/collections";
import { useCart } from "@/hooks/useCart";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import mackerelImage from "@/assets/mackerel-collection.jpg";
import octopusTentaclesImage from "@/assets/octopus-tentacles.png";
import dutchShrimpImage from "@/assets/dutch-shrimp.avif";
import oceanParadiseImage from "@/assets/ocean-paradise.png";
import zeebassImage from "@/assets/zeebass.avif";
import octopusImage from "@/assets/octopus.avif";

const productImages: Record<string, string[]> = {
  "octopus-tentakels": [octopusTentaclesImage, oceanParadiseImage, octopusImage],
  "hollandse-garnalen-fresh": [dutchShrimpImage, shrimpImage, salmonImage],
  "ocean-paradise": [oceanParadiseImage, salmonImage, shrimpImage],
  "zeebaars-fresh": [zeebassImage, salmonImage, mackerelImage],
  "verse-zalm-filet": [salmonImage, shrimpImage, oysterImage],
  "hollandse-garnalen": [shrimpImage, salmonImage, oysterImage],
  "zeeuwse-platte-oesters": [oysterImage, salmonImage, shrimpImage],
  "zeeuwse-kreeft": [mackerelImage, salmonImage, oysterImage],
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Fish className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Product niet gevonden</h1>
            <Button asChild>
              <Link to="/collections/alle-producten">Terug naar producten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Set default option if not selected
  if (!selectedOption && product.variants.length > 0 && product.variants[0].options.length > 0) {
    setSelectedOption(product.variants[0].options[0]);
  }

  const images = productImages[product.slug] || [salmonImage];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const getSeasonIcon = (status: string) => {
    switch (status) {
      case "in-season":
        return <Fish className="h-3.5 w-3.5" />;
      case "available":
        return <Check className="h-3.5 w-3.5" />;
      default:
        return <Ban className="h-3.5 w-3.5" />;
    }
  };

  const getSeasonStatusColor = (status: string) => {
    switch (status) {
      case "in-season":
        return "bg-success";
      case "available":
        return "bg-secondary";
      default:
        return "bg-muted";
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity, selectedOption);
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
            <Link to="/collections/alle-producten" className="hover:text-primary transition-colors">Producten</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-start">
            {/* Images - Sticky on desktop */}
            <div className="space-y-4 lg:sticky lg:top-8">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.seasonality === "in-season" && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-success text-success-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                    <Fish className="h-4 w-4" />
                    In Seizoen
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
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Rating - Less spacing above */}
              <div className="flex items-center gap-2 -mt-4">
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

              {/* Single Variant Selector */}
              {product.variants.length > 0 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">{product.variants[0].name}</label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants[0].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedOption(option)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedOption === option
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Price - More spacing */}
              <div className="flex items-center gap-8 pt-2">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="rounded-full h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold w-10 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="rounded-full h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
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

              {/* Add to Cart */}
              <Button size="lg" className="w-full h-14 text-base" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                In Winkelwagen
              </Button>

              {/* Simple Add-on Upsell */}
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-3">Vaak samen gekocht:</p>
                <div className="flex items-center gap-3">
                  <img
                    src={shrimpImage}
                    alt="Hollandse Garnalen"
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">Hollandse Garnalen</p>
                    <p className="text-sm text-primary font-semibold">€18.95</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 flex-shrink-0"
                    onClick={() => {
                      const garnalen = products.find(p => p.slug === "hollandse-garnalen");
                      if (garnalen) addItem(garnalen, 1, garnalen.variants[0]?.options[0] || "");
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

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
                    <span className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Allergenen
                    </span>
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
                    <span className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Voedingswaarden
                    </span>
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
          <div className="bg-card rounded-3xl p-6 md:p-8 border-l-[6px] border-l-primary border border-border mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Fish className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Seizoenskalender</h2>
                <p className="text-xs md:text-sm text-muted-foreground break-words">Wanneer is dit product beschikbaar?</p>
              </div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {product.seasonCalendar.map((month, index) => (
                <div
                  key={month.month}
                  className={`relative rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 border-l-4 ${
                    month.status === "in-season" 
                      ? "border-l-success bg-success/10" 
                      : month.status === "available" 
                        ? "border-l-primary bg-secondary" 
                        : "border-l-muted bg-muted/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-xs font-medium mb-1 text-foreground">{month.month}</p>
                  <div className={`flex justify-center ${
                    month.status === "in-season" 
                      ? "text-success" 
                      : month.status === "available" 
                        ? "text-primary" 
                        : "text-muted-foreground"
                  }`}>
                    {getSeasonIcon(month.status)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                  <Fish className="h-2.5 w-2.5 text-success-foreground" />
                </div>
                <span className="text-muted-foreground">In Seizoen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center">
                  <Check className="h-2.5 w-2.5 text-foreground" />
                </div>
                <span className="text-muted-foreground">Beschikbaar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                  <Ban className="h-2.5 w-2.5 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground">Niet Beschikbaar</span>
              </div>
            </div>
          </div>

          {/* Upsell Section with Slider */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Klanten kochten ook
                </h2>
                <p className="text-sm text-muted-foreground">Perfect om te combineren</p>
              </div>
            </div>

            <div className="-mx-4 sm:mx-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent className="!ml-0 sm:ml-0 !pr-0">
                  {relatedProducts.map((p, index) => (
                    <CarouselItem key={p.id} className={`${index === 0 ? 'pl-4' : 'pl-3'} sm:pl-4 basis-2/3 sm:basis-1/2 lg:basis-1/4 flex-shrink-0`}>
                      <ProductCard product={p} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-secondary" />
                <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-secondary" />
              </Carousel>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
