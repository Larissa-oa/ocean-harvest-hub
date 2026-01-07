import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import logoImage from "@/assets/logosz.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logoImage} 
            alt="Schmidt Zeevis Logo" 
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-foreground">
              SchmidtZeevis
            </span>
            <span className="text-[10px] font-thin text-foreground uppercase">
              Rotterdam
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Webwinkel
          </Link>
          <Link to="/collections/alle-producten" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Alle producten
          </Link>
          <Link to="/collections/vangst-van-de-maand" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Verse vangst
          </Link>
          <Link to="/collections/verse-vis" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Verse vis
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
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
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
              Webwinkel
            </Link>
            <Link to="/collections/alle-producten" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Alle producten
            </Link>
            <Link to="/collections/vangst-van-de-maand" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Verse vangst
            </Link>
            <Link to="/collections/verse-vis" className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
              Verse vis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
