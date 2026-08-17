"use client";

import { useState } from "react";
import Link from "next/link";
import { topNav } from "@/lib/content";
import {
  GarminLogo,
  SearchIcon,
  AccountIcon,
  CartIcon,
  ChevronRightIcon,
} from "@/components/icons";

export function SiteHeader() {
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
            {topNav.map((item, i) => (
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
          {openIndex !== null && topNav[openIndex]?.columns && (
            <div
              className="absolute inset-x-0 top-16 z-50 border-t border-neutral-200 bg-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)]"
              onMouseEnter={() => setOpenIndex(openIndex)}
            >
              <div className="mx-auto flex max-w-[1200px] gap-16 px-6 py-8">
                {topNav[openIndex]!.columns!.map((col, ci) => (
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

        {/* Right utility icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-1 text-black hover:text-[#007cc3]">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="p-1 text-black hover:text-[#007cc3]">
            <AccountIcon className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative p-1 text-black hover:text-[#007cc3]">
            <CartIcon className="h-5 w-5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          <ul className="space-y-3">
            {topNav.map((item) => (
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
