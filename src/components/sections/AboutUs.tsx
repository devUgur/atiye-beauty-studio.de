import Image from "next/image";
import { Shield, Award, Heart, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-background" id="ueber-uns">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-me.jpg"
                alt="Atiye Yilmaz - Inhaberin ATIYE Beauty Studio"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Zufriedene Kunden</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Über uns
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Willkommen bei ATIYE Beauty Studio – Ihrem vertrauensvollen Partner für 
                dauerhaft schöne Haut. Als einzigartiges Gewerbe von Atiye Yilmaz bieten wir 
                Ihnen professionelle Laser-Haarentfernung mit höchsten Qualitätsstandards.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mit über 5 Jahren Erfahrung und modernster Technologie sorgen wir dafür, 
                dass Sie sich in Ihrer Haut wohlfühlen. Unser Studio steht für Vertrauen, 
                Sicherheit und nachhaltige Ergebnisse.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    NiSV-zertifiziert
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Höchste Sicherheitsstandards nach deutscher Verordnung
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    Qualitätssiegel
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Regelmäßige Qualitätskontrollen und Weiterbildungen
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    Kundenzufriedenheit
                  </h3>
                  <p className="text-sm text-foreground/70">
                    98% Weiterempfehlungsrate und persönliche Betreuung
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    Individuelle Beratung
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Maßgeschneiderte Behandlungspläne für jeden Hauttyp
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="/ueber-uns" 
                className="inline-flex items-center text-primary hover:text-accent font-medium transition-colors"
              >
                Mehr über uns erfahren
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
