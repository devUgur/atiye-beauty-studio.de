import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { LocalBusinessJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd
        name="ATIYE Beauty Studio"
        description="Professionelle Laser-Haarentfernung für Frauen und Männer. NiSV-zertifiziert, moderne Technologie, transparente Preise."
        url="https://atiye-beauty-studio.de"
        telephone="+49123456789"
        email="info@atiye-beauty.de"
        address={{
          streetAddress: "Musterstraße 123",
          addressLocality: "Musterstadt",
          postalCode: "12345",
          addressCountry: "DE",
        }}
        geo={{
          latitude: "52.5200",
          longitude: "13.4050",
        }}
        openingHours={[
          "Mo-Fr 09:00-18:00",
          "Sa 09:00-14:00",
        ]}
        priceRange="€€"
        serviceArea={{
          geoRadius: "50000",
          geoMidpoint: "52.5200,13.4050",
        }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <FAQ />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
