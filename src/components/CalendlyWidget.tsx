"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
        utm?: Record<string, string>;
      }) => void;
      showPopupWidget: (url: string) => void;
      closePopupWidget: () => void;
    };
  }
}

interface CalendlyWidgetProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  className?: string;
  mode?: "inline" | "iframe";
}

/**
 * Calendly Widget Component
 * 
 * Supports two modes:
 * - inline: Uses Calendly's inline widget (requires script)
 * - iframe: Simple iframe embed (no script needed, more stable)
 * 
 * For Free Calendly Plan: Use iframe mode (recommended)
 */
export default function CalendlyWidget({
  url,
  prefill,
  className = "",
  mode = "iframe",
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  // Inline Mode - Requires Calendly script
  useEffect(() => {
    if (mode !== "inline") return; // Early return is OK inside useEffect
    if (!scriptLoaded.current && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        initWidget();
      };
      document.body.appendChild(script);
    } else if (window.Calendly) {
      initWidget();
    }

    function initWidget() {
      if (!containerRef.current || !window.Calendly) return;

      try {
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: prefill
            ? {
                name: prefill.name,
                email: prefill.email,
                customAnswers: prefill.phone
                  ? { a1: prefill.phone }
                  : undefined,
              }
            : undefined,
          utm: {
            utmCampaign: "Website",
            utmSource: "atiye-beauty-studio",
            utmMedium: "web",
          },
        });
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, [url, prefill, mode]);

  // IFrame Mode - Simple and stable (recommended for Free Plan)
  if (mode === "iframe") {
    // Build URL with prefill parameters
    const iframeUrl = new URL(url);
    if (prefill?.name) {
      iframeUrl.searchParams.set("name", prefill.name);
    }
    if (prefill?.email) {
      iframeUrl.searchParams.set("email", prefill.email);
    }
    // Note: Phone can't be pre-filled via URL in Free Plan

    return (
      <div className={className}>
        <iframe
          src={iframeUrl.toString()}
          width="100%"
          height="700"
          frameBorder="0"
          className="w-full rounded-lg"
          title="Termin buchen"
        />
      </div>
    );
  }

  // Inline Mode - Return widget container
  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      style={{
        minWidth: "320px",
        height: "700px",
      }}
    />
  );
}
