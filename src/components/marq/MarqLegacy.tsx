"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

/** Section 12 — Our Legacy. Thin-bordered box: copy left, product-box photo right. */
export function MarqLegacy() {
  const { ref, visible } = useReveal<HTMLDivElement>({ once: false, threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section id="legacy" className="relative flex h-screen min-h-screen w-full items-center justify-center bg-black px-4 sm:px-8 lg:px-12 py-8 overflow-hidden select-none">
      <div
        ref={ref}
        className={`marq-reveal ${visible ? "is-visible" : ""} mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 lg:gap-14 border border-white/30 bg-neutral-950/40 p-6 sm:p-10 lg:p-14 backdrop-blur-sm md:grid-cols-2`}
      >
        <div className="flex flex-col justify-center">
          <h2 className="marq-display text-[42px] leading-none md:text-[56px] lg:text-[64px]">{t.legacy.heading}</h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[500px] text-[15px] font-light leading-[1.8] text-white/90 md:text-[17px]">
            {t.legacy.body}
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-fit bg-white px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-black transition-all hover:bg-neutral-200 hover:scale-105"
          >
            {t.legacy.learnMore}
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <Image
            src="/marq/images/legacy.jpg"
            alt={t.legacy.imageAlt}
            width={1200}
            height={850}
            className="h-auto w-full object-cover scale-[1.04] transition-transform duration-700 group-hover:scale-108 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
