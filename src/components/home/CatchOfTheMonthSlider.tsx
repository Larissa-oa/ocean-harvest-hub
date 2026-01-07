import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Vangst van de Maand
            </h2>
            <p className="text-muted-foreground mt-1">
              De versste vis van dit seizoen
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/collections/catch-of-the-month">
              Bekijk Alles
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {catchProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-secondary" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-secondary" />
        </Carousel>

        <div className="mt-6 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/collections/catch-of-the-month">
              Bekijk Alles
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatchOfTheMonthSlider;