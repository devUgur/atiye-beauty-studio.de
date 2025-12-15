"use client";

import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    services: [] as string[],
  });
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll('#contact .reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // Fallback: if elements are already in viewport, activate them immediately
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        el.classList.add("active");
        observer.unobserve(el);
      }
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen zurück.",
    });
    setFormData({ firstName: "", lastName: "", email: "", services: [] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const availableServices = [
    "Gesicht & Hals",
    "Körper Damen",
    "Körper Herren",
    "Komplettpakete",
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative z-20"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="reveal" ref={infoRef}>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-stone-100 tracking-tight mb-6">
              Beginnen Sie Ihre Transformation
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg mb-8 font-light">
              Wählen Sie Ihre Präferenzen unten aus und wir werden Sie kontaktieren, um Ihren Termin zu finalisieren.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="reveal delay-100">
                <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Adresse</h4>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
                  Musterstraße 123<br />
                  12345 Musterstadt, Deutschland
                </p>
              </div>
              <div className="reveal delay-100">
                <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Öffnungszeiten</h4>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
                  Di - Fr: 9:00 — 14:30<br />
                  Sa: 9:00 — 14:30
                </p>
              </div>
              <div className="reveal delay-200">
                <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Kontakt</h4>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
                  info@atiye-beauty-studio.de<br />
                  +49 (0) 123 456 78900
                </p>
              </div>
              <div className="reveal delay-200">
                <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Social Media</h4>
                <div className="flex gap-3 text-stone-400 dark:text-stone-500">
                  <a href="#" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="space-y-6 bg-stone-50 dark:bg-stone-900/50 p-8 md:p-10 rounded-sm reveal delay-200" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Vorname</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-800 dark:focus:border-stone-300 transition-colors placeholder-stone-300 dark:placeholder-stone-600"
                  placeholder="Max"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Nachname</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-800 dark:focus:border-stone-300 transition-colors placeholder-stone-300 dark:placeholder-stone-600"
                  placeholder="Mustermann"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">E-Mail-Adresse</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-800 dark:focus:border-stone-300 transition-colors placeholder-stone-300 dark:placeholder-stone-600"
                placeholder="max@beispiel.de"
                required
              />
            </div>

            <div className="space-y-3 pt-4">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Gewünschte Leistungen</label>
              <div className="flex flex-wrap gap-4">
                {availableServices.map((service) => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <span className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-stone-800 dark:hover:bg-stone-200 transition-all flex justify-center items-center gap-2 group"
              >
                Termin anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
