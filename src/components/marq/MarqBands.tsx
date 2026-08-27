"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 11 — "Create your signature look" bands showcase. */
export function MarqBands() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section className="w-full bg-black">
      {/* bands imagery with overlaid strap labels */}
      <div
        className="relative aspect-[1920/1080] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/marq/images/marq-bands-bg.jpg)" }}
      >
        <span className="absolute left-[22%] top-[62%] text-[13px] font-light text-white md:text-[15px]">
          {t.bands.nylonLabel}
        </span>
        <span className="absolute left-1/2 top-[32%] -translate-x-1/2 text-[13px] font-light text-white md:text-[15px]">
          {t.bands.leatherLabel}
        </span>
        <span className="absolute right-[26%] top-[42%] text-[13px] font-light text-white md:text-[15px]">
          {t.bands.titaniumLabel}
        </span>
      </div>

      {/* heading + copy */}
      <div
        ref={ref}
        className={`marq-reveal ${visible ? "is-visible" : ""} mx-auto max-w-[1000px] px-6 pb-24 pt-12 text-center`}
      >
        <h2 className="marq-display text-[38px] leading-tight text-white/85 md:text-[54px]">
          {t.bands.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] text-[14px] font-light leading-[1.8] text-white/90 md:text-[15px]">
          {t.bands.body}
        </p>
      </div>
    </section>
  );
}
