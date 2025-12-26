import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

/* ================= DATA ================= */
const testimonials: Testimonial[] = [
  {
    quote:
      "La formation de Jang Hub Tech a complètement transformé ma carrière. Des instructeurs passionnés et un programme très pratique !",
    name: "Serigne A Babou",
    role: "Développeur Web Junior",
    avatar: "images/Testimonials/avatar1.png",
  },
  {
    quote:
      "La section Design Graphique est très complète. Les projets m'ont permis de construire un portfolio solide.",
    name: "Awa Ndiaye",
    role: "Designer UI/UX",
    avatar: "images/Testimonials/avatar2.png",
  },
  {
    quote:
      "Grâce au bootcamp Bureautique, j'ai optimisé ma productivité. Les formateurs sont très à l'écoute.",
    name: "Fatima Zahra",
    role: "Assistante Administrative",
    avatar: "images/Testimonials/avatar3.png",
  },
  {
    quote:
      "Le programme Cloud Computing m'a permis de décrocher un poste de DevOps Engineer.",
    name: "Amadou Diallo",
    role: "DevOps Engineer",
    avatar: "images/Testimonials/avatar1.png",
  },
  {
    quote:
      "Formation Marketing Digital exceptionnelle. Mon trafic web a triplé en 3 mois.",
    name: "Aissatou Seck",
    role: "Digital Marketing Manager",
    avatar: "images/Testimonials/avatar2.png",
  },
];

/* ================= CARD ================= */
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
  isVisible,
}) => {
  return (
    <div
      className="flex-shrink-0 w-full transition-all duration-700"
      style={{
        opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
        transform: isVisible
          ? isActive
            ? "scale(1)"
            : "scale(0.95)"
          : "scale(0.9)",
      }}
    >
      <div
        className="bg-white rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-all mx-2"
        style={{
          border: isActive ? "2px solid #00C48C" : "2px solid #E4E2DD",
          boxShadow: isActive
            ? "0 20px 40px rgba(0,196,140,0.15)"
            : "0 4px 6px rgba(0,0,0,0.05)",
        }}
      >
        {/* Quote */}
        <div
          className="text-5xl sm:text-6xl font-bold mb-4"
          style={{ color: isActive ? "#00C48C" : "#E4E2DD" }}
        >
          "
        </div>

        {/* Text */}
        <p className="text-base sm:text-lg italic leading-relaxed mb-6" style={{ color: "#0B0F19", opacity: 0.75 }}>
          {testimonial.quote}
        </p>

        {/* Divider */}
        <div
          className="h-1 rounded-full mb-6 transition-all"
          style={{
            width: isActive ? "60px" : "40px",
            backgroundColor: isActive ? "#00C48C" : "#0099CC",
          }}
        />

        {/* Profile */}
        <div className="flex items-center gap-4 mt-auto">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: isActive ? "3px solid #00C48C" : "3px solid #E4E2DD",
            }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4
              className="font-bold text-base sm:text-lg"
              style={{ color: isActive ? "#00C48C" : "#0B0F19" }}
            >
              {testimonial.name}
            </h4>
            <p className="text-sm sm:text-base" style={{ color: "#0B0F19", opacity: 0.6 }}>
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /* Responsive cards count */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Scroll animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setTimeout(() => setCardsVisible(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  return (
    <section
      id="temoignages"
      className="py-16 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F5F1, #E1F4F8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 transition-all duration-1000 px-4"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(-20px)",
            color: "#0B0F19",
          }}
        >
          Ce que nos apprenants disent de nous
        </h2>

        {/* Line */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div
            className="h-1 rounded-full transition-all duration-1000"
            style={{
              width: titleVisible ? "100px" : "0",
              background: "linear-gradient(90deg,#00C48C,#0099CC)",
            }}
          />
        </div>

        {/* Slider Container */}
        <div className="relative" ref={cardsRef}>
          {/* Desktop Arrows */}
          <button
            title="Précédente"
            onClick={prev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300"
            style={{ color: "#0B0F19" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0099CC";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#0B0F19";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            title="Suivante"
            onClick={next}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300"
            style={{ color: "#0B0F19" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0099CC";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#0B0F19";
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="lg:mx-16 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >
                  <TestimonialCard
                    testimonial={t}
                    isActive={i >= currentIndex && i < currentIndex + visibleCards}
                    isVisible={cardsVisible}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button
              title="Précédente"
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              style={{ color: "#0B0F19" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00C48C";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#0B0F19";
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              title="Suivante"
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              style={{ color: "#0B0F19" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00C48C";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#0B0F19";
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {Array.from({
            length: Math.ceil(testimonials.length / visibleCards),
          }).map((_, i) => (
            <button
              title={`Page ${i + 1}`}
              key={i}
              onClick={() => setCurrentIndex(Math.min(i * visibleCards, maxIndex))}
              className="rounded-full transition-all duration-300"
              style={{
                width:
                  Math.floor(currentIndex / visibleCards) === i
                    ? "32px"
                    : "12px",
                height: "12px",
                backgroundColor:
                  Math.floor(currentIndex / visibleCards) === i
                    ? "#0099CC"
                    : "#E4E2DD",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;