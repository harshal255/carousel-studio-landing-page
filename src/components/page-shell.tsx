"use client";

import { useEffect, type ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="border-b border-[#1F1E1B]">
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-[#1F1E1B]">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1
              className="mt-6 text-[#F5F3EF]"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.022em",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-6 text-[#B5B0A8] max-w-2xl"
                style={{ fontSize: "16px", lineHeight: 1.7 }}
              >
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10">{children}</div>
      </section>
    </main>
  );
}

export function ProseBlock({
  number,
  heading,
  children,
}: {
  number?: string;
  heading?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 last:mb-0">
      {number && (
        <span
          className="text-[#C8A97E] mr-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.22em",
          }}
        >
          {number}
        </span>
      )}
      {heading && (
        <h2
          className="inline text-[#F5F3EF]"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "18px",
            letterSpacing: "-0.005em",
          }}
        >
          {heading}
        </h2>
      )}
      <div
        className="mt-3 text-[#D8D2C8] space-y-4"
        style={{ fontSize: "15px", lineHeight: 1.8 }}
      >
        {children}
      </div>
    </div>
  );
}
