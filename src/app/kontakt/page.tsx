"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Musterstraße 123", "12345 Musterstadt"],
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+49 123 456 789", "Mo-Fr: 9:00-18:00", "Sa: 9:00-14:00"],
  },
  {
    icon: Mail,
    title: "E-Mail",
    details: ["info@atiye-beauty.de", "termin@atiye-beauty.de"],
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    details: ["Mo-Fr: 9:00-18:00", "Sa: 9:00-14:00", "So: Geschlossen"],
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-cream to-brand-sand">
        <div className="absolute inset-0 wave-bg opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-6xl">
              Kontakt & Termin
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
                Kontaktinformationen
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-brown-600">
                Rufen Sie uns an, schreiben Sie uns eine E-Mail oder besuchen Sie uns direkt im Studio.
              </p>
              
              <div className="mt-10 space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-bronze">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-brand-brown-700">
                        {item.title}
                      </h3>
                      <div className="mt-2 space-y-1">
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-sm leading-6 text-brand-brown-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-brand-brown-700 mb-4">
                  So finden Sie uns
                </h3>
                <div className="bg-brand-sand rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-brand-bronze mx-auto mb-4" />
                  <p className="text-brand-brown-600">
                    Karte wird hier angezeigt
                  </p>
                  <p className="text-sm text-brand-brown-500 mt-2">
                    Musterstraße 123, 12345 Musterstadt
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
                Nachricht senden
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-brown-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                      Name *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                        placeholder="Ihr Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                      E-Mail *
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Telefon
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Betreff
                  </label>
                  <div className="mt-2">
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="beratung">Kostenlose Beratung</option>
                      <option value="termin">Termin vereinbaren</option>
                      <option value="preise">Frage zu Preisen</option>
                      <option value="behandlung">Frage zur Behandlung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Nachricht *
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-brand-bronze focus:ring-brand-bronze"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm leading-6 text-brand-brown-600">
                    Ich habe die{" "}
                    <a href="/rechtliches/datenschutz" className="font-semibold text-brand-bronze hover:text-brand-brown-600">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="text-sm text-green-800">
                      Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="text-sm text-red-800">
                      Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="default"
                    size="lg"
                    className="min-w-[200px]"
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-brown-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Oder rufen Sie uns direkt an
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Für eine schnelle Terminvereinbarung erreichen Sie uns unter:
            </p>
            <div className="mt-10">
              <a
                href="tel:+49123456789"
                className="text-3xl font-bold text-brand-bronze hover:text-white transition-colors"
              >
                +49 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
