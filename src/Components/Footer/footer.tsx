import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0099CC] to-[#00C48C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jang Hub Tech</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Votre partenaire de confiance pour des solutions innovantes et
              durables.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#acceuil" className="hover:text-white/80 transition">
                  Acceuil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white/80 transition">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#formations"
                  className="hover:text-white/80 transition">
                  Formations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white/80 transition">
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+221 33 XXX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@exemple.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Mbour, Sénégal</span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p className="text-white/90">
            © 2025 Jang Hub Tech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
