import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const womenPrices = [
    { area: "Oberlippe", single: "45€", package: "250€" },
    { area: "Achseln", single: "65€", package: "350€" },
    { area: "Bikinizone", single: "85€", package: "450€" },
    { area: "Unterschenkel", single: "120€", package: "650€" },
    { area: "Oberschenkel", single: "150€", package: "800€" },
    { area: "Beine komplett", single: "220€", package: "1.200€" },
  ];

  const menPrices = [
    { area: "Rücken", single: "180€", package: "950€" },
    { area: "Brust", single: "120€", package: "650€" },
    { area: "Schultern", single: "85€", package: "450€" },
    { area: "Gesicht komplett", single: "95€", package: "500€" },
    { area: "Nacken", single: "55€", package: "300€" },
    { area: "Arme komplett", single: "140€", package: "750€" },
  ];

  const packages = [
    {
      title: "Starter Paket",
      description: "Perfekt für kleine Bereiche",
      price: "ab 250€",
      sessions: "6 Sitzungen",
      features: ["Kostenlose Beratung", "Hautanalyse", "Nachbehandlung inklusive"],
      popular: false
    },
    {
      title: "Premium Paket",
      description: "Unser beliebtestes Angebot",
      price: "ab 650€",
      sessions: "8 Sitzungen",
      features: ["Kostenlose Beratung", "Hautanalyse", "Nachbehandlung inklusive", "Garantie-Sitzungen"],
      popular: true
    },
    {
      title: "VIP Komplett",
      description: "Maximale Flexibilität",
      price: "auf Anfrage",
      sessions: "Individuell",
      features: ["Kostenlose Beratung", "Hautanalyse", "Nachbehandlung inklusive", "Garantie-Sitzungen", "Flexible Termine"],
      popular: false
    }
  ];

  return (
    <section className="py-20 pt-32 bg-background" id="preise">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Transparente Preise
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Faire Preise ohne versteckte Kosten. Alle Preise verstehen sich inklusive MwSt. 
            Kostenlose Erstberatung für alle Neukunden.
          </p>
        </div>

        {/* Package Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative shadow-elegant ${pkg.popular ? 'border-primary border-2' : 'border-border'}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Beliebt
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <div className="text-sm text-muted-foreground">{pkg.sessions}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-accent' : 'bg-secondary hover:bg-primary'} text-primary-foreground`}
                >
                  Beratung vereinbaren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Women's Pricing */}
          <Card className="shadow-elegant">
            <CardHeader className="bg-secondary/20">
              <h3 className="text-2xl font-serif font-bold text-center text-card-foreground">
                Preise Damen
              </h3>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-foreground">Bereich</th>
                      <th className="text-center p-4 font-medium text-foreground">Einzelsitzung</th>
                      <th className="text-center p-4 font-medium text-foreground">6er Paket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenPrices.map((price, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0 hover:bg-secondary/10">
                        <td className="p-4 text-foreground">{price.area}</td>
                        <td className="p-4 text-center text-muted-foreground">{price.single}</td>
                        <td className="p-4 text-center font-semibold text-primary">{price.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Men's Pricing */}
          <Card className="shadow-elegant">
            <CardHeader className="bg-secondary/20">
              <h3 className="text-2xl font-serif font-bold text-center text-card-foreground">
                Preise Herren
              </h3>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-foreground">Bereich</th>
                      <th className="text-center p-4 font-medium text-foreground">Einzelsitzung</th>
                      <th className="text-center p-4 font-medium text-foreground">6er Paket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menPrices.map((price, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0 hover:bg-secondary/10">
                        <td className="p-4 text-foreground">{price.area}</td>
                        <td className="p-4 text-center text-muted-foreground">{price.single}</td>
                        <td className="p-4 text-center font-semibold text-primary">{price.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary/20 rounded-lg p-6 max-w-4xl mx-auto">
            <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
              💡 Unser Tipp: Paketpreise sparen bis zu 30%
            </h4>
            <p className="text-muted-foreground mb-4">
              Kombinieren Sie mehrere Bereiche und profitieren Sie von unseren attraktiven Kombi-Rabatten. 
              Individuelle Angebote auf Anfrage.
            </p>
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
              Kostenloses Beratungsgespräch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;