# ATIYE Beauty Studio - Laser-Haarentfernung Website

Eine moderne, SEO-optimierte Website für ein Laser-Haarentfernung Studio in Deutschland.

## 🚀 Features

- **Next.js 15** mit App Router und TypeScript
- **Tailwind CSS** mit benutzerdefinierten Brand-Farben
- **Responsive Design** für alle Geräte
- **SEO-optimiert** mit strukturierten Daten (JSON-LD)
- **Accessibility** (WCAG 2.1 AA konform)
- **Deutsche Lokalisierung** (de-DE)
- **Kontaktformulare** mit Validierung
- **Automatische Sitemap-Generierung**

## 🎨 Brand Design

### Farben
- **Cream**: #F3EEE8 (Hintergrund)
- **Sand**: #EAE1D8 (Alternative Sektionen)
- **Brown 600**: #7A5241 (Primärtext/Akzente)
- **Brown 700**: #6B4A3A (Überschriften/Buttons)
- **Brown 300**: #B9917B (Sanfte Akzente)
- **Bronze**: #B08A6A (Hover/Linien)

### Typografie
- **Serif**: Cormorant Garamond (Überschriften)
- **Sans**: Inter (Body/UI)

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Startseite
│   ├── leistungen/        # Leistungen
│   ├── preise/            # Preise
│   ├── faq/               # FAQ
│   ├── ueber-uns/         # Über uns
│   ├── kontakt/           # Kontakt
│   ├── termin/            # Termin vereinbaren
│   ├── rechtliches/       # Impressum & Datenschutz
│   └── api/og/            # OG Image Generator
├── components/
│   ├── ui/                # UI Komponenten
│   └── sections/          # Seiten-Sektionen
└── lib/
    ├── utils.ts           # Utility Funktionen
    └── jsonld.tsx         # JSON-LD Strukturierte Daten
```

## 🛠️ Installation & Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation
```bash
# Repository klonen
git clone <repository-url>
cd atiye-beauty-studio.de

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:3000` verfügbar.

### Build für Produktion
```bash
# Build erstellen
npm run build

# Produktionsserver starten
npm start
```

## 📝 Inhalte bearbeiten

### Preise aktualisieren
Die Preise befinden sich in `src/app/preise/page.tsx` im `priceData` Objekt.

### FAQ bearbeiten
Die FAQ-Inhalte befinden sich in `src/app/faq/page.tsx` im `faqs` Array.

### Kontaktdaten ändern
Kontaktdaten können in folgenden Dateien aktualisiert werden:
- `src/app/layout.tsx` (Metadata)
- `src/components/sections/Footer.tsx`
- `src/lib/jsonld.tsx` (Strukturierte Daten)

## 🚀 Deployment auf Vercel

1. **Repository mit Vercel verbinden**
   - Vercel Dashboard öffnen
   - "New Project" → GitHub Repository auswählen
   - Projekt importieren

2. **Umgebungsvariablen setzen** (optional)
   ```
   SITE_URL=https://atiye-beauty-studio.de
   ```

3. **Deploy**
   - Automatisches Deployment bei Git Push
   - Manuelles Deployment über Vercel Dashboard

## 🔧 Konfiguration

### Sitemap
Die Sitemap wird automatisch bei jedem Build generiert. Konfiguration in `next-sitemap.config.js`.

### SEO
- Meta-Tags in `src/app/layout.tsx`
- Strukturierte Daten in `src/lib/jsonld.tsx`
- OG Images über `/api/og`

### Analytics (optional)
Für Analytics können Sie Plausible oder Google Analytics hinzufügen:

```typescript
// In src/app/layout.tsx
<script
  defer
  data-domain="atiye-beauty-studio.de"
  src="https://plausible.io/js/script.js"
></script>
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- Skip-to-content Links
- Keyboard Navigation
- ARIA Labels
- Semantic HTML
- Color Contrast (WCAG AA)

## 🔍 SEO Features

- Automatische Sitemap-Generierung
- JSON-LD Strukturierte Daten
- Open Graph Meta Tags
- Twitter Cards
- Canonical URLs
- Robots.txt

## 📞 Support

Bei Fragen oder Problemen:
- E-Mail: info@atiye-beauty.de
- Telefon: +49 123 456 789

## 📄 Lizenz

© 2024 ATIYE Beauty Studio. Alle Rechte vorbehalten.

---

**"Dauerhaft schön."** - Ihre professionelle Laser-Haarentfernung