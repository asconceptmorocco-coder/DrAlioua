import { MapPin, Phone, Mail, ExternalLink, Heart, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Lotissement El Moustakbal, 9 Avenue Abou Bakr El Kadiri",
    subtitle: "Sidi Maârouf, Casablanca, Maroc",
    href: "https://maps.google.com/?q=Sidi+Maarouf+Casablanca+Maroc",
    color: "bg-pastel-green",
  },
  {
    icon: Phone,
    title: "Téléphone principal",
    content: "+212 661 288 998",
    subtitle: "Ligne directe",
    href: "tel:+212661288998",
    color: "bg-pastel-pink",
  },
  {
    icon: Phone,
    title: "Téléphone secondaire",
    content: "+212 522 584 526",
    subtitle: "Standard cabinet",
    href: "tel:+212522584526",
    color: "bg-pastel-blue",
  },
  {
    icon: Mail,
    title: "Email",
    content: "secretariat.cabinetalioua@gmail.com",
    subtitle: "Réponse sous 24h",
    href: "mailto:secretariat.cabinetalioua@gmail.com",
    color: "bg-pastel-yellow",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding playful-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-pastel-blue blob opacity-40" />
      <div className="absolute -bottom-20 right-10 w-64 h-64 bg-pastel-pink blob-2 opacity-30" />

      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-sm">
            <MessageCircle size={16} />
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Nous <span className="gradient-text">contacter</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Prenez rendez-vous ou obtenez plus d'informations sur nos services pédiatriques.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-elevated group flex items-start gap-5"
            >
              <div className={`w-16 h-16 rounded-2xl ${info.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon 
                  className="text-primary" 
                  size={28} 
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-lg">{info.title}</h3>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-foreground font-semibold mt-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 border-4 border-pastel-blue">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5371075372896!2d-7.6433!3d33.5328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Cabinet Dr. Nadia Alioua"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
