import type { Metadata } from "next";
import { Shield, Award, Heart, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns - ATIYE Beauty Studio | Laser-Haarentfernung",
  description: "Lernen Sie ATIYE Beauty Studio kennen. NiSV-zertifiziertes Studio für professionelle Laser-Haarentfernung mit modernster Technologie.",
  keywords: "Über uns, ATIYE Beauty Studio, NiSV, Zertifizierung, Team, Philosophie",
};

const team = [
  {
    name: "Atiye Kibar",
    role: "Inhaberin & Laser-Spezialistin",
    description: "Zertifizierte Laser-Therapeutin mit über 5 Jahren Erfahrung in der dauerhaften Haarentfernung.",
    qualifications: ["NiSV-Zertifizierung", "Dermatologie-Fortbildung", "Kundenberatung"],
  },
  {
    name: "Dr. Sarah Weber",
    role: "Medizinische Beratung",
    description: "Fachärztin für Dermatologie mit Spezialisierung auf kosmetische Behandlungen.",
    qualifications: ["Fachärztin Dermatologie", "Laser-Medizin", "Ästhetische Medizin"],
  },
];

const certifications = [
  {
    name: "NiSV-Zertifizierung",
    description: "Zertifiziert nach den höchsten Sicherheitsstandards für Laserbehandlungen",
    icon: Shield,
  },
  {
    name: "Qualitätssiegel",
    description: "Regelmäßige Qualitätskontrollen und Weiterbildungen",
    icon: Award,
  },
  {
    name: "Kundenzufriedenheit",
    description: "Über 500 zufriedene Kunden und 98% Weiterempfehlungsrate",
    icon: Heart,
  },
];

const values = [
  {
    title: "Vertrauen & Sicherheit",
    description: "Wir setzen auf höchste Sicherheitsstandards und transparente Kommunikation. Jede Behandlung wird individuell geplant und sorgfältig durchgeführt.",
  },
  {
    title: "Individuelle Beratung",
    description: "Jeder Kunde ist einzigartig. Wir nehmen uns Zeit für eine ausführliche Beratung und entwickeln maßgeschneiderte Behandlungspläne.",
  },
  {
    title: "Moderne Technologie",
    description: "Wir investieren kontinuierlich in die neueste Laser-Technologie, um Ihnen die bestmöglichen Ergebnisse zu bieten.",
  },
  {
    title: "Nachhaltige Ergebnisse",
    description: "Unser Ziel sind dauerhaft schöne Ergebnisse, die Sie langfristig zufriedenstellen und Ihr Wohlbefinden steigern.",
  },
];

export default function UeberUnsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-cream to-brand-sand">
        <div className="absolute inset-0 wave-bg opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-6xl">
              Über uns
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Ihr vertrauensvoller Partner für dauerhaft schöne Haut
            </p>
          </div>
        </div>
      </div>

      {/* Studio Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
                  Unsere Geschichte
                </h2>
                <p className="mt-6 text-lg leading-8 text-brand-brown-600">
                  ATIYE Beauty Studio wurde 2019 mit der Vision gegründet, Menschen dabei zu helfen, 
                  sich in ihrer Haut wohlzufühlen. Was als kleiner Traum begann, ist heute ein 
                  etabliertes Studio für professionelle Laser-Haarentfernung.
                </p>
                <p className="mt-6 text-lg leading-8 text-brand-brown-600">
                  Unser Name &quot;ATIYE&quot; bedeutet &quot;Geschenk&quot; - und genau das möchten wir Ihnen geben: 
                  Das Geschenk dauerhaft schöner, glatter Haut ohne lästige Haarentfernung.
                </p>
                <div className="mt-8 flex items-center gap-x-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-bronze" />
                    <span className="text-sm text-brand-brown-600">Musterstadt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-bronze" />
                    <span className="text-sm text-brand-brown-600">Seit 2019</span>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0">
                <div className="bg-brand-sand rounded-lg p-8">
                  <h3 className="text-xl font-serif font-semibold text-brand-brown-700 mb-4">
                    Unsere Mission
                  </h3>
                  <p className="text-brand-brown-600 mb-6">
                    &quot;Dauerhaft schön&quot; - das ist nicht nur unser Slogan, sondern unsere Verpflichtung. 
                    Wir möchten, dass Sie sich in Ihrem Körper wohlfühlen und das Selbstbewusstsein 
                    haben, das Sie verdienen.
                  </p>
                  <h4 className="text-lg font-semibold text-brand-brown-700 mb-2">
                    Was uns antreibt:
                  </h4>
                  <ul className="space-y-2 text-brand-brown-600">
                    <li>• Höchste Qualität und Sicherheit</li>
                    <li>• Individuelle Betreuung jedes Kunden</li>
                    <li>• Kontinuierliche Weiterbildung</li>
                    <li>• Transparente und faire Preise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Unser Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Erfahrene Fachkräfte für Ihre Sicherheit und Zufriedenheit
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-brand-brown-700">
                  {person.name}
                </h3>
                <p className="mt-2 text-brand-bronze font-medium">
                  {person.role}
                </p>
                <p className="mt-4 text-brand-brown-600">
                  {person.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-brand-brown-700 mb-2">
                    Qualifikationen:
                  </h4>
                  <ul className="space-y-1">
                    {person.qualifications.map((qual) => (
                      <li key={qual} className="text-sm text-brand-brown-600 flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-bronze" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Zertifizierungen & Qualität
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                    <cert.icon className="h-5 w-5 flex-none text-brand-bronze" />
                    {cert.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                    <p className="flex-auto">{cert.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Unsere Werte
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Die Prinzipien, die unser Handeln leiten
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-brand-brown-700">
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-brown-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Vereinbaren Sie einen kostenlosen Beratungstermin und erleben Sie unsere 
              professionelle und herzliche Betreuung.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/termin"
                className="rounded-md bg-brand-bronze px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-brown-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bronze"
              >
                Beratungstermin vereinbaren
              </a>
              <a
                href="/kontakt"
                className="text-base font-semibold leading-6 text-white hover:text-brand-bronze"
              >
                Kontakt aufnehmen <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
