"use client";

import { ChevronDown, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "Wie viele Sitzungen benötige ich?",
      answer:
        "In der Regel sind 6 bis 8 Sitzungen notwendig, um ein dauerhaft glattes Ergebnis zu erzielen, da sich die Haare in unterschiedlichen Wachstumsphasen befinden. Die genaue Anzahl hängt von Ihrem Haut- und Haartyp, der behandelten Körperzone und dem individuellen Haarwachstumszyklus ab.",
    },
    {
      question: "Ist die Laser-Haarentfernung schmerzhaft?",
      answer:
        "Dank unserer modernen Diodenlaser-Technologie mit integriertem Kühlsystem spüren die meisten Kunden lediglich ein leichtes Wärmegefühl oder ein sanftes Zwicken. Die Behandlung ist deutlich weniger schmerzhaft als Wachsen oder Epilieren. Es fühlt sich ähnlich an wie ein kurzer, warmer Nadelstich.",
    },
    {
      question: "Wie bereite ich mich auf die Behandlung vor?",
      answer:
        "Bitte rasieren Sie die zu behandelnde Stelle 24 Stunden vor dem Termin. Verzichten Sie 2 Wochen vor der Behandlung auf intensives Sonnenbaden oder Solarium. Tragen Sie am Behandlungstag keine Cremes, Deos oder Parfüms auf die zu behandelnde Stelle auf. Kommen Sie mit sauberer, trockener Haut zum Termin.",
    },
    {
      question: "Für welche Hauttypen ist die Behandlung geeignet?",
      answer:
        "Moderne Diodenlaser eignen sich für die meisten Haut- und Haartypen. Dunkle, dicke Haare auf heller Haut zeigen die besten Ergebnisse. Auch bei dunklerer Haut und helleren Haaren sind gute Resultate möglich, erfordern aber oft mehr Behandlungen. Wir beraten Sie gerne individuell und passen die Behandlung an Ihren Hauttyp an.",
    },
    {
      question: "Was muss ich nach der Behandlung beachten?",
      answer:
        "Nach der Behandlung sollten Sie die behandelte Stelle 24-48 Stunden kühlen und keine enge Kleidung tragen. Vermeiden Sie für mindestens 48 Stunden Sport, Sauna, Solarium und intensives Sonnenbaden. Verwenden Sie eine beruhigende, parfümfreie Creme. Die Haut kann leicht gerötet sein, was normalerweise nach wenigen Stunden abklingt.",
    },
    {
      question: "Gibt es Nebenwirkungen oder Risiken?",
      answer:
        "Bei sachgemäßer Durchführung durch geschultes Personal sind Nebenwirkungen sehr selten. Mögliche, meist vorübergehende Reaktionen sind leichte Rötungen, Schwellungen oder eine erhöhte Empfindlichkeit der Haut. Schwerwiegende Komplikationen sind bei Verwendung moderner, zertifizierter Lasertechnologie äußerst selten. Wir verwenden ausschließlich NiSV-zertifizierte Geräte und halten höchste Sicherheitsstandards ein.",
    },
    {
      question: "Kann ich mich während der Schwangerschaft behandeln lassen?",
      answer:
        "Aus Sicherheitsgründen empfehlen wir, Laser-Haarentfernung während der Schwangerschaft zu vermeiden. Während dieser Zeit können hormonelle Veränderungen das Haarwachstum beeinflussen, und wir möchten jedes Risiko für Sie und Ihr Baby ausschließen. Nach der Schwangerschaft und Stillzeit können Sie die Behandlung problemlos fortsetzen oder beginnen.",
    },
    {
      question: "Wie hoch sind die Kosten?",
      answer:
        "Die Kosten variieren je nach behandelter Körperzone und Anzahl der Sitzungen. Unsere Preise sind transparent und inklusive MwSt. Wir bieten sowohl Einzelbehandlungen als auch attraktive Pakete mit deutlichen Ersparnissen. Eine kostenlose, unverbindliche Beratung ist selbstverständlich. Kontaktieren Sie uns gerne für ein individuelles Angebot.",
    },
  ];

  useEffect(() => {
    // Observe all reveal elements in the section
    const revealElements = document.querySelectorAll('#faq .reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // Fallback: if elements are already in viewport, activate them immediately
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        el.classList.add("active");
        observer.unobserve(el);
      }
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-stone-50/30 dark:bg-stone-950/40 backdrop-blur-md relative z-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16 text-center dark:text-stone-100 reveal" ref={sectionRef}>
          Häufige Fragen
        </h2>

        <div className="space-y-4 reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-stone-200 dark:border-stone-800 rounded-none overflow-hidden group bg-white/60 dark:bg-stone-900/60 hover:border-bronze-300/50 dark:hover:border-bronze-700/50 transition-all duration-300 ${
                openIndex === index
                  ? "ring-1 ring-bronze-500/30 shadow-md"
                  : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/80 dark:hover:bg-stone-900/80 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-sans font-semibold text-base md:text-lg text-stone-900 dark:text-stone-50 pr-4 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 dark:text-stone-500 transition-transform duration-300 group-hover:text-bronze-500 flex-shrink-0 ${
                    openIndex === index ? "rotate-180 text-bronze-500" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[800px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center reveal">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/50 dark:border-stone-800/50 backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">
              Noch Fragen?
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-2">
              Wir beraten Sie gerne persönlich.
            </p>
            <a
              href="tel:+4912345678900"
              className="inline-flex items-center gap-2 text-bronze-600 dark:text-bronze-400 hover:text-bronze-700 dark:hover:text-bronze-300 font-medium transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>+49 (0) 123 456 78900</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
