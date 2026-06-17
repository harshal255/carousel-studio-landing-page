"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const len = text.length;
    let iteration = 0;
    const totalFrames = len * 4;

    function tick() {
      iteration++;
      const revealed = Math.floor(iteration / 4);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration < totalFrames) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    }

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [trigger, text]);

  return display;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  const text = typeof children === "string" ? children : "";
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const display = useScramble(text, triggered);

  useEffect(() => {
    if (!ref.current || !text) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [text]);

  return (
    <div
      ref={ref}
      className="inline-flex items-center gap-3 text-[#C8A97E]"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.22em",
      }}
    >
      <span className="h-px w-6 bg-[#C8A97E]/50" />
      <span>{text ? display : children}</span>
    </div>
  );
}
