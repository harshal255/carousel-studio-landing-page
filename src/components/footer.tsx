"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const cols: { h: string; l: { label: string; to: string; external?: boolean }[] }[] = [
  {
    h: "Product",
    l: [
      { label: "Open editor", to: "#" },
      { label: "How it works", to: "/#how" },
      { label: "Features", to: "/#features" },
    ],
  },
  {
    h: "Learn",
    l: [
      { label: "Examples", to: "/#examples" },
      { label: "Story", to: "/#story" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    h: "Company",
    l: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-[#C8A97E] shrink-0"
              >
                <rect x="2" y="7" width="10" height="12" rx="1.5" strokeOpacity="0.35" />
                <rect x="6" y="5" width="10" height="12" rx="1.5" strokeOpacity="0.65" />
                <rect x="10" y="3" width="10" height="12" rx="1.5" />
                <path
                  d="M15 6.5Q15 9 17.5 9Q15 9 15 11.5Q15 9 12.5 9Q15 9 15 6.5z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <div style={{ fontWeight: 700, fontSize: "16px" }}>AI Carousel Design</div>
            </div>
            <p
              className="mt-4 text-[#B5B0A8] max-w-sm"
              style={{ fontSize: "14px", lineHeight: 1.7 }}
            >
              A free, browser-based AI carousel editor. Create premium Instagram carousel posts locally on your device. Made in Ahmedabad, India.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.h}>
              <div
                className="text-[#C8A97E] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                }}
              >
                {col.h.toUpperCase()}
              </div>
              <ul className="space-y-2.5">
                {col.l.map((i) => {
                  const isHash = i.to.startsWith("/#") || i.to === "#";
                  const onHome = pathname === "/";

                  if (isHash && onHome) {
                    const hash = i.to === "#" ? "#" : i.to.replace("/", "");
                    return (
                      <li key={i.label}>
                        <a
                          href={hash}
                          className="text-[#B5B0A8] hover:text-[#F5F3EF]"
                          style={{ fontSize: "14px" }}
                        >
                          {i.label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={i.label}>
                      <Link
                        href={i.to}
                        className="text-[#B5B0A8] hover:text-[#F5F3EF]"
                        style={{ fontSize: "14px" }}
                      >
                        {i.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t border-[#1F1E1B] pt-6 flex flex-wrap items-center justify-between gap-4 text-[#B5B0A8]/70"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.18em",
          }}
        >
          <div>© 2026 AICAROUSELDESIGN.COM — ALL RIGHTS RESERVED</div>
          <div>AHMEDABAD, INDIA</div>
        </div>
      </div>
    </footer>
  );
}
