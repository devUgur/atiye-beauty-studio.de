import type { Metadata } from "next";
import { CheckCircle, Star, Phone } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Preise - Laser-Haarentfernung | ATIYE Beauty Studio",
  description: "Transparente Preise für Laser-Haarentfernung. Einzelbehandlungen und Pakete für alle Körperzonen. Kostenlose Erstberatung.",
  keywords: "Laser Haarentfernung Preise, Pakete, Einzelbehandlung, transparente Preise",
};

const priceData = {
  women: [
    { zone: "Oberlippe", single: 25, package: 200, sessions: 8 },
    { zone: "Kinn", single: 30, package: 240, sessions: 8 },
    { zone: "Achseln", single: 35, package: 280, sessions: 8 },
    { zone: "Oberarme", single: 45, package: 360, sessions: 8 },
    { zone: "Unterarme", single: 40, package: 320, sessions: 8 },
    { zone: "Oberschenkel", single: 60, package: 480, sessions: 8 },
    { zone: "Unterschenkel", single: 55, package: 440, sessions: 8 },
    { zone: "Bikini klassisch", single: 45, package: 360, sessions: 8 },
    { zone: "Bikini intim", single: 60, package: 480, sessions: 8 },
    { zone: "Brazilian", single: 70, package: 560, sessions: 8 },
    { zone: "Rücken", single: 80, package: 640, sessions: 8 },
  ],
  men: [
    { zone: "Bartbereich", single: 40, package: 320, sessions: 8 },
    { zone: "Hals", single: 35, package: 280, sessions: 8 },
    { zone: "Brust", single: 50, package: 400, sessions: 8 },
    { zone: "Rücken", single: 80, package: 640, sessions: 8 },
    { zone: "Oberarme", single: 45, package: 360, sessions: 8 },
    { zone: "Unterarme", single: 40, package: 320, sessions: 8 },
    { zone: "Oberschenkel", single: 60, package: 480, sessions: 8 },
    { zone: "Unterschenkel", single: 55, package: 440, sessions: 8 },
    { zone: "Intimbereich", single: 70, package: 560, sessions: 8 },
  ],
};

const packages = [
  {
    name: "Starter-Paket",
    description: "Perfekt für den Einstieg",
    zones: 2,
    price: 500,
    savings: 100,
    popular: false,
    features: [
      "2 Körperzonen Ihrer Wahl",
      "8 Behandlungen pro Zone",
      "Kostenlose Beratung",
      "Nachsorge-Creme",
    ],
  },
  {
    name: "Premium-Paket",
    description: "Unser Bestseller",
    zones: 4,
    price: 900,
    savings: 300,
    popular: true,
    features: [
      "4 Körperzonen Ihrer Wahl",
      "8 Behandlungen pro Zone",
      "Kostenlose Beratung",
      "Nachsorge-Creme",
      "10% Rabatt auf weitere Zonen",
    ],
  },
  {
    name: "Komplett-Paket",
    description: "Für maximale Ergebnisse",
    zones: 6,
    price: 1200,
    savings: 600,
    popular: false,
    features: [
      "6 Körperzonen Ihrer Wahl",
      "8 Behandlungen pro Zone",
      "Kostenlose Beratung",
      "Nachsorge-Creme",
      "15% Rabatt auf weitere Zonen",
      "Kostenlose Nachbehandlung",
    ],
  },
];

export default function PreisePage() {
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
              Transparente Preise
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Faire Preise ohne versteckte Kosten - mit attraktiven Paketangeboten
            </p>
          </div>
        </div>
      </div>

      {/* Package Offers */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Unsere Paketangebote
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Sparen Sie bis zu 600€ mit unseren attraktiven Paketen
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-10 sm:mt-20 sm:max-w-none sm:grid-cols-3 lg:gap-x-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 ring-1 ring-gray-200 ${
                  pkg.popular ? "bg-brand-brown-700 text-white" : "bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-brand-bronze px-4 py-2 text-sm font-semibold text-white">
                      <Star className="h-4 w-4" />
                      Beliebt
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-serif font-bold">{pkg.name}</h3>
                <p className="mt-4 text-sm opacity-80">{pkg.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">{pkg.price}€</span>
                  <span className="text-sm font-semibold leading-6">/Paket</span>
                </p>
                <p className="mt-2 text-sm text-green-600">
                  Sie sparen {pkg.savings}€
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircle className="h-5 w-5 flex-none text-brand-bronze" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/termin"
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold ${
                    pkg.popular
                      ? "bg-brand-bronze text-white hover:bg-brand-brown-600"
                      : "bg-brand-brown-700 text-white hover:bg-brand-brown-600"
                  }`}
                >
                  Termin vereinbaren
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Prices */}
      <section className="bg-brand-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Einzelpreise nach Körperzonen
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Preise für Einzelbehandlungen (8 Sitzungen empfohlen)
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Women Prices */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-6">
                Preise für Frauen
              </h3>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Körperzone
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Einzelpreis
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Paketpreis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {priceData.women.map((item) => (
                      <tr key={item.zone}>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.zone}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.single}€
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.package}€
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Men Prices */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-6">
                Preise für Männer
              </h3>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Körperzone
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Einzelpreis
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Paketpreis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {priceData.men.map((item) => (
                      <tr key={item.zone}>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.zone}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.single}€
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.package}€
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Wichtige Informationen
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-brand-brown-700">
                  Kostenlose Erstberatung
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">
                    Jede Behandlung beginnt mit einer kostenlosen, ausführlichen Beratung und Hautanalyse.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-brand-brown-700">
                  Anzahl der Sitzungen
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">
                    In der Regel sind 6-8 Sitzungen im Abstand von 4-6 Wochen für optimale Ergebnisse erforderlich.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-brand-brown-700">
                  Zahlungsmöglichkeiten
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-brown-600">
                  <p className="flex-auto">
                    Barzahlung, EC-Karte oder Überweisung. Pakete können in Raten bezahlt werden.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-brown-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Haben Sie Fragen zu unseren Preisen?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Rufen Sie uns an oder vereinbaren Sie einen kostenlosen Beratungstermin
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:+49123456789"
                className="flex items-center gap-2 rounded-md bg-brand-bronze px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-brown-600"
              >
                <Phone className="h-5 w-5" />
                +49 123 456 789
              </a>
              <a
                href="/termin"
                className="text-base font-semibold leading-6 text-white hover:text-brand-bronze"
              >
                Termin vereinbaren <span aria-hidden="true">→</span>
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
