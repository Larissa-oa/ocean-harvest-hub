import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, Filter, X, Euro, Calendar, Grid3X3, Check, Ban } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import WaveDivider from "@/components/ui/WaveDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { collections, products, getCollectionBySlug } from "@/data/collections";
import schmidtFishImage from "@/assets/schmidt-fish.png";

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const collection = getCollectionBySlug(slug || "");
  
  // Get search query from URL params
  const urlSearchQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  
  // Update search query when URL param changes
  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minPriceInput, setMinPriceInput] = useState("0");
  const [maxPriceInput, setMaxPriceInput] = useState("100");
  const [seasonalityFilters, setSeasonalityFilters] = useState<string[]>([]);
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMinPriceChange = (value: string) => {
    setMinPriceInput(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= priceRange[1]) {
      setPriceRange([num, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPriceInput(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num >= priceRange[0] && num <= 100) {
      setPriceRange([priceRange[0], num]);
    }
  };

  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
    setMinPriceInput(value[0].toString());
    setMaxPriceInput(value[1].toString());
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSeasonality =
      seasonalityFilters.length === 0 || seasonalityFilters.includes(product.seasonality);
    return matchesSearch && matchesPrice && matchesSeasonality;
  });

  const visibleCollections = showAllCollections ? collections : collections.slice(0, 6);

  const toggleSeasonality = (value: string) => {
    setSeasonalityFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/collections/alle-producten" className="hover:text-primary transition-colors">Collecties</Link>
              {collection && (
                <>
                  <span>/</span>
                  <span className="text-foreground font-medium">{collection.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Header */}
        <div style={{ backgroundColor: 'hsl(195, 70%, 28%, 0.3)' }}>
          <div className="container pt-4 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold pt-4" style={{ color: 'hsl(200, 50%, 10%)' }}>
              {collection?.name || "Alle Producten"}
            </h1>
            {collection && (
              <p className="mt-2 mb-3" style={{ color: 'hsl(200, 50%, 10%, 0.7)' }}>{collection.description}</p>
            )}
          </div>
          <WaveDivider />
        </div>

        <div className="container pb-8 pt-6">
          {/* Search Bar - Narrower */}
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Zoek producten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-11 text-base rounded-xl border-border bg-card"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden mb-4 w-full"
            onClick={() => setSidebarOpen(true)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <div className="flex gap-8">
            {/* Overlay for mobile */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-foreground/40 z-40 md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            
            {/* Sidebar */}
            <aside
              className={`
                fixed md:relative inset-y-0 left-0 z-50 md:z-auto
                w-full md:w-64 flex-shrink-0
                bg-card md:bg-transparent
                transform transition-transform duration-300 md:transform-none
                flex flex-col
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0" }
              `}
            >
              <div className="flex-1 overflow-y-auto p-6 md:p-0 pb-24 md:pb-0">
                {/* Mobile Close Button */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-5">
                  {/* Price Filter */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Euro className="h-4 w-4 text-primary" />
                      Prijs
                    </h3>
                    <Slider
                      value={priceRange}
                      onValueChange={handleSliderChange}
                      min={0}
                      max={100}
                      step={1}
                      className="mb-4"
                    />
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                        <Input
                          type="number"
                          value={minPriceInput}
                          onChange={(e) => handleMinPriceChange(e.target.value)}
                          className="h-9 text-sm"
                          min={0}
                          max={priceRange[1]}
                        />
                      </div>
                      <span className="text-muted-foreground mt-5">-</span>
                      <div className="flex-1">
                        <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                        <Input
                          type="number"
                          value={maxPriceInput}
                          onChange={(e) => handleMaxPriceChange(e.target.value)}
                          className="h-9 text-sm"
                          min={priceRange[0]}
                          max={100}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Seasonality Filter */}
                  <div className="bg-card rounded-xl p-4 border-2 border-border shadow-sm">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Beschikbaarheid
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      Filter op seizoen en beschikbaarheid
                    </p>
                    <div className="space-y-2">
                      {[
                        { value: "in-season", label: "In Seizoen", sublabel: null, icon: null, isFish: true, colorClass: "text-accent-green", bgClass: "bg-accent-green/15", borderClass: "border-l-4 border-accent-green", selectedRing: "ring-2 ring-accent-green/50 ring-offset-2" },
                        { value: "available", label: "Beschikbaar", sublabel: null, icon: Check, isFish: false, colorClass: "text-primary", bgClass: "bg-secondary", borderClass: "border-l-4 border-primary/40", selectedRing: "ring-2 ring-primary/30 ring-offset-2" },
                        { value: "unavailable", label: "Seizoensgebonden", sublabel: null, icon: Ban, isFish: false, colorClass: "text-muted-foreground", bgClass: "bg-muted/50", borderClass: "border-l-4 border-muted-foreground/30", selectedRing: "ring-2 ring-muted ring-offset-2" },
                      ].map((option) => {
                        const isChecked = seasonalityFilters.includes(option.value);
                        return (
                          <label
                            key={option.value}
                            className={`flex items-center gap-3 cursor-pointer rounded-lg p-3 border-l-4 ${option.borderClass} ${option.bgClass} transition-all ${isChecked ? option.selectedRing : ''} hover:opacity-90`}
                          >
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={() => toggleSeasonality(option.value)}
                              className={`border-2 ${option.value === "in-season" ? "data-[state=checked]:bg-accent-green data-[state=checked]:border-accent-green" : "data-[state=checked]:bg-primary data-[state=checked]:border-primary"}`}
                            />
                            <span className="flex flex-col gap-0.5 flex-1">
                              <span className={`text-sm font-semibold flex items-center gap-2 ${option.colorClass}`}>
                                {option.isFish ? (
                                  <img src={schmidtFishImage} alt="In seizoen" className="h-4 w-4" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(106deg) brightness(0.7) contrast(1.2)' }} />
                                ) : (
                                  option.icon && <option.icon className={`h-4 w-4 ${option.colorClass}`} />
                                )}
                                {option.label}
                              </span>
                              {option.sublabel && (
                                <span className="text-xs text-muted-foreground">{option.sublabel}</span>
                              )}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Other Collections - Single column list */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4 text-primary" />
                      Collecties
                    </h3>
                    <div className="flex flex-col gap-1">
                      {visibleCollections.map((col) => (
                        <Link
                          key={col.id}
                          to={`/collections/${col.slug}`}
                          className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                            col.slug === slug
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-secondary"
                          }`}
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                    {collections.length > 6 && (
                      <button
                        onClick={() => setShowAllCollections(!showAllCollections)}
                        className="flex items-center justify-center gap-1 mt-3 text-sm text-primary hover:underline w-full"
                      >
                        {showAllCollections ? (
                          <>
                            Minder tonen <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Meer tonen <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} producten gevonden
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Geen producten gevonden
                  </h3>
                  <p className="text-muted-foreground">
                    Probeer een andere zoekopdracht of pas je filters aan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;
