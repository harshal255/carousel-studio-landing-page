"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((m) => m.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import("react-responsive-masonry").then((m) => m.default),
  { ssr: false }
);
import { Eyebrow } from "./eyebrow";
import { Reveal, SplitText } from "./reveal";

import img3 from "../imports/image-3.png";
import img4 from "../imports/image-4.png";
import img5 from "../imports/image-5.png";
import img6 from "../imports/image-6.png";
import img7 from "../imports/image-7.png";
import img8 from "../imports/image-8.png";
import img9 from "../imports/image-9.png";
import img10 from "../imports/image-10.png";
import img11 from "../imports/image-11.png";
import img12 from "../imports/image-12.png";
import img13 from "../imports/image-13.png";

const getSrc = (item: any) => typeof item === "object" && item !== null && "src" in item ? item.src : item;

const posts = [img11, img4, img9, img6, img10, img12, img7, img8, img13, img3, img5];

export function Proof() {
  return (
    <section
      id="examples"
      className="border-b border-[#1F1E1B] py-24 lg:py-32 bg-[#0A0A09]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow>REAL POSTS</Eyebrow>
              <h2
                className="mt-6 text-[#F5F3EF]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(34px, 4.2vw, 56px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.022em",
                }}
              >
                <SplitText text="Carousels made with the studio, " />
                <SplitText
                  text="posted on Instagram."
                  delay={0.5}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "#C8A97E",
                  }}
                />
              </h2>
            </div>
            <p
              className="text-[#B5B0A8] max-w-sm"
              style={{ fontSize: "14px", lineHeight: 1.7 }}
            >
              These are live posts from @prompts.page — the likes, comments and
              saves are real. Tap any post to open it on Instagram.
            </p>
          </div>
        </Reveal>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}
        >
          <Masonry gutter="20px">
            {posts.map((src, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/prompts.page"
                target="_blank"
                rel="noreferrer"
                className="group relative block border border-[#1F1E1B] rounded-sm overflow-hidden bg-[#0F0F0E] hover:border-[#C8A97E]/40 transition-colors"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={getSrc(src)}
                  alt={`@prompts.page Instagram post ${i + 1}`}
                  className="block w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B0B0A]/0 group-hover:bg-[#0B0B0A]/15 transition-colors pointer-events-none" />
                <div
                  className="absolute top-3 right-3 text-[#C8A97E] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                  }}
                >
                  VIEW ON IG ↗
                </div>
              </motion.a>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#B5B0A8]">
            <a
              href="https://instagram.com/prompts.page"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#F5F3EF] border-b border-[#C8A97E]/40 hover:border-[#C8A97E] pb-0.5"
              style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
              Follow @prompts.page on Instagram →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
