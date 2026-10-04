"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { productCards } from "@/lib/marq";
import { useLanguage } from "@/context/LanguageContext";

const accentVar: Record<string, string> = {
  red: "var(--marq-red)",
  green: "var(--marq-green)",
  gold: "var(--marq-gold)",
};

/** Section 13 — final product carousel over the starry collection background. */
export function MarqProductCarousel() {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    track.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  const getEditionLabel = (edition: string) => {
    if (edition.includes("TITANIUM")) return t.productCarousel.editions.titanium;
    if (edition.includes("CARBON")) return t.productCarousel.editions.carbon;
    if (edition.includes("DAMASCUS")) return t.productCarousel.editions.damascus;
    return edition;
  };

  return (
    <section
      id="collection"
      className="relative flex h-screen min-h-screen w-full flex-col justify-center overflow-hidden bg-black bg-cover bg-center py-10"
      style={{ backgroundImage: "url(/marq/images/marq-spec-bg.jpg)" }}
    >
      <div className="mx-auto mb-4 flex max-w-[560px] justify-center px-6">
        <Image
          src="/marq/images/product-name.png"
          alt={t.productCarousel.imageAlt}
          width={1148}
          height={600}
          className="h-auto w-[420px] max-w-full"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-6 sm:px-12 lg:px-16">
        <button
          type="button"
          aria-label={t.productCarousel.prev}
          onClick={() => scroll(-1)}
          className="absolute left-1 sm:left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2.5 bg-black/60 border border-white/20 text-white/70 backdrop-blur-md transition-all hover:bg-white hover:text-black cursor-pointer shadow-lg"
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </button>
        <button
          type="button"
          aria-label={t.productCarousel.next}
          onClick={() => scroll(1)}
          className="absolute right-1 sm:right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2.5 bg-black/60 border border-white/20 text-white/70 backdrop-blur-md transition-all hover:bg-white hover:text-black cursor-pointer shadow-lg"
        >
          <ChevronRightIcon className="h-7 w-7" />
        </button>

        <div ref={track} className="no-scrollbar flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-2">
          {productCards.map((card, i) => (
            <div key={card.model + i} className="group w-[210px] sm:w-[230px] md:w-[250px] lg:w-[270px] shrink-0 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="relative flex items-center justify-center overflow-hidden">
                {card.isNew && (
                  <span className="absolute left-2 top-0 z-10 border border-white/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white bg-black/50 backdrop-blur-sm">
                    {t.productCarousel.newTag}
                  </span>
                )}
                <Image
                  src={card.image}
                  alt={`MARQ ${card.model} — ${card.edition}`}
                  width={420}
                  height={520}
                  className="mx-auto h-[220px] sm:h-[260px] md:h-[280px] max-h-[30vh] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 text-[11px] font-light uppercase tracking-[0.14em] text-white/60">
                {getEditionLabel(card.edition)}
              </p>
              <h3 className="mt-1 inline-block pb-2 font-heading text-[21px] sm:text-[23px] font-normal uppercase leading-none text-white tracking-wide">
                {card.model}
              </h3>
              <span
                className="mx-auto block h-[3px] w-full max-w-[140px] transition-all duration-300 group-hover:max-w-[180px]"
                style={{ backgroundColor: accentVar[card.accent] }}
              />
              <a
                href={card.href}
                className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white transition-colors hover:text-white/70"
              >
                {t.productCarousel.learnMore}
                <ChevronRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
