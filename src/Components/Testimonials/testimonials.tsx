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
    name: "Sarah Dubois",
    role: "Développeuse Web Junior",
    avatar: "/images/Testimonials/avatar2.png",
  },
  {
    quote:
      "La section Design Graphique est très complète. Les projets m'ont permis de construire un portfolio solide.",
    name: "Marc Laurent",
    role: "Designer UI/UX",
    avatar: "/images/Testimonials/avatar1.png",
  },
  {
    quote:
      "Grâce au bootcamp Bureautique, j'ai optimisé ma productivité. Les formateurs sont très à l'écoute.",
    name: "Fatima Zahra",
    role: "Assistante Administrative",
    avatar: "/images/Testimonials/avatar3.png",
  },
  {
    quote:
      "Le programme Cloud Computing m'a permis de décrocher un poste de DevOps Engineer.",
    name: "Amadou Diallo",
    role: "DevOps Engineer",
    avatar: "/images/Testimonials/avatar1.png",
  },
  {
    quote:
      "Formation Marketing Digital exceptionnelle. Mon trafic web a triplé en 3 mois.",
    name: "Aissatou Seck",
    role: "Digital Marketing Manager",
    avatar: "/images/Testimonials/avatar2.png",
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
      className="
        flex-shrink-0 w-full
        md:w-[calc(50%-1rem)]
        lg:w-[calc(33.333%-1rem)]
        px-2 sm:px-4
        transition-all duration-700
      "
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
        className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all"
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
        <p className="text-sm sm:text-base italic leading-relaxed opacity-75 mb-6">
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
        <div className="flex items-center gap-3 sm:gap-4 mt-auto">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden"
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
              className="font-bold text-sm sm:text-base"
              style={{ color: isActive ? "#00C48C" : "#0B0F19" }}
            >
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-sm opacity-60">
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
  const [visibleCards, setVisibleCards] = useState(3);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /* Responsive cards count */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
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

  return (
    <section
      id="temoignages"
      className="py-20 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F5F1, #E1F4F8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-4 transition-all duration-1000"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(-20px)",
            color: "#0B0F19",
          }}
        >
          Ce que nos étudiants disent de nous
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

        {/* Slider */}
        <div className="relative" ref={cardsRef}>
          {/* Arrows (desktop only) */}
          <button title="precedente"
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#00C48C] transition"
          >
            <ChevronLeft />
          </button>

          <button title="suivante"
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#00C48C] transition"
          >
            <ChevronRight />
          </button>

          {/* Cards */}
          <div className="mx-0 sm:mx-10 md:mx-16 overflow-hidden">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  testimonial={t}
                  isActive={i >= currentIndex && i < currentIndex + visibleCards}
                  isVisible={cardsVisible}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {Array.from({
            length: Math.ceil(testimonials.length / visibleCards),
          }).map((_, i) => (
            <button title="suivante"
              key={i}
              onClick={() => setCurrentIndex(i * visibleCards)}
              className="rounded-full transition-all"
              style={{
                width:
                  Math.floor(currentIndex / visibleCards) === i
                    ? "28px"
                    : "10px",
                height: "10px",
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
