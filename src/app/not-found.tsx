"use client";

import Link from "next/link";
import { Reveal } from "../components/reveal";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-32 px-6">
      <Reveal>
        <div className="text-center max-w-lg mx-auto">
          <div
            className="text-[#C8A97E]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(96px, 18vw, 160px)",
              lineHeight: 1,
              opacity: 0.25,
            }}
          >
            404
          </div>
          <h1
            className="mt-4 text-[#F5F3EF]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            This slide doesn't exist.
          </h1>
          <p
            className="mt-5 text-[#B5B0A8]"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            The page you're looking for was moved, deleted, or never existed.
            Head back to the studio.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C8A97E] text-[#0B0B0A] px-6 py-3 rounded-sm"
              style={{ fontSize: "12px", letterSpacing: "0.14em" }}
            >
              BACK HOME →
            </Link>
            <Link
              href="/faq"
              className="text-[#B5B0A8] hover:text-[#F5F3EF] border-b border-[#1F1E1B] hover:border-[#C8A97E]/40 pb-0.5 transition-colors"
              style={{ fontSize: "13px" }}
            >
              FAQ
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
