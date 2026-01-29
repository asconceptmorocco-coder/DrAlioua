import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pastel-pink via-pastel-blue to-pastel-green" />
      
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                <Heart className="text-primary-foreground" size={28} fill="currentColor" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">Dr. Nadia Alioua</span>
                <span className="block text-sm opacity-70">Pédiatre</span>
              </div>
            </div>
            <p className="text-base opacity-80 max-w-xs leading-relaxed">
              Des soins médicaux chaleureux et attentionnés pour vos enfants, du nourrisson à l'adolescent, à Casablanca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Liens rapides</h3>
            <nav className="space-y-3">
              <a href="#accueil" className="block text-base opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200">
                Accueil
              </a>
              <a href="#services" className="block text-base opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200">
                Services
              </a>
              <a href="#apropos" className="block text-base opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200">
                À propos
              </a>
              <a href="#horaires" className="block text-base opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200">
                Horaires
              </a>
              <a href="#contact" className="block text-base opacity-70 hover:opacity-100 transition-opacity hover:translate-x-1 transform duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <a 
                href="tel:+212661288998" 
                className="flex items-center gap-3 text-base opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span>+212 661 288 998</span>
              </a>
              <a 
                href="mailto:secretariat.cabinetalioua@gmail.com" 
                className="flex items-center gap-3 text-base opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span className="break-all">secretariat.cabinetalioua@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-base opacity-70">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span>Sidi Maârouf, Casablanca, Maroc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-base opacity-70 flex items-center justify-center gap-2">
            © {currentYear} Cabinet Dr. Nadia Alioua. Fait avec <Heart size={16} className="text-accent" fill="currentColor" /> pour les enfants.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
