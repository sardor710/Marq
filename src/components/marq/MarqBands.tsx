"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 11 — "Create your signature look" bands showcase. */
export function MarqBands() {
  const { ref, visible } = useReveal<HTMLDivElement>({ once: false, threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section className="relative flex h-screen min-h-screen w-full flex-col justify-between overflow-hidden bg-black select-none">
      {/* bands imagery filling background smoothly with growlines matching original site */}
      <div
        className="relative flex-1 w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/marq/images/marq-bands-bg.jpg)" }}
      >
        <div className="absolute left-[20%] top-[60%] flex flex-col items-start">
          <span className="text-[13px] font-light text-white md:text-[15px] drop-shadow-md">
            {t.bands.nylonLabel}
          </span>
          <span
            className={`mt-1.5 block h-[2px] bg-white transition-all duration-1000 ease-out ${
              visible ? "w-28 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 flex flex-col items-center">
          <span className="text-[13px] font-light text-white md:text-[15px] drop-shadow-md">
            {t.bands.leatherLabel}
          </span>
          <span
            className={`mt-1.5 block h-[2px] bg-white transition-all duration-1000 delay-150 ease-out ${
              visible ? "w-28 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        <div className="absolute right-[22%] top-[40%] flex flex-col items-end">
          <span className="text-[13px] font-light text-white md:text-[15px] drop-shadow-md">
            {t.bands.titaniumLabel}
          </span>
          <span
            className={`mt-1.5 block h-[2px] bg-white transition-all duration-1000 delay-300 ease-out ${
              visible ? "w-28 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* heading + copy pinned cleanly at bottom without overflowing */}
      <div
        ref={ref}
        className={`marq-reveal ${visible ? "is-visible" : ""} relative z-10 mx-auto w-full max-w-[1000px] px-6 pb-12 pt-6 text-center bg-gradient-to-t from-black via-black/80 to-transparent`}
      >
        <h2 className="marq-display text-[32px] leading-tight text-white/90 md:text-[46px]">
          {t.bands.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[900px] text-[14px] font-light leading-[1.7] text-white/90 md:text-[15px]">
          {t.bands.body}
        </p>
      </div>
    </section>
  );
}
