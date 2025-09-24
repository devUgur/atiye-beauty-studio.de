import React from "react";
import { Shield, Zap, Users, Euro, UserCheck, Clock } from "lucide-react";

const features = [
  {
    name: "NiSV-zertifiziert",
    description: "Zertifizierte Qualität und Sicherheit nach höchsten Standards",
    icon: Shield,
  },
  {
    name: "Moderne Laser-Technologie",
    description: "Aktuelle Diodenlaser für optimale Ergebnisse bei allen Hauttypen",
    icon: Zap,
  },
  {
    name: "Für Frauen & Männer",
    description: "Spezialisierte Behandlungen für alle Geschlechter und Körperzonen",
    icon: Users,
  },
  {
    name: "Transparente Preise",
    description: "Klare Preisstruktur ohne versteckte Kosten - faire Paketpreise",
    icon: Euro,
  },
  {
    name: "Individuelle Beratung",
    description: "Persönliche Beratung und maßgeschneiderte Behandlungspläne",
    icon: UserCheck,
  },
  {
    name: "Schnelle Behandlungen",
    description: "Effiziente Sitzungen mit minimaler Ausfallzeit",
    icon: Clock,
  },
];

export default function USPSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
            Warum ATIYE Beauty Studio?
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-brown-600">
            Vertrauen Sie auf unsere Expertise und modernste Technologie für dauerhaft schöne Ergebnisse.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-brown-700">
                  <feature.icon className="h-5 w-5 flex-none text-brand-bronze" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
