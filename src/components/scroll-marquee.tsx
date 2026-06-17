"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "motion/react";

interface ScrollMarqueeProps {
  items: string[];
  /** pixels per second base scroll speed */
  baseVelocity?: number;
  className?: string;
}

export function ScrollMarquee({
  items,
  baseVelocity = 60,
  className = "",
}: ScrollMarqueeProps) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyWidthRef = useRef(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300,
  });
  // boost goes 0 → 1.5 with scroll speed, never negative, never stops the base motion
  const boost = useTransform(smoothVelocity, (v) =>
    Math.min(1.5, Math.abs(v) / 800)
  );

  useAnimationFrame((_t, delta) => {
    const track = trackRef.current;
    if (!track) return;
    // measure one copy = total width / number of copies (4)
    if (!copyWidthRef.current) {
      copyWidthRef.current = track.scrollWidth / 4;
    }
    const moveBy = baseVelocity * (1 + boost.get()) * (delta / 1000);
    let next = x.get() - moveBy;
    if (next <= -copyWidthRef.current) next += copyWidthRef.current;
    x.set(next);
  });

  const copies = Array.from({ length: 4 });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div ref={trackRef} className="flex whitespace-nowrap w-max" style={{ x }}>
        {copies.map((_, copyIdx) => (
          <div key={copyIdx} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={`${copyIdx}-${i}`} className="flex items-center">
                <span
                  className="px-8 text-[#F5F3EF]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "clamp(36px, 5vw, 64px)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {item}
                </span>
                <span
                  className="text-[#C8A97E]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 5vw, 64px)",
                  }}
                >
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
