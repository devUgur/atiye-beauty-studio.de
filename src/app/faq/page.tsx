"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQPageJsonLd } from "@/lib/jsonld";

const faqs = [
  {
    question: "Wie funktioniert die Laser-Haarentfernung?",
    answer: "Der Diodenlaser sendet gezielt Lichtenergie in die Haarwurzel. Das Melanin (Pigment) im Haar absorbiert diese Energie und wandelt sie in Wärme um, wodurch die Haarwurzel dauerhaft zerstört wird. Da nur pigmentierte Haare die Energie aufnehmen, bleibt die umgebende Haut unversehrt."
  },
  {
    question: "Ist die Behandlung schmerzhaft?",
    answer: "Die meisten Patienten empfinden die Behandlung als leicht unangenehm, aber nicht als schmerzhaft. Es fühlt sich ähnlich an wie ein kurzer, warmer Nadelstich. Wir verwenden moderne Kühltechniken, um das Unbehagen zu minimieren. Die Behandlung ist deutlich weniger schmerzhaft als Wachsen oder Epilieren."
  },
  {
    question: "Wie viele Behandlungen sind erforderlich?",
    answer: "In der Regel sind 6-8 Behandlungen im Abstand von 4-6 Wochen erforderlich, um optimale Ergebnisse zu erzielen. Die genaue Anzahl hängt von Ihrem Haut- und Haartyp, der behandelten Körperzone und dem individuellen Haarwachstumszyklus ab."
  },
  {
    question: "Für welche Haut- und Haartypen ist die Behandlung geeignet?",
    answer: "Moderne Diodenlaser eignen sich für die meisten Haut- und Haartypen. Dunkle, dicke Haare auf heller Haut zeigen die besten Ergebnisse. Auch bei dunklerer Haut und helleren Haaren sind gute Resultate möglich, erfordern aber oft mehr Behandlungen. Wir beraten Sie gerne individuell."
  },
  {
    question: "Wie bereite ich mich auf die Behandlung vor?",
    answer: "Rasieren Sie die zu behandelnde Stelle 1-2 Tage vor der Behandlung. Vermeiden Sie Sonnenbäder, Solarium und Selbstbräuner 4 Wochen vor und nach der Behandlung. Verwenden Sie keine depilierenden Cremes oder Wachs in den 4 Wochen vor der Behandlung. Kommen Sie ohne Make-up oder Cremes zur Behandlung."
  },
  {
    question: "Was muss ich nach der Behandlung beachten?",
    answer: "Vermeiden Sie Sonnenbäder und Solarium für 4 Wochen nach der Behandlung. Verwenden Sie Sonnenschutz mit mindestens LSF 30. Verzichten Sie auf Sauna, Schwimmbad und Sport für 24-48 Stunden. Tragen Sie lockere, atmungsaktive Kleidung. Die behandelte Haut kann leicht gerötet oder geschwollen sein - das ist normal und klingt nach wenigen Stunden ab."
  },
  {
    question: "Kann ich die Behandlung während der Schwangerschaft durchführen lassen?",
    answer: "Aus Sicherheitsgründen empfehlen wir, die Laser-Haarentfernung während der Schwangerschaft und Stillzeit zu vermeiden. Die hormonellen Veränderungen können das Haarwachstum beeinflussen und die Behandlung weniger effektiv machen. Warten Sie lieber bis nach der Stillzeit."
  },
  {
    question: "Sind die Ergebnisse dauerhaft?",
    answer: "Ja, die Laser-Haarentfernung führt zu dauerhaften Ergebnissen. Nach einer vollständigen Behandlungsserie wachsen die behandelten Haare nicht mehr nach. Gelegentlich können nach Jahren einzelne, sehr feine Haare nachwachsen, die dann mit 1-2 Auffrischungsbehandlungen entfernt werden können."
  },
  {
    question: "Welche Risiken und Nebenwirkungen gibt es?",
    answer: "Bei sachgemäßer Durchführung durch qualifiziertes Personal sind die Risiken minimal. Mögliche, meist vorübergehende Nebenwirkungen sind leichte Rötungen, Schwellungen oder Brennen. Selten können Pigmentveränderungen auftreten. Wir sind NiSV-zertifiziert und folgen höchsten Sicherheitsstandards."
  },
  {
    question: "Kann ich mehrere Körperzonen gleichzeitig behandeln lassen?",
    answer: "Ja, Sie können mehrere Körperzonen in einer Sitzung behandeln lassen. Dies ist oft effizienter und kostengünstiger. Wir beraten Sie gerne über die optimale Kombination und passen die Behandlung an Ihre Bedürfnisse an."
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer: "Die Behandlungsdauer hängt von der Größe der zu behandelnden Zone ab. Kleine Bereiche wie Oberlippe dauern 5-10 Minuten, größere Bereiche wie Beine können 30-45 Minuten in Anspruch nehmen. Planen Sie zusätzlich 15-20 Minuten für Beratung und Vorbereitung ein."
  },
  {
    question: "Was kostet eine Laser-Haarentfernung?",
    answer: "Die Kosten richten sich nach der behandelten Körperzone und der Anzahl der Sitzungen. Einzelbehandlungen beginnen bei 25€, Pakete mit 8 Behandlungen bieten erhebliche Ersparnisse. Eine kostenlose Erstberatung mit individueller Preisberechnung ist inklusive. Alle Preise finden Sie auf unserer Preisseite."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white">
      <FAQPageJsonLd faqs={faqs} />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-cream to-brand-sand">
        <div className="absolute inset-0 wave-bg opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-6xl">
              Häufige Fragen
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Antworten auf die wichtigsten Fragen zur Laser-Haarentfernung
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-bronze focus:ring-inset"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-brand-brown-700 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-brand-bronze flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-bronze flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                  >
                    <p className="text-brand-brown-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-brown-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Haben Sie weitere Fragen?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Wir beraten Sie gerne persönlich und beantworten alle Ihre Fragen zur Laser-Haarentfernung.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/kontakt"
                className="rounded-md bg-brand-bronze px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-brown-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bronze"
              >
                Kontakt aufnehmen
              </a>
              <a
                href="/termin"
                className="text-base font-semibold leading-6 text-white hover:text-brand-bronze"
              >
                Beratungstermin vereinbaren <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
