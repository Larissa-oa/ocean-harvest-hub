import { Star } from "lucide-react";
import reviewIcon from "@/assets/review-icon.png";
import schmidtBoatImage from "@/assets/schmidtboat-edited8.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Jan de Vries",
    rating: 5,
    text: "Geweldige kwaliteit! De zalm was super vers en smolt op de tong.",
    date: "2 dagen geleden",
  },
  {
    id: 2,
    name: "Marie van den Berg",
    rating: 5,
    text: "Snelle levering en de oesters waren perfect. Aanrader!",
    date: "1 week geleden",
  },
  {
    id: 3,
    name: "Peter Bakker",
    rating: 5,
    text: "Al jaren klant en nooit teleurgesteld. Top service!",
    date: "2 weken geleden",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={schmidtBoatImage}
          alt="Schmidt boat background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 41%' }}
        />
        {/* Gradient overlay - lighter on left, darker on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/15 to-background/25" />
        {/* Very opaque overlay to blend with Catch of the Month section */}
        <div className="absolute inset-0 bg-secondary/10" />
      </div>
      
      <div className="container relative z-10 px-4">
        {/* Creative Header */}
        <div className="text-center md:text-left mb-12 max-w-md mx-auto md:mx-0 md:ml-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 drop-shadow-lg">
            Wat onze klanten zeggen over <span className="text-primary">Schmidt Zeevis</span>
          </h2>
          <p className="hidden md:block text-muted-foreground max-w-sm mx-auto md:mx-0">
            Al meer dan 30 jaar vertrouwen duizenden klanten op onze verse vis en zeevruchten
          </p>
        </div>

        {/* Review Cards - Slider on mobile, grid on desktop */}
        <div className="md:hidden group -mx-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-4 basis-5/6 sm:basis-2/3">
                  <div className="relative group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden h-full">
                    {/* Decorative background icon */}
                    <img 
                      src={reviewIcon} 
                      alt="Review icon" 
                      className="absolute -top-4 -right-4 h-24 w-24 object-contain opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"
                    />
                    
                    {/* Quote mark accent */}
                    <div className="absolute top-4 left-4 text-primary/20 text-6xl font-serif leading-none">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4 pl-2 mt-8">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                        <span className="text-xs text-muted-foreground/70 font-medium flex items-baseline">
                          <span className="font-semibold">{review.rating}</span>
                          <span className="text-[10px] leading-none">&nbsp;op 5</span>
                        </span>
                      </div>
                      <p className="text-foreground mb-5 text-sm md:text-base leading-relaxed pl-2">
                        {review.text}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="font-semibold text-foreground">{review.name}</span>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-card/80 border-border hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CarouselNext className="right-2 bg-card/80 border-border hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="relative group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative background icon */}
              <img 
                src={reviewIcon} 
                alt="Review icon" 
                className="absolute -top-4 -right-4 h-24 w-24 object-contain opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              />
              
              {/* Quote mark accent */}
              <div className="absolute top-4 left-4 text-primary/20 text-6xl font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 pl-2 mt-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground/70 font-medium flex items-baseline">
                    <span className="font-semibold">{review.rating}</span>
                    <span className="text-[10px] leading-none">&nbsp;op 5</span>
                  </span>
                </div>
                <p className="text-foreground mb-5 text-sm md:text-base leading-relaxed pl-2">
                  {review.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;