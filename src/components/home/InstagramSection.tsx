import { Instagram, Heart } from "lucide-react";
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

const InstagramSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
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
    </section>
  );
};

export default InstagramSection;