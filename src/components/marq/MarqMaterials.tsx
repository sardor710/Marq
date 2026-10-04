"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { materialPanels } from "@/lib/marq";
import { useLanguage } from "@/context/LanguageContext";
import type { MarqMaterialPanel } from "@/types/marq";

/**
 * Section 9 & 10: Triple Material Showcase (Damascus -> Carbon -> Titanium)
 * 
 * - Pacing adjusted to h-[500vh] (30% reduction from previous).
 * - Damascus, Carbon, and Titanium series watches rotate around 10-15 degrees clockwise with scroll.
 * - Background textures continuously pan with scroll with 30% reduced translation (~385px - 420px).
 */
export function MarqMaterials() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const panels: MarqMaterialPanel[] = [
    {
      ...materialPanels[0],
      title: t.materials.damascus.title,
      body: t.materials.damascus.body,
    },
    {
      ...materialPanels[1],
      title: t.materials.carbon.title,
      body: t.materials.carbon.body,
    },
    {
      ...materialPanels[2],
      title: t.materials.titanium.title,
      body: t.materials.titanium.body,
    },
  ];

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

  // ==========================================
  // STAGE 0: DAMASCUS STEEL (progress 0.00 -> 0.35)
  // ==========================================
  // Fade in / out
  const p0Enter = Math.max(0, Math.min(1, progress / 0.05));
  const p0Exit = Math.max(0, Math.min(1, (progress - 0.28) / 0.05));
  const p0Opacity = p0Enter * (1 - p0Exit);

  // Watch entrance translateY finishes early (0.00 -> 0.06)
  const p0WatchProgress = Math.max(0, Math.min(1, progress / 0.06));
  const p0WatchTranslateY = (1 - p0WatchProgress) * 90;

  // Watch rotates 10-15 degrees CLOCKWISE with scroll throughout stage
  const p0ScrollRatio = Math.max(0, Math.min(1, progress / 0.28));
  const p0WatchRotate = -2 + p0ScrollRatio * 14; // rotates clockwise -2° -> +12° (+14° clockwise)

  // Background moves continuously with scroll (reduced by 30% to 385px)
  const p0BgTranslateX = -Math.min(1.2, progress / 0.32) * 385;

  // ==========================================
  // STAGE 1: CARBON EDITION (progress 0.29 -> 0.68)
  // ==========================================
  // Fade in / out
  const p1Enter = Math.max(0, Math.min(1, (progress - 0.28) / 0.05));
  const p1Exit = Math.max(0, Math.min(1, (progress - 0.61) / 0.05));
  const p1Opacity = p1Enter * (1 - p1Exit);

  // Watch horizontal entry finishes early (0.28 -> 0.35)
  const p1WatchProgress = Math.max(0, Math.min(1, (progress - 0.28) / 0.07));
  const p1WatchTranslateX = (1 - p1WatchProgress) * -140;

  // Watch rotates 10-15 degrees CLOCKWISE with scroll throughout stage
  const p1ScrollRatio = Math.max(0, Math.min(1, (progress - 0.28) / 0.33));
  const p1WatchRotate = -2 + p1ScrollRatio * 14; // rotates clockwise -2° -> +12° (+14° clockwise)

  // Background moves continuously across stage (reduced by 30% to 420px)
  const p1Norm = Math.max(0, Math.min(1, (progress - 0.28) / 0.33));
  const p1BgTranslateX = (p1Norm - 0.5) * 420;

  // ==========================================
  // STAGE 2: TITANIUM EDITION (progress 0.61 -> 1.00)
  // ==========================================
  // Fade in / out
  const p2Enter = Math.max(0, Math.min(1, (progress - 0.61) / 0.05));
  const p2Exit = Math.max(0, Math.min(1, (progress - 0.94) / 0.05));
  const p2Opacity = p2Enter * (1 - p2Exit * 0.5);

  // Watch entry finishes early (0.61 -> 0.68)
  const p2WatchProgress = Math.max(0, Math.min(1, (progress - 0.61) / 0.07));
  const p2WatchTranslateY = (1 - p2WatchProgress) * 80;

  // Watch rotates 10-15 degrees CLOCKWISE with scroll throughout stage
  const p2ScrollRatio = Math.max(0, Math.min(1, (progress - 0.61) / 0.33));
  const p2WatchRotate = -2 + p2ScrollRatio * 14; // rotates clockwise -2° -> +12° (+14° clockwise)

  // Background moves continuously across stage (reduced by 30% to 385px)
  const p2Norm = Math.max(0, Math.min(1, (progress - 0.61) / 0.34));
  const p2BgTranslateX = -p2Norm * 385;
  const p2ExitTranslateY = -p2Exit * 60; // Gentle upward drift on exit

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-black">
      {/* Scroll-pinned full viewport stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center select-none">
        
        {/* PANEL 0: DAMASCUS STEEL */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-150"
          style={{ opacity: p0Opacity }}
        >
          {/* Background continuously moving with scroll */}
          <div
            className="absolute inset-[-25%] h-[150%] w-[150%] bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${panels[0].background})`,
              transform: `translate3d(${p0BgTranslateX}px, 0, 0)`,
            }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Damascus Content */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
            <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Watch appearing and rotating 10-15 deg clockwise with scroll */}
              <div
                className="flex justify-center will-change-transform"
                style={{
                  transform: `translate3d(0, ${p0WatchTranslateY}px, 0) rotate(${p0WatchRotate}deg)`,
                }}
              >
                <Image
                  src={panels[0].watch}
                  alt={panels[0].title}
                  width={900}
                  height={720}
                  priority
                  className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)]"
                />
              </div>

              {/* Text: positioned at middle of center and side */}
              <div
                className="flex justify-center will-change-transform"
                style={{
                  transform: `translate3d(0, ${p0WatchTranslateY * 0.4}px, 0)`,
                }}
              >
                <div className="w-full max-w-[450px] text-center md:text-left">
                  <h3 className="marq-display text-[30px] leading-tight md:text-[42px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    {panels[0].title}
                  </h3>
                  <span className="mx-auto mt-4 block h-px w-[64px] bg-white/50 md:mx-0" />
                  <p className="mx-auto mt-5 max-w-[440px] text-[15px] font-light leading-[1.75] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:mx-0">
                    {panels[0].body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 1: CARBON EDITION */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-150"
          style={{ opacity: p1Opacity }}
        >
          {/* Background continuously shifting horizontally with scroll */}
          <div
            className="absolute inset-[-25%] h-[150%] w-[150%] bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${panels[1].background})`,
              transform: `translate3d(${p1BgTranslateX}px, 0, 0)`,
            }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Carbon Content (Watch on Right, Text on Left, Watch rotates 10-15 deg clockwise with scroll) */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
            <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Text: positioned at middle of center and side */}
              <div className="order-2 flex justify-center md:order-1 will-change-transform">
                <div className="w-full max-w-[450px] text-center md:text-left">
                  <h3 className="marq-display text-[30px] leading-tight md:text-[42px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    {panels[1].title}
                  </h3>
                  <span className="mx-auto mt-4 block h-px w-[64px] bg-white/50 md:mx-0" />
                  <p className="mx-auto mt-5 max-w-[440px] text-[15px] font-light leading-[1.75] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:mx-0">
                    {panels[1].body}
                  </p>
                </div>
              </div>

              {/* Watch shifting in from left and rotating 10-15 deg clockwise with scroll */}
              <div
                className="order-1 flex justify-center md:order-2 will-change-transform"
                style={{
                  transform: `translate3d(${p1WatchTranslateX}px, 0, 0) rotate(${p1WatchRotate}deg)`,
                }}
              >
                <Image
                  src={panels[1].watch}
                  alt={panels[1].title}
                  width={900}
                  height={720}
                  priority
                  className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: TITANIUM EDITION */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-150"
          style={{ opacity: p2Opacity }}
        >
          {/* Background continuously moving to left with scroll */}
          <div
            className="absolute inset-[-25%] h-[150%] w-[150%] bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${panels[2].background})`,
              transform: `translate3d(${p2BgTranslateX}px, 0, 0)`,
            }}
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Titanium Content (Watch on Left, Text on Right, Watch rotates 10-15 deg clockwise with scroll) */}
          <div
            className="relative z-10 flex h-full w-full items-center justify-center px-6 will-change-transform"
            style={{
              transform: `translate3d(0, ${p2ExitTranslateY}px, 0)`,
            }}
          >
            <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Watch rotating 10-15 deg clockwise with scroll */}
              <div
                className="flex justify-center will-change-transform"
                style={{
                  transform: `translate3d(0, ${p2WatchTranslateY}px, 0) rotate(${p2WatchRotate}deg)`,
                }}
              >
                <Image
                  src={panels[2].watch}
                  alt={panels[2].title}
                  width={900}
                  height={720}
                  priority
                  className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)]"
                />
              </div>

              {/* Text: positioned at middle of center and side */}
              <div className="flex justify-center will-change-transform">
                <div className="w-full max-w-[450px] text-center md:text-left">
                  <h3 className="marq-display text-[30px] leading-tight md:text-[42px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    {panels[2].title}
                  </h3>
                  <span className="mx-auto mt-4 block h-px w-[64px] bg-white/50 md:mx-0" />
                  <p className="mx-auto mt-5 max-w-[440px] text-[15px] font-light leading-[1.75] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:mx-0">
                    {panels[2].body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
