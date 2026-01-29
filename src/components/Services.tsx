import { 
  Stethoscope, 
  Baby, 
  Syringe, 
  AlertCircle, 
  Heart, 
  Apple,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation pédiatrique",
    description: "Examens complets et diagnostic des maladies infantiles courantes.",
    color: "bg-pastel-blue",
  },
  {
    icon: Baby,
    title: "Suivi de croissance",
    description: "Surveillance du développement physique et psychomoteur de votre enfant.",
    color: "bg-pastel-pink",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description: "Programme complet de vaccination pour nourrissons et enfants.",
    color: "bg-pastel-green",
  },
  {
    icon: AlertCircle,
    title: "Urgences pédiatriques",
    description: "Prise en charge rapide des situations urgentes chez l'enfant.",
    color: "bg-pastel-orange",
  },
  {
    icon: Heart,
    title: "Maladies infantiles",
    description: "Diagnostic et traitement des pathologies courantes de l'enfance.",
    color: "bg-pastel-purple",
  },
  {
    icon: Apple,
    title: "Conseils nutrition",
    description: "Accompagnement nutritionnel et conseils en prévention santé.",
    color: "bg-pastel-yellow",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-pastel-pink blob opacity-30" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pastel-blue blob-2 opacity-30" />
      
      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-sm">
            <Sparkles size={16} />
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Des soins adaptés à <span className="gradient-text">chaque étape</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une prise en charge complète et bienveillante pour la santé de votre enfant, du nouveau-né à l'adolescent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated group cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon 
                  className="text-primary" 
                  size={32} 
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
