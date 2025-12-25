import React, { useEffect, useRef, useState } from "react";

// Types
interface Formation {
  title: string;
  image: string;
  points: string[];
  description: string;
  duration: string;
  level: string;
  price: string;
}

// Data
const formations: Formation[] = [
  {
    title: "Développement Web Fullstack",
    image: "images/Formations/DevFull.png",
    points: [
      "HTML, CSS, JavaScript avancés",
      "Frameworks React & Node.js",
      "Bases de données relationnelles",
      "Déploiement et CI/CD",
    ],
    description:
      "Devenez un développeur web complet capable de créer des applications modernes de bout en bout. Cette formation couvre tous les aspects du développement web, du front-end au back-end.",
    duration: "6 mois",
    level: "Débutant à Intermédiaire",
    price: "150 000 FCFA",
  },
  {
    title: "Design Graphique & UI/UX",
    image: "images/Formations/Design.png",
    points: [
      "Principes du design visuel",
      "Figma, Adobe XD & Photoshop",
      "Recherche UX (User Experience)",
      "Prototypage et tests utilisateurs",
    ],
    description:
      "Maîtrisez les outils professionnels de design et créez des interfaces utilisateur intuitives et esthétiques. Apprenez à concevoir des expériences utilisateur mémorables.",
    duration: "4 mois",
    level: "Tous niveaux",
    price: "120 000 FCFA",
  },
  {
    title: "Maîtrise de la Bureautique",
    image: "images/Formations/Bureautique.png",
    points: [
      "Microsoft Office 365 (Word, Excel, PowerPoint)",
      "Gestion de projet (Asana, Trello)",
      "Communication professionnelle",
      "Optimisation de productivité",
    ],
    description:
      "Développez vos compétences en bureautique et augmentez votre productivité professionnelle. Formation pratique axée sur les outils utilisés en entreprise.",
    duration: "2 mois",
    level: "Débutant",
    price: "80 000 FCFA",
  },
  {
    title: "Marketing Digital",
    image: "images/Formations/MarkDigital.png",
    points: [
      "SEO (Search Engine Optimization)",
      "Publicité en ligne (Google Ads, Social Media)",
      "Analyse de données (Analytics)",
      "Stratégie de contenu",
    ],
    description:
      "Apprenez à promouvoir efficacement votre entreprise en ligne. Maîtrisez les stratégies de marketing digital pour générer du trafic et des conversions.",
    duration: "3 mois",
    level: "Intermédiaire",
    price: "100 000 FCFA",
  },
  {
    title: "Intelligence Artificielle",
    image: "images/Formations/IA.png",
    points: [
      "Apprentissage automatique (Machine Learning)",
      "Modèles prédictifs et génératifs",
      "Projets pratiques et cas d'usage",
      "Éthique de l'IA et déploiement",
    ],
    description:
      "Plongez dans le monde de l'IA et du Machine Learning. Créez vos propres modèles d'IA et comprenez les enjeux éthiques de cette technologie révolutionnaire.",
    duration: "5 mois",
    level: "Avancé",
    price: "180 000 FCFA",
  },
  {
    title: "Cloud Computing",
    image: "images/Formations/CloudComp.png",
    points: [
      "Fondamentaux AWS/GCP",
      "Déploiement d'applications cloud",
      "Infrastructure as Code (IaC)",
      "Sécurité et scalabilité cloud",
    ],
    description:
      "Maîtrisez les plateformes cloud AWS et GCP. Apprenez à déployer, gérer et sécuriser des infrastructures cloud professionnelles et évolutives.",
    duration: "4 mois",
    level: "Intermédiaire à Avancé",
    price: "140 000 FCFA",
  },
];

// Composant: Carte de formation
interface FormationCardProps {
  formation: Formation;
  isVisible: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
  onClick: () => void;
}

