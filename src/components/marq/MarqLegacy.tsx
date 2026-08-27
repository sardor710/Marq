"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 12 — Our Legacy. Thin-bordered box: copy left, product-box photo right. */
export function MarqLegacy() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="legacy" className="w-full bg-black px-6 py-24">
      <div
        ref={ref}
        className={`marq-reveal ${visible ? "is-visible" : ""} mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 border border-white/40 p-8 md:grid-cols-2 md:gap-12 md:p-12`}
      >
        <div>
          <h2 className="marq-display text-[40px] leading-none md:text-[52px]">{t.legacy.heading}</h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[440px] text-[15px] font-light leading-[1.75] text-white/90">
            {t.legacy.body}
          </p>
          <a
            href="#"
            className="mt-8 inline-flex bg-white px-8 py-3 text-[13px] font-medium uppercase tracking-[0.06em] text-black transition-colors hover:bg-white/80"
          >
            {t.legacy.learnMore}
          </a>
        </div>
        <div>
          <Image
            src="/marq/images/legacy.jpg"
            alt={t.legacy.imageAlt}
            width={1000}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
