"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  GlobeIcon,
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/components/icons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "X", Icon: XIcon },
  { label: "YouTube", Icon: YouTubeIcon },
  { label: "Pinterest", Icon: PinterestIcon },
  { label: "Instagram", Icon: InstagramIcon },
];

export function SiteFooter() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <footer className="w-full bg-black text-white border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        {/* Locale + socials */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setLocale(locale === "en" ? "ru" : "en")}
            className="flex items-center gap-2 text-[13px] font-medium text-white transition-opacity hover:opacity-80 cursor-pointer"
            title={t.header.langSwitch}
          >
            <GlobeIcon className="h-4 w-4" />
            {t.footer.country} ({locale.toUpperCase()})
          </button>
          <div className="flex items-center gap-4">
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="text-white transition-opacity hover:opacity-70">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col items-center sm:items-end gap-1 text-[12px] text-neutral-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

