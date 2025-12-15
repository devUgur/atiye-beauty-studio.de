import { CheckCircle2, Mail, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Termin erfolgreich gebucht - ATIYE Beauty Studio",
  description: "Ihr Termin wurde erfolgreich gebucht. Sie erhalten eine Bestätigung per E-Mail.",
};

export default function TerminErfolgreichPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 flex items-center justify-center py-20 px-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-stone-700 shadow-xl text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>

          {/* Success Message */}
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4 dark:text-stone-100">
            Termin erfolgreich gebucht!
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-8">
            Vielen Dank für Ihre Terminbuchung. Wir freuen uns auf Sie!
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-bronze-500" />
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                  E-Mail-Bestätigung
                </h3>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrem Termin.
              </p>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-bronze-500" />
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                  Kalender-Sync
                </h3>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Der Termin wurde automatisch zu Ihrem Kalender hinzugefügt (falls aktiviert).
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-bronze-50 dark:bg-bronze-900/20 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Was passiert jetzt?
            </h3>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              <li className="flex items-start gap-2">
                <span className="text-bronze-500 mt-1">•</span>
                <span>Sie erhalten eine E-Mail-Bestätigung von Calendly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bronze-500 mt-1">•</span>
                <span>24 Stunden vor dem Termin erhalten Sie eine Erinnerung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bronze-500 mt-1">•</span>
                <span>Bei Fragen erreichen Sie uns jederzeit telefonisch</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur Startseite
            </Link>
            <Link
              href="/termin"
              className="inline-flex items-center justify-center gap-2 bg-bronze-500 text-white px-6 py-3 rounded-full font-medium hover:bg-bronze-400 transition-colors"
            >
              Weitere Termine
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-stone-500 dark:text-stone-400 mt-8">
          Haben Sie Fragen? Rufen Sie uns an:{" "}
          <a
            href="tel:+4912345678900"
            className="text-bronze-500 hover:text-bronze-400 transition-colors"
          >
            +49 (0) 123 456 78900
          </a>
        </p>
      </div>
    </div>
  );
}
