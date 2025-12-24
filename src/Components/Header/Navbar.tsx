import React, { useState } from "react";

const menuItems = [
  { label: "Accueil", href: "#acceuil" },
  { label: "Formations", href: "#formations" },
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#avantages" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl flex items-center justify-between gap-3 px-10 py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/icone.jpg"
              alt="Jang Hub Tech"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-[#0B0F19]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative transition-colors duration-300 ${
                  active === item.label
                    ? "text-[#0099CC] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-[#0099CC]"
                    : "hover:text-[#0099CC] hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-[#0099CC]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className="w-8 bold h-[4px] transition"
              style={{ backgroundColor: open ? "#00C48C" : "#0099CC" }}
            />
            <span
              className="w-8 bold h-[4px] transition"
              style={{ backgroundColor: open ? "#00C48C" : "#0099CC" }}
            />
            <span
              className="w-8 bold h-[4px] transition"
              style={{ backgroundColor: open ? "#00C48C" : "#0099CC" }}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="md:hidden px-6 py-6 space-y-4"
          style={{ backgroundColor: "#E4E2DD" }}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.label);
                setOpen(false);
              }}
              className={`block font-medium transition-colors duration-300 ${
                active === item.label
                  ? "text-[#0099CC] border-l-4 border-[#0099CC] pl-2"
                  : "text-[#0B0F19] hover:text-[#0099CC] hover:border-l-4 hover:border-[#0099CC] hover:pl-2"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
