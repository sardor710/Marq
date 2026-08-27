"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

import { useLanguage } from "@/context/LanguageContext";

const tiles = [
  "/marq/images/material-bg-02.jpg",
  "/marq/images/material-bg-03.jpg",
  "/marq/images/stone-bg.jpg",
  "/marq/images/material-bg-01.jpg",
];

/** Section 7 — Design. Copy on the left; 2x2 material tiles with a centered watch. */
export function MarqDesign() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section className="relative flex h-[893px] w-full items-center bg-black">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div ref={ref} className={`marq-reveal ${visible ? "is-visible" : ""}`}>
          <h2 className="marq-display text-[44px] leading-none md:text-[60px]">{t.design.heading}</h2>
          <span className="mt-4 block h-px w-[64px] bg-white/50" />
          <p className="mt-6 max-w-[480px] text-[15px] font-light leading-[1.75] text-white/90 md:text-[16px]">
            {t.design.body}
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2">
            {tiles.map((t) => (
              <div
                key={t}
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${t})` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/marq/images/marq-spec-aviator.png"
              alt={t.design.imageAlt}
              width={600}
              height={720}
              className="h-[88%] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
