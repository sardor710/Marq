"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

interface MarqScrollVideoProps {
  src: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Section 8 — Full-viewport video ("Extraordinary Craftsmanship"):
 * 
 * - Pinned sticky container (h-[220vh]) so the stage locks at top-0.
 * - Text stays strictly centered — does NOT move from bottom to center.
 * - Text appears on center and disappears from center purely with brightness and opacity change.
 * - Background video moves continuously with scroll (parallax).
 */
export function MarqScrollVideo({ src, title, subtitle, ctaLabel, ctaHref }: MarqScrollVideoProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const displayTitle = title ?? t.scrollVideo.title;
  const displaySubtitle = subtitle ?? t.scrollVideo.subtitle;
  const displayCta = ctaLabel ?? t.scrollVideo.ctaLabel;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

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

          // Keep video playing while visible
          if (videoRef.current) {
            if (rect.bottom > 0 && rect.top < windowHeight) {
              if (videoRef.current.paused) videoRef.current.play().catch(() => {});
            } else {
              if (!videoRef.current.paused) videoRef.current.pause();
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background video moves with scroll (moves upward smoothly as user scrolls)
  const videoOffsetY = -progress * 260;

  // Text brightness & opacity curve (Stationary on center):
  // 0.00 -> 0.35: appears from brightness 0% to 100%
  // 0.35 -> 0.65: resting at 100% full brightness on center
  // 0.65 -> 0.95: disappears with brightness change from 100% to 0%
  let textBrightness = 0;
  if (progress < 0.35) {
    textBrightness = Math.max(0, Math.min(1, progress / 0.35));
  } else if (progress <= 0.65) {
    textBrightness = 1;
  } else {
    textBrightness = Math.max(0, Math.min(1, 1 - (progress - 0.65) / 0.30));
  }

  return (
    <section ref={containerRef} className="relative h-[220vh] w-full bg-black">
      {/* Sticky Full-Viewport Stage — locks in place so text never travels from bottom */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black select-none">
        
        {/* Video Background moving with scroll */}
        <div
          className="pointer-events-none absolute inset-[-20%] h-[140%] w-[140%] will-change-transform"
          style={{
            transform: `translate3d(0, ${videoOffsetY}px, 0)`,
          }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={src}
            muted
            playsInline
            loop
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        {/* Centered Overlay Text — Strictly stationary, appears/disappears purely via brightness */}
        {(displayTitle || displaySubtitle) && (
          <div
            className="relative z-10 flex flex-col items-center justify-center px-6 text-center transition-all duration-75 ease-out"
            style={{
              opacity: textBrightness,
              filter: `brightness(${Math.round(textBrightness * 100)}%)`,
            }}
          >
            {displayTitle && (
              <h2 className="marq-display text-[42px] leading-[1.2] text-white md:text-[62px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                {displayTitle}
              </h2>
            )}
            {displaySubtitle && (
              <p className="mt-3 text-[18px] font-medium text-white/95 md:text-[22px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {displaySubtitle}
              </p>
            )}
            {displayCta && (
              ctaHref ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-white/80 bg-black/40 backdrop-blur-sm px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-white hover:text-black cursor-pointer shadow-lg"
                >
                  {displayCta}
                  <PlayIcon className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 border border-white/80 bg-black/40 backdrop-blur-sm px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-white hover:text-black cursor-pointer shadow-lg"
                >
                  {displayCta}
                  <PlayIcon className="h-4 w-4" />
                </button>
              )
            )}
          </div>
        )}

      </div>
    </section>
  );
}
