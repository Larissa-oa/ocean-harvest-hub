import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { collections, products, getCollectionBySlug } from "@/data/collections";

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || "");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [seasonalityFilters, setSeasonalityFilters] = useState<string[]>([]);
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSeasonality =
      seasonalityFilters.length === 0 || seasonalityFilters.includes(product.seasonality);
    return matchesSearch && matchesPrice && matchesSeasonality;
  });

  const visibleCollections = showAllCollections ? collections : collections.slice(0, 4);

  const toggleSeasonality = (value: string) => {
    setSeasonalityFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Collection Header */}
        <div className="bg-gradient-ice border-b border-border">
          <div className="container py-8 md:py-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/collections" className="hover:text-primary transition-colors">Collecties</Link>
              {collection && (
                <>
                  <span>/</span>
                  <span className="text-foreground">{collection.name}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {collection?.name || "Alle Producten"}
            </h1>
            {collection && (
              <p className="text-muted-foreground mt-2">{collection.description}</p>
            )}
          </div>
        </div>

        <div className="container py-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Zoek producten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base rounded-xl border-border bg-card"
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
            {/* Sidebar */}
            <aside
              className={`
                fixed md:relative inset-0 z-50 md:z-auto
                w-full md:w-72 flex-shrink-0
                bg-card md:bg-transparent
                transform transition-transform duration-300 md:transform-none
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0" }
              `}
            >
              <div className="h-full overflow-y-auto p-6 md:p-0">
                {/* Mobile Close Button */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Price Filter */}
                  <div className="bg-card rounded-2xl p-5 border border-border shadow-soft">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-lg">💰</span>
                      Prijs
                    </h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={100}
                      step={5}
                      className="mb-3"
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>€{priceRange[0]}</span>
                      <span>€{priceRange[1]}</span>
                    </div>
                  </div>

                  {/* Seasonality Filter */}
                  <div className="bg-card rounded-2xl p-5 border border-border shadow-soft">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-lg">🗓️</span>
                      Beschikbaarheid
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: "available", label: "Beschikbaar", emoji: "✅" },
                        { value: "in-season", label: "In Seizoen", emoji: "🌟" },
                        { value: "unavailable", label: "Niet Beschikbaar", emoji: "❌" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <Checkbox
                            checked={seasonalityFilters.includes(option.value)}
                            onCheckedChange={() => toggleSeasonality(option.value)}
                            className="rounded-md"
                          />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {option.emoji} {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Other Collections */}
                  <div className="bg-card rounded-2xl p-5 border border-border shadow-soft">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-lg">🐟</span>
                      Collecties
                    </h3>
                    <div className="space-y-2">
                      {visibleCollections.map((col) => (
                        <Link
                          key={col.id}
                          to={`/collections/${col.slug}`}
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            col.slug === slug
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-foreground hover:bg-secondary"
                          }`}
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                    {collections.length > 4 && (
                      <button
                        onClick={() => setShowAllCollections(!showAllCollections)}
                        className="flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
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
                  <p className="text-6xl mb-4">🐠</p>
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
