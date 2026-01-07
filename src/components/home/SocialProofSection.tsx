import { Instagram, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import salmonImage from "@/assets/salmon-collection.jpg";
import shrimpImage from "@/assets/shrimp-collection.jpg";
import oysterImage from "@/assets/oyster-collection.jpg";
import lobsterImage from "@/assets/lobster-hero.png";

const instagramPosts = [
  { id: 1, image: salmonImage, likes: 234 },
  { id: 2, image: shrimpImage, likes: 189 },
  { id: 3, image: oysterImage, likes: 312 },
  { id: 4, image: lobsterImage, likes: 456 },
];

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

const SocialProofSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {/* Instagram Feed */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">@schmidtzeevis</h2>
                <p className="text-sm text-muted-foreground">Volg ons op Instagram</p>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Volgen
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group aspect-square rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground flex items-center gap-1.5 font-medium">
                    <Heart className="h-5 w-5 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
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
      </div>
    </section>
  );
};

export default SocialProofSection;
