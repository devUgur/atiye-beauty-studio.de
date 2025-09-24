"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen zurück.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <section className="py-20 pt-32 bg-secondary/20" id="kontakt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Kontakt & Termin
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Vereinbaren Sie jetzt Ihren Termin für eine kostenlose Erstberatung. 
            Wir freuen uns auf Sie!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                Nachricht senden
              </h3>
              <p className="text-muted-foreground">
                Füllen Sie das Formular aus und wir melden uns bei Ihnen zurück.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Ihre Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Ihre Nachricht oder Fragen..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground py-3"
                >
                  Nachricht senden
                </Button>
                <p className="text-xs text-muted-foreground">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                      Telefon
                    </h4>
                    <a
                      href="tel:+4912345678900"
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      +49 (0) 123 456 78900
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mo-Fr: 9:00-18:00 Uhr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                      E-Mail
                    </h4>
                    <a
                      href="mailto:info@atiye-beauty.de"
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      info@atiye-beauty.de
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Antwort binnen 24 Stunden
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                      Adresse
                    </h4>
                    <address className="not-italic text-foreground">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                      Öffnungszeiten
                    </h4>
                    <div className="text-sm text-foreground space-y-1">
                      <div>Mo-Fr: 9:00-18:00 Uhr</div>
                      <div>Sa: 10:00-16:00 Uhr</div>
                      <div>So: Geschlossen</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
