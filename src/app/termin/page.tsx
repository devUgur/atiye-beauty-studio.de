"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

const treatmentTypes = [
  { id: "beratung", name: "Kostenlose Erstberatung", duration: "30 Min", description: "Ausführliche Beratung und Hautanalyse" },
  { id: "einzel", name: "Einzelbehandlung", duration: "15-45 Min", description: "Behandlung einer Körperzone" },
  { id: "paket", name: "Paketbehandlung", duration: "30-60 Min", description: "Behandlung mehrerer Zonen" },
];

export default function TerminPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatmentType: "",
    preferredDate: "",
    preferredTime: "",
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      treatmentType: "",
      preferredDate: "",
      preferredTime: "",
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
              Termin vereinbaren
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600 sm:text-xl">
              Vereinbaren Sie Ihren kostenlosen Beratungstermin - schnell und unverbindlich
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-4xl">
              Terminanfrage
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-brown-600">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zur Terminbestätigung.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-16 space-y-8">
            {/* Personal Information */}
            <div className="bg-brand-sand rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-brand-brown-700 mb-6 flex items-center gap-2">
                <User className="h-5 w-5" />
                Persönliche Daten
              </h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Vorname *
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Nachname *
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                      placeholder="Ihr Nachname"
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Telefon *
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Type */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-brand-brown-700 mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Art der Behandlung
              </h3>
              <div className="space-y-4">
                {treatmentTypes.map((treatment) => (
                  <label key={treatment.id} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-brand-sand cursor-pointer">
                    <input
                      type="radio"
                      name="treatmentType"
                      value={treatment.id}
                      checked={formData.treatmentType === treatment.id}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-brown-700">{treatment.name}</span>
                        <span className="text-sm text-brand-brown-600">{treatment.duration}</span>
                      </div>
                      <p className="text-sm text-brand-brown-600 mt-1">{treatment.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Date & Time */}
            <div className="bg-brand-sand rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-brand-brown-700 mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Gewünschter Termin
              </h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Gewünschtes Datum
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="preferredDate"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                    Gewünschte Uhrzeit
                  </label>
                  <div className="mt-2">
                    <select
                      name="preferredTime"
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                    >
                      <option value="">Bitte wählen</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time} Uhr</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-brand-brown-700 mb-6">
                Zusätzliche Informationen
              </h3>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-brand-brown-700">
                  Nachricht (optional)
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-bronze sm:text-sm sm:leading-6"
                    placeholder="Haben Sie spezielle Wünsche oder Fragen zu Ihrer Behandlung?"
                  />
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
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

            {/* Submit Status */}
            {submitStatus === "success" && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <div className="text-sm text-green-800">
                    Vielen Dank für Ihre Terminanfrage! Wir melden uns schnellstmöglich bei Ihnen zur Bestätigung.
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-800">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="default"
                size="lg"
                className="min-w-[250px]"
              >
                {isSubmitting ? "Wird gesendet..." : "Terminanfrage senden"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="bg-brand-brown-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Oder rufen Sie uns direkt an
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-sand">
              Für eine schnelle Terminvereinbarung erreichen Sie uns unter:
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+49123456789"
                className="flex items-center gap-2 text-2xl font-bold text-brand-bronze hover:text-white transition-colors"
              >
                <Phone className="h-6 w-6" />
                +49 123 456 789
              </a>
              <a
                href="mailto:termin@atiye-beauty.de"
                className="flex items-center gap-2 text-lg text-brand-sand hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                termin@atiye-beauty.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
