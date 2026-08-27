"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 2 — "The quest for excellence" dark stone intro. */
export function MarqTextIntro() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section
      className="relative flex h-[893px] w-full items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url(/marq/images/stone-bg.jpg)", backgroundColor: "#0a0a0a" }}
    >
      <div
        ref={ref}
        className={`marq-reveal ${visible ? "is-visible" : ""} mx-auto max-w-[1000px] text-center`}
      >
        <h2 className="marq-display text-[42px] leading-[1.2] text-white/85 md:text-[58px]">
          {t.textIntro.heading}
        </h2>
        <p className="mx-auto mt-8 max-w-[820px] text-[18px] font-light leading-[1.8] text-white md:text-[24px]">
          {t.textIntro.body}
        </p>
      </div>
    </section>
  );
}
