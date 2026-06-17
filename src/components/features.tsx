"use client";

import { useState } from "react";
import { Eyebrow } from "./eyebrow";
import { Reveal, SplitText } from "./reveal";

const features = [
  {
    title: "Brand setup & dynamic accent",
    body: "Set your wordmark, niche and accent color once. Wrap text in *asterisks* and that text picks up your accent across every slide and progress bar.",
  },
  {
    title: "Custom typography engine",
    body: "Pick from Editorial, Modern or Minimal type pairings — or upload your own .ttf / .otf / .woff and it loads instantly with FontFace.",
  },
  {
    title: "Logo editor",
    body: "Text only, logo only, or logo + text. Size from 16px to 80px and dial the opacity for a watermark feel.",
  },
  {
    title: "Client-side Gemini engine",
    body: "Paste your own Gemini key. The browser talks to Google directly — your key never touches our servers. Brainstorm 5 viral hooks or auto-generate the full deck from your images.",
  },
  {
    title: "Caption & SEO writer",
    body: "Drafts a single-paragraph caption with a hook, value line, tool mention and a DM trigger — plus up to 30 comma-separated SEO keywords, ready to copy.",
  },
  {
    title: "ZIP export",
    body: "Renders each slide with html-to-image, packs them as numbered PNGs and a caption_and_keywords.txt, then triggers a browser download named after your brand.",
  },
  {
    title: "Browser-safe drafts",
    body: "Autosaves to IndexedDB on tab close or refresh. Open the Draft History panel to name, preview, restore or delete past versions — all local.",
  },
  {
    title: "Suggested palette extractor",
    body: "Reads the tones of your uploaded slide image and suggests matching accent colors. One click applies them to the whole canvas.",
  },
];

function FeatureCard({ title, body }: { title: string; body: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
          active: true,
        });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      className="relative overflow-hidden border border-[#1F1E1B] rounded-sm bg-[#0F0F0E] p-7 h-full"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          background: `radial-gradient(380px circle at ${pos.x}% ${pos.y}%, rgba(200,169,126,0.13), transparent 60%)`,
        }}
      />
      <h3
        className="relative text-[#F5F3EF] mb-3"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "19px",
          letterSpacing: "-0.005em",
        }}
      >
        {title}
      </h3>
      <p
        className="relative text-[#B5B0A8]"
        style={{ fontSize: "14px", lineHeight: 1.7 }}
      >
        {body}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="border-b border-[#1F1E1B] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-[0.95fr_1.4fr] gap-12 lg:gap-20 mb-14">
            <div>
              <Eyebrow>FEATURES</Eyebrow>
              <h2
                className="mt-6 text-[#F5F3EF]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(30px, 3.4vw, 46px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.018em",
                }}
              >
                <SplitText text="Eight tools that " />
                <SplitText
                  text="do the work"
                  delay={0.3}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "#C8A97E",
                  }}
                />{" "}
                <SplitText text="for you." delay={0.55} />
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[#B5B0A8] max-w-md"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                Everything runs in your browser. No accounts, no servers, no
                hidden costs.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <FeatureCard title={f.title} body={f.body} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
