"use client";

import { useState } from "react";
import { Eyebrow } from "./eyebrow";
import { AnimatedList, Reveal, SplitText } from "./reveal";

const items = [
  {
    q: "Is AI Carousel Design free?",
    a: "Yes — completely free, no watermark, no paywall. The editor is free to use. You bring your own Gemini API key for AI caption writing, which keeps the cost on Google's side and at zero for us. Export your slides as a clean ZIP with no branding added.",
  },
  {
    q: "Can AI create a carousel for Instagram?",
    a: "Yes. AI Carousel Design is a free AI carousel generator for Instagram. Paste your topic and images, click Generate, and Gemini writes the slide copy, hooks, and caption — including up to 30 SEO keywords — directly in your browser.",
  },
  {
    q: "Do carousels go viral on Instagram?",
    a: "Carousels consistently outperform single images in reach and saves. The swipe-through format keeps people on your post longer, which the algorithm rewards. Our hook brainstormer gives you five angles — shock, aspirational, curiosity, contrarian, and clean — to help you pick the one most likely to stop the scroll.",
  },
  {
    q: "How do I create a cool Instagram carousel?",
    a: "Start with a strong hook on slide one — a bold claim or an open loop that makes people swipe. Keep each slide to one idea. End with a clear CTA. AI Carousel Design handles the layout, crop, and copy automatically so you can focus on the idea, not the software.",
  },
  {
    q: "Can I create carousels for LinkedIn too?",
    a: "Yes. The studio exports standard 1:1 (square) and 4:5 (portrait) slides that work on both Instagram and LinkedIn. For LinkedIn, square format tends to perform best. Export the ZIP, upload each image as a PDF or image document post.",
  },
  {
    q: "What is the 5-3-1 rule on Instagram?",
    a: "The 5-3-1 rule is a posting rhythm: for every 5 value posts (tips, breakdowns, tutorials), post 3 engagement posts (polls, questions, relatable content), and 1 promotional post. AI Carousel Design is built for the value posts — prompt breakdowns and AI image tutorials are the format that gets saves.",
  },
  {
    q: "How can I get 20 carousels fast?",
    a: "Batch your drafts. AI Carousel Design lets you open multiple projects in the same session. Create a draft per topic — each one saves locally in your browser. Then generate the slide copy for all of them in one sitting. We typically prep a week's worth of posts in an hour.",
  },
  {
    q: "Is there a free carousel maker without a watermark?",
    a: "AI Carousel Design adds no watermark — ever. The exported ZIP contains clean PNG slides at full resolution. No logo badge, no 'made with' footer, nothing. Free, clean, yours.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up. Your drafts are saved inside your browser using IndexedDB, not on any server.",
  },
  {
    q: "Where are my files stored?",
    a: "Everything stays on your device. Clear your browser data and the drafts go with it — we never see them.",
  },
  {
    q: "Can I use my own fonts?",
    a: "Yes. Upload a .ttf, .otf, .woff or .woff2 file and the editor loads it instantly using the browser's FontFace API. No installs, no waiting.",
  },
  {
    q: "How is AI Carousel Design different from Canva?",
    a: "Canva is a general-purpose design tool. AI Carousel Design is purpose-built for prompt-style breakdown carousels — the kind that show how an AI image was made. The layout is locked for that format, the AI writes the actual slide content (not just stock text), and it exports clean slides with no subscription required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-[#1F1E1B] py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[0.6fr_1fr] gap-10 lg:gap-20 items-start">
          <Reveal>
            <Eyebrow>QUESTIONS</Eyebrow>
            <h2
              className="mt-6 text-[#F5F3EF]"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(30px, 3.5vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              <SplitText text="The short " />
              <SplitText
                text="answers."
                delay={0.3}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "#C8A97E",
                }}
              />
            </h2>
          </Reveal>

          <AnimatedList className="border-t border-[#1F1E1B]">
            {items.map((it, i) => {
              const active = open === i;
              return (
                <div key={i} className="border-b border-[#1F1E1B]">
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="w-full text-left flex items-baseline gap-5 py-6 group"
                  >
                    <span
                      className="flex-1 text-[#F5F3EF] group-hover:text-[#C8A97E] transition-colors"
                      style={{ fontSize: "18px", fontWeight: 400 }}
                    >
                      {it.q}
                    </span>
                    <span
                      className="text-[#C8A97E] transition-transform"
                      style={{
                        transform: active ? "rotate(45deg)" : "rotate(0deg)",
                        fontSize: "20px",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: active ? 400 : 0,
                      opacity: active ? 1 : 0,
                    }}
                  >
                    <p
                      className="pb-6 pr-8 text-[#B5B0A8]"
                      style={{ fontSize: "14.5px", lineHeight: 1.75 }}
                    >
                      {it.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
