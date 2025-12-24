import React, { useEffect, useState } from "react";

const NewsletterSection: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après le rendu
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-up">
          Restez informé de nos nouveautés !
        </h2>

        {/* Ligne décorative */}
        <div className="flex justify-center mt-4 mb-16">
          <div
            className="h-1 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: titleVisible ? "100px" : "0px",
              background: "linear-gradient(90deg, #00C48C, #0099CC)",
            }}
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed animate-fade-up delay-200">
          Abonnez-vous à notre newsletter pour recevoir les dernières
          informations sur nos formations, événements spéciaux et offres
          exclusives.
        </p>

        {/* Formulaire */}
        <form className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full sm:w-[420px] px-5 py-3 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-[#00C48C]
                       transition-all duration-300"
          />

          <button
            type="submit"
            className="px-8 py-3 rounded-lg font-semibold text-black
                       bg-[#0099CC] hover:bg-[#00C48C]
                       transition-all duration-300 shadow-sm hover:shadow-md"
          >
            S’abonner
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
