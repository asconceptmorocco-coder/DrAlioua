import { Phone, MapPin, Calendar, Heart, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-pediatric.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen hero-gradient pt-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-pastel-pink blob opacity-60" />
        <div className="absolute top-40 right-0 w-64 h-64 bg-pastel-blue blob-2 opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-pastel-yellow blob opacity-40" />
        <div className="absolute -bottom-10 right-1/3 w-72 h-72 bg-pastel-green blob-2 opacity-30" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-32 right-1/4 w-8 h-8 text-pastel-yellow animate-float" fill="currentColor" />
        <Heart className="absolute top-1/3 left-16 w-6 h-6 text-pastel-pink animate-float" style={{ animationDelay: '1s' }} fill="currentColor" />
        <Sparkles className="absolute bottom-1/3 right-20 w-10 h-10 text-pastel-blue animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12 px-4">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6 shadow-sm">
              <Heart size={16} fill="currentColor" />
              Pédiatre à Casablanca
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Dr. Nadia Alioua
              <span className="block gradient-text mt-2">Pédiatre</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Des soins médicaux chaleureux et attentionnés pour vos petits trésors. 
              Du nourrisson à l'adolescent, nous accompagnons chaque étape de leur croissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:+212661288998" className="btn-primary flex items-center justify-center gap-2 group">
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Prendre rendez-vous</span>
              </a>
              <a href="#contact" className="btn-outline flex items-center justify-center gap-2">
                <Calendar size={20} />
                <span>Voir les horaires</span>
              </a>
            </div>

            {/* Quick Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-md">
                <div className="w-14 h-14 rounded-2xl bg-pastel-green flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Localisation</p>
                  <p className="font-semibold text-foreground">Sidi Maârouf, Casablanca</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-md">
                <div className="w-14 h-14 rounded-2xl bg-pastel-pink flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Téléphone</p>
                  <p className="font-semibold text-foreground">+212 661 288 998</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in hidden lg:block">
            {/* Main Image with blob mask */}
            <div className="relative">
              <div className="absolute inset-0 bg-pastel-blue blob scale-110 -z-10" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Cabinet pédiatrique Dr. Nadia Alioua"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-8 bg-card rounded-2xl p-5 shadow-xl max-w-xs border-4 border-pastel-green">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-foreground">Cabinet ouvert aujourd'hui</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">Lun - Sam: 09:00 - 18:00</p>
            </div>

            {/* Additional floating element */}
            <div className="absolute -top-4 -right-4 bg-pastel-yellow rounded-2xl p-4 shadow-lg">
              <Star className="text-accent" size={32} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
