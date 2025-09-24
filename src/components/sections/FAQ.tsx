import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wie viele Sitzungen benötige ich?",
      answer: "Die Anzahl der Sitzungen hängt von verschiedenen Faktoren ab: Haardicke, Hauttyp, behandelte Zone und Haarzyklusphase. In der Regel sind 6-8 Sitzungen erforderlich für optimale Ergebnisse. Bei der kostenlosen Erstberatung erstellen wir Ihren individuellen Behandlungsplan."
    },
    {
      question: "Ist die Laser-Haarentfernung schmerzhaft?",
      answer: "Die meisten Patienten beschreiben das Gefühl als kurzes Ziepen oder leichtes Prickeln. Unsere modernen Laser-Systeme verfügen über integrierte Kühlsysteme, die den Komfort deutlich erhöhen. Die Behandlung ist deutlich angenehmer als beispielsweise das Waxing."
    },
    {
      question: "Wie bereite ich mich auf die Behandlung vor?",
      answer: "4 Wochen vor der Behandlung sollten Sie auf Zupfen, Waxing oder Epilieren verzichten. Rasieren ist jedoch erlaubt und erwünscht. Vermeiden Sie Sonnenbäder und Solarium 2-4 Wochen vor der Sitzung. Verwenden Sie keine Selbstbräuner im Behandlungsbereich."
    },
    {
      question: "Für welche Hauttypen ist die Behandlung geeignet?",
      answer: "Dank unserer modernen Laser-Technologie können wir fast alle Hauttypen behandeln. Bei sehr heller Haut und dunklen Haaren sind die Ergebnisse am besten. Aber auch bei dunklerer Haut können wir mit speziellen Lasern sicher und effektiv behandeln."
    },
    {
      question: "Was muss ich nach der Behandlung beachten?",
      answer: "Meiden Sie direkte Sonneneinstrahlung und verwenden Sie Sonnenschutz (LSF 30+). Kühlen Sie die behandelte Stelle bei Bedarf. Verzichten Sie 24-48h auf Sport, Sauna und heiße Bäder. Verwenden Sie milde, parfümfreie Pflegeprodukte."
    },
    {
      question: "Gibt es Nebenwirkungen oder Risiken?",
      answer: "Bei fachgerechter Anwendung ist die Laser-Haarentfernung sehr sicher. Temporäre Rötungen oder leichte Schwellungen können auftreten, verschwinden aber meist binnen weniger Stunden. Als NiSV-zertifizierte Einrichtung garantieren wir höchste Sicherheitsstandards."
    },
    {
      question: "Kann ich mich während der Schwangerschaft behandeln lassen?",
      answer: "Aus Vorsichtsgründen führen wir während der Schwangerschaft und Stillzeit keine Laser-Behandlungen durch. Nach der Stillzeit können die Behandlungen problemlos wieder aufgenommen werden."
    },
    {
      question: "Wie hoch sind die Kosten?",
      answer: "Die Kosten variieren je nach Behandlungszone und benötigter Sitzungsanzahl. Kleine Bereiche wie Oberlippe starten ab 45€, größere Zonen wie Beine ab 120€. Wir bieten attraktive Paketpreise und finanzierungsfreundliche Zahlungspläne an."
    }
  ];

  return (
    <section className="py-20 pt-16 bg-background" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Alle wichtigen Informationen zur Laser-Haarentfernung auf einen Blick. 
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-elegant"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-card-foreground hover:text-primary py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Noch Fragen? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="tel:+4912345678900"
            className="inline-flex items-center text-primary hover:text-accent font-medium transition-colors"
          >
            📞 +49 (0) 123 456 78900
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