const FormationCard: React.FC<FormationCardProps> = ({
  formation,
  isVisible,
  cardRef,
  onClick,
}) => {
  return (
    <div
      ref={cardRef}
      className="rounded-2xl overflow-hidden shadow-sm transition-all duration-700 cursor-pointer"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E2DD",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(50px) scale(0.9)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 196, 140, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "";
      }}>
      {/* Image avec overlay */}
      <div className="h-52 w-full overflow-hidden relative">
        <img
          src={formation.image}
          alt={formation.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15) rotate(2deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 196, 140, 0.3), transparent)",
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0";
          }}
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-4 transition-colors duration-300"
          style={{ color: "#0B0F19" }}>
          {formation.title}
        </h3>

        <ul className="space-y-2 mb-6">
          {formation.points.map((point, i) => (
            <li
              key={i}
              className="text-sm transition-all duration-500"
              style={{
                color: "#0B0F19",
                opacity: isVisible ? 0.8 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: `${i * 100 + 200}ms`,
              }}>
              <span className="inline-block mr-2 transition-transform duration-300 hover:scale-150 hover:text-[#00C48C]">
                •
              </span>
              {point}
            </li>
          ))}
        </ul>

        <button
          title="en savoir plus"
          className="w-full py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden"
          style={{
            backgroundColor: "#00C48C",
            color: "#FFFFFF",
          }}
          onClick={onClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0099CC";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(0, 153, 204, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#00C48C";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "";
          }}>
          <span className="relative z-10 inline-block transition-transform duration-300 hover:scale-110">
            En savoir plus
          </span>
          <div
            className="absolute inset-0 bg-white/20 transform -translate-x-full transition-transform duration-700"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

// Composant: Modal de détails
interface FormationModalProps {
  formation: Formation;
  onClose: () => void;
}

