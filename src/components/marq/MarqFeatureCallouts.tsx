"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/** 
 * Section 11 — Sapphire Crystal Lens & AMOLED display showcase matching Garmin minisite:
 * 1. Pinned container: First displays the dual callouts text ("DOMED SAPPHIRE CRYSTAL LENS" and "AMOLED DISPLAY").
 * 2. On scroll, space opens up beneath the text revealing sapphire.jpg with expansion animation before moving down.
 */
export function MarqFeatureCallouts() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalScrollDistance = rect.height - windowHeight;

          const currentScroll = -rect.top;
          const raw = currentScroll / totalScrollDistance;
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

  // Phase 1 (0.00 -> 0.35): Dual text callout appears and pins
  const textOpacity = Math.max(0, Math.min(1, progress / 0.25));
  const textTranslateY = (1 - textOpacity) * 24;

  // Phase 2 (0.25 -> 0.85): Opens vertical space below revealing sapphire.jpg
  const imageRevealProgress = Math.max(0, Math.min(1, (progress - 0.22) / 0.45));
  const imageScale = 0.90 + 0.10 * imageRevealProgress;
  const imageTranslateY = (1 - imageRevealProgress) * 45;

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full bg-black">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 select-none">
        
        {/* 1. Feature Callouts dual text pinned at top/center */}
        <div
          className="relative z-10 flex w-full max-w-[960px] flex-col items-center justify-between gap-8 sm:flex-row text-center will-change-transform"
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
          }}
        >
          <div className="flex-1">
            <h3 className="marq-display text-[22px] tracking-[0.05em] text-white md:text-[28px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {t.featureCallouts.sapphireTitle}
            </h3>
            <span className="mx-auto mt-3 block h-px w-[60px] bg-white/50" />
            <p className="mt-3 text-[15px] font-light text-white/80 md:text-[17px]">
              {t.featureCallouts.sapphireSubtitle}
            </p>
          </div>

          <div className="flex-1">
            <h3 className="marq-display text-[22px] tracking-[0.05em] text-white md:text-[28px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {t.featureCallouts.amoledTitle}
            </h3>
            <span className="mx-auto mt-3 block h-px w-[60px] bg-white/50" />
            <p className="mt-3 text-[15px] font-light text-white/80 md:text-[17px]">
              {t.featureCallouts.amoledSubtitle}
            </p>
          </div>
        </div>

        {/* 2. Space opens up below text revealing sapphire dial image */}
        <div
          className="relative z-[5] mt-6 w-full max-w-[1100px] will-change-transform transition-transform duration-75"
          style={{
            opacity: imageRevealProgress,
            transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${imageScale})`,
          }}
        >
          <Image
            src="/marq/images/sapphire.jpg"
            alt="MARQ Domed Sapphire Crystal Lens and AMOLED Display"
            width={1920}
            height={960}
            priority
            className="mx-auto h-auto max-h-[50vh] w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          />
        </div>

      </div>
    </section>
  );
}
