"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = [
    "/images/01.jpg",
    "/images/02.jpg", 
    "/images/03.jpg"
  ];

  // Preload all images to prevent flickering
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still show images even if preload fails
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return; // Don't start slideshow until images are loaded
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  return (
    <section className="relative min-h-screen w-full flex items-center wave-bg overflow-hidden" id="start">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        ))}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        {/* Light overlay for better text readability with transparent header */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex items-center justify-center min-h-full py-16 md:py-12 lg:py-16">
        <div className="max-w-4xl text-left w-full">
          {/* Main Heading */}
          <h1 className="hero-text text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-3 sm:mb-4 md:mb-6 mt-6 sm:mt-8 md:mt-0">
            Dauerhaft schön.
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-4 sm:mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Dauerhafte Haarentfernung – sicher, schonend, sichtbar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-medium transition-smooth"
            >
              Termin vereinbaren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium transition-smooth"
            >
              Preise ansehen
            </Button>
          </div>

          {/* USP Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-card/80 backdrop-blur p-6 rounded-lg shadow-warm border border-border">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                NiSV-zertifiziert
              </h3>
              <p className="text-sm text-muted-foreground">
                Höchste Sicherheitsstandards nach deutscher Verordnung
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur p-6 rounded-lg shadow-warm border border-border">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                Moderne Technologie
              </h3>
              <p className="text-sm text-muted-foreground">
                Neueste Laser-Technologie für optimale Ergebnisse
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur p-6 rounded-lg shadow-warm border border-border">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                Für Frauen & Männer
              </h3>
              <p className="text-sm text-muted-foreground">
                Individuelle Behandlung für alle Hauttypen
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "bg-primary scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;