const FormationModal: React.FC<FormationModalProps> = ({
  formation,
  onClose,
}) => {
  // ---------------- Action WhatsApp ----------------
  const handleWhatsAppInscription = () => {
    const message = `Bonjour, je souhaite m'inscrire à la formation "${formation.title}". Pourriez-vous me donner plus d'informations ?`;
    const phoneNumber = "221123456789"; // Remplacez par votre numéro WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDownloadPNG = (formation: Formation) => {
    const canvas = document.createElement("canvas");
    canvas.width = 595; // A4 width en px
    canvas.height = 842; // A4 height en px
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---------------- Fond blanc ----------------
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ---------------- En-tête avec dégradé ----------------
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 80);
    gradient.addColorStop(0, "#00C48C");
    gradient.addColorStop(1, "#0099CC");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 80);

    // ---------------- Logo centré ----------------
    const logo = new Image();
    logo.src = "images/logo.jpg";
    logo.onload = () => {
      const logoWidth = 100;
      const logoHeight = 60;
      const logoX = (canvas.width - logoWidth) / 2;
      const logoY = 10;
      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

      // ---------------- Titre avec marges ----------------
      const titleTopMargin = 50; // marge au-dessus du titre
      const titleBottomMargin = 75; // marge en dessous du titre
      const titleY = logoY + logoHeight + titleTopMargin;

      ctx.fillStyle = "#00000";
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("PROGRAMME DE FORMATION", canvas.width / 2, titleY);

      // ---------------- Nom de la formation ----------------
      ctx.fillStyle = "#0B0F19";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "left";
      const maxWidth = 520;
      const words = formation.title.split(" ");
      let line = "";
      let y = titleY + titleBottomMargin; // y pour le contenu suivant

      words.forEach((word) => {
        const testLine = line + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line !== "") {
          ctx.fillText(line, 40, y);
          line = word + " ";
          y += 30;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, 40, y);
      y += 40;

      // ---------------- Ligne de séparation ----------------
      ctx.strokeStyle = "#E4E2DD";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(555, y);
      ctx.stroke();
      y += 30;

      // ---------------- Description ----------------
      ctx.fillStyle = "#00C48C";
      ctx.font = "bold 16px Arial";
      ctx.fillText("DESCRIPTION", 40, y);
      y += 25;

      ctx.fillStyle = "#0B0F19";
      ctx.font = "14px Arial";
      const descWords = formation.description.split(" ");
      line = "";
      descWords.forEach((word) => {
        const testLine = line + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line !== "") {
          ctx.fillText(line, 40, y);
          line = word + " ";
          y += 20;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, 40, y);
      y += 35;

      // ---------------- Informations clés ----------------
      const boxY = y;
      const boxWidth = 165;
      const boxHeight = 60;
      const boxSpacing = 10;

      const infoBoxes = [
        { label: "DURÉE", value: formation.duration },
        { label: "NIVEAU", value: formation.level },
        { label: "TARIF", value: formation.price },
      ];

      infoBoxes.forEach((box, i) => {
        const x = 40 + (boxWidth + boxSpacing) * i;
        ctx.fillStyle = "#F8F9FA";
        ctx.fillRect(x, boxY, boxWidth, boxHeight);
        ctx.strokeStyle = "#E4E2DD";
        ctx.strokeRect(x, boxY, boxWidth, boxHeight);

        ctx.fillStyle = "#00C48C";
        ctx.font = "bold 12px Arial";
        ctx.fillText(box.label, x + 10, boxY + 20);

        ctx.fillStyle = "#0B0F19";
        ctx.font = "bold 14px Arial";
        ctx.fillText(box.value, x + 10, boxY + 45);
      });

      y = boxY + boxHeight + 35;

      // ---------------- Programme détaillé ----------------
      ctx.fillStyle = "#00C48C";
      ctx.font = "bold 16px Arial";
      ctx.fillText("PROGRAMME DÉTAILLÉ", 40, y);
      y += 25;

      formation.points.forEach((point) => {
        ctx.fillStyle = "#00C48C";
        ctx.font = "bold 16px Arial";
        ctx.fillText("✓", 40, y);

        ctx.fillStyle = "#0B0F19";
        ctx.font = "14px Arial";

        const pointWords = point.split(" ");
        line = "";
        let startX = 65;
        pointWords.forEach((word) => {
          const testLine = line + word + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth - 25 && line !== "") {
            ctx.fillText(line, startX, y);
            line = word + " ";
            y += 20;
            startX = 65;
          } else {
            line = testLine;
          }
        });
        ctx.fillText(line, startX, y);
        y += 28;
      });

      // ---------------- Pied de page ----------------
      const footerY = canvas.height - 40;
      ctx.fillStyle = "#E4E2DD";
      ctx.fillRect(0, footerY - 10, canvas.width, 1);

      ctx.fillStyle = "#0B0F19";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Pour plus d'informations, contactez-nous via WhatsApp",
        canvas.width / 2,
        footerY + 20
      );

      // ---------------- Télécharger le PNG ----------------
      canvas.toBlob((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `Programme_${formation.title.replace(
            /\s+/g,
            "_"
          )}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }
      });
    };
  };

  // ---------------- Rendu modal ----------------
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(11, 15, 25, 0.8)",
        backdropFilter: "blur(5px)",
      }}
      onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        {/* En-tête */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={formation.image}
            alt={formation.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0, 196, 140, 0.5))",
            }}
          />
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:scale-110"
            onClick={onClose}
            style={{ color: "#0B0F19" }}>
            ✕
          </button>
        </div>

        {/* Contenu */}
        <div className="p-8">
          <h3
            className="text-3xl font-extrabold mb-4"
            style={{ color: "#0B0F19" }}>
            {formation.title}
          </h3>
          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "#0B0F19", opacity: 0.8 }}>
            {formation.description}
          </p>

          {/* Infos clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {["DURÉE", "NIVEAU", "TARIF"].map((label, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #E4E2DD",
                }}>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: "#00C48C" }}>
                  {label}
                </p>
                <p className="text-sm font-bold" style={{ color: "#0B0F19" }}>
                  {label === "DURÉE"
                    ? formation.duration
                    : label === "NIVEAU"
                    ? formation.level
                    : formation.price}
                </p>
              </div>
            ))}
          </div>

          {/* Programme */}
          <h4 className="text-lg font-bold mb-4" style={{ color: "#0B0F19" }}>
            Programme de la formation
          </h4>
          <ul className="space-y-3 mb-8">
            {formation.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm"
                style={{ color: "#0B0F19", opacity: 0.8 }}>
                <span
                  className="inline-block mt-1 text-lg"
                  style={{ color: "#00C48C" }}>
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{ backgroundColor: "#00C48C", color: "#FFFFFF" }}
              onClick={handleWhatsAppInscription}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0099CC";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 153, 204, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00C48C";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}>
              S'inscrire via WhatsApp
            </button>

            <button
              className="flex-1 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                color: "#00C48C",
                border: "2px solid #00C48C",
              }}
              onClick={() => handleDownloadPNG(formation)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F8F9FA";
                e.currentTarget.style.borderColor = "#0099CC";
                e.currentTarget.style.color = "#0099CC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "#00C48C";
                e.currentTarget.style.color = "#00C48C";
              }}>
              Télécharger le programme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal
const Formations: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(formations.length).fill(false)
  );
  const [titleVisible, setTitleVisible] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState<number | null>(
    null
  );
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
    <section
      id="formations"
      className="py-24"
      style={{ backgroundColor: "#FFFFFF" }}>
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
          Nos Formations Phares
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

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {formations.map((formation, index) => (
            <FormationCard
              key={index}
              formation={formation}
              isVisible={visibleCards[index]}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => setSelectedFormation(index)}
            />
          ))}
        </div>

        {/* Modal de détails */}
        {selectedFormation !== null && (
          <FormationModal
            formation={formations[selectedFormation]}
            onClose={() => setSelectedFormation(null)}
          />
        )}
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Formations;
