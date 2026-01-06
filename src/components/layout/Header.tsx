import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center shadow-soft group-hover:shadow-float transition-all duration-300">
            <span className="text-xl">🐟</span>
          </div>
          <span className="hidden sm:block text-xl font-bold text-foreground">
            Schmidt<span className="text-primary">Zeevis</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/collections" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Collecties
          </Link>
          <Link to="/collections/wild-caught" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Wild Gevangen
          </Link>
          <Link to="/collections/shellfish" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Schelpdieren
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-soft">
                {cartCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            <Link to="/" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Home
            </Link>
            <Link to="/collections" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Collecties
            </Link>
            <Link to="/collections/wild-caught" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Wild Gevangen
            </Link>
            <Link to="/collections/shellfish" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Schelpdieren
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
