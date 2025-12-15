"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

// Calendly Event Type URL
// Format: https://calendly.com/your-username/event-type-slug
// 
// IMPORTANT: Configure in Calendly:
// Event Type → After scheduling → Redirect to external URL
// Set to: https://yourdomain.com/termin-erfolgreich
const CALENDLY_EVENT_URL =
  process.env.NEXT_PUBLIC_CALENDLY_EVENT_URL ||
  "https://calendly.com/atiye-beauty-studio/erstgespraech";

// Widget Mode: "iframe" (recommended for Free Plan) or "inline"
const WIDGET_MODE: "iframe" | "inline" = "iframe";

export default function TerminPage() {
  const [prefillData, setPrefillData] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});
  const [showWidget, setShowWidget] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to widget when it becomes visible
    if (showWidget && widgetRef.current) {
      setTimeout(() => {
        widgetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showWidget]);

  const handleQuickBook = () => {
    setShowWidget(true);
  };

  const handlePrefillBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    setPrefillData({
      name: name || undefined,
      email: email || undefined,
      phone: phone || undefined,
    });
    setShowWidget(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-white dark:bg-stone-900 pt-20 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Zurück zur Startseite</span>
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6 dark:text-stone-100">
              Termin vereinbaren
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Buchen Sie Ihren kostenlosen Beratungstermin direkt online. Schnell, einfach und
              unverbindlich.
            </p>
          </div>

          {/* Quick Book Option */}
          {!showWidget && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-stone-50 dark:bg-stone-800 rounded-3xl p-8 border border-stone-200 dark:border-stone-700">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bronze-500/10 mb-4">
                    <Calendar className="w-8 h-8 text-bronze-500" />
                  </div>
                  <h2 className="font-serif text-2xl font-medium mb-2 dark:text-stone-100">
                    Direkt buchen
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400">
                    Wählen Sie einen passenden Termin aus unserem Kalender
                  </p>
                </div>

                <button
                  onClick={handleQuickBook}
                  className="w-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium py-4 rounded-xl hover:opacity-90 transition-opacity mb-6"
                >
                  Jetzt Termin auswählen
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200 dark:border-stone-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-stone-50 dark:bg-stone-800 text-stone-500">
                      oder
                    </span>
                  </div>
                </div>

                {/* Prefill Form */}
                <form onSubmit={handlePrefillBook} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 mb-2">
                        Vorname
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-3 outline-none focus:border-bronze-500 transition-colors"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 mb-2">
                        Nachname
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-3 outline-none focus:border-bronze-500 transition-colors"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-3 outline-none focus:border-bronze-500 transition-colors"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide font-semibold text-stone-500 mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-4 py-3 outline-none focus:border-bronze-500 transition-colors"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-bronze-500 text-white font-medium py-4 rounded-xl hover:bg-bronze-400 transition-colors"
                  >
                    Mit Daten buchen
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Calendly Widget */}
          {showWidget && (
            <div ref={widgetRef} className="max-w-4xl mx-auto mt-12">
              <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 border border-stone-200 dark:border-stone-700 shadow-xl">
                <div className="mb-6">
                  <button
                    onClick={() => setShowWidget(false)}
                    className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-4"
                  >
                    ← Zurück
                  </button>
                  <h2 className="font-serif text-2xl font-medium dark:text-stone-100">
                    Wählen Sie einen Termin
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 mt-2">
                    Alle Termine werden automatisch mit Ihrem Kalender synchronisiert
                  </p>
                </div>
                <CalendlyWidget
                  url={CALENDLY_EVENT_URL}
                  prefill={prefillData}
                  mode={WIDGET_MODE}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center dark:text-stone-100">
            Warum online buchen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bronze-500/10 mb-4">
                <Clock className="w-6 h-6 text-bronze-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-stone-100">24/7 verfügbar</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Buchen Sie jederzeit, wann es Ihnen passt – auch außerhalb unserer Öffnungszeiten.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bronze-500/10 mb-4">
                <CheckCircle2 className="w-6 h-6 text-bronze-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-stone-100">Sofortige Bestätigung</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Ihr Termin wird sofort reserviert und Sie erhalten eine Bestätigung per E-Mail.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bronze-500/10 mb-4">
                <Calendar className="w-6 h-6 text-bronze-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-stone-100">Kalender-Sync</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Automatische Synchronisation mit Google Calendar, Outlook und anderen Kalendern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight mb-4 dark:text-stone-100">
            Lieber telefonisch?
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Rufen Sie uns direkt an für eine persönliche Terminvereinbarung
          </p>
          <a
            href="tel:+4912345678900"
            className="inline-flex items-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <span>+49 (0) 123 456 78900</span>
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
