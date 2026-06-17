"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  duration?: number;
  onClick?: () => void;
  centerContent?: ReactNode;
}

export function CircularText({
  text,
  radius = 52,
  fontSize = 9,
  duration = 12,
  onClick,
  centerContent,
}: CircularTextProps) {
  const chars = Array.from(text);
  const angleStep = 360 / chars.length;
  const size = (radius + fontSize + 4) * 2;

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center justify-center rounded-full shrink-0"
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
      aria-label={text}
    >
      {/* rotating text ring */}
      <motion.svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {chars.map((char, i) => {
          const angle = (angleStep * i - 90) * (Math.PI / 180);
          const x = size / 2 + radius * Math.cos(angle);
          const y = size / 2 + radius * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#C8A97E"
              fontSize={fontSize}
              fontFamily="var(--font-mono)"
              letterSpacing="0"
              transform={`rotate(${angleStep * i}, ${x}, ${y})`}
            >
              {char}
            </text>
          );
        })}
      </motion.svg>

      {/* centre */}
      <div className="relative z-10 flex items-center justify-center size-14 rounded-full border border-[#C8A97E]/40 bg-[#141413] group-hover:bg-[#C8A97E]/10 group-hover:border-[#C8A97E] transition-colors">
        {centerContent ?? (
          <span className="text-[#C8A97E] text-lg leading-none">→</span>
        )}
      </div>
    </button>
  );
}
