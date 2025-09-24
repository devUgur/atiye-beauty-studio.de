import React from "react";

interface LocalBusinessProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  priceRange: string;
  serviceArea: {
    geoRadius: string;
    geoMidpoint: string;
  };
}

export function LocalBusinessJsonLd({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  serviceArea,
}: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHours,
    priceRange,
    serviceArea: {
      "@type": "GeoCircle",
      geoRadius: serviceArea.geoRadius,
      geoMidpoint: serviceArea.geoMidpoint,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laser-Haarentfernung Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser-Haarentfernung für Frauen",
            description: "Professionelle Laser-Haarentfernung für alle Körperzonen bei Frauen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser-Haarentfernung für Männer",
            description: "Professionelle Laser-Haarentfernung für alle Körperzonen bei Männern",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kostenlose Beratung",
            description: "Ausführliche Beratung und Hautanalyse vor der Behandlung",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQPageProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQPageJsonLd({ faqs }: FAQPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbListProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbListJsonLd({ items }: BreadcrumbListProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServiceProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string;
  availableChannel: {
    "@type": string;
    url: string;
  };
}

export function ServiceJsonLd({
  name,
  description,
  provider,
  areaServed,
  availableChannel,
}: ServiceProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "BeautySalon",
      name: provider.name,
      url: provider.url,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    availableChannel,
    serviceType: "Laser-Haarentfernung",
    category: "Beauty Treatment",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
