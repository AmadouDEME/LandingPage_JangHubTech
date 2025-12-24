import React, { useEffect, useRef, useState } from "react";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
];

const HeroBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animation initiale au chargement
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Carrousel automatique
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="acceuil"
      ref={sectionRef}
      style={{ backgroundColor: "#f5f5f5ff" }}
      className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte à gauche */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
          }}>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "#0B0F19" }}>
            <span
              className="inline-block transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
                color: "#00C48C",
              }}>
              JANG
            </span>{" "}
            <span
              className="inline-block transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "400ms",
                color: "#00C48C",
              }}>
              HUB
            </span>
            <br />
            <span
              className="inline-block transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "600ms",
                color: "#0099CC",
              }}>
              TECH
            </span>
          </h1>
          <p
            className="mt-6 max-w-lg transition-all duration-1000"
            style={{
              color: "#0B0F19",
              opacity: isVisible ? 0.75 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "800ms",
            }}>
            Transformez votre avenir avec nos formations technologiques
            immersives et pratiques, conçues pour vous lancer dans le monde
            numérique.
          </p>

          <button
            className="mt-8 px-8 py-4 rounded-lg font-semibold transition-all duration-500 relative overflow-hidden group"
            style={{
              backgroundColor: "#0099CC",
              color: "#FFFFFF",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.9)",
              transitionDelay: "1000ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00C48C";
              e.currentTarget.style.transform = "scale(1.05) translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0, 153, 204, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00C48C";
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}>
            <span className="relative z-10 inline-block transition-transform duration-300">
              S'inscrire Maintenant
            </span>
            {/* Effet de brillance */}
            <div
              className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            {/* Pulse animation */}
            <div
              className="absolute inset-0 rounded-lg animate-pulse-slow"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
          </button>
        </div>

        {/* Carrousel à droite */}
        <div
          className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg transition-all duration-1000"
          style={{
            backgroundColor: "#0099CC",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateX(0) scale(1)"
              : "translateX(50px) scale(0.95)",
            transitionDelay: "400ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow =
              "0 25px 50px rgba(0, 153, 204, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "";
          }}>
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-1000"
              style={{
                opacity: index === current ? 1 : 0,
                transform: index === current ? "scale(1)" : "scale(1.1)",
              }}>
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Indicateurs de pagination */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === current ? "32px" : "12px",
                  height: "12px",
                  backgroundColor:
                    index === current ? "#00C48C" : "rgba(255, 255, 255, 0.5)",
                }}
                onMouseEnter={(e) => {
                  if (index !== current) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.8)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== current) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.5)";
                  }
                }}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 z-10"
            style={{ color: "#0B0F19" }}
            aria-label="Image précédente">
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 z-10"
            style={{ color: "#0B0F19" }}
            aria-label="Image suivante">
            ›
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
