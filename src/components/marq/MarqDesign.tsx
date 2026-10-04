"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/** 
 * Section 7 — Design. Copy on the left; authentic 4-segment composite watch on the right.
 * Animation: Same light up from center to borders through scroll (brightness 0% to 100%, radial expansion).
 */
export function MarqDesign() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // 0 when section enters bottom, 1 when centered
          const enterDistance = windowHeight - rect.top;
          const raw = enterDistance / (windowHeight * 0.85);
          setProgress(Math.max(0, Math.min(1, raw)));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brightness = Math.round(progress * 100);
  const maskRadius = Math.round(progress * 130);
  const textOpacity = Math.max(0, Math.min(1, (progress - 0.25) / 0.5));
  const textTranslateY = (1 - textOpacity) * 30;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* Dynamic Background Light-up Radial Aura */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-radial-vignette opacity-80"
        style={{
          background: `radial-gradient(circle at 65% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) ${maskRadius}%)`,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left: Text Description */}
        <div
          className="transition-transform duration-100 ease-out will-change-transform"
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
          }}
        >
          <h2 className="marq-display text-[44px] leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-[60px]">
            {t.design.heading}
          </h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[480px] text-[15px] font-light leading-[1.75] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-[16px]">
            {t.design.body}
          </p>
        </div>

        {/* Right: Watch Dial composite image lighting up from center to borders */}
        <div
          className="flex items-center justify-center transition-all duration-100 ease-out will-change-transform"
          style={{
            filter: `brightness(${brightness}%) contrast(${90 + progress * 15}%)`,
            maskImage: `radial-gradient(circle at center, black 0%, black ${maskRadius}%, transparent ${maskRadius + 30}%)`,
            WebkitMaskImage: `radial-gradient(circle at center, black 0%, black ${maskRadius}%, transparent ${maskRadius + 30}%)`,
            transform: `scale(${0.92 + progress * 0.08})`,
            opacity: Math.max(0.05, progress),
          }}
        >
          <Image
            src="/marq/images/overview-bg-02.jpg"
            alt={t.design.imageAlt}
            width={750}
            height={750}
            priority
            className="h-auto w-full max-w-[540px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>
    </section>
  );
}
