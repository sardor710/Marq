"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  GarminLogo,
  SearchIcon,
  AccountIcon,
  CartIcon,
  ChevronRightIcon,
  GlobeIcon,
} from "@/components/icons";

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-[9999] w-full bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Garmin home" className="flex shrink-0 items-center">
          <GarminLogo className="h-[19px] w-auto text-black" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" onMouseLeave={() => setOpenIndex(null)}>
          <ul className="flex items-center gap-6">
            {t.nav.map((item, i) => (
              <li
                key={item.label}
                className="flex h-16 items-center"
                onMouseEnter={() => setOpenIndex(item.columns ? i : null)}
              >
                <Link
                  href={item.href}
                  className="text-[13px] tracking-[0.04em] text-black transition-colors hover:text-[#007cc3]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mega-menu dropdown */}
          {openIndex !== null && t.nav[openIndex]?.columns && (
            <div
              className="absolute inset-x-0 top-16 z-50 border-t border-neutral-200 bg-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)]"
              onMouseEnter={() => setOpenIndex(openIndex)}
            >
              <div className="mx-auto flex max-w-[1200px] gap-16 px-6 py-8">
                {t.nav[openIndex]!.columns!.map((col, ci) => (
                  <div key={ci} className="min-w-[200px]">
                    {col.heading && (
                      <h3 className="g-heading mb-4 text-[13px] tracking-[0.08em] text-black">
                        {col.heading}
                      </h3>
                    )}
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="flex items-center justify-between text-[13px] text-neutral-600 transition-colors hover:text-[#007cc3]"
                            onClick={() => setOpenIndex(null)}
                          >
                            <span>{link.label}</span>
                            <ChevronRightIcon className="h-3.5 w-3.5 opacity-40" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Right utility icons & Language Switcher */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Switcher */}
          <div
            className="flex items-center rounded-full bg-neutral-100 p-0.5 border border-neutral-200 text-[11px] font-semibold tracking-wider"
            role="group"
            aria-label={t.header.langSwitch}
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                locale === "en"
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("ru")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                locale === "ru"
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
              aria-pressed={locale === "ru"}
            >
              RU
            </button>
          </div>

          <button aria-label={t.header.search} className="p-1 text-black hover:text-[#007cc3] cursor-pointer">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button aria-label={t.header.account} className="p-1 text-black hover:text-[#007cc3] cursor-pointer">
            <AccountIcon className="h-5 w-5" />
          </button>
          <button aria-label={t.header.cart} className="relative p-1 text-black hover:text-[#007cc3] cursor-pointer">
            <CartIcon className="h-5 w-5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={t.header.menu}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
          >
            <span
              className={`block h-0.5 w-5 bg-black transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3">
            <span className="flex items-center gap-2 text-[13px] font-medium text-neutral-600">
              <GlobeIcon className="h-4 w-4" />
              {t.header.langSwitch}:
            </span>
            <div className="flex items-center rounded-full bg-neutral-100 p-0.5 border border-neutral-200 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-3 py-1 rounded-full ${
                  locale === "en" ? "bg-black text-white" : "text-neutral-600"
                }`}
              >
                English (EN)
              </button>
              <button
                type="button"
                onClick={() => setLocale("ru")}
                className={`px-3 py-1 rounded-full ${
                  locale === "ru" ? "bg-black text-white" : "text-neutral-600"
                }`}
              >
                Русский (RU)
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {t.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-1 text-[15px] font-medium text-black hover:text-[#007cc3]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
