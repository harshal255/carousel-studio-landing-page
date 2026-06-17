"use client";

import { motion } from "motion/react";
import { Eyebrow } from "./eyebrow";
import { Reveal, SplitText } from "./reveal";

import img0 from "../imports/image.png";
import img14 from "../imports/image-14.png";
import img15 from "../imports/image-15.png";

const screens = [
  {
    label: "01 / Dashboard",
    src: img0,
    caption:
      "Start a new portrait or square deck, or open a saved draft. Recent projects sit one click away.",
  },
  {
    label: "02 / Brand & swipe preview",
    src: img14,
    caption:
      "Set your wordmark, niche, and accent color once. Every slide picks it up automatically — including the progress bar and any text wrapped in *asterisks*. Scrub the whole deck side-by-side, the way Instagram shows it.",
  },
  {
    label: "03 / Slide editor",
    src: img15,
    caption:
      "Zoom into a single slide. The right rail gives you typography, sizing, padding, and color controls. The left rail handles brand, prompt, and style.",
  },
];

const getSrc = (item: any) => typeof item === "object" && item !== null && "src" in item ? item.src : item;

function Screen({
  label,
  src,
  caption,
  i,
}: {
  label: string;
  src: any;
  caption: string;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-[0.32fr_1fr] gap-8 lg:gap-12 items-start"
    >
      <div className="lg:sticky lg:top-28 lg:py-8">
        <div
          className="text-[#C8A97E] mb-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.24em",
          }}
        >
          {label.toUpperCase()}
        </div>
        <p
          className="text-[#B5B0A8]"
          style={{ fontSize: "15px", lineHeight: 1.75 }}
        >
          {caption}
        </p>
      </div>

      <div className="relative rounded-sm overflow-hidden bg-[#0F0F0E] border border-[#1F1E1B]">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1F1E1B] bg-[#141413]">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-[#2A2824]" />
            <span className="size-2 rounded-full bg-[#2A2824]" />
            <span className="size-2 rounded-full bg-[#2A2824]" />
          </div>
          <div
            className="flex-1 text-[#B5B0A8]/60 text-center"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.18em",
            }}
          >
            {process.env.NEXT_PUBLIC_APP_DOMAIN ? `app.${process.env.NEXT_PUBLIC_APP_DOMAIN}` : "app.aicarouseldesign.com"}
          </div>
          <span
            className="text-[#C8A97E]/70"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.22em",
            }}
          >
            0{i + 1}
          </span>
        </div>
        <div className="bg-[#0B0B0A] p-4 sm:p-6">
          <img
            src={getSrc(src)}
            alt={`AI Carousel Design ${label}`}
            className="block w-full h-auto rounded-sm border border-[#1F1E1B]"
            loading={i < 2 ? "eager" : "lazy"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function EditorShowcase() {
  return (
    <section className="border-b border-[#1F1E1B] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <Eyebrow>INSIDE THE APP</Eyebrow>
              <h2
                className="mt-6 text-[#F5F3EF] max-w-[720px]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.02em",
                }}
              >
                <SplitText text="Every screen of the editor — " />
                <SplitText
                  text="no demo,"
                  delay={0.35}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "#C8A97E",
                  }}
                />{" "}
                <SplitText text="no marketing render." delay={0.55} />
              </h2>
            </div>
            <p
              className="text-[#B5B0A8] max-w-sm"
              style={{ fontSize: "14px", lineHeight: 1.7 }}
            >
              The three screens we use every day to ship posts for
              @prompts.page. Scroll through them in order.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20 lg:space-y-28">
          {screens.map((s, i) => (
            <Screen key={s.label} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
