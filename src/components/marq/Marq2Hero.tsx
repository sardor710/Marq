"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Section 1 — Hero Key Visual:
 * 1. Clouds move horizontally to the left in an unlimited continuous loop behind the mountains (z-[2]).
 * 2. Mountains placed lower (top-[32%]) leaving clear upper sky for the title.
 * 3. Watches picture fits until half of the screen from the bottom (h-[50vh], bottom-0),
 *    scaling proportionally to screen size and noticeably bigger.
 * 4. MARQ Collection title slogan emerges from behind the lowered mountain peaks (z-[5] vs mountains z-[8]).
 */
export function Marq2Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation shortly after mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="introduction"
      className="relative h-[calc(100vh-124px)] min-h-[620px] w-full overflow-hidden bg-black bg-cover bg-center select-none flex items-center justify-center"
      style={{ backgroundImage: "url(/marq/images/kv-bg.jpg)" }}
    >
      {/* 1. SEAMLESS UNLIMITED LOOPING CLOUDS (Moving Horizontally to Left) — Behind Mountains (z-[2]) */}
      <div className="marq-cloud-scroll" />

      {/* 2. TITLE SLOGAN — Emerges from BEHIND mountain peaks (z-[5] behind Mountains z-[8]) */}
      <div
        className={`absolute inset-x-0 top-[5%] sm:top-[6%] md:top-[7%] z-[5] flex justify-center px-4 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-[260px] opacity-0"
        }`}
        style={{ transitionDelay: mounted ? "350ms" : "0ms" }}
      >
        <Image
          src="/marq/images/product-name.png"
          alt={t.hero.titleAlt}
          width={1148}
          height={600}
          priority
          className="h-auto w-[520px] max-w-[85vw] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* 3. MOUNTAIN SILHOUETTES LAYER — Placed lower (top-[32%]) to reveal open sky above (z-[8]) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[32%] sm:top-[30%] md:top-[32%] z-[8] h-[900px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/marq/images/kv-mountain.png)" }}
      />

      {/* 4. WATCHES LINEUP — Fits until half of screen from bottom, proportionally sized and bigger (z-[15]) */}
      <div
        className={`absolute bottom-0 left-1/2 z-[15] -translate-x-1/2 flex justify-center items-end transition-all duration-[1600ms] ease-out ${
          mounted
            ? "opacity-100 scale-100"
            : "opacity-0 scale-[0.96]"
        }`}
        style={{ transitionDelay: mounted ? "600ms" : "0ms" }}
      >
        <Image
          src="/marq/images/marq-collection.png"
          alt={t.hero.lineupAlt}
          width={1600}
          height={542}
          priority
          className="h-[50vh] min-h-[300px] max-h-[520px] w-auto max-w-[96vw] object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.98)]"
        />
      </div>

      {/* 5. SUBTLE BOTTOM BOUNDARY */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[18] h-[20px] bg-gradient-to-b from-transparent to-black/40" />

    </section>
  );
}
