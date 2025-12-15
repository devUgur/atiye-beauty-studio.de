import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-900 dark:bg-black text-stone-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="font-serif text-2xl text-white">ATIYE</span>
          <p className="mt-4 leading-relaxed">
            Dauerhaft schön durch professionelle Laser-Haarentfernung. NISV-zertifiziert für Ihre
            Sicherheit.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Startseite
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Preise
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Rechtliches</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/rechtliches/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/rechtliches/datenschutz"
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                AGB
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Social Media</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/atiye_beautystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-center md:text-left">
        © 2025 Atiye Beauty Studio. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
