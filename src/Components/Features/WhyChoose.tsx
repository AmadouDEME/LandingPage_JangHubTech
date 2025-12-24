import React, { useEffect, useRef, useState } from "react";
import { Clock, Code, Users, GraduationCap } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: "Accessibilité",
    description: "Apprenez à votre rythme, de n'importe où, avec des horaires flexibles et des ressources à la demande.",
    color: "#00C48C",
  },
  {
    icon: Code,
    title: "Approche Pratique",
    description: "Mettez la main à la pâte avec des projets réels et des exercices concrets pour un apprentissage solide.",
    color: "#0099CC",
  },
  {
    icon: Users,
    title: "Communauté Interactive",
    description: "Échangez avec des pairs et des mentors dans un environnement stimulant et collaboratif.",
    color: "#00C48C",
  },
  {
    icon: GraduationCap,
    title: "Mentors Experts",
    description: "Bénéficiez des conseils personnalisés de professionnels expérimentés du domaine.",
    color: "#0099CC",
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isVisible, cardRef }) => {
  const IconComponent = feature.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center text-center p-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icône avec cercle animé */}
      <div
        className="relative w-24 h-24 mb-6 flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          backgroundColor: isHovered ? feature.color : `${feature.color}20`,
          transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          boxShadow: isHovered ? `0 20px 40px ${feature.color}40` : "none",
        }}
      >
        {/* Animation de pulse */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-1000"
          style={{
            backgroundColor: feature.color,
            opacity: isHovered ? 0.3 : 0,
            transform: isHovered ? "scale(1.3)" : "scale(1)",
          }}
        />
        
        <IconComponent
          size={40}
          style={{
            color: isHovered ? "#FFFFFF" : feature.color,
            transition: "color 0.5s ease",
          }}
          className="relative z-10"
        />
      </div>

      {/* Titre */}
      <h3
        className="text-xl font-bold mb-4 transition-all duration-500"
        style={{
          color: isHovered ? feature.color : "#0B0F19",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed transition-all duration-500"
        style={{
          color: "#0B0F19",
          opacity: isVisible ? 0.75 : 0,
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      >
        {feature.description}
      </p>

      {/* Barre animée en bas */}
      <div
        className="mt-6 h-1 rounded-full transition-all duration-500"
        style={{
          width: isHovered ? "80%" : "0%",
          backgroundColor: feature.color,
        }}
      />
    </div>
  );
};

const WhyChoose: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false)
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
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
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
    <section id="avantages" className="py-24" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Titre principal avec gradient animé */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4 transition-all duration-1000"
          style={{
            color: "#0B0F19",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          Pourquoi choisir Jang Hub Tech ?
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

        {/* Grille des features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={visibleCards[index]}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* Élément décoratif en bas */}
        <div className="mt-16 flex justify-center gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full transition-all duration-700"
              style={{
                backgroundColor: visibleCards[index] ? feature.color : "#E4E2DD",
                transform: visibleCards[index] ? "scale(1)" : "scale(0.5)",
                transitionDelay: `${index * 150}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;