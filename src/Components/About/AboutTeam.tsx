import { Lightbulb, Linkedin, Mail, Target, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Amadou Deme",
    role: "COE | Full Stack Developer & Technical Mentor",
    image: "images/Teams/Fundater.png",
    linkedin: "#",
    email: "fondateur@janghubtech.com",
  },
  {
    name: "Seynabou Bader Loum",
    role: "Responsable Marketing & Communication",
    image: "images/Teams/RMC.png",
    linkedin: "#",
    email: "marketing@janghubtech.com",
  },
  {
    name: "Sokhna Faty D Faye",
    role: "Responsable Administration & Finances",
    image: "images/Teams/RARH.png",
    linkedin: "#",
    email: "admin@janghubtech.com",
  },
  {
    name: "Abdoulaye Ndiaye",
    role: "IT Systems Engineer | Lead Developer & CTO ",
    image: "images/Teams/Ing_SysInf.jpeg",
    linkedin: "#",
    email: "ingenieur@janghubtech.com",
  },
  {
    name: "Leila Rahim Diop",
    role: "Chargée de la coordination pédagogique",
    image: "images/Teams/LRD.jpeg",
    linkedin: "#",
    email: "ingenieur@janghubtech.com",
  },
  {
    name: "Abdou Khadre D Diouf",
    role: "Bio-Informatics Engineer | Responsable Formation",
    image: "images/Teams/",
    linkedin: "#",
    email: "biotech@janghubtech.com",
  },
];

