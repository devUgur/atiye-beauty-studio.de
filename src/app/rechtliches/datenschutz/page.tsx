import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - ATIYE Beauty Studio",
  description: "Datenschutzerklärung und Informationen zum Datenschutz von ATIYE Beauty Studio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-brown-600">
            Informationen zum Datenschutz gemäß DSGVO
          </p>
        </div>

        <div className="mt-16 prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <h3 className="text-lg font-semibold text-brand-brown-700">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter 
                  diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <h3 className="text-lg font-semibold text-brand-brown-700">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Abschnitt &quot;Hinweis zur Verantwortlichen Stelle&quot; 
                  in dieser Datenschutzerklärung entnehmen.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                  Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
                  automatisch, sobald Sie diese Website betreten.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Wofür nutzen wir Ihre Daten?</h3>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                3. Hosting
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <div className="bg-brand-sand p-4 rounded-lg">
                  <p><strong>Vercel Inc.</strong></p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>USA</p>
                </div>
                <p>
                  Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland 
                  und unterliegt den strengen deutschen Datenschutzgesetzen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <h3 className="text-lg font-semibold text-brand-brown-700">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür 
                  wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der 
                  Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz 
                  der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                5. Datenerfassung auf dieser Website
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <h3 className="text-lg font-semibold text-brand-brown-700">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
                <p>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                  Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                  Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files 
                  erfasst werden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                6. Kontaktformular
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                  Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
                  zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
                  für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
                  Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                7. Ihre Rechte
              </h2>
              <div className="text-brand-brown-600 space-y-4">
                <h3 className="text-lg font-semibold text-brand-brown-700">Recht auf Auskunft</h3>
                <p>
                  Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende 
                  personenbezogene Daten verarbeitet werden. Ist dies der Fall, haben Sie ein Recht auf 
                  Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO im Einzelnen 
                  aufgeführten Informationen.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Recht auf Berichtigung</h3>
                <p>
                  Sie haben das Recht auf Berichtigung und/oder Vervollständigung der Sie betreffenden 
                  personenbezogenen Daten (Art. 16 DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Recht auf Löschung</h3>
                <p>
                  Sie haben das Recht, von uns zu verlangen, dass die Sie betreffenden personenbezogenen 
                  Daten unverzüglich gelöscht werden, sofern die Voraussetzungen des Art. 17 DSGVO erfüllt sind.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Recht auf Einschränkung der Verarbeitung</h3>
                <p>
                  Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen, 
                  wenn eine der Voraussetzungen des Art. 18 DSGVO erfüllt ist.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Recht auf Datenübertragbarkeit</h3>
                <p>
                  Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns 
                  bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format 
                  zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne 
                  Behinderung zu übermitteln (Art. 20 DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Widerruf der Einwilligung</h3>
                <p>
                  Sie haben das Recht, eine erteilte Einwilligung zur Verarbeitung personenbezogener 
                  Daten jederzeit zu widerrufen. Der Widerruf der Einwilligung berührt nicht die 
                  Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung.
                </p>

                <h3 className="text-lg font-semibold text-brand-brown-700">Beschwerderecht</h3>
                <p>
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung 
                  personenbezogener Daten durch uns zu beschweren (Art. 77 DSGVO).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mb-4">
                8. Kontakt
              </h2>
              <div className="text-brand-brown-600 space-y-2">
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                <div className="bg-brand-sand p-4 rounded-lg">
                  <p><strong>ATIYE Beauty Studio</strong></p>
                  <p>Atiye Yilmaz</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>E-Mail: info@atiye-beauty.de</p>
                  <p>Telefon: +49 123 456 789</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
