"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/** Sticky product sub-nav (section.p-sticky). Sticks below the site header. */
export function MarqSubNav() {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-[100] h-[60px] w-full bg-[#141414]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 lg:px-6">
        <h2 className="font-heading text-[26px] font-normal uppercase leading-[60px] tracking-normal text-white">
          {t.subNav.title}
        </h2>
        <div className="flex items-center gap-6">
          <Link
            href="#introduction"
            className="hidden text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-colors hover:text-white/70 sm:inline"
          >
            {t.subNav.intro}
          </Link>
          <Link
            href="#legacy"
            className="hidden text-[13px] font-medium uppercase tracking-[0.06em] text-white/60 transition-colors hover:text-white sm:inline"
          >
            {t.subNav.legacy}
          </Link>
          <a
            href="#collection"
            className="g-btn g-btn--outline-light text-[12px]"
          >
            {t.subNav.buyNow}
          </a>
        </div>
      </div>
    </div>
  );
}
