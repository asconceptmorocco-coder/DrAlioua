import { useState } from "react";
import { Phone, Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#apropos", label: "À propos" },
    { href: "#horaires", label: "Horaires" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 md:h-20 px-4">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <Heart className="text-primary-foreground" size={24} fill="currentColor" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-foreground text-lg">Dr. Nadia Alioua</span>
              <span className="block text-xs text-primary font-semibold">Pédiatre</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+212661288998" className="btn-primary flex items-center gap-2 !py-3 !px-6">
              <Phone size={18} />
              <span>Prendre RDV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-foreground bg-secondary rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card animate-fade-in rounded-b-2xl shadow-lg">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3.5 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-xl transition-all font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+212661288998"
                className="btn-primary mt-4 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Prendre RDV</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
