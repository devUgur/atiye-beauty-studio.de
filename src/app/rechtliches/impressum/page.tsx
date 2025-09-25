import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - ATIYE Beauty Studio",
  description: "Impressum und rechtliche Informationen von ATIYE Beauty Studio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-brown-600">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        <div className="mt-16 prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Anbieter
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p><strong>ATIYE Beauty Studio</strong></p>
                <p>Inhaberin: Atiye Kibar</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Kontakt
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>Telefon: +49 123 456 789</p>
                <p>E-Mail: info@atiye-beauty.de</p>
                <p>Website: https://atiye-beauty-studio.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="text-brand-brown-600">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>Berufsbezeichnung: Laser-Therapeutin</p>
                <p>Zuständige Kammer: [Zuständige Kammer]</p>
                <p>Verliehen in: Deutschland</p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>NiSV (Niedersächsische Verordnung über die Ausübung der nichtärztlichen Heilkunde)</li>
                  <li>Gewerbeordnung (GewO)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>Atiye Kibar</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                EU-Streitschlichtung
              </h2>
              <div className="text-brand-brown-600">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-brand-bronze hover:text-brand-brown-600">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-2">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <div className="text-brand-brown-600">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Haftung für Inhalte
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Haftung für Links
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung 
                  auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                  werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                Urheberrecht
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite 
                  sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
