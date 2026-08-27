"use client";

import { ChevronRightIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

/** Section 14 — Sign up for News (white section). */
export function MarqSignup() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white px-6 py-20 text-center">
      <h2 className="g-heading text-[26px] tracking-[0.02em] text-neutral-800 md:text-[30px]">
        {t.signup.heading}
      </h2>
      <form
        className="mx-auto mt-8 flex max-w-[420px] items-stretch"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder={t.signup.placeholder}
          className="h-11 w-full border border-neutral-300 px-4 text-[14px] text-neutral-800 outline-none focus:border-neutral-500"
        />
        <button
          type="submit"
          aria-label={t.signup.submit}
          className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white transition-colors hover:bg-neutral-800 cursor-pointer"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </form>
      <p className="mx-auto mt-4 max-w-[520px] text-[12px] leading-relaxed text-neutral-500">
        {t.signup.infoText}{" "}
        <a href="#" className="underline hover:text-neutral-700">
          {t.signup.privacyLink}
        </a>
      </p>
    </section>
  );
}
