import type { Metadata } from "next";
import { Zap, Users, Shield } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Leistungen - Laser-Haarentfernung | ATIYE Beauty Studio",
  description: "Professionelle Laser-Haarentfernung für Frauen und Männer. Moderne Diodenlaser-Technologie, alle Körperzonen, NiSV-zertifiziert.",
  keywords: "Laser Haarentfernung, Diodenlaser, Frauen, Männer, Körperzonen, NiSV",
};

const treatmentZones = {
  women: [
    { name: "Gesicht", areas: ["Oberlippe", "Kinn", "Wangen", "Stirn"] },
    { name: "Achseln", areas: ["Beide Achseln"] },
    { name: "Arme", areas: ["Oberarme", "Unterarme", "Handrücken"] },
    { name: "Beine", areas: ["Oberschenkel", "Unterschenkel", "Kniekehlen"] },
    { name: "Bikinizone", areas: ["Bikini klassisch", "Bikini intim", "Brazilian"] },
    { name: "Rücken", areas: ["Schultern", "Mittlerer Rücken", "Unterer Rücken"] },
  ],
  men: [
    { name: "Gesicht", areas: ["Bartbereich", "Hals", "Nacken"] },
    { name: "Brust", areas: ["Brustwarzen", "Brustbereich"] },
    { name: "Rücken", areas: ["Schultern", "Mittlerer Rücken", "Unterer Rücken"] },
    { name: "Arme", areas: ["Oberarme", "Unterarme", "Handrücken"] },
    { name: "Beine", areas: ["Oberschenkel", "Unterschenkel"] },
    { name: "Intimbereich", areas: ["Intimbereich"] },
  ],
};

const processSteps = [
  {
    step: 1,
    title: "Beratung & Hautanalyse",
    description: "Ausführliche Beratung und Analyse Ihres Haut- und Haartyps für die optimale Behandlungseinstellung.",
  },
  {
    step: 2,
    title: "Vorbereitung",
    description: "Rasieren der zu behandelnden Bereiche und Reinigung der Haut für beste Ergebnisse.",
  },
  {
    step: 3,
    title: "Laserbehandlung",
    description: "Präzise Behandlung mit modernster Diodenlaser-Technologie - schnell und schonend.",
  },
  {
    step: 4,
    title: "Nachsorge",
    description: "Beratung zur optimalen Nachsorge und Terminplanung für weitere Sitzungen.",
  },
];

export default function LeistungenPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-cream to-brand-sand">
        <div className="absolute inset-0 wave-bg opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-6xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Professionelle Laser-Haarentfernung mit modernster Technologie
            </p>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Moderne Diodenlaser-Technologie
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Unser hochmoderner Diodenlaser arbeitet präzise und schonend für optimale Ergebnisse bei allen Haut- und Haartypen.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                  <Zap className="h-5 w-5 flex-none text-brand-bronze" />
                  Präzise Energieabgabe
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">Gezielte Zerstörung der Haarwurzel ohne Schädigung der umgebenden Haut.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                  <Users className="h-5 w-5 flex-none text-brand-bronze" />
                  Für alle Hauttypen
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">Anpassbare Einstellungen für helle bis dunkle Hauttöne und verschiedene Haarfarben.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                  <Shield className="h-5 w-5 flex-none text-brand-bronze" />
                  Sicher & schonend
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">NiSV-zertifizierte Behandlung mit minimalen Nebenwirkungen und schneller Heilung.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Treatment Zones */}
      <section className="bg-brand-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Behandlungszonen
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Wir behandeln alle Körperzonen für Frauen und Männer
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Women */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-brand-bronze" />
                Für Frauen
              </h3>
              <div className="space-y-4">
                {treatmentZones.women.map((zone) => (
                  <div key={zone.name} className="border-l-4 border-brand-bronze pl-4">
                    <h4 className="font-semibold text-brand-brown-700">{zone.name}</h4>
                    <p className="text-sm text-brand-brown-600">{zone.areas.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Men */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-brand-bronze" />
                Für Männer
              </h3>
              <div className="space-y-4">
                {treatmentZones.men.map((zone) => (
                  <div key={zone.name} className="border-l-4 border-brand-bronze pl-4">
                    <h4 className="font-semibold text-brand-brown-700">{zone.name}</h4>
                    <p className="text-sm text-brand-brown-600">{zone.areas.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Ablauf einer Behandlung
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Von der Beratung bis zur Nachsorge - so läuft Ihre Behandlung ab
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-bronze text-white font-bold">
                      {step.step}
                    </div>
                    {step.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                    <p className="flex-auto">{step.description}</p>
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
              Bereit für dauerhaft schöne Haut?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/termin"
                className="rounded-md bg-brand-bronze px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-brown-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bronze"
              >
                Termin vereinbaren
              </a>
              <a
                href="/preise"
                className="text-base font-semibold leading-6 text-white hover:text-brand-bronze"
              >
                Preise ansehen <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
