import React, { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

const StatItem: React.FC<StatProps> = ({
  value,
  suffix = "",
  label,
  duration = 2000,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, value, duration]);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col items-center text-center transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-pointer group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
      <div className="relative">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black transition-all duration-300 group-hover:text-white">
          {count}
          {suffix}
        </h2>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300"></div>
      </div>
      <p className="mt-3 text-base md:text-lg text-black font-medium max-w-xs transition-all duration-300 group-hover:text-white group-hover:font-semibold">
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0099CC, #00C48C)",
      }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Ligne du haut */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem
            value={95}
            suffix="%"
            label="Taux d'emploi après formation"
            delay={0}
          />
          <StatItem
            value={800}
            suffix="+"
            label="Heures de pratique par bootcamp"
            delay={150}
          />
          <StatItem
            value={1500}
            suffix="+"
            label="Étudiants formés avec succès"
            delay={300}
          />
        </div>

        {/* Note moyenne */}
        <div className="mt-16 flex justify-center">
          <StatItem
            value={4.9}
            suffix="/5"
            label="Note moyenne des formations"
            delay={450}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
