"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 6 — Quality. Watch-in-hand background, heading + copy on the right. */
export function MarqQuality() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section
      className="relative flex h-[893px] w-full items-center bg-black bg-cover bg-center"
      style={{ backgroundImage: "url(/marq/images/overview-bg-01.jpg)" }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 px-6 md:grid-cols-2">
        <div className="hidden md:block" />
        <div
          ref={ref}
          className={`marq-reveal ${visible ? "is-visible" : ""} md:pl-8`}
        >
          <h2 className="marq-display text-[44px] leading-none md:text-[54px]">{t.quality.heading}</h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[560px] text-[15px] font-light leading-[1.75] text-white/90 md:text-[16px]">
            {t.quality.body}
          </p>
        </div>
      </div>
    </section>
  );
}
