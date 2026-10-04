"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/** 
 * Section 6 — Quality. Watch-in-hand background, heading + copy on the right.
 * Animation: lights up from center to borders through scroll (brightness 0% to 100%, radial expansion).
 */
export function MarqQuality() {
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

          // 0 when top of section enters viewport bottom, 1 when section is centered
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

  // Brightness lights up from 0 to 100%
  const brightness = Math.round(progress * 100);
  // Radial bloom mask expands from 0% circle in center to 150% covering whole screen
  const maskRadius = Math.round(progress * 130);
  const textOpacity = Math.max(0, Math.min(1, (progress - 0.25) / 0.5));
  const textTranslateY = (1 - textOpacity) * 30;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* Background Image with Dynamic Brightness and Radial Light-up Bloom */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center transition-[filter] duration-75 ease-out"
        style={{
          backgroundImage: "url(/marq/images/overview-bg-01.jpg)",
          filter: `brightness(${brightness}%) contrast(${90 + progress * 15}%)`,
          maskImage: `radial-gradient(circle at center, black 0%, black ${maskRadius}%, transparent ${maskRadius + 30}%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 0%, black ${maskRadius}%, transparent ${maskRadius + 30}%)`,
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1300px] grid-cols-1 px-6 md:grid-cols-2">
        <div className="hidden md:block" />
        <div
          className="md:pl-8 transition-transform duration-100 ease-out will-change-transform"
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
          }}
        >
          <h2 className="marq-display text-[44px] leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-[54px]">
            {t.quality.heading}
          </h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[560px] text-[15px] font-light leading-[1.75] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-[16px]">
            {t.quality.body}
          </p>
        </div>
      </div>
    </section>
  );
}
