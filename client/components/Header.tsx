import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-primary font-serif font-bold text-lg">L</span>
          </div>
          <span className="font-serif font-bold text-xl hidden sm:inline text-foreground">
            Luxe Motors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#collection"
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Collection
          </a>
          <a
            href="#featured"
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Featured
          </a>
          <a
            href="#why-us"
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-block px-6 py-2 bg-accent text-primary font-semibold rounded-sm hover:bg-accent/90 transition-all hover:scale-105"
        >
          Schedule Test Drive
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#collection"
              className="block text-sm font-medium text-foreground/80 hover:text-accent py-2"
            >
              Collection
            </a>
            <a
              href="#featured"
              className="block text-sm font-medium text-foreground/80 hover:text-accent py-2"
            >
              Featured
            </a>
            <a
              href="#why-us"
              className="block text-sm font-medium text-foreground/80 hover:text-accent py-2"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground/80 hover:text-accent py-2"
            >
              Contact
            </a>
            <a
              href="#schedule"
              className="block w-full px-6 py-2 bg-accent text-primary font-semibold rounded-sm hover:bg-accent/90 transition-all text-center"
            >
              Schedule Test Drive
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
