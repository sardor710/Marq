"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/** 
 * Section 2 — "The quest for excellence" dark stone intro.
 * 
 * - Pinned sticky container (h-[180vh]) so the section locks at top-0.
 * - Headline and body text do NOT move from bottom to center — they are pinned in the center
 *   and appear slowly in place with opacity.
 * - Stone background moves UP continuously during scroll.
 */
export function MarqTextIntro() {
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
          const raw = totalScrollDistance > 0 ? currentScroll / totalScrollDistance : 0;
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

  // Parallax background: moves UP continuously as user scrolls
  const bgOffsetY = -progress * 260;

  // Staggered slow appearance on center WITHOUT any vertical movement:
  // Heading appears slowly first (0.05 -> 0.42)
  const headingOpacity = Math.max(0, Math.min(1, (progress - 0.05) / 0.37));

  // Body text appears slowly second (0.28 -> 0.70)
  const bodyOpacity = Math.max(0, Math.min(1, (progress - 0.28) / 0.42));

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full bg-[#0a0a0a]">
      {/* Sticky Full-Viewport Stage — locks in place so text never travels from bottom */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6 select-none">
        
        {/* Stone Background moving UP with scroll */}
        <div
          className="pointer-events-none absolute inset-[-20%] h-[140%] w-[140%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url(/marq/images/stone-bg.jpg)",
            transform: `translate3d(0, ${bgOffsetY}px, 0)`,
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Centered Text Container — Pinned statically in center, reveals purely with opacity */}
        <div className="relative z-10 mx-auto max-w-[1000px] text-center">
          <h2
            className="marq-display text-[42px] leading-[1.2] text-white/95 md:text-[58px] transition-opacity duration-150 ease-out drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            style={{ opacity: headingOpacity }}
          >
            {t.textIntro.heading}
          </h2>
          <p
            className="mx-auto mt-8 max-w-[820px] text-[18px] font-light leading-[1.8] text-white md:text-[24px] transition-opacity duration-150 ease-out drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            style={{ opacity: bodyOpacity }}
          >
            {t.textIntro.body}
          </p>
        </div>

      </div>
    </section>
  );
}
