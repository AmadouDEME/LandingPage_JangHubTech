import { Monitor, Printer, Settings } from "lucide-react";
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
  },
  {
    icon: Printer,
    title: "Services d'impression",
    items: [
      "Photocopie",
      "Impression (documents, affiches, flyers)",
      "Reliure et finition",
    ],
  },
  {
    icon: Settings,
    title: "Services techniques",
    items: [
      "Installation et maintenance de matériel informatique",
      "Dépannage et optimisation des systèmes",
      "Conseil et assistance technique",
    ],
  },
];

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );
  const [titleVisible, setTitleVisible] = useState(false);
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

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4  transition-all duration-1000"
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
    </section>
  );
};

export default Services;
