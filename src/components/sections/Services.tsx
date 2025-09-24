import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, Heart, Timer, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Gesicht & Hals",
      description: "Präzise Behandlung sensibler Gesichtsbereiche mit modernster Technologie",
      areas: ["Oberlippe", "Kinn", "Wangen", "Hals"],
      price: "ab 45€"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Körper Damen",
      description: "Komplette Haarentfernung für alle Körperbereiche nach Ihren Wünschen",
      areas: ["Achseln", "Bikinizone", "Beine", "Arme"],
      price: "ab 35€"
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: "Körper Herren",
      description: "Effektive Haarentfernung für Männer mit starkem Haarwuchs",
      areas: ["Rücken", "Brust", "Schultern", "Gesicht"],
      price: "ab 55€"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Komplett-Pakete",
      description: "Sparen Sie mit unseren individuellen Kombi-Angeboten",
      areas: ["Ganzköper", "Teilkörper", "Gesicht komplett", "Custom"],
      price: "auf Anfrage"
    }
  ];

  return (
    <section className="py-20 pt-16 bg-secondary/30" id="leistungen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Moderne Laser-Haarentfernung für alle Hauttypen und Bereiche. 
            NiSV-zertifiziert und dermatologisch getestet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card shadow-elegant border-border hover:shadow-warm transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <Badge variant="outline" className="mx-auto border-primary text-primary">
                  {service.price}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="text-sm text-foreground/70 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4">
            Kostenlose Beratung vereinbaren
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Individuelle Beratung • Hautanalyse • Behandlungsplan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;