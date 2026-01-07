import { Star } from "lucide-react";

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
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Beoordeeld met 4.9/5
          </h2>
          <p className="text-muted-foreground">Gebaseerd op 2.847 beoordelingen</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 border border-border shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{review.name}</span>
                <span className="text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;