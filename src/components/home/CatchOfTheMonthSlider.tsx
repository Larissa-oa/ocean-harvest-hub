import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CatchOfTheMonthSlider = () => {
  // Use first 4 products as "catch of the month" for demo
  const catchProducts = products.slice(0, 4);

  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Vangst van de Maand
          </h2>
          <p className="text-muted-foreground mt-1">
            De versste vis van dit seizoen
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {catchProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
            
            {/* See All Card */}
            <CarouselItem className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
              <Link
                to="/collections/catch-of-the-month"
                className="flex flex-col items-center justify-center h-full min-h-[280px] bg-card rounded-2xl border border-border border-dashed hover:border-primary hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Bekijk Alles
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  Ontdek meer producten
                </span>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-secondary" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
};

export default CatchOfTheMonthSlider;
