"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-serif font-bold tracking-tight text-brand-brown-700 sm:text-8xl">
            404
          </h1>
          <h2 className="text-2xl font-serif font-semibold text-brand-brown-700 mt-4 sm:text-3xl">
            Seite nicht gefunden
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-brown-600">
            Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden.
          </p>
          <p className="mt-2 text-base text-brand-brown-600">
            Möglicherweise wurde die Seite verschoben oder existiert nicht mehr.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild variant="default" size="lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Zur Startseite
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
