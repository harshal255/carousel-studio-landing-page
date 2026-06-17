"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { BlurWords, Reveal } from "./reveal";
import { DotGrid } from "./dot-grid";
import { BorderGlow } from "./border-glow";

import s1 from "../imports/slide_01.png";
import s2 from "../imports/slide_02.png";
import s3 from "../imports/slide_03.png";
import s4 from "../imports/slide_04.png";
import s5 from "../imports/slide_05.png";
import s6 from "../imports/slide_06.png";
import s7 from "../imports/slide_07.png";
import s8 from "../imports/slide_08.png";
import s9 from "../imports/slide_09.png";

const getSrc = (item: any) => typeof item === "object" && item !== null && "src" in item ? item.src : item;

const slides = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative border-b border-[#1F1E1B] overflow-hidden">
      <DotGrid className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0A] pointer-events-none" />
      <div
        className="absolute -top-40 -right-40 size-[600px] rounded-full opacity-[0.18] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C26D4D, transparent 65%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-24">
        {/* Headline block (centered) */}
        <div className="max-w-[920px] mx-auto text-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 text-[#C8A97E] mb-7"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.22em",
              }}
            >
              <span className="size-1.5 rounded-full bg-[#C8A97E]" />
              AI CAROUSEL DESIGN — AICAROUSELDESIGN.COM
            </div>
          </Reveal>

          <h1
            className="text-[#F5F3EF]"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(42px, 5.6vw, 76px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
            }}
          >
            <BlurWords text="Make Instagram carousels that" />
            <br className="hidden md:inline" />{" "}
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#C8A97E",
              }}
            >
              <BlurWords text="people actually stop" stagger={0.08} />
            </span>{" "}
            <BlurWords text="scrolling." />
          </h1>

          <Reveal delay={0.3}>
            <p
              className="mt-7 mx-auto max-w-[600px] text-[#B5B0A8]"
              style={{ fontSize: "17px", lineHeight: 1.65 }}
            >
              A simple web app for designing prompt-style carousels. Type your
              idea, pick a layout, drop in your AI images, and export a clean
              set of slides ready to post.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
              <BorderGlow>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-2 bg-[#C8A97E] text-[#0B0B0A] px-7 py-3.5 rounded-sm overflow-hidden"
                  style={{ fontSize: "13px", letterSpacing: "0.14em" }}
                >
                  <span className="relative z-10">START FOR FREE</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                      backgroundSize: "250% 100%",
                      animation: "shineMove 1.6s linear infinite",
                    }}
                  />
                </motion.button>
              </BorderGlow>
              <a
                href="#examples"
                className="text-[#F5F3EF] border-b border-[#C8A97E]/40 hover:border-[#C8A97E] pb-0.5"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
              >
                See real examples
              </a>
            </div>
          </Reveal>
        </div>

        {/* Sample carousel deck (the actual 9 slides) */}
        <Reveal delay={0.55}>
          <div className="mt-20 lg:mt-24 relative">
            <div className="flex items-end justify-between mb-5 px-1">
              <div
                className="text-[#C8A97E]"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                }}
              >
                SAMPLE DECK — SWIPE TO SEE ALL {slides.length} SLIDES
              </div>
              <div
                className="text-[#B5B0A8]/70"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                }}
              >
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-5 py-2">
                  {slides.map((src, i) => {
                    const active = i === selected;
                    return (
                      <motion.div
                        key={i}
                        className="shrink-0 basis-[78%] sm:basis-[44%] md:basis-[32%] lg:basis-[24%] rounded-sm overflow-hidden border border-[#1F1E1B] bg-[#0F0F0E]"
                        animate={{
                          scale: active ? 1 : 0.93,
                          opacity: active ? 1 : 0.55,
                          y: active ? -6 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img
                          src={getSrc(src)}
                          alt={`Carousel slide ${i + 1}`}
                          className="block w-full h-auto"
                          loading={i < 3 ? "eager" : "lazy"}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* arrows */}
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-11 items-center justify-center rounded-full border border-[#2A2824] bg-[#0B0B0A]/80 backdrop-blur text-[#F5F3EF] hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
              >
                ←
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-11 items-center justify-center rounded-full border border-[#2A2824] bg-[#0B0B0A]/80 backdrop-blur text-[#F5F3EF] hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
              >
                →
              </button>
            </div>

            {/* dot rail */}
            <div className="mt-6 flex items-center justify-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: i === selected ? 28 : 8,
                    background:
                      i === selected ? "#C8A97E" : "rgba(245,243,239,0.18)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
