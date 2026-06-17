"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionLinks: { label: string; hash?: string; route?: string }[] = [
  { label: "How it works", hash: "#how" },
  { label: "Examples", hash: "#examples" },
  { label: "Features", hash: "#features" },
  { label: "Story", hash: "#story" },
  { label: "FAQ", route: "/faq" },
];

// FlowingMenu link: gold fill slides up from bottom on hover, text inverts
function FlowLink({
  children,
  href,
  to,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  const inner = (
    <span
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex overflow-hidden py-1 cursor-pointer"
      style={{ fontSize: "13px" }}
    >
      {/* sliding gold fill */}
      <span
        className="absolute inset-x-0 bottom-0 bg-[#C8A97E] rounded-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: hovered ? "100%" : "0%" }}
      />
      {/* text — two layers stacked: base (sand) clips below fill, top (black) clips above */}
      <span className="relative z-10 flex flex-col" style={{ lineHeight: 1 }}>
        {/* visible text — inverts color when fill covers it via mix-blend */}
        <span
          className="transition-colors duration-200"
          style={{ color: hovered ? "#0B0B0A" : "#B5B0A8" }}
        >
          {children}
        </span>
      </span>
    </span>
  );

  if (to) return <Link href={to}>{inner}</Link>;
  return <a href={href}>{inner}</a>;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "bg-[#0B0B0A]/85 backdrop-blur-md border-[#1F1E1B]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 select-none">
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
          <span style={{ fontWeight: 700, letterSpacing: "-0.015em", fontSize: "16px" }}>
            AI Carousel Design
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {sectionLinks.map((l) => {
            if (l.route) {
              return (
                <FlowLink key={l.label} to={l.route}>
                  {l.label}
                </FlowLink>
              );
            }
            return (
              <FlowLink
                key={l.label}
                href={onHome ? l.hash : `/${l.hash}`}
              >
                {l.label}
              </FlowLink>
            );
          })}
        </nav>

        <a
          href={process.env.NEXT_PUBLIC_APP_URL || "https://app.aicarouseldesign.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#C8A97E] text-[#F5F3EF] hover:bg-[#C8A97E] hover:text-[#0B0B0A] transition-colors px-4 py-2 rounded-sm flex items-center justify-center"
          style={{ fontSize: "12px", letterSpacing: "0.1em" }}
        >
          OPEN EDITOR →
        </a>
      </div>
    </header>
  );
}
