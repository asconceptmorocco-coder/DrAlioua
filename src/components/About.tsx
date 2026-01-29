import { Award, Users, Clock, Languages, Star, Heart } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const stats = [
  { icon: Users, value: "Enfants", label: "Du nourrisson à l'adolescent", color: "bg-pastel-blue" },
  { icon: Clock, value: "Lun-Sam", label: "Disponibilité étendue", color: "bg-pastel-green" },
  { icon: Languages, value: "FR / AR", label: "Langues parlées", color: "bg-pastel-yellow" },
  { icon: Award, value: "Expertise", label: "Soins de qualité", color: "bg-pastel-pink" },
];

const About = () => {
  return (
    <section id="apropos" className="section-padding playful-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pastel-purple blob opacity-40" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pastel-green blob-2 opacity-30" />

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            {/* Background blob */}
            <div className="absolute inset-0 bg-pastel-pink blob scale-105 -z-10 opacity-60" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={doctorPortrait}
                alt="Dr. Nadia Alioua - Pédiatre à Casablanca"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 bg-pastel-yellow rounded-2xl p-4 shadow-xl">
              <Star className="text-accent" size={28} fill="currentColor" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border-4 border-pastel-blue">
              <Heart className="text-primary" size={28} fill="currentColor" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-sm">
              <Heart size={16} fill="currentColor" />
              À propos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Dr. Nadia <span className="gradient-text">Alioua</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Pédiatre dévouée et passionnée, le Dr. Nadia Alioua exerce à Casablanca où elle offre des soins médicaux 
              complets pour les enfants, du nouveau-né à l'adolescent, dans un cadre chaleureux et rassurant.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Son approche bienveillante et son expertise permettent d'accompagner chaque famille 
              dans le suivi de la santé et du développement de leurs petits. Elle s'engage à fournir 
              des soins de qualité adaptés aux besoins spécifiques de chaque enfant.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
