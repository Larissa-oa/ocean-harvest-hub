import reviewIcon from "@/assets/review-icon.png";

/** Softer, modern star icon with rounded points for ratings */
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="currentColor"
    strokeWidth="1"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
  </svg>
);
import schmidtZeevisBg from "@/assets/Schmidt-Zeevis.jpg";
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
    <section
      className="relative pt-20 overflow-hidden flex flex-col justify-end"
      style={{ minHeight: "70vh", paddingBottom: "3rem" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={schmidtZeevisBg}
          alt="Schmidt Zeevis background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'left 40%' }}
        />
        {/* Gradient overlay - lighter on left, darker on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/15 to-background/25" />
        {/* Very opaque overlay to blend with Catch of the Month section */}
        <div className="absolute inset-0 bg-secondary/10" />
        {/* Fade to collection/page background at top for smoother transition - strong at very top, quick fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.35) 10%, transparent 25%)",
          }}
        />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center md:text-left mb-44 md:mb-56 max-w-2xl mx-auto md:mx-0 md:ml-2">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-foreground -mt-10 md:mt-0 drop-shadow-lg">
            Wat onze klanten zeggen over <span className="text-primary">Schmidt Zeevis</span>
          </h2>
        </div>

        {/* Review Cards - Slider on mobile, grid on desktop */}
        <div className="md:hidden group -mx-4 mt-24 mb-8">
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
                    <div className="absolute top-4 left-4 text-collection-circle/30 text-6xl font-serif leading-none">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 mb-4 pl-2 mt-8">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 text-accent-green drop-shadow-[0_1px_2px_hsl(var(--accent-green)/0.3)]" />
                        ))}
                        <span className="text-xs text-muted-foreground/70 font-medium flex items-baseline">
                          <span className="font-semibold">{review.rating}</span>
                          <span className="text-[10px] leading-none">&nbsp;op 5</span>
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-5 text-sm md:text-base leading-relaxed pl-2">
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
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
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
              <div className="absolute top-4 left-4 text-collection-circle/30 text-6xl font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4 pl-2 mt-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-accent-green drop-shadow-[0_1px_2px_hsl(var(--accent-green)/0.3)]" />
                  ))}
                  <span className="text-xs text-muted-foreground/70 font-medium flex items-baseline">
                    <span className="font-semibold">{review.rating}</span>
                    <span className="text-[10px] leading-none">&nbsp;op 5</span>
                  </span>
                </div>
<p className="text-muted-foreground mb-5 text-sm md:text-base leading-relaxed pl-2">
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