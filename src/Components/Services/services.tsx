import { Monitor, Printer, Settings, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Monitor,
    title: "Services numériques",
    items: [
      "Création de sites web",
      "Gestion des réseaux sociaux",
      "Conception d'affiches, logos et cartes de visite",
    ],
    detailedItems: [
      { name: "Création de sites web", price: "À partir de 100 000 FCFA" },
      { name: "Gestion des réseaux sociaux", price: "À partir de 15 000 FCFA par réseau" },
      { name: "Conception d'affiches", price: "5 000 FCFA" },
      { name: "Logos Simple", price: "10 000 FCFA" },
      { name: "Logos Pro", price: "15 000 FCFA" },
      { name: "Cartes de visite", price: "5 000 FCFA" },
    ],
    description: "Nous créons votre présence digitale avec des solutions modernes et professionnelles adaptées à vos besoins.",
  },
  {
    icon: Printer,
    title: "Services d'impression",
    items: [
      "Photocopie",
      "Impression (documents, affiches, flyers)",
      "Reliure et finition",
    ],
    detailedItems: [
      { name: "Photocopie", price: "50 FCFA" },
      { name: "Impression couleur", price: "200 FCFA" },
      { name: "Impression noir/blanc", price: "100 FCFA" },
      { name: "Affiches", price: "500 FCFA" },
      { name: "Flyers", price: "500 FCFA" },
      { name: "Reliure et finition", price: "À partir de 500 FCFA" },
    ],
    description: "Services d'impression de qualité professionnelle pour tous vos documents et supports de communication.",
  },
  {
    icon: Settings,
    title: "Services techniques",
    items: [
      "Installation et maintenance de matériel informatique",
      "Dépannage et optimisation des systèmes",
      "Conseil et assistance technique",
    ],
    detailedItems: [
      { name: "Installation de matériel", price: "5 000 FCFA" },
      { name: "Maintenance informatique", price: "Sur devis" },
      { name: "Dépannage système", price: "Sur devis" },
      { name: "Optimisation des systèmes", price: "Sur devis" },
      { name: "Conseil technique", price: "Sur devis" },
      { name: "Assistance technique", price: "Sur devis" },
    ],
    description: "Support technique complet pour maintenir et optimiser votre infrastructure informatique.",
  },
];

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );
  const [titleVisible, setTitleVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animation du titre
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Animation des cartes
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  // Empêcher le scroll quand le modal est ouvert
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4 transition-all duration-1000"
          style={{
            color: "#0B0F19",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(-30px)",
          }}>
          Nos Services
        </h2>

        {/* Ligne décorative animée */}
        <div className="flex justify-center mb-16">
          <div
            className="h-1 rounded-full transition-all duration-1000"
            style={{
              width: titleVisible ? "100px" : "0px",
              background: "linear-gradient(90deg, #00C48C, #0099CC)",
            }}
          />
        </div>

        {/* Cartes de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="rounded-2xl p-8 transition-all duration-700 cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #E4E2DD",
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index]
                    ? "translateY(0) scale(1)"
                    : "translateY(50px) scale(0.95)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.borderColor = "#00C48C";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 196, 140, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "#E4E2DD";
                  e.currentTarget.style.boxShadow = "";
                }}>
                {/* Icône */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                  style={{
                    backgroundColor: "#0099CC",
                    transform: visibleCards[index]
                      ? "rotate(0deg) scale(1)"
                      : "rotate(-180deg) scale(0)",
                    transitionDelay: `${index * 200 + 200}ms`,
                  }}>
                  <IconComponent
                    size={32}
                    style={{ color: "#FFFFFF" }}
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Titre du service */}
                <h3
                  className="text-xl font-bold mb-4 transition-all duration-500"
                  style={{
                    color: "#0B0F19",
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index]
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transitionDelay: `${index * 200 + 300}ms`,
                  }}>
                  {service.title}
                </h3>

                {/* Liste des items */}
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm transition-all duration-500 flex items-start gap-2"
                      style={{
                        color: "#0B0F19",
                        opacity: visibleCards[index] ? 0.75 : 0,
                        transform: visibleCards[index]
                          ? "translateX(0)"
                          : "translateX(-20px)",
                        transitionDelay: `${index * 200 + 400 + i * 100}ms`,
                      }}>
                      <span
                        className="inline-block mt-1 transition-all duration-300"
                        style={{
                          color: "#0099CC",
                          fontSize: "1.2em",
                        }}>
                        •
                      </span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                <button
                  onClick={() => setSelectedService(index)}
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundColor: "#00C48C",
                    color: "#FFFFFF",
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index] ? "scale(1)" : "scale(0.9)",
                    transitionDelay: `${index * 200 + 700}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0099CC";
                    e.currentTarget.style.transform =
                      "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 153, 204, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#00C48C";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "";
                  }}>
                  <span className="relative z-10">En savoir plus</span>
                  <div
                    className="absolute inset-0 bg-white/20 transform -translate-x-full transition-transform duration-700"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(11, 15, 25, 0.75)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setSelectedService(null)}>
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 animate-scale-in"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}>
            {/* Bouton fermer */}
            <button title="fermer"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: "#F8F9FA",
                color: "#0B0F19",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00C48C";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F8F9FA";
                e.currentTarget.style.color = "#0B0F19";
                e.currentTarget.style.transform = "rotate(0deg)";
              }}>
              <X size={20} />
            </button>

            {/* Icône du service */}
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto"
              style={{
                backgroundColor: "#0099CC",
              }}>
              {React.createElement(services[selectedService].icon, {
                size: 40,
                style: { color: "#FFFFFF" },
              })}
            </div>

            {/* Titre */}
            <h3
              className="text-3xl font-bold text-center mb-4"
              style={{ color: "#0B0F19" }}>
              {services[selectedService].title}
            </h3>

            {/* Description */}
            <p
              className="text-center mb-8 text-base"
              style={{ color: "#0B0F19", opacity: 0.7 }}>
              {services[selectedService].description}
            </p>

            {/* Ligne décorative */}
            <div
              className="h-1 w-24 mx-auto rounded-full mb-8"
              style={{
                background: "linear-gradient(90deg, #00C48C, #0099CC)",
              }}
            />

            {/* Liste détaillée avec prix */}
            <div className="space-y-4">
              <h4
                className="text-xl font-bold mb-4"
                style={{ color: "#0B0F19" }}>
                Tarifs détaillés
              </h4>
              {services[selectedService].detailedItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: "#F8F9FA",
                    border: "1px solid #E4E2DD",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#00C48C";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#F8F9FA";
                    e.currentTarget.style.borderColor = "#E4E2DD";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#0099CC" }}
                    />
                    <span
                      className="font-medium"
                      style={{ color: "#0B0F19" }}>
                      {item.name}
                    </span>
                  </div>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#00C48C" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Bouton d'action */}
            <button
              className="w-full mt-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              style={{
                backgroundColor: "#00C48C",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0099CC";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 153, 204, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00C48C";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}>
              Demander un devis
            </button>

            {/* Note */}
            <p
              className="text-center text-sm mt-4"
              style={{ color: "#0B0F19", opacity: 0.5 }}>
              Les prix peuvent varier selon la complexité du projet
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;