const AboutTeam: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    mission: false,
    team: false,
  });
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(team.length).fill(false)
  );

  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) {
              setVisibleSections((prev) => ({ ...prev, about: true }));
            } else if (entry.target === missionRef.current) {
              setVisibleSections((prev) => ({ ...prev, mission: true }));
            } else if (entry.target === teamRef.current) {
              setVisibleSections((prev) => ({ ...prev, team: true }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    // Observer pour les cartes de l'équipe
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
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Section À Propos */}
      <section
        id="about"
        className="py-24"
        style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={aboutRef}
            className="transition-all duration-1000"
            style={{
              opacity: visibleSections.about ? 1 : 0,
              transform: visibleSections.about
                ? "translateY(0)"
                : "translateY(50px)",
            }}>
            {/* Titre */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-4"
                style={{ color: "#0B0F19" }}>
                À Propos de Jang Hub Tech
              </h2>
              <div className="flex justify-center">
                <div
                  className="h-1 w-24 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00C48C, #0099CC)",
                  }}
                />
              </div>
            </div>

            {/* Contenu principal */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
              {/* Image/Illustration */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#F8F9FA",
                  minHeight: "400px",
                }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#0099CC",
                      opacity: 0.1,
                    }}>
                    <Users size={64} style={{ color: "#0099CC" }} />
                  </div>
                </div>
                <img
                  src="images/Teams/about.png"
                  alt="Équipe Jang Hub Tech"
                  className="w-150 h-100 object-cover"
                />
              </div>

              {/* Texte */}
              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.8 }}>
                  Le Sénégal traverse une transformation numérique sans
                  précédent, mais cette révolution exclut une grande partie de
                  sa jeunesse talentueuse. Les entreprises cherchent des profils
                  Tech, les jeunes diplômés cherchent des opportunités, mais le
                  pont entre les deux reste fragile.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.8 }}>
                  <strong style={{ color: "#0099CC" }}>Jang Hub Tech</strong>{" "}
                  naît de ce constat : l'avenir est numérique, mais l'accès aux
                  compétences pour le construire reste un privilège. Notre
                  mission est claire : démocratiser la formation Tech au
                  Sénégal.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.8 }}>
                  Nous avons créé un modèle hybride unique qui combine une
                  plateforme 100% en ligne avec un ancrage local fort à Mbour.
                  Le meilleur des deux mondes : la flexibilité du digital avec
                  l'accompagnement humain qui fait vraiment la différence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission & Valeurs */}
      <section className="py-24" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={missionRef}
            className="transition-all duration-1000"
            style={{
              opacity: visibleSections.mission ? 1 : 0,
              transform: visibleSections.mission
                ? "translateY(0)"
                : "translateY(50px)",
            }}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                className="rounded-2xl p-8 transition-all duration-500"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #E4E2DD",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = "#00C48C";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 196, 140, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#E4E2DD";
                  e.currentTarget.style.boxShadow = "";
                }}>
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#00C48C" }}>
                  <Target size={32} style={{ color: "#FFFFFF" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0B0F19" }}>
                  Notre Mission
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.7 }}>
                  Rendre les compétences numériques accessibles à tous, en
                  formant la nouvelle génération de talents Tech dont le Sénégal
                  a besoin pour construire son avenir digital.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-2xl p-8 transition-all duration-500"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #E4E2DD",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = "#0099CC";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 153, 204, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#E4E2DD";
                  e.currentTarget.style.boxShadow = "";
                }}>
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#0099CC" }}>
                  <Lightbulb size={32} style={{ color: "#FFFFFF" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0B0F19" }}>
                  Notre Approche
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.7 }}>
                  Formation hybride alliant théorie solide et pratique immédiate
                  sur projets concrets. Des prix abordables en FCFA, un
                  accompagnement personnalisé et des compétences qui mènent
                  vraiment à l'emploi.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="rounded-2xl p-8 transition-all duration-500"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #E4E2DD",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = "#00C48C";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 196, 140, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#E4E2DD";
                  e.currentTarget.style.boxShadow = "";
                }}>
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#00C48C" }}>
                  <Users size={32} style={{ color: "#FFFFFF" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0B0F19" }}>
                  Notre Impact
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#0B0F19", opacity: 0.7 }}>
                  Nous créons le pont manquant entre les jeunes qui veulent
                  apprendre et les besoins réels de notre économie en mutation.
                  Chaque étudiant formé est un talent qui contribue à bâtir le
                  Sénégal numérique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section
        id="team"
        className="py-24"
        style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={teamRef}
            className="transition-all duration-1000"
            style={{
              opacity: visibleSections.team ? 1 : 0,
              transform: visibleSections.team
                ? "translateY(0)"
                : "translateY(50px)",
            }}>
            {/* Titre */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-4"
                style={{ color: "#0B0F19" }}>
                Notre Équipe
              </h2>
              <div className="flex justify-center mb-6">
                <div
                  className="h-1 w-24 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00C48C, #0099CC)",
                  }}
                />
              </div>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#0B0F19", opacity: 0.7 }}>
                Une équipe passionnée et pluridisciplinaire, unie par la même
                vision : faire du numérique un levier d'opportunités pour la
                jeunesse sénégalaise.
              </p>
            </div>

            {/* Grille d'équipe */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="transition-all duration-700"
                  style={{
                    opacity: visibleCards[index] ? 1 : 0,
                    transform: visibleCards[index]
                      ? "translateY(0) scale(1)"
                      : "translateY(50px) scale(0.95)",
                  }}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E4E2DD",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.borderColor = "#00C48C";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0, 196, 140, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "#E4E2DD";
                      e.currentTarget.style.boxShadow = "";
                    }}>
                    {/* Photo */}
                    <div
                      className="relative overflow-hidden"
                      style={{ paddingTop: "100%" }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                      {/* Overlay avec icônes sociales */}
                      <div
                        className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300"
                        style={{
                          backgroundColor: "rgba(0, 196, 140, 0.9)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}>
                        <a
                          href={member.linkedin}
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300"
                          style={{ backgroundColor: "#FFFFFF" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}>
                          <Linkedin size={24} style={{ color: "#0099CC" }} />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300"
                          style={{ backgroundColor: "#FFFFFF" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}>
                          <Mail size={24} style={{ color: "#0099CC" }} />
                        </a>
                      </div>
                    </div>

                    {/* Informations */}
                    <div className="p-6 text-center">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "#0B0F19" }}>
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#0099CC" }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
