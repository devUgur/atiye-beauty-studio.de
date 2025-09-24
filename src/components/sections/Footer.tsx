import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 pt-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              ATIYE Beauty Studio
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Dauerhaft schön durch professionelle Laser-Haarentfernung. 
              NiSV-zertifiziert für Ihre Sicherheit.
            </p>
            <div className="text-sm text-primary-foreground/60">
              NiSV-Zertifikat Nr. DE-12345-2024
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-3">
              <a href="#start" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Startseite
              </a>
              <a href="#leistungen" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Leistungen
              </a>
              <a href="#preise" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Preise
              </a>
              <a href="#faq" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FAQ
              </a>
              <a href="#kontakt" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Leistungen</h4>
            <nav className="space-y-3">
              <div className="text-primary-foreground/80">Laser-Haarentfernung</div>
              <div className="text-primary-foreground/80">Gesicht & Hals</div>
              <div className="text-primary-foreground/80">Körper Damen</div>
              <div className="text-primary-foreground/80">Körper Herren</div>
              <div className="text-primary-foreground/80">Komplett-Pakete</div>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <a
                  href="tel:+4912345678900"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +49 (0) 123 456 78900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <a
                  href="mailto:info@atiye-beauty.de"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@atiye-beauty.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5" />
                <address className="not-italic text-primary-foreground/80">
                  Musterstraße 123<br />
                  12345 Musterstadt
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-primary-foreground/60" />
                <a
                  href="https://instagram.com/atiyebeautystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  @atiyebeautystudio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 ATIYE Beauty Studio. Alle Rechte vorbehalten.
            </div>
            <nav className="flex space-x-6 text-sm">
              <a href="/rechtliches/impressum" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Impressum
              </a>
              <a href="/rechtliches/datenschutz" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Datenschutz
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;