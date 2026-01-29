import { Clock, CreditCard, Banknote, Phone, Calendar, Sparkles } from "lucide-react";

const schedule = [
  { day: "Lundi", hours: "09:00 - 18:00", isOpen: true },
  { day: "Mardi", hours: "09:00 - 18:00", isOpen: true },
  { day: "Mercredi", hours: "09:00 - 18:00", isOpen: true },
  { day: "Jeudi", hours: "09:00 - 18:00", isOpen: true },
  { day: "Vendredi", hours: "09:00 - 18:00", isOpen: true },
  { day: "Samedi", hours: "09:00 - 13:00", isOpen: true },
  { day: "Dimanche", hours: "Fermé", isOpen: false },
];

const Schedule = () => {
  const today = new Date().getDay();
  const dayMapping = [6, 0, 1, 2, 3, 4, 5]; // Sunday = 6 in our array
  const todayIndex = dayMapping[today];

  return (
    <section id="horaires" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-pastel-yellow blob opacity-40" />
      <div className="absolute bottom-10 left-0 w-40 h-40 bg-pastel-blue blob-2 opacity-30" />

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-sm">
              <Clock size={16} />
              Horaires
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-8">
              Heures d'ouverture
            </h2>
            
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between p-5 rounded-2xl transition-all ${
                    index === todayIndex
                      ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                      : "bg-muted hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      index === todayIndex ? "bg-primary-foreground/20" : "bg-pastel-green"
                    }`}>
                      <Clock size={18} className={index === todayIndex ? "text-primary-foreground" : "text-primary"} />
                    </div>
                    <span className="font-bold">{item.day}</span>
                    {index === todayIndex && (
                      <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full font-semibold">
                        Aujourd'hui
                      </span>
                    )}
                  </div>
                  <span className={`font-bold ${!item.isOpen && index !== todayIndex ? "text-muted-foreground" : ""}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods & Additional Info */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-sm">
              <Sparkles size={16} />
              Informations pratiques
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-8">
              Modalités de paiement
            </h2>

            <div className="space-y-4 mb-8">
              <div className="card-elevated flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-pastel-green flex items-center justify-center">
                  <Banknote className="text-primary" size={26} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Espèces</h3>
                  <p className="text-muted-foreground">Paiement en liquide accepté</p>
                </div>
              </div>
              
              <div className="card-elevated flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-pastel-blue flex items-center justify-center">
                  <CreditCard className="text-primary" size={26} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Carte bancaire</h3>
                  <p className="text-muted-foreground">Visa, Mastercard acceptées</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl p-8 text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-primary-foreground" size={28} />
                  <h3 className="font-display text-2xl font-bold">
                    Besoin d'un rendez-vous ?
                  </h3>
                </div>
                <p className="opacity-90 mb-6 text-lg">
                  Contactez le cabinet pour prendre rendez-vous ou obtenir plus d'informations.
                </p>
                <a
                  href="tel:+212661288998"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg"
                >
                  <Phone size={20} />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
